import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { QuoteType } from "../types";

function NewQuote() {
  const history = useHistory();
  const addQuoteHandler = (quoteData: QuoteType) => {
    console.log(quoteData);
    history.push("./quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
