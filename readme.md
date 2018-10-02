# Next.Js from Headless Wordpress Statically deployed on NOW

best i could acheive until now. links from client side are not working. performance almost perfect.

## Run on Dev

```bash
npm install
npm run dev
```

## Deploy to NOw

```bash
set NODE_ENV=production
npm run build
npm run export

cd out
now -e NODE_ENV="production"
```
