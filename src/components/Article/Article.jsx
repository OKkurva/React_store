import React from "react";
import './Article.css';

const Article = ({ id, img, title, desc }) => {
  return (
    <div>
      <article className="about-item"> 
        <img className="item-img" src={img} alt="Yaroslav" />
        <h5 className="about-item__heading">{title}</h5>
        <p className="about-item__info">{desc}</p>
        <div className="social">
          <a href="https://www.instagram.com/yarik_yakymyshyn/?hl=ru">
            <i className="fa fa-instagram boo"></i>
          </a>
          <a href="https://uk-ua.facebook.com/">
            <i className="fa fa-facebook-f"></i>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Article;
