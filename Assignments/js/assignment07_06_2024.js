// CHALLENGE 1
// Create a `BankAccount` class with the following properties:
// - `accountNumber` (e.g., '123456')
// // - `accountHolder` (e.g., 'John Doe')
// // - `balance` (e.g., 1000)
// // Include methods `deposit(amount)` and `withdraw(amount)`. Ensure that the balance cannot go negative.


class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit successful! New balance: $${this.balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal successful! New balance: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log('Insufficient funds.');
      } else {
        console.log('Withdrawal amount must be positive.');
      }
    }
  }
  
 
  const account = new BankAccount('123456', 'John Doe', 1000);
  console.log(account);
  
  account.deposit(500);
  account.withdraw(300);
  account.withdraw(1500);     


// // CHALLENGE 2
// // Create a `Student` class with the following properties:
// // - `name` (e.g., 'Jane Doe')
// // - `studentID` (e.g., 'A12345')
// // - `grades` (an array of numbers, e.g., [85, 92, 78])
// // Include methods `addGrade(grade)` to add a grade to the `grades` array, and `getAverageGrade` to calculate and return the average of the grades.
// // const student1 = new Student('Jane Doe', 'A12345', [85, 92, 78]);
// // student1.addGrade(88);
// // console.log(student1.getAverageGrade());  // Output: 85.75

class Student {
    constructor(name, studentID, grades = []) {
      this.name = name;
      this.studentID = studentID;
      this.grades = grades;
    }
  
    addGrade(grade) {
      if (typeof grade === 'number' && grade >= 0) {
        this.grades.push(grade);
        console.log(`Grade added: ${grade}`);
      } else {
        console.log('Invalid grade.');
      }
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      const average = sum / this.grades.length;
      return average;
    }
  }
  
 
  const student1 = new Student('John Kamau', 'A12345', [85, 92, 78]);
  student1.addGrade(88);
  console.log(student1.getAverageGrade()); 
  


// CHALLENGE 3
// Create a `User` class with the following properties:
// - `username` (e.g., 'johndoe')
// - `password` (e.g., 'password123')
// Include methods `updatePassword(newPassword)` to update the password, and `checkPassword(password)` to check if the given password matches the user's password.
// const user1 = new User('johndoe', 'password123');
// console.log(user1.checkPassword('password123'));  // Output: true
// user1.updatePassword('newpassword456');
// console.log(user1.checkPassword('password123'));  // Output: false
// console.log(user1.checkPassword('newpassword456'));  // Output: true

class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    updatePassword(newPassword) {
      if (typeof newPassword === 'string' && newPassword.length > 0) {
        this.password = newPassword;
        console.log('Password updated successfully.');
      } else {
        console.log('Invalid password. Please enter a valid string.');
      }
    }
  
    checkPassword(password) {
      return this.password === password;
    }
  }
  
  
  const user1 = new User('johndoe', 'password123');
  console.log(user1.checkPassword('password123')); 
  user1.updatePassword('newpassword456');
  console.log(user1.checkPassword('password123'));  
  console.log(user1.checkPassword('newpassword4 56'));   


