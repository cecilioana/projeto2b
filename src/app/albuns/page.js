import styles from './albuns.module.css'
import Image from 'next/image';

const albuns = () =>{
    return(
    <main>
        <h1>✧.*Álbuns.*</h1>
        <section>
            <div id={styles.card2}>
                <div className={styles.div1}>
                    <Image className={styles.imgalbum} src='/images/apage.jpeg' alt='A Page - 2021' width={200} height={200} />
                    <h5>A Page - 2021</h5>
                    <ul className={styles.lu}>
                        <p className={styles.titulo}>Faixas:</p>
                        <li>Giant</li>
                        <li>Bonnie & Clyde</li>
                    </ul>
                </div>
                
                <div>
                    <Image className={styles.imgalbum} src='/images/Yuan.jpeg' alt='Yuan - 2024' width={200} height={200} />
                    <h5>Yuan - 2024</h5>
                    <ul className={styles.lu}>
                        <p className={styles.titulo}>Faixas:</p>
                        <li>Yuan</li>
                        <li>Falling in Love</li>
                        <li>Everlasting</li>
                        <li>Dancing with the Moon</li>
                        <li>Eclipse</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
)}

export default albuns;