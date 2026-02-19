export interface User {
    id: number;
    name: string;
    email: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
    };
}

export const UserService = {
    getUser: async (userId: string): Promise<User> => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data: User = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching user ${userId}:`, error);
            throw error;
        }
    }
};
