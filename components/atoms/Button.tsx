import React from "react";

type Props = {
  disabled: boolean;
};

const Button: React.FunctionComponent<Props> = ({ children }) => (
  <button>{children}</button>
);

export default Button;
