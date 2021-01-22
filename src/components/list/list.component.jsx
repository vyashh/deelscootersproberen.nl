import React, { useContext, useEffect } from "react";
import { Context } from "../../services/store";
import "./list.styles.scss";
import ServicesListItem from "../list-item/list-item.component";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

export default function ServiceList() {
  const { data, service, active } = useContext(Context);
  const [services, setServices] = data;
  const [selectedService, setSelectedService] = service;
  const [activeService, setActiveService] = active;

  const setService = (service) => {
    setSelectedService(service);
    setActiveService(service.service_id);
  };

  return (
    <div>
      <Grid>
        {services.map((service) => (
          <div key={service.service_id}>
            <List>
              <ServicesListItem
                id={service.service_id}
                active={activeService}
                company={service.service_name}
                code={service.service_ref_code}
                handler={() => setService(service)}
              />
            </List>
          </div>
        ))}
      </Grid>
      {/* <Grid>
        {services.map((service) => (
          <div>
            <List>
              <ServicesListItem company={service.company} code={service.code} />
            </List>
          </div>
        ))}
      </Grid> */}
    </div>
  );
}
