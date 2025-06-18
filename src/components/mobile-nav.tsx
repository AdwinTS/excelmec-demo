"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface MobileNavProps {
  currentPath?: string
}

export function MobileNav({ currentPath = "/" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/events", label: "EVENTS" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-white hover:text-pink-400 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMenu} />}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-black via-gray-900 to-pink-900 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-pink-500/30">
            <Link href="/" onClick={closeMenu} className="text-xl font-bold text-pink-400">
              Excel<span className="text-white">MEC 2025</span>
            </Link>
            <button onClick={closeMenu} className="p-2 text-white hover:text-pink-400 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block text-lg font-semibold transition-colors ${
                      currentPath === item.href
                        ? "text-pink-400 border-l-2 border-pink-400 pl-4"
                        : "text-white hover:text-pink-400 hover:border-l-2 hover:border-pink-400 hover:pl-4"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Register Button */}
          <div className="p-6 border-t border-pink-500/30">
            <Button onClick={closeMenu} className="w-full bg-pink-500 hover:bg-pink-600 text-black font-semibold">
              REGISTER
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
