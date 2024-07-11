
import Navadmin from '../components/Navadmin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from '../styles/Agregar.module.css';


function Agregar() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        tipo: '',
        ubicacion: '',
        disponibilidad: ''
    });

    function updateForm(value) {
        return setFormData((prev) => {
            return { ...prev, ...value };
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API.

        try {
            const response = await fetch('http://localhost:9000/createinstalacion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate("/adminmenu"); // Redirigir a la página de admin
            } else {
                console.error("Error al agregar:", await response.text());
            }
        } catch (error) {
            console.error("Error al agregar:", error);
        }
    };

    return (
        <div className={Styles.body}>
            <div className={Styles.img}>
                <Navadmin></Navadmin>
                <form className={Styles.form} onSubmit={handleSubmit}>
                    <div className={Styles.field}>
                        <label className={Styles.label} htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => updateForm({ name: e.target.value })}
                            className={Styles.input}
                            required
                        />
                    </div>
                    <div className={Styles.field}>
                        <label className={Styles.label} htmlFor="tipo">Tipo</label>
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
                        <label className={Styles.label} htmlFor="ubicacion">Ubicación</label>
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
                        <label className={Styles.label} htmlFor="disponibilidad">Disponibilidad</label>
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
                    <button type="submit" className={Styles.button} onClick={handleSubmit}>Agregar Instalación</button>
                </form>
            </div>
        </div>
    );
}

export default Agregar;
