module.exports = function solveEquation(equation) {
  var a,b,c,delta,x1,x2 = null;
  var arr = equation.split(' ');
  //filter sign multiply for better work my  loop
  arr = arr.filter((x)=>x!=="*");
  for(var i = 0; i < arr.length;i++){
    if(arr[i] === "x^2"){
      a = Number(arr[i-1]);
    }else if(arr[i]=="x"){
      //check for the correct b and c with "-" or "+"
      arr[i-2] == "-" ? b = -Number(arr[i-1]) : b = Number(arr[i-1]);
      arr[i+1] == "-" ? c = -Number(arr[i+2]) : c = Number(arr[i+2]);
    }

  }
  //find the discriminant and x1 x2
  delta = b*b - 4*a*c;
  // need to round because of 0.0000002(etc) when we have math operations;
  x1 = Math.round((-b + Math.sqrt(delta)) / (a*2));
  x2 = Math.round((-b - Math.sqrt(delta)) / (a*2));
  //return in ascending order
  return [x1,x2].sort((a,b)=>a-b);
}
