export class LocalstorageHelper {
  static has = (key: string) => {
    const val = LocalstorageHelper.get(key);
    return val !== null && val !== '';
  };

  static get = (key: string) => {
    const val = localStorage.getItem(key);
    if (!val) {
      return null;
    }
    try {
      const obj = JSON.parse(val);
      return obj;
    } catch (e) {
      return null;
    }
  };

  static getValid = (key: string, re: RegExp) => {
    const val = LocalstorageHelper.get(key);
    if (!val || typeof val !== 'string') {
      return null;
    }
    if (val.match(re)) {
      return val;
    }
    return null;
  };

  static set = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));

  static remove = (key: string) => localStorage.removeItem(key);
}

// class SessionstorageHelper {
//   static has = (key) => (SessionstorageHelper.get(key) !== null);

//   static get = (key) => {
//     const val = sessionStorage.getItem(key);
//     if (!val) {
//       return null;
//     }
//     try {
//       const obj = JSON.parse(val);
//       return obj;
//     } catch (e) {
//       return null;
//     }
//   };

//   static set = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));

//   static remove = (key) => sessionStorage.removeItem(key);
// }
