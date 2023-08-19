AFRAME.registerComponent("up-car",{
  schema:{
    moveZ:{type:"number",default:1}
  },

  tick: function(){
    var pos = this.el.getAttribute("position")
    this.data.moveZ = this.data.moveZ + 0.001

    pos.z = this.data.moveZ
    
    this.el.setAttribute("position", {x:pos.x , y:pos.y , z:pos.z})
},

}),



AFRAME.registerComponent("moving_car", {
  schema: {
    moveX: {
      type: "number",
      default: 0,
    },
  },
  tick: function () {
    window.addEventListener("click", (e) => {
      this.data.moveX = this.data.moveX - 0.01;
    });

    var pos = this.el.getAttribute("rotation");
    pos.x = this.data.moveX;
    pos.y = this.data.moveY;
    pos.z = this.data.moveZ;
    this.el.setAttribute("rotation", {x: pos.x,y: pos.y,z: pos.z,});
  },
});
