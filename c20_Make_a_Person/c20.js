var Person = function (firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast.split(" ");

  this.getFullName = function () {
    return fullName.join(" ");
  };
  this.getFirstName = function () {
    return fullName[0];
  };
  this.getLastName = function () {
    return fullName[1];
  };
  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast.split(" ");
  };
  this.setFirstName = function (first) {
    fullName[0] = first;
  };
  this.setLastName = function (last) {
    fullName[1] = last;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
