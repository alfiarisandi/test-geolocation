import { createBrowserRouter } from "react-router-dom";
import TestA from "./componnet/TestA";
import TestB from "./componnet/TestB";

export default createBrowserRouter([
  {
    path: "/",
    element: <TestA />,
  },
  {
    path: "/test-api",
    element: <TestB />,
  },
]);
