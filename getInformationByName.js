async function getInformationByName(pokemon){
    //standardizes the names for the api
    const name = pokemon.trim().replace(" ", "-").toLowerCase();
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name;
    const res = await fetch(url);
    if (res.status !== 200){
        const status = res.status
        let twoTimesWeak = [];
        let fourTimesWeak = [];
        let twoTimesResist = [];
        let fourTimesResist = [];
        let nodmg = [];
        return [status,twoTimesWeak,fourTimesWeak,twoTimesResist,fourTimesResist,nodmg];
    } else {
        const info = await res.json();
        const typesUrl = [];
        for(let i=0; i < info["types"].length; i++){
            typesUrl.push(info["types"][i]["type"]["url"]);
        }
        return await getDmgRelations(typesUrl);
    }
}