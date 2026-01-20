def smooth_corridor_timings(timings):
    """
    Corridor Coordination Agent:
    Smooths green signal timings across a route to reduce stop-and-go traffic.
    """
    if not timings:
        return timings

    average = sum(timings) / len(timings)
    smoothed = []

    for t in timings:
        smoothed.append(int((t + average) / 2))

    return smoothed
