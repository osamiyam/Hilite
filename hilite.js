
function transform(txt) {
  var myre = /\b(auto|break|case|char|const|continue|default|do|dougle|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeod|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/g
  var macro = /(?<=\n|^)(#include|#define|#if|#ifdef|#else|#undef|#error|#pragma)\b/g
  var keyfunc = /\b(main|printf|sqrt)\b/g
  txt = txt.replace(/>/g, "&gt;")
  txt = txt.replace(/</g, "&lt;")
  txt = txt.replace(myre, '<span class="reserved">$1</span>')
  txt = txt.replace(macro, '<span class="cmacro">$1</span>') 
  txt = txt.replace(keyfunc, '<span class="keyfunc">$1</span>') 
  return txt
}
