import { useEffect, useState } from "react";
import io from "socket.io-client";
let socket = io.connect("http://89.39.208.123", {
  auth: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidGVsbCI6IjA5OTExMDgzNzMzIiwibmFtZSI6Im1vaGFtYWQgaG9zZWluaSIsInVzZXJuYW1lIjoibWFtZCIsImlhdCI6MTY3MzYwNTAzOX0.JNVdNjU_VPpChHDhsOTStV2wyvKeryvIM1q7LLXmYiw",
  },
});

const Home = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  // const socket = socketIO.connect("http://89.39.208.123");
  socket.on("message", (data) => {
    console.log("connected", data);
  });
  // console.log(socket)
  // const socketInitializer = async () => {
  //   await fetch("/api/hello");
  //   socket = io();

  //   socket.on("update-input", (msg) => {
  //     setInput(msg);
  //   });
  // };
  // const newSocket = io(`89.39.208.123`);
  // useEffect(() => {
  //   const socket = socketIOClient("http://89.39.208.123:2023");
  //   socket.on("message", (data) => {
  //     console.log(data);
  //   });
  // }, []);
  // useEffect(() => {
  //   socket.on("message", (data) => {
  //     console.log("connected", data);
  //   });
  // }, []);
  const onChangeHandler = () => {
    socket.emit("send", "maham");
  };
  // useEffect(() => socketInitializer(), []);

  return (
    <div>
      {/* <input
        placeholder="Type something"
        value={input}
        // onChange={onChangeHandler}
      /> */}
      <button onClick={() => onChangeHandler()}>connect</button>
    </div>
  );
};

export default Home;
