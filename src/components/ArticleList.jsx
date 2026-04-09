// ArticleList.jsx - Renders a list of Article components from posts prop
// Connected to: App (parent), Article (child)

import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;