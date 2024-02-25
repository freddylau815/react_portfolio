import { NavLink } from 'react-router-dom'


function Header() {
  return (
   <header>
        <h3>Freddy Lau</h3>
    <nav>
        <NavLink to="Work">Work</NavLink>
        <NavLink to="About Me">About Me</NavLink>
        <NavLink to="Contact">Contact</NavLink>
    </nav>
   </header>
  )
}

export default Header