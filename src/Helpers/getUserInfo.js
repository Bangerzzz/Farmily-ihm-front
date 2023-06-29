import axios from 'axios';

const getUserInfo = async () => {
    const token = localStorage.getItem('token');
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    try {
        const response = await axios.get('http://localhost:3001/api/v1/users/me', { headers });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default getUserInfo;