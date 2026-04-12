export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
}

// Derive form data type from Employee, excluding 'id'
// This ensures they stay in sync automatically
export type EmployeeFormData = Omit<Employee, 'id'>;

