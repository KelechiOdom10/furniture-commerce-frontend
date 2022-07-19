import { DefaultOptions } from "react-query";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const QUERY_OPTIONS_DEFAULT: DefaultOptions = {
  queries: {
    retry: false,
    staleTime: 15 * 60 * 1000, // 15 minutes
    enabled: true,
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: true,
  },
};

export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

export const QUERY_KEYS = {};
