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
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.greeting = function () {
        return "Hello there, my name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var lisa = new Person("Lisa", 20, "teacher");
var Pupils = /** @class */ (function (_super) {
    __extends(Pupils, _super);
    function Pupils(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Pupils.prototype.greeting = function () {
        return _super.prototype.greeting.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation + ".";
    };
    return Pupils;
}(Person));
var mark = new Pupils("Mark", 50, "pupil", "nothing", "London");
console.log(mark.greeting());
