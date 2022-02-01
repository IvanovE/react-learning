import { Form } from "./components/Form/Form"
import { UserList } from "./components/UserList/UserList"
import { useState } from "react"

export function App() {
  const [usersList, setUsersList] = useState([])

  return (
    <>
      <Form setUsersList={setUsersList} />
      <UserList users={usersList} />
    </>
  )
}
