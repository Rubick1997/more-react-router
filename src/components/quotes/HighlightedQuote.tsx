import { FunctionComponent } from "react";
import { QuoteType } from "../../types";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote: FunctionComponent<QuoteType> = ({ text, author }) => {
  return (
    <figure className={classes.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
