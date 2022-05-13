//square calculation
const squarePerimeter = ( side ) => side * 4;
const squareArea = ( side ) => side * side;

//circle claculation
const circleDiameter = ( radius ) => radius * 2;
const circlePerimeter = ( radius ) => circleDiameter( radius ) * Math.PI;
const circleArea = ( radius ) => radius * radius * Math.PI;

//triangle calculation
const trianglePerimeter = ( base, side ) => ( side * 2 ) + base;
const triangleArea = ( base, height ) => ( base * height ) / 2;

//inputs
const sideSquare = document.getElementById("sideSquare");
const radioCircle = document.getElementById("radioCircle");
const triangleSide = document.getElementById("triangleSide");
const triangleBase = document.getElementById("triangleBase");
const triangleHeight = document.getElementById("triangleHeight");

//result container
const result = document.getElementById("result");
const area = document.getElementById("area");
const perimeter = document.getElementById("perimeter");
const figure = document.getElementById("figure");
const areaFigure = document.getElementById("areaFigure");
const perimeterFigure = document.getElementById("perimeterFigure");

function circleSelection () {
  figure.innerHTML = "Circle";
  radioCircle.style.display = "block";
  sideSquare.style.display = "none";
  triangleSide.style.display = "none";
  triangleBase.style.display = "none";
  triangleHeight.style.display = "none";

  sideSquare.value = "";
  radioCircle.value = "";
  triangleSide.value = "";
  triangleBase.value = "";
  triangleHeight.value = "";
}

function squareSelection () {
  figure.innerHTML = "Square";
  sideSquare.style.display = "block";
  radioCircle.style.display = "none";
  triangleSide.style.display = "none";
  triangleBase.style.display = "none";
  triangleHeight.style.display = "none";

  sideSquare.value = "";
  radioCircle.value = "";
  triangleSide.value = "";
  triangleBase.value = "";
  triangleHeight.value = "";
}

function triangleSelection () {
  figure.innerHTML = "Triangle";
  sideSquare.style.display = "none";
  radioCircle.style.display = "none";
  triangleSide.style.display = "block";
  triangleBase.style.display = "block";
  triangleHeight.style.display = "block";

  sideSquare.value = "";
  radioCircle.value = "";
  triangleSide.value = "";
  triangleBase.value = "";
  triangleHeight.value = "";
}

function calculate () {
  if ( sideSquare.value ) {
    result.style.display = "block";
    areaFigure.innerHTML = "Square";
    perimeterFigure.innerHTML = "Square";
    area.innerHTML = squareArea(sideSquare.value);
    perimeter.innerHTML = squarePerimeter(sideSquare.value);
  }

  if (radioCircle.value) {
    circleDiameter(radioCircle.value);

    result.style.display = "block";
    areaFigure.innerHTML = "Circle";
    perimeterFigure.innerHTML = "Circle";
    area.innerHTML = circleArea(radioCircle.value);
    perimeter.innerHTML = circlePerimeter(radioCircle.value);
  }

  if (triangleSide.value && triangleBase.value && triangleHeight.value) {
    result.style.display = "block";
    areaFigure.innerHTML = "Triangle";
    perimeterFigure.innerHTML = "Triangle";
    area.innerHTML = triangleArea(triangleBase.value, triangleHeight.value);
    perimeter.innerHTML = trianglePerimeter(triangleBase.value, triangleSide.value);
  }
}

//Discount calculator
const price = document.getElementById("price");
const discount = document.getElementById("discount");
const finalPrice = document.getElementById("finalPrice");
const resultDiscount = document.getElementById("resultDiscount");
const coupon = document.getElementById("coupon");

function calculateDiscount () {
  if ( price.value && discount.value ) {
    let discountPrice = price.value - ( price.value * discount.value / 100 );

    if ( coupon.value ) {
      switch ( coupon.value ) {
        case "ross":
          discountPrice = discountPrice - ( price.value * 20 / 100 );
          break;
        case "chicho":
          discountPrice = discountPrice - ( price.value * 10 / 100 );
          break;
        case "promo":
          discountPrice = discountPrice - ( price.value * 5 / 100 );
          break;
      }
    }

    finalPrice.innerHTML = discountPrice;
    resultDiscount.style.display = "block";
  }
  
  return discountPrice;
}

//promedio 
const average = document.getElementById("average");
const resultAverage = document.getElementById("resultAverage");

function calculateAverage ( value ) {
  let inputValuesArray = value.split(","); 
  let averageResult = 0;
  let overallValues = 0;

  for ( let i = 0; i < inputValuesArray.length; i++ ) {
    overallValues += inputValuesArray[i];
    averageResult = sumValue / inputValues.length;
  }

  return averageResult;
}