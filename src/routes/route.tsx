import { Redirect, Route as ReactDOMRoute } from "react-router-dom";

interface RouteProps {
  isPrivate?: boolean;
  path: string;
  exact?: boolean;
  component: any;
}

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps) => {

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <Component />
      }}
    />
  );
};

