
import style from '../styles/Home.module.css'

function Home() {
  
  return (
    <div className={style.container}>
      <h2 className={style.title}>EXPLORÁ LAS PROFUNDIDADES <br />
        CON BUZOS DE REGATAS</h2>
        <p className={style.infoHome}>
          Celebramos 35 años bajo el aguaDesde 1990 acompañamos a buzos de todas las edades y niveles a descubrir el fascinante mundo submarino. Tres décadas formando aventureros, compartiendo experiencias inolvidables y construyendo una comunidad unida por la pasión por el buceo.Gracias por ser parte de esta historia que sigue creciendo día a día
        </p>
        <div className={style.containerBtn}>
          <button>EXPLORAR CURSOS</button>
          <button className={style.containerBtnDos}>CONTACTANOS AHORA</button>
        </div>
    </div>
  )
}

export default Home