import { NextPage } from "next";
import Page from "@components/Layout/Page";
import RegisterPage from "@components/Auth/Register/index";
import withoutAuth from "@components/HOC/withoutAuth";

const Register: NextPage = () => {
  return (
    <Page size={1440}>
      <RegisterPage />
    </Page>
  );
};

export default withoutAuth(Register);
