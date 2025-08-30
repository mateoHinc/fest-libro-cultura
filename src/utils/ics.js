function pad(n) {
  return String(n).padStart(2, "0");
}
function toICSDate(d) {
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(
    d.getUTCDate()
  )}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
}
export function nextDateTime(dayLabel, timeHHmm) {
  const dayMap = {
    "Vie 5 Sep": "2025-09-05",
    "Sáb 6 Sep": "2025-09-06",
    "Dom 7 Sep": "2025-09-07",
    "Lun 8 Sep": "2025-09-08",
    "Dom 14 Sep": "2025-09-14",
  };
  const base = dayMap[dayLabel] || "2025-09-05";
  const [hh, mm] = timeHHmm.split(":").map(Number);
  return new Date(
    `${base}T${String(hh).padStart(2, "0")}:${String(mm).padStart(
      2,
      "0"
    )}:00-05:00`
  );
}
export function downloadICSForEvent(ev) {
  const start = nextDateTime(ev.day, ev.time);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//FestivalLibroMed//ES\nBEGIN:VEVENT\nUID:${
    ev.id
  }-${Date.now()}@festival-libro-med\nDTSTAMP:${toICSDate(
    new Date()
  )}\nDTSTART:${toICSDate(start)}\nDTEND:${toICSDate(end)}\nSUMMARY:${
    ev.title
  }\nLOCATION:${ev.venue}\nDESCRIPTION:${
    ev.description
  }\nEND:VEVENT\nEND:VCALENDAR`;
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `festival-${ev.id}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}
