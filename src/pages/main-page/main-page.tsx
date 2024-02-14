import React, { useMemo, useState } from 'react';

import logo from '/logo.svg';
import exit from '/Exit.svg';
import logoCollapsed from '/logo_collapsed.svg';
import 'antd/dist/antd.css';
import styles from './main-page.module.css'
import { Button, Card, Divider, Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { CalendarTwoTone, HeartFilled, IdcardOutlined} from '@ant-design/icons';
import { SideMenu } from '@components/sideMenu';
import { CustomHeader } from '@components/header';
import { CustomCard } from '@components/card';
import { CardDownLoad } from '@components/cardDownload';
import { Trigger } from '@components/trigger';
import { useResize } from '@hooks/useResize';


export const MainPage: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const width = useResize()
  const isMobile = width <= 576

  const heigthHeader = useMemo(() => {
    if (width > 834) {
      return 168
    } else if (width > 772 && width < 835 && isCollapsed) {
      return 132
    } else if(width <=576) {
      return 166
    } else {
      return 194
    }
  }, [isCollapsed, width])

    return (
        <Layout hasSider className={styles.mainLayout}>
              <Sider 
                width={!isMobile? 208 : 106} 
                collapsible={true} 
                trigger={null}              
                collapsed={isCollapsed}
                onCollapse={setIsCollapsed} 
                collapsedWidth={!isMobile? 64 : 0} 
                className={styles.sider}
              >
                <Trigger isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
                <div>
                  {!isCollapsed ?
                  <img src={logo} alt="logo" width={!isMobile ? 208 : 106} style={{marginBottom: 50}} />
                  :
                  <img src={logoCollapsed} alt="logo" style={{marginBottom: 50}} />
                }
                  <SideMenu isMobile={isMobile} />
                </div>
                <div className={styles.wrapExit}>
                  <Divider style={{margin: 0}}/>
                  <div className={styles.exit}>
                    {!isMobile && <img src={exit} alt="exit" style={{marginRight: 10}} />}
                    <Button type="text">{ !isCollapsed && 'Выход'}</Button>
                  </div>
                </div>
              </Sider>
            <Layout className={styles.layoutContent}>

              <Header style={{height: heigthHeader}} className={styles.header}>
                <CustomHeader />
              </Header>
              <Content className={styles.content}>
                <Card className={styles.cardTextBlue}>
                  <p style={{margin: 0}}>С CleverFit ты сможешь:</p>
                  <p style={{margin: 0}}>
                    — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                  </p>
                  <p style={{margin: 0}}>
                  — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;
                  </p>
                  <p style={{margin: 0}}>
                  — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках; 
                  </p>
                  <p style={{margin: 0}}>
                  — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и 
                  советам профессиональных тренеров.
                  </p >
                </Card>
                <Card className={styles.cardTextBlack}>
                  <p style={{margin: 0}}>
                  CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. 
                  Не откладывай на завтра — начни тренироваться уже сегодня!
                  </p>
                </Card>
                <div className={styles.wrapCards}>
                  <CustomCard title={'Расписать тренировки'} text={'Тренировки'} icon={<HeartFilled style={{ color: '#2f54eb' }} />} isCollapsed={isCollapsed}  />
                  <CustomCard title={'Назначить календарь'} text={'Календарь'} icon={<CalendarTwoTone twoToneColor={['#2f54eb', '#2f54eb']}/>} isCollapsed={isCollapsed}  />
                  <CustomCard title={'Заполнить профиль'} text={'Профиль'} icon={<IdcardOutlined style={{color: '#2f54eb'}} />} isCollapsed={isCollapsed}  />
                </div>
                <div className={styles.wrapDounload}>
                  <Button className={styles.btnReview} type='link'>Смотреть отзывы</Button>
                  <CardDownLoad />
                </div>
              </Content>
              <Footer className={styles.footer}></Footer>
            </Layout>
      </Layout>
    );
};
