// @flow

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
};

const main = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  posts.map((post) => console.log(post));
};

main();
