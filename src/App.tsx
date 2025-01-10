import React, { useEffect, useState } from "react";
import { HumanMessage, SystemMessage, AIMessageChunk } from '@langchain/core/messages'
import {modelMaker} from '../AzureCredentials.ts'
type Props = {};

export default function App({}: Props) {
  const [messages, setMessages] = useState(new AIMessageChunk(''));
  const [model] = useState(modelMaker(0.5, 100, 10000, 3));

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = [
        new SystemMessage("Translate the following from English into Italian"),
        new HumanMessage("hi!"),
      ];
    
      let result = await model.invoke(messages)
      setMessages(result)
    };

    fetchMessages();
  }, []);
  return <div>
    {messages.content.toString()}
  </div>;
}

