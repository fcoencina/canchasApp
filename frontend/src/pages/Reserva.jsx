
import React from 'react';
import Navstu from '../components/Navstu';
import Styles from '../styles/Reserva.module.css';

function Reserva() {
    return (
        <div className={Styles.body}>
            <Navstu></Navstu>
            <p className={Styles.p}>Aquí se desarrolla la Reserva....</p>
        </div>
    );
}

export default Reserva;
