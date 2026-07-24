export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "DEEPSEEK_API_KEY is not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const systemMessage = {
      role: "system",
      content: `أنت مساعد ذكي لموقع VN BITES، متخصص في البان كيك والحلويات الفاخرة. 
      
معلومات عن المنيو:
- بان كيك (شوكولاتة/كراميل): 50 جنيه
- أوريو بان كيك: 60 جنيه
- لوتس بان كيك: 65 جنيه
- ميكس بان كيك: 70 جنيه
- أيس كوفي: 40 جنيه
- أيس شوكولاتة: 45 جنيه
- ميني بان كيك بوكس (20 قطعة): 80 جنيه
- بوكس العيلة (40 قطعة): 135 جنيه
- بوكس الصحاب (60 قطعة): 190 جنيه

العروض:
- عرض السعادة: أوريو بان كيك + أيس كوفي = 90 جنيه
- عرض اللمة: 2 بوكس عيلة + 2 لتر = 280 جنيه
- عرض روق بالك: ميكس بان كيك + أيس شوكولاتة = 105 جنيه

الفروع: القليوبية والطور - جنوب سيناء

أجب بالعربية بأسلوب ودود ومهني. ساعد العملاء في الطلبات والاستفسارات.`,
    };

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [systemMessage, ...messages],
        stream: true,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[v0] DeepSeek API error:", errorText);
      return new Response(
        JSON.stringify({ error: "Failed to connect to AI service" }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    // Return the streaming response
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("[v0] Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
