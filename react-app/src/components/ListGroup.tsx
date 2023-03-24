import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Los Angeles", "London", "Paris"];

  // Event Handler
  const handleClicked = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={handleClicked}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
