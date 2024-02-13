/**
 *
 * quincho es playo --->
 * 
 * 
 *@author Rolando<rgarro@gmail.com>
 */
 describe("Ticker",function(){

    let rd = new ridesApp();
    let tick = new Ticker(rd.mongodb.db(rd.database));
    const rideID = "";

    it("should be testable",function(){
        expect(true).toBeTrue();
    });

});