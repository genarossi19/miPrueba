import { ScrollView, Text, Image } from "react-native";
import React from "react";

const MyImages = () => {
  return (
    <ScrollView>
      <Text>Hola facu </Text>
      <Image
        source={require("../assets/MyImage.jpg")}
        style={{ width: 200, height: 200 }}
      />

      <Image
        source={{
          uri: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG19.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHMTkuanBlZyIsImlhdCI6MTcyNDg1OTkzMywiZXhwIjoxNzI1NDY0NzMzfQ.CPGIfffrpM3l8JNbF5di7hjJbpKCjdxRh9Bsaq7naAM&t=2024-08-28T15%3A45%3A33.782Z",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG4.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHNC5qcGVnIiwiaWF0IjoxNzI0ODYwMDE4LCJleHAiOjE3MjU0NjQ4MTh9.M7rdqUc_nXe1e3y_bvQtEPh9UI4dk4dEDBGszMaAqg4&t=2024-08-28T15%3A46%3A59.004Z",
        }}
        style={{ width: 200, height: 200 }}
      />
    </ScrollView>
  );
};

export default MyImages;
