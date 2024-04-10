import Counter from "./State/Counter/Counter";
import redux from "../src/assets/redux.svg";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <img src={redux} alt="ReduxLogo" height={280} width={560} />
      <Counter />
    </div>
  );
}

export default App;
