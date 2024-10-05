export const AccordionItem = ({index, title, description, isOpen, onClickFunc }) => {
  return (
    <article
      className="bg-red-300 p-3 rounded-md cursor-pointer"
      onClick={() => onClickFunc(index)}
    >
      <h1>{title}</h1>
      {isOpen ? <p className="mt-3">{description}</p> : ""}
    </article>
  );
};
