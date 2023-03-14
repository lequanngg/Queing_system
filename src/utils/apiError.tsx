import { AxiosError } from "axios";


export interface IError {
    error?: string;
    Error?: string;
}

export const handleServiceError = (error: AxiosError) : IError => {
    let massage = '';
    if (error.response && error.response.data)
        if (!massage) massage = 'Có gì đó không đúng';
        return {error: massage};
};

export const instanceOfDataError = (object: any): object is IError => {
    return 'error' in object || 'Error' in object;
};