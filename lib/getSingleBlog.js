export default async function getSingleBlog(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!result.ok) {
    throw new Error("There was an error fetching blog");
  }

  return result.json();
}
