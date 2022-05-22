import { useHistory } from 'react-router-dom'

const LoginPage = () => {
  const history = useHistory()

  const handleSubmit = () => {
    history.push('/app')
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage
