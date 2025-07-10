// Modified /pages/api/generate-content.js with brief results and learn more option
import { Groq } from 'groq-sdk';

// Initialize Groq with your API key
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Simple in-memory cache
const cache = new Map();

// Create a cache key from request parameters
const createCacheKey = (type, title, description, brief = false) => {
  return `content:${type}:${title}:${description}:${brief}`.toLowerCase().replace(/\s+/g, '-');
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { title, description, type, brief = true } = req.body;
    
    // Create a unique cache key including whether it's brief or full
    const cacheKey = createCacheKey(type, title, description, brief);
    
    // Check cache first
    if (cache.has(cacheKey)) {
      const cachedData = cache.get(cacheKey);
      // Check if cache is still valid (24 hours)
      if (Date.now() - cachedData.timestamp < 24 * 60 * 60 * 1000) {
        return res.status(200).json({
          content: cachedData.content,
          fullContent: cachedData.fullContent,
          fromCache: true
        });
      }
      // Remove expired cache
      cache.delete(cacheKey);
    }

    // Different prompts based on whether brief or full content is requested
    const briefPrompt = `Generate a brief summary about ${title} (${type}) as a single cohesive paragraph.
    The paragraph should be approximately 10 lines in length when displayed on a typical screen.
    Focus on the most essential points about: overview, key benefits, and career prospects.
    Base this on the following description: ${description}
    Provide ONLY plain text without any HTML formatting or tags. Keep it concise but informative.`;
    
    const fullPrompt = `Generate detailed information about ${title} (${type}).
    Include:
    1. Overview and significance
    2. Key features and benefits
    3. Career prospects
    4. Important considerations
    
    Base this on the following description: ${description}
    Provide ONLY plain text without any HTML formatting or tags. Format your response in clear paragraphs with natural breaks between sections.`;

    // Get brief content first
    const briefCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a career guidance expert. Provide concise, accurate information about educational and career options in a single coherent paragraph of plain text. Write approximately 150-200 words that would display as about 10 lines on a typical screen."
        },
        {
          role: "user",
          content: briefPrompt
        }
      ],
      model: "llama3-70b-8192",
      temperature: 0.7,
      max_tokens: 500,
    });

    // Get full content if this is the first request for this topic
    const fullCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a career guidance expert. Provide detailed, accurate information about educational and career options in plain text format only."
        },
        {
          role: "user",
          content: fullPrompt
        }
      ],
      model: "llama3-70b-8192",
      temperature: 0.7,
      max_tokens: 1500,
    });

    const briefContent = briefCompletion.choices[0].message.content;
    const fullContent = fullCompletion.choices[0].message.content;

    // Store both brief and full content in cache
    cache.set(cacheKey, {
      content: briefContent,
      fullContent: fullContent,
      timestamp: Date.now()
    });

    // Clean up old cache entries occasionally
    if (Math.random() < 0.1) { // 10% chance on each request
      const now = Date.now();
      for (const [key, value] of cache.entries()) {
        if (now - value.timestamp > 24 * 60 * 60 * 1000) {
          cache.delete(key);
        }
      }
    }

    // Return appropriate content based on what was requested
    return res.status(200).json({ 
      content: briefContent,
      fullContent: fullContent
    });
  } catch (error) {
    console.error('Error generating content:', error);
    return res.status(500).json({ error: 'Failed to generate content', details: error.message });
  }
}