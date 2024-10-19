# Temporal Hello World Example

## Requirements

Node v 18.x
Temporal 0.13.2
Temporal Server 1.24.1
Temporal UI 2.28.0

## Commands

Terminal 1: Start Temporal Dev Server

```
temporal server start-dev
npm run start.watch
```

Terminal 2: Start Workflow

```
npm run workflow
```

Terminal 3: Order Food (While workflow task is running)

```
npm run order-food
```
