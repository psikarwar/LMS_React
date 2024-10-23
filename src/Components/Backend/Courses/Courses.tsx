import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Tab from "../Tab/Tab";
import { iconhorizontal } from "../../images";

const Courses: React.FC = () => {
  return (
    <div className="p-4 font-sans ml-58">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h1 className="text-lg md:text-2xl font-semibold">
          NCERT Solutions for Class 12 Chemistry
        </h1>
        <img
          src={iconhorizontal}
          alt="menu"
          className="mt-2 md:mt-0 w-6 h-6 md:w-8 md:h-8"
        />
      </header>

      {/* Tab Navigation */}
      <nav className="flex flex-wrap gap-4 my-4 border-b border-gray-300">
        <NavLink
          to="commission"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? "active" : ""}`
          }
        >
          <Tab title="Commission" />
        </NavLink>
        <NavLink
          to="reviewpage"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? "active" : ""}`
          }
        >
          <Tab title="Reviews" />
        </NavLink>
        <NavLink
          to="customer"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? "active" : ""}`
          }
        >
          <Tab title="Customer" />
        </NavLink>
        <NavLink
          to="chapter"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? "active" : ""}`
          }
        >
          <Tab title="Chapters" />
        </NavLink>
        <NavLink
          to="promotion"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? "active" : ""}`
          }
        >
          <Tab title="Promotion" />
        </NavLink>
        <NavLink
          to="detail"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? "active" : ""}`
          }
        >
          <Tab title="Detail" />
        </NavLink>
        <NavLink
          to="setting"
          className={({ isActive }: { isActive: boolean }) =>
            `tab ${isActive ? "active" : ""}`
          }
        >
          <Tab title="Settings" />
        </NavLink>
      </nav>
      {/* Content will be rendered by React Router */}
      <section className="mt-4">
        {/* React Router will render content based on active route */}
        <Outlet />
      </section>
    </div>
  );
};

export default Courses;
