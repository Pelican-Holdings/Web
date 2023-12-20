"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  value?: string;
};

const Button = ({ type, title, icon, variant, full, value }: ButtonProps) => {
  const router = useRouter();

  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
      onClick={() => router.push(value ? value : "")}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
