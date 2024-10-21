import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text = "Learn More",
  onClick,
}) => {
  return (
    <div className="mt-8 text-center lg:text-left">
      <button
        className="bg-blue-600 font-bold text-white p-4 rounded-xl hover:bg-blue-700 transition duration-300"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
