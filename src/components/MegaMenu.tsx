import React, { useState } from 'react';

interface MenuItem {
  label: string;
  items?: {
    title: string;
    links: { label: string; href: string }[];
  }[];
}

const menuData: MenuItem[] = [
  {
    label: 'Products',
    items: [
      {
        title: 'Development',
        links: [
          { label: 'Web Development', href: '#' },
          { label: 'Mobile Apps', href: '#' },
          { label: 'Desktop Software', href: '#' }
        ]
      },
      {
        title: 'Design',
        links: [
          { label: 'UI Design', href: '#' },
          { label: 'UX Design', href: '#' },
          { label: 'Graphic Design', href: '#' }
        ]
      }
    ]
  },
  {
    label: 'Solutions',
    items: [
      {
        title: 'Industries',
        links: [
          { label: 'Healthcare', href: '#' },
          { label: 'Finance', href: '#' },
          { label: 'Education', href: '#' }
        ]
      },
      {
        title: 'Services',
        links: [
          { label: 'Consulting', href: '#' },
          { label: 'Training', href: '#' },
          { label: 'Support', href: '#' }
        ]
      }
    ]
  },
  {
    label: 'Resources',
    items: [
      {
        title: 'Learn',
        links: [
          { label: 'Documentation', href: '#' },
          { label: 'Tutorials', href: '#' },
          { label: 'Blog', href: '#' }
        ]
      },
      {
        title: 'Community',
        links: [
          { label: 'Forums', href: '#' },
          { label: 'Discord', href: '#' },
          { label: 'Events', href: '#' }
        ]
      }
    ]
  }
];

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="mega-menu">
      <div className="menu-container">
        {menuData.map((item) => (
          <div
            key={item.label}
            className="menu-item"
            onMouseEnter={() => setActiveMenu(item.label)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="menu-button">{item.label}</button>
            {activeMenu === item.label && item.items && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {item.items.map((section) => (
                    <div key={section.title} className="menu-section">
                      <h3 className="section-title">{section.title}</h3>
                      <ul className="section-links">
                        {section.links.map((link) => (
                          <li key={link.label}>
                            <a href={link.href}>{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .mega-menu {
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .menu-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 1rem;
          padding: 1rem;
        }

        .menu-item {
          position: relative;
        }

        .menu-button {
          background: none;
          border: none;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          color: #333;
        }

        .menu-button:hover {
          color: #3245ff;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          padding: 1.5rem;
          min-width: 600px;
        }

        .dropdown-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .menu-section {
          min-width: 200px;
        }

        .section-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.75rem 0;
          color: #111827;
        }

        .section-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .section-links li {
          margin-bottom: 0.5rem;
        }

        .section-links a {
          color: #4b5563;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .section-links a:hover {
          color: #3245ff;
        }

        @media (max-width: 768px) {
          .menu-container {
            flex-direction: column;
          }

          .dropdown-menu {
            position: static;
            transform: none;
            min-width: auto;
            width: 100%;
            box-shadow: none;
            padding: 1rem 0;
          }

          .dropdown-content {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
}