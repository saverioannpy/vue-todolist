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
            let x = event.target;
            x = x.parentElement.innerText;
            x = x.split('\n')[0];
            this.todoList = this.todoList.filter( (el) => el.taskName != x );
            console.log(this.todoList);
        }
    }
});

myApp.mount('#app');

