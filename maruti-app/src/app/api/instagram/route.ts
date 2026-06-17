import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    // Fallback local data matching the user's /reels folder
    const mockInstagramData = {
      data: [
        {
          id: "1",
          media_type: "VIDEO",
          media_url: "/reels/reel1.mp4",
          permalink: "https://instagram.com/thankapda",
          caption: "Premium Fabric Rolls at Maruti Textile Empire",
          timestamp: new Date().toISOString()
        },
        {
          id: "2",
          media_type: "VIDEO",
          media_url: "/reels/reel2.mp4",
          permalink: "https://instagram.com/thankapda",
          caption: "Exquisite Ladies Suits collection arriving today",
          timestamp: new Date().toISOString()
        },
        {
          id: "3",
          media_type: "VIDEO",
          media_url: "/reels/reel3.mp4",
          permalink: "https://instagram.com/thankapda",
          caption: "Discover the blend of Indian and Nepali culture.",
          timestamp: new Date().toISOString()
        },
        {
          id: "4",
          media_type: "VIDEO",
          media_url: "/reels/reel4.mp4",
          permalink: "https://instagram.com/thankapda",
          caption: "Huge wholesale discounts on our latest batch",
          timestamp: new Date().toISOString()
        }
      ]
    };

    // Ensures the UI remains functional and stunning while waiting for credentials
    if (!accessToken) {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return NextResponse.json({ data: mockInstagramData.data });
    }

    // Actual Instagram Graph API Fetch
    const limit = 4; // Keeping it to 4 for a perfect grid layout
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&limit=${limit}&access_token=${accessToken}`;
    
    // Revalidate caching setup for Next.js to prevent rate limiting
    const response = await fetch(url, { next: { revalidate: 3600 } }); 
    
    if (!response.ok) {
      throw new Error('Failed to fetch from Instagram API');
    }

    const data = await response.json();
    
    // Format data and handle video thumbnails
    const formattedData = data.data.map((post: any) => ({
      id: post.id,
      media_url: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
      permalink: post.permalink,
      caption: post.caption || '',
    }));

    return NextResponse.json({ data: formattedData });
  } catch (error) {
    console.error('Instagram Proxy Error:', error);
    return NextResponse.json({ error: 'Failed to load social feed' }, { status: 500 });
  }
}
