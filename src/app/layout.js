// @Mui
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
// theme
import ThemeProvider from "@/theme";
//
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Alert from "@/components/Alert";

// ----------------------------------------------------------------------------------------------------

export const metadata = {
  title: "Smart Power Services",
  description: "Welcome to SPS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Alert />
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
