import { Link } from 'react-router-dom'
import Logo from './logo'
import { useLocation } from 'react-router-dom'

function Header() {
  let location = useLocation()

  return (
    <header className="header">
      <Logo className={'header__logo'} />
      <nav className="header__navbar">
        <Link
          to="/"
          className={
            location.pathname === '/'
              ? 'header__navbar__link header__navbar__link--selected'
              : 'header__navbar__link'
          }
        >
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={
            location.pathname === '/a-propos'
              ? 'header__navbar__link header__navbar__link--selected'
              : 'header__navbar__link'
          }
        >
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
