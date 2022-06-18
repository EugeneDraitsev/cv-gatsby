type Details = {
  name: string
  birthDate: string
  position: string
  location: string
}

export const formatDetails = (details: Details) => {
  const { birthDate, ...restDetails } = details

  const age = Math.floor(
    (Date.now() - new Date(birthDate).getTime()) / (1000 * 60 * 60 * 24 * 365),
  )

  return { ...restDetails, age }
}
