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
