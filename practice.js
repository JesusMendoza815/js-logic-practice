function spinWords(string){
  return string.replace(/\w{5,}/g, w =>  w.split('').reverse().join(''));
}
