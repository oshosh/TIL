const React = require("react");

function WordRelayHook() {
  const [useInput, setUseInput] = React.useState({
    word: "한글",
    value: "",
    result: "",
  });
  const onRefInput = React.useRef(null);

  const { word, value, result } = useInput;

  React.useEffect(() => {
    onRefInput.current.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setUseInput({
        result: "딩동댕",
        word: value,
        value: "",
      });
    } else {
      setUseInput(({ word }) => {
        return {
          word: word,
          result: "땡",
          value: "",
        };
      });
    }
  };

  const onChange = (e) => {
    setUseInput((prev) => {
      return {
        ...prev,
        value: e.target.value,
      };
    });
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input ref={onRefInput} value={value} onChange={onChange} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
}

module.exports = WordRelayHook;
