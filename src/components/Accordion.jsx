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
  return (
    <div className="accordion">
      {data.map((item) => (
        <div className="accordion-item">
          <div className="accordion-item__header">{item.title}</div>
          <div className="accordion-item__content">{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
