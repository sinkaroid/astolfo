declare module 'astolfo' {
    import { IncomingHttpHeaders, RequestOptions } from "http";

    /**
    * random lewd astolfo
    * @returns {Promise<string>} promise
    */
    function trap(): Promise<String>;

    /**
    * Creates a GET request
    * @returns {Promise<{ method: "GET", reqOptions: RequestOptions, raw: string, body: any,status: number, headers: IncomingHttpHeaders }>} A Promise containing response
    * @private Internal Function
    */
    function get(url: string, options?: RequestOptions): Promise<{ method: "GET", reqOptions: RequestOptions, raw: string, body: any,status: number, headers: IncomingHttpHeaders }>;

    export default Object.assign(trap, {get})
}