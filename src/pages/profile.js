import React, { useState, useContext, useEffect } from "react"
import { Header, Info } from "../components"
import * as ROUTES from "../constants/routes"
import FooterContainer from "../containers/footer"
import { FirebaseContext } from "../context/firebase"

export default function Profile() {
  const [displayName, setDisplayName] = useState("")
  const [newDisplayName, setNewDisplayName] = useState("")
  const [avatar, setAvatar] = useState(1)
  const [newAvatar, setNewAvatar] = useState(null)
  const [isUpdating, setIsUpdating] = useState(false)

  const { firebase } = useContext(FirebaseContext)

  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    setDisplayName(user.displayName)
    setAvatar(user.photoURL)
  }, [isUpdating, user.displayName, user.photoURL])

  const handleAvatarUpdate = () => {
    setIsUpdating(true)
    user
      .updateProfile({
        ...user,
        photoURL: newAvatar,
      })
      .then(() => {
        setIsUpdating(false)
      })
      .catch((error) => console.log(error))
    setNewAvatar(null)
  }

  const handleNameUpdate = () => {
    setIsUpdating(true)
    user
      .updateProfile({
        ...user,
        displayName: newDisplayName,
      })
      .then(() => {
        setIsUpdating(false)
      })
      .catch((error) => console.log(error))
    setNewDisplayName(null)
  }

  const isDemoUser = user.displayName === "Justin Lowen"

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="images/misc/logo.svg"
              alt="Netflix"
            />
          </Header.Group>
          <Header.Group>
            <Header.ExternalButtonLink
              target="_blank"
              href="https://github.com/JLowe-N/netflixclone"
            >
              See Repo
            </Header.ExternalButtonLink>
            <Header.ButtonLink to={ROUTES.BROWSE}>Browse</Header.ButtonLink>
            <Header.Profile>
              <Header.Picture src={avatar} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={avatar} />
                  <Header.Link to={ROUTES.PROFILE}>{displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
      </Header>
      <Info>
        <Info.Title>User Profile</Info.Title>
        <Info.Text> Current Display Name: </Info.Text>
        <Info.Text> {displayName} </Info.Text>
        <Info.Input
          disabled={isDemoUser}
          type="text"
          value={newDisplayName}
          onChange={({ target }) => setNewDisplayName(target.value)}
        />
        <Info.SubmitButton
          onClick={() => handleNameUpdate()}
          disabled={newDisplayName === "" || isDemoUser}
        >
          {newDisplayName === "" ? "Select Name" : "Update Name"}
        </Info.SubmitButton>
        {isDemoUser && (
          <Info.Text>Profile name update disabled for Demo Account.</Info.Text>
        )}
        <Info.Text> Current Avatar: </Info.Text>
        <img src={`images/users/${avatar}.png`} alt="Your Avatar" />
        <Info.Text> Please select a profile image:</Info.Text>
        <Info.List>
          <Info.ImageSelect
            src="1"
            onClick={() => setNewAvatar(1)}
            alt="Avatar 1"
            highlight={newAvatar === 1}
          />
          <Info.ImageSelect
            src="2"
            onClick={() => setNewAvatar(2)}
            alt="Avatar 2"
            highlight={newAvatar === 2}
          />
          <Info.ImageSelect
            src="3"
            onClick={() => setNewAvatar(3)}
            alt="Avatar 3"
            highlight={newAvatar === 3}
          />
          <Info.ImageSelect
            src="4"
            onClick={() => setNewAvatar(4)}
            alt="Avatar 4"
            highlight={newAvatar === 4}
          />
          <Info.ImageSelect
            src="5"
            onClick={() => setNewAvatar(5)}
            alt="Avatar 5"
            highlight={newAvatar === 5}
          />
        </Info.List>
        <Info.SubmitButton
          onClick={() => handleAvatarUpdate()}
          disabled={!newAvatar}
        >
          {!newAvatar ? "Select Avatar" : "Update Avatar"}
        </Info.SubmitButton>
      </Info>
      <FooterContainer />
    </>
  )
}
