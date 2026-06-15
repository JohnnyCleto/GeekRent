class Item {

    constructor(
        id,
        ownerId,
        title,
        description,
        category,
        rentalPrice,
        available
    ) {

        this.id = id;
        this.ownerId = ownerId;
        this.title = title;
        this.description = description;
        this.category = category;
        this.rentalPrice = rentalPrice;
        this.available = available;

    }

}

module.exports = Item;