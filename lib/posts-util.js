import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (fileName) => {
  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    isFeatured: data.isFeatured ? data.isFeatured : true,
    content: content,
  };

  return postData;
};

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((item) => {
    return getPostData(item);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export default function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured === true);

  return featuredPosts;
}
