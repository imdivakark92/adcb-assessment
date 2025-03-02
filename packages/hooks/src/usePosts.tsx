import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Post } from "@ADCB/types";

export const usePosts = (): {
  posts: Post[];
  loading: boolean;
  hasMore: boolean;
  fetchPosts: () => Promise<void>;
  onRefresh: () => void;
} => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPosts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get<Post[]>(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          params: { _page: page, _limit: 10 },
        }
      );
      if (response.data.length > 0) {
        const updatedPosts = [...posts, ...response.data];
        const nextPage = page + 1;
        setPosts(updatedPosts);
        setPage(nextPage);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page]);

  const onRefresh = () => {
    if (loading) return;

    setPosts([]);
    setPage(1);
    setLoading(true);
    setHasMore(true);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    hasMore,
    fetchPosts,
    onRefresh,
  };
};
