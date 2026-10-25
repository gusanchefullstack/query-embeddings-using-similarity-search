import { supabase, openai } from "./config.js";

async function main() {
  const query = "Global armed conflict in the first part of 20th century";

  const embedding = await getEmbedding(query);
  const result = await getSimilarities(embedding);
  console.log(result);
}

async function getEmbedding(text) {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text,
  });
  return embedding.data[0].embedding;
}

async function getSimilarities(embedding) {
  const similarities = await supabase.rpc("match_documents", {
    query_embedding: embedding, // Pass the embedding you want to compare
    match_threshold: 0.70, // Choose an appropriate threshold for your data
    match_count: 1, // Choose the number of matches
  });
  return similarities.data;
}

main();
