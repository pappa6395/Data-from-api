"use server"

import { DepartmentSummary, User } from '@/types/types';
import axios from 'axios';



async function fetchAndTransformUsers(): Promise<Record<string, DepartmentSummary>> {
  try {
    const response = await axios.get<{ users: User[] }>('https://dummyjson.com/users');
    const users = response.data.users;

    return users.reduce<Record<string, DepartmentSummary>>((acc, user) => {
      const department = user.department;
      if (!acc[department]) {
        acc[department] = {
          male: 0,
          female: 0,
          ageRange: '',
          hair: {},
          addressUser: {},
        };
      }

      const deptSummary = acc[department];
      deptSummary[user.gender] += 1;
      deptSummary.addressUser[`${user.firstName}${user.lastName}`] = user.address.postalCode;
      deptSummary.hair[user.hair.color] = (deptSummary.hair[user.hair.color] || 0) + 1;
      
      return acc;
    }, {});
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export default fetchAndTransformUsers;
