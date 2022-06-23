import { NextPage } from "next";
import Page from "@components/Layout/Page";
import Cart from "@components/Cart";

const CartPage: NextPage = () => {
  return (
    <Page>
      <Cart />
    </Page>
  );
};

export default CartPage;
