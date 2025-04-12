import StarRatings from "./components/StarRatings";
import Counter from "./components/Counter";
import { lazy, Suspense } from "react";

function App() {
  const Login = lazy(() => import("./components/Login"));
  const Todo = lazy(() => import("./components/Todo"));
  const Timer = lazy(() => import("./components/Timer"));

  return (
    <>
      <StarRatings />
      <Counter />
      <Suspense
        fallback="Login page Loading...!"
        className="text-2xl text-center font-bold"
      >
        <Login />
      </Suspense>
      <Suspense
        fallback="Todo App Loading...! "
        className="text-2xl text-center font-bold"
      >
        <Todo />
      </Suspense>
      <Suspense
        fallback="Timer App Loading...! "
        className="text-2xl text-center font-bold"
      >
        <Timer />
      </Suspense>
    </>
  );
}

export default App;
