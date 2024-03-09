import { Client,Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65eb37827913cd792d88');
 
export const account = new Account(client);   

export default client;