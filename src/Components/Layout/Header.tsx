
import {NavLink} from "react-router-dom"
export const Header = () => {
  return (
    <header className="d-flex justify-content-between">
        <ul className="d-flex">
          <li className="d-flex">
            <NavLink to={'/'} className={({isActive})=> isActive ? 'active-link' : ''}>Comprobantes</NavLink>
            <NavLink to={'/productos'} className={({isActive})=> isActive ? 'active-link' : ''}>Productos</NavLink>
            <a href="#">Clientes</a>
            <a href="#">Usuarios</a>
            <a href="#">Notas</a>
            <a href="#">Cierre</a>
            <ul>
              <li><a href="#">Cargas</a></li>
              <li><a href="#">Carga Masiva</a></li>
            </ul>            
            <ul>              
              <li><a href="#">Resumen Ventas</a></li>
              <li><a href="#">Stock</a></li>
            </ul>            
          </li>
        </ul>
        <ul className="f-left">
          <li>
            <a href="#">Editar Perfil</a>
          </li>
          <li>
            <a href="#">Cerrar Sesion</a>
          </li>
        </ul>
    </header>
  )
}
