
import { Injectable } from '@angular/core';
import { GoogleGenAI } from "@google/genai";

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env['API_KEY'] || '' });
  }

  async summarize(content: string): Promise<string> {
    if (!content) return "No content to summarize.";

    try {
      // Truncate content to avoid token limits if it's huge, though flash handles a lot.
      // Basic stripping of HTML tags for cleaner prompt context
      const textContent = content.replace(/<[^>]*>?/gm, '').slice(0, 10000);

      const prompt = `You are a helpful reading assistant. Summarize the following article text into 3 distinct, concise bullet points. Capture the main essence. Do not add markdown bolding, just plain text.
      
      Article Text:
      ${textContent}`;

      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      return response.text || "Could not generate summary.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Error generating summary. Please check your API key or try again later.";
    }
  }
}
