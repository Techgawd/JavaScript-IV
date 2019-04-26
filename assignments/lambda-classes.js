// CODE here for your Lambda Classes
class Person {
    constructor (attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
        }
        speak () {
            return `Hello my name is ${this.name} and I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor (attributes){
        super (attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo (subject){
        return `Today we learned about ${subject}.`;
        }
    grade (student, subject){
            return `${student} received a perfect score on ${subject}.`;
            }
    }    
     
class Student extends Instructor {
    constructor (attributes){
        super (attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        }

        PRAssignment (subject){
            return `${this.name} has submitted a PR for ${subject}.`;
        }
        listsSubjects (){
            return `Today we learned about ${this.favSubjects}.`;
            }
        sprintChallenge (subject){
            return `${this.name} has begun sprint challenge on ${subject}.`;
            }
        }     

class ProjectManager extends Student {
    constructor (attributes){
        super (attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.className;
                }
        standUp(channel){
            return `${this.name} announces to ${channel} @channel standy times!.`;
            }
        
        debugsCode(student, subject){
            return `${this.name} debugs ${student}'s code on ${subject}.`;
            }
        } 
    
const ben = new Instructor( {
    "name": "Ben",
    "age": "31",
    "location": "Florida",
    "gender": "Male",
    "specialty": "Javascript",
    "favLanguage": "React",
    "catchPhrase": "That's pretty cool"
});

const mary = new Instructor( {
    "name": "Mary",
    "age": "33",
    "location": "California",
    "gender": "Female",
    "specialty": "React",
    "favLanguage": "React",
    "catchPhrase": "Keep code clean!"
});

const susan = new Student( {
    "name": "Susan",
    "age": "38",
    "location": "Georgia",
    "gender": "Female",
    "previousBackground": "Retail",
    "className": "PT7",
    "favSubjects": ["css","html","and Javascript"]
});

const bill = new Student( {
    "name": "Bill",
    "age": "28",
    "location": "Texas",
    "gender": "Male",
    "previousBackground": "Educator",
    "className": "Web9",
    "favSubjects": ["React","and Javascript"]
});

const thomas = new ProjectManager( {
    "name": "Thomas",
    "age": "41",
    "location": "Florida",
    "gender": "Male",
    "gradClassName": "Web3",
    "favInstructor": "Daniel"
});

const mike = new ProjectManager( {
    "name": "Mike",
    "age": "26",
    "location": "California",
    "gender": "Male",
    "gradClassName": "Webpt3",
    "favInstructor": "Mary"
});

console.log (ben.speak());
console.log (mary.demo("Javascript"));
console.log (ben.grade("Frank", "html"));
console.log (susan.listsSubjects());
console.log (bill.PRAssignment("html"));
console.log (susan.sprintChallenge("html"));
console.log (thomas.standUp("Sprint 03"));
console.log (mike.debugsCode("Elizabeths","Javascript"));