 abstract class Bird{

    constructor(){
        console.log("Birds provide beauty to nature")
    }

    abstract noOfLegs : number;
    abstract noOfEyes : number;
    abstract noOfNose : number;
    abstract noOfFeathers:number;

    abstract eatingHabbits():void;
    
    

}
export default Bird;