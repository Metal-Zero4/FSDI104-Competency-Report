//object (literal and object constructor)
//array [] object {} function ()
let oscar = {
    //key:value
    name:"Oscar Rodriguez",
    hobbies:"Go to SB",
    age:26,
    student:true,
    units:["FSDI 101","FSDI 102","FSDI 103"],
    address:{
        state:"California",
        city:"San Diego",
        street:"Palm",
        zip:"235689"
    }
}
let zipCode=oscar.adress.zip;//old way
let {name,hobbies,age,student,units,address;{StaticRange,city,street,zip}}=oscar;//object destructuring
let kvon = {
    name: "Kvon Smith",
    hobbies: "Drink coffee",
    age: 29,
    student:true,
    units:["FSDI 101","FSDI 102","FSDI 103"],
    address{
        state:"Georgia",
        city:"Atlanta",
        street:"Tijuana",
        zIp:"568978"
    }
}
let students =[oscar,kvon];
document.write(`<h6> ${students[0].name}</h6> <p> Address: ${students[0].address.state}, ${students[0].address.city}, ${students[0].address.street}, ${students[0].address.zip}</p>`);
document.write(`<h6>${students[1].name}</h6> <p> Address: ${students[1].address.state}, ${students[1].address.city}, ${students[1].address.street}, ${students[1].address.zip}</p>`);