import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  const items = ["Lahore", "Karachi", "Quetta", "Islamabad", "Multan"]; //method map
  return (
    <Fragment>
      <h1>List</h1>

      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
// a componenet cant return more than one element (use div or fragment or empty angle brackets which tells react to add a fragment)
//key to track items in case we add or delete items
//braces exception in jsx elements only html element or react comp
// also use a function for this or a const diff msg can be passed if we use a fucntion
