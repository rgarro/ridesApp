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
 * Mongodb vs Firebase
 * Le Cafe Noir Android Company 
 * THIS IS THE PROOF OF CONCEPT OF A PYMES PROPOSAL.  
 * 
 * @author Rolando<rgarro@gmail.com>
 */
class ridesApp {

     labelsUrl = "labelsUrls";
     testUrl = "https://helloworld-bca576to3a-uc.a.run.app/";
     atlasUrl = "https://us-east-1.aws.data.mongodb-api.com/app/data-uizjf/endpoint/data/v1/";
     atlasAuthUrl = "https://realm.mongodb.com/api/client/v2.0/app/data-uizjf/auth/providers/local-userpass/login";
     atlasUser = "rolandogarro4@gmail.com";
     atlasPassword = "123queso";
     collection = "Rides";
     database = "ridesappdb";
     dataSource = "AtlasCluster";
     ACCESS_TOKEN = "";
     is_authenticated = false; 
     DEVICE_ID = "";
     REFRESH_TOKEN = "";
     USER_ID = "";

    constructor(){
//console.log("android compilara ...");
    }

    authenticate(){
        $.ajax({
            url: this.atlasAuthUrl,
            type: 'post',
            data: {
                username: this.atlasUser,
                password: this.atlasPassword
            },
            dataType: 'json',
            success: (function (data) {
                //console.log("Je bois le cafe noir ..");
                //console.log(data);//en jardines de tibas no dejan hacer pulperias .. 
                this.ACCESS_TOKEN = data.access_token;
                this.DEVICE_ID = data.device_id;
                this.REFRESH_TOKEN = data.refresh_token;
                this.USER_ID = data.user_id;
                this.is_authenticated = true;
            }).bind(this)
        });
    }

    runTest(){
        $.get(this.testUrl, function(data){
            $(".result").html(data);
            alert("Load was performed. "+ data);
          });
    }

    getRides(){
        find_url = this.atlasUrl + "action/findAll";
        $.ajax({
            url: find_url,
            type: 'post',
            data: {
                access_token: 'XXXXXXXXXXXXXXXXXXX'
            },
            headers: {
                "Access-Control-Request-Headers": '*',
                "Authorization": 'Bearer ' + this.ACCESS_TOKEN
            },
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
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