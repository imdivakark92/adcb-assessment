import React, { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Post } from "@ADCB/types";
import { usePosts } from "@ADCB/hooks";

export default function Posts() {
  const { posts, loading, fetchPosts, onRefresh } = usePosts();

  const renderItem = useCallback(
    ({ item }: { item: Post }) => (
      <LinearGradient
        colors={["#3b82f6", "#9333ea", "#ec4899"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBorder}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      </LinearGradient>
    ),
    []
  );

  const keyExtractor = useCallback((item: Post) => item.id.toString(), []);

  const renderFooter = useCallback(() => {
    if (!loading) return null;
    return <ActivityIndicator style={styles.loader} />;
  }, [loading]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={fetchPosts}
        ListFooterComponent={renderFooter}
        removeClippedSubviews={true}
        contentContainerStyle={styles.listContainer}
        onEndReachedThreshold={0.5}
        refreshing={loading}
        onRefresh={onRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    flexGrow: 1,
    gap: 10,
  },
  gradientBorder: {
    position: "relative",
    padding: 2,
    borderRadius: 12,
    marginBottom: 8,
  },
  innerContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  loader: {
    marginVertical: 16,
  },
});
