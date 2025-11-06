import React from "react";
import { Header, Footer } from "../../components";
import "./Keyboards.css";
import ProductDesc from "../../components/ProductDesc/ProductDesc";
import { Products } from "../../constants";

function Keyboards() {
  return (
    <>
      <div>
        <Header />

        <div className="main-wrppaer">
          {Products.filter((el) => el.category === 'keyboard' ).map((keyboard) => (
            <ProductDesc
              id={keyboard.id}
              img={keyboard.img}
              title={keyboard.title}
              desc={keyboard.desc}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Keyboards;
