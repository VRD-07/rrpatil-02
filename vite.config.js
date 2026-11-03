import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import chatHandler from './api/chat.js';

function apiChatPlugin() {
  return {
    name: 'api-chat-plugin',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res, next) => {
        if (req.method !== 'POST') {
          return next();
        }
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', async () => {
          try {
            const parsedBody = body ? JSON.parse(body) : {};
            const mockReq = { method: 'POST', body: parsedBody };
            const mockRes = {
              statusCode: 200,
              status(code) {
                this.statusCode = code;
                return this;
              },
              json(payload) {
                res.statusCode = this.statusCode;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(payload));
              },
            };
            await chatHandler(mockReq, mockRes);
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err?.message || 'Server error' }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (env.OPENROUTER_API_KEY) {
    process.env.OPENROUTER_API_KEY = env.OPENROUTER_API_KEY;
  }
  if (env.VITE_OPENROUTER_API_KEY) {
    process.env.VITE_OPENROUTER_API_KEY = env.VITE_OPENROUTER_API_KEY;
  }

  return {
    plugins: [react(), tailwindcss(), apiChatPlugin()],
  };
});
