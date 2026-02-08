// 1
const first = prompt("Введіть преший текст");
const second = prompt("Введіть другий текст");
if (first && second) {
    console.log("Обидва поля заповнені")
} else {
    console.log("Не всі поля заповнені")
}

// 2
const one = Number(prompt("Введіть перше число"));
const two = Number(prompt("Введіть друге число"));
if (one + two > 10) {
    console.log("Сума більша за 10")
} else {
    console.log("Сума менша або дорівнює 10")
}

// 3
const text = prompt("Введіть текст").trim().toLocaleLowerCase();
if (text.includes("javascript")) {
    console.log("Текст містить слово JavaScript")
} else {
    console.log("Текст не містить слово JavaScript")
}

// 4
const number = Number(prompt("Введіть число"))
if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20")
} else {
    console.log("Число не входить в діапазон від 10 до 20")
}

// 5 
const namef = prompt("Введіть ім'я").trim().toLocaleLowerCase();
const email = prompt("Введіть email").trim().toLocaleLowerCase();
const password = prompt("Введіть пароль").trim().toLocaleLowerCase();
if (namef.length > 3 && email.includes("@", ".") && password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку")
} else {
    console.log("Помилка: неправильне заповнення")
}