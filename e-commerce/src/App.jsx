import "./App.css";
import { Navbar } from "./components/ui/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { supabase } from "./components/supabase/clients";
import { useEffect, useState } from "react";
import { Footer } from "./components/ui/Footer";
import { CartProvider, useCart } from "react-use-cart";
import { Home } from "./components/pages/Home/Home";
import { Vintage } from "./components/pages/Home/Vintage";
import { Shirt } from "./components/pages/Home/Shirt";
import { ArtProduct } from "./components/pages/Home/ArtProduct";
import { Discount } from "./components/pages/Home/Discount";
import { Sports } from "./components/pages/Home/Sports";
import { SportsProduct } from "./components/pages/Home/SportsProduct";
import { Samsung } from "./components/pages/Home/Samsung";
import { Iphone } from "./components/pages/Home/Iphone";
// import { Headset, Hoodie, Watch } from "@phosphor-icons/react";
import { WatchProduct } from "./components/pages/Home/WatchProduct";
import { Nike } from "./components/pages/Home/Nike";
import { NikeDesign } from "./components/pages/Home/NikeDesign";
import { NikeProduct } from "./components/pages/Home/NikeProduct";
import { HeadsetDesign } from "./components/pages/Home/HeadsetDesign";
import { HeadsetProduct } from "./components/pages/Home/HeadsetProduct";
import { Fitness } from "./components/pages/Home/Fitness";
import { Bespoke } from "./components/pages/Home/Bespoke";
import { BespokeDesign } from "./components/pages/Home/BespokeDesign";
import { ArtHome } from "./components/pages/Home/ArtHome";
import { WatchHome } from "./components/pages/Home/WatchHome";
import { MenPerfume } from "./components/pages/Home/MenPerfume";
import { MenPerfumeProduct } from "./components/pages/Home/MenPerfumeProduct";
import { MenPerfumeDesign } from "./components/pages/Home/MenPerfumeDesign";
import { Art } from "./components/pages/Home/Art";
import { MensTshirt } from "./components/pages/Clothing And Fashion/Men/MensTshirt";
import { MensTshirtProduct } from "./components/pages/Clothing And Fashion/Men/MensTshirtProduct";
import { Jacket } from "./components/pages/Clothing And Fashion/Men/Jacket";
import { JacketProduct } from "./components/pages/Clothing And Fashion/Men/JacketProduct";
import { HoodieProduct } from "./components/pages/Clothing And Fashion/Men/HoodieProduct";
import { Sweatshirt } from "./components/pages/Clothing And Fashion/Men/Sweatshirt";
import { SweatshirtProduct } from "./components/pages/Clothing And Fashion/Men/SweatshirtProduct";
import { WomenShirt } from "./components/pages/Clothing And Fashion/Women/WomenShirt";
import { WomenShirtProduct } from "./components/pages/Clothing And Fashion/Women/WomenShirtProduct";
import { Shorts } from "./components/pages/Clothing And Fashion/Women/Shorts";
import { ShortsProduct } from "./components/pages/Clothing And Fashion/Women/ShortsProduct";
import { Accessories } from "./components/pages/Clothing And Fashion/Boys/Accessories";
import { AccessoriesProduct } from "./components/pages/Clothing And Fashion/Boys/AccessoriesProduct";
import { Shoe } from "./components/pages/Clothing And Fashion/Boys/Shoe";
import { ShoeProduct } from "./components/pages/Clothing And Fashion/Boys/ShoeProduct";
import { Samsungs } from "./components/pages/Phones & Tablets/MobilePhones/Samsungs";
import { Iphones } from "./components/pages/Phones & Tablets/MobilePhones/Iphones";
import { Hauwei } from "./components/pages/Phones & Tablets/MobilePhones/Hauwei";
import { HauweiProduct } from "./components/pages/Phones & Tablets/MobilePhones/HauweiProduct";
import { Watch } from "./components/pages/Home/Watch";
import { Headset } from "./components/pages/Home/Headset";
import { Hoodie } from "./components/pages/Clothing And Fashion/Men/Hoodie";
import { SmartPen } from "./components/pages/Phones & Tablets/MobileAccessories/SmartPen";
import { SmartPenProduct } from "./components/pages/Phones & Tablets/MobileAccessories/SmartPenProduct";
import { PhonePouch } from "./components/pages/Phones & Tablets/MobileAccessories/PhonePouch";
import { SamsungTablets } from "./components/pages/Phones & Tablets/Tablets/SamsungTablets";
import { SamsungTabletsProducts } from "./components/pages/Phones & Tablets/Tablets/SamsungTabletsProducts";
import { Ipads } from "./components/pages/Phones & Tablets/Tablets/Ipads";
import { IpadsProduct } from "./components/pages/Phones & Tablets/Tablets/IpadsProduct";
import { BedSheet } from "./components/pages/Home Decor/BedSheet";
import { BedSheetProduct } from "./components/pages/Home Decor/BedSheetProduct";
import { Ps5 } from "./components/pages/Game/Ps5";
import { Ps4 } from "./components/pages/Game/Ps4";
import { Ps4Pad } from "./components/pages/Game/Ps4Pad";
import { Ps4PadCamo } from "./components/pages/Game/Ps4PadCamo";
import { Fifa21 } from "./components/pages/Game/Fifa21";
import { Fifa20 } from "./components/pages/Game/Fifa20";
import { Pes20 } from "./components/pages/Game/Pes20";
import { Nba2k20 } from "./components/pages/Game/Nba2k20";
import { Game } from "./components/pages/Game/Game";
import { GameProduct } from "./components/pages/Game/GameProducts";
import { Starwars } from "./components/pages/Game/Starwars";
import { GameOverview } from "./components/pages/Game/GameOverview";
import { Checkout } from "./components/pages/CheckOut/Checkout";
import { Paystack } from "./components/pages/CheckOut/Paystack";
import { About } from "./components/pages/Home/About";
import { ContactUs } from "./components/pages/Home/ContactUs";
import { Login } from "./components/pages/Home/Login";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/vintage/:id" element={<Vintage />}></Route>
            <Route path="/market/:id" element={<Shirt />}></Route>

            <Route path="/art/:id" element={<Art />}></Route>
            <Route path="/artProduct/:id" element={<ArtProduct />}></Route>

            <Route path="/discount/:id" element={<Discount />}></Route>

            <Route path="/sports/:id" element={<Sports />}></Route>
            <Route
              path="/sportsProducts/:id"
              element={<SportsProduct />}
            ></Route>

            <Route path="/samsung/:id" element={<Samsung />}></Route>

            <Route path="/iphone/:id" element={<Iphone />}></Route>

            <Route path="/watch/:id" element={<Watch />}></Route>
            <Route path="/watchProduct/:id" element={<WatchProduct />}></Route>

            <Route path="/nike" element={<Nike />}></Route>
            <Route path="/nikeDesign/:id" element={<NikeDesign />}></Route>
            <Route path="/nikeProduct/:id" element={<NikeProduct />}></Route>

            <Route path="/headset" element={<Headset />}></Route>
            <Route
              path="/headsetDesign/:id"
              element={<HeadsetDesign />}
            ></Route>
            <Route
              path="/headsetProducts/:id"
              element={<HeadsetProduct />}
            ></Route>

            <Route path="/fitness" element={<Fitness />}></Route>

            <Route path="/bespoke" element={<Bespoke />}></Route>
            <Route
              path="/bespokeDesign/:id"
              element={<BespokeDesign />}
            ></Route>

            <Route path="/artHome" element={<ArtHome />}></Route>
            <Route path="/watchHome" element={<WatchHome />}></Route>

            <Route path="/men_perfume" element={<MenPerfume />}></Route>
            <Route
              path="/men_perfumeProduct/:id"
              element={<MenPerfumeProduct />}
            ></Route>
            <Route
              path="/men_perfumeDesign/:id"
              element={<MenPerfumeDesign />}
            ></Route>

            {/* this is for the menu bar section  */}

            <Route path="/menTshirt" element={<MensTshirt />}></Route>
            <Route
              path="/menTshirtProduct/:id"
              element={<MensTshirtProduct />}
            ></Route>

            <Route path="/jacket" element={<Jacket />}></Route>
            <Route path="/jacket/:id" element={<JacketProduct />}></Route>

            <Route path="/hoodie" element={<Hoodie />}></Route>
            <Route
              path="/hoodieProduct/:id"
              element={<HoodieProduct />}
            ></Route>

            <Route path="/sweatShirt" element={<Sweatshirt />}></Route>
            <Route
              path="/sweatShirtProduct/:id"
              element={<SweatshirtProduct />}
            ></Route>

            <Route path="/womenTshirt" element={<WomenShirt />}></Route>
            <Route
              path="/womenTshirtProduct/:id"
              element={<WomenShirtProduct />}
            ></Route>

            <Route path="/shorts" element={<Shorts />}></Route>
            <Route
              path="/shortsProduct/:id"
              element={<ShortsProduct />}
            ></Route>

            <Route path="/accessories" element={<Accessories />}></Route>
            <Route
              path="/accessoriesProducts/:id"
              element={<AccessoriesProduct />}
            ></Route>

            <Route path="/shoe" element={<Shoe />}></Route>
            <Route path="/shoeProducts/:id" element={<ShoeProduct />}></Route>

            <Route path="/samsung" element={<Samsungs />}></Route>
            <Route path="/iphone" element={<Iphones />}></Route>
            <Route path="/huawei" element={<Hauwei />}></Route>
            <Route
              path="/huaweiProducts/:id"
              element={<HauweiProduct />}
            ></Route>

            <Route path="/smartPen" element={<SmartPen />}></Route>
            <Route
              path="/smartPenProduct/:id"
              element={<SmartPenProduct />}
            ></Route>

            <Route path="/phoneCase" element={<PhonePouch />}></Route>

            <Route path="/samsungTabs" element={<SamsungTablets />}></Route>
            <Route
              path="/samsungTabsProducts/:id"
              element={<SamsungTabletsProducts />}
            ></Route>

            <Route path="/ipads" element={<Ipads />}></Route>
            <Route path="/ipadsProducts/:id" element={<IpadsProduct />}></Route>

            <Route path="/bedSheet" element={<BedSheet />}></Route>
            <Route
              path="/bedSheetProduct/:id"
              element={<BedSheetProduct />}
            ></Route>

            <Route path="/ps5" element={<Ps5 />}></Route>
            <Route path="/ps4" element={<Ps4 />}></Route>
            <Route path="/ps4Pad" element={<Ps4Pad />}></Route>
            <Route path="/ps4PadCamo" element={<Ps4PadCamo />}></Route>
            <Route path="/fifa21" element={<Fifa21 />}></Route>
            <Route path="/fifa20" element={<Fifa20 />}></Route>
            <Route path="/pes20" element={<Pes20 />}></Route>
            <Route path="/Nba2k20" element={<Nba2k20 />}></Route>
            <Route path="/game" element={<Game />}></Route>
            <Route path="/gameProduct/:id" element={<GameProduct />}></Route>
            <Route path="/gameOverview/:id" element={<GameOverview />}></Route>
            <Route path="/starwars" element={<Starwars />}></Route>

            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/paystack" element={<Paystack />}></Route>

            <Route path="/about_Benix" element={<About />}></Route>
            <Route path="/contactUs_Benix" element={<ContactUs />}></Route>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
