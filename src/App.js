import React, { useEffect } from "react";
import "./style/style.css";
import { ThemeProvider, useToast, Button } from "@chakra-ui/core";
import theme from "./theme";
import { useState } from "react";
import StoreProvider from "./state-mobx/state";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

function App() {
  // const myNotification = new Notification('Title', {
  //   body: 'Lorem Ipsum Dolor Sit Amet'
  // })
  const toast = useToast();

  // myNotification.onclick = () => {
  //   console.log('Notification clicked')
  // }
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route exact component={Login} path="/" />
          <Route component={Home} path="/dashboard" />
          <Route component={Page404} />
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default App;
