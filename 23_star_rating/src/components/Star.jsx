export const Star = ({ index, state, onHoverFunc, onHoverEndFunc, onClickFunc }) => {
  return (
    <div
      onMouseEnter={onHoverFunc}
      onMouseLeave={onHoverEndFunc}
      onClick={onClickFunc}
      alt="star"
      className="w-16 h-16 hover:cursor-pointer"
      style={{
        clipPath:
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        backgroundColor: state ? "yellow" : "white",
      }}
    />
  );
};
