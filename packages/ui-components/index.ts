// Simple imports n' exports for consumers of the library.

import { ThemeProvider } from "glamorous"

import Button from "./src/Button/Button"
import Card, { CardHeader } from "./src/Card/Card"
import Chip from "./src/Chip/Chip"
import ColorPicker from "./src/ColorPicker/ColorPicker"
import Header, { HeaderItem, HeaderSeparator, HeaderTitle } from "./src/Header/Header"
import Icon from "./src/Icon/Icon"
import InfoTile from "./src/InfoTile/InfoTile"
import Input from "./src/Input/Input"
import Paginator from "./src/Paginator/Paginator"
import PlusChip from "./src/PlusChip/PlusChip"
import Progress from "./src/Progress/Progress"
import Select from "./src/Select/Select"
import Sidebar, { SidebarItem, SidebarLink } from "./src/Sidebar/Sidebar"
import SideNavigation, {
  SideNavigationHeader,
  SideNavigationItem,
  SideNavigationLink
} from "./src/SideNavigation/SideNavigation"
import Switch from "./src/Switch/Switch"
import Tooltip from "./src/Tooltip/Tooltip"
import Timeline, { TimelineItem } from "./src/Timeline/Timeline"
import theme from "./src/theme"

export {
  Button,
  Card,
  CardHeader,
  Chip,
  ColorPicker,
  Header,
  HeaderItem,
  HeaderSeparator,
  HeaderTitle,
  Icon,
  InfoTile,
  Input,
  Paginator,
  PlusChip,
  Progress,
  Select,
  SideNavigation,
  SideNavigationHeader,
  SideNavigationItem,
  SideNavigationLink,
  Sidebar,
  SidebarItem,
  SidebarLink,
  Switch,
  Timeline,
  TimelineItem,
  Tooltip,
  theme as contiamoTheme,
  ThemeProvider
}