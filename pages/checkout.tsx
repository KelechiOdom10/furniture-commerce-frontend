import { NextPage } from "next";
import withAuth from "@components/HOC/withAuth";
import Checkout from "@components/Checkout";
import Page from "@components/Layout/Page";

const CheckoutPage: NextPage = () => {
  return (
    <Page size={1200}>
      <Checkout />
    </Page>
  );
};

export default withAuth(
  CheckoutPage,
  `/auth/login?redirectTo=${encodeURIComponent(`/checkout`)}`
);
