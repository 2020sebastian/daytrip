import Link from 'next/link';

function Breadcrumb(slug, title) {
    return <nav aria-label="breadcrumb" class="w-full p-4 text-gray-800">
      <ol class="flex h-8 space-x-2 text-gray-800">
        <li class="flex items-center">
          <Link rel="noopener noreferrer" href="/" title="Back to homepage" class="flex items-center hover:underline">Home</Link>
        </li>
        <li class="flex items-center space-x-1">
          <span class="text-gray-800">|</span>
          <Link rel="noopener noreferrer" href={`/cities/${slug}`} class="flex items-center px-1 capitalize text-gray-400">{title}</Link>
        </li>
      </ol>
    </nav>;
}
export default Breadcrumb;