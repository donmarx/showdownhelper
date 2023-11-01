typeImages = {
  electric: `<img src=${chrome.runtime.getURL("images/Electric.png")} alt="electric" width= 40px"/>`,
  dark: `<img src=${chrome.runtime.getURL("images/Dark.png")} alt="dark" width= 40px"/>`,
  dragon: `<img src=${chrome.runtime.getURL("images/Dragon.png")} alt="dragon" width= 40px"/>`,
  bug: `<img src=${chrome.runtime.getURL("images/Bug.png")} alt="bug" width= 40px"/>`,
  fairy: `<img src=${chrome.runtime.getURL("images/Fairy.png")} alt="fairy" width= 40px"/>`,
  fighting: `<img src=${chrome.runtime.getURL("images/Fighting.png")} alt="fighting" width= 40px"/>`,
  fire: `<img src=${chrome.runtime.getURL("images/Fire.png")} alt="fire" width= 40px"/>`,
  flying: `<img src=${chrome.runtime.getURL("images/Flying.png")} alt="flying" width= 40px"/>`,
  ghost: `<img src=${chrome.runtime.getURL("images/Ghost.png")} alt="ghost" width= 40px"/>`,
  grass: `<img src=${chrome.runtime.getURL("images/Grass.png")} alt="grass" width= 40px"/>`,
  ground: `<img src=${chrome.runtime.getURL("images/Ground.png")} alt="ground" width= 40px"/>`,
  ice: `<img src=${chrome.runtime.getURL("images/Ice.png")} alt="ice" width= 40px"/>`,
  normal: `<img src=${chrome.runtime.getURL("images/Normal.png")} alt="normal" width= 40px"/>`,
  poison: `<img src=${chrome.runtime.getURL("images/Poison.png")} alt="poison" width= 40px"/>`,
  psychic: `<img src=${chrome.runtime.getURL("images/Psychic.png")} alt="psychic" width= 40px"/>`,
  rock: `<img src=${chrome.runtime.getURL("images/Rock.png")} alt="rock" width= 40px"/>`,
  steel: `<img src=${chrome.runtime.getURL("images/Steel.png")} alt="steel" width= 40px"/>`,
  water: `<img src=${chrome.runtime.getURL("images/Water.png")} alt="water" width= 40px"/>`
}

async function handleHover() {
  if (".statbar".length) {

    // Normalize pokemon name before sending to the API
    let pokemon = $(this).find("strong").text();
    const level = $(this).find("small").text();
    pokemon = pokemon.replace(level, "")

    // Show loading to improve user experience
    let newDiv = '<div id="helper"></div>';
    $("body").append(newDiv);

    // Call the API
    const [
      status,
      twoTimesWeak,
      fourTimesWeak,
      twoTimesResist,
      fourTimesResist,
      nodmg
    ] = await getInformationByName(pokemon);

    // Check if the API call was successful
    if (status !== 200){
      let failedToLoadPokemonInfoDiv = '<div id="failedToLoadPokemonInfo" class="stat"><p>Could not load pokemon info!</p></div>';
      $("#helper").append(failedToLoadPokemonInfoDiv);
    } else {
      // Populate helper div with stats
      if (fourTimesWeak.length) {
        let fourTimesWeakDiv = '<div id="fourTimesWeak" class="stat"><p>Four Times Weak:</p></div>';
        $("#helper").append(fourTimesWeakDiv);
        for (let i = 0; i < fourTimesWeak.length; i++) {
          $("#fourTimesWeak").append(typeImages[fourTimesWeak[i]]);
        }
      }
      if (twoTimesWeak.length) {
        let twoTimesWeakDiv = '<div id="twoTimesWeak" class="stat"><p>Two Times Weak:</p></div>';
        $("#helper").append(twoTimesWeakDiv);
        for (let i = 0; i < twoTimesWeak.length; i++) {
          $("#twoTimesWeak").append(typeImages[twoTimesWeak[i]]);
        }
      }
      if (twoTimesResist.length) {
        let twoTimesResistDiv = '<div id="twoTimesResist" class="stat"><p>Two Times Resist:</p></div>';
        $("#helper").append(twoTimesResistDiv);
        for (let i = 0; i < twoTimesResist.length; i++) {
          $("#twoTimesResist").append(typeImages[twoTimesResist[i]]);
        }
      }
      if (fourTimesResist.length) {
        let fourTimesResistDiv = '<div id="fourTimesResist" class="stat"><p>Four Times Resist:</p></div>';
        $("#helper").append(fourTimesResistDiv);
        for (let i = 0; i < fourTimesResist.length; i++) {
          $("#fourTimesResist").append(typeImages[fourTimesResist[i]]);
        }
      }
      if (nodmg.length) {
        let nodmgDiv = '<div id="nodmg" class="stat"><p>Immune To:</p></div>';
        $("#helper").append(nodmgDiv);
        for (let i = 0; i < nodmg.length; i++) {
          $("#nodmg").append(typeImages[nodmg[i]]);
        }
      }
    }
  } else {
    console.log("DOM not loaded yet")
  }
}

$(document).on("mouseenter", ".statbar", handleHover);
$(document).on("mouseleave", ".statbar", function() {
    $("#helper").remove();
});