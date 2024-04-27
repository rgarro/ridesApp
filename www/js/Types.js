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
 * Every stack has a type  ...
 * android watch version not available
 * stacks types inner joint ... 
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

    async selectInput(){
        console.log("Je mange le poulet noir ..");
        const typesCollection = this.mongoDatabase.db(this.database).collection("Types");
        var typesData = await typesCollection.find();
        var input_options_html = "";
        console.log(typesData);
        for (var i = 0; i < typesData.length; i++){
            input_options_html += "<option value='"+typesData[i]._id+"'>" + typesData[i].typename+"</option>";
        }
        $("#TypeIDInput").html(input_options_html);
    }
    
    async sportNameSelectInput(){

    }
}