import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  content: string[];
  imageUrl: string;
  isEmail: boolean;
}

const Card = ({ title, content, imageUrl, isEmail }: CardProps) => {
  const email = content[0];

  const openEmailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-60 md:w-80 h-67 md:h-82 rounded overflow-hidden shadow-lg text-center border-solid border-2 gray-300 bg-white">
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt="logo"
            width={100}
            height={100}
            className="mx-auto pt-6 pb-2"
          />
        </div>

        <div className="px-6 py-5">
          <div className="font-bold text-xl mb-2 pb-2">{title}</div>
          {content.map((contentData, index) => (
            <p
              key={index}
              className="text-gray-700 text-base pb-2"
              onClick={isEmail ? openEmailClient : undefined}
              style={isEmail ? { cursor: "pointer", fontWeight: "normal", transition: "font-weight 0.3s" } : {}}
            >
              {contentData}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
