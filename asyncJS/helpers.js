export function sleep(time) {
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve('sleeping and'), time)
    )
}