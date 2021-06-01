import { Route } from "react-router-dom";
import Products from "./components/Products";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div>
      <Route path="/welcome" component={Welcome} />
      <Route path="/products" component={Products} />
    </div>
  );
}

export default App;
