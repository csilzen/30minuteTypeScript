interface Person {
	name: string;
	age: number;
}

function birthday(someone : Person) : Person {
	return {
		handle: someone.name,
		age: someone.age+1
	};
}

console.dir(birthday({name:"Judy", age:39}));