# [<img src="https://b54e70e677f242c13ba041554f424763.cdn.bubble.io/cdn-cgi/image/w=32,h=32,f=auto,dpr=2,fit=contain/f1714034125423x645548960837247700/LaunchLemonade%20Logo%20%281%29.png" width="32" height="32" />](http://launchlemonade.app) LaunchLemonade.js

LaunchLemonade.js is an unofficial TypeScript API wrapper for the [LaunchLemonade API](https://docs.launchlemonade.app/api-doc). This library simplifies integration with LaunchLemonade allowing you communicate with your chatbots and lemonades with ease.

## 🍋 Features

- **Start Conversations**: Start or continue a conversation with one of your lemonades.
- **Get Responses**: Pull a response from a conversation and view its content in markdown.

## 📦 Installation & Setup

Install LaunchLemonade.js directly from GitHub using npm:

```bash
npm install github:alistairheath/LaunchLemonade.js
```

Then in your Typescript or Javascript project, import the library and create an instance with your API key.

```typescript
import { LaunchLemonade } from 'LaunchLemonade.js';
const LaunchLemonadeInstance: LaunchLemonade = await LaunchLemonade({
    apiKey: "YOUR-API-KEY-HERE", // Don't expose this in public code.
    assistantID: "YOUR-LEMONADE-ID"
  });
```
⚠️ LaunchLemonade.js has been designed to use your private API keys and therefore should never be used in public-facing code. Use Node.js environment variables for added security.

## 🛠️ API Overview

LaunchLemonade.js provides a single class (LaunchLemonade) with two exposed methods. One for submitting a message to a leomnade, and another for getting a response. You should first initialise the an Instance of LaunchLemonade. Then you can use it to send messages from the user to the Lemonade. The Lemonade (like all large language models) takes some time to generate a response, but it will will reply as soon as it can with a Response ID, you can then use this to [eriodically check for and retrievce any generate response.]

### Initialisation

**`LaunchLemonade(CONFIG)`**: Create an Instance of LaunchLemonade and connect directly to a Lemonade. Ypu can connect to an existing conversation or create a new one.
  
  ```typescript
  const LaunchLemonadeInstance: LaunchLemonade = await LaunchLemonade({
    apiKey: "YOUR-API-KEY-HERE", // Don't expose this in public code.
    assistantID: "YOUR-LEMONADE-ID",
    conversationID: "", // (OPTIONAL) Add the Conversation ID if you want to resume an existing conversation. Leave blank or ignore to create a new conversation.
    baseURL: "" // (OPTIONAL) The base URL for the API requests, uses default if ignored or blank.
  });
  ```

#### Methods

**`LaunchLemonade.runAssistant("YOUR-MESSAGE-HERE")`**: Sends a message to the Lemonade and returns for a reply from the API call.
  
  ```typescript
  const new_message: LaunchLemonadeRun = await LaunchLemonadeInstance.runAssistant("Hello Lemonade! Please help me with...");
  ```

**`LaunchLemonade.getResponse("YOUR-RESPONSE-ID-HERE")`**: The reply from the runAssistant() method is an object containing a 'Response_ID' attribute. You can periodically pass this to getResponse to see if the Lemonade has generated a response to your message. 
  
  ```typescript
  const newMessageReply: LaunchLemonadeRun = await LaunchLemonadeInstance.getResponse(new_message.response_ID);
  ```

## 💬 Feedback

If you have any questions or suggestions, feel free to open an issue or create a pull request.

## ⚠️ Legal Disclaimer

LaunchLemonade.js is not officilaly supported by LaunchLemonade and is provided free and as-is. Neither LaunchLemonade or the citizen developers of LaunchLemonade.js accept respobsibility for issues arising from the use or misuse of LaunchLemonade.js