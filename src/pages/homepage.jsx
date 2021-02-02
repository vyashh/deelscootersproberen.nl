import React, { useContext, useState } from "react";
import "./homepage.scss";
import { Transition } from "react-spring/renderprops";
import { Context } from "../services/store";
import ServiceList from "../components/list/list.component";
import InfoBar from "../components/info-bar/info-bar.component";
import WelcomeBar from "../components/welcome-bar/welcome-bar.component";
import Loading from "../components/loading/loading.component";
import Faq from "../components/faq/faq.component";
import Footer from "../components/footer/footer.component";

export default function HomePage() {
  const { loadingState, active } = useContext(Context);
  const [loading, setLoading] = loadingState;
  const [activeService, setActiveService] = active;

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {!activeService ? <WelcomeBar /> : <InfoBar />}
      <div className="container margin">
        <ServiceList />
        <hr />
        <p style={{ textAlign: "justify", padding: "1rem 1.25rem" }}>
          Felyx, Check of een GO Sharing scooter proberen? Maak een account aan
          met een van onze kortingscodes en ontvang gratis rijminuten!
        </p>
        <hr />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}
