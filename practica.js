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

arrayContactList.sort(); // Ordeno la lista de contactos de A - Z
  
  const objetoDividirNombres = arrayContactList.map(nombreCompleto => {
    const [nombres, apellidos] = nombreCompleto.split(" ");
    return {id:null, nombres, apellidos, telefono:null, ubicaciones:null };
  });
  
  //console.log(objetoListaContactos);

    arrayContactList = objetoDividirNombres;

/*   console.log(arrayContactList);
  console.log(typeof arrayContactList); */

//---------------------------------------------------------------------------------------------------------------------------------//

//funcion para añadir un nuevo contacto a la lista array

function addContact(id, nombres, apellidos, telefono, ciudad, direccion){ 

    const objetoNewContact = {};
    const objetoUbicaciones = {};
    
    objetoNewContact.id = id;
    objetoNewContact.nombres = nombres;
    objetoNewContact.apellidos = apellidos;
    objetoNewContact.telefono = telefono;
    
    objetoUbicaciones.ciudad = ciudad;
    objetoUbicaciones.direccion = direccion;
    
    objetoNewContact.ubicaciones = objetoUbicaciones;

    arrayContactList.push(objetoNewContact);

}

addContact(1063175407,"fernando","hoyos",3022684502,"lorica","calle 3 2c-58");
addContact(14256398,"andres","hernandez",3168547896,"monteria","planeta tierra");

console.log(arrayContactList);


// funcion flecha para eliminar un contacto existente en la lista

const deleteContact = (contact) => {      

    for (const key in arrayContactList) {
        if (arrayContactList[key].nombres === contact) {
            console.log(`Contacto ${arrayContactList[key].nombres} ${arrayContactList[key].apellidos} eliminado`);   
            arrayContactList.splice(key,1);
        }
    }

};

//deleteContact("fernando");

// funcion para imprimir los contactos presentes del array por consola

function printContacts(){
    console.log("\nLista de contactos:\n\n");
    arrayContactList.forEach(function(e){                                           // recorro el array con un forEach
        console.log(e);                                                             // se imprime cada elemento del array
    });
}



//printContacts();                                                // Llamo la funcion imprimir contactos presentes en la lista
