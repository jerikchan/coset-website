import React from "react";
import { Disclosure, DisclosureProps, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../../content/images/coset/cosetlogo.svg"
import logoHeading from "../../content/images/coset/cosetlogo2.svg"
import { Link } from "gatsby-link"
import clsx from "clsx"
import { NavigationItem, navigationItems } from "../config/navigation";
import { NavigationItemComponent } from "./navigation-item";

export default function Header(props: DisclosureProps<"header">) {
  return <PureHeader {...props} navigationItems={navigationItems} />
}

export function PureHeader(props: DisclosureProps<"header"> & {
  navigationItems: NavigationItem[]
}) {
  return (
    <Disclosure
      as="header"
      {...props}
      className={clsx("bg-web-paper", props.className)}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl md:container mx-auto px-2 md:px-4 py-2 md:py-0 sticky z-40">
            <div className="flex h-16 justify-between w-full">
              <div className="flex px-2 md:px-0 justify-between w-full">
                <Link
                  to="/"
                  className="inline-flex gap-2 flex-shrink-0 items-center"
                >
                  <img
                    className="h-8 md:h-6 w-auto transition-all"
                    src={logo}
                    alt="Coset Logo"
                  />
                  <img
                    className="h-4 md:h-3 w-auto transition-all"
                    src={logoHeading}
                    alt="Coset Logo Heading"
                  />
                </Link>
                <div className="hidden md:flex md:space-x-8">
                  {props.navigationItems.map((item) => (
                    <NavigationItemComponent
                      key={item.label}
                      item={item}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-primary-black focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-black">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open nav menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            leave="transition-opacity"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as="nav"
            className="md:hidden flex w-full relative bg-inherit"
          >
            <Disclosure.Panel className="flex fixed z-30 inset-0 w-full bg-inherit px-6 pt-[80px]">
              <div className="pb-3 w-full">
                {props.navigationItems.map((item) => (
                  <Disclosure.Button
                    key={item.label}
                    as={NavigationItemComponent}
                    item={item}
                    isMobile={true}
                  />
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}