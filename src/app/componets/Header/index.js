'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  const [mostrarHeader, setMostrarHeader] = useState(false);
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo);
    setMostrarHeader(!mostrarHeader);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        <div
          className={`${styles.menuu} ${menuAtivo ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <div className={`${styles.menu} ${menuAtivo ? styles.active : ''}`}>
            <div className={styles.menu1}></div>
            <div className={styles.menu2}></div>
            <div className={styles.menu3}></div>
          </div>
        </div>

        {mostrarHeader && (
          <div className={styles.divs}>
            <ul className={styles.listas}>
              <li className={styles.lii}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.lii}>
                <Link href="/sobre">Carreira</Link>
              </li>
              <li className={styles.lii}>
                <Link href="/albuns">Álbuns</Link>
              </li>
            </ul>
          </div>
        )}

        <ul className={styles.lista}>
          <li className={styles.li}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.li}>
            <Link href="/sobre">Carreira</Link>
          </li>
          <li className={styles.li}>
            <Link href="/albuns">Álbuns</Link>
          </li>
        </ul>
      </nav>
      <Image className={styles.gidle} src="/images/logo.png" alt="Logo" width={50} height={25}/>
    </header>
  );
};

export default Header;