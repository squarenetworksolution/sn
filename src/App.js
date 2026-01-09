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
import Networkingsolutions from "./components/Pages/NetworkSolutions";
import Itmanagedservices from "./components/Pages/Itmanagedservices";
// import Pcandenterprisesolution from "./components/Pages/Pcandenterprisesolution";
import Successstories from "./components/Pages/Successstories";
import Errorpage from "./components/Pages/Errorpage";
import Productswitches from "./components/Pages/Productswitches";
// import Productrouters from "./components/Pages/productrouters";
import Productservers from "./components/Pages/Productservers";
import Productcables from "./components/Pages/Productcables";
import Datacentersolution from "./components/Pages/Datacentersolution";
import OurTeams from "./components/Pages/OurTeams";
import ScrollFade from "./components/ScrollFade";
import MicrosoftSurfaceReseller from "./components/Pages/MicrosoftSurfaceReseller";


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
            <Route path="/home" element={<Home />} />

            {/* <Route path="/animation" element={<Animation/>} /> */}
            <Route path="/about" element={<About />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact/>}/>
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
            <Route path="/data-center-solution" element={<Datacentersolution/>} />
<Route path="/our-teams" element={<OurTeams/>} />
<Route path="/scroll-fade" element={<ScrollFade/>} />
<Route path="microsoft-surface-authorized-reseller" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-tamilnadu" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-chennai" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-royapettah" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-tnager" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-nungambakkam" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-royapettah" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-annasalai" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-guindy" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-omr" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-sholinganallur" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-Siruseri" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-taramani" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-adyar" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-besantnagar" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-annanagar" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-chennaicentral" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-egmore" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-koyambedu" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-chennaiinternationalairport" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-marinabeach" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-mylapore" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-triplicane" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-Royapettah" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-ambattur" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-porur" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-Perungudi" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-navalur" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-velachery" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-tambaram" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-medavakkam" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-koyambedu" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-poonamallee" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-royapuram" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-washermanpet" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-tondiarpet" element={<MicrosoftSurfaceReseller/>} />
         
          </Routes>

        </div>

        <Footer />

      </Router>
    </>
  );
}

export default App;
