typeImages = {
    electric : `<img src=${chrome.runtime.getURL("images/Electric.png")} width="60px"></img>`,
    dark : `<img src=${chrome.runtime.getURL("images/Dark.png")} width="60px"></img>`,
    dragon : `<img src=${chrome.runtime.getURL("images/Dragon.png")} width="60px"></img>`,
    bug : `<img src=${chrome.runtime.getURL("images/Bug.png")} width="60px"></img>`,
    fairy : `<img src=${chrome.runtime.getURL("images/Fairy.png")} width="60px"></img>`,
    fighting : `<img src=${chrome.runtime.getURL("images/Fighting.png")} width="60px"></img>`,
    fire : `<img src=${chrome.runtime.getURL("images/Flying.png")} width="60px"></img>`,
    flying : `<img src=${chrome.runtime.getURL("images/Flying.png")} width="60px"></img>`,
    ghost : `<img src=${chrome.runtime.getURL("images/Ghost.png")} width="60px"></img>`,
    grass : `<img src=${chrome.runtime.getURL("images/Grass.png")} width="60px"></img>`,
    ground : `<img src=${chrome.runtime.getURL("images/Ground.png")} width="60px"></img>`,
    ice : `<img src=${chrome.runtime.getURL("images/Ice.png")} width="60px"></img>`,
    normal : `<img src=${chrome.runtime.getURL("images/Normal.png")} width="60px"></img>`,
    poison : `<img src=${chrome.runtime.getURL("images/Poison.png")} width="60px"></img>`,
    psychic : `<img src=${chrome.runtime.getURL("images/Psychic.png")} width="60px"></img>`,
    rock : `<img src=${chrome.runtime.getURL("images/Rock.png")} width="60px"></img>`,
    steel : `<img src=${chrome.runtime.getURL("images/Steel.png")} width="60px"></img>`,
    water : `<img src=${chrome.runtime.getURL("images/Water.png")} width="60px"></img>`
}

    function waitForElement(elementPath, callBack){
        window.setTimeout(function(){
          if($(elementPath).length){
            callBack(elementPath, $(elementPath));
          }else{
            waitForElement(elementPath, callBack);
          }
        },500)
      }

      waitForElement(".statbar",function(){
        jQuery(async function(){
            $(".statbar").on("mouseenter",async function(event) {
        
                console.log("hovered");
        
                var pokemon = $(this).find("strong").text();
                var level = $(this).find("small").text();
        
                console.log(pokemon)
        
                pokemon = pokemon.replace(level, "")
        
                var [twoTimesWeak, 
                     fourTimesWeak, 
                     twoTimesResist, 
                     fourTimesResist, 
                     nodmg] = await getInformationByName(pokemon);
                
                //style top and left
                var newDiv = '<div id="helper"></div>';
        
                $("body").append(newDiv);
                
                if(fourTimesWeak.length>0){
                    var fourTimesWeakDiv = '<div id="fourTimesWeak" class="stat"><p>Four Times Weak:</p></div>'
                    $("#helper").append(fourTimesWeakDiv);
        
                    for(let i=0; i<fourTimesWeak.length; i++){
                        $("#fourTimesWeak").append(typeImages[fourTimesWeak[i]]);
                    };
                };
        
                if(twoTimesWeak.length>0){
                    var twoTimesWeakDiv = '<div id="twoTimesWeak" class="stat"><p>Two Times Weak:</p></div>'
                    $("#helper").append(twoTimesWeakDiv);
        
                    for(let i=0; i<twoTimesWeak.length; i++){
                        $("#twoTimesWeak").append(typeImages[twoTimesWeak[i]]);
                    };
                };
        
                if(fourTimesResist.length>0){
                    var fourTimesResistDiv = '<div id="fourTimesResist" class="stat"><p>Four Times Resist:</p></div>'
                    $("#helper").append(fourTimesResistDiv);
        
                    for(let i=0; i<fourTimesResist.length; i++){
                        $("#fourTimesResist").append(typeImages[fourTimesResist[i]]);
                    };
                };
        
                if(twoTimesResist.length>0){
                    var twoTimesResistDiv = '<div id="twoTimesResist" class="stat"><p>Two Times Resist:</p></div>'
                    $("#helper").append(twoTimesResistDiv);
        
                    for(let i=0; i<twoTimesResist.length; i++){
                        $("#twoTimesResist").append(typeImages[twoTimesResist[i]]);
                    };
                };
        
                if(nodmg.length>0){
                    var nodmgDiv = '<div id="nodmg" class="stat"><p>Immune To:</p></div>'
                    $("#helper").append(nodmgDiv);
        
                    for(let i=0; i<nodmg.length; i++){
                        $("#nodmg").append(typeImages[nodmg[i]]);
                    };
                };
        
                getPos(event);
        
            });
            
             $(".statbar").on("mouseleave",async function(event){
                $("#helper").remove();
            }); 
        
        });
        console.log("done");
    });

        