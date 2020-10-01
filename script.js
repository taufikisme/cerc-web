console.log("Moh. Taufik Afandi");
const challenge1 = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/8/comments")
    .then((json) => {
      // console.log("Jumlah comments : " + Object.keys(res.data).length);
      console.log(json.data);
    });
};

const challenge2 = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts?userId=8")
    .then((res) => {
      console.log(res.data);
    });
};
