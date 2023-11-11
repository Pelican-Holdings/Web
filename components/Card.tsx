import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  content: string[];
  imageUrl: string;
}

const Card = ({ title, content, imageUrl }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center border-solid border-2 gray-300">
      {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
      <div className="flex justify-center">
        <Image
          src="https://res.cloudinary.com/midefulness/image/upload/v1699297508/Pelican%20Holdings/3030953-scaled_lbs21l.jpg"
          alt="logo"
          width={48}
          height={48}
          className="mx-auto pt-3"
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {content.map((contentData, index) => (
          <p key={index} className="text-gray-700 text-base">
            {contentData}
          </p>
        ))}
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> */}
    </div>
  );
};

export default Card;
