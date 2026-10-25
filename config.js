import openAI from "openai";
import { createClient } from "@supabase/supabase-js";

if(!process.env.OPENAI_API_KEY) throw new Error()