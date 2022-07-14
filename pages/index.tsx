import type { NextPage } from "next";
import PageContainer from "../components/containers/PageContainer";

const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  return (
    <PageContainer title="Home">
      <h2>Home page</h2>
    </PageContainer>
  );
};

export default Home;
