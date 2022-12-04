import hangul from "hangul-js";

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

export function startsWithKorSupport(a, b) {
  if (!a.startsWith(b.slice(0, -1))) {
    return false;
  }
  const aDisassembled = hangul.disassemble(a, false);
  const bDisassembled = hangul.disassemble(b, false);
  for (let i = 0; i < bDisassembled.length; i++) {
    for (let d = 0; d < aDisassembled[i].length; d++) {
      if (aDisassembled[i][d] !== bDisassembled[i][d]) {
        return false;
      }
    }
  }
  return true;
}
