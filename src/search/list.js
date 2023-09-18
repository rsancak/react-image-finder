import Item from './item';

function List({ imagesPlaceholder }) {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image, index) => {
        return <Item key={index} image={image} />;
      })}
    </div>
  );
}

export default List;
