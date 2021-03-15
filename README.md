# Old-phone-kayboard-converter

Nokia 3310 Keypad

Each key contains some letters from the alphabet. And by pressing that key, you rotate the letters until you get to your desired one.
First, implement a function that takes a list of integers - the sequence of numbers that have been pressed. The returned value should be the corresponding string of the message.
There are some special rules:
If you press 1, the next letter is going to be capitalized
If you press 0, this will insert a single white-space
If you press a number and wait for a few seconds, the special breaking number -1 enters the sequence. This is the way to write different letters from only one keypad!
Examples:
Lets say we have a function called numbers_to_message, to illustrate the examples:
numbers_to_message([2, -1, 2, 2, -1, 2, 2, 2]) == "abc"
numbers_to_message([2, 2, 2, 2]) == "a"
numbers_to_message([1, 4, 4, 4, 8, 8, 8, 6, 6, 6, 0, 3, 3, 0, 1, 7, 7, 7, 7, 7, 2, 6, 6, 3, 2]) == "Ivo e Panda"
