"use client";
import { AsideLayout, WrapperLayout } from "@/packages/spice/src";
import { Footer } from "@/app/_component/Footer";
import { Header } from "@/app/_component/Header";
import { AsideNav } from "@/app/_component/Nav";
import { MainInner } from "../MainInner/MainInner";
import s from "./layout.module.scss";

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
   return (
      <WrapperLayout>
         <Header></Header>
         <main>
            <MainInner>
               <AsideLayout
                  className={s.wrapper}
                  aside={{
                     chidren: <AsideNav className={s.nav} />,
                     index: 1,
                  }}
                  isSticky={true}>
                  {children}
               </AsideLayout>
            </MainInner>
         </main>
         <Footer></Footer>
      </WrapperLayout>
   );
};
