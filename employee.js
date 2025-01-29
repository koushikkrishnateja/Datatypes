document.addEventListener("DOMContentLoaded", function () {
    const employees = [
        {
            empId: 1,
            empName: 'Amit Sharma',
            empCompany: 'TCS',
            empSalary: '₹75,000',
            empAddress: {
                empCity: 'Mumbai',
                area: 'Andheri'
            }
        },
        {
            empId: 2,
            empName: 'Priya Verma',
            empCompany: 'Infosys',
            empSalary: '₹80,000',
            empAddress: {
                empCity: 'Bengaluru',
                area: 'Whitefield'
            }
        },
        {
            empId: 3,
            empName: 'Rajesh Kumar',
            empCompany: 'Wipro',
            empSalary: '₹85,000',
            empAddress: {
                empCity: 'Hyderabad',
                area: 'Madhapur'
            }
        }
    ];

    function createEmployeeTable() {
        const table = document.createElement('table');
        table.style.borderCollapse = 'collapse';
        table.style.width = '100%';
        table.style.marginTop = '20px';

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Employee ID', 'Name', 'Company', 'Salary', 'City', 'Area'];

        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            th.style.padding = '10px';
            th.style.border = '1px solid black';
            th.style.backgroundColor = '#f2f2f2';
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        employees.forEach(employee => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td style="padding: 10px; border: 1px solid black;">${employee.empId}</td>
                <td style="padding: 10px; border: 1px solid black;">${employee.empName}</td>
                <td style="padding: 10px; border: 1px solid black;">${employee.empCompany}</td>
                <td style="padding: 10px; border: 1px solid black;">${employee.empSalary}</td>
                <td style="padding: 10px; border: 1px solid black;">${employee.empAddress.empCity}</td>
                <td style="padding: 10px; border: 1px solid black;">${employee.empAddress.area}</td>
            `;

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        document.body.appendChild(table);
    }

    createEmployeeTable();
});
