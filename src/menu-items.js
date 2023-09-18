// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
  PersonOutlineOutlinedIcon:PersonOutlineOutlinedIcon,
  CalendarMonthOutlinedIcon:CalendarMonthOutlinedIcon,
  EventBusyOutlinedIcon:EventBusyOutlinedIcon,
  PermContactCalendarOutlinedIcon:PermContactCalendarOutlinedIcon,
};


// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      title: 'Materially',
      caption: 'Dashboard',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/'
        }
      ]
    },
    {
      id: 'navigation2',
      title: 'Materially',
      caption: 'Employees',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'employees',
          title: 'Employees',
          type: 'item',
          icon: icons['PersonOutlineOutlinedIcon'],
          url: '/users'
        }
      ]
    },   
    {
      id: 'navigation3',
      title: 'Materially',
      caption: 'Employees attendance',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'attandance-report',
          title: 'Employees attendance',
          type: 'item',
          icon: icons['PermContactCalendarOutlinedIcon'],
          url: '/attandance-report'
        }
      ]
    },  
    {
      id: 'navigation4',
      title: 'Materially',
      caption: 'Leave Applications',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'leave-applications',
          title: 'Leave Applications',
          type: 'item',
          icon: icons['EventBusyOutlinedIcon'],
          url: '/leave-applications'
        }
      ]
    },
    {
      id: 'navigation5',
      title: 'Materially',
      caption: 'Company Holidays',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'company-holidays',
          title: 'Company Holidays',
          type: 'item',
          icon: icons['EventBusyOutlinedIcon'],
          url: '/company-holidays'
        }
      ]
    },  
    

    {
      id: 'pages',
      title: 'Pages',
      caption: 'Prebuild Pages',
      type: 'group',
      icon: icons['ChromeReaderModeOutlinedIcon'],
      children: [
        
        {
          id: 'auth',
          title: 'Application',
          type: 'collapse',
          icon: icons['ChromeReaderModeOutlinedIcon'],
          children: [
            {
              id: 'submenu-1',
              title: 'Sub Menu',
              type: 'item',
              url: '/',
              target: false
            },
            {
              id: 'submenu-2',
              title: 'Sub Menu',
              type: 'item',
              url: '/',
              target: false
            }
          ]
        }
      ]
    },
    // {
    //   id: 'pages',
    //   title: 'Pages',
    //   caption: 'Prebuild Pages',
    //   type: 'group',
    //   icon: icons['NavigationOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'sample-page',
    //       title: 'Sample Page',
    //       type: 'item',
    //       url: '/sample-page',
    //       icon: icons['ChromeReaderModeOutlinedIcon']
    //     },
      
    //   ]
    // },
    // {
    //   id: 'utils',
    //   title: 'Utils',
    //   type: 'group',
    //   icon: icons['AccountTreeOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'util-icons',
    //       title: 'Icons',
    //       type: 'item',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       icon: icons['AppsOutlinedIcon'],
    //       external: true,
    //       target: true
    //     },
    //     {
    //       id: 'util-typography',
    //       title: 'Typography',
    //       type: 'item',
    //       url: '/utils/util-typography',
    //       icon: icons['FormatColorTextOutlinedIcon']
    //     }
    //   ]
    // },
    // {
    //   id: 'support',
    //   title: 'Support',
    //   type: 'group',
    //   icon: icons['ContactSupportOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'disabled-menu',
    //       title: 'Disabled Menu',
    //       type: 'item',
    //       url: '#',
    //       icon: icons['BlockOutlinedIcon'],
    //       disabled: true
    //     },
    //     {
    //       id: 'documentation',
    //       title: 'Documentation',
    //       type: 'item',
    //       url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
    //       icon: icons['HelpOutlineOutlinedIcon'],
    //       chip: {
    //         label: 'Help?',
    //         color: 'primary'
    //       },
    //       external: true,
    //       target: true
    //     }
    //   ]
    // }
  ]
};
