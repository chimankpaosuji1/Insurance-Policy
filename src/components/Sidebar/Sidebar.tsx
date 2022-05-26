import styles from './Sidebar.module.scss'
import rusalbaImg from '../assets/png/rusalba.png'
import logoSvg from '../assets/svg/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindowRestore, faTrashAlt, faFileLines, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';



export default function Sidebar () {
    const location = useLocation();
    return <>
    <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
            <div className={styles.profileDetails}>
                <div className={styles.logo}>
                    <div className={styles.logoImg}>
                        <img src={logoSvg} alt="logo" />
                    </div>
                    <p className={styles.logoName}>Insurance Portal</p>
                </div>
                <div className={styles.profileImageDiv}>
                    <img src={rusalbaImg} alt="rusalba" />
                </div>
                <p className={styles.welcome}>Hello !<span className={styles.userName}> Rubalba Ruiz</span></p>
                <p className={styles.welcomeNote}>Welcome Back To Your Insurance Portal</p>
                <p className={styles.plan}>Your Plan :<span className={styles.planType}> Free</span></p>
                <div className={styles.planNewProfile}>
                <Link className={styles.planTypeNewProfile} to='/#'>Create New Plan </Link>
                <Link className={styles.planTypeNewProfileAdd} to='/#'> +</Link>
                </div>
            </div>

            <nav className={styles.sidebarNav}>
                <ul>                   
                    <li className={styles.sidebarNavItem}>
                        <Link 
                            className={
                                location.pathname === "/overview" 
                                ? styles.sidebarNavLinkActice 
                                : styles.sidebarNavLink
                            } 
                            to="/overview"
                        > 
                        <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#515151" className={styles.icon}/>
                           Overview
                        </Link>
                    </li>
                    <li className={styles.sidebarNavItem}>
                        <Link 
                            className={
                                location.pathname === "/policy" 
                                ? styles.sidebarNavLinkActice 
                                : styles.sidebarNavLink
                            } 
                            to="/policy"
                        > 
                        <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#515151" className={styles.icon}/>
                           Policy
                        </Link>
                    </li>
                    <li className={styles.sidebarNavItem}>
                        <Link 
                            className={
                                location.pathname === "/reports" 
                                ? styles.sidebarNavLinkActice 
                                : styles.sidebarNavLink
                            } 
                            to="/reports"
                        > 
                        <FontAwesomeIcon icon={faWindowRestore} size="lg" color="#515151" className={styles.icon}/>
                           Reports
                        </Link>
                    </li>
                    <li className={styles.sidebarNavItem}>
                        <Link 
                            className={
                                location.pathname === "/company" 
                                ? styles.sidebarNavLinkActice 
                                : styles.sidebarNavLink
                            } 
                            to="/company"
                        > 
                        <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#515151" className={styles.icon}/>
                           Company
                        </Link>
                    </li>
                    <li className={styles.sidebarNavItem}>
                        <Link 
                            className={
                                location.pathname === "/user-account" 
                                ? styles.sidebarNavLinkActice 
                                : styles.sidebarNavLink
                            } 
                            to="/user-account"
                        > 
                        <FontAwesomeIcon icon={faFileLines} size="lg" color="#515151" className={styles.icon}/>
                           User Account
                        </Link>
                    </li>
                    <li className={styles.sidebarNavItem}>
                        <Link 
                            className={
                                location.pathname === "/history" 
                                ? styles.sidebarNavLinkActice 
                                : styles.sidebarNavLink
                            } 
                            to="/history"
                        > 
                        <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#515151" className={styles.icon}/>
                           History
                        </Link>
                    </li>
                                        
                </ul>   
            </nav>
            <div>
            <Link className={styles.logout} to='/#'>
            <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg"  className={styles.icon}/>
                Log Out</Link>  
            </div>
        </div>
    </aside>
    </>;
}