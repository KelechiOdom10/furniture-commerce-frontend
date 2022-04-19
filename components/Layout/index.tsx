import Navbar from "@components/Navbar";
import { Container } from "@mantine/core";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container size={1980} px={0}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
