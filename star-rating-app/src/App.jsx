import StarRatings from "./components/StarRatings";
import Counter from "./components/Counter";
import Login from "./components/Login";
import { lazy, Suspense } from "react";

function App() {
  const Login = lazy(() => import("./components/Login"));

  return (
    <>
      <StarRatings />
      <Counter />
      <Suspense fallback="Loading...!">
        <Login />
      </Suspense>
    </>
  );
}

export default App;
