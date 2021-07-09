import React, { FunctionComponent, useEffect } from "react";
import { Link, useParams, Route, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { QuoteType } from "../types";

const QuoteDetail: FunctionComponent = () => {
  const match = useRouteMatch();
  const { quoteId } = useParams<{ quoteId: string }>();

  const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }
  const loadedQuote = data as unknown as QuoteType;

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <div>
      <HighlightedQuote
        id={loadedQuote.id}
        text={loadedQuote.text}
        author={loadedQuote.author}
      />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} component={Comments} />
    </div>
  );
};

export default QuoteDetail;
