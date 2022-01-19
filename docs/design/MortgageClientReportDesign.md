The following is a design document for a new client summary report feature that will be made available for clients.    The following is a quick overview of the feature:

# Actors: 
## Clients
Clients are prespective home buyers or commercial property purchases who are working with brokers to get financing options.  The clients will provide the property amount, the initial down payment, the term, payment frequency and the amortization period.  From the mortgage broker they would like a summary table that includes the monthly payment and the interest information for the mortgage.

## Mortgage Brokers
Mortgage Brokers work with clients to prepare financing for different homes or properties their clients want to purchase.  After the brokers have prepared the financing, they would like to send short links to their clients to be visited in the future.   

When their clients click on the short link they are displayed a mortgage details summary table will all the mortgage information.  The following is an example of a potential example:

https://www.mortgage.io/client=jsmith&brokerId=12431321&mortgageAmount=3000000&prepaymentAmount=30000&interestAmount=2.01.....

Instead of sending all this information across in a big link ,brokers would like to send a short link that can easily texted:

https://www.mortgage.io/#$Adbed##1


# Capacity Estimation:

## Usage
Our system will be read/write heavy with about 10 reads for every 1 write.  We will assume about 50 M new mortgage applications amount so this will result in about 500M reads per month.  We can also assume that each mortgage summary will only have a life of about 3 years.

Based on the volume:
50 Million Writes:
50 million writes/ (30 days * 24 hours/day * 60 minutes * 60 seconds) = 20 writes/sec

500 Million Reads:
500 million writes/ (30 days * 24 hours/day * 60 minutes * 60 seconds) = 200 reads/sec

## Storage Capacity
If we estiamte that we will keep every mortgage application for about 3 years days.  We will need to account for 
50 Million records/ month * 3 years * 12 months/ year =  2 Billion Records

If we assume that each record will store 2 kb  of data:

2 Billion Records * 2000 bytes = 4 TB

## Memory Estimates

Estimate the amount of write traffic:

20 writes/sec * 2000 bytes = 40 kb/sec

Read Estimates
200 writes/sec * 2000 bytes = 400 kb/sec


## Cache Support
If we follow the 80 - 20 rule (that 80 of requests will come from 20% of traffic) then we should account that 20 % of daily traffic

Every day we will get : 20 reads/sec * 3600 * 24 * 2000 = 3.5 GB of cache


# API Design

## Create Mortgage Summary

URL: /mortgage-summary
Description: Creates a new short link to the mortgage
METHOD: POST
BODY: {
    "monthlyPayment": 1212.31,
    "id": "1231233213",
    "creationDate": "2022-01-16T17:44:37.784Z",
    "mortgageAmountPerMonth": 1212.31,
    "termPrincipleAmount": 10000,
    "termInterestAmount": 3000,
    "totalInterestInPeriod": 400,
    "totalAmountInPeriod": 3000,
    "brokerName":"J Smith",
    "clientName":"Bob Rose"
}

Response : {
    URL: https://www.mortgage.io/#$Adbed##1
}


URL: /mortgage-summary/{id}
Description: Updates the short link information
METHOD: PUT
BODY: {
    "monthlyPayment": 1212.31,
    "creationDate": "2022-01-16T17:44:37.784Z",
    "mortgageAmountPerMonth": 1212.31,
    "termPrincipleAmount": 10000,
    "termInterestAmount": 3000,
    "totalInterestInPeriod": 400,
    "totalAmountInPeriod": 3000,
    "brokerName":"J Smith",
    "clientName":"Bob Rose"
}

URL: /mortgage-summary/{id}
Description: Deletes the short link
METHOD: DELETE
BODY: {
}

URL: /mortgage-summary/{id}
Description: Deletes the short link
METHOD: GET
Response: {
    "monthlyPayment": 1212.31,
    "id": "1231233213",
    "creationDate": "2022-01-16T17:44:37.784Z",
    "mortgageAmountPerMonth": 1212.31,
    "termPrincipleAmount": 10000,
    "termInterestAmount": 3000,
    "totalInterestInPeriod": 400,
    "totalAmountInPeriod": 3000,
    "brokerName":"J Smith",
    "clientName":"Bob Rose"
}

# Database Design

## Key metrics
2 Billion records
read heavy


## Database Schema
URL HASH
- originalUrl: string
- creationDate: date
- expirationDate: date
- user Id

User 
- name
- userName
- email
- creationDate

## Hashing Algorithm
To determine the hashing algorithm we need to determine how many records we need to store.  2 Billion Records over a 3 year period

Encoding options:
Base32 - [a-z][A-Z]
Base62 - [a-z][A-Z][0-9]

How short a key do we want? 6, 8, 10

If we did Base32 - with 8
32^8 - 1 Trillion options.  Which should be enough

