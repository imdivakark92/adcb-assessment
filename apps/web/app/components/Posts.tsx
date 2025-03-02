"use client";

import { usePosts } from "@ADCB/hooks";
import { Post } from "@ADCB/types";
import InfiniteScroll from "react-infinite-scroll-component";

export const Posts = () => {
  const { posts, fetchPosts, hasMore } = usePosts();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<h4 className="text-center text-gray-500">Loading...</h4>}
        endMessage={<p className="text-center text-gray-500">No more posts</p>}
      >
        {posts.map((post: Post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};
