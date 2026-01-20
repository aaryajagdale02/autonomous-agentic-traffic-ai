from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .models import RouteInput
from .orchestrator import optimize_route

# Create FastAPI app FIRST
app = FastAPI(
    title="Autonomous Agentic AI–Based Traffic Signal Optimization System"
)

# Add CORS middleware AFTER app is created
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "Backend running"}

@app.post("/optimize")
def optimize(route: RouteInput):
    """
    Receives route details and returns optimized signal timings.
    """
    return optimize_route(route)
