import React from "react";
import "./HomePage.css";
import avatar1 from "../../img/avatar1.jpg";
import { Header, Footer } from "../../components";
import { Creators } from "../../constants";
import { Article } from "../../components/Article";
import { Slider } from "../../components/Slider";

function HomePage() {
  return (
    <>
      <div className="homePage">
        <Header />

        <main className="main-content">
         <Slider/>

          <section className="about">
            <div className="main-wrapper about-wrapper">
              {Creators.map((item) => (
                <Article
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
