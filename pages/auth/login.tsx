import { NextPage } from "next";
import Page from "@components/Layout/Page";
import LoginPage from "@components/Auth/Login/index";
import withoutAuth from "@components/HOC/withoutAuth";

const Login: NextPage = () => {
  return (
    <Page size={1440}>
      <LoginPage />
    </Page>
  );
};

export default withoutAuth(Login);
