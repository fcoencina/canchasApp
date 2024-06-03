
import Styles from '../styles/Reservacard.module.css';
import Image from '../assets/images/tiburon.jpeg';

function Reservacard() {
    return (
        <div className={Styles.card}>
            <img src={Image} alt="Pic" className={Styles.image} />
            <div className={Styles.content}>
                <h2 className={Styles.title}>Cancha Deportiva</h2>
                <p className={Styles.description}>
                    Esta es una cancha de deporte X,
                    que contibuye a la recreación del
                    estudiantado.
                </p>
                <div className={Styles.buttons}>
                    <button className={Styles.button}>Button 1</button>
                    <button className={Styles.button}>Button 2</button>
                </div>
            </div>
        </div>
    );
}

export default Reservacard;
