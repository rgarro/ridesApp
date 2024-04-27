/**
 * ,           ,
 * /             \
 *((__-^^-,-^^-__))
 * `-_---' `---_-'
 *  <__|o` 'o|__>
 *     \  `  /
 *      ): :(
 *      :o_o: 
 *       "-"  
 * Every Ride has a sport string supplied by Types , typename  ...
 * android watch version not available
 * 
 * 
 * @author Rolando<rgarro@gmail.com>
 */
class Types {
    mongoDatabase;
    database = "ridesappdb";

    constructor(mongodb){
        if(typeof mongodb == "object"){
            this.mongoDatabase = mongodb;
        }else{ 
            throw new Error("Invalid Database Type ...");
        }
    }
    
    async sportNameSelectInput(){
        console.log("Je mange le poulet jaune ..");
        const typesCollection = this.mongoDatabase.db(this.database).collection("Types");
        var typesData = await typesCollection.find();
        var input_options_html = "";
        console.log(typesData);
        for (var i = 0; i < typesData.length; i++){
            input_options_html += "<option>" + typesData[i].typename+"</option>";
        }
        $("#rideSportInput").html(input_options_html);
    }
}