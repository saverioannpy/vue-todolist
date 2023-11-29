'use strict';

const { createApp } = Vue;

const myApp = createApp({       
    data(){
        return{
            todoList: []
        }
    },
    methods: {
        addTask() {
            const obj = {
                taskName: taskInput.value,
                done: false
            };
            this.todoList.push(obj);
            taskInput.value = "";
        },
        unlineTask(){
            const x = event.target.innerText;
            for(let i = 0 ; i <= this.todoList.length-1 ; i++){ 
                if(this.todoList[i].taskName === x){
                    if(this.todoList[i].done === true){
                        this.todoList[i].done = false;
                    }else{
                        this.todoList[i].done = true;
                    }
                }
            }
        },
        deleteTask(){
            let x = event.target; //salvo in una variabile il target dell'evento click
            x = x.parentElement.innerText; //ho gestito il codice HTML in modo tale da poter risalire al div padre dell'icona X tramite l'evento
            x = x.split('\n')[0]; //l'Innertext del padre è composto da una stringa del tipo:"testoTask\nX", con split elimino ciò che si trova dopo il \n ed ottengo solo il testo digitato dall'utente
            this.todoList = this.todoList.filter( (el) => el.taskName != x ); //riformulo il nostro array eliminando il testo presente nella variabile X (i doppioni vengono elimianti)
        }
    }
});

myApp.mount('#app');

