import styles from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'

const headerNavLinks = ["overview", "policy", "reports"]

export default function Header () {
    const location = useLocation();
    return (
        <>
        <main className={styles.header}>
            <nav className={styles.headerNav}>
                <ul className={styles.headerUI}>
                    {headerNavLinks.map(headerNavLink=>
                        <li className={styles.headerNavItem}>
                        <Link 
                            className={
                                location.pathname === `/${headerNavLink}` 
                                ? styles.headerNavLinkActice 
                                : styles.headerNavLink
                            } 
                            to={`/${headerNavLink}`}
                        >                         
                           {headerNavLink.charAt(0).toUpperCase() + headerNavLink.slice(1)}
                        </Link>
                    </li>
                        )}
                
                </ul>
            </nav>
        </main>
        </>
    )
}