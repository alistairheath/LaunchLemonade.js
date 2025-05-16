"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchLemonade = void 0;
// Imports
const axios_1 = __importDefault(require("axios"));
// Create LaunchLemonade Client
class LaunchLemonade {
    constructor(config) {
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
        this.axiosInstance = axios_1.default.create({
            baseURL: this.config.baseURL,
            headers: {
                'Authorization': `Bearer ${this.config.apiKey}`,
                'Content-Type': 'application/json',
            },
        });
    }
    // Run an Assistant
    runAssistant(input) {
        return __awaiter(this, void 0, void 0, function* () {
            // Make a POST request to the API
            const response = yield this.axiosInstance.post(`run_assistant`, {
                assistant_id: this.config.assistantID,
                conversation_id: this.config.conversationID,
                input: input,
            });
            // Return the response data
            return response.data;
        });
    }
    // Get Response
    getResponse(responseID) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if the Response ID is provided
            if (!responseID) {
                throw new Error('Assistant ID is required');
            }
            // Make a POST request to the API
            const response = yield this.axiosInstance.post(`get_run_assistant`, {
                response_id: responseID,
            });
            // Return the response data
            return response.data;
        });
    }
}
exports.LaunchLemonade = LaunchLemonade;
// Log that the module has been loaded
console.log("🍋 When life gives you lemons, make LaunchLemonade 🍋");
