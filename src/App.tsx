import { Suspense } from "react";
import Loading from "@/views/Loading";
import Homme from "@/views/Home";

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Homme />
      </Suspense>
    </div>
  );
}

export default App;
