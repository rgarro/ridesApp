/**
 *                      `. ___
 *                     __,' __`.                _..----....____
 *         __...--.'``;.   ,.   ;``--..__     .'    ,-._    _.-'
 *   _..-''-------'   `'   `'   `'     O ``-''._    ,;') _,'
 * ,'________________                          \`-._`-','
 *  `._              ```````````------...___   '-.._'-:
 *    ```--.._      ,.                     ````--...__\-.
 *            `.--. `-`                       ____    |  |`
 *              `. `.                       ,'`````.  ;  ;`
 *                `._`.        __________   `.      \'__/`
 *                   `-:._____/______/___/____`.     \  `
 *                               |       `._    `.    \
 *                               `._________`-.   `.   `.___
 *                                             SSt  `------'`
 * A Football Player and his Friends travel to the planet Mongo and 
 * find themselves fighting the tyranny of Ming the Merciless to save Earth.
 * Mongodb vs Firebase
 * Le Cafe Noir Android Company 
 * THIS IS THE PROOF OF CONCEPT OF A PYMES PROPOSAL.  
 *
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
     is_authenticated = false;//mr nephi  chapter 1:3 will fly above Vineyard mud..
     DEVICE_ID = "";
     REFRESH_TOKEN = "";
     USER_ID = "";
     rides_list;
     rides_template;
     privateKey = "2e6e32a6-e65d-4a3a-a25e-74f6d5dfd851";
     publicKey = "gydalonr";
     mayapikey = "j78V0iGxREyDTzbV4BLid2IdbC8RGidekEYviWAmYeOTFjtwxbmg1Yfo65wsgrTC";
     REALM_PID = "data-uizjf";//"65aea7dcf39cfd0112e90472";
     REALM_APP;//ridesappdb-ffygd
     mongodb;
     user;
     database_is_set = false;


    constructor(){
        //console.log("el android compilara ...");
        this.REALM_APP = new Realm.App({ id: this.REALM_PID });//que ladre el DES(madre)
        //console.log("realm:"+this.REALM_APP);
    }

    compileTemplates(){
        var source = document.getElementById("rides-template").innerHTML;
        this.rides_template = Handlebars.compile(source);
    }

    async myRealmAuthenticate(){
        //const credentials = Realm.Credentials.emailPassword(this.atlasUser,this.atlasPassword);
        // Create an API Key credential
        const credentials = Realm.Credentials.apiKey(this.mayapikey);
        // Authenticate the user
        this.user = await this.REALM_APP.logIn(credentials);//throw new Error("oops");
        // App.currentUser updates to match the logged in user
        //this.mongodb = await this.user.mongoClient(this.dataSource);
        this.is_authenticated = true;
    }

    async setMongoDB(){
        if(this.is_authenticated){
            this.mongodb = await this.user.mongoClient(this.dataSource);
            this.database_is_set = true;
        }else{
            throw new Error("call authenticate first before setting mongoClient ..");
        }
    }

    authenticate(){
        this.myRealmAuthenticate();
    }

    ajaxAuthenticate(){
        $.ajax({
            url: this.atlasAuthUrl,
            type: 'post',
            data: {
                username: this.atlasUser,
                password: this.atlasPassword
            },
            dataType: 'json',
            async:false,
            success: (function (data) {
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

    async getRides(){
        //console.log("Je mange le poulet rouge ..");
        const ridesCollection = this.mongodb.db(this.database).collection("Rides");
        var ridesData = await ridesCollection.find({is_active : true});
        for (var i = 0; i < ridesData.length; i++) { 
            const date = new Date(ridesData[i].ridedate.high * 1000);
            ridesData[i].fixedDate = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+ " " +date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
          }
        //console.log(ridesData);         
        var html = this.rides_template({rides:ridesData});        
        $(".rides-list-cont").html(html);
    }

    async newRide(rideObject){
        const ridesCollection = this.mongodb.db(this.database).collection("Rides");
        const result = await ridesCollection.insertOne(rideObject);
        return result;
    }

    getLabels(){
        
    }

    setLabel(id){
        
    }

    deleteLabel(){

    }

} 