import React, { useEffect } from "react";
import styles from "./style.module.scss";
import apis from "apis";

function Home() {
  useEffect(() => {
    async function handleLogin({ email, password }) {
      const response = await apis.login({ email, password });

      console.log({ response });
    }

    handleLogin({
      email: "bhanu123@ggmail.com",
      password: "Bhanu@1223",
    });
  }, []);
  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}

export default Home;
