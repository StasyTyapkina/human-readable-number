
var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];


function toReadable_thousands(num){
    if (num>=1000){
        return toReadable_hundreds(Math.floor(num/1000))+" thousand "+toReadable_hundreds(num%1000);
    }
    else{
        return toReadable_hundreds(num);
    }
}

function toReadable_hundreds(num){
    if(num%100===0){
        return ones[Math.floor(num/100)]+" hundred";
    } else if(num>99){
        return ones[Math.floor(num/100)]+" hundred "+toReadable_tens(num%100);
    } else{
        return toReadable_tens(num);
    }
}

function toReadable_tens(num){
    if (num<10) return ones[num];
    else if (num>=10 && num<20) return teens[num-10];
    else if(num%10===0){
        return tens[Math.floor(num/10)];
    }
    else{
        return tens[Math.floor(num/10)]+" "+ones[num%10];
    }
}


module.exports = function toReadable (num) {
  if (num==0) return "zero";
    else return toReadable_thousands(num);
}


