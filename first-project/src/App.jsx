//import styles from './styles.module.css';
import './main.css';
//import './App.css';
import Button from "./components/Button";
import withClickCounter from "./components/withClickCounter";
//import Counter from "./components/Counter"

import withTheme from "./components/withTheme";


// const EnhancedButton = withClickCounter(withTheme(Button));
// const ButtonWithTheme = withTheme(Button);
function App() {
  // return <EnhancedButton text = "Click me!"/>;
  return(
  <h1 className="text-blue-600"> Vinit</h1>
  //  <h1 className={styles.title}> Hello Vinit</h1>
  // Inline CSS
  // <h1 style={{color : "blueviolet"}}> Vinit</h1>
)
  
  
    
  // return <ButtonWithTheme/>;
}

export default App;
