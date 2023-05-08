export const cast = (type: string, payload: string): string | number | boolean => {
    const types: Record<string, any> = {
        number: (): number => parseInt(payload),
        boolean: (): boolean => payload === 'TRUE',
        date: (): Date => {
            const metadata: string[] = `${payload}`.split('-');
            const year: number = parseInt(metadata[0]);
            const month: number = parseInt(metadata[1]) - 1;
            const day: number = parseInt(metadata[2]);
            return new Date(year, month, day);
        },
    }
    return types[type] ? types[type]() : payload;
} 