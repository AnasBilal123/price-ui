"use client";
import { Inter } from "@next/font/google";
import MainPage from "./components/page";

const inter = Inter({ subsets: ["latin"] });
import { ChakraProvider } from "@chakra-ui/react";
export default function Home() {
  return (
    <main>
      <ChakraProvider>
        <MainPage></MainPage>
      </ChakraProvider>
    </main>
  );
}
