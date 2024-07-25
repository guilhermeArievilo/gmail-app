import { DrawerNavigationOptions } from "@react-navigation/drawer"
import { IconNameType } from "@/components/drawer-button"

interface CustomOptions extends DrawerNavigationOptions {
  iconName: IconNameType,
  isDivisor?: boolean,
  notifications?: number,
  sectionTitle?: string
}