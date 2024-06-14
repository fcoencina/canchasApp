
import Navadmin from '../components/Navadmin';
import { useState } from 'react';
import Styles from '../styles/Agregar.module.css';


function Agregar() {
    const [formData, setFormData] = useState({
        tipo: '',
        ubicacion: '',
        fotografia: null,
        disponibilidad: '',
    });

    function updateForm(value) {
        return setFormData((prev) => {
            return { ...prev, ...value };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API.
        console.log(formData);
    };

    return (
        <div className={Styles.body}>
            <div className={Styles.img}>
                <Navadmin></Navadmin>
                <p className={Styles.p}>Aquí se desarrolla Agregar....</p>
                <form className={Styles.form} onSubmit={handleSubmit}>
                    <div className={Styles.field}>
                        <label className={Styles.label} htmlFor="tipo">Tipo:</label>
                        <input
                            type="text"
                            id="tipo"
                            name="tipo"
                            value={formData.tipo}
                            onChange={(e) => updateForm({ tipo: e.target.value })}
                            className={Styles.input}
                            required
                        />
                    </div>
                    <div className={Styles.field}>
                        <label className={Styles.label} htmlFor="ubicacion">Ubicación:</label>
                        <input
                            type="text"
                            id="ubicacion"
                            name="ubicacion"
                            value={formData.ubicacion}
                            onChange={(e) => updateForm({ ubicacion: e.target.value })}
                            className={Styles.input}
                            required
                        />
                    </div>
                    <div className={Styles.field}>
                        <label className={Styles.label} htmlFor="fotografia">Fotografía:</label>
                        <input
                            type="file"
                            id="fotografia"
                            name="fotografia"
                            onChange={(e) => updateForm({ fotografia: e.target.value })}
                            className={Styles.input}
                            required
                        />
                    </div>
                    <div className={Styles.field}>
                        <label className={Styles.label} htmlFor="disponibilidad">Disponibilidad:</label>
                        <input
                            type="text"
                            id="disponibilidad"
                            name="disponibilidad"
                            value={formData.disponibilidad}
                            onChange={(e) => updateForm({ disponibilidad: e.target.value })}
                            className={Styles.input}
                            required
                        />
                    </div>
                    <button type="submit" className={Styles.button}>Agregar Instalación</button>
                </form>
            </div>
        </div>
    );
}

export default Agregar;
