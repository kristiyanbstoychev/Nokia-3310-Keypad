const lettersToNumbers = require('./problem_1')
test('Test sequence Ivo e Panda', () => {

        var input = "Ivo e Panda";
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

    expect(lettersToNumbers(str, input)).toBe("1888666013301126632");
  });

  test('Test sequence abc', () => {

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

expect(lettersToNumbers(str, input)).toBe("222222");
});  

test('Test sequence ABC', () => {

    var input = "aaa";
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

expect(lettersToNumbers(str, input)).toBe("222");
});