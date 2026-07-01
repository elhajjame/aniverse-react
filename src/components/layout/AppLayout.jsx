import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

function AppLayout({ children }) {
  return (
    <body className="flex min-h-screen flex-col bg-[#020206] text-white">
      <AppHeader />
      <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
      <AppFooter />
    </body>
  );
}

export default AppLayout;
