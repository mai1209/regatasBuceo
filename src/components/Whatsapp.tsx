import style from '../styles/Whatsapp.module.css'


function WhatsAppButton() {
    const base = import.meta.env.BASE_URL;
  return (
    <a 
      href="https://wa.me/542" 
      className={style.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
    <img src={`${base}whatsapp.webp`} alt="wp" />
    </a>
  )
}

export default WhatsAppButton
