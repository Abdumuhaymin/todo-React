import axios from "axios";
import React from "react";
import { Forms } from "./components/form";
import { Card } from "./components/card";
import { ToastContainer } from "react-toastify";

function App() {
  const [data, useData] = React.useState([]);
  axios.get("http://localhost:3600/user").then((res) => {
    const item = res.data;
    useData(item);
  });

  return (
    <>
      <div className="w-[100%] bg-bgMain h-[100vh]">
        <div className="container pt-[50px]">
          <ToastContainer />
          <Forms />
          <div className="overflow-y-scroll w-[600px] mx-auto max-h-[300px]">
            {data.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
