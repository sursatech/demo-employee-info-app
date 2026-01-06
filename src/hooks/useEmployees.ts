import { useState, useCallback } from 'react';
import { Employee, EmployeeFormData } from '../types/employee';
import EmployeeService from '../services/employeeService';

// Initial mock data
const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    position: 'Senior Software Engineer',
    department: 'Engineering'
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    position: 'Product Manager',
    department: 'Product'
  }
];

export const useEmployees = () => {
  const [service] = useState(() => new EmployeeService(INITIAL_EMPLOYEES));
  const [employees, setEmployees] = useState<Employee[]>(service.getAll());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Refresh employees from service
  const refreshEmployees = useCallback(() => {
    setEmployees(service.getAll());
  }, [service]);

  // Create employee
  const createEmployee = useCallback(async (data: EmployeeFormData): Promise<Employee> => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 500));
      const newEmployee = service.create(data);
      refreshEmployees();
      return newEmployee;
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create employee';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [service, refreshEmployees]);

  // Update employee
  const updateEmployee = useCallback(async (id: number, data: EmployeeFormData): Promise<Employee> => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 500));
      const updatedEmployee = service.update(id, data);
      
      if (!updatedEmployee) {
        throw new Error('Employee not found');
      }
      
      refreshEmployees();
      return updatedEmployee;
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update employee';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [service, refreshEmployees]);

  // Delete employee
  const deleteEmployee = useCallback(async (id: number): Promise<void> => {
    setError(null);
    
    try {
      const success = service.delete(id);
      if (!success) {
        throw new Error('Employee not found');
      }
      refreshEmployees();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete employee';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, [service, refreshEmployees]);

  // Get employee by ID
  const getEmployeeById = useCallback((id: number): Employee | undefined => {
    return service.getById(id);
  }, [service]);

  // Get stats
  const getStats = useCallback(() => {
    return {
      count: service.getCount(),
      departments: service.getDepartments()
    };
  }, [service]);

  return {
    employees,
    loading,
    error,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
    getStats,
    clearError: () => setError(null)
  };
};

