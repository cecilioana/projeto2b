import styles from './sobre.module.css'
import Image from 'next/image';


const sobre = () =>{
    return(
        <main>
            <section>
                <h1 className={styles.h1}>✧.*Carreira✧.*</h1>
                <div className={styles.texto}>
                    <p className={styles.p}>Yuqi estreou como integrante do (G)I-DLE em 2 de maio de 2018, sob a Cube Entertainment. O grupo lançou seu single de estreia, "LATATA", que rapidamente se tornou um sucesso e trouxe reconhecimento imediato. Desde então, Yuqi e suas colegas de grupo têm ganhado crescente notoriedade, conquistando fãs não só na Coreia do Sul, mas também internacionalmente, solidificando seu lugar na cena global do K-pop.</p>
                </div>
            </section>
            <section>
                <h2>Estreia com o (G)-Idle</h2>
                <div>
                    <Image className={styles.img} src='/images/gidle.jpeg' alt="G idle" width={350} height={300} />
                </div>
            </section>
            <section>
                <div className={styles.texto}>
                    <p className={styles.p}>Yuqi estreou como integrante do (G)I-DLE em 2 de maio de 2018, sob a Cube Entertainment. O grupo lançou o single de estreia "LATATA", que foi um sucesso imediato e trouxe reconhecimento instantâneo. A partir desse momento, Yuqi e suas colegas de grupo começaram a ganhar notoriedade tanto na Coreia do Sul quanto internacionalmente.</p>
                </div>
                <table id={styles.table}>
                <caption id={styles.caption}>˗ˏˋ Integrantes´ˎ˗ </caption>
                <thead id={styles.theade}>
                    <tr id={styles.tabela}>
                        <th className={styles.th}>Nome</th>
                        <th className={styles.th}>Idade</th>
                        <th className={styles.th}>🌍</th>
                    </tr>
                </thead>
                <tbody id={styles.tbody}>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Soyeon</td>
                        <td className={styles.td}>26 anos</td>
                        <td className={styles.td}>Coreia do Sul</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Miyeon</td>
                        <td className={styles.td}>27 anos</td>
                        <td className={styles.td}>Coreia do Sul</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Minnie</td>
                        <td className={styles.td}>26 anos</td>
                        <td className={styles.td}>Tailândia</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Yuqi</td>
                        <td className={styles.td}>25 anos</td>
                        <td className={styles.td}>China</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Shuhua</td>
                        <td className={styles.td}>24 anos</td>
                        <td className={styles.td}>Taiwan</td>
                    </tr>
                </tbody>
            </table>
            </section>
            <section>
                <h2>Principais Contribuições</h2>
                <div className={styles.texto}>
                    <p className={styles.p}>Como membro do (G)I-DLE, Yuqi se destacou por sua voz singular e impressionantes habilidades de dança. Ela tem sido uma presença constante e ativa em todas as promoções e performances do grupo, desempenhando um papel crucial na consolidação da imagem e do sucesso do (G)I-DLE. Seu carisma natural e a energia vibrante que traz para o palco são frequentemente elogiados por fãs e críticos, solidificando sua reputação como uma artista completa e cativante.</p>
                </div>
            </section>
            <section>
                <h2>Projetos Solo</h2>
                <div className={styles.texto}>
                    <p className={styles.p} style={{marginBottom:"1%"}}>Em 2021, Yuqi lançou seu primeiro single solo, "A Page," que inclui as faixas "Giant" e "Bonnie & Clyde." Este projeto solo permitiu que Yuqi revelasse uma nova faceta de seu talento, destacando sua versatilidade em explorar diferentes estilos musicais e expressar-se de forma pessoal e autêntica. As músicas foram aclamadas, tanto pela crítica quanto pelos fãs, evidenciando sua evolução como artista solo e reafirmando seu potencial como uma das estrelas mais promissoras de sua geração.</p>
                    <iframe className={styles.iframe} style={{ borderRadius: "12px", margin: "auto" , display:"block"}} src="https://open.spotify.com/embed/album/7jmRVFWYCVgx2OEC1ZQJH8?utm_source=generator&theme=0" width="60%" height="max-content" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" allowFullScreen></iframe>
                </div>
            </section>
            <section>
                <h2>Aparições na Mídia</h2>
                <div className={styles.texto}>
                    <p className={styles.p}>Além de suas atividades com o (G)I-DLE, Yuqi rapidamente se tornou uma figura popular em programas de variedades e reality shows, tanto na Coreia do Sul quanto na China. Sua personalidade vibrante e senso de humor cativante a transformaram em uma das favoritas do público. A fluência de Yuqi em chinês, coreano e inglês lhe permite conectar-se com fãs de diversas partes do mundo, ampliando seu alcance e solidificando ainda mais sua popularidade global.</p>
                </div>
            </section>
            <section>
                <h2>Impacto e Influência</h2>
                <div className={styles.texto}>
                    <p className={styles.p}>Yuqi é vista como uma inspiração para muitos jovens aspirantes a artistas, especialmente aqueles de origem estrangeira que desejam ingressar na indústria do K-pop. Sua jornada de Pequim para o estrelato no K-pop destaca a importância da diversidade e inclusão na música e no entretenimento. Com uma carreira em constante ascensão, Yuqi continua a deixar sua marca na indústria musical, prometendo trazer ainda mais inovações e sucessos no futuro. Sua dedicação, talento e paixão pela música a destacam como uma das artistas mais influentes de sua geração.</p>
                </div>
            </section>
        </main>
    )

}

export default sobre;
