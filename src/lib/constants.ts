export const navbarLinks = [
  {
    id: 1,
    label: 'Home',
    route: './'
  }
]

export type NavbarLink = {
  id: number
  label: string
  route: string
}

export type EventType = {
  id: string
  value: string
  label: string
}

export const events = [
  {
    id: "1",
    value: "12-25",
    label: "x-mas"
  },
  {
    id: "2",
    value: "01-01",
    label: "new year"
  },
  {
    id: "3",
    value: "02-14",
    label: "st. valentine's day"
  },
  {
    id: "4",
    value: "06-05",
    label: "world environment's day"
  },
  {
    id: "5",
    value: "03-08",
    label: "international women's day"
  },
  {
    id: "6",
    value: "05-01",
    label: "international workers' day"
  },
  {
    id: "7",
    value: "10-31",
    label: "halloween"
  },
]
