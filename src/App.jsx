import React from 'react'
import imagen from '../src/assets/otorrinolaringologo.png'
import './App.css'

function App() {
return (
  <section className="landing">
    <div className="titulos__landing">
      <h1 className="profesional__nombre">Otorrinolaringólogo en Monterrey</h1>
      <p>El <strong>Dr. Jorge Treviño Garza</strong> es un <strong>Otorrinolaringólogo en Monterrey</strong> que cuenta con especialidad en Cirugía Plástica Facial, es un médico que constantemente se actualiza con el  fin de mejorar sus servicios a los pacientes. Servicios del <strong>Otorrinolaringólogo en Monterrey</strong></p>
      <ul>
        <li>Consulta</li>
        <li>Radiofrecuencia de Cornetes</li>
        <li>Cirugia endoscópica para sinusitis</li>
        <li>Cirugia de Tabique nasal</li>
        <li>Endoscopia Nasal</li>
        <li>Otorrinolaringología Pediátrica</li>
      </ul>
    </div>
    <div className="cuerpo__landing">
      <div className="imagen__profesional">
        <img src={imagen} alt="otorrinolaringologo en monterrey" />
      </div>
      <div className="textos__landing">
        <h2>Te mereces un alto nivel de atención por parte de un <strong>Otorrinolaringólogo </strong>de vanguardia, por lo que el <strong>Dr. Jorge Treviño Garza</strong> especialista en padecimiento de los oídos.</h2>
        <p>Agenda una consulta por whatsapp al número  8115448285 o mediante una llamada al  8183475220 </p>
        <p>Nuestro correo: jorgetrega@gmail.com</p> 
        <p>Lunes a Sábado 9:00 a 19:00 hrs</p>
        <p> DIRECCIÓN DEL CONSULTORIO Visitanos para que seas atendido con la atención que te mereces en  Centro de Especialidades Médicas 1er piso consultorio 126 Jose Benitez No 2704 Colonia obispado Monterrey NL CP 64060
        </p>
        <h3>El <strong>otorrinolaringólogo en Monterrey Jorge Treviño</strong> es ahora uno de los médicos más importantes en su campo gracias a su contribución a la investigación y la prevención.</h3>
      </div>
    </div>
    <div className="contactos__landing">
        <p>Da clic en el botón de WhatsApp para contactarnos para saber más sobre el <strong>otorrinolaringólogo en Monterrey</strong>.</p>
        <a href="https://api.whatsapp.com/send?phone=8115448285" target='_blank'><button>Whatsapp</button></a>
      </div>
  </section>
  )
}

export default App
