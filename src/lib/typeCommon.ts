export type TIME_FRAME_TYPE = "hourly" | "daily" | "weekly" | "monthly";

export type CANDLE_TYPE = {
    date:   Date;
    low:    number;
    high:   number;
    volume: number;
    open:   number;
    close:  number;
}
export type CANDLE_RESPONE = {
    candles : CANDLE_TYPE[]
}