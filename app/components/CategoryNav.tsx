"use client"

import type { Category } from "@/app/types"
import React from 'react'
import NavLink from "@/app/components/NavLink"
import { getAllCategories } from "@/app/lib/categories"
import { usePathname } from "next/navigation"


const CategoryNav = () => {
    const categories: Category[] = getAllCategories()
    const pathname = usePathname()
    console.log("PATHNAME: ", pathname)
    return (
        <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
            <div className="relative">
                <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">

                    <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
                        <NavLink

                            href="/3d-models"
                            isActive={pathname === "/3d-models" ? true : false}
                        >
                            All
                        </NavLink>
                        {categories.map(item => (
                            <NavLink
                                href={`/3d-models/categories/${item.slug}`}
                                isActive={pathname === `/3d-models/categories/${item.slug}` ? true : false}
                                key={item.slug}
                            >
                                {item.displayName}
                            </NavLink>
                        ))}
                    </ul>
                </nav>
                {/* Fading edge/gradient for horizontal scroll hint on mobile */}
                <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
            </div>
        </aside>

    )
}

export default CategoryNav