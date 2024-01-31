var state=false;
function Check(){
document.getElementsById("button").addEventListener("Submit", function(event)){
var ime= document.getElementsById("ime").value;
var priimek= document.getElementById("priimek").value;
var naslov= document.getElementById("naslov").value;
var drzava= document.getElementById("drzava").value;
var telst= document.getElementById("telst").value;
var kartica= document.getElementById("kartica").value;

if(!ime||!priimek||!naslov||!drzava||!telst||!kartica){
    Swal.fire({
        title: "ERROR",
     	text: "Please fill in all fields!!",
     	icon: "error",
       	button: "OK!",
    })
    event.preventDefault();
}

}
}