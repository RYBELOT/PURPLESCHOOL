const user = {
  name: 'Vasya',
  phone: '88005553535'
}

let queryStr = function (obj) {
  let result = [];
  for (let [key, value] of Object.entries(obj)) {
    result.push(`${key}=${value}`);
  }
  return result.join('&')
}


console.log(queryStr(user));