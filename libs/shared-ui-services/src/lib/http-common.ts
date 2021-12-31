import axios, {AxiosRequestHeaders, AxiosInstance} from "axios";

/**
 * Abstracting Axios Request Headers and AxiosInstance from rest of project.  If at some point in the future it is 
 * required to remove Axios it will be relatively easy to swap out.
 */
export type CalculatorHttpHeader = AxiosRequestHeaders;
export type CalculatorHttpConnection = AxiosInstance;

/**
 * 
 * @param baseURL 
 * @param headers 
 * @returns 
 */
export const createHTTPConnection = ( baseURL: string, headers: CalculatorHttpHeader  ): CalculatorHttpConnection => {
    return axios.create({
        baseURL,
        headers
    });
}
