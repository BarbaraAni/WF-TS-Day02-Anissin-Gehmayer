var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// parent class
var Vehicles = /** @class */ (function () {
    function Vehicles(model, kmLeft, seats, fuel, year, img) {
        this.model = model;
        this.kmLeft = kmLeft;
        this.seats = seats;
        this.fuel = fuel;
        this.year = year;
        this.img = img;
    }
    return Vehicles;
}());
// first child class
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(model, kmLeft, seats, fuel, year, img, speed, hp) {
        var _this = _super.call(this, model, kmLeft, seats, fuel, year, img) || this;
        _this.speed = speed;
        _this.hp = hp;
        return _this;
    }
    Motor.prototype.method = function () {
        return "<p>Kilometers: " + this.kmLeft + "km</p><p>Seats: " + this.seats + "</p><p>Fuel-type: " + this.fuel + "</p><p>Build-year: " + this.year + "</p><p>Speed-Max: " + this.speed + "</p><p>Horse-Power: " + this.hp + "</p>";
    };
    return Motor;
}(Vehicles));
// data car
var tesla = new Motor("Tesla Model X", 100, 7, "Electro", "2019", "./img/tesla.jpg", "250kmh", 333);
var audi = new Motor("Audi A3 S", 80000, 5, "Diesel", "2016", "./img/audi.jpg", "240kmh", 244);
var skoda = new Motor("Skoda Fabia", 200000, 5, "Diesel", "2003", "./img/skoda.jpg", "180", 64);
// second child class
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(model, kmLeft, seats, fuel, year, img, hp, truck) {
        var _this = _super.call(this, model, kmLeft, seats, fuel, year, img) || this;
        _this.hp = hp;
        _this.truck = truck;
        return _this;
    }
    Truck.prototype.method = function () {
        return "<p>Kilometers: " + this.kmLeft + "km</p><p>Seats: " + this.seats + "</p><p>Fuel-type: " + this.fuel + "</p><p>Build-year: " + this.year + "</p><p>Horse-Power: " + this.hp + "</p><p>Truck: " + this.truck + "</p>";
    };
    return Truck;
}(Vehicles));
//data truck
var monstertruck = new Truck("Bigfoot", 50, 2, "Methanol", "2007", "./img/monsta.jpg", 2000, "Monster Truck");
var cars = [tesla, audi, skoda, monstertruck];
var methods = [audi.method(), tesla.method(), skoda.method(), monstertruck.method()];
var base = document.getElementById("accordionExample");
console.log(base);
for (var i = 0; i < cars.length; i++) {
    base.innerHTML += "<div class=\"card\">\n                            <div class=\"card-header\" id=\"heading" + +i + "\">\n                                <h2 class=\"mb-0\">\n                                    <button style=\"width :100%\" class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse" + +i + "\" aria-expanded=\"false\" aria-controls=\"collapse" + +i + "\">\n                                        <div class=\"row\"><h3 class=\"col-6 text-left offset-1\">" + cars[i].model + "</h3></div>\n                                    </button>\n                                </h2>\n                            </div>\n                            <div id=\"collapse" + +i + "\" class=\"collapse\" aria-labelledby=\"heading" + +i + "\" data-parent=\"#accordionExample\">\n                                <div class=\"card-body row\">\n                                \t<div class=\"col-4 offset-1\">\n                                \t\t<img style=\"object-fit:cover\" class=\"card-img\" src=\"" + cars[i].img + "\">\n                                \t\t<p id=\"blabla" + +i + "\"></p>\n                                \t</div>\n                                \t<div class=\"col-6 flex flex-column\">\n                                \t\t<p>" + methods[i] + "</p>\n\t\t\t\t\t\t\t\t\t</div>\n                                    <button class=\"btn btn-dark col-2 offset-9 mt-1\" id=\"btn" + +i + "\">Price</button>\n                                    \n                                </div>\n                            </div>\n                        </div>";
}
;
var _loop_1 = function (i) {
    document.getElementById("btn" + i).addEventListener("click", price);
    function price() {
        document.getElementById("blabla" + i).innerHTML = "Price: " + Number(500 * cars[i].seats + cars[i].hp - cars[i].kmLeft / 1000) + "€";
    }
};
for (var i = 0; i < cars.length; i++) {
    _loop_1(i);
}
