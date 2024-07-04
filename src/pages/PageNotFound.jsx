import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function PageNotFound() {
  return (
    <div>
      <Navbar/>
      <div className="min-h-[87vh]">
        <h3 className="text-2xl font-bold text-gray-900 text-center pt-10">Oopps</h3>
        <p className="text-center mt-2">Halaman yang Anda tuju tidak ditemukan....</p>
        
      </div>
      <Footer/>
    </div>
  )
}

export default PageNotFound