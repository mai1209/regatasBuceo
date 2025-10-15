import style from '../styles/Footer.module.css'



function Footer() {
    const base = import.meta.env.BASE_URL;

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

    return (
        <div className={style.container} id='contacto'  >
            <img className={style.logoFooter} src={`${base}logo.webp`} alt="logo" />
            <div className={style.menus}>
                <div className={style.menu}>
                    <p className={style.indice}>indice de la web</p>
                    <div className={style.links}>
                        <a onClick={scrollToTop} >Inicio</a>
                        <a>Galeria y viajes</a>
                        <a href="#cursos">Cursos</a>
                    
                    </div>
                </div>
                <div className={style.menu}>
                    <p className={style.indice}>contacto</p>
                    <div className={style.links}>
                        <a >+342 5 081256</a>
                        <a >+342 6 301954</a>
                        <a >Info@buzosderegatas.com.ar</a>

                    </div>

                </div>

                <div className={style.menu}>
                    <p className={style.indice}>Redes sociales</p>
                    <div className={style.linksRedes}>
                        <img src={`${base}Facebook.webp`} alt="facebook" />
                        <img src={`${base}X.webp`} alt="twitter" />
                        <img src={`${base}YouTube.webp`} alt="youtube" />
                        <img src={`${base}Instagram.webp`}  alt="instagram" />
                        <img src={`${base}Pinterest.webp`}  alt="pinterest" />
                    </div>
                </div>

            </div>
            <div className={style.menu}>
                <div className={style.codex}>
                    <img className={style.logocodex} src={`${base}logoCodex.webp`} alt="logoCodex" />
                    <div className={style.textCodex}>
                        <p>Creado por codex</p>
                        <p>corporation & business</p>
                    </div>
                </div>
            </div>
            <div className={style.copy}>
                <p>Todos los derechos reservados.  www.buzosderegatas.com.ar Santa Fe - Argentina</p>
            </div>
        </div>
    )
}

export default Footer   