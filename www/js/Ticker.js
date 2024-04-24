/**
 *        ___------__
 * |\__-- /\       _-
 * |/    __      -
 * //\  /  \    /__
 * |  o|  0|__     --_
 * \\____-- __ \   ___-
 * (@@    __/  / /_
 *    -_____---   --_
 *     //  \ \\   ___-
 *   //|\__/  \\  \
 *   \_-\_____/  \-\
 *        // \\--\|  Compren Mota por el Mercado Borbon ...
 *   ____//  ||_
 *  /_____\ /___\  
 * 
 * 
 * 
 * @author Rolando<rgarro@gmail.com>
 */
class Ticker {

    mongoDatabase;
    currentRide;
    database = "ridesappdb";
    keep_ticking=false;

   constructor(mongodb){
    console.log("instanciando ticker ..");
    console.log(typeof mongodb);
    if(typeof mongodb == "object"){
        this.mongoDatabase = mongodb;
    }else{ 
        throw new Error("Invalid Database Type ...");
    }
    //this.mongoDatabase = mongodb;
   }

   async activeRideExist(rideID){
    const ridesCollection = this.mongoDatabase.db(this.database).collection("Rides");
    const ridesFound = await ridesCollection.count();
    if(ridesFound){
        return true;
    }else{
        return false;
    }
   }

   addTick(tickObject){
    
   }

   stopLoop(){

   }

   tickingLoop(){
    if(this.keep_ticking){
           
    }

   }

   setTimestamp(){

   }

   setCoordinates(){
    
   }

} 