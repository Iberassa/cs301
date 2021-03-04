"use strict";
const assert = require("assert");
const fun = require("./check_prime_w2d3");
const area = require("./volume_of_cylinder_w2d3");
const roofArea = require("./house_volume_w2d3");
const houseVolume = require("./house_volume_w2d3");
const roofVolume = require("./house_volume_w2d3");
const livingVolume = require("./house_volume_w2d3");

describe("roofArea", function () {
    it("1.732050", function () {
        assert.strictEqual(roofArea.triangleArea(2, 2, 2), Math.sqrt(3));
    });
});

describe("roofVolume", function () {
    it("3.46410161", function () {
        assert.strictEqual(roofVolume.roofVolume(roofArea.triangleArea(2, 2, 2), 2), Math.sqrt*2);
    });
});

describe("livingvolume", function () {
    it("64", function () {
        assert.strictEqual(livingVolume.livingVolume(8, 2, 4), 64);
    });
});

describe("houseVolume", function () {
    it("69.46410161", function () {
        assert.strictEqual(houseVolume.houseVolume(roofVolume.roofVolume(roofArea.triangleArea(2, 2, 2), 2),livingVolume.livingVolume(8, 2, 4)), 64+(Math.sqrt*2));
    });
});

describe("checkPrime", function () {
    it("15 is not prime", function () {
        assert.strictEqual(fun.checkPrime(15), false);
    });
    it("37 is prime", function () {
        assert.strictEqual(fun.checkPrime(37), true);
    });
});

describe("calculateArea", function () {
    it("15.71428", function () {
        assert.strictEqual(area.areaOfCircle(5), (Math.pow(5, 2)) * Math.PI);
    });
});

describe("calculateVolume", function () {
    it("94.28571428571429", function () {
        assert.strictEqual(area.volumeOfCylinder(5, 6), (Math.pow(5, 2)) * Math.PI * 6);
    });
});