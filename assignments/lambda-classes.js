// CODE here for your Lambda Classes
class Person {
    constructor (attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
        }
        speak () {
            return `Hello my name is ${this.name} and I am from ${this.location}`
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
        return `Today we learned about ${this.subject}`;
        }
    grade (student, subject){
            return `${this.student} receives a perfect score on ${this.subject}`;
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
            return `${this.name} has submitted a PR for ${this.subject}`;
        }
        listsSubjects (){
            return `Today we learned about ${this.favSubjects}`;
            }
        sprintChallenge (subject){
            return `${this.name} has begun sprint challenge on ${this.subject}`;
            }
        }     

class ProjectManager extends Student {
    constructor (attributes){
        super (attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.className;
                }
        standUp(channel){
            return `${this.name} announces to ${this.channel}, @channel standy times!`;
            }
        
        debugsCode(subject){
            return `${student.name} debugs ${student.name}'s code on ${this.subject}`;
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
    "name": "Ben",
    "age": "31",
    "location": "Florida",
    "gender": "Male",
    "specialty": "Javascript",
    "favLanguage": "React",
    "catchPhrase": "That's pretty cool"
});

const susan = new Student( {
    "name": "Ben",
    "age": "31",
    "location": "Florida",
    "gender": "Male",
    "previousBackground": "Retail",
    "className": "PT7",
    "favSubjects": ["css","html","Javascript"]
});

const bill = new Student( {
    "name": "Ben",
    "age": "31",
    "location": "Florida",
    "gender": "Male",
    "previousBackground": "Retail",
    "className": "PT7",
    "favSubjects": ["css","html","Javascript"]
});

const thomas = new ProjectManager( {
    "name": "Thomas",
    "age": "31",
    "location": "Florida",
    "gender": "Male",
    "gradClassName": "Web3",
    "favInstructor": "Daniel"
});

const mike = new ProjectManager( {
    "name": "Ben",
    "age": "31",
    "location": "Florida",
    "gender": "Male",
    "gradClassName": "Javascript",
    "favInstructor": "React"
});

console.log (ben.speak());
console.log (mary.demo("math"));
console.log (ben.grade("bill", "html"));
console.log (susan.listsSubjects());
console.log (bill.PRAssignment("html"));
console.log (susan.sprintChallenge("html"));