import React, { useContext } from "react";
import FaqDownloadListItem from "../faq-download-list-item/faq-download-list-item.component";
import { Context } from "../../services/store";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

export default function ServiceList() {
  const { data, service, active } = useContext(Context);
  const [services, setServices] = data;
  const [selectedService, setSelectedService] = service;
  const [activeService, setActiveService] = active;

  return (
    <div>
      <Grid>
        {services.map((service) => (
          <div key={service.service_id}>
            <List>
              <FaqDownloadListItem
                id={service.service_id}
                active={activeService}
                company={service.service_name}
              />
            </List>
          </div>
        ))}
      </Grid>
    </div>
  );
}
