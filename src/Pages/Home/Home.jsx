import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../Data.js";
import { getAllNews } from "../../services/newsService";
import { HomeBody } from "./HomeStyled";

export default function Home() {
  async function findAllNews() {
    const response = await getAllNews();
    console.log(response);
  }
  findAllNews();

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item, index) => {
          return <Card key={index} news={item} />;
        })}
      </HomeBody>
    </>
  );
}
