import styles from './Sidebar.module.scss'
import rusalbaImg from '../assets/png/rusalba.png'
import logoSvg from '../assets/svg/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBug, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import policy1 from '../assets/svg/policy1.svg'
import company1 from '../assets/svg/company1.svg'
import rec1 from '../assets/svg/rec1.svg'
import account1 from '../assets/svg/account1.svg'
import overview1 from '../assets/svg/overview1.svg'


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
                        <div>
                        {/* <FontAwesomeIcon icon={faTableCellsLarge} size="lg" className={styles.icon}/> */}
                        <img src={overview1} alt="logo" className={styles.icon}/>
                        
                        </div>
                           <div>
                           Overview
                           </div>
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
                        <div>
                        {/* <FontAwesomeIcon icon={faShieldCat} size="2x" className={styles.icon}/> */}
                        <img src={policy1} alt="logo" className={styles.icon}/>
                        </div>
                        <div>
                         Policy
                        </div>
                           
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
                        <FontAwesomeIcon icon={faBug} size="lg" color="#515151" className={styles.icon}/>
                        {/* <img src={report1} alt="logo" className={styles.icon}/> */}
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
                        <div>
                        {/* <FontAwesomeIcon icon={faWindowRestore} size="lg" color="#515151" className={styles.icon}/> */}
                        <img src={company1} alt="logo" className={styles.icon}/>
                        </div>
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
                        <div>
                        {/* <FontAwesomeIcon icon={faCircleUser} size="lg" color="#515151" className={styles.icon}/> */}
                        <img src={account1} alt="logo" className={styles.icon}/>
                        </div>
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
                       <div>
                       {/* <FontAwesomeIcon icon={faFileLines} size="lg" color="#515151" className={styles.icon}/> */}
                        <img src={rec1} alt="logo" className={styles.icon}/>
                       </div>
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