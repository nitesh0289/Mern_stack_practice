import React, { useState, useCallback, useMemo } from "react";

import Title from "../../components/memo/Title";
import Button from "../../components/memo/Button";

function Home() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(10000);

  const handleAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, []);

  const handleSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, []);

  const checkEven = useMemo(() => {
    var i = 0;
    while (i < 2000000000) i++;
    console.log("check even function called");
    if (age % 2 === 0) return true;
    else return false;
  }, [age]);

  return (
    <main style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Title title={`Age - ${age}`} />
      <p>{checkEven ? "Even" : "Odd"}</p>
      <Button text={"increase age"} handleClick={handleAge} />
      <Title title={`Salary - ${salary}`} />
      <Button text={"increase salary"} handleClick={handleSalary} />
    </main>
  );
}

export default Home;
