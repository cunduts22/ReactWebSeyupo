const getCurrentLocation = (options) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            resolve,
            ({
                code,
                message
            }) => reject(Object.assign(new Error(message), {
                name: 'Position Error',
                code
            })), options)
    })
}
const inout = async (options) => {
    try {
        return await getCurrentLocation(options)
    } catch (error) {
        return await error
    }
}

export {
    inout
}