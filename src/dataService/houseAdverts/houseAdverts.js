import client from '../client';


export const getAdverts = async (limit, skip, orderby, type) => {
    const response = await client.get(`/?limit=${limit}&skip=${skip}&orderby=${orderby}&type=${type}`);
    return response;
}