import { ChangeEvent } from "react";

const debounce = (fn: Function, delay: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: []) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

const InputDebounced = () => {
  const onChangeHandler = debounce((e: ChangeEvent<HTMLInputElement>) => {
    console.log("event.target.value", e.target.value);
  }, 1000);

  return (
    <div>
      <div>
        <input type="text" onChange={onChangeHandler} />
      </div>
      <div></div>
    </div>
  );
};

export default InputDebounced;
