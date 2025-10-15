import style from '../styles/Cursos.module.css'





function Cursos() {
  return (
    <div className={style.container}>
      <div>
        <div className={style.containerTitleCurso}>
          <p>curso 1 estrella </p>
          <img src="flecha.png" alt="flecha" />
        </div>
        <div className={style.containerAll + ' ' + style.bgpink}>
          <div className={style.containerImgTitle + ' ' + style.uno}>
            <img src="logoblanco.png" alt="logoRegatas" />
            <p>Curso <br /> Nivel inicial  <br />Buzo 1 Estrella</p>
            <p className={style.subtitle1}>(open Water)</p>

          </div>
          <div className={style.containerAllText}>
            <p>¿Siempre soñaste con explorar el fondo del mar en primera persona y no solo verlo por televisión?</p>
            <p>Con el Curso de Buzo Estrella 1 (CMAS – FAAS) podés dar tus primeros pasos en el buceo de forma segura, divertida y con certificación internacional.</p>
            <p>Si ya hiciste un bautismo y querés avanzar, o si es tu primera experiencia, este nivel es la puerta de entrada al mundo submarino. </p>

            <p className={style.subtitle}>Durante el curso vas a:</p>

            <div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Aprender las técnicas básicas para bucear con confianza.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Experimentar la sensación única de ingravidez bajo el agua.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Realizar prácticas en nuestra cuba especialmente diseñada para tu seguridad.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Conocer gente nueva, hacer amigos e integrarte a un grupo que organiza salidas locales y viajes de buceo en todo el mundo.</p>
              </div>
            </div>
            <p>Este curso no solo te da más habilidades, también te convierte en parte de una comunidad apasionada por el buceo, con la que podrás compartir viajes y salidas durante todo el año.</p>
            <p >Al finalizar obtendrás la certificación internacional CMAS 2 Estrellas (avalada por la FAAS), reconocida en todo el mundo.</p>
            <p className={style.textFondo}>Tu próxima aventura submarina empieza acá.</p>
            <div className={style.containerBtn}> <button className={style.btn}>Comenzar curso</button></div>
          </div>
        </div>
      </div>

      {/* ---INICIO 2 CURSO------*/}
      <div>
        <div className={style.containerTitleCurso}>
          <p>curso 2 estrella </p>
          <img src="flecha.png" alt="flecha" />
        </div>
        <div className={style.containerAll + ' ' + style.bgBlue}>
          <div className={style.containerImgTitle + ' ' + style.dos}>
            <img src="logoblanco.png" alt="logoRegatas" />
            <p>Curso <br /> Nivel inicial  <br /> Buzo 2 Estrella</p>


          </div>
          <div className={style.containerAllText}>
            <p>¿Ya descubriste el mundo submarino y querés ir más allá?</p>
            <p>Con el Curso de Buzo de Regatas 2 Estrellas vas a llevar tu experiencia al siguiente nivel y abrir la puerta a nuevas aventuras bajo el agua.</p>


            <p className={style.subtitle}>Durante el curso vas a:</p>

            <div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Bucear en escenarios únicos: naufragios, lagos de altura y buceos nocturnos.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Alcanzar mayor profundidad con seguridad y confianza.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Reforzar y ampliar los conocimientos del primer nivel.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>
                  Incorporar técnicas de rescate, primeros auxilios y RCP, fundamentales para tu desarrollo como buzo responsable.</p>
              </div>
            </div>
            <p>Al finalizar, recibirás la certificación internacional CMAS (Confederación Mundial de Actividades Subacuáticas) y el aval de la FAAS (Federación Argentina de Actividades Subacuáticas), que te permitirá bucear en cualquier lugar del planeta.</p>
            <p>Tu próxima aventura submarina empieza acá.</p>
            <div className={style.containerBtn}> <button className={style.btn}>Comenzar curso</button></div>
          </div>
        </div>
      </div>


      {/* ---INICIO 3 CURSO ------*/}

      <div>
        <div className={style.containerTitleCurso + ' ' + style.bgblue}>
          <p>curso 3 estrella </p>
          <img src="flecha.png" alt="flecha" />
        </div>
        <div className={style.containerAll}>
          <div className={style.containerImgTitle + ' ' + style.tres}>
            <img src="logoblanco.png" alt="logoRegatas" />
            <p>Curso <br /> Nivel inicial  <br />Buzo 3 Estrella</p>


          </div>
          <div className={style.containerAllText}>
            <p>¿Querés dar el siguiente paso en tu formación como buzo?</p>
            <p>Con el Curso de Buzo Estrella 1 (CMAS – FAAS) podés dar tus primeros pasos en el buceo de forma segura, divertida y con certificación internacional.</p>
            <p>Si ya hiciste un bautismo y querés avanzar, o si es tu primera experiencia, este nivel es la puerta de entrada al mundo submarino. </p>

            <p className={style.subtitle}>Durante el curso vas a:</p>

            <div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Planificar, organizar y supervisar inmersiones.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>
                  Guiar y acompañar a grupos de buceadores con responsabilidad.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Colaborar activamente en cursos y entrenamientos.  </p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Alcanzar la máxima profundidad permitida en el buceo deportivo.</p>
              </div>
            </div>
            <p>Además de perfeccionar tu técnica, este curso te prepara para convertirte en referente dentro de la comunidad de buceo, combinando experiencia práctica con sólidos conocimientos en seguridad y gestión de grupos.</p>
            <p >Al finalizar, obtendrás la certificación internacional CMAS 3 Estrellas, reconocida en todo el mundo y avalada por la FAAS.</p>
            <p className={style.textFondo}>Tu próxima aventura submarina empieza acá.</p>
            <div className={style.containerBtn}> <button className={style.btn}>Comenzar curso</button></div>
          </div>
        </div>
      </div>




      {/* ---FIN CURSO ------*/}
      <div  >
        <div className={style.containerTitleCurso + ' ' + style.bgblue}>
          <p>Curso de Fotografía Subacuática</p>
          <img src="flecha.png" alt="flecha" />
        </div>
        <div className={style.containerAll + ' ' + style.bgBlue}>
          <div className={style.containerImgTitle + ' ' + style.cuatro} >
            <img src="logoblanco.png" alt="logoRegatas" />
            <p>Curso <br />Fotografía Subacuática <br />
              Nivel Básico <br /> y Avanzado</p>


          </div>
          <div className={style.containerAllText}>
            <p>La mejor forma de guardar para siempre la magia de cada inmersión es a través de la fotografía subacuática. </p>
            <p>Esta especialidad te permitirá transformar tus buceos en recuerdos únicos y en auténticas obras de arte.</p>

            <p>Los ambientes marinos ofrecen escenarios irrepetibles: arrecifes llenos de vida, naufragios misteriosos y paisajes submarinos que desafían tu creatividad. Aprenderás a capturar su belleza, rareza y grandiosidad con técnicas adaptadas a cada nivel de experiencia.</p>
            <p className={style.subtitle} >Este curso está diseñado para:</p>

            <div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Quienes desean iniciarse en la fotografía subacuática y dominar las bases.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Quienes desean iniciarse en la fotografía subacuática y dominar las bases.</p>
              </div>


            </div>
            <p>Al completar la especialidad, contarás con los conocimientos necesarios para captar imágenes impactantes y transmitir la emoción del mundo submarino en cada toma.</p>
            <p className={style.textFondo}>Si querés descubrir el arte de fotografiar bajo el agua o llevar tu pasión al siguiente nivel, este es tu curso.</p>
            <div className={style.containerBtn}> <button className={style.btn}>Comenzar curso</button></div>
          </div>
        </div>
      </div>
      {/* ---FIN 5 CURSO ------*/}

      <div  >
        <div className={style.containerTitleCurso + ' ' + style.bgblue}>
          <p>Curso Nitrox Inicial</p>
          <img src="flecha.png" alt="flecha" />
        </div>
        <div className={style.containerAll + ' ' + style.bgBlue}>
          <div className={style.containerImgTitle + ' ' + style.cinco} >
            <img src="logoblanco.png" alt="logoRegatas" />
            <p>Curso <br /> Nitrox Inicial</p>


          </div>
          <div className={style.containerAllText}>
            <p>¿Querés aumentar tus tiempos no descompresivos y disfrutar de buceos más largos a la misma profundidad? </p>
            <p>El curso de especialidad Nitrox es la opción ideal para quienes realizan varias inmersiones por día, viven la experiencia de vida a bordo o simplemente buscan mayor comodidad y seguridad bajo el agua.</p>


            <p className={style.subtitle} >Con este nivel vas a aprender a:</p>

            <div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Utilizar mezclas de aire enriquecido (Nitrox) para extender tu tiempo de fondo.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Reducir la fatiga y sentirte más descansado que buceando con aire convencional.</p>
              </div>

              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Planificar y ejecutar buceos más seguros y eficientes.</p>
              </div>
            </div>
            <p>Con la certificación Nitrox (CMAS – FAAS) vas a sumar una herramienta esencial para tus viajes y aventuras submarinas, válida en todo el mundo.</p>
            <p className={style.textFondo}>👉 Si querés llevar tu buceo al siguiente nivel, el Nitrox es tu especialidad.👈</p>
            <div className={style.containerBtn}> <button className={style.btn}>Comenzar curso</button></div>
          </div>
        </div>
      </div>

      <div  >
        <div className={style.containerTitleCurso + ' ' + style.bgblue}>
          <p>Curso de Nitrox Nivel Avanzado</p>
          <img src="flecha.png" alt="flecha" />
        </div>
        <div className={style.containerAll + ' ' + style.bgpink}>
          <div className={style.containerImgTitle + ' ' + style.siete} >
            <img src="logoblanco.png" alt="logoRegatas" />
            <p>Curso   <br />
              Nitrox <br />
              Nivel Avanzado</p>


          </div>
          <div className={style.containerAllText}>
            <p>¿Ya contás con tu certificación Nitrox y querés seguir profundizando?</p>
            <p> El Curso de Nitrox Avanzado está diseñado para buceadores que buscan ampliar sus conocimientos sobre el uso del oxígeno y la fisiología de los gases respirados a distintas presiones.</p>


            <p className={style.subtitle} >En este nivel aprenderás a:</p>

            <div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Comprender en detalle los efectos y límites del oxígeno a alta presión.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Profundizar en la fisiología de los gases y su impacto en el cuerpo durante la inmersión.</p>
              </div>

              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Planificar y ejecutar buceos con mezclas más complejas de manera segura.</p>
              </div>
            </div>
            <p>Esta especialidad te brinda una base sólida para continuar hacia niveles más técnicos del buceo y te permite bucear con mayor confianza, seguridad y conocimiento.</p>
            <p>Al completar el curso, recibirás una certificación internacional CMAS – FAAS, reconocida en todo el mundo.</p>
            <p className={style.textFondo}>👉 Si querés llevar tu formación más allá del Nitrox básico y dominar el uso avanzado de mezclas, este es tu curso.👈</p>
            <div className={style.containerBtn}> <button className={style.btn}>Comenzar curso</button></div>
          </div>
        </div>
      </div>
      <div  >
        <div className={style.containerTitleCurso + ' ' + style.bgblue}>
          <p>Curso de Apnea - Freediving Nivel Inicial</p>
          <img src="flecha.png" alt="flecha" />
        </div>
        <div className={style.containerAll + ' ' + style.bgBlue}>
          <div className={style.containerImgTitle + ' ' + style.seis} >
            <img src="logoblanco.png" alt="logoRegatas" />
            <p>Curso <br /> Apnea – Freediving <br />
              Nivel Inicial</p>


          </div>
          <div className={style.containerAllText}>
            <p>¿Querés superar tus límites y descubrir la verdadera libertad bajo el agua?</p>
            <p>Este curso Freediving te invita a conectar con tu cuerpo, tu respiración y el mar de una manera completamente nueva.</p>


            <p className={style.subtitle} >En este curso vas a aprender a:</p>

            <div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Controlar la respiración y descender cada vez más profundo con una sola inspiración.</p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Vencer miedos y desarrollar confianza bajo el agua.</p>
              </div>

              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Combinar el entrenamiento físico y mental con una sensación única de paz y relax.  </p>
              </div>
              <div className={style.do}>
                <img src="./ok.png" alt="mano" />
                <p>Disfrutar la ingravidez total y el contacto directo con el entorno marino. </p>
              </div>




            </div>
            <p>Ideal para quienes buscan una experiencia desafiante, consciente y transformadora.</p>
            <p> Al finalizar, obtendrás tu certificación internacional CMAS – FAAS, válida en todo el mundo.</p>
            <p className={style.textFondo}>👉 Si querés llevar tu formación más allá del Nitrox básico y dominar el uso avanzado de mezclas, este es tu curso.👈</p>
            <div className={style.containerBtn}> <button className={style.btn}>Comenzar curso</button></div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Cursos