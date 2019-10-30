// parent class
class Vehicles {

	constructor(model, kmLeft, seats, fuel, year, img) {
		this.model = model;
		this.kmLeft = kmLeft;
		this.seats = seats;
		this.fuel = fuel;
		this.year = year;
		this.img = img;
	}
}

// first child class
class Motor extends Vehicles {

	constructor(model, kmLeft, seats, fuel, year, img, speed, hp) {
		super(model, kmLeft, seats, fuel, year, img);
		this.speed = speed;
		this.hp = hp;
	}
	method(){
		return `<p>Kilometers: ${this.kmLeft}km</p><p>Seats: ${this.seats}</p><p>Fuel-type: ${this.fuel}</p><p>Build-year: ${this.year}</p><p>Speed-Max: ${this.speed}</p><p>Horse-Power: ${this.hp}</p>`;
	}
}

// data car
let tesla = new Motor("Tesla Model X", 100, 7, "Electro", "2019", "./img/tesla.jpg", "250kmh", 333);
let audi = new Motor("Audi A3 S", 80000, 5, "Diesel", "2016", "./img/audi.jpg", "240kmh", 244);
let skoda = new Motor("Skoda Fabia", 200000, 5, "Diesel", "2003", "./img/skoda.jpg", "180", 64);


// second child class
class Truck extends Vehicles {

	constructor(model, kmLeft, seats, fuel, year, img, hp, truck) {
		super(model, kmLeft, seats, fuel, year, img);
		this.hp = hp;
		this.truck = truck;
	}
	method(){
		return `<p>Kilometers: ${this.kmLeft}km</p><p>Seats: ${this.seats}</p><p>Fuel-type: ${this.fuel}</p><p>Build-year: ${this.year}</p><p>Horse-Power: ${this.hp}</p><p>Truck: ${this.truck}</p>`;
	}

}
//data truck
let monstertruck = new Truck("Bigfoot", 50, 2, "Methanol", "2007", "./img/monsta.jpg", 2000, "Monster Truck");


var cars : Array<any>=[tesla, audi, skoda, monstertruck];
var methods : Array<any>=[audi.method(),tesla.method(),skoda.method(),monstertruck.method()]

let base = document.getElementById("accordionExample");
	console.log(base);

for(let i = 0; i<cars.length;i++){
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
                                	<div class="col-4 offset-1">
                                		<img style="object-fit:cover" class="card-img" src="${cars[i].img}">
                                		<p id="blabla${+i}"></p>
                                	</div>
                                	<div class="col-6 flex flex-column">
                                		<p>${methods[i]}</p>
									</div>
                                    <button class="btn btn-dark col-2 offset-9 mt-1" id="btn${+i}">Price</button>
                                    
                                </div>
                            </div>
                        </div>`;
};

for (let i=0;i<cars.length;i++) {
	document.getElementById("btn"+i).addEventListener("click",price)

	function price(){
		document.getElementById("blabla"+i).innerHTML =  "Price: "+ Number(500*cars[i].seats + cars[i].hp - cars[i].kmLeft/1000)+ "€"
	}
}