/**
 * @description converts an object to a query string to be send as the url for chipmonk
 * @param obj
 */

export function toQueryString(obj: {}) {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        if (Array.isArray(val)) {
            val.forEach((e) => (acc += (acc ? "&" : "") + key + "=" + e))
        } else {
            acc += (acc ? "&" : "") + key + "=" + val
        }
        return acc
    }, "")
}
