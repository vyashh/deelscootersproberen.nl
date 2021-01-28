import React, { Component } from "react";

export default class FaqCostsItem extends Component {
  render() {
    return (
      <div>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row" colspan="4">
                <strong>{this.props.company}</strong>
              </th>
            </tr>
            <tr>
              <td scope="row">Rit</td>
              <td colspan="2"></td>
              <td>€{this.props.rit} per minuut</td>
            </tr>
            <tr>
              <td scope="row">Starttarief</td>
              <td colspan="2"></td>
              <td>{this.props.starttarrief}</td>
            </tr>
            <tr>
              <td scope="row">Reserveren</td>
              <td colspan="2"></td>
              <td>{this.props.reserveren}</td>
            </tr>
            <tr>
              <td scope="row">Parkeren</td>
              <td colspan="2"></td>
              <td>€{this.props.parkeren} per minuut</td>
            </tr>
          </tbody>
        </table>
        <p style={{ opacity: "0.5", fontSize: ".8em" }}>
          {this.props.exceptions}
        </p>
      </div>
    );
  }
}

// *Tenzij verlengd per 10 minuten = €1,50
