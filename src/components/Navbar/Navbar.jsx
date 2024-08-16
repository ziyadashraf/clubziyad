'use client'
import { useEffect } from "react";
import Image from "next/image";
import ContactButton from "./Part/Contact";
import Logo from "./Part/Logo";
import styles from "../../styles/Navbar.module.css";
import Navigation from "./Part/Navigation";

export default function Navbar() {
  useEffect(() => {
    const navholder = document.querySelector(`.${styles.navholder}`);
    navholder.classList.add(styles.slideIn);
  }, []);

  return (
    <header className={styles.navholder}>
      <Logo />
      <Navigation />
      <ContactButton />
    </header>
  );
}
