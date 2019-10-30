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
	method(){
		return `${this.seats} ${this.fuel} ${this.year} ${this.speed} ${this.hp}`;
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
	method(){
		return `${this.seats} ${this.fuel} ${this.year} ${this.hp} ${this.truck}`;
	}

}
//data truck
let monstertruck = new Truck("Bigfoot", 50, 2, "Methanol", "2007", 2000, "Monster Truck");


var cars : Array<any>=[tesla, audi, skoda, monstertruck];

for(let i = 0; i<cars.length;i++){
	let base = document.getElementsByClassName("container")
	console.log(base)
	base.innerHTML += `<div class="card">
                            <div class="card-header" id="heading${+i}">
                                <h2 class="mb-0">
                                    <button style="width :100%" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${+i}" aria-expanded="false" aria-controls="collapse${+i}">
                                        <div class="row"><h3 class="col-6 text-left offset-1">${cars[i].model}</h3></div>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapse${+i}" class="collapse" aria-labelledby="heading${+i}" data-parent="#accordionExample">
                                <div class="card-body row">
                                	<img style="object-fit:cover" class="card-img col-4 offset-1" src="#">
                                	<div class="col-1 flex flex-column">
                                		<p>${audi.method()}</p>
                                		<p>${tesla.method()}</p>
                                		<p>${skoda.method()}</p>
                                		<p>${monstertruck.method()}</p>
									</div>
                                    <button class="btn btn-dark col-2 offset-9 mt-1">Price</button>
                                </div>
                            </div>
                        </div>`;
};

