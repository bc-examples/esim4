class Student {
    #idStudent;
    #fname;
    #lname;
    constructor(idStudent, fname, lname) {
      this.#idStudent = idStudent;
      this.#fname = fname;
      this.#lname = lname;
    }
    setIdStudent(idStudent){
        this.#idStudent = idStudent; 
    }
    setFname(fname){
        this.#fname = fname; 
    }
    setLname(lname){
        this.#lname = lname; 
    }
    getIdStudent(){
        return this.#idStudent; 
    }
    getFname(){
        return this.#fname; 
    }
    getLname(){
        return this.#lname; 
    }
  }

const objectStudent = new Student(101,'Teppo','Testi');

var id=objectStudent.getIdStudent();
var fn=objectStudent.getFname();
var ln=objectStudent.getLname();

console.log("Opiskelijanumero = "+id)
console.log("Etunimi = "+fn)
console.log("Sukunimi = "+ln)

//muutetaan etunimi
objectStudent.setFname('Matti');
fn=objectStudent.getFname();
console.log("Uusi etunimi = "+fn);