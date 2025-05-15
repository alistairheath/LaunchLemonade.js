export type LaunchLemonadeConfig = {
    apiKey: string;
    assistantID: string;
    conversationID?: string | undefined;
    baseURL?: string | undefined;
};
export type LaunchLemonadeRun = {
    Conversation_ID: string;
    Response_ID: string;
    Error: string;
    Error_Reason: string;
};
export type LaunchLemonadeResponse = {
    Response: string;
};
export declare class LaunchLemonade {
    private config;
    private axiosInstance;
    constructor(config: LaunchLemonadeConfig);
    runAssistant(input: string): Promise<LaunchLemonadeRun>;
    getResponse(responseID: string): Promise<LaunchLemonadeResponse>;
}
