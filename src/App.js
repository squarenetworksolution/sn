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
import MicrosoftSurfacelaptop from "./components/Pages/MicrosoftSurfacelaptop";
import MicrosoftSurfaceLaptopChennai from "./components/Pages/MicrosoftSurfaceLaptopChennai";
import BuySurfaceLaptop from "./components/Pages/BuySurfaceLaptop";
import Canon from "./components/Pages/Canon";
import BestMicrosoftLaptopChennai from "./components/Pages/BestMicrosoftLaptopChennai";
import BuyMicrosoftLaptopChennai from "./components/Pages/BuyMicrosoftLaptopChennai";
import MicrosoftLaptopPriceChennai from "./components/Pages/MicrosoftLaptopPriceChennai";
import MicrosoftLaptopShopChennai from "./components/Pages/MicrosoftLaptopShopChennai";
import MicrosoftSurfaceLaptopPriceChennai from "./components/Pages/MicrosoftSurfaceLaptopPriceChennai";
import MicrosoftSurfaceProChennai from "./components/Pages/MicrosoftSurfaceProChennai";
import MicrosoftSurfaceProPriceChennai from "./components/Pages/MicrosoftSurfaceProPriceChennai";
import MicrosoftSurfaceStoreChennai from "./components/Pages/MicrosoftSurfaceStoreChennai";
import AiBusinessLaptopChennai from "./components/Pages/AiBusinessLaptopChennai";
import AiLaptopDealerChennai from "./components/Pages/AiLaptopDealerChennai";
import AiPoweredLaptopChennai from "./components/Pages/AiPoweredLaptopChennai";
import AiProductivityLaptopChennai from "./components/Pages/AiProductivityLaptopChennai";
import AiReadyDevicesChennai from "./components/Pages/AiReadyDevicesChennai";
import AppleMacBookDealerChennai from "./components/Pages/AppleMacBookDealerChennai";
import AsusLaptopDealerChennai from "./components/Pages/AsusLaptopDealerChennai";
import BestLaptop from "./components/Pages/BestLaptop";
import BestLaptopDealsChennai from "./components/Pages/BestLaptopDealsChennai";
import BestLaptopInChennai from "./components/Pages/BestLaptopInChennai";



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

<Route path="/buy-surface-laptop" element={<BuySurfaceLaptop/>}/>
<Route path="/microsoft-surface-laptop" element={<MicrosoftSurfacelaptop/>}/>
<Route path="/our-teams" element={<OurTeams/>} />
<Route path="/scroll-fade" element={<ScrollFade/>} />
<Route path="/best-microsoft-laptop-chennai" element={<BestMicrosoftLaptopChennai/>}/>
<Route path="buymicrosoft-laptop-chennai" element={<BuyMicrosoftLaptopChennai/>}/>
<Route path="microsoft-laptop-price-chennai" element={<MicrosoftLaptopPriceChennai/>}/>
<Route path="microsoft-laptop-shop-chennai" element={<MicrosoftLaptopShopChennai/>}/>
<Route path="microsoft-surface-reseller" element={<MicrosoftSurfaceReseller/>}/>
<Route path="microsoft-surface-laptop-price-chennai" element={<MicrosoftSurfaceLaptopPriceChennai/>}/>
<Route path="microsoft-surface-pro-chennai" element={<MicrosoftSurfaceProChennai/>}/>
<Route path="microsoft-surface-pro-price-chennai" element={<MicrosoftSurfaceProPriceChennai/>}/>
<Route path="microsoft-surface-store-chennai" element={<MicrosoftSurfaceStoreChennai/>}/>

<Route path="microsoft-surface-authorized-reseller" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-authorized-reseller-tamilnadu" element={<MicrosoftSurfaceReseller/>} />
<Route path="microsoft-surface-laptop-chennai" element={<MicrosoftSurfaceLaptopChennai/>} />
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
<Route path="microsoft-surface-authorized-reseller-chennai" element={<MicrosoftSurfaceReseller/>} />
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
<Route path="microsoft-surface-chennai" element={<MicrosoftSurfaceReseller/>} />

{/* <Route path="canon-showroom-in-housr" element={<Canon/>} /> */}
<Route path="canon-showroom-in-housr" element={<Canon/>} />
<Route path="ai-business-laptop-chennai" element={<AiBusinessLaptopChennai/>} />
<Route path="ai-laptop-dealer-chennai" element={<AiLaptopDealerChennai/>} />
<Route path="ai-powered-laptop-chennai" element={<AiPoweredLaptopChennai/>} />
<Route path="ai-productivity-laptop-chennai" element={<AiProductivityLaptopChennai/>}/> 
<Route path="ai-ready-devices-chennai" element={<AiReadyDevicesChennai/>} />
<Route path="apple-mac-book-dealer-chennai" element={<AppleMacBookDealerChennai/>}/>
<Route path="asus-laptop-dealer-chennai" element={<AsusLaptopDealerChennai/>}/>
<Route path="best-laptop" element={<BestLaptop/>} />
<Route path="best-laptop-deals-chennai" element={<BestLaptopDealsChennai/>}/>
<Route path="best-laptop-in-chennai"  element={<BestLaptopInChennai/>} />

</Routes>

</div>

<Footer />

</Router>
</>
);
}

export default App;
