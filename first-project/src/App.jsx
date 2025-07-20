
import Button from "./components/Button";
import withClickCounter from "./components/withClickCounter";
//import Counter from "./components/Counter"

import withTheme from "./components/withTheme";


const EnhancedButton = withClickCounter(withTheme(Button));
function App() {
  return <EnhancedButton text = "Click me!"/>;
}

export default App;
