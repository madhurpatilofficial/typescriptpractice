
// filter the names which contain r
let allNames: string[] = ["Madhur", "Gaurav", "Gattu", "dashan"];

let finalNames = allNames.filter((name => name.includes('r')));
console.log(finalNames.join(','));