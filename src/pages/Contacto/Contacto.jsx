import { useParams } from "react-router-dom"
import "./Contacto.css"

const Contacto = () => {

  const { title } = useParams();

  return (
    <div className="contact">
      <h4>{title}</h4>
    </div>
  )
}

export default Contacto