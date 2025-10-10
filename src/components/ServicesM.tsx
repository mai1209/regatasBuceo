
import style from '../styles/Services.module.css'

function Services() {




    const base = import.meta.env.BASE_URL;


    const Services = [
        {
            id: 1,
            name: 'curso de 1 estrella',
            description: 'nivel inicial.',
            img: base + "/img1.webp",
            icon: base + "/starOne.webp"
        },

        {
            id: 2,
            name: 'curso de 2 estrellas',
            description: 'nivel  avanzado.',
            img: base + "/img2.webp",
            icon: base + "/starTwo.webp"
        },

        {
            id: 3,
            name: 'curso de  3  estrellas',
            description: 'nivel profesional.',
            img: base + "/img3.webp",
            icon: base + "/starThree.webp"
        },
        {
            id: 4,
            name: 'fotografia sub-acuatica',
            description: 'nivel basico -avanzado ',
            img: base + "/img4.webp",
            icon: base + "/photo.webp"
        },
        {
            id: 5,
            name: 'curso  de  nitrox',
            description: 'nivel incial ',
            img: base + "/img5.webp",
            icon: base + "/nitrox1.webp"
        },


        {
            id: 6,
            name: 'curso  de  nitrox  ',
            description: 'nivel avanzado',

            img: base + "/img6.webp",
            icon: base + "/nitrox2.webp"
        },

        {
            id: 7,
            name: 'apnea - FREEdiving',
            description: 'nivel inicial',
            img: base + "/imgN7.webp",
            icon: base + "/apnea.webp"
        },
        {
            id: 8,
            name: 'buceo infantil',
            description: 'experiencia unica',
            img: base + "/img8.webp",
            icon: base + "/diving.webp"
        },

    ]



    return (
        <div id='cursos' className={style.container}>
            <p className={style.title}>
                Desde 1990 enseñamos buceo, compartimos aventuras y amistades. Esta página ofrece toda la información para sumarte a nuestras actividades y ser parte de nuestro grupo.
            </p>
            <p className={style.titleCursos}>Conoce nuestros cursos</p>
            <div className={style.containerGrid}>
                {Services.map((service) => {


                    return (
                        <div
                            className={style.card}
                            key={service.id}
                            style={{
                                backgroundImage: `url(${service.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}

                        >
                            <img
                                src={service.icon}
                                alt="icon"
                                className={style.iconBtn}
                            />
                            <div className={style.infoCard}>
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>

                            </div>

                        </div>
                    )
                })}
                <button className={style.buttonMore}>
                    <p>Si queres saber más de nuestros cursos
                        pulsá el siguiente boton</p>
                    <p className={style.btnMore}>Ver mas información</p>
                </button>
            </div>

        </div>
    )
}

export default Services
