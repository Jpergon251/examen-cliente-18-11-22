function isLeapYear(year1 ,year2) { 
    años_bisiestos = []
    
    if ((isNaN(year1)) || (isNaN(year2))){
        alert("Introduce un año correcto.")
    }else if ((year1 < 2001 && year1 > 2500) || (year2 < 2001 && year2 > 2500)){
        alert("Introduce un año valido entre 2001 y 2500");       
    
    }else{
       for(i = year1; i < year2; i++){
            if(i % 4 == 0 || (i % 100 == 0 && i % 400 == 0)){
                años_bisiestos.push(i);
            }
       }
       return años_bisiestos 
    }

}

console.log(isLeapYear(2001,2500))

 