number = +prompt("Enter a number to check perfect or not")

sum = 0
for (i = 0; i < number; i++) {
    if (number % i == 0) {
        sum += i;
    }
}
if (sum == number) {
    console.log(`The ${number} is a Perfect Number!`)
}
else {
    console.log(`The ${number} is not a Perfect Number!`)
}

number2 = +prompt("Enter a number to check prime or not: ");

counter = 0;

for (i = 1; i <= number2; i++) {
    if (number2 % i == 0) {
        counter += 1
    }
}

if (counter > 2) {
    console.log(`the number(${number2}) is not a prime number`)
}
else {
    console.log(`the number(${number2}) is a prime number`)

}

for(i=65;i<70;i++){
    pat = '';
    for(j=65;j<=i;j++){
       pat += String.fromCharCode(j)
    }
    console.log(pat)
}

// the above prints the following pattern
// A
// AB
// ABC
// ABCD
// ABCDE