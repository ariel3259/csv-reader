export const cast = (type: string, payload: string): string | number | boolean => {
    const types: Record<string, any> = {
        number: (): number => Number(payload),
        boolean: (): boolean => payload === 'TRUE',
        date: (): Date => {
            const metadata: string[] = `${payload}`.split('-');
            const year: number = Number(metadata[0]);
            const month: number = Number(metadata[1]) - 1;
            const day: number = Number(metadata[2]);
            return new Date(year, month, day);
        },
    }
    return types[type] ? types[type]() : payload;
} 
