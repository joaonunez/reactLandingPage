export function NavItem() {
  let navItems = [
    {
      id: 1,
      title: "Inicio",
    },
    {
      id: 2,
      title: "Productos",
    },
    {
      id: 3,
      title: "Sobre Nosotros",
    },
    {
      id: 4,
      title: "Contacto",
    },
  ];
  return (
    <>
      {navItems.map((item) => (
        <li className="nav-item" key={item.id+item.title}>
          <a
            className="nav-link active"
            aria-current="page"
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        </li>
      ))}
    </>
  );
}
