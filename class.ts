class person{

      firsName: string;
      lastName: string;



      constructor(ssn: number, firsName: string, last: string) {
            
            this.firsName = firsName;
            this.lastName = last;
      }

      getFulani(): string{
            return `${this.firsName}${this.lastName}`;
      }
            
}


console.log(">>check class:")

