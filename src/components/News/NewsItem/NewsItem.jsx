import React from "react";
import "./newsItem.scss";

function NewsItem({ title, description, url, urlToImage, loading, news }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="news__item">
      <img src={urlToImage} alt="title" />
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default NewsItem;
