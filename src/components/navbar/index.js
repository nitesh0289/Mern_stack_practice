import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

import NavLogo from "../../assets/images/Cipherschools_192x192.png";
import styles from "./navbar.module.scss";
import MenuItem from "data/MenuItem";

function Navbar() {
  const navgate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = (props) => (
    <li
      key={props.index}
      onClick={() => {
        setIsOpen(false);
        navgate(props.item.path);
      }}
    >
      <Icon icon={props.item.icon} />
      <p>{props.item.title}</p>
    </li>
  );

  return (
    <header className={styles.container}>
      <article className={styles.left}>
        <img src={NavLogo} alt="nav-logo" />
        <h2>CipherSchools</h2>
      </article>
      <ul className={styles["nav-links"]}>
        {MenuItem.map((item, i) => (
          <NavLinks item={item} index={i} />
        ))}
      </ul>

      <section className={styles["mobile-menu"]}>
        <div onClick={() => setIsOpen((prev) => !prev)}>
          {!isOpen ? (
            <Icon icon={"quill:hamburger"} className={`${styles.hamburgur} ${styles.open}`} />
          ) : (
            <Icon icon={"ic:outline-cancel"} className={`${styles.hamburgur} ${styles.closed}`} />
          )}
        </div>
        <article className={styles["nav-menu"]} data-active={isOpen}>
          <ul>
            {MenuItem.map((item, i) => (
              <NavLinks item={item} index={i} />
            ))}
          </ul>
        </article>
      </section>
    </header>
  );
}

export default Navbar;
