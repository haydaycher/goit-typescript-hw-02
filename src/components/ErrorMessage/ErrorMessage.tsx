import css from "./ErrorMessage.module.css";
import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={css.errorMessage}>
    <p>{message || "Unknown error occurred."}</p>
  </div>
);

export default ErrorMessage;
