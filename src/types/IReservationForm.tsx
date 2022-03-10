interface reservation {
    _id: number,
    name: string,
    phone: string,
    numberOfPeople: number,
    smoking: boolean,
    dateTime: string,
    specialRequests: string,
}

export default reservation