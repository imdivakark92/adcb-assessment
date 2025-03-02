import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react";
import axios from "axios";
import { usePosts } from "./usePosts"; // Adjust the import path as necessary

jest.mock("axios");
const mockedAxiosGet = axios.get as jest.Mock;

describe("usePosts Hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch and append posts correctly", async () => {
    const mockPosts = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      body: "Lorem ipsum",
    }));

    mockedAxiosGet.mockResolvedValueOnce({ data: mockPosts });

    const { result } = renderHook(() => usePosts());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.posts).toEqual(mockPosts);
    expect(result.current.hasMore).toBe(true);
  });

  it("should handle pagination and set hasMore to false when no more posts", async () => {
    const mockPostsPage1 = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      body: "Lorem ipsum",
    }));

    const mockPostsPage2 = Array.from({ length: 5 }, (_, i) => ({
      id: i + 11,
      title: `Post ${i + 11}`,
      body: "Lorem ipsum",
    }));

    mockedAxiosGet
      .mockResolvedValueOnce({ data: mockPostsPage1 })
      .mockResolvedValueOnce({ data: mockPostsPage2 })
      .mockResolvedValueOnce({ data: [] });

    const { result } = renderHook(() => usePosts());

    await waitFor(() => {
      expect(result.current.posts).toEqual(mockPostsPage1);
    });

    expect(result.current.hasMore).toBe(true);

    act(() => {
      result.current.fetchPosts();
    });

    await waitFor(() => {
      expect(result.current.posts).toEqual([
        ...mockPostsPage1,
        ...mockPostsPage2,
      ]);
    });

    expect(result.current.hasMore).toBe(true);

    act(() => {
      result.current.fetchPosts();
    });

    await waitFor(() => {
      expect(result.current.posts).toEqual([
        ...mockPostsPage1,
        ...mockPostsPage2,
      ]);
      expect(result.current.hasMore).toBe(false);
    });
  });

  it("should handle errors during fetch", async () => {
    mockedAxiosGet.mockRejectedValueOnce(new Error("Network Error"));

    const { result } = renderHook(() => usePosts());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.hasMore).toBe(true);
  });
});
