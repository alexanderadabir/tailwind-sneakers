import Aside from './components/Aside'
import Header from './components/Header'
import Main from './components/Main'

export default function App() {
  return (
    <div className="container mx-auto max-w-[1080px] rounded-3xl bg-white">
      <Aside />
      <Header />
      <Main />
    </div>
  )
}
