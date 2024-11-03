import { useContext } from 'react';
import { ScrollContext } from './ScrollContext';

export const useScroll = () => useContext(ScrollContext);