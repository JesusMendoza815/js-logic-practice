/*
ENCAPSULATION (Concentrate data and functions hiding internal details)
*/

class Company {
    constructor(name) {
        let employees = [];
        this.name = name;

        this.getEmployees = function () {
            console.log(employees);
        };

        this.addEmployees = function (employee) {
            employees.push(employee);
        };
    }
}

company1 = new Company('Company 1');
company2 = new Company('CCompany 2');

company1.addEmployees('Pedro');
company1.addEmployees('María');
company2.addEmployees('SANDRA');

company1.getEmployees();
company2.getEmployees();