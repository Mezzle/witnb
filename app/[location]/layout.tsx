export default function Layout({
  children,
  params: {location},
}: {
  children: React.ReactNode;
  params: { location: string };
}) {
  return (
    <>
      <h2>Area {location.toUpperCase()}</h2>
      {children}
    </>
  );
}
