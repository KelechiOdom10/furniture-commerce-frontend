import { NextPage } from "next";
import withAuth from "@components/HOC/withAuth";

const Order: NextPage = () => {
  return <div>Order</div>;
};

export default withAuth(
  Order,
  `/auth/login?redirectTo=${encodeURIComponent(`/user/orders`)}`
);
