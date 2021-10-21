let salon= {
    name: "The Fashion Pet",
    address:{
        city:"Tijuana",
        street:"Av. Universidad",
        number:"I404",
        zip:"22111",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm",
    },
    phone:"555-555-5555",
    pets:[],
}
let counter=0;
class Pet{
    constructor(name, age, gender, breed, service, owner, phone, emContact, emPhone){
        this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner;
    this.phone=phone;
    this.id=counter++
    this.emContact=emContact;
    this.emPhone=emPhone;
    }
    
}


//get the values from the form
let petName=document.getElementById("txtName");
let petAge=document.getElementById("txtAge");
let petGender=document.getElementById("txtGender");
let petBreed=document.getElementById("txtBreed");
let petService=document.getElementById("txtService");
let ownerName=document.getElementById("txtOwnerName")
let ownerPhone=document.getElementById("txtOwnerPhone");
let emContact=document.getElementById("txtEmContact");
let emPhone=document.getElementById("txtEmPhone");
//and store them into variables

function register(){
    
    //create the obj
    let thePet= new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,ownerName.value,ownerPhone.value,emContact.value,emPhone.value); 
    //push the obj into the array
    salon.pets.push(thePet);
    //display the result
    displayCards(thePet);
    alert(`You registered a new pet!!! You have ${salon.pets.length} pets.`);
    clearForm();
}   
//create the clearform
function clearForm(){
    petName.value="";
    petAge.value="";
    petGender.value="";
    petBreed.value="";
    petService.value="";
    ownerName.value="";
    ownerPhone.value="";
    emContact.value="";
    emPhone.value="";
    txtSearch.value="";

}
function deletePet(id){
    console.log("Delete the pet"+id);

    document.getElementById(id).remove();
    //travel the array
    for(let i=0;i<salon.pets.length;i++){
        //find the pet by id
        if(salon.pets[i].id===id){indexDelete=i;}
    }
    salon.pets.splice(indexDelete,1);//position,number of elements
    //delete it from the array
}
function searchPet(){
    //this search is by name or by service
    let searchString=document.getElementById("txtSearch").value;
    console.log(searchString);
    for(let i=0;i<salon.pets.length;i++){
        if(salon.pets[i].name.toLowerCase()===searchString.toLowerCase() || salon.pets[i].service.toLowerCase()===searchString.toLowerCase()){
            document.getElementById(salon.pets[i].id).classList.add("highlight");
            clearForm();
        }else{
            document.getElementById(salon.pets[i].id).classList.remove("highlight");
            clearForm();
        }
    }
}
function init(){
    let scooby=new Pet("Scooby",50,"Male","Dane","Nail Trim","Shaggy","555-555-4444");
let scrappy=new Pet("Scrappy",40,"Male","Mixed","Bath","Shaggy","555-555-4444")
let tweety=new Pet("Tweety",50,"Male","Canary","Pedicure","Granny","555-663-1234")
salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(tweety);
displayCards();
}
window.onload=init;







