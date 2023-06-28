import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter } from "./CardStyle";

export function Card(props) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{props.title}</h2>
          <img src={props.banner} alt="Image News" />
        </div>
        <TextLimit text={props.text} limit={200}/>
      </CardBody>
      <CardFooter>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{props.likes?.length}</span>
        </div>
        <div>
          <i className="bi bi-chat-left"></i>
          <span>{props.comments?.length}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
