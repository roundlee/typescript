// interface LabeledValue {
//     label: string 
// }

// function printLabel(labeledObj: LabeledValue){
//     console.log(labeledObj.label)
// }

// let myObj = { label: "size 10 Object"}
// printLabel(myObj)

interface Method {
    (name: string, sex: string): string
}

let myInfo: Method

myInfo = function printUser(name: string, sex: string): string {
    let result = name.search(sex)

    return name
}
console.log(myInfo("round", "male"))


interface finterface {
    currentTime: Date;
}

class Clock implements finterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) {
        this.currentTime.setHours(h);
        this.currentTime.setMinutes(m);
    }
}

let clock: Clock = new Clock(12, 30);
console.log(clock.currentTime);
