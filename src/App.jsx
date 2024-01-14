import React from "react";

const App = () => {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";
  const cssstyle = {};

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssstyle.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "Good Afternoon";
    cssstyle.color = "Orange";
  } else {
    greeting = "Good Night";
    cssstyle.color = "Black";
  }

  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={cssstyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
};

export default App;
