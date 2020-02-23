export interface CustomEventEmitter {
  on(event: string | symbol, listener: (...args: any[]) => void): this | any;
  emit(event: string | symbol, ...args: any[]): boolean;
  [key: string]: any;
}
