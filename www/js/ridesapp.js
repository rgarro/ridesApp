/**
 *       /\
 *      /..\       _
 *     /....\   _ // AMIGA
 *    /......\  \X/  Powered by Motorola.
 *   /_......_\
 *     |....|
 *     |....|                             Taste the power. TODAY!
 *____ l....l _________________________ Amiga, Multitasking since 1985. ___
 *     |....|
 *     |....|             __________________________________________________
 *     |....|            |==================================================|
 *     |....|            | __  ___________  ___________            AMIGA == |
 *     |....|            |[_j  L_I_I_I_I_j  L_I_I_I_I_j            ~~~~~ == |
 *     |....|            |________________________________ _______ ______==_|
 *     |....|            |[__I_I_I_I_I_I_I_I_I_I_I_I_I_I_] [__I__] [_I_I_I_]|
 *     |....|            |[___I_I_I_I_I_I_I_I_I_I_I_I_]  |    _    [_I_I_I_]|
 *     |....|            |[__I_I_I_I_I_I_I_I_I_I_I_I_L___|  _[_]_  [_I_I_I_]|
 *     |....|            |[_____I_I_I_I_I_I_I_I_I_I_I____] [_I_I_] [_I_I_T ||
 *     |....|            | [__I__I_________________I__L_] ________ [___I_I_j|
 *     `----'            |                                                  |
 *                       l__________________________________________________|
 * 
 * 
 * @author Rolando<rgarro@gmail.com>
 */
class ridesApp {

     labelsUrl = "labelsUrls";
     testUrl = "https://helloworld-bca576to3a-uc.a.run.app/"

    constructor(){
console.log("android compilara ...");
    }

    runTest(){
        $.get(this.testUrl, function(data){
            $(".result").html(data);
            alert("Load was performed. "+ data);
          });
    }

    getLabels(){
        console.log("label: "+this.labelsUrl  );
    }

    setLabel(id){
        
    }

    deleteLabel(){

    }

} 