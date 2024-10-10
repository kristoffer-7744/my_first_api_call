// Created by Krishna irmalwar
let url = "http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getCol(country);
    showcol(colArr);
})

function showcol(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        let li = document.createElement("li");
        li.innerText = `Collage : ${col.name},    location : ${col.country}`;
        list.appendChild(li);
    }
}
async function getCol(country) {
    try{
        let res = await axios.get(url + country);
        return res.data;
    }catch(e){
        console.log("Error - ", e);
        return [];
    }
   
}