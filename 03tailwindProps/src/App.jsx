import { useState } from "react";
import Card from "./assets/components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>

      <Card userName="Neel M" />
      <Card userName="Jay G" />
    </>
  );
}

export default App;
