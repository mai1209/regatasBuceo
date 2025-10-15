import style from '../styles/Sponsor.module.css'
function Sponsor() {

    const base = import.meta.env.BASE_URL;

    const sponsors = [
        {
            id: 1,
            img: base + "sponsor1.webp",
            alt: "sponsor1"
        },
        {
            id: 2,
            img: base + "sponsor2.webp",
            alt: "sponsor2"
        },
        {
            id: 3,
            img: base + "sponsor3.webp",
            alt: "sponsor3"
        },
        {
            id: 4,
            img: base + "sponsor4.webp",
            alt: "sponsor4"
        },
        {
            id: 5,
            img: base + "sponsor5.webp",
            alt: "sponsor5"
        },
     
    ]




  return (
    <div className={style.container}>
          <h2 className={style.title}>Sponsors</h2>
        <div className={style.content}>
          
            {sponsors.map((sponsor) => (
            <img key={sponsor.id} className={style.img} src={sponsor.img} alt={sponsor.alt} />
            ))}
        </div>

        <div className={style.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.7100209792284!2d-60.6870731239342!3d-31.641789107184888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a985125d731d%3A0x9fb8b27490086ae5!2sClub%20Regatas%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1760535440260!5m2!1ses!2sar"  ></iframe>
        </div>
    </div>
  )
}

export default Sponsor