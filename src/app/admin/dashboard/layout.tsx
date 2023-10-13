import { TokenRefreshWrapper } from "@/utils/api/refreshToken";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { Inter } from "next/font/google";
import ThemeProviderComponent from "./ThemeProvider";
import Sidebar from "@/components/shared/sidebar/Sidebar";
import Header from "@/components/shared/header/Header";

// Token refresh logic

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TokenRefreshWrapper>
      <ThemeProviderComponent>
        <div className="h-screen bg-light text-text-light dark:bg-dark dark:text-[#ADACB5] overflow-hidden">
          <div className="flex flex-row justify-start h-full">
            <Sidebar />
            <div className="flex-1 pt-8 pb-4 text-text-light dark:text-[#ADACB5] h-full overflow-auto">
              <Header />
              <main className="w-full text-text-light p-4">
                <section className="border-2 border-light-lighter dark:border-dark-lighter rounded-lg p-4  dark:text-[#ADACB5]">
                  {children}
                </section>
              </main>
            </div>
          </div>
        </div>
      </ThemeProviderComponent>
    </TokenRefreshWrapper>
  );
}
