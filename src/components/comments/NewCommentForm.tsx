import { useRef, useEffect, FunctionComponent } from "react";

import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

const NewCommentForm: FunctionComponent<{
  onAddedComment: Function;
  quoteId: string;
}> = ({ onAddedComment, quoteId }) => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = () => {
    // optional: Could validate here
    // send comment to server
    const enteredText = commentTextRef.current?.value;
    sendRequest({ commentData: { text: enteredText }, quoteId: quoteId });
  };

  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        void submitFormHandler();
      }}
    >
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div
        className={classes.control}
        onSubmit={(e) => {
          e.preventDefault();
          void submitFormHandler();
        }}
      >
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
