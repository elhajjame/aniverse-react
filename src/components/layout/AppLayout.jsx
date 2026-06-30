import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

function AppLayout({ children }) {
  return (
    <>
      <AppHeader />
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {children}
      </main>
      <AppFooter />
    </>
  );
}

export default AppLayout;
