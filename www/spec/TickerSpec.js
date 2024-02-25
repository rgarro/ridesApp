/**
 *                    __
 *         .,-;-;-,. /'_\
 *       _/_/_/_|_\_\) /
 *     '-<_><_><_><_>=/\
 *       `/_/====/_/-'\_\
 *        ""     ""    ""
 * To help a turtle to cross the Highway is not crime ... 
 * 
 *@author Rolando<rgarro@gmail.com>
 */
 describe("Ticker",function(){

    let rd = new ridesApp();
    rd.authenticate();
    let tick;
    const rideID = "";

    it("should be testable",function(){
        expect(true).toBeTrue();
    });

    it("should check mongodb is valid type",function(){
        tick = new Ticker(rd.mongodb.db(rd.database));
        expect(typeof rd.mongodb.db(rd.database) == "Object").toBeTrue();
    });

    it("should have activeRideExist method",function(){
        expect(tick.activeRideExist).toBeFunction();
    });

    it("should activeRideExist return O on invalid rideID",function(){
        const invalidRideID = sha1("fernando el de solcom roba");
        //var hash = sha1.create();
        //hash.update('fernando el de solcom roba');
        //hash.hex();
        expect(tick.activeRideExist(invalidRideID)==0).toBeTrue();
    });

    it("should activeRideExist return 1 on valid rideID",function(){
        const validRideID = "65aed6522e13bedbc57be18b";
        expect(tick.activeRideExist(validRideID)==1).toBeTrue();
    });

    it("should have addTick method",function(){
        expect(tick.addTick).toBeFunction();
    });

    it("should have startLoop method",function(){
        expect(tick.startLoop).toBeFunction();
    });

    it("should have stopLoop method",function(){
        expect(tick.stopLoop).toBeFunction();
    });

    it("should have tickingLoop method",function(){
        expect(tick.tickingLoop).toBeFunction();
    });

    it("should have setTimestamp method",function(){
        expect(tick.setTimestamp).toBeFunction();
    });

    it("should have setCoordinates method",function(){
        expect(tick.setCoordinates).toBeFunction();
    });

});