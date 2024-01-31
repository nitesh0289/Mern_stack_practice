import React from "react";
import ComponentA from "../../components/ComponentA";
import ComponentB from "../../components/ComponentB";
import ComponentC from "../../components/ComponentC";
import Counter from "../../components/Counter";

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <Counter />
    </main>
  );
}

export default Home;
