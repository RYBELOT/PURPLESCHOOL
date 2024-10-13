let toDo = {
  tasks: [{id:2, title:"test1" , priority:20},{id:4, title:"test2", priority:20}],
  isValid(title, priority) {
    if (!title || !priority) {
      console.log('Проверьте заголовок и приоритет');
      return false;
    } else if (typeof title === 'string' && priority > 0 && priority <= 9) {
      return true;
    } else {
      console.log('Заголовок должен быть строкой, а приоритет от 1 до 9');
      return false;
    }
  },
  isIdIndx(id){
    let result = this.tasks.findIndex((task) => task.id === id);
    if(result === -1){
      console.log (`Задача с id ${id} не существует`);
      return false;
    }else{
      return result;
    }
  },
  addTask(title, priority) {
    if(!this.tasks){
      this.tasks = [];
    }
    if (!this.isValid) {
      return this.isValid
    } else {
      this.tasks.push({
        id: this.lastId() + 1,
        title: title,
        priority: priority
      });
      return this.tasks;
    }
  },
  updateTask(id,title,priority) {
    if (this.isIdIndx(id) = -1){
      return this.isIdIndx(id);
    } else {
      let indx = this.isIdIndx(id);
      let data = {
        title: title,
        priority: priority
      }
      Object.assign(this.tasks[indx], data);
      return this.tasks
    }
  },
  deleteTask(id) {
    if (this.isIdIndx(id)){
      this.tasks.splice(this.isIdIndx(id), 1);
      return this.tasks;
    } else {
      return isIdIndx(id);
    }
  },
  sortTask(sortField){
    if(sortField === "id"){
      return this.tasks.sort((task1, task2) => task1.id - task2.id);
    }
    if(sortField === "priority"){
      return this.tasks.sort((task1, task2) => task2.priority - task1.priority);
    }
  },
  lastId(){
    return this.sortTask("id")[this.tasks.length - 1].id;
  }
}


