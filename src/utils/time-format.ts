export const timeFormat = (duration: number) => {
    // Hours, minutes, and seconds
    const hrs = [Math.floor(duration / 3600 / 10), Math.floor(duration / 3600) % 10];
    const mins = [Math.floor((duration % 3600) / 60 / 10), Math.floor((duration % 3600) / 60) % 10];
    const secs = [Math.floor(duration % 60 / 10), duration % 10];

    // Create and return the object
    const timeObj = {
        hours: hrs,
        minutes: mins,
        seconds: secs
    };

    return timeObj;
};

export const TimeStringFormat = (date: number): string => {
    const createdAt = new Date(date);
    const options: Intl.DateTimeFormatOptions  = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    return createdAt.toLocaleTimeString('en-US', options);
};

