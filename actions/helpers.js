export const getUPC = body => {
  switch (body) {
    case 'sport':
      return '357901'
    case 'suv':
      return '642852'
    case 'classic':
      return '315790'
    case 'atv':
      return '113342'
    case 'duneBuggy':
      return '885532'
    case 'crawlers':
      return '756643'
    default:
      return 'N/A'
  }
}

export const getModel = body => {
  switch (body) {
    case 'sport':
      return 'SPT2019'
    case 'suv':
      return 'SUV3019'
    case 'classic':
      return 'CLS4019'
    case 'atv':
      return 'ORAT2400'
    case 'duneBuggy':
      return 'ORDB3400'
    case 'crawlers':
      return 'ORCR'
    default:
      return 'N/A'
  }
}

export const priceList = {
  category: {
    street: 20,
    offRoad: 30
  },
  body: {
    sport: 5,
    suv: 5,
    classic: 5,
    atv: 5,
    duneBuggy: 5,
    crawlers: 5,
  },
  wheels: {
    regular: 3,
    fancy: 4
  },
  battery: {
    one: 10,
    two: 20
  },
  shell: {
    none: 0,
    military: 10,
    truck: 10,
  }
}

export const getTotalPrice = ({battery, body, category, wheels, shell, priceList}) => {
  return (
    priceList.battery[battery] +
    priceList.body[body] +
    priceList.category[category] +
    priceList.wheels[wheels] +
    priceList.shell[shell]
  )
}

export const spellCheck = word => {
  switch (word){
    case 'sport':
      return 'Sport'
    case 'suv':
      return 'SUV'
    case 'classic':
      return 'Classic'
    case 'atv':
      return 'ATV'
    case 'duneBuggy':
      return 'Dune Buggy'
    case 'crawlers':
      return 'Crawlers'
    case 'none':
      return 'None'
    case 'military':
      return 'Military'
    case 'truck':
      return 'Truck'
  }
}