// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async ()=>{
//         let image = await getImage();
        
//         let img = document.querySelector("#result");
//         img.setAttribute("src", image);
        
// });

// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;

//     } catch (e){
//         console.log("error- ", e);
//         return "No Image found";
//     }
// }




// btn.addEventListener("click", async () =>{
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e){
//         console.log("error- ", e);
//     }
// }


// let url = "https://icanhazdadjoke.com";

// async function getJokes(){
//     try{
//         const config = { headers : { Accept : "application/json" } };
//         let res = await axios.get(url, config);
//         console.log(res);
//     } catch (e){
//         console.log("error: ", e);
//     }
// }


let url = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colleges = await getColleges(country);
    show(colleges);
    
});

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(clg of colleges){
        console.log(clg.name);
        let li = document.createElement("li");
        li.innerText = clg.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;

    } catch(e){
        console.log("error- ", e);
        return [];
    }
}


