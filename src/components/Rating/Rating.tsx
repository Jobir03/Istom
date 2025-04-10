"use client"

import { useState } from 'react';
import { Star } from 'lucide-react';
import ProfileImg from '@/assets/images/profile image.png';

export default function ReviewsComponent() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const reviews = [
    {
      id: 1,
      author: "Александр",
      text: "Я в целом очень доволен. Наконечник стал отличным дополнением к моему оборудованию и значительно повысил эффективность моей работы. Рекомендую коллегам, ищущим надежный и производительный инструмент для стоматологии!",
      rating: 5,
      date: "Вчера, 12:18"
    },
    {
      id: 2,
      author: "Александр",
      text: "Я в целом очень доволен. Наконечник стал отличным дополнением к моему оборудованию и значительно повысил эффективность моей работы. Рекомендую коллегам, ищущим надежный и производительный инструмент для стоматологии!",
      rating: 5,
      date: "Вчера, 12:18"
    },
    {
      id: 3,
      author: "Александр",
      text: "Я в целом очень доволен. Наконечник стал отличным дополнением к моему оборудованию и значительно повысил эффективность моей работы. Рекомендую коллегам, ищущим надежный и производительный инструмент для стоматологии!",
      rating: 5,
      date: "Вчера, 12:18"
    }
  ];

  const overallRating = 4.8;
  const totalReviews = 112;

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm font-aeonic">
      <div className="flex flex-col sm:flex-row sm:items-center mb-6">
        <h2 className="text-2xl md:text-[30px] font-cygre font-bold mb-2 sm:mb-0 sm:mr-4">Все отзывы</h2>
        <div className="flex items-center">
          <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow" />
          <span className="ml-1 text-sm md:text-[15px] font-medium">{overallRating} / <span className="text-gray-500 text-sm md:text-[15px]">{totalReviews} оценок</span></span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6">
            <div className="flex items-start">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full mr-3 md:mr-4 flex-shrink-0">
                <img src={ProfileImg.src} alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-bold text-lg md:text-[20px] text-black">{review.author}</h3>
                  <div className="flex items-center mt-1 sm:mt-0">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star}
                          className={`w-4 h-4 md:w-5 md:h-5 ${star <= review.rating ? "fill-yellow-400 text-yellow" : "text-gray-300"}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs md:text-sm text-gray-500 ml-2 md:ml-5">{review.date}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm md:text-[17px] break-words">{review.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-[18px] md:text-xl font-bold mb-4">Оставить отзыв</h3>
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star}
              className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${
                (hoverRating || rating) >= star ? "fill-yellow text-yellow" : "text-gray-500"
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            />
          ))}
        </div>
        <textarea 
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-24 md:h-32"
          placeholder="Оставьте свой комментарий"
        />
        <button className="w-full md:w-auto bg-gray-400 text-white py-3 px-9 md:py-4 md:px-20 rounded-sm hover:bg-gray-500 transition">
          Отправить
        </button>
      </div>
    </div>
  );
}