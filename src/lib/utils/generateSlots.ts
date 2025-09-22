// utils/generateSlots.ts
export function generateTimeSlots(
  startHour: number,
  endHour: number,
  interval: number = 15,
  sessionDuration: number = 15
) {
  const slots: { value: string; label: string }[] = [];
  const start = new Date();
  start.setHours(startHour, 0, 0, 0);

  const end = new Date();
  end.setHours(endHour, 0, 0, 0);

  while (start <= end) {
    const hours = start.getHours();
    const minutes = start.getMinutes();

    // 24h format for value (so it matches your JSON stored "time")
    const value = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;

    // 12h format for label
    const label = `${hours % 12 === 0 ? 12 : hours % 12}:${
      minutes.toString().padStart(2, "0")
    } ${hours < 12 ? "AM" : "PM"}`;

    slots.push({ value, label });

    start.setMinutes(start.getMinutes() + interval);
  }

  return slots;
}
