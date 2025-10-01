import style from '../styles/Whatsapp.module.css'


function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/542" 
      className={style.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
    <img src="./whatsapp.png" alt="wp" />
    </a>
  )
}

export default WhatsAppButton
