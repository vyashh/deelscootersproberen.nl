import React from "react";
import "./faq.styles.scss";
import FaqCostsItem from "../faq-costs-item/faq-costs-item.component";
import FaqDownloadList from "../faq-download-list/faq-download-list.component";

export default function Faq() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed font-weight--bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Hoe werkt het?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" style={{ textAlign: "justify" }}>
            <p>
              Waarschijnlijk heb je ze door de stad zien rijden en vraag jij je
              af hoe het nou precies werkt? Geen zorgen! Wij van
              deelscootersproberen.nl helpen u graag op weg.
            </p>
            <p>
              Deelscooters worden met de dag steeds populairder. Het is een zeer
              makkelijk manier van verplaatsen. Open de app, reserveer een
              scooter en rijden maar! Zo simpel is het.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed font-weight--bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Welke steden actief?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text-wrapper">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Felyx</strong>
              </li>
              <li className="list-group-item">Amsterdam</li>
              <li className="list-group-item">Den Haag</li>
              <li className="list-group-item">Rotterdam</li>
              <li className="list-group-item">Groningen</li>
              <li className="list-group-item">Delft</li>
              <li className="list-group-item">Eindhoven</li>
              <li className="list-group-item">Haarlem</li>
            </ul>
            <br />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Check</strong>
              </li>
              <li className="list-group-item">Amsterdam</li>
              <li className="list-group-item">Rotterdam</li>
              <li className="list-group-item">Den Haag</li>
              <li className="list-group-item">Breda</li>
            </ul>
            <br />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Go Sharing</strong>
              </li>
              <li className="list-group-item">Apeldoorn</li>
              <li className="list-group-item">Amersfoort</li>
              <li className="list-group-item">Breda</li>
              <li className="list-group-item">Delft</li>
              <li className="list-group-item">Den Bosch</li>
              <li className="list-group-item">Deventer</li>
              <li className="list-group-item">Eindhoven</li>
              <li className="list-group-item">Enschede</li>
              <li className="list-group-item">Groningen</li>
              <li className="list-group-item">Haarlem</li>
              <li className="list-group-item">Hengelo</li>
              <li className="list-group-item">Leeuwarden</li>
              <li className="list-group-item">Maassluis</li>
              <li className="list-group-item">Hoofddorp</li>
              <li className="list-group-item">Nissewaard</li>
              <li className="list-group-item">Oosterhout</li>
              <li className="list-group-item">Ridderkerk</li>
              <li className="list-group-item">Rijswijk</li>
              <li className="list-group-item">Rotterdam</li>
              <li className="list-group-item">Schiedam</li>
              <li className="list-group-item">The Hague</li>
              <li className="list-group-item">Tilburg</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed font-weight--bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Wat zijn de kosten?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <FaqCostsItem
              company="Felyx"
              rit="0,30"
              starttarrief="Geen kosten"
              reserveren="Geen kosten*"
              parkeren="0,10"
              exceptions="*Tot 15 min. gratis en daarna per 10 minuten €1,50"
            />
            <FaqCostsItem
              company="Check"
              rit="0,25"
              starttarrief="€0,50"
              reserveren="Geen kosten*"
              parkeren="0,10"
              exceptions="*Tot 10 min. gratis en daarna opnieuw kosteloos reserveren "
            />
            <FaqCostsItem
              company="Go Sharing"
              rit="0,29"
              starttarrief="Geen kosten"
              reserveren="Geen kosten*"
              parkeren="0,05"
              exceptions="*Tot 15 min. gratis en daarna per 10 minuten €1,00"
            />
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed font-weight--bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Hoe kan ik starten?
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" style={{ textAlign: "justify" }}>
            <p>
              Download één van de apps die je wilt uitproberen en gebruik
              tijdens het aanmaken van je account onze promo code. Zo krijg je
              gratis rijminuten en kan je de eerste paar ritten kosteloos
              rijden.
            </p>

            <FaqDownloadList />
          </div>
        </div>
      </div>
    </div>
  );
}
