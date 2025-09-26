export function generateTimeSlots(
  startHour: number,
  endHour: number,
  interval: number = 15,
  sessionDuration: number = 15,
  bookedSessions: {time: string, duration: number}[] = [] // Now includes duration
) {
  const slots: { value: string; label: string; disabled: boolean }[] = [];
  const start = new Date();
  start.setHours(startHour, 0, 0, 0);
  const end = new Date();
  end.setHours(endHour, 0, 0, 0);
  
  const sessionMs = sessionDuration * 60 * 1000;
  
  while (start <= end) {
    const hours = start.getHours();
    const minutes = start.getMinutes();
    const value = `${hours}:${minutes.toString().padStart(2, "0")}`;
    const label = `${hours % 12 === 0 ? 12 : hours % 12}:${minutes
      .toString()
      .padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`;
    
    // Check overlap with booked sessions
    const slotStart = new Date(start.getTime());
    const slotEnd = new Date(start.getTime() + sessionMs);
    
    const disabled = bookedSessions.some((booking) => {
      const [bh, bm] = booking.time.split(":").map(Number);
      const bookedStart = new Date(start);
      bookedStart.setHours(bh, bm, 0, 0);
      const bookedEnd = new Date(bookedStart.getTime() + (booking.duration * 60 * 1000)); // Use actual booked duration
      
      // Overlap check: two time ranges overlap if start1 < end2 && start2 < end1
      return slotStart < bookedEnd && slotEnd > bookedStart;
    });
    
    slots.push({ value, label, disabled });
    start.setMinutes(start.getMinutes() + interval);
  }
  
  return slots;
}