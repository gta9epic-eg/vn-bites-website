import { generateText } from 'ai'
import { deepseek } from '@ai-sdk/deepseek'

export async function POST(request: Request) {
  try {
    const { message, conversationHistory } = await request.json()

    const systemPrompt = `أنت مساعد ذكي لمطعم VN BITES الفيتنامي المتخصص في البان كيك والمشروبات الفاخرة. 
    
معلومات عن المتجر:
- نقدم أشهى البان كيك بمذاق لا يُنسى
- المنتجات الرئيسية: بان كيك شوكولاتة/كراميل (50 جنيه), أوريو بان كيك (60 جنيه), لوتس بان كيك (65 جنيه), ميكس بان كيك (70 جنيه)
- العروض الخاصة: عرض السعادة (90 جنيه), عرض اللمة (280 جنيه), عرض روّق بالك (90 جنيه)
- نستخدم مكونات طازجة وفاخرة
- التوصيل متاح للقليوبية والطور
- الإعداد سريع وجودة عالية

تفاعل مودود وودود مع العملاء بالعربية. ساعد العملاء في:
- اختيار الطبق المناسب حسب تفضيلاتهم
- معرفة الأسعار والعروض
- الإجابة على الأسئلة عن المكونات والجودة
- تقديم الاقتراحات المخصصة

كن مختصراً في الردود وودياً وسهل الفهم.`

    const conversationMessages = conversationHistory.map((msg: any) => ({
      role: msg.type === 'user' ? 'user' : 'assistant',
      content: msg.content,
    }))

    const { text } = await generateText({
      model: deepseek('deepseek-chat'),
      system: systemPrompt,
      messages: [
        ...conversationMessages,
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      maxTokens: 500,
    })

    return Response.json({ reply: text })
  } catch (error) {
    console.error('Chat API Error:', error)
    return Response.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
