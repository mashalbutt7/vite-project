import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </Fragment>
  );
}
export default ListGroup;
// a componenet cant return more than one element (use div or fragment or empty angle brackets which tells react to add a fragment)
