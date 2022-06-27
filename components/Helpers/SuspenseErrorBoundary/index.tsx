import { QueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorScreen from "@components/Helpers/ErrorScreen";
import { Suspense } from "react";
import LoadingScreen from "@components/Helpers/LoadingScreen";

type Props = {
  message?: string;
};
const SuspenseErrorBoundary: React.FC<Props> = ({ message, children }) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={props => <ErrorScreen {...props} message={message} />}
        >
          <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default SuspenseErrorBoundary;
