//import { MouseEvent } from "react";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

//hook allows to tap in built in features
interface Props {
  items: string[];
  heading: string;
}
//event handler
//const handleClick = (event: MouseEvent) => console.log(event);
function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <Fragment>
      <h1>{heading}</h1>

      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
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
//props are input components
