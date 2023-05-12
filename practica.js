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

console.log(arrayContactList);                                  // Imprimo mi array predefinido

arrayContactList.sort();                                        // Ordeno la lista de contactos de A - Z


//funcion para añadir un nuevo contacto a la lista

function addContact(newContact){                                // configuro un parametro para añadir el nombre del contacto nuevo
    arrayContactList.push(newContact);                          // agrego el elemento al array
    arrayContactList.sort();                                    // Vuelvo a ordenar mi array de forma ascendente
    console.log(arrayContactList);                              // imprimo mi array
}

// funcion flecha para eliminar un contacto existente en la lista

const deleteContact = (contact) => {                            // configuro el parametro para buscar el contacto a eliminar
    for (let i = 0; i < arrayContactList.length; i++) {         // recorro con un for los elementos del array
        if (arrayContactList[i] === contact) {                  // si el elemento del array es igual al valor del contacto ingresado
                arrayContactList.splice(i,1);                   // eliminamos el elemento capturando la posicion del index
        }   
    }
    console.log(arrayContactList);                              // imprimo el array modififcado nuevamente
};

// funcion para imprimir los contactos presentes del array por consola

function printContacts(){
    arrayContactList.forEach(function(e){                       // recorro el array con un forEach
        console.log(e);                                         // se imprime cada elemento del array
    });
}

addContact("Luka Modric");                                      // Llamo la funcion añadir contacto nuevo

deleteContact("Fernando Hoyos");                                // Llamo la funcion eliminar contacto existente

printContacts();                                                // Llamo la funcion imprimir contactos presentes en la lista




/* let arr = [1, 2, 3, 4, 5];
let elem = 3;

if (arr.indexOf(elem) !== -1) { // verifica si el elemento está presente en el array
  arr.splice(arr.indexOf(elem), 1); // elimina el elemento del array
}
console.log(arr); // salida: [1, 2, 4, 5] */
