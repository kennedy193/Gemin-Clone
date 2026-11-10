import './App.css'
import MainContent from './Components/main-content'
import Header from './Components/header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="min-h-screen flex bg-[#F3F7FB]">

      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">

        <Header />

        <MainContent />

        <Footer />

      </div>

    </div>
  )
}

export default App