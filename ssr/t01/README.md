Copy `t01/dist` into this directory.

```bash
cp -R ../t01/web/dist .
```

Run.

```bash
node ./dist/web/server/main.js
pm2-runtime ./dist/web/server/main.js
```