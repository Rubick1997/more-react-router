import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUTES = [
  { id: "1", author: "Rustam", text: "Let's learn some Type Script" },
  { id: "2", author: "Eren", text: "React is Great" },
];

const QuoteDetail: FunctionComponent = () => {
  const { quoteId } = useParams<{ quoteId: string }>();

  const quote = DUMMY_QUTES.find((quote) => quote.id === quoteId);

  return (
    <div>
      {quote ? (
        <HighlightedQuote
          id={quote.id}
          text={quote.text}
          author={quote.author}
        />
      ) : (
        "No Quote found"
      )}
      <Route path={`/quotes/${quoteId}/comments`} component={Comments} />
    </div>
  );
};

export default QuoteDetail;
