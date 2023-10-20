const typeList = require("./typeList.json");

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

module.exports = getDmgRelations;