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
                    this.todoList[i].done = true;
                }
            }
        },
        deleteTask(){
            let x = event.target.innerText;
            console.log(event)
            //console.log(x);
            //this.todoList = this.todoList.filter( (el) => el != x );
            //console.log(this.todoList);
        }
    }
});

myApp.mount('#app');

