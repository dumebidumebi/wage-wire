import { Icon } from '@iconify/react';
import { SideNavItem } from './types';
import { Folder, HandCoins, Home, Users } from 'lucide-react';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Home className='stroke-zinc-100'/>
  },
  {
    title: 'Setup',
    path: '/onboarding',
    icon: <Folder/>
  },
  {
    title: 'Payroll',
    path: '/payroll',
    icon: <HandCoins />,
    submenu: true,
    subMenuItems: [
      { title: 'Run payroll', path: '/payroll/run-payroll' },
      { title: 'Pay contractors', path: '/payroll/pay-contractors' },
      { title: 'Payroll settings', path: '/payroll/payroll-settings' },
      { title: 'Payroll history', path: '/payroll/payroll-history' },
    ],
  },
  {
    title: 'People',
    path: '/people',
    icon: <Users />,
    submenu: true,
    subMenuItems: [
      { title: 'Employees', path: '/people/employees' },
      { title: 'Contractors', path: '/people/contractors' },
    ],
  },
];