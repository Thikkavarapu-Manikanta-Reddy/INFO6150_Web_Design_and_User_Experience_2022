import styled from "styled-components";

export const StyledBurger = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 32px;
margin-left: auto;
margin-top: -0.7rem;
@media (min-width: 799px) {
  display: none;
}

&:hover {
  cursor: pointer;
}

&.open {
  .menu_item_burger {
    transform: translateX(-30px);
    background: transparent;
    box-shadow: none;
  }
  .menu_item_burger::before {
    transform: rotate(45deg) translate(25px, -25px);
  }

  .menu_item_burger::after {
    transform: rotate(-45deg) translate(25px, 25px);
  }
}

.menu_item_burger {
  height: 5px;
  background-color: ${({ colorChange }) => colorChange ? 'var(--tertiary-color)' : 'var(--primary-color)'};
  width: 100%;
  box-shadow: 0px 2px 1px ${({ colorChange }) => colorChange ? 'var(--tertiary-color)' : 'var(--primary-color)'};
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
}
.menu_item_burger::after,
.menu_item_burger::before {
  content: "";
  position: absolute;
  height: 5px;
  border-radius: 5px;
  background-color: ${({ colorChange }) => colorChange ? 'var(--tertiary-color)' : 'var(--primary-color)'};
  width: 100%;
  box-shadow: 0px 2px 1px ${({ colorChange }) => colorChange ? 'var(--tertiary-color)' : 'var(--primary-color)'};
  transition: all 0.5s ease-in-out;
}
.menu_item_burger::after {
  transform: translateY(10px);
}

.menu_item_burger::before {
  transform: translateY(-10px);
}
`;