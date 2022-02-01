import styles from './UserList.module.css'

import { UserItem } from "./UserItem/UserItem"

export const UserList = ({users}) => {
  return (
    <div className={styles.list}>
      { users.length !== 0
        ? users.map(user => {
          return <UserItem name={user.name} age={user.age} key={user.key} />
        })
        : 'No users added'
      }
    </div>
  )
}
