export function test<T extends (...args: any) => any>(func: T, assets: [...Parameters<T>, result: ReturnType<T>][]): void;