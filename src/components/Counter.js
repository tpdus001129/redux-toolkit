import { useSelector, useDispatch } from "react-redux";
import { up } from "../redux/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });

  return (
    <div>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

export default Counter;
