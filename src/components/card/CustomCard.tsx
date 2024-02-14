import { Button, Card } from 'antd'
import styles from './CustomCard.module.css'
import { useResize } from '@hooks/useResize'
import { useMemo } from 'react'

interface ICustomCard {
  title: string
  text: string
  icon: React.ReactNode
  isCollapsed: boolean
}

export const CustomCard = ({title, text, icon, isCollapsed}: ICustomCard) =>  {
  const width = useResize()

  const widthCard = useMemo(() => {
    if (width > 834) {
      return 240
    } else if (width > 576 && width < 835 && isCollapsed) {
      return 230
    } else if(width <=640) {
      return '100%'
    } else {
      return 182
    }
  }, [isCollapsed, width])
  return (
    <Card title={title} className={styles.card} style={{width: widthCard}} bodyStyle={{padding: '12px 24px ', textAlign: 'center'}}>
      <Button type="link" icon={icon}>{text}</Button>
    </Card>
  )}
