import React from "react";
import styled from "styled-components";
import { getAllPostIds, getPostData } from "@/lib/posts";

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

// 정적 경로 생성
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

// 페이지 컴포넌트
export default async function PostPage({ params }) {
  const { id } = params;
  const postData = await getPostData(id);

  return (
    <Container>
      <Content>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Content>
    </Container>
  );
}