import DisplayTodos from "./components/displayTodos";
import Todos from "./components/todos";

function App() {
  return (
    <div className="d-flex flex-column align-items-center my-5 App">
      <h1 className="my-2">
        What's up for today?
      </h1>
      <div className="my-3">
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;
