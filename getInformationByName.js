async function getInformationByName(pokemon){
    //standardizes the names for the api
    var name = pokemon.trim().replace(" ", "-").toLowerCase()

    var url = 'https://pokeapi.co/api/v2/pokemon/' + name;

    var res = await fetch(url);
    var info = await res.json();


    var typesUrl = [];
    for(let i=0; i < info["types"].length; i++){
        typesUrl.push(info["types"][i]["type"]["url"]);
    };

    var PersonalTypeChart = await getDmgRelations(typesUrl);

    return PersonalTypeChart;

};

function getPos(event){
    let x = event.clientX;
    let y = event.clientY;

    const helper = document.getElementById('helper');
    helper.style.top = y + "px";
    helper.style.left = x + "px";
};