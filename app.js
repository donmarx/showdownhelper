typeList = {
    "normal" : 1,
    "fire" : 1,
    "water" : 1,
    "grass" : 1,
    "electric" : 1,
    "psychic" : 1,
    "ice" : 1,
    "fighting" : 1,
    "poison" : 1,
    "ground" : 1,
    "flying" : 1,
    "psychich" : 1,
    "bug" : 1,
    "rock" : 1,
    "ghost" : 1,
    "dark" : 1,
    "dragon" : 1,
    "steel" : 1,
    "fairy" : 1
}

async function getDmgRelations(typesUrl){

    var PersonalTypeChart = JSON.parse(JSON.stringify(typeList));

    var weakness = []
    var resist = []
    var nodmg = []

    for(let i=0; i< typesUrl.length; i++){
        let typeRes = await fetch(typesUrl[i]);
        let typeJson = await typeRes.json()
        weakness.push(typeJson["damage_relations"]['double_damage_from']);
        resist.push(typeJson["damage_relations"]['half_damage_from']);
        nodmg.push(typeJson["damage_relations"]['no_damage_from']);
    }

    //weakness calculator
    for(let i = 0; i<weakness.length; i++){
        for(let j =0; j<weakness[i].length; j++){
            let n = weakness[i][j]['name'];
            PersonalTypeChart[n] = PersonalTypeChart[n]*2;
        }
    } 

    //resistances calculator
    for(let i = 0; i<resist.length; i++){
        for(let j =0; j<resist[i].length; j++){
            let n = resist[i][j]['name'];
            PersonalTypeChart[n] = PersonalTypeChart[n]*0.5;
        }
    }

    //immunities calculator
    for(let i = 0; i<nodmg.length; i++){
        for(let j =0; j<nodmg[i].length; j++){
            let n = nodmg[i][j]['name'];
            PersonalTypeChart[n] = 0;
        }
    }

    return PersonalTypeChart;
}

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

    PersonalTypeChart = await getDmgRelations(typesUrl);

    //console.log(PersonalTypeChart)

    return PersonalTypeChart;
};

var fieldConfig = 0;


document.getElementById("submitButton").addEventListener("click", async function() {
    var inputValue = document.getElementById("textInput").value;

    var information = await getInformationByName(inputValue);

    console.log(information);

    switch(fieldConfig){
        case (0):
            document.getElementById("left-enemy").textContent = inputValue;
            fieldConfig++;
            console.log(fieldConfig)
            break;
        case (1):
            document.getElementById("right-enemy").textContent = inputValue;
            fieldConfig++;
            console.log(fieldConfig)
            break;
        case (2):
            document.getElementById("left-ally").textContent = inputValue;
            fieldConfig++;
            console.log(fieldConfig)
            break;
        case (3):
            document.getElementById("right-ally").textContent = inputValue;
            fieldConfig = 0;
            console.log(fieldConfig)
            break;
    }
        


});