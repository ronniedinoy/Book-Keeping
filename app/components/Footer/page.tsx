import React from "react";

const ShowDate = new Date();
const PresentDate =
  ShowDate.getDate() +
  "/" +
  (ShowDate.getDate() + 1) +
  "/" +
  ShowDate.getFullYear();
const DateString = ShowDate.toDateString();

// const TimeNow = document.getElementById("time")
//   setInterval(() =>{
//     const d = new Date()
//     Time.innerHTML = d.toLocaleTimeString()
//   },1000)

const page = () => {
  return (
    <div>
      <h3>{DateString}</h3>
    </div>
  );
};

export default page;
