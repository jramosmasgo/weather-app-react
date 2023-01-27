import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./animated.scss";

interface AnimatedComponentProps {
  children: React.ReactNode;
  ida: string;
}

const AnimatedComponent: React.FunctionComponent<AnimatedComponentProps> = ({
  children,
  ida,
}) => {
  return (
    <SwitchTransition>
      <CSSTransition
        key={ida}
        classNames="fade"
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default AnimatedComponent;
