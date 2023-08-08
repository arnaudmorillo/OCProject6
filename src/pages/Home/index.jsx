import Banner from '../../components/banner'
import Background from '../../assets/background-home.png'

function Home() {
  return (
    <main>
      <Banner
        backgroundImageUrl={Background}
        title={'Chez vous, partout et ailleurs'}
      />
      Home
    </main>
  )
}

export default Home
