import minimist from "minimist"

const API_KEY = process.env["API_KEY"]

const NREL_PVWATTS = "https://developer.nrel.gov/api/pvwatts/v8.json"

// Read CLI arguments into an object with keys based on the arguments.
// Unnamed arguments use the key `_`.
const argv = minimist(process.argv.slice(2))
// Log the inputs for debugging
console.info(argv, API_KEY)

// Test part goes below
