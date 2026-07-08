let goat = ["messi", "ronaldo", "babar", "kohli", "ab", "rdj"];
console.log(goat);
goat.push("chris evans");
goat.unshift("roman reigns");
console.log(goat);

//Create an array containing your top 5 favorite movies or books. Write a snippet that uses a for loop to print each item along with its index position (e.g., "Index 0: Movie Name").

let movies = ["avengers", "spiderman", "dr strange", "doomsday", "thor"];

for (let i = 0; i < movies.length; i++) {
  console.log("the movie name is :", movies[i], " and the index is : ", i);
}

//Declare a starting array: let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM"]; and perform the following sequential operations:
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM"];
companies.pop();
companies.splice(2, 1, "ola");
companies.push("amazon");
console.log(companies);
