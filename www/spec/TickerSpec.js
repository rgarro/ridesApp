/**
 *
 * quincho es playo --->
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
        //console.log();//quicho es playo ..
        expect(typeof rd.mongodb.db(rd.database) == "Object").toBeTrue();
    });

});