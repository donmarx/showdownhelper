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
    getRelationsImages(PersonalTypeChart);

    return PersonalTypeChart;
}

function getDmgArrays(list){
    var PersonalTypeChart = JSON.parse(JSON.stringify(list));

    console.log(PersonalTypeChart);

    var twoTimesWeak = [];
    var fourTimesWeak = [];
    var twoTimesResist = [];
    var fourTimesResist = [];
    var nodmg = [];

    for(const key in PersonalTypeChart){
        let num = `${PersonalTypeChart[key]}`

        switch(num){
            case "4":
                fourTimesWeak.push(`${key}`);
                break;
            case "2":
                twoTimesWeak.push(`${key}`);
                break;
            case "0.5":
                twoTimesResist.push(`${key}`);
                break;
            case "0.25":
                fourTimesResist.push(`${key}`);
                break;
            case "0":
                nodmg.push(`${key}`)
                break;
            default:
                break;
        }
    }

    return [twoTimesWeak,fourTimesWeak,twoTimesResist,fourTimesResist,nodmg];
};


function getPokemonInfoDiv(list){
    const dmgArrays = getDmgArrays(list);

    var twoTimesWeak = dmgArrays[0],
        fourTimesWeak = dmgArrays[1],
        twoTimesResist = dmgArrays[2],
        fourTimesResist = dmgArrays[3],
        nodmg = dmgArrays[4]

    console.log(twoTimesWeak,fourTimesWeak,twoTimesResist,fourTimesResist,nodmg)

    

}

module.exports = getDmgRelations;
