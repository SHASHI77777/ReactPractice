import { carddata } from "./card_data";
import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="header"> Animal Gallery </div>

        <div className="card">
          {carddata.map((elem) => {
            const { id, title, desc, image } = elem;

            return (


              <div className="box" key={id}>
              <div className="image">
                  <img src={image} alt={ `not available`} />
                </div>
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;

