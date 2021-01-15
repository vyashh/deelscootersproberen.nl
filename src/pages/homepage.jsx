import React from "react";
import ServiceList from "../components/list/list.component";
import InfoBar from "../components/info-bar/info-bar.component";

export default function HomePage() {
  return (
    <div>
      <InfoBar />
      <ServiceList />
    </div>
  );
}
