/* defino mi array con una lista de contactos predefinida */

let arrayContactList = [
                            "Fernando Hoyos", 
                            "Ada Hernandez", 
                            "Jair Oquendo", 
                            "Oscar Lopez",
                            "Valentina Corcho",
                            "Andres Hoyos",
                            "Cristiano Ronaldo"
                        ];

/* arrayContactList.sort(); // Ordeno la lista de contactos de A - Z */

 // creo un nuevo objeto diviendo el nombre y apellido del array original
  
  const objetoDividirNombres = arrayContactList.map(nombreCompleto => {
    const [nombres, apellidos] = nombreCompleto.split(" ");
    return {id:null, nombres, apellidos, telefono:null, ubicaciones:{ciudad:null, direccion:null} };
  });

    arrayContactList = objetoDividirNombres; // reseteo el array asignandole el nuevo objeto con las propiedades definidas

/*   console.log(arrayContactList);
  console.log(typeof arrayContactList); */

//------_---------------------------------------------------------------------------------------------------------------------------//

//funcion para añadir un nuevo contacto a la lista array

function addContact(id, nombres, apellidos, telefono, ciudad, direccion){ 

    const objectNewContact = {};
    objectNewContact.ubicaciones = {};
    
    objectNewContact.id = id;
    objectNewContact.nombres = nombres;
    objectNewContact.apellidos = apellidos;
    objectNewContact.telefono = telefono;
    objectNewContact.ubicaciones.ciudad = ciudad;
    objectNewContact.ubicaciones.direccion = direccion;

    arrayContactList.push(objectNewContact); //agrego el objeto al final del array

    console.log("Contacto agregado");

}

// funcion flecha para eliminar un contacto existente en la lista

const deleteContact = (contact) => {      

    for (const key in arrayContactList) {
        if (arrayContactList[key].nombres === contact) {
            console.log(`Contacto ${arrayContactList[key].nombres} ${arrayContactList[key].apellidos} eliminado`);   
            arrayContactList.splice(key,1);
        }
    }
};

//expresion de funcion para actualizar un contacto

const updateContact1 = function(index, id, name, lastName, phone, city, address){

    const objectUbication = {};

   arrayContactList[index].id = id;
   arrayContactList[index].nombres = name;
   arrayContactList[index].apellidos = lastName;
   arrayContactList[index].telefono = phone;
   objectUbication.ciudad = city;
   objectUbication.direccion = address;
   arrayContactList[index].ubicaciones = objectUbication;

   console.log("Contacto actualizado");
   console.log(arrayContactList);

}

const updateContact2 = function(index, propiedad, valor){

    if (arrayContactList[index].ubicaciones.hasOwnProperty(propiedad)) {
        arrayContactList[index].ubicaciones[propiedad] = valor;
        console.log("Contacto actualizado");
    }
    else if (arrayContactList[index].hasOwnProperty(propiedad) == true) {
        arrayContactList[index][propiedad] = valor;
        console.log("Contacto actualizado");
        console.log(arrayContactList);
    }
    else{
        console.log(`El campo ${propiedad} no existe en el objeto`);
    }
}

const updateContact3 = function(){
    
}


// funcion para imprimir los contactos presentes del array por consola

function printContacts(){
    console.log("\nLista de contactos:\n\n");
    arrayContactList.forEach(function(e){                                           // recorro el array con un forEach
        console.log(e);                                                             // se imprime cada elemento del array
    });
}

// agrego dos nuevos contactos

addContact(1063175407,"fernando","hoyos",3022684502,"lorica","calle 3 2c-58");
addContact(14256398,"andres","hernandez",3168547896,"monteria","planeta tierra");

//deleteContact("fernando");

//printContacts();                                                // Llamo la funcion imprimir contactos presentes en la lista
