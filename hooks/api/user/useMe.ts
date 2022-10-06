import { UserReadType } from "types";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import authService from "@services/authService";

export const useMe = () => {
  const queryInfo = useQuery<UserReadType, AxiosError>(
    "me",
    authService.getCurrentUser,
    {
      retry: 0,
      // should be refetched in the background every 8 hours
      staleTime: 1000 * 60 * 60 * 8,
    }
  );

  return { user: queryInfo.data, ...queryInfo };
};
