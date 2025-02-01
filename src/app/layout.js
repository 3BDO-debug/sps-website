// @Mui
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
// theme
import ThemeProvider from "@/theme";
//
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ----------------------------------------------------------------------------------------------------

export const metadata = {
  title: "Just A Girl",
  description: "Welcome to just a girl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
