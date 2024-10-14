import Bird from "./Bird";

class Pigeon extends Bird{
    noOfLegs: number = 2;
    noOfEyes: number = 2;
    noOfNose: number = 1;
    noOfFeathers: number = 2;
    eatingHabbits(): void {
        console.log("pigeon eats seeds");
    }


    constructor(){
        super();
        console.log("pigeon is for peace");
    }
}
export default Pigeon;