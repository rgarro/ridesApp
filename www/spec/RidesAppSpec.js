/**
 *
 * uncle sam owns snowbird , mr lehi with all mighty starcruiser ..
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

    it("should increment Rides count after calling newRide",function(){
    
    });
	
});