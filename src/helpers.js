export function getQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("q");
}

export function getSharingUrl(q) {
  const protocol = window.location.protocol + "//";
  const hostname = window.location.host;
  const query = "?q=" + encodeURI(q);
  return protocol + hostname + query;
}
