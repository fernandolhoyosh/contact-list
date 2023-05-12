/* defino mi array con una lista de contactos predefinida */

const arrayContactList = [
                            "Fernando Hoyos", 
                            "Ada Hernandez", 
                            "Jair Oquendo", 
                            "Oscar Lopez",
                            "Valentina Corcho",
                            "Andres Hoyos",
                            "Cristiano Ronaldo"
                        ];

arrayContactList.sort();                                                            // Ordeno la lista de contactos de A - Z

//funcion para añadir un nuevo contacto a la lista

function addContact(newContact){                                                    // configuro un parametro para añadir el nombre del contacto nuevo
    arrayContactList.push(newContact);                                              // agrego el elemento al array
    console.log(`Contacto ${newContact} agregado`);                                 // imprimo por consola el aviso de contacto agregado
    arrayContactList.sort();                                                        // Vuelvo a ordenar mi array de forma ascendente
    //console.log(arrayContactList);                                                // imprimo mi array
}

// funcion flecha para eliminar un contacto existente en la lista

const deleteContact = (contact) => {                                                // configuro el parametro para buscar el contacto a eliminar
    for (let i = 0; i < arrayContactList.length; i++) {                             // recorro con un for los elementos del array
        if (arrayContactList[i] === contact) {                                      // si el elemento del array es exactamente igual al contacto ingresado           
                console.log(`Contacto ${arrayContactList[i]} eliminado`);           // imprimo pro consola el aviso de contacto eliminado
                arrayContactList.splice(i,1);                                       // eliminamos el elemento capturando la posicion del index
        }   
    }
    //console.log(arrayContactList);                                                // imprimo el array modififcado nuevamente
};

// funcion para imprimir los contactos presentes del array por consola

function printContacts(){
    console.log("\nLista de contactos:\n\n");
    arrayContactList.forEach(function(e){                                           // recorro el array con un forEach
        console.log(e);                                                             // se imprime cada elemento del array
    });
}

const message = `Welcome!\n
- Para agregar contactos utilize la función 'addContact("contactoNuevo");'
- Para eliminar un contacto existente utilize la función 'deleteContact("contacto");'
- Para imprimir los contactos presentes en la lista utilize la función 'printContacts();'`;

alert("Hola!, Abre la consola");
console.log(message);

//addContact("Luka Modric");                                      // Llamo la funcion añadir contacto nuevo (ingreso el nombre y apellido del nuevo contacto)

//deleteContact("Fernando Hoyos");                                // Llamo la funcion eliminar contacto existente (ingreso el nombre del contacto a eliminar)

printContacts();                                                // Llamo la funcion imprimir contactos presentes en la lista
