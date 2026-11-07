# Inventory Inbound

The application lives in `inbound-ui/` and includes procurement, warehouse receipts, QC, supervisor review, and inbound reporting. Authentication and shared UI remain available.

## Development

```sh
npm ci --prefix inbound-ui
npm run dev
```

## Build

```sh
npm run build
```

## Vercel

Deploy with the repository root as Root Directory; the root `vercel.json` installs and builds `inbound-ui` and serves `inbound-ui/dist`. Alternatively use `inbound-ui` as Root Directory with its own `vercel.json`. Commit `inbound-ui/package-lock.json` so `npm ci` can run.
