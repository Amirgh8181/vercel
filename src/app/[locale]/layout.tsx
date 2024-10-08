import type { Viewport } from "next";
import "@/src/assets/css/globals.css";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ThemeProvider from "@/src/context/ThemeContext";
import Footer from "@/src/components/Footer";
import { NextAuthProvider } from "@/src/providers/next-auth";
import NavBar from "@/src/components/Header/Nav";
import NprogressProviders from "@/src/providers/nprogress";
import { iranYekan } from "@/src/config/font";


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: {
      template: `${t("title")} | %s`,
      default: t("title"),
    },
    description: t("description"),
    manifest: "/manifest.json",
    category: t("category"),
    authors: [{ name: t("author") }],
    creator: t("author"),
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: "/images/logo/siteTitle.png",
          href: "/images/logo/siteTitle.png",
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: "/images/logo/siteTitle.png",
          href: "/images/logo/siteTitle.png",
        },
      ]
    },
    keywords: [
      t("keywords"),
      t("keywords1"),
      t("keywords2"),
      t("keywords3"),
      t("keywords4"),
      t("keywords5"),
      t("keywords6"),
      t("keywords7"),
    ],
  }
};
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,

}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const messages = await getMessages();
  const local = await getLocale();

  return (
    <html lang={local} dir={local === "fa" ? "rtl" : "ltr"} className="scroll-smooth transition-colors duration-500">
      <body className={`${local==="fa"?iranYekan.className:"font-sans"} dark:text-white text-black`}>
        <NextAuthProvider>
          <NextIntlClientProvider messages={messages} locale={local}>
            <ThemeProvider>
              <NprogressProviders>
                <NavBar />
                <main className="xl:container min-h-screen mx-auto flex flex-col justify-center items-center space-y-[5vmax]">
                  {children}
                </main>
                <Footer />
              </NprogressProviders>
            </ThemeProvider>
          </NextIntlClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
