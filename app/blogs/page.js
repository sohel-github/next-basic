import getAllBlog from "../../lib/getAllBlog";
import Link from "next/link";

const Blogs = async () => {
  const datas = await getAllBlog();
  return (
    <div>
      <h1 className="text-3xl mb-3 mt-2">All Blogs</h1>

      <ul>
        {datas.map((data) => (
          <li key={data.id}>
            <Link href={`blogs/single/${data.id}`}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
