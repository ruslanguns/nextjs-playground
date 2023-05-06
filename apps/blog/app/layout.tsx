import './global.css';

export const metadata = {
  title: 'NextJS My Blog',
  description: 'Demo blog using NextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
