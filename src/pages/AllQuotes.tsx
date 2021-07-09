import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUTES = [
  { id: "1", author: "Rustam", text: "Let's learn some Type Script" },
  { id: "2", author: "Eren", text: "React is Great" },
];

function AllQuotes() {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUTES} />
    </div>
  );
}

export default AllQuotes;
