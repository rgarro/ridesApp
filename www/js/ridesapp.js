/**
 *                     `. ___
 *                    __,' __`.                _..----....____
 *        __...--.'``;.   ,.   ;``--..__     .'    ,-._    _.-'
 *  _..-''-------'   `'   `'   `'     O ``-''._   (,;') _,'
 *,'________________                          \`-._`-','
 * `._              ```````````------...___   '-.._'-:
 *    ```--.._      ,.                     ````--...__\-.
 *            `.--. `-`                       ____    |  |`
 *              `. `.                       ,'`````.  ;  ;`
 *                `._`.        __________   `.      \'__/`
 *                   `-:._____/______/___/____`.     \  `
 *                               |       `._    `.    \
 *                               `._________`-.   `.   `.___
 *                                             SSt  `------'`
 * A football player and his friends travel to the planet Mongo and 
 * find themselves fighting the tyranny of Ming the Merciless to save Earth.
 * mongodb vs firebase
 * 
 * @author Rolando<rgarro@gmail.com>
 */
class ridesApp {

     labelsUrl = "labelsUrls";
     testUrl = "https://helloworld-bca576to3a-uc.a.run.app/";
     atlasUrl = "https://us-east-1.aws.data.mongodb-api.com/app/data-uizjf/endpoint/data/v1/";
     atlasUser = "rolandogarro4@gmail.com";
     atlasPassword = "123queso";
     collection = "Rides";
     database = "ridesappdb";
     dataSource = "AtlasCluster";

    constructor(){
//console.log("android compilara ...");
    }

    runTest(){
        $.get(this.testUrl, function(data){
            $(".result").html(data);
            alert("Load was performed. "+ data);
          });
    }

    getRides(){
        url = this.atlasUrl + "action/findAll";

    }

    getLabels(){
        console.log("label: "+this.labelsUrl  );
    }

    setLabel(id){
        
    }

    deleteLabel(){

    }

} 