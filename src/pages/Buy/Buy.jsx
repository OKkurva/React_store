import React from "react";
import { Header, Footer } from "../../components";
import "./Buy.css";
import BuyBox from "../../components/BuyBox/BuyBox";
import { buyBoxes } from "../../constants";

function Buy() {
  return (
    <>
      <div>
        <Header />
        <div className="box">
          {buyBoxes.map((box) => (
            <BuyBox
             key={box.id} 
              id={box.id}
              img={box.img}
              title={box.title}
              desc={box.desc}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Buy;
