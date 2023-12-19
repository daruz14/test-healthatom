export type InfoType = {
  quantity: number,
  startDate: string,
  delete: () => void
}

const data: {[name: string]: InfoType | null} = {
  'Agua': 
    {
      quantity: 4, startDate: '2021-01-02', delete: () => console.log('Se elimina el elemento')
    }
  ,
  'Pólvora': {
      quantity: 1000, startDate: '2021-01-04', delete: () => console.log('Se elimina el elemento')
    },
  'Gas': {
      quantity: 50, startDate: '2021-01-08', delete: () => console.log('Se elimina el elemento')
    },
  'Hojas (filo)': {
      quantity: 100, startDate: '2021-01-05', delete: () => console.log('Se elimina el elemento')
    },
  'Equipo maniobras': {
      quantity: 40, startDate: '2021-01-06', delete: () => console.log('Se elimina el elemento')
    }
}

export default data