import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate()

  const goToMain = () => {
    navigate('/')
  }

  return (
    <main className="error">
      <div className="error__404">404</div>
      <div className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <button className="error__redirect" onClick={goToMain}>
        Retourner sur la page d’accueil
      </button>
    </main>
  )
}

export default Error
