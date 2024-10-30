const url = "https://peoples.ru"

const user = {
  name: 'Vasya',
  phone: '88005553535'
}

const queryStr = (url, user) => `${url}/?${Object.entries(user).map(el => el.join('=')).join('&')}`


console.log(queryStr(url, user));