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
 *        // \\--\|  Every Ride is Ticking stacks  ...
 *   ____//  ||_     android watch version not available
 *  /_____\ /___\    will tick stacks along the ride for further geo mashup analisis
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
    pos;
    current_timestamp;

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
    const ridesFound = await ridesCollection.count({_id:rideID});
    if(ridesFound){
        return true;
    }else{
        return false;
    }
   }

   async addTick(stackObject){
    const stacksCollection = this.mongoDatabase.db(this.database).collection("Stacks");
    const result = await stacksCollection.insertOne(stackObject);
    return result;
   }

   stopLoop(){

   }

   tickingLoop(){
    if(this.keep_ticking){
           
    }

   }

   setTimestamp(){
    this.current_timestamp = Date.now();
   }

   setCoordinates(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        throw new Error("Geolocation NOT supported");
      }    
   }

   
   showPosition(position){
     //position.coords.latitude + position.coords.longitude;
     this.pos = position;
   }

} 