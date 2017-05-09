
// this data uses flightstats.com
// the search is for  AA 434  321-Airbus A321


module.exports = {
 "request": {
  "airline": {
   "requestedCode": "AA",
   "fsCode": "AA"
  },
  "flight": {
   "requested": "434",
   "interpreted": "434"
  },
  "date": {
   "year": "2017",
   "month": "5",
   "day": "4",
   "interpreted": "2017-05-04"
  },
  "utc": {
   "requested": "false",
   "interpreted": false
  },
  "airport": {
   "requestedCode": "PHL",
   "fsCode": "PHL"
  },
  "codeType": {},
  "extendedOptions": {},
  "url": "https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/AA/434/arr/2017/5/04"
 },
 "appendix": {
  "airlines": [
   {
    "fs": "AA",
    "iata": "AA",
    "icao": "AAL",
    "name": "American Airlines",
    "phoneNumber": "08457-567-567",
    "active": true
   },
   {
    "fs": "QR",
    "iata": "QR",
    "icao": "QTR",
    "name": "Qatar Airways",
    "phoneNumber": "+1 877 777 2827",
    "active": true
   },
   {
    "fs": "AS",
    "iata": "AS",
    "icao": "ASA",
    "name": "Alaska Airlines",
    "phoneNumber": "1-800-252-7522",
    "active": true
   },
   {
    "fs": "QF",
    "iata": "QF",
    "icao": "QFA",
    "name": "Qantas",
    "phoneNumber": "+61 2 9691 3636",
    "active": true
   },
   {
    "fs": "BA",
    "iata": "BA",
    "icao": "BAW",
    "name": "British Airways",
    "phoneNumber": "1-800-AIRWAYS",
    "active": true
   }
  ],
  "airports": [
   {
    "fs": "PHL",
    "iata": "PHL",
    "icao": "KPHL",
    "faa": "PHL",
    "name": "Philadelphia International Airport",
    "street1": "Industrial Highway and Island Road",
    "city": "Philadelphia",
    "cityCode": "PHL",
    "stateCode": "PA",
    "postalCode": "19153",
    "countryCode": "US",
    "countryName": "United States",
    "regionName": "North America",
    "timeZoneRegionName": "America/New_York",
    "weatherZone": "PAZ071",
    "localTime": "2017-05-04T20:37:04.705",
    "utcOffsetHours": -4,
    "latitude": 39.876413,
    "longitude": -75.243305,
    "elevationFeet": 10,
    "classification": 1,
    "active": true,
    "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/PHL?codeType=fs",
    "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/PHL?codeType=fs"
   },
   {
    "fs": "SFO",
    "iata": "SFO",
    "icao": "KSFO",
    "faa": "SFO",
    "name": "San Francisco International Airport",
    "city": "San Francisco",
    "cityCode": "SFO",
    "stateCode": "CA",
    "postalCode": "94128",
    "countryCode": "US",
    "countryName": "United States",
    "regionName": "North America",
    "timeZoneRegionName": "America/Los_Angeles",
    "weatherZone": "CAZ508",
    "localTime": "2017-05-04T17:37:04.748",
    "utcOffsetHours": -7,
    "latitude": 37.615215,
    "longitude": -122.389881,
    "elevationFeet": 11,
    "classification": 1,
    "active": true,
    "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SFO?codeType=fs",
    "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SFO?codeType=fs"
   }
  ],
  "equipments": [
   {
    "iata": "321",
    "name": "Airbus A321",
    "turboProp": false,
    "jet": true,
    "widebody": false,
    "regional": false
   }
  ]
 },
 "flightStatuses": [
  {
   "flightId": 885866804,
   "carrierFsCode": "AA",
   "flightNumber": "434",
   "departureAirportFsCode": "SFO",
   "arrivalAirportFsCode": "PHL",
   "departureDate": {
    "dateLocal": "2017-05-03T22:40:00.000",
    "dateUtc": "2017-05-04T05:40:00.000Z"
   },
   "arrivalDate": {
    "dateLocal": "2017-05-04T07:04:00.000",
    "dateUtc": "2017-05-04T11:04:00.000Z"
   },
   "status": "L",
   "schedule": {
    "flightType": "J",
    "serviceClasses": "RJY",
    "restrictions": ""
   },
   "operationalTimes": {
    "publishedDeparture": {
     "dateLocal": "2017-05-03T22:40:00.000",
     "dateUtc": "2017-05-04T05:40:00.000Z"
    },
    "publishedArrival": {
     "dateLocal": "2017-05-04T07:04:00.000",
     "dateUtc": "2017-05-04T11:04:00.000Z"
    },
    "scheduledGateDeparture": {
     "dateLocal": "2017-05-03T22:40:00.000",
     "dateUtc": "2017-05-04T05:40:00.000Z"
    },
    "estimatedGateDeparture": {
     "dateLocal": "2017-05-03T22:38:00.000",
     "dateUtc": "2017-05-04T05:38:00.000Z"
    },
    "actualGateDeparture": {
     "dateLocal": "2017-05-03T22:38:00.000",
     "dateUtc": "2017-05-04T05:38:00.000Z"
    },
    "flightPlanPlannedDeparture": {
     "dateLocal": "2017-05-03T22:57:00.000",
     "dateUtc": "2017-05-04T05:57:00.000Z"
    },
    "estimatedRunwayDeparture": {
     "dateLocal": "2017-05-03T22:53:00.000",
     "dateUtc": "2017-05-04T05:53:00.000Z"
    },
    "actualRunwayDeparture": {
     "dateLocal": "2017-05-03T22:53:00.000",
     "dateUtc": "2017-05-04T05:53:00.000Z"
    },
    "scheduledGateArrival": {
     "dateLocal": "2017-05-04T07:04:00.000",
     "dateUtc": "2017-05-04T11:04:00.000Z"
    },
    "estimatedGateArrival": {
     "dateLocal": "2017-05-04T06:55:00.000",
     "dateUtc": "2017-05-04T10:55:00.000Z"
    },
    "actualGateArrival": {
     "dateLocal": "2017-05-04T06:55:00.000",
     "dateUtc": "2017-05-04T10:55:00.000Z"
    },
    "flightPlanPlannedArrival": {
     "dateLocal": "2017-05-04T06:57:00.000",
     "dateUtc": "2017-05-04T10:57:00.000Z"
    },
    "estimatedRunwayArrival": {
     "dateLocal": "2017-05-04T06:46:00.000",
     "dateUtc": "2017-05-04T10:46:00.000Z"
    },
    "actualRunwayArrival": {
     "dateLocal": "2017-05-04T06:46:00.000",
     "dateUtc": "2017-05-04T10:46:00.000Z"
    }
   },
   "codeshares": [
    {
     "fsCode": "AS",
     "flightNumber": "6499",
     "relationship": "L"
    },
    {
     "fsCode": "BA",
     "flightNumber": "5678",
     "relationship": "L"
    },
    {
     "fsCode": "QF",
     "flightNumber": "3047",
     "relationship": "L"
    },
    {
     "fsCode": "QR",
     "flightNumber": "5454",
     "relationship": "L"
    }
   ],
   "flightDurations": {
    "scheduledBlockMinutes": 324,
    "blockMinutes": 317,
    "scheduledAirMinutes": 300,
    "airMinutes": 293,
    "scheduledTaxiOutMinutes": 17,
    "taxiOutMinutes": 15,
    "scheduledTaxiInMinutes": 7,
    "taxiInMinutes": 9
   },
   "airportResources": {
    "departureTerminal": "2",
    "departureGate": "45A",
    "arrivalTerminal": "A",
    "arrivalGate": "13",
    "baggage": "2"
   },
   "flightEquipment": {
    "scheduledEquipmentIataCode": "321",
    "actualEquipmentIataCode": "321",
    "tailNumber": "N981UY"
   }
  }
 ]
}
