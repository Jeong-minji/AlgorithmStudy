function reverseWords(s: string): string {
  const arr = s
    .split(" ")
    .filter((item) => !!item)
    .reverse();

  return arr.join(" ");
}
