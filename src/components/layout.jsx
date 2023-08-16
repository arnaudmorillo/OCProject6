import Footer from './footer'
import Header from './header'

function Layout({ page }) {
  return (
    <div>
      <Header />
      {page}
      <Footer />
    </div>
  )
}

export default Layout
