import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
} from "./CounterSlice";
import styles from "./Counter.module.css";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.container}>
      <h2 className={styles.count}>{count}</h2>
      <div className={styles.containerCount}>
        <p>By one</p>
        <button onClick={() => dispatch(increment())} className={styles.button}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className={styles.button}>
          Decrement
        </button>
      </div>
      <div className={styles.containerCount}>
        <p>By ten</p>
        <button
          onClick={() => dispatch(incrementByAmount(10))}
          className={styles.button}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrementByAmount(10))}
          className={styles.button}
        >
          Decrement
        </button>
      </div>
      <div className={styles.containerCount}>
        <p>IncrementAsync</p>
        <button
          onClick={() => dispatch(incrementAsync(10))}
          className={styles.button}
        >
          IncrementAsync
        </button>
      </div>
    </div>
  );
}
