export const formatHeaderName = (path) => {
  const formattedName = path
    .split("/")
    .pop() // Mengambil bagian terakhir setelah pemisahan "/"
    .replace(/_/g, " ") // Mengganti underscore dengan spasi
    .toLowerCase() // Mengonversi menjadi huruf kecil
    .split(" ")
    .map((word) => capitalizeFirstLetter(word)) // Mengonversi huruf pertama ke huruf besar
    .join(" ");

  return formattedName;
};

const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
