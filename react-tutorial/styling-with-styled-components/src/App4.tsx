import React, { FormEvent, useState } from "react";

function App4() {
  const [value, setValue] = useState<number | string>("");
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("onSubmit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default App4;
