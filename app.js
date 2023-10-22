jQuery($(document).ready(function() {

    typeImages = {
        electric : '<img src="/images/Electric.png" width="60px"></img>',
        dark : '<img src="/images/Dark.png" width="60px"></img>',
        dragon : '<img src="/images/Dragon.png" width="60px"></img>',
        bug : '<img src="/images/Bug.png" width="60px"></img>',
        fairy : '<img src="/images/Fairy.png" width="60px"></img>',
        fighting : '<img src="/images/Fighting.png" width="60px"></img>',
        fire : '<img src="/images/Fire.png" width="60px"></img>',
        flying : '<img src="/images/Flying.png" width="60px"></img>',
        ghost : '<img src="/images/Ghost.png" width="60px"></img>',
        grass : '<img src="/images/Grass.png" width="60px"></img>',
        ground : '<img src="/images/Ground.png" width="60px"></img>',
        ice : '<img src="/images/Ice.png" width="60px"></img>',
        normal : '<img src="/images/Normal.png" width="60px"></img>',
        poison : '<img src="/images/Poison.png" width="60px"></img>',
        psychic : '<img src="/images/Psychic.png" width="60px"></img>',
        rock : '<img src="/images/Rock.png" width="60px"></img>',
        steel : '<img src="/images/Steel.png" width="60px"></img>',
        water : '<img src="/images/Water.png" width="60px"></img>'}


    jQuery(async function(){
        $(".statbar").on("mouseenter",async function(event) {

            var pokemon = $(this).text();

            var [twoTimesWeak, 
                 fourTimesWeak, 
                 twoTimesResist, 
                 fourTimesResist, 
                 nodmg] = await getInformationByName(pokemon);

            var [x,y] = getPos(event);

            console.log(`twoTimesWeak: ${twoTimesWeak}\nfourTimesWeak: ${fourTimesWeak}\ntwoTimesResist:${twoTimesResist}\nfourTimesResist:${fourTimesResist}\nnodmg:${nodmg}`)
            
            //style top and left
            var newDiv = '<div id="helper"></div>';

            $("body").append(newDiv);
            
            if(fourTimesWeak.length>0){
                var fourTimesWeakDiv = '<div id="fourTimesWeak"><p>Four Times Weak:</p><br></div>'
                $("#helper").append(fourTimesWeakDiv);

                for(let i=0; i<fourTimesWeak.length; i++){
                    $("#fourTimesWeak").append(typeImages[fourTimesWeak[i]]);
                    console.log(fourTimesWeak[i]);
                    console.log(typeImages[fourTimesWeak[i]])
                };
            };

            if(twoTimesWeak.length>0){
                var twoTimesWeakDiv = '<div id="twoTimesWeak"><p>Two Times Weak:</p><br></div>'
                $("#helper").append(twoTimesWeakDiv);

                for(let i=0; i<twoTimesWeak.length; i++){
                    $("#twoTimesWeak").append(typeImages[twoTimesWeak[i]]);
                    console.log(twoTimesWeak[i]);
                    console.log(typeImages[twoTimesWeak[i]])
                };
            };

            if(fourTimesResist.length>0){
                var fourTimesResistDiv = '<div id="fourTimesResist"><p>Four Times Resist:</p><br></div>'
                $("#helper").append(fourTimesResistDiv);

                for(let i=0; i<fourTimesResist.length; i++){
                    $("#fourTimesResist").append(typeImages[fourTimesResist[i]]);
                    console.log(fourTimesResist[i]);
                    console.log(typeImages[fourTimesResist[i]])
                };
            };

            if(twoTimesResist.length>0){
                var twoTimesResistDiv = '<div id="twoTimesResist"><p>Two Times Resist:</p><br></div>'
                $("#helper").append(twoTimesResistDiv);

                for(let i=0; i<twoTimesResist.length; i++){
                    $("#twoTimesResist").append(typeImages[twoTimesResist[i]]);
                    console.log(twoTimesResist[i]);
                    console.log(typeImages[twoTimesResist[i]])
                };
            };

            if(nodmg.length>0){
                var nodmgDiv = '<div id="nodmg"><p>Two Times Resist:</p><br></div>'
                $("#helper").append(nodmg);

                for(let i=0; i<nodmg.length; i++){
                    $("#nodmg").append(typeImages[nodmg[i]]);
                    console.log(nodmg[i]);
                    console.log(typeImages[nodmg[i]])
                };
            };

        });
        
         $(".statbar").on("mouseleave",async function(event){
            $("#helper").delay(1000).remove();
        }); 

    })

}));