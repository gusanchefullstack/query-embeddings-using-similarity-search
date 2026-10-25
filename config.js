import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

if (!process.env.OPENAI_API_KEY)
  throw new Error("OPENAI_API_KEY missing or invalid");

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

if (!process.env.SUPABASE_API_KEY)
  throw new Error("SUPABASE_API_KEY missing or invalid");
if (!process.env.SUPABASE_URL)
  throw new Error("SUPABASE_URL missing or invalid");

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY,
);
