let toDo = {
  tasks: [],
  chooseAction() {
    let toDo = prompt("1 - создать 2 - редактировать 3 - удалить 4 - упорядочить по приоритету 5 - выйти", "1");
    switch (toDo) {
      case '1':
        console.log(this.addTask());
        return this.chooseAction();
      case '2':
        console.log(this.editTask());
        return this.chooseAction();
      case '3':
        console.log(this.delTask());
        return this.chooseAction();
      case '4':
        console.log(this.sortTask(this.tasks));
        return this.chooseAction();
      case '5':
        return true
      default:
        console.log("действие не поддерживается");
        return this.chooseAction();
    }
  },
  addTask() {
    let id = this.tasks.length + 1;
    let title = prompt("Введите описание задачи", "Задание");
    let priority = prompt("Введите приоритет в виде цифры", "1");
    if (!isNaN(priority) && priority >= 1 && priority <= 9) {
      this.tasks.push({
        id: id,
        title: title,
        priority: priority
      });
      this.tasks.forEach((task) => console.log(`id:${task.id} Описание:${task.title} Приоритет:${task.priority}`));
      return true
    } else {
      console.log("приоритет должен быть цифрой от 1 до 9");
      return false
    }
  },
  editTask() {
    let id = prompt("Введите id задачи", "1");
    if (!isNaN(id) && id >= 0 && id <= this.tasks.length) {
      let newTitle = prompt("Новое описание задачи", "Задание");
      let newPriority = prompt("Новый приоритет в виде цифры", "1");
      if (!isNaN(newPriority) && newPriority >= 1 && newPriority <= 9) {
        let req = {
          id: id,
          title: newTitle,
          priority: newPriority
        };
        this.tasks.splice(id - 1, 1, req);
        this.tasks.forEach((task) => console.log(`id:${task.id} Описание:${task.title} Приоритет:${task.priority}`));
        return true
      } else {
        console.log("приоритет должен быть цифрой от 1 до 9");
        return false
      }
    } else {
      console.log("Задача с таким id не найдена");
      return false
    }
  },
  delTask() {
    let id = prompt("Введите id задачи", "1");
    if (!isNaN(id) && id >= 0 && id <= this.tasks.length) {
      this.tasks.splice(id - 1, 1);
      this.tasks.forEach((task) => console.log(`id:${task.id} Описание:${task.title} Приоритет:${task.priority}`));
      return true
    } else {
      console.log("Задача с таким id не найдена");
      return false
    }
  },
  sortTask() {
    let param = prompt("1 - по возрастанию 2 - по убыванию");
    let sArray = [];
    if (param == '1') {
      this.tasks.sort((a, b) => a.priority - b.priority).forEach((el => sArray.push(el)));
      output(sArray);
      return 1
    } else if (param == '2') {
      this.tasks.sort((a, b) => b.priority - b.priority).forEach((el => sArray.push(el)));
      output(sArray);
      return 2
    } else {
      console.log("неверные параметры")
      return false;
    }
    function output(arr) {
      arr.forEach((el) => console.log(`id:${el.id} Описание:${el.title} Приоритет:${el.priority}`));
    }
  }
}

console.log(toDo.chooseAction());
