"use client"
import CustomBtn from '@/app/components/CustomBtn'
import { sideNavbar } from '@/type'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../utils/cn'

const Sidebar = () => {
  const location = usePathname()

  return (
    <div className="mr-5 flex w-full max-w-64 flex-col justify-between pt-5 lg:flex-shrink-0">
      <div>
        <Link href={'/'} className="block mb-5">
          PMD
        </Link>

        <nav>
          <ul className="space-y-3">
            {sideNavbar.map((i, index) => (
              <li key={index} className={cn(i.isBorder && 'border-b border-b-clr-8b/20 pb-3')}>
                <CustomBtn
                  LinkHref={i.path}
                  isLink={true}
                  LinkClassName={`flex items-center text-sm font-medium text-white gap-2 hover:text-white capitalize ${location !== i.path && 'withoutGradientBtn'
                    }`}
                >
                  <i.icon className="icon-class size-4" strokeWidth={2} />
                  {i.name}
                </CustomBtn>
              </li>
            ))}
          </ul>
        </nav>
      </div>


    </div>
  )
}

export default Sidebar