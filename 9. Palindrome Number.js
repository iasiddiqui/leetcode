/*
Approach 1 (String Conversion):
We convert the integer into a string and use two pointers to compare digits from both ends. If all pairs match, the number is a palindrome. This method is easy to implement and understand, but it uses extra space since the number is stored as a string.
*/


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let str = x.toString();
    let j = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[j]){
            return false;
        }
        j--;
    }
    return true;
};









/*
Approach 2 (Without String Conversion):
We reverse the number mathematically using modulo and division, then compare the reversed value with the original number. If they are equal, the number is a palindrome. This approach is more space-efficient (O(1)) and preferred in interviews, as it avoids string conversion.
*/


var isPalindrome = function(x) {
    if (x < 0) return false; 
    
    let original = x;
    let reversed = 0;

    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return original === reversed;
};


/*
Approach 3 (Using reverse() method):
In this approach, we convert the number into a string, then use JavaScript’s built-in split(''), reverse(), and join('') methods to reverse the string. Finally, we compare the reversed string with the original string to check if it’s a palindrome. This solution is concise and easy to write, but like the basic string method, it uses extra space and is less efficient than the mathematical approach.
*/

var isPalindrome = function(x) {
    if (x < 0) return false; // negative numbers not palindrome
    
    let str = x.toString();              // convert to string
    let reversed = str.split('').reverse().join(''); // reverse string
    
    return str === reversed;             // check if same
};
