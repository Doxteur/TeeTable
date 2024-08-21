import React from "react";

import { FaDatabase } from "react-icons/fa";
//GrCatalog
import { AiFillDiff } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
function Sidebar() {

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  }

  return (
    <>
    {/* ========== HEADER ========== */}
    <header className="lg:ms-[260px] lg:hidden fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 bg-white border-b border-gray-200 dark:bg-primary dark:border-neutral-700">
      <div className="flex justify-between xl:grid xl:grid-cols-3 basis-full items-center w-full py-2.5 px-2 sm:px-5">
        {/* Logo & Sidebar Toggle */}
        <div className="flex items-center gap-x-3">
          {/* Logo */}
          <a
            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="../../pro/analytics/index.html"
            aria-label="Preline"
          >
            <svg
              className="w-7 h-auto"
              width={36}
              height={36}
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.0835 3.23358C9.88316 3.23358 3.23548 9.8771 3.23548 18.0723V35.5832H0.583496V18.0723C0.583496 8.41337 8.41851 0.583252 18.0835 0.583252C27.7485 0.583252 35.5835 8.41337 35.5835 18.0723C35.5835 27.7312 27.7485 35.5614 18.0835 35.5614H16.7357V32.911H18.0835C26.2838 32.911 32.9315 26.2675 32.9315 18.0723C32.9315 9.8771 26.2838 3.23358 18.0835 3.23358Z"
                className="fill-indigo-600 dark:fill-indigo-500"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.0833 8.62162C12.8852 8.62162 8.62666 12.9245 8.62666 18.2879V35.5833H5.97468V18.2879C5.97468 11.5105 11.3713 5.97129 18.0833 5.97129C24.7954 5.97129 30.192 11.5105 30.192 18.2879C30.192 25.0653 24.7954 30.6045 18.0833 30.6045H16.7355V27.9542H18.0833C23.2815 27.9542 27.54 23.6513 27.54 18.2879C27.54 12.9245 23.2815 8.62162 18.0833 8.62162Z"
                className="fill-indigo-600 dark:fill-indigo-500"
                fill="currentColor"
              />
              <path
                d="M24.8225 18.1012C24.8225 21.8208 21.8053 24.8361 18.0833 24.8361C14.3614 24.8361 11.3442 21.8208 11.3442 18.1012C11.3442 14.3815 14.3614 11.3662 18.0833 11.3662C21.8053 11.3662 24.8225 14.3815 24.8225 18.1012Z"
                className="fill-indigo-600 dark:fill-indigo-500"
                fill="currentColor"
              />
            </svg>
          </a>
          {/* End Logo */}
          <div className="lg:hidden">
            {/* Sidebar Toggle */}
            <button
              type="button"
              className="w-7 h-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-pro-sidebar"
              aria-label="Toggle navigation"
              data-hs-overlay="#hs-pro-sidebar"
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
              </svg>
            </button>
            {/* End Sidebar Toggle */}
          </div>
        </div>
        {/* End Logo & Sidebar Toggle */}
        <div className="lg:hidden h-[38px] flex justify-end items-center gap-x-2">
          {/* Account Dropdown */}
          <div className="hs-dropdown inline-flex   [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative text-start">
            <button
              id="hs-pro-dnad"
              type="button"
              className="inline-flex shrink-0 items-center gap-x-3 text-start rounded-full focus:outline-none"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <img
                className="shrink-0 size-[38px] rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Avatar"
              />
            </button>
            {/* Account Dropdown */}
            <div
              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-pro-dnad"
            >
              <div className="p-1 border-b border-gray-200 dark:border-neutral-800">
                <a
                  className="py-2 px-3 flex items-center gap-x-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                  href="../../pro/dashboard/user-profile-my-profile.html"
                >
                  <img
                    className="shrink-0 size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <div className="grow">
                    <span className="text-sm font-semibold text-gray-800 dark:text-neutral-300">
                      James Collison
                    </span>
                    <p className="text-xs text-gray-500 dark:text-neutral-500">
                      Preline@HS
                    </p>
                  </div>
                </a>
              </div>
              <div className="p-1">
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                  href="#"
                >
                  <svg
                    className="shrink-0 mt-0.5 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width={20} height={14} x={2} y={5} rx={2} />
                    <line x1={2} x2={22} y1={10} y2={10} />
                  </svg>
                  Billing
                </a>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  Settings
                </a>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                  href="#"
                >
                  <svg
                    className="shrink-0 mt-0.5 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  My account
                </a>
              </div>
              <div className="px-4 py-3.5 border-y border-gray-200 dark:border-neutral-800">
                {/* Switch/Toggle */}
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="hs-pro-dnaddm"
                    className="text-sm text-gray-800 dark:text-neutral-300"
                  >
                    Dark mode
                  </label>
                  <div className="relative inline-block">
                    <input
                      data-hs-theme-switch=""
                      type="checkbox"
                      id="hs-pro-dnaddm"
                      className="relative w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-primary dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-neutral-900

            before:inline-block before:size-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                    />
                  </div>
                </div>
                {/* End Switch/Toggle */}
              </div>
              <div className="p-1">
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                  href="#"
                >
                  Customization
                  <div className="ms-auto">
                    <span className="ms-auto inline-flex items-center gap-1.5 py-px px-1.5 rounded text-[10px] leading-4 font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
                      New
                    </span>
                  </div>
                </a>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                  href="#"
                >
                  Manage team
                </a>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                  href="#"
                >
                  Sign out
                </a>
              </div>
              <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
                <button
                  type="button"
                  className="flex mt-0.5 gap-x-3 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                  data-hs-overlay="#hs-pro-dasadam"
                >
                  <svg
                    className="shrink-0 size-4 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                  Add team account
                </button>
              </div>
            </div>
            {/* End Account Dropdown */}
          </div>
          {/* End Account Dropdown */}
        </div>
      </div>
    </header>
    {/* ========== END HEADER ========== */}
    {/* ========== MAIN SIDEBAR ========== */}
    <aside
      id="hs-pro-sidebar"
      className="hs-overlay [--auto-close:lg]
    hs-overlay-open:translate-x-0
    -translate-x-full transition-all duration-300 transform
    w-[20.5rem] h-full
    hidden
    fixed inset-y-0 start-0 z-[60]
    bg-white
    lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
    dark:bg-primary"
      tabIndex={-1}
      aria-label="Sidebar"
    >
      <div className="h-full flex">
        {/* Nav Sidebar */}
        <div className="w-16 flex flex-col h-full max-h-full">
          <div className="p-4 flex flex-col items-center">
            {/* Logo */}
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="../../pro/analytics/index.html"
              aria-label="Preline"
            >
              <svg
                className="w-7 h-auto"
                width={36}
                height={36}
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.0835 3.23358C9.88316 3.23358 3.23548 9.8771 3.23548 18.0723V35.5832H0.583496V18.0723C0.583496 8.41337 8.41851 0.583252 18.0835 0.583252C27.7485 0.583252 35.5835 8.41337 35.5835 18.0723C35.5835 27.7312 27.7485 35.5614 18.0835 35.5614H16.7357V32.911H18.0835C26.2838 32.911 32.9315 26.2675 32.9315 18.0723C32.9315 9.8771 26.2838 3.23358 18.0835 3.23358Z"
                  className="fill-indigo-600 dark:fill-indigo-500"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.0833 8.62162C12.8852 8.62162 8.62666 12.9245 8.62666 18.2879V35.5833H5.97468V18.2879C5.97468 11.5105 11.3713 5.97129 18.0833 5.97129C24.7954 5.97129 30.192 11.5105 30.192 18.2879C30.192 25.0653 24.7954 30.6045 18.0833 30.6045H16.7355V27.9542H18.0833C23.2815 27.9542 27.54 23.6513 27.54 18.2879C27.54 12.9245 23.2815 8.62162 18.0833 8.62162Z"
                  className="fill-indigo-600 dark:fill-indigo-500"
                  fill="currentColor"
                />
                <path
                  d="M24.8225 18.1012C24.8225 21.8208 21.8053 24.8361 18.0833 24.8361C14.3614 24.8361 11.3442 21.8208 11.3442 18.1012C11.3442 14.3815 14.3614 11.3662 18.0833 11.3662C21.8053 11.3662 24.8225 14.3815 24.8225 18.1012Z"
                  className="fill-indigo-600 dark:fill-indigo-500"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* End Logo */}
          </div>
          {/* Content */}
          <div className="h-full px-4 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            {/* Nav */}
            <ul className="flex flex-col items-center space-y-1">
              {/* Item */}
              <li className="hs-tooltip [--placement:right] inline-block">
                <a
                  className="hs-tooltip-toggle flex justify-center items-center gap-x-3 size-10 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700 "
                  href="#"
                >
                  <svg
                    className="shrink-0 mt-0.5 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span className="sr-only">Dashboard</span>
                </a>
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                  role="tooltip"
                >
                  Dashboard
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="hs-tooltip [--placement:right] inline-block">
                <a
                  className="hs-tooltip-toggle flex justify-center items-center gap-x-3 size-10 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="shrink-0 mt-0.5 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span className="sr-only">Users</span>
                </a>
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                  role="tooltip"
                >
                  Users
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="hs-tooltip [--placement:right] inline-block">
                <a
                  className="hs-tooltip-toggle flex justify-center items-center gap-x-3 size-10 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="shrink-0 mt-0.5 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 9 5 12 1.8-5.2L21 14Z" />
                    <path d="M7.2 2.2 8 5.1" />
                    <path d="m5.1 8-2.9-.8" />
                    <path d="M14 4.1 12 6" />
                    <path d="m6 12-1.9 2" />
                  </svg>
                  <span className="sr-only">Events</span>
                </a>
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                  role="tooltip"
                >
                  Events
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="hs-tooltip [--placement:right] inline-block">
                <a
                  className="hs-tooltip-toggle flex justify-center items-center gap-x-3 size-10 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="shrink-0 mt-0.5 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                    <rect width={18} height={18} x={3} y={4} rx={2} />
                    <circle cx={12} cy={10} r={2} />
                    <line x1={8} x2={8} y1={2} y2={4} />
                    <line x1={16} x2={16} y1={2} y2={4} />
                  </svg>
                  <span className="sr-only">Attributes</span>
                </a>
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                  role="tooltip"
                >
                  Attributes
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="hs-tooltip [--placement:right] inline-block">
                <a
                  className="hs-tooltip-toggle flex justify-center items-center gap-x-3 size-10 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-indigo-600 dark:text-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="m16 12-4-4-4 4" />
                    <path d="M12 16V8" />
                  </svg>
                  <span className="sr-only">Upgrade</span>
                </a>
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                  role="tooltip"
                >
                  Upgrade
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="hs-tooltip [--placement:right] inline-block">
                <a
                  className="hs-tooltip-toggle flex justify-center items-center gap-x-3 size-10 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="shrink-0 mt-0.5 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22v-5" />
                    <path d="M9 8V2" />
                    <path d="M15 8V2" />
                    <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
                  </svg>
                  <span className="sr-only">Integrations</span>
                </a>
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                  role="tooltip"
                >
                  Integrations
                </span>
              </li>
              {/* End Item */}
            </ul>
            {/* End Nav */}
          </div>
          {/* End Content */}
          <footer className="hidden lg:block text-center border-t border-gray-200 dark:border-neutral-700">
            {/* Account Dropdown */}
            <div className="hs-dropdown  inline-flex  [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative text-start">
              <button
                id="hs-pro-dsad"
                type="button"
                className="w-full flex items-center gap-x-3 text-start py-4 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <img
                  className="shrink-0 size-[38px] rounded-full"
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                  alt="Avatar"
                />
              </button>
              {/* Account Dropdown */}
              <div
                className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-pro-dsad"
              >
                <div className="p-1 border-b border-gray-200 dark:border-neutral-800">
                  <a
                    className="py-2 px-3 flex items-center gap-x-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                    href="../../pro/dashboard/user-profile-my-profile.html"
                  >
                    <img
                      className="shrink-0 size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <div className="grow">
                      <span className="text-sm font-semibold text-gray-800 dark:text-neutral-300">
                        James Collison
                      </span>
                      <p className="text-xs text-gray-500 dark:text-neutral-500">
                        Preline@HS
                      </p>
                    </div>
                  </a>
                </div>
                <div className="p-1">
                  <a
                    className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                    href="#"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width={20} height={14} x={2} y={5} rx={2} />
                      <line x1={2} x2={22} y1={10} y2={10} />
                    </svg>
                    Billing
                  </a>
                  <a
                    className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    Settings
                  </a>
                  <a
                    className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                    href="#"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    My account
                  </a>
                </div>
                <div className="px-4 py-3.5 border-y border-gray-200 dark:border-neutral-800">
                  {/* Switch/Toggle */}
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="hs-pro-dsaddm"
                      className="text-sm text-gray-800 dark:text-neutral-300"
                    >
                      Dark mode
                    </label>
                    <div className="relative inline-block">
                      <input
                        data-hs-theme-switch=""
                        type="checkbox"
                        id="hs-pro-dsaddm"
                        className="relative w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-primary dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-neutral-900

              before:inline-block before:size-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                      />
                    </div>
                  </div>
                  {/* End Switch/Toggle */}
                </div>
                <div className="p-1">
                  <a
                    className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                    href="#"
                  >
                    Customization
                    <div className="ms-auto">
                      <span className="ms-auto inline-flex items-center gap-1.5 py-px px-1.5 rounded text-[10px] leading-4 font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
                        New
                      </span>
                    </div>
                  </a>
                  <a
                    className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                    href="#"
                  >
                    Manage team
                  </a>
                  <a
                    className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                    href="#"
                  >
                    Sign out
                  </a>
                </div>
                <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
                  <button
                    type="button"
                    className="flex mt-0.5 gap-x-3 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary"
                    data-hs-overlay="#hs-pro-dasadam"
                  >
                    <svg
                      className="shrink-0 size-4 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                    Add team account
                  </button>
                </div>
              </div>
              {/* End Account Dropdown */}
            </div>
            {/* End Account Dropdown */}
          </footer>
          {/* Sidebar Close */}
          <div className="lg:hidden absolute top-4 -end-6 z-10">
            <button
              type="button"
              className="w-6 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-e-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              data-hs-overlay="#hs-pro-sidebar"
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="7 8 3 12 7 16" />
                <line x1={21} x2={11} y1={12} y2={12} />
                <line x1={21} x2={11} y1={6} y2={6} />
                <line x1={21} x2={11} y1={18} y2={18} />
              </svg>
            </button>
          </div>
          {/* End Sidebar Close */}
        </div>
        {/* End Nav Sidebar */}
        {/* Secondary Sidebar */}
        <div className="w-72 bg-white border-x border-gray-200 dark:bg-primary dark:border-neutral-700">
          <div className="flex flex-col h-full max-h-full">
            {/* Quick Actions */}
            <div className="py-3 px-2 border-b border-gray-200 dark:border-neutral-700">
              <button
                type="button"
                className="py-1.5 ps-3 pe-1.5 w-full inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-neutral-700 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700/50"
              >
                Quick actions
                <span className="ms-auto flex items-center gap-x-1 py-px px-1.5 border border-gray-200 rounded-md dark:border-neutral-700">
                  <svg
                    className="shrink-0 size-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  <span className="text-[11px] uppercase">k</span>
                </span>
              </button>
            </div>
            {/* End Quick Actions */}
            {/* Content */}
            <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              {/* Nav */}
              <nav
                className="hs-accordion-group w-full flex flex-col flex-wrap"
                data-hs-accordion-always-open=""
              >
                <ul className="p-2.5 space-y-1.5">
                  {/* Link */}
                  <li>
                    <a
                      className="flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700 "
                      href="../../pro/analytics/index.html"
                    >
                      Overview
                    </a>
                  </li>
                  {/* End Link */}
                  {/* Link */}
                  <li>
                    <a
                      className="flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      Reports
                    </a>
                  </li>
                  {/* End Link */}
                  {/* Link */}
                  <li>
                    <a
                      className="flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      People
                    </a>
                  </li>
                  {/* End Link */}
                  {/* Link */}
                  <li>
                    <a
                      className="flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      Audiences
                    </a>
                  </li>
                  {/* End Link */}
                  {/* Link */}
                  <li className="hs-accordion" id="user-profile-accordion">
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:bg-gray-100 w-full text-start flex gap-x-2.5 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hs-accordion-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                      aria-expanded="false"
                      aria-controls="user-profile-accordion-sub"
                    >
                      Resources
                      <svg
                        className="hs-accordion-active:-rotate-180 shrink-0 mt-1 size-3.5 ms-auto transition"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      id="user-profile-accordion-sub"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                      role="region"
                      aria-labelledby="user-profile-accordion"
                    >
                      <ul
                        className="hs-accordion-group ps-6 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
                        data-hs-accordion-always-open=""
                      >
                        <li>
                          <a
                            className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            Segment docs
                          </a>
                        </li>
                        <li>
                          <a
                            className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            Watch demo
                          </a>
                        </li>
                        <li>
                          <a
                            className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            Chat with us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* End Link */}
                  {/* Link */}
                  <li>
                    <a
                      className="flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      What’s New
                      <div className="ms-auto">
                        <span className="inline-flex items-center gap-1.5 py-px px-1.5 rounded-lg text-[10px] leading-4 font-medium bg-white border border-gray-200 text-gray-800 dark:bg-primary dark:border-neutral-700 dark:text-neutral-300">
                          v1.0
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* End Link */}
                  {/* Link */}
                  <li>
                    <a
                      className="flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700 "
                      href="../../pro/analytics/empty-states.html"
                    >
                      Empty Contents
                    </a>
                  </li>
                  {/* End Link */}
                </ul>
                <ul className="p-2 space-y-1.5">
                  {/* Link */}
                  <li className="hs-accordion active" id="projects-accordion">
                    <button
                      type="button"
                      className="hs-accordion-toggle py-1 px-3 flex justify-center items-center gap-x-1 text-xs text-gray-500 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-expanded="true"
                      aria-controls="projects-accordion-sub"
                    >
                      <svg
                        className="hs-accordion-active:rotate-90 shrink-0 size-3 transition"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      Channels
                    </button>
                    <div
                      id="projects-accordion-sub"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="projects-accordion"
                    >
                      <ul
                        className="hs-accordion-group mt-1 space-y-0.5"
                        data-hs-accordion-always-open=""
                      >
                        {/* Link */}
                        <li>
                          <a
                            className="flex items-center gap-x-2 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="../../pro/index.html"
                          >
                            <span className="flex justify-center items-center size-6 bg-indigo-600 text-white rounded-md dark:bg-indigo-500">
                              <svg
                                className="shrink-0 size-3"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                                <path d="m3.3 7 8.7 5 8.7-5" />
                                <path d="M12 22V12" />
                              </svg>
                            </span>
                            PRO
                          </a>
                        </li>
                        {/* End Link */}
                        {/* Link */}
                        <li>
                          <a
                            className="flex items-center gap-x-2 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="../../pro/examples.html"
                          >
                            <span className="flex justify-center items-center size-6 bg-indigo-600 text-white rounded-md dark:bg-indigo-500">
                              <svg
                                className="shrink-0 size-3"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect width={18} height={7} x={3} y={3} rx={1} />
                                <rect width={9} height={7} x={3} y={14} rx={1} />
                                <rect width={5} height={7} x={16} y={14} rx={1} />
                              </svg>
                            </span>
                            Examples
                          </a>
                        </li>
                        {/* End Link */}
                        {/* Link */}
                        <li>
                          <a
                            className="flex items-center gap-x-2 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="../../pro/templates.html"
                          >
                            <span className="flex justify-center items-center size-6 bg-indigo-600 text-white rounded-md dark:bg-indigo-500">
                              <svg
                                className="shrink-0 size-3"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect x={2} y={4} width={20} height={16} rx={2} />
                                <path d="M10 4v4" />
                                <path d="M2 8h20" />
                                <path d="M6 4v4" />
                              </svg>
                            </span>
                            Templates
                          </a>
                        </li>
                        {/* End Link */}
                      </ul>
                    </div>
                  </li>
                  {/* End Link */}
                </ul>
              </nav>
              {/* End Nav */}
            </div>
            {/* End Content */}
          </div>
        </div>
        {/* End Secondary Sidebar */}
      </div>
    </aside>
</>
  );
}

export default Sidebar;
