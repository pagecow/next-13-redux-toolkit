'use client';

import styles from './page.module.css'

import type { RootState } from './Store/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './Features/counter/counterSlice';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      <button
        aria-label='Increment value'
        className={styles.button}
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label='Decrement value'
        className={styles.button}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        aria-label='Increment by 2'
        className={styles.button}
        onClick={() => dispatch(incrementByAmount(2))}
      >
        Increment by 2
      </button>
    </main>
  )
}
