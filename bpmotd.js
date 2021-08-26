'use strict';

const { createHash } = require('crypto');

const sha256 = (input) =>
    createHash('sha256').update(input).digest('hex');

const toUniformFloat = (input) =>
    parseInt(sha256(input).slice(0, 4), 16) / 0x10000;

const getCurrentDate = () =>
    (new Date()).toISOString().replace(/T.*/, '');

/**
 * Generate a tempo in beats per minute (BPM) for the given ISO 8601 date.
 * The result will be an integer uniformly distributed in the range [80, 160).
 */
const getBPMForDay = (day) =>
    Math.floor(80 * (1 + toUniformFloat(day)));

/**
 * Generate a tempo in beats per minute (BPM) for today (UTC offset zero).
 * The result will be an integer uniformly distributed in the range [80, 160).
 */
const getBPMForToday = () =>
    getBPMForDay(getCurrentDate());

module.exports = {
    getBPMForDay,
    getBPMForToday,
};
