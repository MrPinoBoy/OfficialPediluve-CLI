#!/usr/bin/env node

const { default: axios } = require("axios");
const { getCode } = require("country-list");

function getHoliday(country, year = new Date().getFullYear()) {
const countryCode = getCode(country)

const holiday = async() => {
    try {
        const response = await axios.get(`https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`)
        response.data.forEach(holyday => {
            console.log(`${holyday.date}: ${holyday.name} aka ${holyday.localName}`)
        });
    } catch (error) {
        console.error(error)
    }
}

holiday()
}
const args = process.argv.slice(2)

getHoliday(args[0], args[1])
