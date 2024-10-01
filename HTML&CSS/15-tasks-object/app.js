let toDo = {
  tasks: [],
  addTask(title, priority) {
    const check = function (title, priority) {
      if (!isNaN(priority) && priority >= 1 && priority <= 9 && typeof title === "string") {
        return true
      } else {
        console.log("Приоритет должен быть цифрой, а описание - строкой")
        return false;
      }
    };
    const output = function (isTrue, arr) {
      if (isTrue, arr) {
        arr.forEach((task) => console.log(`id:${task.id} Описание:${task.title} Приоритет:${task.priority}`));
        return true;
      } else {
        console.log("проверьте введеные данные");
        return false;
      }
    };
    if (check(title, priority)) {
      let id = this.tasks.length + 1;
      this.tasks.push({
        id: id,
        title: title,
        priority: priority
      });
      return output(true, this.tasks);
    } else {
      return output(false, this.tasks);
    }
  },

  updateTask(id, title, priority) {
    const isId = function (id, arr) {
      if (!isNaN(id) && arr.filter((el) => el.id === id)) {
        return true;
      } else {
        console.log("Такого id не существует");
        return false;
      }
    }
    if (isId(id, this.tasks) && this.addTask.check(title, priority)) {
      let req = {
        id: id,
        title: title,
        priority: priority
      };
      tasks.splice(this.tasks.indexOf((el) => el.id === id), 1, req);
      return this.addTask.output(true, this.tasks);
    } else {
      return this.addTask.output(false, this.tasks);
    }
  },

  deleteTask(id) {
    if (this.updateTask.isId(id)) {
      tasks.splice(this.tasks.indexOf((el) => el.id === id), 1);
      return this.addTask.output(true, this.tasks);
    } else {
      return this.addTask.output(false, this.tasks);
    }
  },

  sortTask(order) {
    if (order === 0 || order === 1) {
      let sArr = [];
      order === 0 ? sArr = this.tasks.sort((a, b) => a.priority < b.priority) : sArr = this.tasks.sort((a, b) => a.priority > b.priority);
      return this.addTask.output(true, sArr);
    } else {
      console.log("0 - по убыванию, 1 - по возрастанию");
      return this.addTask.output(false, this.tasks);
    }
  },
}

console.log(toDo.addTask("протестить код", 5));
console.log(toDo.addTask("дважды протестить код", 6));
console.log(toDo.addTask("трижды код", 4));
console.log(toDo.addTask("под редактирование", 3));
console.log(toDo.addTask("под удаление", 8));
console.log(toDo.updateTask( 4, "редактированное", 9));

