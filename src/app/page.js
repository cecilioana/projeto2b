import styles from "./page.module.css";
import Image from "next/image";

export default function Home(){
  return(
    <main>
      <h1 className={styles.h1}>✧.*Yuqi✧.*</h1>
      <div className={styles.fotosss}>
        <div className={styles.foto}><Image className={styles.img} src='/images/flor.jpeg' alt="imagem Yuqi" width={200} height={200} /></div>
        <div className={styles.foto}><Image className={styles.img} src='/images/yuqi.jpeg' alt="imagem Yuqi" width={200} height={200} /></div>
        <div className={styles.foto}><Image className={styles.img} src='/images/ursinho.jpeg' alt="imagem Yuqi" width={200} height={200} /></div>
      </div>
      <div className={styles.paragrafo}>
      <p className={styles.p}>Yuqi rapidamente se tornou uma das integrantes mais populares do (G)I-DLE, graças à sua voz distinta e energia contagiante. Além de suas habilidades como cantora e dançarina, ela também é reconhecida por seu talento como compositora e produtora. Yuqi contribuiu para várias canções do grupo, mostrando seu lado criativo e versatilidade na música. Antes de se juntar ao (G)I-DLE, Yuqi foi aprendiz da Cube Entertainment e teve um tempo relativamente curto de treinamento antes de debutar, o que destaca ainda mais seu talento nato. Sua popularidade não se limita à Coreia do Sul; ela é extremamente querida em sua terra natal, a China, e tem uma base de fãs sólida em todo o mundo. Yuqi também é conhecida por sua personalidade cativante fora dos palcos. Ela é frequentemente elogiada por sua sinceridade, senso de humor e atitude positiva. Sua presença em programas de variedades tanto na Coreia quanto na China reforçou ainda mais sua popularidade, mostrando diferentes facetas de sua personalidade e aproximando-a ainda mais dos fãs. Como a única integrante chinesa do grupo, Yuqi desempenha um papel importante na representação cultural dentro do (G)I-DLE, promovendo a diversidade e o multiculturalismo no K-pop. Sua habilidade de se conectar com fãs de diferentes países e culturas é um dos muitos motivos pelos quais ela é tão amada e respeitada na indústria.</p>
      </div>
    </main>
)}