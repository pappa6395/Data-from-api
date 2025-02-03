
export interface User {
    firstName: string;
    lastName: string;
    gender: 'male' | 'female';
    age: number;
    hair: { color: string };
    address: { postalCode: string };
    department: string;
  }
  
  export interface DepartmentSummary {
    male: number;
    female: number;
    ageRange: string;
    hair: Record<string, number>;
    addressUser: Record<string, string>;
  }