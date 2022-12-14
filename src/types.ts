import {ChangeEvent} from "react";

export let textAlign: 'left' | 'center' | 'right'

export type ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void