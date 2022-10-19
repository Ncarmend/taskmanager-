const prompt = require('prompt-sync')();
console.log('Bonjour Carmen');
/* "Welcome to your task manager, Press:
1. to see all your tasks
2. to add a task
3. to delete a task
4. to mark a task as done
5. to Exit the task manager"   */
var choice = prompt("Entrez un nombre compris entre 1 et 5: ");
if(choice ==1){
    console.log("Creer une commande pour voir toutes le taches avec crontab");

}
else if(choice== '2'){
    console.log("Creer une commande pour ajouter une tache");

}
else if(choice == '3'){
    console.log("Creer une commande pour suprimer une tache");
    }
else if(choice == '4'){
    console.log("Creer une commande pour termine une tache");
}
else if(choice == '5'){
    console.log("Quitter le manager the tache");
}
else{
    console.log("Wronge number");
}
// taches

let tasks =["new task"]
taches()

function taches () {
    console.log('welcome to your task manager, Press:\n'
    ,'1. to see all your tasks\n'
    ,'2. to add a task\n'
    ,'3. to delete a task\n'
    ,'4. to mark a task as done\n'
    ,'5. to Exit the task\n')

    let select = prompt("Entrer un nombre entre 1 to 5 " + ": "  )

    if (select==1) {
        // show the new task
        voir()
    }
    if (select==2) {
        // adds up a new task 
        ajout()
    }
    if (select==3) {
        //  deletes the last task
        suprimer()
    }
    if (select==4) {
        // marks the task as done
        faire()
    }
    if (select==5) {
        // exit the task menu
        Quiter()
    }
    if (select>5 ) {
        taches()
    }
}

// 1. Access to the menu

function voir() {
    for (x=0; x<= tasks.length-1; x++)
    console.log('\n' , (x+1), tasks[x],'\n')



    taches()
}

// 2. Adding a task

function ajout() {
    // anwer a task name
    taskname = prompt("Task name" )

    tasks.push(taskname)
    console.log(taskname)

    taches()
}


function suprimer() {

var elementsSupprimes = tasks.splice(0,1)
console.log(tasks);
// show [restant]
console.log(elementsSupprimes);
// show [supprimé]

    taches()
}

function faire() {
   
    doneName = prompt("task name")

tasks.push(doneName)

console.log(doneName + " DONE ");

    taches()
}

// 5. To Exit the file manager

function exit() {

}
