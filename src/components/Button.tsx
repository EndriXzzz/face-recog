import React, { ReactNode } from 'react'

export default function Button({
    children
}: {
    children: ReactNode
}) {
    return <button className="px-20 py-5 text-4xl font-bold bg-primary transition-all duration-500 ease-in uppercase">{children}</button>
}
