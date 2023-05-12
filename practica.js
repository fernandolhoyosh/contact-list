const arrayContactList = [
                            "Fernando Hoyos", 
                            "Ada Hernandez", 
                            "Jair Oquendo", 
                            "Oscar Lopez",
                            "Valentina Corcho",
                            "Andres Hoyos",
                            "Cristiano Ronaldo"
                        ];

console.log(arrayContactList);
arrayContactList.sort();


function addContact(newContact){
    arrayContactList.push("Lionel Messi");
    arrayContactList.sort();
    console.log(arrayContactList);
}

const deleteContact = () => {

};

addContact();