import "./itemListContainer.css";

function ItemListContainerComponent(props) {
    return (
        <div className="container">
          <h2>{props.greeting}</h2>
        </div>
    );
}

export default ItemListContainerComponent;