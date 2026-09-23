import type { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CartSheet from "./CartSheet";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartSheet />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-24 text-primary-foreground">
        <p className="eyebrow opacity-80">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-xl text-base opacity-90">{text}</p>
      </div>
    </section>
  );
}
