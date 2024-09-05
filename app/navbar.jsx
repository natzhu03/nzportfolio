// components/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css'; // Adjust path as needed

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          NATALIE ZHU
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/creative">Creative</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
