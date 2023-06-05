import Link from "next/link";
import styles from "@/app/styles/navbar.module.css"

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/"
                        // onClick={() => setOpenMenu(false)}
                        >Home</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/about"
                        // onClick={() => setOpenMenu(false)}
                        >About</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink}
                            // onClick={() => setOpenMenu(false)}
                            href="/service">Service</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink}
                            // onClick={() => setOpenMenu(false)}
                            href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;