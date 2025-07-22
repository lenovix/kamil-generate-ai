import Head from "next/head";
import ImageGenerator from "@/components/ImageGenerator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kamil Generate AI</title>
      </Head>
      <main className="min-h-screen bg-black text-white">
        <ImageGenerator />
      </main>
    </>
  );
}
