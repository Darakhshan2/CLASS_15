// interface only made for object
interface TypeIntro {
    name: string,
    age: number,
    cgpa: number
}

class myIntro implements TypeIntro {
    name = "darakhshan"
    age = 19
    cgpa = 3.8
}

let Introduction = new myIntro()
console.log(Introduction); 