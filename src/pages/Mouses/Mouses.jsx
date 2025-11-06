import React from "react";
import { Header, Footer } from "../../components";
import "../Keyboards/Keyboards.css";
import ProductDesc from "../../components/ProductDesc/ProductDesc";
import { Products } from "../../constants";

function Mouses() {
  return (
    <>
      <div>
        <Header />
        <div className="main-wrppaer">
          {Products.filter((el) => el.category === 'mouse' ).map((mouse) => (
            <ProductDesc
              id={mouse.id}
              img={mouse.img}
              title={mouse.title}
              desc={mouse.desc}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Mouses;
