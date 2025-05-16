// Imports
import axios, { AxiosInstance } from 'axios';

// Define Types
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

// Create LaunchLemonade Client
export class LaunchLemonade {
  private config: LaunchLemonadeConfig;
  private axiosInstance: AxiosInstance;

  constructor(config: LaunchLemonadeConfig) {
    this.config = config;

    // Check if an API Key has been provided.
    if (!this.config.apiKey) {
      throw new Error('API key is required');
    }

    // Check if a base URL has been provided.
    if (!this.config.baseURL || this.config.baseURL === '') {
      this.config.baseURL = 'https://sip.launchlemonade.app/version-live/api/1.1/wf/';
    }

    // Check if the Assistant ID is provided
    if (!this.config.assistantID) {
      throw new Error('Assistant ID is required');
    }

    // If Now Conversation ID is provided, set it to an empty string.
    if (!this.config.conversationID) {
      this.config.conversationID = "";
    }

    // Create an Axios instance with the base URL and headers
    this.axiosInstance = axios.create({
      baseURL: this.config.baseURL,
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  // Run an Assistant
  public async runAssistant(
    input: string,
  ): Promise<LaunchLemonadeRun> {
    // Make a POST request to the API
    const response = await this.axiosInstance.post(
      `run_assistant`,
      {
        assistant_id: this.config.assistantID,
        conversation_id: this.config.conversationID,
        input: input,
      },
    );

    // Return the response data
    return response.data
  }

  // Get Response
  public async getResponse(
    responseID: string,
  ): Promise<LaunchLemonadeResponse>{
    // Check if the Response ID is provided
    if (!responseID) {
      throw new Error('Assistant ID is required');
    }

    // Make a POST request to the API
    const response = await this.axiosInstance.post(
      `get_run_assistant`,
      {
        response_id: responseID,
      },
    );

    // Return the response data
    return response.data;
  }
}

// Log that the module has been loaded
console.log("🍋 When life gives you lemons, make LaunchLemonade 🍋");