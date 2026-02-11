# Deployment Guide

## 1. Upload to VPS
```bash
scp -r backend/ user@your-vps-ip:/opt/coinbase-backend
```

## 2. Install dependencies
```bash
cd /opt/coinbase-backend
npm install
```

## 3. Configure environment
```bash
cp .env.example .env
nano .env   # Set ADMIN_KEY and FRONTEND_ORIGIN
```

## 4. Start with PM2
```bash
npm install -g pm2
pm2 start ecosystem.config.js
pm2 save
pm2 startup   # Follow the printed command to enable auto-start on reboot
```

## 5. Setup Nginx
```bash
sudo cp nginx.conf /etc/nginx/sites-available/coinbase-backend
sudo ln -s /etc/nginx/sites-available/coinbase-backend /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 6. SSL with Let's Encrypt
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 7. Connect frontend
In browser console or your frontend config, set:
```js
localStorage.setItem("backend_url", "https://yourdomain.com")
```

## Admin access
```bash
curl -H "x-admin-key: your-secret-admin-key" https://yourdomain.com/api/sessions
```
