    function lettersToNumbers(arr, inputSting) 
    { 
        var output = "";  
        var charValueOfA = "a".charCodeAt(0);
        var position = 0;
        var currentLetter = 0;
       // length of input string 
        var n = inputSting.length; 
        for (var i = 0; i < n; i++) 
        {    
            //A var for the unicode value of the current letter
            var charValueOfInput = inputSting[i].charCodeAt(0);
            //Adds 0 if there is a white space in the input 
            if (inputSting[i] == " ") 
                output = output + 0;
            //Adds 1 if there are upper case characters in the input
            if (inputSting[i] == inputSting[i].toUpperCase()) 
                output = output + 1;
            
            else
            { 
            // Calculating index for each character 
                position = charValueOfInput - charValueOfA;
                output = output + arr[position];
            }
        } 
        return output;
    } 
        //Input string
        var input = "abc";
        var str = [
            "2","22","222", 
            "3","33","333", 
            "4","44","444", 
            "5","55","555", 
            "6","66","666", 
            "7","77","777","7777", 
            "8","88","888", 
            "9","99","999","9999"
            ];  
        console.log(lettersToNumbers(str, input)); 
          module.exports = lettersToNumbers;