import Navbar from "@components/Navbar";
import { Container } from "@mantine/core";

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
