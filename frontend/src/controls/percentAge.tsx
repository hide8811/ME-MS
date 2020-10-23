export const ageFilterArray:any = {
  age10:[],
  age20:[],
  age25:[],
  age30:[],
  age35:[],
  age40:[],
  age45:[],
  age50:[],
  age55:[],
  age60:[],
  age65:[],
  age70:[],
}

const ageFilter = (users:string) => {  
  switch(users) {
    case '10代':
      ageFilterArray.age10.push(1)
      break;
    case '20代前半':
      ageFilterArray.age20.push(1)
      break;
    case '20代後半':
      ageFilterArray.age25.push(1)
      break;
    case '30代前半':
      ageFilterArray.age30.push(1)
      break;
    case '30代後半':
      ageFilterArray.age35.push(1)
      break;
    case '40代前半':
      ageFilterArray.age40.push(1)
      break;
    case '40代後半':
      ageFilterArray.age45.push(1)
      break;
    case '50代前半':
      ageFilterArray.age50.push(1)
      break;
    case '50代後半':
      ageFilterArray.age55.push(1)
      break;
    case '60代前半':
      ageFilterArray.age60.push(1)
      break;
    case '60代後半':
      ageFilterArray.age65.push(1)
      break;
    case '70代以上':
      ageFilterArray.age70.push(1)
      break;
    default:
      return 0
  }
}

export default ageFilter