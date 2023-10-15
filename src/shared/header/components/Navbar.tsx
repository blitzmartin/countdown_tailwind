import { PhList } from '@/icons'
import { NavbarLink, navbarLinks } from '@/lib/constants'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/shared/DropdownMenu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/shared/NavigationMenu'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="flex justify-between pr-4">
      <div>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navbarLinks.map((navbarLink: NavbarLink) => (
                <NavigationMenuItem key={navbarLink.id}>
                  <Link to={navbarLink.route}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {navbarLink.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="p-4 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <PhList width="24px" height="24px" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navbarLinks.map((navbarLink: NavbarLink) => (
                <DropdownMenuItem key={navbarLink.id}>
                  <Link to={navbarLink.route}>{navbarLink.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
