import { useEffect, useState, useContext } from "react"
import { FirebaseContext } from "../context/firebase"

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")))
  const { firebase } = useContext(FirebaseContext)

  // As recommended by Firebase - need to set up subscription
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser))
        setUser(authUser)
      } else {
        localStorage.removeItem("authUser")
        setUser(null)
      }
    })

    // Clean up listener when unmounted
    return () => listener()
  }, [firebase])

  return { user }
}
