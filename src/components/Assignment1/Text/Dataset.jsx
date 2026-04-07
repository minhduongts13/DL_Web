import React from 'react';
import text_frequency_label from '../../../assets/Assignment1/text/text_frequency_label.png';
import text_character_length from '../../../assets/Assignment1/text/text_character_length.png'
import text_word_length from '../../../assets/Assignment1/text/text_word_length.png'
import stopword from '../../../assets/Assignment1/text/stopwords.png'
import tf_idf_one from '../../../assets/Assignment1/text/tf_idf_one.png'
import tf_idf_two from '../../../assets/Assignment1/text/tf_idf_two.png'
import similarity from '../../../assets/Assignment1/text/cosine_similarity.png'


const dataset = [
    { name: 'Training', number: 16000, min_char: 7, avg_char: 96.85, max_char: 300, min_words: 2, avg_words: 19.18, max_words: 66 },
    { name: 'Validation', number: 2000, min_char: 11, avg_char: 95.35, max_char: 295, min_words: 2, avg_words: 18.88, max_words: 61},
    { name: 'Test', number: 2000, min_char: 14, avg_char: 96.59, max_char: 296, min_words: 3, avg_words: 19.16, max_words: 61}
]


const charFields = ["min_char", "avg_char", "max_char"];
const wordFields = ["min_words", "avg_words", "max_words"];

function DataTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        
        {/* Header */}
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th rowSpan={2} className="px-4 py-2 border">Bộ dữ liệu</th>
            <th rowSpan={2} className="px-4 py-2 border">Số mẫu</th>
            <th colSpan={3} className="px-4 py-2 border text-center">Ký tự</th>
            <th colSpan={3} className="px-4 py-2 border text-center">Từ</th>
          </tr>
          <tr>
            <th className="px-4 py-2 border">Min</th>
            <th className="px-4 py-2 border">Avg</th>
            <th className="px-4 py-2 border">Max</th>
            <th className="px-4 py-2 border">Min</th>
            <th className="px-4 py-2 border">Avg</th>
            <th className="px-4 py-2 border">Max</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {dataset.map((item, index) => (
            <tr
              key={index}
              className="text-center hover:bg-gray-50 transition"
            >
              <td className="px-4 py-2 border font-medium">{item.name}</td>
              <td className="px-4 py-2 border">{item.number}</td>

              {/* Character */}
              {charFields.map((field) => (
                <td key={field} className="px-4 py-2 border">
                  {item[field]}
                </td>
              ))}

              {/* Words */}
              {wordFields.map((field) => (
                <td key={field} className="px-4 py-2 border">
                  {item[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


const InfoCard = ({title, value}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-gray-500 text-sm">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

const InfoBoxesStopword = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 w-full max-w-5xl">
        
        <InfoCard 
          title="Số stopword có trong training data"
          value="148"
        />
        
        <InfoCard 
          title="Số stopword trong toàn bộ training data"
          value="157,168"
        />
        
        <InfoCard 
          title="Tỉ lệ stopword so với tổng cộng trong training data"
          value="51.23%"
        />
      </div>
    </div>
  );
}

function VocabTable() {
  const data = [
    { name: "Sadness", num_of_words: 6867, total_num: 40701, TTR: 0.169 },
    { name: "Joy", num_of_words: 8500, total_num: 49504, TTR: 0.172 },
    { name: "Love", num_of_words: 3698, total_num: 12554, TTR: 0.295 },
    { name: "Anger", num_of_words: 4671, total_num: 19440, TTR: 0.240 },
    { name: "Fear", num_of_words: 4254, total_num: 17317, TTR: 0.246 },
    { name: "Surprise", num_of_words: 2041, total_num: 5419, TTR: 0.377 },
];

  return (
    <div className="p-6">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-center px-4 py-2 border-b">Cảm xúc</th>
            <th className="text-center px-4 py-2 border-b">Số từ được dùng</th>
            <th className="text-center px-4 py-2 border-b">Tổng số từ</th>
            <th className="text-center px-4 py-2 border-b">Tỷ lệ Type-Token-Ratio</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">{item.num_of_words}</td>
              <td className="px-4 py-2 border-b">{item.total_num}</td>
              <td className="px-4 py-2 border-b">{item.TTR.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const A1Dataset = () => {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-6 shadow-sm border border-slate-100 mt-2 animate-fade-in space-y-2">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Tổng quan Dữ liệu <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Dataset</span>
                </h3>
            </div>
            
            {/* PHẦN TRÊN: Text & Tags (Trải dài toàn màn hình) */}
            <div className="mb-10 space-y-6">
                <p className="text-slate-700 leading-relaxed text-lg max-w-4xl">
                    Bộ dữ liệu gồm các bài Tweet tiếng Anh với sáu loại cảm xúc khác nhau. Bộ dữ liệu được thu thập dựa trên các hashtag của 
                    Twitter và đã được tiền xử lý bởi tác giả.
                </p>

            </div>

            <div>
                {DataTable()}
                <div className='italic'>
                    Một số thông tin cơ bản của bộ dữ liệu
                </div>
            </div>

            {/* PHẦN DƯỚI: Khung chứa ảnh tràn viền (Full width) */}
            <div className="flex flex-col items-center w-full">
                {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                <img 
                    src={text_frequency_label} 
                    alt="Biểu đồ phân bố nhãn dữ liệu trên ba tập" 
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                />
                <div className='italic'>
                    Tần suất nhãn trên các tập dữ liệu
                </div>
            </div>
            <div className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                <span className="font-bold text-indigo-700 mr-2">Nhận xét:</span>
                <p>Có sự bất cân bằng giữa các lớp trong tập dữ liệu</p>
            </div>

            <div className="flex flex-col items-center w-full">
                {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                <img 
                    src={text_character_length} 
                    alt="Phân phối độ dài các câu văn theo số chữ" 
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                />
                <div>
                    Phân phối độ dài các câu văn theo số chữ
                </div>
            </div>

            <div className="flex flex-col items-center w-full">
                {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                <img 
                    src={text_word_length} 
                    alt="Phân phối độ dài các câu văn theo số từ" 
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                />
                <div>
                    Phân phối độ dài các câu văn theo số từ
                </div>
            </div>

            <div className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                <span className="font-bold text-indigo-700 mr-2">Nhận xét:</span>
                <p>Các câu văn có độ dài không quá 300 chữ cái, 60 từ, hầu hết tập
                    trung ở mức ngắn hoặc trung bình (dưới 200 chữ, 40 từ)</p>
            </div>

            <div>
                {InfoBoxesStopword()}
                <div className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                    <span className="font-bold text-indigo-700 mr-2">Nhận xét:</span>
                    <p>Tỉ lệ hợp lý đối với bộ dữ liệu</p>
                </div>
            </div>

            <div className="flex flex-col items-center w-full">
                {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                <img 
                    src={stopword} 
                    alt="Các stopword phổ biến trong tập training data" 
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                />
                <div>
                    Các stopword phổ biến trong tập training data
                </div>
            </div>

            <div>
                {VocabTable()}
                <div>Bảng tóm tắt về độ phong phú từ vựng trong các lớp (đã loại bỏ các stopword)</div>

                <div className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                    <span className="font-bold text-indigo-700 mr-2">Nhận xét:</span>
                    <p>Các lớp ít mẫu hơn thể hiện sự phong phú về từ vựng rõ ràng hơn</p>
                </div>
            </div>
        
            <div className="flex flex-col items-center w-full">
                {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                <img 
                    src={tf_idf_one} 
                    alt="Các từ có giá trị tf-idf cao đối với từng lớp" 
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                />
                <div>
                    Các từ có giá trị TF-IDF cao trong từng nhãn
                </div>
            </div>

            <div className="flex flex-col items-center w-full">
                {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                <img 
                    src={tf_idf_two} 
                    alt="Các cụm từ (bi-gram) có giá trị tf-idf cao đối với từng lớp" 
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                />
                <div>
                    Các cụm từ (bi-gram) có giá trị TF-IDF cao trong từng nhãn
                </div>
            </div>

            <div className="flex flex-col items-center w-full">
                {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                <img 
                    src={similarity} 
                    alt="Độ tương đồng của các lớp với nhau (theo khoảng cách cosine)" 
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                />
                <div>
                    Độ tương đồng của các lớp với nhau (theo khoảng cách cosine)
                </div>
                <div className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                    <span className="font-bold text-indigo-700 mr-2">Nhận xét:</span>
                    <p>Các lớp không có tương đồng nhiều, cho nên dễ dự đoán</p>
                </div>

            </div>


        </div>

        
        
    );
};

export default A1Dataset;