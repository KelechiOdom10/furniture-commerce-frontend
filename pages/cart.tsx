import { NextPage } from "next";
import Page from "@components/Layout/Page";
import Cart from "@components/Cart";

const CartPage: NextPage = () => {
  return (
    <Page size={1440}>
      <Cart />
    </Page>
  );
};

export default CartPage;
