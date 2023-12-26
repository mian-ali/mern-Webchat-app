import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useChatContext } from '../context/ChatContext';
import { useSocketContext } from '../context/SocketContext';
import { socketEmitEvent } from '../socket/emit';

function Navbar() {
  const { user, setUser, setToken } = useAuthContext();
  const { setChatInfo } = useChatContext();

  const {
    socketValue: { socket, socketId, onlineUsers },
    resetSocketValue
  } = useSocketContext();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (socketId) {
      setShow(true); // TODO:
    }
  }, [socketId]);

  const handleLogout = () => {
    console.log('logout', socketEmitEvent(socket));
    setUser(null);
    setToken(null);
    setChatInfo(null);
    if (socketId) {
      socketEmitEvent(socket).userOffline(user._id);
      console.log('DISCONNECT');
      resetSocketValue();
      socket.disconnect();
    }
  };

  return (
    <NavContainer>
      <Link to="/">
        <NavLogo>
          <NavBrand>Chats With Friends</NavBrand>
          {show && onlineUsers && <NavCount> Online Users:{onlineUsers.length || 0}</NavCount>}
        </NavLogo>
      </Link>
      {user ? (
        <NavUser>
          Welcome! <span>{user.name}</span>
        </NavUser>
      ) : null}
      <NavIcons>
        {user ? (
          <>
            <NavIcon>
              <Link to="/open-room">
                {/* Create a New Room */}
                {'Create Room'}
              </Link>
            </NavIcon>
            <NavIcon onClick={handleLogout}>
              {/* Logout */}
              {'Leave App'}
            </NavIcon>
          </>
        ) : null}
      </NavIcons>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 80px;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: var(--bg-color-darken);

  a {
    color: var(--main-color);
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
const NavBrand = styled.h1`
  font-size: 1.25rem;
  font-weight: 900;
  letter-spacing: 1px;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const NavCount = styled.p`
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const NavUser = styled.h2`
  flex: 1;
  font-size: 1rem;
  text-align: end;
  margin-right: 0.5rem;
  padding: 0 1rem;
  text-transform: capitalize;
  display: none;

  span {
    font-style: italic;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
`;

const NavIcon = styled.div`
  width: 120px;
  height: 40px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color-main);
  color: var(--main-color);
  cursor: pointer;
  box-shadow: 2px 2px 4px var(--shadow-color);

  &:hover {
    position: relative;
    bottom: 1px;
  }

  a {
    display: flex;
    color: var(--main-color);
  }

  :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export default Navbar;
