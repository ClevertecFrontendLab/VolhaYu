import { Button, Card } from 'antd'
import styles from './CustomCard.module.css'

interface ICustomCard {
  title: string
  text: string
  icon: React.ReactNode
}

export const CustomCard = ({title, text, icon}: ICustomCard) =>  (
    <Card title={title} className={styles.card} bodyStyle={{padding: '12px 24px ', textAlign: 'center'}}>
      <Button type="link" icon={icon}>{text}</Button>
    </Card>
  )
