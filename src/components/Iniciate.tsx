import style from '../styles/Iniciate.module.css'

function Iniciate() {
    return (
        <div className={style.container} id='iniciate'>
            <h2 className={style.title}>Iniciate</h2>
            <p className={style.subtitle}>Empieza hoy tu aventura submarina</p>
            <div className={style.cards}>
                <div className={style.card}>
                    <img src="./imgCurso.png" alt="iniciateUno" />
                    <div className={style.textCard}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ducimus sint sapiente iure necessitatibus amet</p>
                        <button>Ver cursos</button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="./imgGaleria.webp" alt="iniciateDos" />
                     <div className={style.textCard}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ducimus sint sapiente iure necessitatibus amet</p>
                        <button>Ver galeria</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Iniciate