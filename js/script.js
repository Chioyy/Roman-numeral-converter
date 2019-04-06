function convertToRoman(num) {
    let roman = [];
    let left = num;
    while (left >= 1) {
        if (left >= 1000) {
            roman.push("M");
            left = left - 1000; }
        else if (left >= 500) {
            roman.push("D");
            left = left - 500; }  
        else if (left >= 100) {
            roman.push("C");
            left = left - 100; } 
        else if (left >= 50) {
            roman.push("L");
            left = left - 50; } 
        else if (left >= 10) {
            roman.push("X");
            left = left - 10; } 
        else if (left >= 5) {
            roman.push("V");
            left = left - 5; } 
        else if (left >= 1) {
            roman.push("I");
            left = left - 1; }           
    }   
    let fixedRoman = roman.join("").replace("DCCCC","CM").replace("CCCC","CD").replace("LXXXX","XC")
        .replace("XXXX","XL").replace("VIIII","IX").replace("IIII","IV");
    document.getElementById("answer").innerHTML = fixedRoman;
}

document.getElementById("button").addEventListener("click", function() {
    convertToRoman(document.getElementById("str").value);
});