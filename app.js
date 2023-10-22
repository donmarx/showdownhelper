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
            var newDiv = '<div class="helper"></div>';
            
            if(fourTimesWeak.length>0){
                var fourTimesWeakDiv = '<div class="fourTimesWeak"><p>Four Times Weak:</p><br></div>'
                var fourTimesImagesDiv = '<div></div>'

                for(let i=0; i<fourTimesWeak.length; i++){
                    $(fourTimesImagesDiv).append(typeImages[fourTimesWeak[i]]);
                    console.log(fourTimesWeak[i]);
                    console.log(typeImages[fourTimesWeak[i]])
                };
                console.log(fourTimesImagesDiv);
                $(fourTimesWeakDiv).append(fourTimesImagesDiv);
                $(newDiv).append(fourTimesWeakDiv);
            };

            $("body").prepend(newDiv);

           /* if(twoTimesWeak.length>0){
                var $twoTimesWeak = '<div class="twoTimesWeak"><p>two Times Weak:</p><br></div>'
                var $twoTimesImages = '<div></div>'

                for(let i=0; i<twoTimesWeak.length; i++){
                    $twoTimesImages.append(typeImages[twoTimesWeak[i]]);
                };

                $twoTimesWeak.append($fourTimesImages);
                $newDiv.append($fourTimesWeak);
            }; */

        });

    })

}));