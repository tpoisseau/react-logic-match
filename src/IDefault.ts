type JSXElements = JSX.Element | JSX.Element[];

export interface IDefaultProps {
  children: JSXElements | (() => JSXElements);
}
