from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import torch
import torch.nn.functional as F
from torchvision import models, transforms
from PIL import Image
import io

app = FastAPI()

# 1. Cấu hình CORS để cho phép React (chạy ở localhost:3000) gọi API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Trong thực tế nên đổi thành ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. Khai báo danh sách các class của bạn (Thay đổi theo dataset thực tế của bạn)
CLASS_NAMES = ['Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 4'] 

# 3. Load Models (Giả sử bạn dùng pretrained và thay đổi lớp Linear cuối)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
num_classes = len(CLASS_NAMES)

# Setup ResNet
resnet_model = models.resnet50()
resnet_model.fc = torch.nn.Linear(resnet_model.fc.in_features, num_classes)
# resnet_model.load_state_dict(torch.load('resnet_model.pth', map_location=device))
resnet_model.to(device)
resnet_model.eval()

# Setup ViT
vit_model = models.vit_b_16()
vit_model.heads.head = torch.nn.Linear(vit_model.heads.head.in_features, num_classes)
# vit_model.load_state_dict(torch.load('vit_model.pth', map_location=device))
vit_model.to(device)
vit_model.eval()

# 4. Tiền xử lý ảnh (Giống hệt các bước transform lúc bạn Test trong Notebook)
preprocess = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

# 5. API Endpoint nhận ảnh và trả về kết quả
@app.post("/predict")
async def predict(file: UploadFile = File(...), model_type: str = Form(...)):
    # Đọc file ảnh từ Frontend gửi lên
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    
    # Tiền xử lý ảnh
    input_tensor = preprocess(image).unsqueeze(0).to(device)
    
    # Suy luận (Inference)
    with torch.no_grad():
        if model_type == 'resnet':
            outputs = resnet_model(input_tensor)
        else:
            outputs = vit_model(input_tensor)
            
        # Tính xác suất bằng Softmax
        probabilities = F.softmax(outputs, dim=1)[0]
    
    # Lấy Top 4 class có xác suất cao nhất
    top4_prob, top4_catid = torch.topk(probabilities, 4)
    
    # Định dạng kết quả để trả về cho React
    results = []
    for i in range(top4_prob.size(0)):
        results.append({
            "label": CLASS_NAMES[top4_catid[i].item()],
            "score": round(top4_prob[i].item() * 100, 1) # Đổi thành % (vd: 95.5)
        })
        
    return {"success": True, "predictions": results}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)