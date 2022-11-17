export default function Layout({
  children,
  params: {level},
}: {
  children: React.ReactNode;
  params: {level: number};
}) {
  return (
    <>
      <h3>Level {level}</h3>
      {children}</>
  );
}
