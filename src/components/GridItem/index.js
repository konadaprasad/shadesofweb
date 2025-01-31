import "./index.css";

const GridItems = (props) => {
  const { itemsList } = props;
  const { id, heading, image, content } = itemsList;

  return (
    <div className="list-cont">
      <img src={image} alt={id} className="image" />
      <div className="grid-cont">
        <p className="para">{content}</p>
      </div>
      <div className="cont">
        <h1 className="heading">{heading}</h1>
      </div>
    </div>
  );
};

export default GridItems;
