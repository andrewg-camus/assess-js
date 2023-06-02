# Overview

Write a program that downloads NREL PVWatts data given an address and solar PV system capacity
and that returns the monthly outputs in a CSV format. The program is run via nodejs:

```bash
node index.js --address "boulder, co" --capacity 6.5
```

The API key for NREL is read from an environment variable: `API_KEY`.

## Inputs

- "address" - the address of the system (e.g. "boulder, CO")
- "capacity" - PV capacity in kW

## Outputs

The program renders a CSV to standard output with the monthly values:

```
Month, Monthly AC system output, Monthly DC array output, Monthly solar radiation values
January, NNN.NN, NNNN.NN, NNNN.NN
February, NNN.NN, NNNN.NN, NNNN.NN
March, NNN.NN, NNNN.NN, NNNN.NN
...
December, NNN.NN, NNNN.NN, NNNN.NN
```

Format the numeric values to 2 decimal places.

## Documentation on NREL PVWatts

https://developer.nrel.gov/docs/solar/pvwatts/v8/
