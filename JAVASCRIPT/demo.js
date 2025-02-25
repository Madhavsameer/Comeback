async function dalalao(){
    let url="https://randomuser.me/api/";
    let data=await fetch(url);
    let rawadat=await data.json();
    console.log(rawadat);
}
dalalao();
