// CODE here for your Lambda Classes
class Person {
    constructor (attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
        speak(){
            return `Hello my name is ${this.name} and I am from ${this.location}`;
        }
    }

    class Instructor extends Person {
        constructor (attributes){
            this.specialty = attributes.specialty;
            this.favLanguage = attributes.favLanguage;
            this.catchPhrase = attributes.catchPhrase;
            this.gender = attributes.gender;
        }
            demo(subject){
                return `Today we learned about ${this.subject}`;
            }

            grade(student, subject){
                return `${this.student} receives a perfect score on ${this.subject}`;

            }
        }   
        
     class Student extends Instructor {
            constructor (attributes){
                this.previousBackground = attributes.previousBackground;
                this.className = attributes.className;
                this.favSubjects = attributes.favSubjects;
            }
                listsSubjects(){
                    return `Today we learned about ${this.subject}`;
                }
    
                PRAssignment(subject){
                    return `${student.name} has submitted a PR for ${this.subject}`;
                }

                sprintChallenge(subject){
                    return `${student.name} has begun sprint challenge on ${this.subject}`;
                }
            } 

            class ProjectManager extends Student {
                constructor (attributes){
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
    
