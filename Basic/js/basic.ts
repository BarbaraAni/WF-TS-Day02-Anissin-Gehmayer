class Person {


	constructor (name, age, jobTitle) {
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
}


greeting() {
	return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`
}
}
let lisa = new Person("Lisa", 20, "teacher");




class Pupils extends Person {

	constructor(name, age, jobTitle, salary, jobLocation) {
		super(name, age, jobTitle);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}

greeting() {
	return `${super.greeting()} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`
}

}
let mark = new Pupils("Mark", 50, "pupil", "nothing", "London");
console.log(mark.greeting());
