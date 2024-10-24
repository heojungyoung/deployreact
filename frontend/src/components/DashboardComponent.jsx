import React, { Component } from "react";
const $li = document.createElement('li');
$li.appendChild(document.createTextNode('sexual') );

const timgerid = setTimeout(() => {
    console.log('test');
}, 1000);

clearTimeout(timgerid);

console.log($li);

console.log([1, [2,3,4]].flat());

console.log([1, [2, [3,4,5,[6,7]]]].flat(1));

console.log([1, [2, [3,4,5,[6,7]]]].flat(2));

console.log([1, [2, [3,4,5,[6,7]]]].flat(3));


class DashboardComponent extends Component {
    

    render() {
        return (<div>
            Dashboard 페이지

            <ul id ="fruit">

                 <li>cap</li>          
                 <li> Apple
                 </li>
                 <li>banana</li>


            </ul>

        </div>
        );
    }
}

export default DashboardComponent;
