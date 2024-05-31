import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque vel consectetur dolor, temporibus iste velit mollitia molestiae non ducimus asperiores minus! Reiciendis tenetur aspernatur ullam, explicabo deleniti optio? Sapiente!",
  },
  {
    id: 2,
    title: "Accordion two",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque vel consectetur dolor, temporibus iste velit mollitia molestiae non ducimus asperiores minus! Reiciendis tenetur aspernatur ullam, explicabo deleniti optio? Sapiente!",
  },
  {
    id: 3,
    title: "Accordion three",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque vel consectetur dolor, temporibus iste velit mollitia molestiae non ducimus asperiores minus! Reiciendis tenetur aspernatur ullam, explicabo deleniti optio? Sapiente!",
  },
];

function Accordion() {
  const [Open, setOpen] = useState(null); //save accordion id 1,2,3,...
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} setOpen={setOpen} open={Open}/>
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item,setOpen,open }) {
const isOpen=item.id===open ;
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setOpen(item.id)}
      >
        <div>{item.title}</div>
        <ChevronDownIcon
        className="accordion-item__chevron"
          // style={{
          //   width: "1.2rem",
          //   transition: "all 0.2s ease-out",
          //   rotate: isOpen ? "180deg" : "0deg",
          // }}
        />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}
