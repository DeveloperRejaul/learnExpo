/**
 *
 * @param {Number} seconds
 * @returns {String}
 */
const convertSecondsToTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const duration =
        minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
    return duration;
};
module.exports = convertSecondsToTime;
