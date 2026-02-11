module.exports = {
  apps: [{
    name: "coinbase-backend",
    script: "server.js",
    env: {
      PORT: 3001,
      ADMIN_KEY: "your-secret-admin-key-here",
      FRONTEND_ORIGIN: "https://yourdomain.com"
    },
    instances: 1,
    autorestart: true,
    max_memory_restart: "200M"
  }]
};
