import _ from 'lodash';

/**
 * Append a query object into the end of a url
 * @param url
 * @param paramObj
 * @returns
 */
export const appendQuery = (url: string, paramObj: Object) => {
  let finalUrl = url;
  // Picking the boolean value
  const pickTheBoolean = _.pickBy(paramObj, _.isBoolean);
  // because of the identity remove the falsy value (include false)
  // We add the false value to root obj again
  const removedEmptyVal = { ..._.pickBy(paramObj, _.identity), ...pickTheBoolean };
  Object.keys(removedEmptyVal).forEach((key, index) => {
    const val = paramObj[key as keyof typeof paramObj] as any;
    if (val !== '') {
      const startString = index === 0 ? '?' : '&';
      finalUrl += `${startString}${key}=${val}`;
    }
  });
  return finalUrl;
};
