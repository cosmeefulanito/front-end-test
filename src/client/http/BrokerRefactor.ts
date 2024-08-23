import {Broker} from "../../model/Broker";


const HOST = process.env.HOST_API || '';

interface BrokerData<T> {
    data: T;
}

const createHeaders = (token: string): Headers => {
    const headers = new Headers();
    headers.append("X-Api-Key", token);
    headers.append("Content-Type", "application/json");
    return headers;
}

const handleResponse = async <T>(response: Response): Promise<BrokerData<T> | null> => {
    if(!response.ok){
        return null;
    }
    return response.json() as Promise<BrokerData<T>>;
}

export const getBrokerByIdentifier = (identifier: string, token: string) => {
    const url = `${HOST}/brokers/${identifier}?keyName=identifier`;
    return fetch(url, {
        headers: createHeaders(token)
    }).then(handleResponse);
}

export const getBrokerById = (id: string, token: string) => {
    const url = `${HOST}/brokers/${id}`;
    return fetch(url, {
        headers: createHeaders(token)
    }).then(handleResponse);
}

export const getAllBrokers = (token: string) => {
    const url = `${HOST}/brokers?isActive=1`;
    return fetch(url, {
        headers: createHeaders(token),
    }).then(handleResponse);
}

export const storeBroker = (broker: Broker, token: string) => {
    const url = `${HOST}/brokers`;
    return fetch(url, {
        headers: createHeaders(token),
        method: 'POST',
        body: JSON.stringify({
            identifier: broker.identifier,
            name: broker.name,
            description: broker.description
        })
    }).then(handleResponse);
}

export const updateBroker = (id: string, {identifier, name, description} : {identifier?: string, name?: string, description?: string}, token: string): Promise<BrokerData<Broker> | null> => {
    const url = `${HOST}/brokers/${id}`;
    return fetch(url, {
        headers: createHeaders(token),
        method: 'PATCH',
        body: JSON.stringify({ identifier,name,description })
    }).then(response => handleResponse<Broker>(response));
}
