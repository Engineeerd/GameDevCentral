import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(true);
  return (
    <div className="container">
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <div>Hello World!</div>
        </Alert>
      )}
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">React App</h1>
          <p className="lead">
            A simple CRUD React App with Bootstrap 5 and TypeScript. Lorem mah
            nizzle nizzle things amizzle, tellivizzle adipiscing elit. Nullam
            velizzle, own yo' yo, suscipit quizzle, fo shizzle my nizzle vizzle,
            pot.
          </p>
          <Button>Modal</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
