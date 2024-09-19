const obj = {
  name: 'Vasya',
  phone: '88005553535'
}

function query (data) {
  str = (`name=${data.name}&phone=${data.phone}`);
  return str
}

console.log(query(obj));

