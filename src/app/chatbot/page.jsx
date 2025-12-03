"use client";

import React, { useState } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: "Hi! I am your campus assistant. Ask me to translate or summarize text, or any question about courses and students.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg = {
      id: Date.now(),
      from: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001"}/api/chat/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: trimmed }),
        }
      );

      if (!res.ok) {
        throw new Error("Chat request failed");
      }

      const data = await res.json();
      const botMsg = {
        id: Date.now() + 1,
        from: "bot",
        text: data.reply || "Sorry, I could not understand that.",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          from: "bot",
          text: "There was an error talking to the chatbot service.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-background/95 backdrop-blur">
        <Header />
      </div>

      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-4 flex-1">
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-emerald-500" />
                Campus Chatbot
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 border rounded-md p-3 overflow-y-auto space-y-3 bg-muted/40">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${
                      m.from === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm flex items-start gap-2 ${
                        m.from === "user"
                          ? "bg-emerald-500 text-white"
                          : "bg-card text-foreground border"
                      }`}
                    >
                      {m.from === "user" ? (
                        <User className="w-4 h-4 mt-0.5" />
                      ) : (
                        <Bot className="w-4 h-4 mt-0.5 text-emerald-500" />
                      )}
                      <span>{m.text}</span>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg px-3 py-2 text-sm bg-card text-foreground border flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                )}
              </div>

              <form
                onSubmit={handleSend}
                className="mt-4 flex items-center gap-2"
              >
                <Input
                  placeholder="Ask the assistant to translate, summarize, or answer a question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChatPage;
