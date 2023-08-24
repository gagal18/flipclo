
export type IWritePomodoro = {
    length: number;
    uid: string;
}

export type IPomodoro = IWritePomodoro & {
    created_at: number;
    finished: boolean;
}

export type IPomodoroUpdate = Pick<IPomodoro, "finished">
