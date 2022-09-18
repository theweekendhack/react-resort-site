import Header from "./Header";
import Hero from "./Hero";
import ResortListing from "./ResortListing";
import Footer from "./Footer";
import "../assests/css/App.css"
import "../assests/css/utilities.css"

function App()
{


  return (
    
    <div className="grid grid-row-3" id="main-container">
      <Header/>
      <main>
          <Hero/>
          <ResortListing/>
      </main>

      <Footer/>
    </div>
   
  )
}
export default App;
