import { Employee, EmployeeFormData } from '../types/employee';

// In-memory storage
class EmployeeService {
  private employees: Employee[] = [];
  private nextId: number = 1;

  constructor(initialEmployees: Employee[] = []) {
    this.employees = [...initialEmployees];
    // Set nextId based on existing employees
    if (initialEmployees.length > 0) {
      this.nextId = Math.max(...initialEmployees.map(emp => emp.id)) + 1;
    }
  }

  // Get all employees
  getAll(): Employee[] {
    return [...this.employees];
  }

  // Get employee by ID
  getById(id: number): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  // Create new employee
  create(data: EmployeeFormData): Employee {
    const newEmployee: Employee = {
      ...data,
      id: this.nextId++
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  // Update existing employee
  update(id: number, data: EmployeeFormData): Employee | null {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index === -1) return null;

    const updatedEmployee: Employee = {
      ...data,
      id
    };
    this.employees[index] = updatedEmployee;
    return updatedEmployee;
  }

  // Delete employee
  delete(id: number): boolean {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index === -1) return false;

    this.employees.splice(index, 1);
    return true;
  }

  // Get count
  getCount(): number {
    return this.employees.length;
  }

  // Get unique departments
  getDepartments(): string[] {
    const departments = new Set(this.employees.map(emp => emp.department));
    return Array.from(departments).sort();
  }
}

export default EmployeeService;

