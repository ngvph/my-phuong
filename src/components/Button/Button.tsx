import React, { ElementType, JSXElementConstructor, ReactNode } from "react";

interface ButtonProps {
  isDisabled?: boolean;
  children?: ReactNode;
}

interface AriaButtonElementTypeProps<T extends ElementType = "button"> {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   * @default 'button'
   */
  elementType?: T | JSXElementConstructor<any>;
}

export interface AriaButtonProps<T extends ElementType = "button">
  extends ButtonProps,
    AriaButtonElementTypeProps<T> {}

function Button<T extends ElementType = "button">(props: AriaButtonProps<T>) {
  const {
    elementType: ElementType = "button",
    children,
    ...otherProps
  } = props;
  return (
    <ElementType {...otherProps}>
      {typeof children === "string" ? <span>{children}</span> : children}
    </ElementType>
  );
}

let _Button = React.forwardRef(Button);

export { _Button as Button };
