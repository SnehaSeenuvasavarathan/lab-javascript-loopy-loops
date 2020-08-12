// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
let ProGrad_1 = "John";
console.log("The driver's name is " + ProGrad_1);
let ProGrad_2 = "Doe";
console.log("The navigator's name is " + ProGrad_2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (ProGrad_1.length > ProGrad_2.length)
    console.log("The driver has the longest name, it has " + ProGrad_1.length + " characters")
else if (ProGrad_2.length > ProGrad_1.length)
    console.log("It seems that the navigator has the longest name, it has " + ProGrad_2.length + " characters");

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
let s = "Possibility";
for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "a" || s.charAt(i) == "e" || s.charAt(i) == "i" || s.charAt(i) == "o" || s.charAt(i) == "u" || s.charAt(i) == "A" || s.charAt(i) == "E" || s.charAt(i) == "I" || s.charAt(i) == "O" || s.charAt(i) == "U")
        console.log(s.charAt(i) + " " + i);
}
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

let t = "MyPreparationForSemesterExams";
let u = 0, l = 0;
for (let i = 0; i < t.length; i++) {
    if ((t.charAt(i)) == t.charAt(i).toUpperCase())
        u++;
    else if ((t.charAt(i)) == t.charAt(i).toLowerCase())
        l++;
}
console.log("No of uppercase letters " + u + " No of lowercase letters " + l);
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
for (let i = 0; i < ProGrad_1.length; i++)
    console.log(ProGrad_1.charAt(i).toUpperCase() + " ");

let split = ProGrad_2.split("");
let rev = split.reverse();
let join = rev.join("");
console.log(join);

ProGrad_1 = "John";
ProGrad_2 = "Doe";

if (ProGrad_1.localeCompare(ProGrad_2) > 0)
    console.log("The driver's name goes first.");
else if (ProGrad_1.localeCompare(ProGrad_2) < 0)
    console.log("Yo, the navigator goes first definitely");
else
    console.log("What?! You both have the same name?");


// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
let li = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla";
let wc = 0;
for (let i = 0; i < li.length; i++) {
    if (li.charAt(i) == " ")
        wc++;
}
console.log("Number of words is " + (wc + 1));


// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
let word = "race car";
console.log(word.replace(/[^a-zA-Z]/g, ""));
let x = 1;
for (let i = 0, j = word.length - 1; !(i > j); i++, j--) {
    if (word.charAt(i) != word.charAt(j)) {
        console.log("Not Palindrome");
        x = 0;
        break;
    }

}
if (x == 1)
    console.log("Palindrome");
// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
