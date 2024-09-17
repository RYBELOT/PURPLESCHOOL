let tasks = [];

function chooseAction() {
  let toDo = prompt("1 - создать 2 - редактировать 3 - удалить 4 - упорядочить 5 - выйти", "1");
  switch (toDo) {
    case '1':
      console.log (addTask());
      return chooseAction();
    case '2':
      console.log (editTask());
      return chooseAction();
    case '3':
      console.log (delTask());
      return chooseAction();
    case '4':
      console.log (sortTask());
      return chooseAction();
    case '5':
      return true
    default:
      console.log ("действие не поддерживается");
      return chooseAction();
  }
}

function addTask() {
  let id = tasks.length + 1;
  let title = prompt("Введите описание задачи", "Задание");
  let priority = prompt("Введите приоритет в виде цифры", "1");
  if (!isNaN(priority) && priority >= 1 && priority <= 9) {
    tasks.push({
      id: id,
      title: title,
      priority: priority
    });
    tasks.forEach((task) => console.log(`id:${task.id} Описание:${task.title} Приоритет:${task.priority}`));
    return true
  } else {
    console.log("приоритет должен быть цифрой от 1 до 9");
    return false
  }
}

function editTask() {
  let id = prompt("Введите id задачи", "1");
  if (!isNaN(id) && id >= 0 && id <= tasks.length) {
    let newTitle = prompt("Новое описание задачи", "Задание");
    let newPriority = prompt("Новый приоритет в виде цифры", "1");
    if (!isNaN(newPriority) && newPriority >= 1 && newPriority <= 9) {
      let req = {
        id: id,
        title: newTitle,
        priority: newPriority
      };
      tasks.splice(id - 1, 1, req);
      tasks.forEach((task) => console.log(`id:${task.id} Описание:${task.title} Приоритет:${task.priority}`));
      return true
    } else {
      console.log("приоритет должен быть цифрой от 1 до 9");
      return false
    }
  } else {
    console.log("Задача с таким id не найдена");
    return false
  }
}

function delTask() {
  let id = prompt("Введите id задачи", "1");
  if (!isNaN(id) && id >= 0 && id <= tasks.length) {
    tasks.splice(id - 1, 1);
    tasks.forEach((task) => console.log(`id:${task.id} Описание:${task.title} Приоритет:${task.priority}`));
    return true
  } else {
    console.log("Задача с таким id не найдена");
    return false
  }
}

function sortTask() {
  let param1 = prompt("Сортировка 1 - по id 2 - по приоритету");
  let param2 = prompt("1 - по возрастанию 2 - по убыванию");
  let sArr = []
  if(param1 == '1' && param2 == '1'){
    sArr = tasks.sort((a,b) => a.id < b.id)
    sArr.forEach((el) => console.log(`id:${el.id} Описание:${el.title} Приоритет:${el.priority}`));
    return true;
  } else if(param1 == '1' && param2 == '2'){
    sArr = tasks.sort((a,b) => a.id > b.id)
    sArr.forEach((el) => console.log(`id:${el.id} Описание:${el.title} Приоритет:${el.priority}`));
    return true;
  } else if(param1 == '2' && param2 == '1'){
    sArr = tasks.sort((a,b) => a.priority < b.priority)
    sArr.forEach((el) => console.log(`id:${el.id} Описание:${el.title} Приоритет:${el.priority}`));
    return true;
  } else if(param1 == '2' && param2 == '2'){
    sArr = tasks.sort((a,b) => a.priority > b.priority)
    sArr.forEach((el) => console.log(`id:${el.id} Описание:${el.title} Приоритет:${el.priority}`));
    return true;
  } else {
    console.log("неверные параметры")
    return false;
  }
}

console.log(chooseAction());
