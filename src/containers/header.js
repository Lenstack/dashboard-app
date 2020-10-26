import React from "react";
import { Header, Navbar } from "../components";
import * as ROUTES from "../constants/routes";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Navbar>
        <Navbar.Item to={ROUTES.DASHBOARD}>Dashboard</Navbar.Item>
        <Navbar.Item to={ROUTES.SIGN_IN}>Logout</Navbar.Item>
      </Navbar>
      {children}
    </Header>
  );
}
