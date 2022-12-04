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
  const aDisassembled = hangul.disassemble(a);
  const bDisassembled = hangul.disassemble(b);
  for (let i = 0; i < bDisassembled.length; i++) {
    if (aDisassembled[i] !== bDisassembled[i]) {
      return false;
    }
  }
  return true;
}
