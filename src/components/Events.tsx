import style from "../styles/Events.module.css"

function Events() {

  const Events = [
    {
      id: 1,
      price: "USD$900",
      title: "Buceo en Mar del Plata",
      date: "15 de Febrero 2025",
      info: "Incluye: Alojamiento, traslados y buceo",
      img: "/imgS1.jpg"
    },
    {
      id: 2,
      price: "USD$900",
      title: "Inmersion Nocturna",
      date: "22 de Marzo 2025",
      info: "Incluye: Alojamiento, traslados y buceo",
      img: "/imgS2.jpg"
    },
    {
      id: 3,
      price: "USD$900",
      title: "Curso Avanzado de Buceo",
      date: "5 de Abril 2025",
      info: "Incluye: Alojamiento, traslados y buceo",
      img: "/imgS3.jpg"
    },

  ]

  return (
    <div>
      <h2 className={style.title}>Proximos eventos</h2>
      <p className={style.subtitle}>
        Sumate a los proximos eventos de Buzos de Regatas este 2025!
      </p>
    
      <div className={style.containerAllEvents}>

        <div className={style.containerEvents}>
          {Events.map((event) => (
            <div
              className={style.event}
              key={event.id}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${event.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className={style.titlePrice}>
                <h3>{event.title}</h3>
                <div className={style.contPrice}>
                  <p>{event.price}</p>
                </div>

              </div>
              <div className={style.infoEvent}>
                <p className={style.date}> {event.date} </p>

                <div className={style.overlay}>

                  <p className={style.info}>{event.info}</p>
                  <div className={style.containerBtnEvent}>
                    <button>Ver mas informacion</button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  )
}

export default Events
