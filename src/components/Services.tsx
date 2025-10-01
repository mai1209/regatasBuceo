import { useState } from 'react'
import style from '../styles/Services.module.css'

function Services() {
  const [openId, setOpenId] = useState(1) // item abierto por defecto

  const Services = [
    {
      id: 1,
      name: 'curso de 1 estrella',
      description: 'nivel inicial.',
      img: "/img1.jpg"
    },

    {
      id: 2,
      name: 'curso de 2 estrellas',
      description: 'nivel  avanzado.',
      img: "/img2.jpg"
    },

    {
      id: 3,
      name: 'curso de  3  estrellas',
      description: 'nivel profesional.',
      img: "/img3.jpg"
    },
    {
      id: 4,
      name: 'curso de   fotografia sub acuatica',
      description: 'nivel basico -avanzado ', 
      img: "/img4.jpg"
    },
    {
      id: 5,
      name: 'curso  de  nitrox',
      description: 'nivel incial ',
      img: "/img5.jpg"
    },


    {
      id: 6,
      name: 'apnea - FREEdiving',
      description: 'nivel inicial',
      img: "/img6.jpg"
    },

    {
      id: 7,
      name: 'curso  de  nitrox  ',
      description: 'nivel avanzado',
      img: "/imgN7.jpeg"
    },
      {
      id: 8,
      name: 'buceo infantil',
      description: 'experiencia unica',
      img: "/img8.jpeg"
    },

  ]



  return (
    <div className={style.container}>
      <p className={style.title}>
        Desde 1990 enseñamos buceo, compartimos aventuras y amistades...
      </p>
      <p className={style.titleCursos}>Conoce nuestros cursos</p>
      <div className={style.containerGrid}>
        {Services.map((service) => {
          const isOpen = openId === service.id
      
          return (
            <div
              className={`${style.itemcontainer} ${isOpen ? style.open : ''}`}
              key={service.id}
              style={{
                backgroundImage: `url(${service.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              onMouseEnter={() => setOpenId(service.id)}
            >
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className={style.containerBtnEvent}>
                <img
                  src={isOpen ? "/open-icon.png" : "/open-icon.png"}
                  alt="icon"
                  className={`${style.iconBtn} ${isOpen ? style.open : ''}`}
                />
                <button className={`${style.button} ${isOpen ? style.open : ''}`}>

                  {isOpen ? "Ver más información" : <img className={style.img} src="/flecha.png" alt="flecha" />}

                </button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Services
