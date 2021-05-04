class Slingshot{
    constructor(bodyA,pB){
       this.pointb=pB
       var options={
           
               bodyA:bodyA,
               pointB:pB,
               stiffness:0.04,
               length:50
           
       }

       this.slingshot=Constraint.create(options);
       World.add(world,this.slingshot);

    }
   
   display(){
       
       

       if(this.slingshot.bodyA){
        var posA=this.slingshot.bodyA.position
        var posB=this.pointb
        line(posA.x,posA.y,posB.x,posB.y);

       }


   }

     fly(){
       
        this.slingshot.bodyA=null;


     }

}