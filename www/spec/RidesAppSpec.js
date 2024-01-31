/**
 * uncle sam owns snowbird , mr lehi with all mighty starcruiser ..
 * 
 */
describe("ridesApp",function(){

    let rd = new ridesApp();

    it("should be testable",function(){
        expect(true).toBeTrue();
    });

	it("should have init method",function(){
        expect(rd.authenticate).toBeFunction();
    });
	
});