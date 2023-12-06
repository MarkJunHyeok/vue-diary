import type {DiaryType} from "~/enum/diaryType";

export interface ISortOptions {
    value: string,
    name: string
}

export interface IDiary {
    id: number,
    text: string,
    date: Date,
    type: DiaryType
}