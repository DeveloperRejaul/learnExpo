import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useUpdatePostMutation,
} from "./services/postApi.js";

export default function RtkQueryScreen() {
  //   const response = useGetAllPostQuery();
  //   const response = useGetPostByIdQuery(2);
  //   const response = useGetPostByLimitQuery(5);
  //   const [deletePost, response] = useDeletePostMutation();
  //   const [createPost, response] = useCreatePostMutation();
  const [updatePost, response] = useUpdatePostMutation();

  //   const { data, isError, isFetching, isLoading, isSuccess, status } = response;

  console.log(response);

  return (
    <ScrollView>
      {/* <Text>{isSuccess && data.body}</Text> */}

      {/* {data?.map((ele) => (
        <Text>{ele.title}</Text>
      ))} */}

      {/* For DELETE  */}
      <Text style={styles.center} onPress={() => deletePost(2)}>
        Delete
      </Text>

      {/* CREATE POST */}
      <Text
        style={styles.center}
        onPress={() =>
          createPost({
            title: "This is New New Title",
            body: "This is New New Body",
            userId: 1,
          })
        }
      >
        Create Post
      </Text>

      {/* UPDATE POST */}
      <Text
        style={styles.center}
        onPress={() =>
          updatePost({
            id: 1,
            title: "This is Update Post Title",
            body: "This is Update Post Body",
            userId: 1,
          })
        }
      >
        Update Post
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: { marginTop: 50 },
});
