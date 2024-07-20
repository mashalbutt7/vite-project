import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Lahore", "Karachi", "Quetta", "Islamabad", "Multan"]; //method map
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
