import { lazy } from "react";
import LazyWrapper from "./components/Common/LazyWrapper";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <LazyWrapper>
      <Home />
    </LazyWrapper>
  );
}

export default App;