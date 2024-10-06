export const Button = ({ text, textColor, bgColor, onClickFunc }) => {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      className="text-white font-semibold px-5 py-2 rounded-lg transition-shadow active:shadow-md active:scale-95"
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
};
