jQuery($(document).ready(function() {

    jQuery(async function(){
        $(".statbar").on("mouseenter",async function() {

            var pokemon = $(this).text();

            var dmgArrays = await getInformationByName(pokemon)

            var twoTimesWeak = dmgArrays[0],
            fourTimesWeak = dmgArrays[1],
            twoTimesResist = dmgArrays[2],
            fourTimesResist = dmgArrays[3],
            nodmg = dmgArrays[4]

            console.log(`twoTimesWeak: ${twoTimesWeak}\nfourTimesWeak: ${fourTimesWeak}\ntwoTimesResist:${twoTimesResist}\nfourTimesResist:${fourTimesResist}\nnodmg:${nodmg}`)
            
        });

    })

}));