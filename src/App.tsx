import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "@/views/Loading";

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
