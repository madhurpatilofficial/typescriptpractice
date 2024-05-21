class PostGraduation{

    private category: string;

    constructor(category: string){
        this.category = category;
    }

    getCategoryDetails(){
        console.log(this.category);
    }
}

class MBA extends PostGraduation{

    private specialization: string;
    private college: string;
    private fees: number;

    constructor(specialization: string, college: string, fees: number, category: string){
        super(category);
        this.specialization = specialization;
        this.college = college;
        this.fees = fees;

    }

    getSpecializationDetails(){
        console.log(this.specialization);
    }
    
    getCollege(){
        console.log(this.college);
    }

    getFees(){
        console.log(this.fees);
    }
}

let collegeObj = new MBA("Business Analytics", "ASM IBMR", 2000000, "Management");

collegeObj.getCategoryDetails();
collegeObj.getSpecializationDetails();
collegeObj.getCollege();
collegeObj.getFees();