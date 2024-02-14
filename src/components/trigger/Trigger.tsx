import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import styles from './Trigger.module.css'
import { useResize } from '@hooks/useResize'

interface ITrigger {
  isCollapsed: boolean
  setIsCollapsed: (v: boolean) => void
}
export const Trigger = ({isCollapsed, setIsCollapsed}: ITrigger) => {
  const width = useResize()
  return (
    <div 
      onClick={() => setIsCollapsed(!isCollapsed)} 
      className={styles.trigger} 
      data-test-id={width > 360 ? 'sider-switch' : 'sider-switch-mobile'}
    >
      {!isCollapsed ? <MenuFoldOutlined style={{color: '#8c8c8c'}} /> : <MenuUnfoldOutlined style={{color: '#8c8c8c'}} />}
    </div>
  )
}
