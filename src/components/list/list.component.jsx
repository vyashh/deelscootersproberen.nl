import React, { useContext } from "react";
import firebase from "../../services/firebase";
import { Context } from "../../services/store";
import "./list.styles.scss";
import ServicesListItem from "../list-item/list-item.component";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Loading from "../loading/loading.component";

export default function ServiceList() {
  const ref = firebase.firestore().collection("services");
  // const services = [
  //   { company: "Felyx", price: "0,30", code: "OMWPGLNB" },
  //   { company: "Check", code: "KYN-F0V" },
  //   { company: "Go Share", code: "ZEOHDE" },
  // ];

  const { data, loadingState } = useContext(Context);
  const [services, setServices] = data;
  const [loading, setLoading] = loadingState;

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <div>
      <Grid>
        {services.map((service) => (
          <div>
            <List>
              <ServicesListItem
                company={service.service_name}
                code={service.service_ref_code}
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
