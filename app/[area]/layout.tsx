type Props = {
  children: React.ReactNode;
  params: { area: string };
};

const Layout: React.FC<Props> = ({ children, params: { area } }) => (
  <>
    <h2>Area {area.toUpperCase()}</h2>
    {children}
  </>
);

export default Layout;
