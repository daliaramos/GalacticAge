import { Date } from './../src/Galactic-Age.js'

describe('Date', function() {

  it('Take a person’s age in years and convert it into seconds.', function() {
    let Input = new Date(1)
    expect(Input.userAgeToSeconds()).toEqual(31536000);
  });
});

describe('userYearToSeconds', function() {

  it('difference, in seconds between the two.', function() {
    let Input = new Date(1, 2000)
    expect(Input.userYearToSeconds()).toEqual(567648000);
  });
});

describe('mercuryAge', function() {

  it('Return the age of a human in Mercury years.', function() {
    let Input = new Date(19, 2000)
    expect(Input.mercuryAge()).toEqual(76);
  });
});


describe('venusAge', function() {

  it('Return the age of a human in venus years.', function() {
    let Input = new Date(19, 2000)
    expect(Input.venusAge()).toEqual(30.400000000000002);
  });
});

describe('marsAge', function() {

  it('Return the age of a human in mars years.', function() {
    let Input = new Date(19, 2000)
    expect(Input.marsAge()).toEqual(10.09461426478);
  });
});

describe('jupiterAge', function() {

  it('Return the age of a human in jupiter years.', function() {
    let Input = new Date(19, 2000)
    expect(Input.jupiterAge()).toEqual(0.13439922479);
  });
});

describe('marsLifeExpectancy', function() {

  it('Return the age of a human in jupiter years.', function(){

    let Input = new Date(20, 1)
    let yearsLeft = Math.round((80 - 20) * 1.88);
    expect(Input.marsLifeExpectancy(80)).toEqual(yearsLeft);
  });
});

describe('mercuryLifeExpectancy', function() {

  it('Return the age of a human in jupiter years.', function(){

    let Input = new Date(20, 1)
    let yearsLeft = Math.round((80 - 20) * .24);
    expect(Input.mercuryLifeExpectancy(80)).toEqual(yearsLeft);
  });
});

describe('venusLifeExpectancy', function() {

  it('Return the age of a human in jupiter years.', function(){

    let Input = new Date(20, 1)
    let yearsLeft =  Math.round((80 - 20) * .62);
    expect(Input.venusLifeExpectancy(80)).toEqual(yearsLeft);
  });
});

describe('jupiterLifeExpectancy', function() {

  it('Return the age of a human in jupiter years.', function(){

    let Input = new Date(20, 1)
    let yearsLeft =  Math.round((80 - 20) * 11.86);
    expect(Input.jupiterLifeExpectancy(80)).toEqual(yearsLeft);
  });
});

describe('lifeSurpassed', function() {

  it('Return', function(){

    let Input = new Date(100, 1)
   expect(Input.lifeSurpassed(80)).toEqual("you've surpassed the life expectancy by " + 20);
  });
});
