import React from "react";
import FaqItem from "../faq-item/faq-item.component";

export default function Faq() {
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <FaqItem
          question="Hoe werkt het?"
          answer="Dit is wat info"
          itemNumber="One"
        />
        <FaqItem
          question="Hoe werkt het?"
          answer="Dit is wat info"
          itemNumber="Two"
        />
        <FaqItem
          question="Hoe werkt het?"
          answer="Dit is wat info"
          itemNumber="Three"
        />
      </div>
    </div>
  );
}
