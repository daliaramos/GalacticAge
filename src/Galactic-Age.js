export class Date{
  constructor(userAge, userYear){
    this.userAge = userAge;
    this.userYear = userYear;
  }
  userAgeToSeconds(){
    return this.userAge * 31536000;
  }
  userYearToSeconds(){
    let userYear = 2018 - this.userYear;
    return userYear * 31536000;
  }
  mercuryAge(){
    return this.userAge * 4; //revolution period: 365 earth days divided by 87 mercury days = 4
  }
  venusAge(){
   return this.userAge * 1.6; // revolution period: 365 earth days divided by 224.7 venus days = 1.6
  }
  marsAge(){
    return this.userAge * .53129548762;// revolution period: 365 earth days divided by 224.7 venus days = .53129548762

  }
  jupiterAge(){
    return this.userAge * .00707364341;// revolution period: 365 earth days divided by 51600 jupiter days = .00707364341
  }

  mercuryLifeExpectancy(){
    return Math.round((80 - this.userAge) * .24)
  }
  venusLifeExpectancy(){
    return Math.round((80 - this.userAge) * .62)
  }
  marsLifeExpectancy(){
    return Math.round((80 - this.userAge) * 1.88)
  }
  jupiterLifeExpectancy(){
    return Math.round((80 - this.userAge) * 11.86)
  }

  lifeSurpassed(){
    if(this.userAge > 80) {
        return "you've surpassed the life expectancy by " + (this.userAge - 80);
    } else {
      return false;
    }
  }
}
