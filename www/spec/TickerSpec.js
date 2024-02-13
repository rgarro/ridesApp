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
        console.log(typeof rd.mongodb.db(rd.database));//quicho es playo ..
        expect(true).toBeTrue();
    });

});