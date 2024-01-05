import React, { Suspense } from "react";
import getSingleBlog from "../../../../lib/getSingleBlog";
import getBlogComments from "../../../../lib/getBlogComments";
import Comments from "../../../../components/Comments";
import getAllBlog from "../../../../lib/getAllBlog";

export async function generateMetadata({ params }) {
  const { id } = params;
  const blog = await getSingleBlog(id);
  return {
    title: blog.title,
    description: blog.body,
  };
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const SinglePost = async ({ params }) => {
  const { id } = params;
  const blogPromise = getSingleBlog(id);
  const commentsPromise = getBlogComments(id);

  // const [blog, comments] = await Promise.all([blogPromise, commentsPromise]);

  const blog = await blogPromise;

  return (
    <div className="mt-3">
      <h1 className="text-3xl mb-4">{blog.title}</h1>
      <p>{blog.body}</p>
      <br />
      <br />
      <hr />
      <br />
      <Suspense fallback={<Loading />}>
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
};

export default SinglePost;

export async function generateStaticParams() {
  const blogs = await getAllBlog();

  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}
