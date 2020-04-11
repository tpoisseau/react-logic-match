type JSXElements = JSX.Element | JSX.Element[];

export interface ICaseProps<T> {
  value: T;
  children: JSXElements | ((value: T) => JSXElements);
}
