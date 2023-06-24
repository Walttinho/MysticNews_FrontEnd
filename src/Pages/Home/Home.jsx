import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import {news} from "../../Data.js"

export default function Home() {
  return (
    <>
      <Navbar />
      {news.map((item, index) =>{
        return <Card key={index} news={item}/>

      })}
      
    </>
  );
}
