import { cn } from '@/utils/cn'
import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  isLink?: boolean
  gradient?: boolean
  LinkHref?: string
  LinkClassName?: string
  btnClassName?: string
  onClick?: () => void
}

const CustomBtn: React.FC<ButtonProps> = ({
  children,
  isLink = false,
  gradient = true,
  LinkHref = '',
  LinkClassName,
  btnClassName,
  onClick
}) => {
  if (isLink) {
    return (
      <Link
        href={LinkHref}
        onClick={onClick}
        className={cn(
          'button-gradient block w-full rounded-lg border-b-2 border-b-clr-f2 bg-clr-ef bg-gradient-to-t from-clr-ef to-clr-f1 px-[10px] py-3 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-clr-ef hover:to-clr-f1',
          LinkClassName
        )}
      >
        {children}
      </Link>
    )
  } else if (!gradient) {
    return (
      <button
        onClick={onClick}
        className={cn(
          'w-full rounded-lg border px-[10px] py-3 text-sm font-medium text-clr-80 transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-clr-ef hover:to-clr-f1 hover:text-white',
          btnClassName
        )}
      >
        {children}
      </button>
    )
  } else {
    return (
      <button
        onClick={onClick}
        className={cn(
          'button-gradient w-full rounded-lg border-b-2 border-b-clr-f2 bg-clr-ef bg-gradient-to-t from-clr-ef to-clr-f1 px-[10px] py-3 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-clr-ef hover:to-clr-f1',
          btnClassName
        )}
      >
        {children}
      </button>
    )
  }
}

export default CustomBtn
