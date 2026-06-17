import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    // Using the provided OpenRouter API Key from environment variables
    const apiKey = process.env.OPENROUTER_API_KEY;
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'http://localhost:3000', // Required by OpenRouter
        'X-Title': 'Maruti Textile Empire', // Required by OpenRouter
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3-haiku', // Using Claude via OpenRouter for high speed and quality
        messages: [
          {
            role: "system",
            content: "You are an expert AI Fabric Stylist for Maruti Textile Empire.\n\nCRITICAL BUSINESS INFORMATION TO MEMORIZE:\n- Location: Main Market, Kathmandu, Nepal (Delivery available across Nepal & India)\n- Owner: Aditya Kumar Sablaka\n- What we sell: Fabric rolls, ladies unstitched suits, Indian and Nepali culture textiles, silk, velvet, and all kinds of bespoke textiles.\n- Contact & Ordering: WhatsApp number +977 9811222021\n- Special Offers: We are offering a 15% wholesale discount right now!\n\nIf a user asks 'where are you located', you MUST tell them Kathmandu, Nepal. If they ask about buying, direct them to our WhatsApp. Be highly professional, elegant, concise, and luxurious in your tone."
          },
          ...messages
        ],
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch from OpenRouter API');
    }

    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
