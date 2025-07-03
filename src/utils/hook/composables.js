export default function hooks() {
  const filterTitle = (str) => {
    const words = str.split("");
    if (words.length > 15) {
      return words.slice(0, 17).join("") + "...";
    } else {
      return str;
    }
  };

  return { filterTitle };
}
