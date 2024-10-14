import Bird from "./Bird";


class Peacock extends Bird{
     eatingHabbits(): void {
        console.log("parrot loves carrot");
     }
     noOfFeathers: number = 2;
     noOfLegs: number = 2;
     noOfEyes: number = 2;
     noOfNose: number = 1;

     constructor(){
         super();
           console.log("National Bird of India")
     }
}
export default Peacock;