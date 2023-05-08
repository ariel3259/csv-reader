export const validate = (type: string, payload: string, key: string, required: boolean): void =>  {
  const types: Record<string, any> = {
    number: (): void => {
        const n: number = Number(payload);
        if ( required && (Number.isNaN(n) || n === 0 )) throw new Error(`invalid argument ${key}, needed a number`);
    },
    email: (): void  => {
        if (
            required && 
            !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            payload,
        )) throw new Error(` invalid email ${key}`)
    }
  }
  if (types[type]) types[type]();
}
