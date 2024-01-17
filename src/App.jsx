import "./App.css";

const menuData = [
  { label: "Menu 1" },
  {
    label: "Menu 2",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
  {
    label: "Menu 3",
    submenu: [
      { label: "Sub Menu 1" },
      { label: "Sub Menu 2" },
      { label: "Sub Menu 3" },
      {
        label: "Sub Menu 4",
        submenu: [
          {
            label: "Sub sub menu 1",
          },
          { label: "Sub sub menu 2" },
        ],
      },
    ],
  },
  {
    label: "Menu 4",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
];

function App() {
  const toggleSubMenu = (e) => {
    e.stopPropagation();

    let submenu = e.target.querySelector("ul");

    if (!submenu) return;

    if (submenu.style.display === "none" || !submenu.style.display) {
      submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }
  };

  const renderSubMenu = (subMenu) => {
    return (
      <ul className="submenu">
        {subMenu.map((subItem, index) => (
          <li key={index} onClick={toggleSubMenu}>
            {subItem.label}
            {subItem.submenu && renderSubMenu(subItem.submenu)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <ul>
        {menuData.map((item, index) => (
          <li key={index} onClick={toggleSubMenu}>
            {item.label}
            {item.submenu && renderSubMenu(item.submenu)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
