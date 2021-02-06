import React from "react";
import "./faq.styles.scss";
import FaqCostsItem from "../faq-costs-item/faq-costs-item.component";
import FaqDownloadList from "../faq-download-list/faq-download-list.component";

export default function Faq() {
  return (
    <div className="faq-answer-margin">
      <div className="faq-item">
        <h4 className="font-weight--bold"> Hoe werkt het?</h4>
        <div className="" style={{ textAlign: "justify" }}>
          <p>
            Waarschijnlijk heb je ze door de stad zien rijden en vraag jij je af
            hoe het nou precies werkt? Geen zorgen! Wij van
            deelscootersproberen.nl helpen u graag op weg.
          </p>
          <p>
            Deelscooters worden met de dag steeds populairder. Het is een zeer
            makkelijk manier van verplaatsen. Open de app, reserveer een scooter
            en rijden maar! Zo simpel is het.
          </p>
        </div>
      </div>
      <div className="faq-item">
        <h4 className="font-weight--bold">In welke steden actief?</h4>
        <div className="" style={{ textAlign: "justify" }}>
          <div class="row">
            <div class="col-xs-12 col-md-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Felyx</strong>
                </li>
                <li className="list-group-item">Amsterdam</li>
                <li className="list-group-item">Den Haag</li>
                <li className="list-group-item">Rotterdam</li>
                <li className="list-group-item">Delft</li>
                <li className="list-group-item">
                  <a href="https://felyx.com/nl/en" target="_blank">
                    Meer
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Check</strong>
                </li>
                <li className="list-group-item">Amsterdam</li>
                <li className="list-group-item">Rotterdam</li>
                <li className="list-group-item">Den Haag</li>
                <li className="list-group-item">Breda</li>
                <li className="list-group-item">
                  <span></span>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Go Sharing</strong>
                </li>
                <li className="list-group-item">Amsterdam</li>
                <li className="list-group-item">Den Haag</li>
                <li className="list-group-item">Rotterdam</li>
                <li className="list-group-item">Delft</li>
                <li className="list-group-item">
                  <a
                    href="https://nl.go-sharing.com/en/locations/"
                    target="_blank"
                  >
                    Meer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-item">
        <h4 className="font-weight--bold">Wat zijn de kosten?</h4>
        <div className="" style={{ textAlign: "justify" }}>
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

      <div className="faq-item">
        <h4 className="font-weight--bold">Hoe kan ik starten?</h4>
        <div className="" style={{ textAlign: "justify" }}>
          <p>
            Download één van de apps die je wilt uitproberen en gebruik tijdens
            het aanmaken van je account onze promo code. Zo krijg je gratis
            rijminuten en kan je de eerste paar ritten kosteloos rijden.
          </p>

          <FaqDownloadList />
        </div>
      </div>
    </div>
  );
}
