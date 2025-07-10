// pages/api/chat.js
// Simple wrapper for the generate-content API to be used by the chatbot

import generateContentHandler from './generate-content';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, title, description, type } = req.body;
    
    // If no title/description/type specified, extract from message
    const processedTitle = title || message;
    const processedDescription = description || message;
    const processedType = type || 'career'; // Default type is career
    
    // Create a mock request object for the generate-content handler
    const contentReq = {
      method: 'POST',
      body: {
        title: processedTitle,
        description: processedDescription,
        type: processedType
      }
    };
    
    // Create a mock response object to capture the generate-content response
    const contentRes = {
      status: function(code) {
        this.statusCode = code;
        return this;
      },
      json: function(data) {
        this.data = data;
        return this;
      }
    };
    
    // Call the generate-content handler
    await generateContentHandler(contentReq, contentRes);
    
    // Return the results to the chatbot
    if (contentRes.statusCode === 200) {
      return res.status(200).json({
        content: contentRes.data.content,
        fullContent: contentRes.data.fullContent
      });
    } else {
      return res.status(contentRes.statusCode).json({ error: contentRes.data.error });
    }
  } catch (error) {
    console.error('Error in chat API:', error);
    return res.status(500).json({ error: 'Failed to process message', details: error.message });
  }
}