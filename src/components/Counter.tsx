import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { decrement, increment } from '../store/slices/counterSlice';

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Typography variant="h4">Counter: {count}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
