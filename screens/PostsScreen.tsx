import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface Post {
  id: number;
  content: string;
  createdAt: string;
}

const STORAGE_KEY = 'my-posts-app';

const PostsScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) setPosts(JSON.parse(stored));
    } catch (e) {
      Alert.alert('Error', 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  const savePosts = async (newPosts: Post[]) => {
    setPosts(newPosts);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts));
  };

  const addPost = async () => {
    if (!input.trim()) return;
    const newPost: Post = {
      id: Date.now(),
      content: input.trim(),
      createdAt: new Date().toISOString(),
    };
    const updated = [newPost, ...posts];
    await savePosts(updated);
    setInput('');
  };

  const removePost = async (id: number) => {
    const updated = posts.filter(p => p.id !== id);
    await savePosts(updated);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>Oryx Posts</Text>
      </Animatable.View>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Animatable.View animation="fadeInUp" delay={100} duration={900}>
          <Text style={styles.title}>Share a Post</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="What's on your mind?"
              placeholderTextColor="#b0c4de"
              value={input}
              onChangeText={setInput}
              multiline
            />
            <TouchableOpacity style={styles.addBtn} onPress={addPost}>
              <Text style={styles.addBtnText}>Post</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
        {loading && <ActivityIndicator size="large" color="#00caff" style={{ marginTop: 20 }} />}
        {!loading && posts.length === 0 && (
          <Text style={styles.noResults}>No posts yet. Be the first to share!</Text>
        )}
        {posts.map(post => (
          <Animatable.View
            key={post.id}
            animation="fadeInUp"
            delay={200}
            duration={800}
            style={styles.postCard}
          >
            <Text style={styles.postContent}>{post.content}</Text>
            <Text style={styles.postDate}>{new Date(post.createdAt).toLocaleString()}</Text>
            <TouchableOpacity style={styles.deleteBtn} onPress={() => removePost(post.id)}>
              <Text style={styles.deleteBtnText}>Delete</Text>
            </TouchableOpacity>
          </Animatable.View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a0e1a',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10162a',
    borderBottomWidth: 1,
    borderBottomColor: '#1e2746',
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: '#00caff',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },
  navbarBrand: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#181a1b',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
  addBtn: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  addBtnText: {
    color: '#10162a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  postCard: {
    backgroundColor: '#10162a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#00caff',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  postContent: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  postDate: {
    color: '#b0c4de',
    fontSize: 13,
    marginBottom: 8,
  },
  deleteBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#ff4d4f',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  deleteBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  noResults: {
    color: '#b0c4de',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default PostsScreen;
