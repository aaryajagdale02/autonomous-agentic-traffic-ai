def enforce_pedestrian_safety(green_time: int, pedestrian_density: int) -> int:
    """
    Pedestrian Safety Agent:
    Enforces minimum green time for safe crossings.
    """
    if pedestrian_density >= 6 and green_time < 60:
        return 60
    return green_time
