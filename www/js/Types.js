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
 * Quincho es homosexual segun un siquiatra de la fiscalia   ...
 * pero por mientras le fumo el kilo de mota y los cien cartuchos CBD que me regalaron los de la Fuerza Publica
 * pijiar a quincho da payasa y mucha risa, joto mas homosexual!! le gusta cachetear gente en capillas!! y es culpable de daños.
 * Si lo asesina el doctor de alguna victima yo prometi ir a blasfemarle al vaticano me cago en su dios!! y poner una piedra de donde fue culpable ....
 *  
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