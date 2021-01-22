import React, { useContext } from "react";
import { Context } from "../services/store";
import ServiceList from "../components/list/list.component";
import InfoBar from "../components/info-bar/info-bar.component";
import WelcomeBar from "../components/welcome-bar/welcome-bar.component";
import Loading from "../components/loading/loading.component";
import Faq from "../components/faq/faq.component";

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
      <div className="container">
        <ServiceList />
        <hr />
        <Faq />
      </div>
    </div>
  );
}
