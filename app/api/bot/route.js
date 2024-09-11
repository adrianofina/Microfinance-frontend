import axios from 'axios';

export async function POST(req, res) {
    try {
        const { message } = await req.json();

        const token = process.env.GEMINI_API_KEY
        // Make a POST request to the Gemini API using axios
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${token}`,
            {
                contents: [
                    {
                        parts: [
                            { text: message }
                        ]
                    }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        // Send the response from the Gemini API
        return new Response(JSON.stringify(response.data), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error('Error making API request:', error.response?.data || error.message);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
