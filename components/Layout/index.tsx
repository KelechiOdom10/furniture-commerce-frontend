import Navbar from "@components/Navigation/Navbar";
import { Box, Stack } from "@mantine/core";

const Layout: React.FC = ({ children }) => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Box
        component="main"
        sx={{
          flex: "1 0 auto",
          minHeight: "100vh",
          marginBottom: "4.25rem",
        }}
      >
        {children}
      </Box>
    </Stack>
  );
};

export default Layout;
