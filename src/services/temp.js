const { getTask } = require("./task");

class Task{
    static res;
    constructor(){
        if(Task._instance){
            console.log("Task class Object is already created you cannot create new one");
            return Task._instance;
        }
        Task._instance = this;
        (async function(){
            Task.res = await getTask({status:true});
            console.log("constructor Response value is:",Task.res);
        })();
    }
    static async init(){
        if (!Task.instance) {
            Task._instance = new Task();
        }
        Task.res = await getTask({status:true});
        console.log("The res value is:",Task.res);
        return Task._instance;
    }

    async get(){
        try {
            if(!Task.res){
                console.log("Response is not initialized yet please call init method first to initialize res");
                throw new Error('Tasks not loaded yet');
            }
            console.log("The res value is:",Task.res);
            return Task.res;
        } catch (error) {
            console.log("Error getting task: ", error);
        }
    }
};



module.exports = {
    Task,
}