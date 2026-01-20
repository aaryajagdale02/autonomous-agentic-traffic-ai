from typing import List
from .models import RouteInput
from .agents.traffic_agent import recommend_green_time
from .agents.pedestrian_agent import enforce_pedestrian_safety
from .agents.corridor_agent import smooth_corridor_timings
from .agents.sustainability_agent import calculate_sustainability_metrics


def optimize_route(route):
    optimized_timings = []
    total_time_saved = 0

    # Time of day factor
    time_factors = {
        "Morning": 1.2,
        "Afternoon": 1.0,
        "Evening": 1.4,
        "Night": 0.8
    }

    time_factor = time_factors.get(route.time_of_day, 1.0)

    for signal in route.signals:
        base_green_time = 30

        vehicle_weight = signal.vehicle_density * 4
        pedestrian_weight = signal.pedestrian_density * 2

        green_time = int(
            (base_green_time + vehicle_weight + pedestrian_weight) * time_factor
        )

        optimized_timings.append({
            "id": signal.id,
            "vehicle_density": signal.vehicle_density,
            "pedestrian_density": signal.pedestrian_density,
            "green_time": green_time
        })

        total_time_saved += signal.vehicle_density * 5

    metrics = {
        "total_time_saved": total_time_saved,
        "fuel_saved": round(total_time_saved * 0.15, 2),
        "co2_reduced": round(total_time_saved * 0.09, 2)
    }

    return {
        "optimized_timings": optimized_timings,
        "metrics": metrics
    }
