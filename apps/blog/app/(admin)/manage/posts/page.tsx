import Link from 'next/link';

export default function Page() {
  return (
    <>
      <p>Posts</p>
      <ul>
        {[
          {
            href: 'manage/posts/1',
            label: 'Post 1',
          },
          {
            href: '/manage/posts/2',
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
