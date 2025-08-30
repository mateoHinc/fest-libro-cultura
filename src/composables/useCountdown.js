import { ref, onMounted, onBeforeUnmount } from "vue";

export function useCountdown(targetRef) {
  const parts = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  let timer = null;
  const tick = () => {
    const now = new Date();
    let diff = Math.max(0, targetRef.value - now);
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= d * 24 * 60 * 60 * 1000;
    const h = Math.floor(diff / (1000 * 60 * 60));
    diff -= h * 60 * 60 * 1000;
    const m = Math.floor(diff / (1000 * 60));
    diff -= m * 60 * 1000;
    const s = Math.floor(diff / 1000);
    parts.value = { days: d, hours: h, minutes: m, seconds: s };
  };
  onMounted(() => {
    tick();
    timer = setInterval(tick, 1000);
  });
  onBeforeUnmount(() => {
    if (timer) clearInterval(timer);
  });
  return parts;
}
