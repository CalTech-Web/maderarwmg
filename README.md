# Madera RWMG

Next.js, TypeScript, Tailwind CSS
Deployed on Vercel: https://maderarwmg.vercel.app
Production: https://maderarwmg.com
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/maderarwmg/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/maderarwmg/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/maderarwmg/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/maderarwmg/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
