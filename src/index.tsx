import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export interface IAppProps {
  bar: number[];
  controllers: number[];
}

const config: IAppProps = {
  bar: [25, 50, 75],
  controllers: [-25, -10, 10, 25],
};

root.render(
  <React.StrictMode>
    <App config={config} />
  </React.StrictMode>
);
