import React from "react";
import { Header, Footer } from "../../components";
import "../Keyboards/Keyboards.css";
import ProductDesc from "../../components/ProductDesc/ProductDesc";
import { Products } from "../../constants";

function Headphones() {
  return (
    <>
      <div>
        <Header />
        <div className="main-wrppaer">
          {Products.filter((el) => el.category === 'headphone' ).map((headphone) => (
            <ProductDesc
              id={headphone.id}
              img={headphone.img}
              title={headphone.title}
              desc={headphone.desc}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Headphones;
