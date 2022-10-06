import { NextPage } from "next";
import { useRouter } from "next/router";
import LoadingScreen from "@components/Helpers/LoadingScreen";
import { useMe } from "@hooks/api/user/useMe";
import { isBrowser } from "@utils/isBrowser";

export default function withAuthRedirect<P = {}, IP = P>({
  WrappedComponent,
  LoadingComponent = LoadingScreen,
  expectedAuth,
  redirectPath,
}: {
  WrappedComponent: NextPage<P, IP>;
  LoadingComponent?: React.FC;
  expectedAuth: boolean;
  redirectPath: string;
}): NextPage<P, IP> {
  const WithAuthRedirectWrapper: NextPage<P, IP> = props => {
    const { replace, query } = useRouter();
    const { isLoading, user } = useMe();

    if (isLoading) {
      return <LoadingComponent />;
    }

    if (isBrowser && expectedAuth !== !!user) {
      replace((query?.redirectTo as string) || redirectPath);
      return <></>;
    }

    return <WrappedComponent {...props} />;
  };
  return WithAuthRedirectWrapper;
}
