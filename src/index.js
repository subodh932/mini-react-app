import React from "react";
import ReactDOM from "react-dom";
import"./index.css"

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssstyle = { }

if (curDate>=1 && curDate<12) {
    greeting ='Good Morning'
    cssstyle.color = 'green'
} else if(curDate>=12 && curDate<19){
    greeting ='Good Afternoon'
    cssstyle.color = 'Orange'
} else{
    greeting = 'Good Night'
    cssstyle.color = 'Black'
}

ReactDOM.render(
<>
<div>
<h1>Hello Sir, <span style={cssstyle}>{greeting}</span></h1>

</div>
</>,
document.getElementById('root')
);
 