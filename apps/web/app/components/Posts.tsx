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
        {posts.map(({ id, title, body }: Post) => (
          <div
            key={id}
            className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8"
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-700">{body}</p>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};
