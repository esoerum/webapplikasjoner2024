import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono()

app.use("/*", cors());


app.get('/dad-jokes', async (c) => {
  return await c.json(dadJokes)
})


app.post('/add', async (c) => {
  const body = await c.req.json();
  let foundId = dadJokes.find((joke) => joke.id === body.id);
  if (foundId) {
    return c.json({ message: "Joke already exists" });
  }
  else return c.json({ message: "Joke added"}, 201);
});

const dadJokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    answer: "Because they make up everything!"
  },
  {
    id: 2,
    title: "What do you call a fake noodle?",
    answer: "An impasta!"
  },
  {
    id: 3,
    title: "Why did the scarecrow win an award?",
    answer: "He was outstanding in his field!"
  },
  {
    id: 4,
    title: "How do you organize a space party?",
    answer: "You planet!"
  },
  {
    id: 5,
    title: "What do you call a bear with no teeth?",
    answer: "A gummy bear!"
  }
];

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
