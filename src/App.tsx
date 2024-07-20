import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Lahore", "Karachi", "Quetta", "Islamabad", "Multan"]; //method map
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item: string) => {
          console.log(item);
        }}
      />
    </div>
  );
}

export default App;
