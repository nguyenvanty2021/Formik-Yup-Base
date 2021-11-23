import React from "react";
interface TextErrorsProps {
  message: string;
}
const TextErrors: React.FC<TextErrorsProps> = ({ message }) => {
  return <div style={{ color: "red", marginTop: "0.5rem",display:"flex",width:"100%" }}>{message}</div>;
};
export default TextErrors;
