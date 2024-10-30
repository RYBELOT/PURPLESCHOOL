let toDo = {
  tasks: [],
  isValid(incData) {
    if (!incData) {
      console.log('Не могу работать с пустыми данными');
      return false;
    } else if (typeof incData === 'object') {
      return true;
    } else {
      console.log('Заголовок должен быть строкой, а приоритет от 1 до 9');
      return false;
    }
  },
  isIdIndx(id) {
    let result = this.tasks.find((task) => task.id === id);
    if (!result) {
      console.log(`Задача с id ${id} не существует`);
      return false;
    } else {
      return result;
    }
  },
  addTask(incData) {
    if (!this.tasks) {
      this.tasks = [];
    }
    if (!this.isValid(incData)) {
      return this.isValid(incData)
    } else {
      this.tasks.push({
        ...incData,
        id: ++this.lastId
      });
      return this.tasks;
    }
  },
  updateTask(id, incData) {
    if (!this.isIdIndx(id)) {
      return this.isIdIndx(id);
    } else {
      if (!incData.title) {
        console.log('Не могу заменить title на пустое значение');
      }
      else if (!incData.priority) {
        console.log('Не могу заменить priority на пустое значение');
      } else {
        const task = this.isIdIndx(id)
        Object.assign(task, incData);
        return this.tasks
      }
    }
  },
  deleteTask(id) {
    const task = this.isIdIndx(id);
    if (this.isIdIndx(id)) {
      return this.tasks.filter((f) => f.id != task.id);
    } else {
      return isIdIndx(id);
    }
  },
  sortTask() {
      return this.tasks.sort((task1, task2) => task2.priority - task1.priority);
  },
  lastId: 0
}




