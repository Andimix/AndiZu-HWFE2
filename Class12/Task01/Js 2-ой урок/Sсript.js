// 1. В доме 5 подъездов по 20 квартир каждый. Получите от
//    пользователя Квартира номерартиры и взамен выдайте в консоль номер подъезда.
//    Учитывайте, что пользователь может ввести число меньше 1 или больше 100.

var numberApart = prompt ("Введите номер квартиры! От 1 до 100", '' );
if (numberApart>0 && numberApart <= 20) {
  alert("Квартира номер "+ numberApart +" Ваш подъезд №1");
}
else if (numberApart > 20 && numberApart <= 40)  {
  alert("Квартира номер "+ numberApart +" Ваш подъезд №2");
}
else if (numberApart > 40 && numberApart <= 60)  {
  alert("Квартира номер "+ numberApart +" Ваш подъезд №3");
}
else if (numberApart > 60 && numberApart <= 80)  {
  alert("Квартира номер "+ numberApart +" Ваш подъезд №4");
}
else if (numberApart > 80 && numberApart <= 100)  {
  alert("Квартира номер " + numberApart + " Ваш подъезд №5");
}else if (numberApart < 1 || numberApart > 100)  {
  alert(" Квартиры с № "+ numberApart + " нет в доме. " +" Квартир в доме 100, начиная с 1 по 100! ");
}

// 2. Получите от пользователя строку с названием марки автомобиля. Напишите 
// конструкцию switch/case, которая будет обрабатывать 6-7 самых известных марок
//  (BMW, Ford, Peugeot etc.) и выдавать в консоль введённую строку + страну
//   происхождения автомобиля (например, "Ford – страна происхождения США").
//    Для остальных строк выдавайте сообщение "some_input – страна происхождения неизвестна".

var fordAuto=['Ford','ford','Форд','форд'];
var autoM = prompt('Введите марку автомобиля!', "Марка");
switch(autoM){
// case 'Ford':
// case 'ford':
// case 'Форд':
// case 'форд': 
case fordAuto[0]:
    case fordAuto[1]:
    case fordAuto[2]:
    case fordAuto[3]:
  alert(autoM+" - страна происхождения США");
  break;
  case 'BMW':
  case 'БМВ':
  case 'bmw':
  case 'бмв':
  alert(autoM+" - страна происхождения Германия");
  break;
  case 'Lada':
  case 'Лада':
  case 'lada':
  case 'лада':            
  alert(autoM+" - страна происхождения Россия");
  break;
  case 'Renault':
    case'renault':  
    case 'Reno':
    case 'reno':
    case 'Рено':
    case 'рено':     
  alert(autoM+" - страна происхождения Франция");
  case 'Peugeot':
    case 'peugeot':
    case 'Пежо':
    case 'пежо':
  alert(autoM+" - страна происхождения Франция");
  break;
  case 'Honda':
    case 'honda':
    case 'Хонда':
    case 'хонда':
  alert(autoM+" - страна происхождения Япония");
  break;
  case 'Mazda':
    case 'mazda':
    case 'Мазда':
    case 'мазда':
  alert(autoM+" - страна происхождения Япония");
  break;
  default:
  alert(autoM+" Нет такой марки" );
}

// 3. Пользователь вводит год. Определите, является ли этот год високосным.
var year = prompt("Введите год", '')
if(year%4 == 0&&year%100 != 0||year%400 == 0){
  alert(year+" Високосный год," +  "количество дней в феврале - 29,"+" количество дней в году - 366");
}
else{
  alert(year+" Не високосный год,количество дней в феврале - 28, количество дней в году - 365")
}
// -----------------------

// 4. Пользователь вводит число от 1 до 20. Выведите в консоль таблицу умножения этого числа.
// Например, для числа 7:
// 	7x1=7
// 	7x2=14
// 	...
// 	7x10=70
let varior = prompt("Введите число")
console.log("Таблица умножения числа "+varior)
for(let i=1; i<=10; i++){
  let s = varior * i
  console.log(varior +" * "+ i +" = "+s  )
}


// 5. Выведите в консоль сумму всех нечётных чисел от 1 до 50. Дополнительно: решите эту задачу, используя оператор continue.
var sum = 0;
   for(let i=1; i<=49; i+=2)
   {
     sum+=i;
     
   }
   console.log("Сумма нечетных чисел от 1 до 50 "+sum)
   
  //  6. Используя циклы, выведите в консоль первые 15 [чисел Фибоначчи](https://ru.wikipedia.org/wiki/Числа_Фибоначчи).
  var n = 1, n2 = 1, n3;
  var nub = prompt("Введите число");
 for(let i=0; i<=(nub-4); i+=1)
 {
   n3 = n + n2;
   n = n2;
   n2 = n3;
   console.log(nub+" Число Фибоначчи "+n2)
 }

//  7. Используя циклы (и операцию конкатенации), выведите в консоль "шахматную доску":

// ![chessboard](https://i.snag.gy/PTuKRJ.jpg) 

for ( let i = 1; i <= 7; i++)
   {
      for (let j = 1; j <= 3; j++)
      // let ab = "#  #  #  #";
        console.log("#  #  #  #")
 
      
 
      if (i % 2 != 0)
         console.log("  #  #  #  #  ")
   }