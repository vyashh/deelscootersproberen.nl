import React from "react";
import "./list.styles.scss";
import ServicesListItem from "../list-item/list-item.component";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import felyxlogo from "../../assets/img/logos/logo_felyx.svg";

export default function ServiceList() {
  const services = [
    { company: "Felyx", price: "0,30", code: "OMWPGLNB" },
    { company: "Check", code: "KYN-F0V" },
    { company: "Go Share", code: "ZEOHDE" },
  ];

  return (
    <div>
      <Grid>
        {services.map((service) => (
          <div>
            <List>
              <ServicesListItem company={service.company} code={service.code} />
            </List>
          </div>
        ))}
      </Grid>
    </div>
  );
}
