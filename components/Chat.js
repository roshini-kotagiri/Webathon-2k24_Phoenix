
import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [options, setOptions] = useState([]);

  const addMessage = (text, sender) => {
    setMessages([...messages, { text, sender }]);
  };

  const addOptions = (options) => {
    setOptions(options);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;
    
    addMessage(input, 'user');
    
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: input,
        max_tokens: 50,
        temperature: 0.7,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY_HERE',
        },
      });

      const aiResponse = response.data.choices[0].text.trim();
      const optionsStartIndex = aiResponse.lastIndexOf('Options:');
      if (optionsStartIndex !== -1) {
        const textResponse = aiResponse.substring(0, optionsStartIndex).trim();
        addMessage(textResponse, 'ai');
        const optionsResponse = aiResponse.substring(optionsStartIndex).replace('Options:', '').trim();
        addOptions(optionsResponse.split(','));
      } else {
        addMessage(aiResponse, 'ai');
        setOptions([]);
      }
    } catch (error) {
      console.error('Error:', error);
      addMessage('Sorry, an error occurred. Please try again later.', 'ai');
      setOptions([]);
    }

    setInput('');
  };

  const handleOptionClick = (option) => {
    setInput(option);
    handleSubmit({ preventDefault: () => {} });
  };

  return (
    <div>
        <h1 className='text-center display-1 text-info'>Enter your query here</h1>
      <div style={{ height: '300px', overflowY: 'scroll' }} className='bg-light'>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
            <span>{message.sender === 'user' ? 'You: ' : 'Bot: '}</span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      {options.length > 0 && (
        <div>
          <p>Choose an option:</p>
          {options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;