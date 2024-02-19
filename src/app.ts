showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

/*
1. Обявіть інтерфейс Book, який включає такі поля:
id - число
title - рядок
author - рядок
available - логічний
category – категорія
 */
/*
2. Створіть функцію printBook(), яка повинна приймати один параметр - книгу та виводити у консоль фразу book.title + by + book.author. Використайте інтерфейс Book для типу параметра.
 */
/*
3. Обявіть змінну myBook і присвойте їй наступний об'єкт
{
	id: 5,
	title: 'Colors, Backgrounds, and Gradients',
	author: 'Eric A. Meyer',
	available: true,
	category: Category.CSS,
	year: 2015,
	copies: 3
}
Викличте функцію printBook() та передайте їй myBook. Жодних помилок при цьому не повинно з'являтися.
 */
/*
4. Додайте до інтерфейсу Book властивість pages: number. Ви отримаєте помилку у функції getAllBooks(). Щоб помилка не виникала, зробіть властивість необов'язковою.
 */
/*
5. Вкажіть явно для змінної myBook тип Book. Ви знову отримаєте помилку. Видаліть властивості year, copies. Додайте властивість pages: 200.
 */
/*
6. Додайте в інтерфейс Book необов'язкову властивість markDamaged, яка є методом. Метод повинен приймати рядковий параметр reason і нічого не повертати. Додайте цей метод до myBook. Метод повинен виводити рядок `Damaged: ${reason}`. Викличте цей метод та передайте рядок 'missing back cover'.
 */
/*
7. Об’явіть інтерфейс DamageLogger, який описуватиме тип функції, яка повинна приймати один рядковий параметр і нічого не повертати.
 */
/*
8. Внесіть зміни до інтерфейсу Book: використайте інтерфейс DamageLogger для поля markDamaged.
 */
/*
9. Об’явіть інтерфейс Person, який містить дві рядкові властивості – name і email.
 */
/*
10. Об’явіть інтерфейс Author на основі інтерфейсу Person, який розширює вказаний інтерфейс числовою властивістю numBooksPublished.
 */
/*
11. Об’явіть інтерфейс Librarian на основі інтерфейсу Person, який розширює цей інтерфейс двома властивостями:
Рядкова властивість department
Функція assistCustomer, яка повинна приймати два рядкові параметри custName і bookTitle і нічого не повертати.
 */
enum Category {
    JavaScript = 0,
    TypeScript = 1,
    CSS = 2,
}
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`)
}

/*
interface Book {
    year: number;
    copies: number;
}
 */
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: function (label: string): void {
        console.log(`Damaged: ${label}`)
    }
}
printBook(myBook);

myBook.markDamaged?.("missing back cover");

interface DamageLogger {
    (label: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

