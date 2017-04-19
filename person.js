function birthday(someone) {
    return {
        handle: someone.name,
        age: someone.age + 1
    };
}
console.dir(birthday({ name: "Judy", age: 39 }));
