

const BASE_URL = 'http://localhost:3000';

export const getAllClients = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/listAllclients`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }// Log the response body for debugging
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw error;
    }
}

