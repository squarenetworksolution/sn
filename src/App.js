import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Pages/Footer";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";

import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Product from "./components/Pages/Product";
import Testpage from "./components/Pages/Testpage";
import Cybersecuritysolutions from "./components/Pages/Cybersecuritysolutions";
import Networkingsolutions from "./components/Pages/Networkingsolutions";
import Itmanagedservices from "./components/Pages/Itmanagedservices";
// import Pcandenterprisesolution from "./components/Pages/Pcandenterprisesolution";
import Successstories from "./components/Pages/Successstories";
import Errorpage from "./components/Pages/Errorpage";
import Productswitches from "./components/Pages/Productswitches";
// import Productrouters from "./components/Pages/productrouters";
import Productservers from "./components/Pages/Productservers";
import Productcables from "./components/Pages/Productcables";
import Datacentersolution from "./components/Pages/Datacentersolution";


// import { Product } from "./components/Pages/Product";

// import Product, { Animation } from "./components/Pages/Animation"

function App() {

  return (
    <>
      <Router>
        <NavBar/>

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/animation" element={<Animation/>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product/>} />
            <Route path="/testpage" element={<Testpage/>} />
            <Route path="/cyber-security-solutions" element={<Cybersecuritysolutions />}/>
            <Route path="/networking-solutions" element={<Networkingsolutions />}/>
            <Route path="/it-managed-services" element={<Itmanagedservices/>} />
            {/* <Route path="/pc-and-enterprise-solution" element={< Pcandenterprisesolution/>}/> */}
            <Route path="/success-stories" element={<Successstories />}/>
            <Route component={<Errorpage/>}/>
            <Route path="/product-switches" element={<Productswitches/>} />
             {/* <Route path="" element={<Productrouters/>} /> */}
             <Route path="/" element={<Productservers/>} />
             <Route path="/product-cable" element={<Productcables/>} />           
              <Route path="" element={<Datacentersolution/>} />

          </Routes>

        </div>

        <Footer />

      </Router>
    </>
  );
}

export default App;
