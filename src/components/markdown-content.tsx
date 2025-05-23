import React from "react"
import { MDXProvider } from "@mdx-js/react"

type MarkdownContentProps = {
  children: React.ReactNode
}

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mb-6 mt-8" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mb-3 mt-6" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-bold mb-2 mt-4" {...props} />,
  h5: (props: any) => <h5 className="text-lg font-bold mb-2 mt-4" {...props} />,
  h6: (props: any) => <h6 className="text-base font-bold mb-2 mt-4" {...props} />,
  p: (props: any) => <p className="mb-4 text-lg leading-relaxed" {...props} />,
  a: (props: any) => (
    <a 
      className="text-blue-600 hover:text-blue-800 underline" 
      target={props.href.startsWith('http') ? '_blank' : undefined}
      rel={props.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props} 
    />
  ),
  ul: (props: any) => <ul className="list-disc pl-8 mb-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-8 mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic py-2 my-4" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-gray-50" {...props} />,
  th: (props: any) => (
    <th 
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" 
      {...props} 
    />
  ),
  tbody: (props: any) => <tbody className="bg-white divide-y divide-gray-200" {...props} />,
  tr: (props: any) => <tr className="hover:bg-gray-50" {...props} />,
  td: (props: any) => <td className="px-6 py-4 whitespace-nowrap text-sm" {...props} />,
  img: (props: any) => (
    <img 
      className="mx-auto my-8 max-w-full rounded-lg shadow-md" 
      alt={props.alt || ''} 
      {...props} 
    />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-4" {...props} />
  ),
  code: (props: any) => {
    // Check if this is an inline code block or a multiline code block
    const isInline = typeof props.children === 'string';
    return isInline 
      ? <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props} />
      : <code className="block" {...props} />;
  },
  hr: (props: any) => <hr className="my-8 border-t border-gray-300" {...props} />,
};

export const MarkdownContent: React.FC<MarkdownContentProps> = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </MDXProvider>
  );
};

export default MarkdownContent; 