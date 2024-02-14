import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import { Menu } from 'antd';

interface IMenu {
  isMobile: boolean
}

export const SideMenu = ({ isMobile }: IMenu) => (
      <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[]}
          inlineIndent={!isMobile ? 24 : 8}
          items={[
            {
              key: '1',
              icon: !isMobile && <CalendarTwoTone twoToneColor={['#061178', '#061178']}/>,
              label: 'Календарь',              
            },
            {
              key: '2',
              icon: !isMobile && <HeartFilled style={{color: '#061178'}} />,
              label: 'Тренировки',
            },
            {
              key: '3',
              icon: !isMobile && <TrophyFilled style={{color: '#061178'}} />,
              label: 'Достижения',
            },
            {
              key: '4',
              icon: !isMobile && <IdcardOutlined style={{color: '#061178'}} />,
              label: 'Профиль',
            },
          ]}
        />
  )
