import { ReactElement } from "react";
import Case from "./Case";
import Default from "./Default";
export declare type SwitchChildren<T> = ReactElement<Case<T>> | ReactElement<Default>;
export interface ISwitchProps<T> {
    value: T;
    children: SwitchChildren<T> | SwitchChildren<T>[];
    debug?: boolean;
}
