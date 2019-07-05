import React,{useState} from "react";
import PropTypes from "prop-types";

/*other import goes here*/

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Счёт: {count}
      <button onClick={() => setCount(initialCount)}>Сбросить</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  );
}

Counter.propTypes = {};

Counter.defaultProps = {};

export default Counter;