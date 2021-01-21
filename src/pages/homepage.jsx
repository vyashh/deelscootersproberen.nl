import React, { useContext } from "react";
import { Context } from "../services/store";
import ServiceList from "../components/list/list.component";
import InfoBar from "../components/info-bar/info-bar.component";
import Loading from "../components/loading/loading.component";

export default function HomePage() {
  const { loadingState } = useContext(Context);
  const [loading, setLoading] = loadingState;

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <InfoBar />
      <ServiceList />
    </div>
  );
}
