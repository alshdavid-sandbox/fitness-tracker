import Dexie from 'dexie';
import { Exercise } from './types';

export const table = <T = Exercise, K = string>(db: Dexie): Promise<Dexie.Table<T, K>> => (db as any).exercises