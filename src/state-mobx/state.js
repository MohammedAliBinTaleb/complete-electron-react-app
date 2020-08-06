import React from "react";
import { useLocalStore } from "mobx-react";

// const StoreContext = React.createContext();
export const Store = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    txt: "Hello World",
    user: {
      _id: "",
      username: "",
      firstName: "",
      lastName: "",
      level: "",
    },
    setUser: (value) => {
      store.user = value;
    },
    getFullName: () => {
      return store.user.firstName + " " + store.user.lastName;
    },
    isAdmin: () => store.user.level,
  }));

  return <Store.Provider value={store}>{children}</Store.Provider>;
};
export default StoreProvider;
