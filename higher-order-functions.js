var grades = [
    {
        name: "John",
        grade: 8,
        sex: "M",
    },
    {
        name: "Sarah",
        grade: 12,
        sex: "F",
    },
    {
        name: "Bob",
        grade: 16,
        sex: "M",
    },
    {
        name: "Johnny",
        grade: 2,
        sex: "M",
    },
    {
        name: "Ethan",
        grade: 4,
        sex: "M",
    },
    {
        name: "Paula",
        grade: 18,
        sex: "F",
    },
    {
        name: "Donald",
        grade: 5,
        sex: "M",
    },
    {
        name: "Jennifer",
        grade: 13,
        sex: "F",
    },
    {
        name: "Courtney",
        grade: 15,
        sex: "F",
    },
    {
        name: "Jane",
        grade: 9,
        sex: "F",
    },
];

const getBoys = (grades) => grades.filter((person) => person.sex === "M");

const getGirls = (grades) => grades.filter((person) => person.sex === "F");

const average = (grades) =>
    grades.reduce((acc, val) => acc + val.grade, 0) / grades.length;

const maxGrade = (grades) => Math.max(...grades.map((person) => person.grade));

const minGrade = (grades) => Math.min(...grades.map((person) => person.grade));

console.log("The average grade of the class", average(grades));

console.log(
    "The average grade of the malses in the class",
    average(getBoys(grades))
);

console.log(
    "The average grade of the females in the class",
    average(getGirls(grades))
);

console.log("The highest grade in the class", maxGrade(grades));

console.log(
    "The highest grade of the boys in the class",
    maxGrade(getBoys(grades))
);

console.log(
    "The highest grade of the girls in the class",
    maxGrade(getGirls(grades))
);

console.log("The lowest grade of the class", minGrade(grades));

console.log(
    "The lowest grade of the boys in the class",
    minGrade(getBoys(grades))
);

console.log(
    "The lowest grade of the girls in the class",
    minGrade(getGirls(grades))
);
