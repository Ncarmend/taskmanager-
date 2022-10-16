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