// pages/api/chat.js (or chat.ts for TypeScript)
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { message } = req.body;
  
      // Make request to your Django backend
      const response = await fetch('http://localhost:8000/api/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      const data = await response.json();
      res.status(200).json({ response: data.response });
    } else {
      res.status(405).json({ message: 'Only POST requests allowed' });
    }
  }
  