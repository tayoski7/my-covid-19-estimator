const covid19ImpactEstimator = (data) => {
    const input=data; {
        let data={
            region: {
            name: "Africa",
            avgAge: 19.7,
            avgDailyIncomeInUSD: 5,
            avgDailyIncomePopulation: 0.71,
            };
            periodType: "days",
            timeToElapse: 58,
            reportedCases: 674,
            population: 66622705,
            totalHospitalBeds: 1380614,
        };
    };

    //* challenge-1*//
    return {
        data,
        impact: { 
            currentlyInfected: 6740,
            infectionsByRequestedTime: 3450880,
        },
        severeImpact: {
            currentlyInfected:33700,
            infectionsByRequestedTime: 17254400,
        },
    };
    //*challenge-2*//
    return{
        data,   
        impact:{
            severeCasesByRequestedTime:517632,
            hospitalBedsByRequestedTime:862982,
        },
        severeImpact:{
            severeCasesByRequestedTime:2588160,
            hospitalBedsByRequestedTime:1207546,
        },        
    };
//*challenge-3*//
    return{
        data,
        impact:{
            casesForIcuByRequestedTime:172544,
            casesForVentilatorsByRequestedTime:69017,
            dollarsInFlight:112153,
        },
        severeImpact:{
            casesForIcuByRequestedTime:862720,
            casesForVentilatorsByRequestedTime:345088,
            dollarsInFlight:560768,
        }
    }
export default covid19ImpactEstimator;