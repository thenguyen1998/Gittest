function User(firstname, lastname, age) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;

      this.getname = function () {
            return `${this.firstname} ${this.lastname} ${this.age}`
      }

}
var hocsinh = new User('the', 'nguyen', '26');
var sinhvien = new User('nguyen', 'viet', '25');

console.log(hocsinh.getname());
console.log(sinhvien.getname());