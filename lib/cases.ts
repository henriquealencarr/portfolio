export interface Case {
  slug: string;
  title: string;
  client?: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  category: string;
  accentColor: string;
  videos?: string[];
  images?: string[];
}

export const cases: Case[] = [
  {
    slug: "clinic-crm",
    title: "AI Agent for Appointment Scheduling with Real-Time CRM Integration",
    client: "Clínica Julia Campos",
    tagline: "Speed to Lead. End-to-end appointment automation with zero human intervention.",
    description:
      "Speed to Lead. End-to-end AI appointment system for Clínica Julia Campos, deployed in production and used daily. AI agent \"Ana I.A.\" handles the full client lifecycle via WhatsApp: scheduling, rescheduling, cancellations, post-sale follow-up, and re-engagement with zero human intervention. Built across 7 n8n workflows with a custom MCP Server (5 tools), Redis buffering, GPT, and Postgres Chat Memory. Delivered with a React/Next.js CRM dashboard (PWA) with kanban, calendar, reports, payments, automated weekly KPI reports, and real-time sync via Supabase Realtime. All data stored in PostgreSQL.",
    stack: ["n8n", "GPT", "Supabase", "Redis", "Meta API", "Google Calendar", "Next.js"],
    highlights: [
      "Redis buffer aggregates fragmented messages before LLM call",
      "Human takeover with auto-summary sent to agent via WhatsApp",
      "Dual write to Supabase + Google Calendar on every scheduling action",
      "Real-time kanban via Supabase Realtime — no page refresh",
      "Weekly HTML report auto-sent to clinic owner every Monday",
    ],
    category: "Speed to Lead AI Agent",
    accentColor: "#7c3aed",
    videos: ["1200509787", "1200510980"],
    images: [
      "/cases/clinic-crm/Weekly_report_screen.png",
      "/cases/clinic-crm/data.png",
      "/cases/clinic-crm/fluxo_principal_pt1.png",
      "/cases/clinic-crm/fluxo_principal_pt2.png",
      "/cases/clinic-crm/fluxo_principal_pt3.png",
      "/cases/clinic-crm/fluxo_principal_pt4.png",
      "/cases/clinic-crm/fluxo_principal_pt5.png",
      "/cases/clinic-crm/Weekly_report.png",
    ],
  },
  {
    slug: "real-estate-rag",
    title: "AI Document Assistant for Real Estate Brokerage with RAG Pipeline",
    tagline: "AI-powered case management system for a real estate brokerage with a React chat frontend.",
    description:
      "AI-powered case management system for a real estate brokerage with a React chat frontend. Agents query client records, upload PDFs and photos, and summarize property contracts via RAG, including multi-turn conversations extracting specific contract clauses like closing costs and seller disclosures. Built across 3 n8n workflows: Airtable as CRM, Google Drive as document storage with per-client folders, and a RAG pipeline using Supabase pgvector and OpenAI embeddings. PDF replace logic deletes stale vectors before re-indexing. Weekly HTML report by agent delivered via Gmail every Monday.",
    stack: ["n8n", "GPT", "Supabase pgvector", "Airtable", "Google Drive", "React", "OpenAI Embeddings"],
    highlights: [
      "Folder-per-client structure in Google Drive — auto-created on first upload",
      "Duplicate file check prevents version conflicts before upload",
      "Stale vector deletion before re-embedding prevents outdated chunks in RAG",
      "Weekly HTML report with case breakdown sent to each lawyer individually",
      "React chat interface connected to n8n via webhook",
    ],
    category: "RAG System",
    accentColor: "#2563eb",
    videos: ["1205973370"],
    images: [
      "/cases/real-estate-rag/1.jpg",
      "/cases/real-estate-rag/3.jpg",
      "/cases/real-estate-rag/4.jpg",
      "/cases/real-estate-rag/10.jpg",
      "/cases/real-estate-rag/11.jpg",
      "/cases/real-estate-rag/8.png",
      "/cases/real-estate-rag/5.png",
      "/cases/real-estate-rag/9.png",
      "/cases/real-estate-rag/6.png",
      "/cases/real-estate-rag/7.png",
    ],
  },
  {
    slug: "lead-generation",
    title: "Async Lead Generation Agent with Playwright Web Scraping and Supabase",
    tagline: "AI-powered lead generation agent with a client-facing dashboard.",
    description:
      "AI-powered lead generation agent with a client-facing dashboard. User inputs business type, city, and number of leads, the system scrapes Google Maps via Apify, extracts emails from each website using a self-hosted Playwright API (FastAPI + Docker on VPS), and delivers a structured spreadsheet by email. Built across 3 n8n workflows: async polling prevents webhook timeouts on long scraping jobs, Supabase lock mechanism prevents duplicate runs, and phone numbers are sanitized before saving. Results delivered via branded HTML email with XLSX and CSV attachments. Extraction rate improved to 25%.",
    stack: ["n8n", "Apify", "Playwright", "FastAPI", "Docker", "VPS", "Supabase", "Google Sheets", "GPT"],
    highlights: [
      "Self-hosted Playwright on VPS removes cloud timeout constraints (30s kill)",
      "Email extraction rate: ~3% (HTTP fetch) → ~25% (full JS rendering)",
      "Async Apify polling: fire-and-poll, never blocks the workflow",
      "Supabase lock state prevents duplicate concurrent scraping jobs",
      "AI Agent enriches leads with LinkedIn profile search on top of email scraping",
    ],
    category: "Lead Generation",
    accentColor: "#dc2626",
    images: [
      "/cases/lead-generation/3.png",
      "/cases/lead-generation/4.png",
      "/cases/lead-generation/6.jpg",
      "/cases/lead-generation/GITHUB.png",
      "/cases/lead-generation/APIFY.png",
      "/cases/lead-generation/DOCKER.png",
      "/cases/lead-generation/1.png",
      "/cases/lead-generation/2.png",
    ],
  },
  {
    slug: "vapi-voice-agent",
    title: "VAPI Voice Agent",
    tagline: "Outbound voice AI that books appointments in real time during the call.",
    description:
      "Outbound voice agent that calls leads automatically after form submission using Twilio. The agent checks Google Calendar availability, conducts the conversation via VAPI, schedules the appointment, sends a WhatsApp confirmation via Meta API, and registers everything in Supabase — no human intervention. Triggered by a Tally form, the flow covers lead creation, call parameters, and calendar event creation in a single pipeline.",
    stack: ["VAPI", "n8n", "Google Calendar", "Meta API", "Supabase", "Tally"],
    highlights: [
      "Mid-call tool calling: agent calls n8n and waits for response before continuing",
      "Timezone handling with Intl.DateTimeFormat in America/Sao_Paulo",
      "Dual confirmation: Google Calendar event + WhatsApp sent before VAPI response",
      "Async tool execution — VAPI stays in conversation while n8n processes",
    ],
    category: "Voice AI",
    accentColor: "#059669",
    images: [
      "/cases/vapi-voice-agent/VAPI.png",
    ],
  },
  {
    slug: "multi-agent-rag",
    title: "Multi-Agent RAG Support System",
    tagline: "Orchestrator routes questions to specialist agents with isolated knowledge bases.",
    description:
      "Built a multi-agent system in n8n where a central Orchestrator Agent routes user queries to domain-specific Specialist Agents (n8n, Lovable, FlutterFlow). Each specialist queries its own dedicated Supabase Vector Store using OpenAI embeddings, enabling isolated RAG responses per knowledge domain. Ingestion pipeline uses Jina AI to crawl documentation, runs two LLM calls per page to extract relevant links and clean content before indexing, deduplicates content, and loads embeddings into the vector store automatically. PostgreSQL memory persists conversation history per session.",
    stack: ["n8n", "GPT", "Supabase pgvector", "Jina AI", "OpenAI Embeddings"],
    highlights: [
      "Separate vector table per tool — prevents cross-contamination between knowledge bases",
      "Jina AI for clean Markdown extraction from documentation without browser rendering",
      "Two Information Extractor passes per page: links first, then content cleaning",
      "Orchestrator pattern decouples routing from specialist knowledge",
      "Adding a new tool only requires a new ingestion workflow + specialist sub-agent",
    ],
    category: "Multi-Agent",
    accentColor: "#d97706",
    images: [
      "/cases/multi-agent-rag/2.png",
      "/cases/multi-agent-rag/3.png",
      "/cases/multi-agent-rag/4.png",
      "/cases/multi-agent-rag/5.png",
    ],
  },
  {
    slug: "sdr-agent",
    title: "SDR Agent -  WhatsApp Sales Automation",
    client: "Agent+",
    tagline: "AI SDR agent that qualifies leads end-to-end via WhatsApp, the Agent creates a lead in Notion CRM simultaneously.",
    description:
      "AI SDR agent that qualifies leads end-to-end via WhatsApp. Triggered by a Tally form, the agent creates a lead in Supabase and Notion CRM simultaneously, then initiates outreach with a personalized first message. Built across 5 n8n workflows: Redis buffering aggregates fragmented messages before LLM call, multi-format support handles text, image, audio, and PDF, human takeover pauses the bot with a conversation summary, scheduled follow-up with 2 parallel AI agents and Postgres Chat Memory, and a custom MCP Server with 4 Notion CRM tools for real-time lead status updates.",
    stack: ["n8n", "GPT", "Supabase", "Redis", "Notion", "Meta API", "MCP Server"],
    highlights: [
      "Redis dual-purpose: message buffering + bot deactivation state via TTL",
      "MCP Server exposes 4 Notion CRM tools to the AI agent",
      "Human takeover: LLM summarizes full conversation, sends to human via WhatsApp",
      "Dual CRM: Supabase operational + Notion visual — synced on every action",
      "Follow-up workflow with 3 branches: cold leads, qualified, unresponsive",
    ],
    category: "SDR Agent",
    accentColor: "#7c3aed",
    images: [
      "/cases/sdr-agent/NOTION2.jpg",
      "/cases/sdr-agent/tally2.png",
      "/cases/sdr-agent/1.png",
      "/cases/sdr-agent/2.png",
      "/cases/sdr-agent/desativar_agente.png",
      "/cases/sdr-agent/followup.png",
      "/cases/sdr-agent/MCP.png",
      "/cases/sdr-agent/tally.png",
    ],
  },
];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}
