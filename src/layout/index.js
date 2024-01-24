import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import styles from "./layout.module.scss";
import Navbar from "../components/navbar";

function Layout() {
  return (
    <main className={styles.container}>
      <Navbar />
      <section className={styles.main}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
}

export default Layout;
