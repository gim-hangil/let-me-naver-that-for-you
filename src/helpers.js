export function getQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("q");
}
