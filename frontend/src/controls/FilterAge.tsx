export const initialAgeFilter:any = [
  {caseTitle: '10代', agesArray:[]},
  {caseTitle: '20代前半', agesArray:[]},
  {caseTitle: '20代後半', agesArray:[]},
  {caseTitle: '30代前半', agesArray:[]},
  {caseTitle: '30代後半', agesArray:[]},
  {caseTitle: '40代前半', agesArray:[]},
  {caseTitle: '40代後半', agesArray:[]},
  {caseTitle: '50代前半', agesArray:[]},
  {caseTitle: '50代後半', agesArray:[]},
  {caseTitle: '60代前半', agesArray:[]},
  {caseTitle: '60代後半', agesArray:[]},
  {caseTitle: '70代以上', agesArray:[]}
]

export const FilterAge = (users:string) => {  
  switch(users) {
    case '10代':
      initialAgeFilter[0].agesArray.push(1)
      break;
    case '20代前半':
      initialAgeFilter[1].agesArray.push(1)
      break;
    case '20代後半':
      initialAgeFilter[2].agesArray.push(1)
      break;
    case '30代前半':
      initialAgeFilter[3].agesArray.push(1)
      break;
    case '30代後半':
      initialAgeFilter[4].agesArray.push(1)
      break;
    case '40代前半':
      initialAgeFilter[5].agesArray.push(1)
      break;
    case '40代後半':
      initialAgeFilter[6].agesArray.push(1)
      break;
    case '50代前半':
      initialAgeFilter[7].agesArray.push(1)
      break;
    case '50代後半':
      initialAgeFilter[8].agesArray.push(1)
      break;
    case '60代前半':
      initialAgeFilter[9].agesArray.push(1)
      break;
    case '60代後半':
      initialAgeFilter[10].agesArray.push(1)
      break;
    case '70代以上':
      initialAgeFilter[11].agesArray.push(1)
      break;
    default:
      console.log('run')
      return null
  }
}