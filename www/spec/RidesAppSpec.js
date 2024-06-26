/**
 * Uncle sam owns snowbird, smoking a joint with Beck ...
 * Beck is the redhair , birdie is lost , snoopy found $60 on the road
 * I found a joint on this.kimball() Function bridge, I swear god I found it
 * Alabama Satan Alabama satan has opreys and f22's  please increase
 * my expedia balance ...
 * 
 * 
 *@author Rolando<rgarro@gmail.com>
 */
describe("ridesApp",function(){

    let rd = new ridesApp();

    beforeAll(function() {
        console.log("before all ...");
        rd.authenticate();
      });

    it("should be testable",function(){
        expect(true).toBeTrue();
    });

	it("should have init method",function(){
        expect(rd.authenticate).toBeFunction();
    });

    it("should have getRides method",function(){
        expect(rd.getRides).toBeFunction();
    });

    it("should have newRide method",function(){
        expect(rd.newRide).toBeFunction();
    });

    /*it("should have newRide method",function(){
        expect(rd.setMongoDB).toBeFunction();
    });*/

    /*it("should have setMongoDB throw Error when called without authentication succeded",function(){
        expect(rd.setMongoDB()).toThrowError();
    });*/

    it("should have database_is_set boolean property",function(){
        expect(typeof rd.database_is_set == "boolean").toBeTrue();
    });


    it("should have database_is_set with false",function(){
        expect(rd.database_is_set).toBeFalse();
    });

    it("should have database_is_set set to true after setMongoDB call",function(){
        //rd.authenticate();//included on auth
        //rd.setMongoDB();
        expect(rd.database_is_set).toBeTrue();
    });

    it("should increment Rides count after calling newRide",async function(){
        const ridesCollection = rd.mongodb.db(rd.database).collection("Rides");
        const initial_count = await ridesCollection.count();
        const rideObject = {name:"TEST Ride: "+(new Date().toString()),ridedate:Date.now(),is_active:true,sport:"hiking"};
        const result = rd.newRide(rideObject);
        const after_count = await ridesCollection.count();
        expect(initial_count < after_count).toBeTrue();
    });
	
});