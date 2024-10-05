import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export const Accordion = ({ isMultipleOpening }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState([]);

  //handle Accordion Opening accoriding to isMultipleOpening
  function handleAccordionOpening(index) {
    if (isMultipleOpening) {
      setOpenAccordionIndex((prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index)
          : [...prevIndexes, index]
      );
    } else {
      setOpenAccordionIndex(openAccordionIndex.includes(index) ? [] : [index]);
    }
  }

  return (
    <div className="max-w-[30rem] bg-gray-200 rounded-md p-3 flex flex-col gap-5">
      {[
        {
          title: "Accordion Title 1",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, incidunt earum? Aliquid aliquam repellendus eaque nostrum eius ea quibusdam veritatis.",
        },
        {
          title: "Accordion Title 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, incidunt earum? Aliquid aliquam repellendus eaque nostrum eius ea quibusdam veritatis.",
        },
        {
          title: "Accordion Title 3",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, incidunt earum? Aliquid aliquam repellendus eaque nostrum eius ea quibusdam veritatis.",
        },
        {
          title: "Accordion Title 4",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, incidunt earum? Aliquid aliquam repellendus eaque nostrum eius ea quibusdam veritatis.",
        },
      ].map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          description={item.desc}
          isOpen={openAccordionIndex.includes(index)}
          onClickFunc={handleAccordionOpening}
        />
      ))}
    </div>
  );
};
