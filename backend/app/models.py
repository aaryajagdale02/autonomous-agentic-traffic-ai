from pydantic import BaseModel
from typing import List


class Signal(BaseModel):
    id: int
    vehicle_density: int  # range: 0–10
    pedestrian_density: int  # range: 0–10


class RouteInput(BaseModel):
    time_of_day: str
    signals: List[Signal]
