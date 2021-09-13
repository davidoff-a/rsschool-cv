function revrot(str, sz) {
  let temp = "";
  let chunks = [];
  let start = 0;
  let end = sz;
  if (sz <= 0 || !str || sz > str.length) {
    return "";
  }
  console.log(str[end]);
  while (start <= str.length) {
    console.log(str[end]);
    if (str[end]) {
      console.log(start);
      
      chunks.push(str.slice(start, end));
      start = end;
      end += sz;
    }
  }
  console.log(chunks);
}

revrot("733049910872815764", 5);