import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Header from "../components/site-header";
import Footer from "../components/footer";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main className="py-12 min-h-[56vh] flex items-center">
        <div className="container mx-auto flex h-full justify-center items-center">
          <div className="flex flex-col items-center justify-center text-center gap-4 text-[hsl(240,100%,57%)]">
            <h1 className="text-9xl font-extrabold">404</h1>
            <h1 className="text-4xl">Page not found</h1>
            <div className="flex flex-col items-center gap-2">
              <p className="">
                Sorry! We couldn’t find the page you were looking for.
              </p>
              <Link to="/" className="inline-flex items-center gap-1 underline underline-offset-4 font-bold">
                <span>Back to home</span>
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Coset | Not found</title>;
