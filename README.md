# Project HELIA Website

The official Project HELIA Website!
You can find it deployed to [projecthelia.org](https://projecthelia.org).

## How to run the website locally

You need [Node.js](https://nodejs.org) 20.9 or newer. Check with `node -v`.

1. Clone the repo and go into it:

```bash
git clone https://github.com/ProjectHelia/ProjectHelia.github.io.git
cd ProjectHelia.github.io
```

2. Switch to the branch the site lives on:

```bash
git checkout First-iteration-of-website
```

3. Go into the website folder — everything below has to be run from here, not
   from the repo root:

```bash
cd project-helia-website
```

4. Install the dependencies. Only needed the first time, and again whenever
   someone adds a new package:

```bash
npm install
```

5. Start the dev server:

```bash
npm run dev
```

6. Open the address it prints, usually <http://localhost:3000>. Edit a file and
   the page updates on its own — no need to restart.

Press `Ctrl+C` in the terminal to stop the server.

### If something goes wrong

| Message                                 | Fix                                                                                     |
| --------------------------------------- | --------------------------------------------------------------------------------------- |
| `Missing script: "dev"`                 | You're in the repo root. `cd project-helia-website` first.                              |
| `next: command not found`               | Step 4 was skipped. Run `npm install`.                                                  |
| Port 3000 already in use                | Another dev server is running. Use the port Next prints instead, or stop the other one. |
| Anything weird after switching branches | `rm -rf .next` to clear the build cache, then `npm run dev` again.                      |

## Where things live

Developer notes — the codebase map, where to change colours, copy, and the
like — are in [`project-helia-website/README.md`](project-helia-website/README.md).
