import { NextPage } from "next";
import withAuth from "@components/HOC/withAuth";

const Profile: NextPage = () => {
  return <div></div>;
};

export default withAuth(
  Profile,
  `/auth/login?redirectTo=${encodeURIComponent(`/user/profile`)}`
);
