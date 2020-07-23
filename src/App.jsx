import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
}

function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const { data } = await Axios.get(url);
      setPayload(data);
    } catch {
      setError("hello from setError");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  }, []);
  //this means ComponentDidMount. not ComponentDidUpdate

  return { payload, loading, error };
}

const dataUrl = {
  file: "https://purr.objects-us-east-1.dream.io/i/sexy.jpeg",
};

export default function App() {
  const name = useInput("");
  const { payload, loading, error } = useFetch(dataUrl);
  console.log(name);
  return (
    <div className="App">
      <h1>Use Hooks</h1>
      <br />
      <input {...name} placeholder="Whats your name" />
      {/* <input value={name.value} onChange={name.onChange} placeholder="Whats your name" /> */}
      <br />
      {loading && <span>loading your cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} />}
    </div>
  );
}
