import style from '../styles/Informacion.module.css'
function Informacion() {
  return (
    <div className={style.container}>
      <p className={style.title}>Renovaciones</p>
      <div className={style.infoContainer}>
        <img className={style.renovacionImg} src="./renovacion.png" alt="infoRenovciones" />
        <div className={style.textContainer}>
          <p>Nada mas importante que tener tu Brevet al dia. Informate como hacer para renovarlo.</p>
          <p>Para mayor información sobre costos  escribinos a:</p>
          <div className={style.containerWp}>
            <p>Info@buzosderegatas.com.ar o</p>
            <div className={style.wpContainer}>
              <button>Envianos un Whatsapp</button>
              <img src="wpblanco.png" alt="wp" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Informacion