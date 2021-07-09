export type QuoteType = {
  id: string;
  author: string;
  text: string;
};

export type HttpReducerType = {
  data: QuoteType[] | null;
  error: string | null;
  status: string | null;
};
export type Action =
  | { type: "SEND" }
  | { type: "SUCCESS"; responseData: QuoteType[] }
  | { type: "ERROR"; errorMessage: string };
