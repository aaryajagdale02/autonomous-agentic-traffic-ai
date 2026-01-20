def recommend_green_time(vehicle_density: int) -> int:
    """
    Traffic Density Agent:
    Recommends green time based on vehicle density.
    """
    if vehicle_density <= 2:
        return 30
    elif vehicle_density <= 5:
        return 60
    else:
        return 120
