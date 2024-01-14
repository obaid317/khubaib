import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AwardsSectionContainer = styled.div`
  /* Add your styles here */
  position: relative;
  height: 100%;
`;

const AwardsCard = styled.div`
  /* Add your styles here */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;

  &.enter {
    opacity: 1;
    transform: translateY(0);
  }

  &.enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  &.exit {
    opacity: 0;
    transform: translateY(50px);
  }

  &.exit-active {
    opacity: 0;
    transform: translateY(50px);
  }
`;

const AwardsSection = () => {
  const [items, setItems] = React.useState(['Item 1', 'Item 2', 'Item 3']);

  const handleClick = (index) => {
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[0];
    newItems[0] = temp;
    setItems(newItems);
  };

  return (
    <AwardsSectionContainer className="awards-section">
      <TransitionGroup>
        {items.map((item, index) => (
          <CSSTransition key={item} timeout={500} classNames="item">
            <AwardsCard onClick={() => handleClick(index)}>
              {item}
            </AwardsCard>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </AwardsSectionContainer>
  );
};

export default AwardsSection;