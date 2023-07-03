import { Metadata } from "next"

import "@/styles/globals.css"
import "simplebar-react/dist/simplebar.min.css"

import { PropsWithChildren } from "react"

import { poppins } from "@/config/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toast"

export const metadata: Metadata = {
  title: {
    default: "Jatidiri Multifarm",
    template: `%s - Jatidiri Multifarm`,
  },
  description: "this is a description about the company",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-neutral-1 text-sm text-neutral-5 antialiased",
          poppins.className
        )}
      >
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  )
}
