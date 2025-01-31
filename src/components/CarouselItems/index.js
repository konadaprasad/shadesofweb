import "./index.css";

const CarouselItems = (props) => {
  const { items } = props;
  const { id, image } = items;

  return (
    <div className="list-cont">
      <img src={image} alt={id} className="image1" />
    </div>
  );
};

export default CarouselItems;
