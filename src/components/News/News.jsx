import "./news.scss";
import NewsItem from "./NewsItem/NewsItem";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination/Pagination";

function News() {
  const [news, setNews] = useState([]);
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(3);

  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=bitcoin&country=us&apiKey=e3760625ae3b4bf8bfd3adb5a98aeaec"
      );
      setNews(res.data.articles);
      console.log(res);
    };

    getNews();
  }, []);

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="news">
      <h2 className="section-title">News</h2>
      <div className="news__list">
        {currentNews.map((item, idx) => (
          <NewsItem
            title={item.title}
            description={item.description}
            url={item.url}
            urlToImage={item.urlToImage}
            loading={loading}
            key={idx}
          />
        ))}
      </div>
      <Pagination
        newsPerPage={newsPerPage}
        totalNews={20}
        paginate={paginate}
      />
    </section>
  );
}
export default News;
