import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <h1 className="homePage">
        Click below to log in or click Exercises in the navigation bar to look
        up any exercises you want!
      </h1>
      <section className="welcome-signin">
        <button onClick={() => navigate('/signin')}>
          Click Here To Get Started
        </button>
      </section>
    </div>
  )
}

export default Home
