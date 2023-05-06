import Link from 'next/link';

export default function Page() {
  return (
    <>
      <p>Posts</p>
      <ul>
        {[
          {
            href: 'posts/1',
            label: 'Post 1',
          },
          {
            href: '/posts/2',
            label: 'Post 2',
          },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
