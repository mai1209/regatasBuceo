import { useEffect, useState } from 'react'
import style from '../styles/Nav.module.css'
import { Link } from 'react-router-dom'

function Nav() {
  const [scrolled, setScrolled] = useState(false)





  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };


const base = import.meta.env.BASE_URL;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${style.container} ${scrolled ? style.scrolled : ''}`}>
      <div className={style.content}>
        <div className={style.links}>
          <Link to="./home">Buzos de regatas</Link>
          <Link to="./galeria">Galería y viajes</Link>
          <a href="#cursos">Cursos</a>
          <a href="#contacto">Contacto</a>
        </div>
        <img  onClick={scrollToTop} className={`${style.logo} ${scrolled ? style.scrolled : ''}`} src={`${base}logo.webp`} alt="regatas" />
      </div>
    </nav>
  )
}

export default Nav
