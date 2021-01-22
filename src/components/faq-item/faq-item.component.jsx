import React, { Component } from "react";
import "./faq-item.styles.scss";
import { LoremIpsum } from "react-lorem-ipsum";

export default class FaqItem extends Component {
  render() {
    return (
      <div className="accordion-item">
        <h2
          className="accordion-header"
          id={"flush-heading" + this.props.itemNumber}
        >
          <button
            className="accordion-button collapsed font-weight--bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#flush-collapse" + this.props.itemNumber} // item numbers in letters and first letter in capital
            aria-expanded="false"
            aria-controls={"flush-collapse" + this.props.itemNumber}
          >
            {this.props.question}
          </button>
        </h2>
        <div
          id={"flush-collapse" + this.props.itemNumber}
          className="accordion-collapse collapse"
          aria-labelledby={"flush-heading" + this.props.itemNumber}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            {/* {this.props.answer} */}
            <div className="text-wrapper">
              <LoremIpsum p={1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
