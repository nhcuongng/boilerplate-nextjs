/**
 * Help to console log something
 * @param value content will log
 */
export const helpToConsoleLog = (value: string) => console.log(value);

/**
 * Log pretify complex object
 * @param object
 * @returns
 */
export const deepLog = (object: any) => console.log(JSON.stringify(object, null, 2));
