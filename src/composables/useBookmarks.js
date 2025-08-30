import { ref } from "vue";

export function useBookmarks() {
  const bookmarked = ref(
    JSON.parse(localStorage.getItem("bookmarked") || "[]")
  );
  function persist() {
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked.value));
  }
  function toggleBookmark(id) {
    const set = new Set(bookmarked.value);
    set.has(id) ? set.delete(id) : set.add(id);
    bookmarked.value = [...set];
    persist();
  }
  function isBookmarked(id) {
    return bookmarked.value.includes(id);
  }
  return { bookmarked, toggleBookmark, isBookmarked };
}
