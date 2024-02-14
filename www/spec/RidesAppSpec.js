/**
 * Uncle sam owns snowbird , mr lehi with all mighty starcruiser ..
 * lemur and laman will abandon jerusalem before defend it
 * 
 * 
 *@author Rolando<rgarro@gmail.com>
 */
describe("ridesApp",function(){

    let rd = new ridesApp();

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

    it("should increment Rides count after calling newRide",async function(){
        const ridesCollection = rd.mongodb.db(rd.database).collection("Rides");
        const initial_count = await ridesCollection.count();
        const rideObject = {name:"increase count ride",ridedate:Date.now(),is_active:true,sport:"hiking"};
        const result = rd.newRide(rideObject);
        const after_count = await ridesCollection.count();
        expect(initial_count < after_count).toBeTrue();
    });
	
});