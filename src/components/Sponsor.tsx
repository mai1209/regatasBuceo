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
    </div>
  )
}

export default Sponsor