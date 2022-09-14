import { NavLink } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    // console.log(user)
    authenticatedOptions = (
      <nav className="navbar">
        <h3>Welcome {user.username}!</h3>
        <NavLink to="/schedules">Schedule</NavLink>
        <NavLink to="/exercise">Exercises</NavLink>
        <NavLink onClick={handleLogOut} to="/">
          Sign Out
        </NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/exercise">Exercises</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </nav>
  )

  return (
    <header>
      <NavLink to="/"></NavLink>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav
