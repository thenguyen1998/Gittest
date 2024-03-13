class persion{
      ssn: string;
      firsName: string;
      lastName: string;




      constructor(ssn: number, firsName: string, last: string) {
            this.ssn = ssn;
            this.firsName = firsName;
            this.lastName = last;
      }


      getFullnam(): string{
            return `${this.firsName}${this.lastName}`;
      }
            
}
let hello = new persion("123"; "hello", "eric");
console.log(">>check class:",hello.getFullnam())