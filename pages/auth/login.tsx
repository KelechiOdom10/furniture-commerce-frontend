import LoginPage from "@components/Auth/Login/index";
import Page from "@components/Layout/Page";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <Page size={1440}>
      <LoginPage />
    </Page>
  );
};

export default Login;
