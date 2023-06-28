
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
/* import { news } from "../../Data.js"; */
import { getAllNews } from "../../services/newsService";
import { HomeBody } from "./HomeStyled";


export default function Home() {
  const [news, setNews] = useState([]);

  async function findNews() {
    const newsResponse = await getAllNews();
    setNews(newsResponse.data.results);
  }

  useEffect(() =>{
    findNews()
      }, {})
 // findNews();
 
  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody>
    </>
  );
}
