import { AzureChatOpenAI } from "@langchain/openai";

const AZURE_OPENAI_API_ENDPOINT = import.meta.env.VITE_AZURE_OPENAI_API_ENDPOINT;
const AZURE_OPENAI_API_KEY = import.meta.env.VITE_AZURE_OPENAI_API_KEY;
const AZURE_OPENAI_API_DEPLOYMENT_NAME = import.meta.env.VITE_AZURE_OPENAI_API_DEPLOYMENT_NAME;
const AZURE_OPENAI_API_VERSION = import.meta.env.VITE_AZURE_OPENAI_API_VERSION;

export function modelMaker(temperature: number,
     maxTokens: number, 
     timeout: number, 
     maxRetries: number) {
    return new AzureChatOpenAI({
        azureOpenAIEndpoint: AZURE_OPENAI_API_ENDPOINT,
        azureOpenAIApiKey: AZURE_OPENAI_API_KEY,
        azureOpenAIApiDeploymentName: AZURE_OPENAI_API_DEPLOYMENT_NAME,
        azureOpenAIApiVersion: AZURE_OPENAI_API_VERSION,
        temperature: temperature,
        maxTokens: maxTokens,
        timeout: timeout,
        maxRetries: maxRetries
    })
}
