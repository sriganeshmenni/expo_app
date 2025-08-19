import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Post = {
  text: string;
  // file?: any; // File upload not implemented for mobile
};

export default function CommunityScreen() {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');

  const handlePost = () => {
    if (!postText.trim()) {
      setError('Please enter your thoughts.');
      return;
    }
    setPosts([{ text: postText.trim() }, ...posts]);
    setPostText('');
    setError('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView style={{ backgroundColor: '#0a0e1a' }} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}><Text style={{ color: '#00caff' }}>Community</Text></Text>
        </View>
        <View style={styles.createPostSection}>
          <Text style={styles.createPostTitle}>Create a Post</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Share Your Thoughts</Text>
            <TextInput
              style={styles.textarea}
              placeholder="Share your thoughts here..."
              placeholderTextColor="#b0c4de"
              value={postText}
              onChangeText={setPostText}
              multiline
              numberOfLines={4}
            />
            {/* File upload not implemented for mobile */}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TouchableOpacity style={styles.postBtn} onPress={handlePost}>
              <Text style={styles.postBtnText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.postsSection}>
          <Text style={styles.postsTitle}>Recent Posts</Text>
          {posts.length === 0 ? (
            <Text style={styles.noPosts}>No posts yet. Be the first to share your thoughts!</Text>
          ) : (
            <FlatList
              data={posts}
              keyExtractor={(_, idx) => idx.toString()}
              renderItem={({ item }) => (
                <View style={styles.postCard}>
                  <Text style={styles.postText}>{item.text}</Text>
                </View>
              )}
              scrollEnabled={false}
            />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#0a0e1a',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  createPostSection: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  createPostTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00caff',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#10162a',
    borderRadius: 16,
    padding: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1e2746',
    shadowColor: '#00caff',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  cardTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  textarea: {
    backgroundColor: '#181a1b',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  postBtn: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 4,
  },
  postBtnText: {
    color: '#10162a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: '#dc3545',
    marginBottom: 6,
    textAlign: 'center',
  },
  postsSection: {
    marginHorizontal: 16,
    marginTop: 10,
  },
  postsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00caff',
    marginBottom: 10,
    textAlign: 'center',
  },
  noPosts: {
    color: '#b0c4de',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  postCard: {
    backgroundColor: '#181a1b',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1e2746',
  },
  postText: {
    color: '#fff',
    fontSize: 15,
  },
});
