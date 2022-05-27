import styles from './Dashboard.module.scss'
import { Link } from 'react-router-dom'
import Area_2vv from '../../components/assets/png/dasboard/Area_2vv.png'
import Area_3 from '../../components/assets/png/dasboard/Area_3.png'
import agent from '../../components/assets/png/dasboard/agent.png'

export default function Dashboard () {
    return (
        <>
         <main className={styles.dashboard}>
            <div className={styles.dashboardContent}>
               
                <div className={styles.dashboardContentSlider}>
                <div className={styles.headertext}>
                            <p className={styles.sliderContent1}>20% Safe On Your First Account</p>
                            <Link className={styles.sliderContent2} to='/#'>NEWBIE20 </Link>
                    </div>
                    <div className={styles.sliderImage}>
                                                
                        <img src={Area_2vv} alt="" className={styles.slider2} style={{opacity:'10%', marginTop:'2rem'}} />
                        <img src={agent} alt="" className={styles.slider5}/>
                        <img src={Area_3} alt="" className={styles.slider3} style={{opacity:'10%'}}/>
                        
                    </div>
                    

                </div>

                <section className={styles.section}>
                    <div className={styles.disbursement}>
                        <div className={styles.disbursementSection}>
                            <div>
                            <p className={styles.currency}>$</p>
                            <p className={styles.disbursementValue}>1000</p>
                            
                            </div>
                            <p className={styles.disbursementText}>Total Value of Disbursement</p>
                            <div>
                                <p className={styles.p1}>
                                    <span className={styles.po}>Policy</span>
                                    <span className={styles.sp1}>400
                                        <span className={styles.sp2}>$</span>
                                    </span>
                                </p>
                                <div className={styles.progress}>
                                    <div className={styles.progressBar} style={{width:'40%'}}></div>
                                </div>
                                <p className={styles.p1}>Claim<span className={styles.sp1}>800<span className={styles.sp2}>$</span>
                                    </span></p>
                                <div className={styles.progress2}>
                                    <div className={styles.progressBar2} style={{width:'80%'}}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.disbursementSection}>
                            <div>
                            <p className={styles.currency}>$</p>
                            <p className={styles.disbursementValue}>2500</p>
                            
                            </div>
                            <p className={styles.disbursementText}>Total Value of Disbursement</p>
                            <div>
                                <p className={styles.p1}>
                                    <span className={styles.po}>Policy</span>
                                    <span className={styles.sp1}>1100
                                        <span className={styles.sp2}>$</span>
                                    </span>
                                </p>
                                <div className={styles.progress}>
                                    <div className={styles.progressBar} style={{width:'70%'}}></div>
                                </div>
                                <p className={styles.p1}>Claim<span className={styles.sp1}>1400<span className={styles.sp2}>$</span>
                                    </span></p>
                                <div className={styles.progress2}>
                                    <div className={styles.progressBar2} style={{width:'80%'}}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.disbursementSection}>
                            <div>
                            <p className={styles.currency}>$</p>
                            <p className={styles.disbursementValue}>2500</p>
                            
                            </div>
                            <p className={styles.disbursementText}>Total Value of Disbursement</p>
                            <div>
                                <p className={styles.p1}>
                                    <span className={styles.po}>Policy</span>
                                    <span className={styles.sp1}>1100
                                        <span className={styles.sp2}>$</span>
                                    </span>
                                </p>
                                <div className={styles.progress}>
                                    <div className={styles.progressBar} style={{width:'70%'}}></div>
                                </div>
                                <p className={styles.p1}>Claim<span className={styles.sp1}>1400<span className={styles.sp2}>$</span>
                                    </span></p>
                                <div className={styles.progress2}>
                                    <div className={styles.progressBar2} style={{width:'80%'}}></div>
                                </div>
                            </div>
                        </div>                                            
                    </div>
                </section>

                
            </div>
         </main>
        </>
    )
}