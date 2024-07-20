import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
//special prop that every component supports
//if we write anything other than the sstring in alert we get an error like writing html components
//so instead of string we use reactnode
