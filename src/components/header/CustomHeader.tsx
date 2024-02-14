import { SettingOutlined } from '@ant-design/icons'
import styles from './CustomHeader.module.css'
import { Button } from 'antd'
import { useResize } from '@hooks/useResize'

export const CustomHeader = () =>  {
  const width = useResize()
  const isMobile = width <= 576

  console.log(width, width > 834, isMobile)
  return (
    <div className={styles.header}>
      <p className={styles.text}>главная</p>
      <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
        <h1 className={styles.h1}>Приветствуем тебя в CleverFit — приложении,<br /> которое поможет тебе добиться своей мечты!</h1>
        {!isMobile ?
          <Button type="text" icon={width > 834 ? <SettingOutlined /> : null}>Настройки</Button>
          :
          <Button shape="circle" icon={<SettingOutlined />} />
        }
      </div>
    </div>
  )}
