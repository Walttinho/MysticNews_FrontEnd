export function Card({news}) {
  console.log(news)
   return (
    <section>
      <h2>{news.title}</h2>
      <p>{news.text}</p>
      <img src={news.image} alt="Image News" />
      <i className="bi bi-hand-thumbs-up"></i>
      <span>{news.likes}</span>
      <i className="bi bi-chat-left"></i>
      <span>{news.commnents}</span>
    </section>
  ); 
}
