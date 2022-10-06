import { NextPage } from "next";
import withAuthRedirect from "./withAuthRedirect";

export default function withAuth<P = {}, IP = P>(
  WrappedComponent: NextPage<P, IP>,
  redirectPath = "/auth/login",
  expectedAuth = true
): NextPage<P, IP> {
  return withAuthRedirect({
    WrappedComponent,
    redirectPath,
    expectedAuth,
  });
}
