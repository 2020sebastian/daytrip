import Link from 'next/link';

function Breadcrumb(slug, title) {
    return <nav aria-label="breadcrumb" className="w-full p-4 text-gray-800">
      <ol className="flex h-8 space-x-2 text-gray-800">
        <li className="flex items-center">
          <Link rel="noopener noreferrer" href="/" title="Back to homepage" className="flex items-center hover:underline">Home</Link>
        </li>
        <li className="flex items-center space-x-1">
          <span className="text-gray-800">|</span>
          <Link rel="noopener noreferrer" href={`/cities/${slug}`} className="flex items-center px-1 capitalize text-gray-400">{title}</Link>
        </li>
      </ol>
    </nav>;
}
export default Breadcrumb;