export const fromMap = <T, K>(customMap: Map<T, K>, key: T): K => customMap.get(key) as K;
