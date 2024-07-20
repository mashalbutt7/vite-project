import Alert from "./components/alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Lahore", "Karachi", "Quetta", "Islamabad", "Multan"]; //method map
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
