class Rental {

    constructor(
        id,
        itemId,
        clientId,
        startDate,
        endDate,
        returnDate,
        totalPrice,
        fine,
        status
    ) {

        this.id = id;
        this.itemId = itemId;
        this.clientId = clientId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.returnDate = returnDate;
        this.totalPrice = totalPrice;
        this.fine = fine;
        this.status = status;
    }
}

module.exports = Rental;