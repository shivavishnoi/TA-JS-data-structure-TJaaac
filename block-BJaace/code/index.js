// 1. Declare an empty array and store it in a variable.
let arr = []
// 2. Now check the type of empty array you declared above.
// object
// 3. Create an array named `colors` that contains five different names of colors as strings.
let colors = [`red`,`green`,`orange`,`black`,`blue`]
// 4. Access the first color in the array and print it to the console using `console.log()`
console.log(colors[0])
// 5. Access the third color in the array and print it to the console using `console.log()`
console.log(colors[2])
// 6. Access the last color in the array and print it to the console using `console.log()`
console.log(colors[colors.length-1])
// 7. Write one line of code that changes the value of the first color in the list to "black" (overwriting the previous value).
colors[0] = `black`
// 8. Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
colors[colors.length-1] = `ultravoilet`
// 9. Now, Find the length of the array named `colors`.
console.log(colors.length)
// 10. Create a new variable called fourthColor and set it equal to the fourth color in the list.
colors[3] = `forthcolor`
// 11. Add another color to the end of the list.
colors.push(`pushcolor`)
// 12. Add another color to the beginning of the list (use array method array.unshift('gray'))
colors.unshift(`gray`)
// 13. Remove the first color from the starting of the array
delete colors[0]
// 14. Remove the last color from the end of list, and then print the length of the array to the console one more time.
delete colors[colors.length-1]
console.log(colors.length)
// 15. Remove the second color from the end of list.
delete colors[1]
// 16. Write a for loop to iterate through every element in the array and print each element to the console.
// for(let item in colors){
//   console.log(colors[item])
// }
for(i=0; i<colors.length;i++){
  console.log(colors[i])
}
// 17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
for(let item in colors){
  console.log(`${item} ${colors[item]}`)
}
// 18. Write a for..of loop to iterate through every element in the array and print each element to the console.

// 19. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)
let lastColor = colors[colors.length-1]
// 20. Add a new color `tomato` to the index 45. And check the length of the array. Use `console.log` to print.
colors[45] = `tomato`
console.log(colors.length)
// 46