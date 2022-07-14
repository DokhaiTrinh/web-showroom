import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  metaData?: {
    name: string;
    content: string;
  };
  children: ReactNode;
};

function PageContainer({ title, metaData, children }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name={metaData?.name} content={metaData?.content} />
      </Head>
      {children}
    </div>
  );
}

export default PageContainer;
