// parent class
class Vehicles {

	constructor(model, kmLeft, seats, fuel, year) {
		this.model = model;
		this.kmLeft = kmLeft;
		this.seats = seats;
		this.fuel = fuel;
		this.year = year;
	}
}

// first child class
class Motor extends Vehicles {

	constructor(model, kmLeft, seats, fuel, year, speed, hp) {
		super(model, kmLeft, seats, fuel, year);
		this.speed = speed;
		this.hp = hp;
	}
}

// data car
let tesla = new Motor("Tesla Model X", 100, 7, "Electro", "2019", "250kmh", 333);
let audi = new Motor("Audi A3 S", 80000, 5, "Diesel", "2016", "240kmh", 244);
let skoda = new Motor("Skoda Fabia", 200000, 5, "Diesel", "2003", "180", 64);


// second child class
class Truck extends Vehicles {

	constructor(model, kmLeft, seats, fuel, year, hp, truck) {
		super(model, kmLeft, seats, fuel, year);
		this.hp = hp;
		this.truck = truck;
	}
}

//data truck
let monstertruck = new Truck("Bigfoot", 50, 2, "Methanol", "2007", 2000, "Monster Truck");