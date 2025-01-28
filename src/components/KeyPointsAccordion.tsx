import React from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface KeyPointsAccordionProps {
  items: AccordionItem[];
}

const KeyPointsAccordion = ({ items }: KeyPointsAccordionProps) => {
  return (
    <div className="accordion">
      {items.map((item) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#panelsStayOpen-${item.id}`}
              aria-expanded="false"
              aria-controls={`panelsStayOpen-${item.id}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`panelsStayOpen-${item.id}`}
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyPointsAccordion;