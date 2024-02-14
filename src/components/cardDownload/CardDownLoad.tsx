import { Button, Card } from 'antd'
import { AndroidFilled, AppleFilled } from '@ant-design/icons'
import Meta from 'antd/lib/card/Meta'
import styles from './CardDownLoad.module.css'

export const CardDownLoad = () =>  (
    <Card className={styles.cardDownload} bodyStyle={{padding: '12px 24px'}} actions={[
      <Button type="text" icon={<AndroidFilled />} >Android OS</Button>,
      <Button type="text" icon={<AppleFilled />} >Apple iOS</Button>,
    ]}>
      <Meta
      title="Скачать на телефон"
      description="Доступно в PRO-тарифе"
    />
    </Card>
  )
