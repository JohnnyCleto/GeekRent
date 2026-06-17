// item-service/src/domain/entities/Item.js

class Item {

    constructor(data = {}) {

        this.id =
            data.id || null;

        this.owner_id =
            data.owner_id || null;

        this.title =
            data.title || '';

        this.description =
            data.description || '';

        this.category =
            data.category || '';

        this.rental_price =
            data.rental_price || 0;

        this.image_url =
            data.image_url || null;

        this.city =
            data.city || '';

        this.state =
            data.state || '';

        this.available =
            data.available ?? true;

        this.views =
            data.views || 0;

        this.created_at =
            data.created_at || null;
    }
}

module.exports = Item;