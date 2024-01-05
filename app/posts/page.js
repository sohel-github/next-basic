const { default: Link } = require("next/link");

const posts = [
  {
    id: 1,
    title: "Post 1",
    body: "Post 1 body",
  },
  {
    id: 2,
    title: "Post 2",
    body: "Post 2 body",
  },
];

const Posts = () => {
  return (
    <div className="mt-10">
      <h1>All Posts</h1>
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`posts/single/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
