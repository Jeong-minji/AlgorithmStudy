// Lv.Easy

function sortPeople(names, heights) {
  const match = [];

  for (let i in heights) {
    match.push({ name: names[i], height: heights[i] });
  }

  return match.sort((a, b) => b.height - a.height).map((item) => item.name);
}
