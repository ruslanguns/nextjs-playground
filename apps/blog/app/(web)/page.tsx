import Link from 'next/link';

export default async function Index() {
  return (
    <div>
      <h1>Home</h1>

      <nav>
        <ul>
          {[
            {
              href: null,
              label: 'WEB',
            },
            {
              href: '/',
              label: 'Home',
            },
            {
              href: '/posts',
              label: 'Posts',
              children: [
                {
                  href: '/posts/1',
                  label: 'Post 1',
                },
                {
                  href: '/posts/2',
                  label: 'Post 2',
                },
              ],
            },
            {
              href: null,
              label: 'ADMIN PORTAL',
            },
            {
              href: '/dashboard',
              label: 'Dashboard',
            },
            {
              href: '/manage/posts',
              label: 'Posts',
              children: [
                {
                  href: '/manage/posts/1',
                  label: 'Post 1',
                },
                {
                  href: '/manage/posts/2',
                  label: 'Post 2',
                },
              ],
            },
            {
              href: '/manage/profile',
              label: 'Profile',
            },
            {
              href: '/manage/settings',
              label: 'Settings',
            },
          ].map(({ href, label, children }, index) => (
            <>
              {href ? (
                <>
                  <li key={index}>
                    <Link href={href}>{label}</Link>
                  </li>
                  {children && (
                    <ul>
                      {children.map(({ href, label }, index) => (
                        <li key={index}>
                          <Link href={href}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <h3>{label}</h3>
              )}
            </>
          ))}
        </ul>
      </nav>
    </div>
  );
}
