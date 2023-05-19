/*
* File: app.js
* Author: Cserhati David
* Copyright: 2023, Cserhati David
* Group: Szoft I-2 N
* Date: 2023-05-19
* Github: https://github.com/CserhatiDavid/
* Licenc: GNU GPL
* Nem vállalunk felelősséget a rossz jegyekért
*/
const doc={
    tableBody:document.querySelector("#tbody")
};
const state={
    host:"http://localhost:8000/",
    ship:[]
};
window.addEventListener("load",()=>{
    init();
});
function init() {
    getShips();
}
function getShips() {
    let endpoint="ships";
    let url=state.host+endpoint;
    fetch(url)
    .then(response=>response.json())
    .then(result=>{
        console.log(result)
        state.ship=result;
        renderShips();
    })
}
function renderShips() {
    var rows="";
    state.ship.forEach(ships=>{
        var row=`
            <tr>
                <td>${ships.name}</td>
                <td>${ships.length}</td>
                <td>${ships.price}</td>
                <td>${ships.person}</td>
                <td>${ships.trailer}</td>
            </tr>
        `;
        rows+=row;
        //console.log(ships.name)    
    })
    doc.tableBody.innerHTML=rows;
}