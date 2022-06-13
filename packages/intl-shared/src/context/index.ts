import { createContext } from 'react';
import { DEFAULT_CTX_VALUE } from '../constants';


const Context = createContext(DEFAULT_CTX_VALUE);
const { Provider } = Context;
export { Context, Provider };
