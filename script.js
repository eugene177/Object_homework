// // Задача №1
// const userInfo = {
//   name: 'Вася',
//   age: 30,
// }
// console.log(userInfo)

// // Задача №2
// let userInfo = {
//   name: 'Вася',
//   age: 30,
//   58: 'Значение свойства',
// }
// console.log(userInfo['58'])

// // Задача №3
// // Ответ: 45 ибо новая переменная просто ссылается на объект
// let userInfo = {
//   name: 'Вася',
//   age: 30,
// }
// let user = userInfo
// user.age = 45
// console.log(userInfo.age)

// // Задача №4
// // Ответ: Вася ибо THIS
// let userInfo = {
//   name: 'Вася',
//   age: 30,
//   showInfo() {
//     console.log(`${this.name}`)
//   },
// }
// let user = userInfo
// userInfo = null
// user.showInfo()

// // Задача №5
// // Ответ: Значения
// let userInfo = {
//   name: 'Вася',
//   age: 30,
// }
// for (key in userInfo) {
//   const value = userInfo[key]
//   console.log(value)
// }

// // Задача №6
// // Ответ: Харьков
// let userInfo = {
//   name: 'Вася',
//   age: 30,
//   address: {
//     city: 'kharkiv',
//   },
// }
// for (key in userInfo.address) {
//   console.log(userInfo.address[key])
// }

// // Задача №7
// const userInfo = {
//   name: 'Вася',
//   age: 30,
//   'likes js': true,
// }
// console.log(userInfo['likes js'])

// // Задача №8
// let userInfo = {
//   name: 'Вася',
//   age: 30,
// }
// userInfo.name = 'Лена'
// console.log(userInfo)
// delete userInfo.name
// console.log(userInfo)

// // Задача №9
// let userInfo = {
//   name: 'Anton',
//   age: 27,
// }
// function getKeys(obj) {
//   let arr = []
//   for (key in obj) {
//     arr.push(key)
//   }
//   return arr
// }
// console.log(getKeys(userInfo))

// // Задача №10
// let userInfo = {
//   name: 'Anton',
//   age: 27,
// }
// function getValues(obj) {
//   let arr = []
//   for (key in obj) {
//     arr.push(obj[key])
//   }
//   return arr
// }
// console.log(getValues(userInfo))

// // Задача №11
// let zoo = []
// function Animal(data) {
//   Object.assign(this, data)
//   zoo.push(this)
// }

// Animal.prototype.logInfo = function () {
//   console.log(this)
// }

// let initialData1 = {
//   name: 'tigername',
//   type: 'tiger',
//   location: 'Africa',
//   color: 'yellow',
//   food: 'animals',
//   hasClaws: true,
// }
// let initialData2 = {
//   name: 'pigname',
//   type: 'pig',
//   location: 'Europe',
//   color: 'pink',
//   food: 'meat',
//   hasClaws: false,
// }
// let initialData3 = {
//   name: 'catname',
//   type: 'cat',
//   location: 'Asia',
//   color: 'black',
//   food: 'cereal',
//   hasClaws: true,
// }
// let initialData4 = {
//   name: 'fishname',
//   type: 'fish',
//   location: 'Africa',
//   color: 'gray',
//   food: 'fish',
//   hasClaws: false,
// }
// let tiger = new Animal(initialData1)
// let pig = new Animal(initialData2)
// let cat = new Animal(initialData3)
// let fish = new Animal(initialData4)

// let Africa = zoo.filter(function (animal) {
//   return animal.location === 'Africa'
// })
// console.log(Africa)

// Задача №12
let person1 = {
  name: 'Eugene',
  age: 16,
  location: 'Ukraine',
}

let person2 = {
  name: 'Aleks',
  surname: 'dwayne',
  age: 17,
  location: 'Russia',
}

let person3 = {
  name: 'Eugene',
  age: 16,
  location: 'Ukraine',
}

function isEqual(obj1, obj2) {
  let arr1 = Object.values(obj1)
  let arr2 = Object.values(obj2)
  for (let i = 0; i < arr1.length; i++) {
    if (
      arr2.some(item => {
        return item === arr1[i]
      }) &&
      arr1.length == arr2.length
    ) {
      continue
    } else {
      return false
    }
  }
  return true
}

console.log(isEqual(person1, person3))
