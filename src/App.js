import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);




/** 
        Header
         -logo(Title)
         -List(Nav) Items(Right Side)
         -Cart
        Body
         -search bar
         -restaurant List
          -restaurantcard(many cards)
            -image
            -name
            -rating
            -cusines
        Footer
          -links
          -copyright


        */



//FUNCTIONAL-NEW
//Class Based Component-OLD


//Config Driven UI







//props