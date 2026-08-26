---
An AI-powered CMDB assistant that answers IT infrastructure questions using RAG with adaptive context routing, zero-shot query classification, and vector similarity search. Built with FastAPI, Groq LLM, Qdrant vector database, and BART-Large-MNLI classifier.
---

## Architecture

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Backend API | FastAPI + uvicorn | REST endpoints with async request handling |
| LLM Engine | Groq API (gpt-oss-20b) | Response generation with reasoning |
| Vector Store | Qdrant | Embedding-based semantic search |
| Embeddings | sentence-transformers (all-MiniLM-L6-v2) | Text-to-vector conversion |
| Classification | transformers (BART-Large-MNLI) | Zero-shot query categorization |
| Frontend | Tailwind CSS + vanilla JS | Dark-themed glassmorphism UI |

---

## Key Features

### Adaptive Context Routing

The system intelligently routes queries based on content patterns:

- **IP Address Detection**: Regex pattern `\b(?:\d{1,3}\.){3}\d{1,3}\b` triggers direct server lookup against local dataset with deterministic LLM temperature (0.2)
- **RAG Pipeline**: Non-IP queries undergo conversation memory optimization → cosine similarity search in Qdrant with temperature 0.4

### Zero-Shot Query Classification

Five domain categories automatically detected (confidence threshold >= 0.6):

| Category | Examples |
|----------|---------|
| CI dependency & impact | "What depends on server X?" |
| Network device application | "Impact of switch failure" |
| Server configuration | "RAM specs for production DB" |
| Application & CI details | "Version of Apache running" |
| System problem & RCA | "Root cause of outage" |

### Query Optimization

Conversational memory enrichment before RAG search via LLM reasoning — queries are rephrased to include context from previous messages for more accurate retrieval.

### Enterprise Security

- CSRF protection via Origin header validation
- CORS whitelist for frontend origins
- Rate limiting via slowapi
- Segregated logging (info, warning, critical, debug)

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | System health status |
| GET | `/health/models` | Model loading status |
| GET | `/api/config` | Frontend configuration |
| POST | `/chat` | Process user message with history |
| POST | `/mcp-query` | MCP/Agent integration endpoint |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | Python 3.11+ |
| Backend | FastAPI, uvicorn |
| LLM | Groq API |
| Vector DB | Qdrant |
| Embeddings | sentence-transformers |
| Classification | transformers (BART-Large-MNLI) |
| Validation | pydantic |
| Logging | python-json-logger |
| Rate Limiting | slowapi |
| Frontend | Tailwind CSS |

---

## Impact

Deployed production system handling CI dependency queries and incident tracking. Glassmorphism dark-themed UI with pinned prompts for rapid IT operations workflows. Transforms IT operations by providing instant, accurate answers about infrastructure dependencies — reducing mean time to resolution and enabling proactive impact analysis.
