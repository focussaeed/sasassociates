
//  Funtion to calculate tax on Salary monthly & yearly.

function salCalculate() {

  var refreshButton = document.getElementById("refresh");
  var hrefLink = document.getElementById("hrefLink")
  refreshButton.disabled = false;
  hrefLink.setAttribute('href','./sal-calculator.html');

  var salary = document.getElementById("salary").value;
  var type = document.getElementById("type").value;
  var mTax = 0;
  var yTax = 0;
  var monthlyAmount = 0;
  var yearlyAmount = 0;

  if (!salary || salary < 0) {
    alert("Please Enter Salary Amount..........");
  } else {
    if (type === "monthly") {

      monthlyAmount = salary;
      yearlyAmount = salary * 12;

    } else {
      yearlyAmount = salary;
      monthlyAmount = salary / 12;
    }

    if (yearlyAmount <= 600000) {
      mTax = 0;
      yTax = 0;
    } else if (yearlyAmount > 600000 && yearlyAmount <= 1200000) {
      yTax = ((yearlyAmount - 600000) * 2.5) / 100;
      mTax = yTax / 12;
    } else if (yearlyAmount > 1200000 && yearlyAmount <= 2400000) {
      yTax = ((yearlyAmount - 1200000) * 12.5) / 100 + 15000;
      mTax = yTax / 12;
    } else if (yearlyAmount > 2400001 && yearlyAmount <= 3600000) {
      yTax = ((yearlyAmount - 2400000) * 22.5) / 100 + 165000;
      mTax = yTax / 12;
    } else if (yearlyAmount > 3600001 && yearlyAmount <= 6000000) {
      yTax = ((yearlyAmount - 3600000) * 27.5) / 100 + 435000;
      mTax = yTax / 12;
    } else if (yearlyAmount > 6000000) {
      yTax = ((yearlyAmount - 6000000) * 35) / 100 + 1095000;
      mTax = yTax / 12;
    }

    var mAmount = document.getElementById("monthlyAmount");
    var monthTax = document.getElementById("monthlyTax");
    var maaTax = document.getElementById("monthlyAmountAfterTax");
    var ySalary = document.getElementById("yearlyAmount");
    var yearTax = document.getElementById("yearlyTax");
    var yaaTax = document.getElementById("yearlyAmountAfterTax");

    mAmount.innerHTML = "Rs." + Math.round(monthlyAmount);
    monthTax.innerHTML = "Rs." + Math.round(mTax);
    maaTax.innerHTML = "Rs." + Math.round(monthlyAmount - mTax);

    ySalary.innerHTML = "Rs." + Math.round(yearlyAmount);
    yearTax.innerHTML = "Rs." + Math.round(yTax);
    yaaTax.innerHTML = "Rs." + Math.round(yearlyAmount - yTax);
  }
}

//  Funtion to calculate tax on Rental Income.



function rentCalculate() {

  var refreshButton = document.getElementById("refresh");
  var hrefLink = document.getElementById("hrefLink")
  refreshButton.disabled = false;
  hrefLink.setAttribute('href','./Rent-caculator.html');


  var rent = document.getElementById("rent").value;
  var type = document.getElementById("type").value;
  var status = document.getElementById("status").value;

  var mTax = 0;
  var yTax = 0;
  var monthlyAmount = 0;
  var yearlyAmount = 0;


  if (!rent || rent < 0) {
    alert("Please Enter Rent Amount..........");
    } else {

    if (type === "monthly") {
    
      monthlyAmount = rent;
      yearlyAmount = rent * 12;

    } else {
      yearlyAmount = rent;
      monthlyAmount = rent / 12;
    }

    if (status === "individual") {

      if (yearlyAmount <= 300000) {
        mTax = 0;
        yTax = 0;
      } 
        else if (yearlyAmount > 300000 && yearlyAmount <= 600000) {
            yTax = ((yearlyAmount - 300000) * 5) / 100;
            mTax = yTax / 12;
      }
        else if (yearlyAmount > 600000 && yearlyAmount <= 2000000) {
        yTax = (((yearlyAmount - 600000) * 10) / 100) + 15000
        mTax = yTax / 12;
      }
        else if (yearlyAmount > 2000000 && yearlyAmount <= 2000000) {
        yTax = (((yearlyAmount - 2000000) * 25) / 100) + 155000
        mTax = yTax / 12;
      }}

    else {

        yTax = ((yearlyAmount * 15) / 100) 
        mTax = yTax / 12;
    }
        var mAmount = document.getElementById("monthlyRent");
        var monthTax = document.getElementById("monthlyTax");
        var maaTax = document.getElementById("monthlyRentAfterTax");
        var yAmount = document.getElementById("yearlyRent");
        var yearTax = document.getElementById("yearlyTax");
        var yaaTax = document.getElementById("yearlyRentAfterTax");

        mAmount.innerHTML = "Rs." + Math.round(monthlyAmount);
        monthTax.innerHTML = "Rs." + Math.round(mTax);
        maaTax.innerHTML = "Rs." + Math.round(monthlyAmount - mTax);

        yAmount.innerHTML = "Rs." + Math.round(yearlyAmount);
        yearTax.innerHTML = "Rs." + Math.round(yTax);
        yaaTax.innerHTML = "Rs." + Math.round(yearlyAmount - yTax);

    }


} //function closer



//  Funtion to calculate tax on Individual Income.

function indCalculator() {

  var refreshButton = document.getElementById("refresh");
  var hrefLink = document.getElementById("hrefLink")
  refreshButton.disabled = false;
  hrefLink.setAttribute('href','./ind-calculator.html');

  var income = document.getElementById("income").value;
  var type = document.getElementById("type").value;

  var mTax = 0;
  var yTax = 0;
  var monthlyAmount = 0;
  var yearlyAmount = 0;

  if (!income || income < 0) {
    alert("Please Enter income Amount..........");
  } else {
    if (type === "monthly") {
      
      monthlyAmount = income;
      yearlyAmount = income * 12;
      // console.log(yearlyAmount);
    } else {
      yearlyAmount = income;
      monthlyAmount = income / 12;
    }

    if (yearlyAmount <= 600000) {
      mTax = 0;
      yTax = 0;
    } else if (yearlyAmount > 600000 && yearlyAmount <= 800000) {
      yTax = ((yearlyAmount - 600000) * 7.5) / 100;
      mTax = yTax / 12;
    } else if (yearlyAmount > 800000 && yearlyAmount <= 1200000) {
      yTax = ((yearlyAmount - 800000) * 15) / 100 + 15000;
      mTax = yTax / 12;
    } else if (yearlyAmount > 1200000 && yearlyAmount <= 2400000) {
      yTax = ((yearlyAmount - 1200000) * 20) / 100 + 75000;
      mTax = yTax / 12;
    } else if (yearlyAmount > 2400000 && yearlyAmount <= 3000000) {
      yTax = ((yearlyAmount - 2400000) * 25) / 100 + 3155000;
      mTax = yTax / 12;
    } else if (yearlyAmount > 3000000 && yearlyAmount <= 4000000) {
      yTax = ((yearlyAmount - 3000000) * 30) / 100 + 465000;
      mTax = yTax / 12;
    } else if (yearlyAmount > 4000000) {
      yTax = ((yearlyAmount - 4000000) * 35) / 100 + 765000;
      mTax = yTax / 12;
    }

    var mAmount = document.getElementById("monthlyIncome");
    var monthTax = document.getElementById("monthlyTax");
    var maaTax = document.getElementById("monthlyIncomeAfterTax");
    var yAmount = document.getElementById("yearlyIncome");
    var yearTax = document.getElementById("yearlyTax");
    var yaaTax = document.getElementById("yearlyIncomeAfterTax");

    mAmount.innerHTML = "Rs." + Math.round(monthlyAmount);
    monthTax.innerHTML = "Rs." + Math.round(mTax);
    maaTax.innerHTML = "Rs." + Math.round(monthlyAmount - mTax);

    yAmount.innerHTML = "Rs." + Math.round(yearlyAmount);
    yearTax.innerHTML = "Rs." + Math.round(yTax);
    yaaTax.innerHTML = "Rs." + Math.round(yearlyAmount - yTax);
  }
}


