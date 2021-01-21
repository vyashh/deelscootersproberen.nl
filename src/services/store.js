import React, { useState, useEffect } from "react";
import firebase from "./firebase";

export const Context = React.createContext();

const Store = ({ children }) => {
  const ref = firebase.firestore().collection("services");
  const [services, setServices] = useState();
  const [loadingState, setLoadingState] = useState(true);

  function fetchData() {
    setLoadingState(true);
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setServices(items);
      setLoadingState(false);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Context.Provider
      value={{
        data: [services, setServices],
        loadingState: [loadingState, setLoadingState],
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
