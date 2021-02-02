import React from "react";
import "./App.scss";
import Store from "./services/store";
import HomePage from "./pages/homepage";

export default function App() {
  return (
    <Store>
      <HomePage />
    </Store>
  );
}
