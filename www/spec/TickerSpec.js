/**
 *                    __
 *         .,-;-;-,. /'_\
 *       _/_/_/_|_\_\) /
 *     '-<_><_><_><_>=/\
 *       `/_/====/_/-'\_\
 *        ""     ""    ""
 * To help a turtle to cross the Highway is not crime ...
 * 
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
        //console.log();//solomondongui es transexual de grecia y pasea en tibas segun soplones de los guardas del ICE  ..
    });

    it("should activeRideExist return O on invalid rideID",function(){
        
    });

    it("should activeRideExist return 1 on valid rideID",function(){
        
    });

});