import { FunctionComponent, Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { QuoteType } from "../../types";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes: QuoteType[] | null, ascending: boolean) => {
  if (quotes !== null) {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  }
};

const QuoteList: FunctionComponent<{ quotes: QuoteType[] | null }> = ({
  quotes,
}) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";
  const sortedQuotes = sortQuotes(quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descedning" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes &&
          sortedQuotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
