import RegisterPage from "@components/Auth/Register/index";
import Page from "@components/Layout/Page";
import { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <Page size={1440}>
      <RegisterPage />
    </Page>
  );
};

export default Register;
