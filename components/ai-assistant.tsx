'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, Send, Loader } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function AIAssistant({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'مرحباً بك في VN Bites! كيف يمكنني مساعدتك اليوم؟ يمكنني مساعدتك في اختيار الطبق المناسب أو الإجابة على أسئلتك.',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          conversationHistory: messages,
        }),
      })

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: data.reply || 'عذراً، حدث خطأ في معالجة طلبك.',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-0 right-0 w-full sm:w-96 h-screen sm:h-[600px] sm:rounded-t-2xl bg-background border border-border shadow-2xl flex flex-col z-40">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted">
        <button
          onClick={onClose}
          className="p-2 hover:bg-background rounded-lg transition-colors"
        >
          <X size={20} />
        </button>
        <div className="flex-1 text-center">
          <h3 className="font-bold text-foreground">
            <span className="text-primary">VN</span> AI مساعد
          </h3>
          <p className="text-xs text-muted-foreground">مدعوم بـ Deep Seek</p>
        </div>
        <div className="w-10"></div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-primary text-primary-foreground rounded-bl-none'
                  : 'bg-muted text-foreground rounded-br-none'
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-end">
            <div className="bg-muted text-foreground px-4 py-2 rounded-lg rounded-br-none flex items-center gap-2">
              <Loader size={16} className="animate-spin" />
              <span className="text-sm">جاري المعالجة...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-border p-4 bg-muted/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="اكتب رسالتك..."
            disabled={loading}
            className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            dir="rtl"
          />
          <Button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground p-2 h-auto"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  )
}
