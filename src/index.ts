function formatString(input: string, toUpper?: boolean): string {
	if (toUpper === false) {
		return `${input.toLowerCase()}`;
	}
	return `${input.toUpperCase()}`;
}

// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
	return items.filter((item) => item.rating >= 4);
}

// const books = [
// 	{ title: "Book A", rating: 4.5 },
// 	{ title: "Book B", rating: 3.2 },
// 	{ title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
	return arrays.reduce((acc, item) => acc.concat(item), []);
}
// console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
// console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]

class Vehicle {
	private make: string;
	private year: number;

	getInfo() {
		return `Make: ${this.make}, Year: ${this.year}`;
	}
}

class Car extends Vehicle {
	private model: string;

	getModel(modelInfo: string) {
		return (this.model = modelInfo);
	}
}

// Description: Write a function that takes a string | number and returns:

// The length if it's a string
// The number multiplied by 2 if it's a number

function processValue(value: string | number): number {
	if (typeof value === "string") {
		return value.length;
	} else if (typeof value === "number") {
		return value * 2;
	}
}

// Description: Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.

// Interface & Function Signature:

// interface Product {
//   name: string;
//   price: number;
// }

// function getMostExpensiveProduct(products: Product[]): Product | null

interface Product {
	name: string;
	price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
	if (products.length === 0) return null;

	return products.reduce((max, product) => (product.price > max.price ? product : max));
}

// Problem 7:
// Description:

// Define an enum Day for the days of the week.
// Create a function that returns "Weekday" or "Weekend" based on the input day.
// Enum & Function Signature:

// enum Day {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday
// }

// function getDayType(day: Day): string
