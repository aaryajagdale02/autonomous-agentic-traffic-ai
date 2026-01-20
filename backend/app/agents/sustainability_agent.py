def calculate_sustainability_metrics(time_saved: int):
    """
    Sustainability Agent:
    Calculates fuel and CO₂ savings.
    """
    fuel_saved = round(time_saved * 0.01, 2)
    co2_reduced = round(time_saved * 0.006, 2)

    return fuel_saved, co2_reduced
