export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Admin Portal</h2>
      {children}
    </div>
  );
}
