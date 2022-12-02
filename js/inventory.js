class Inventory {
    constructor(){
        this.slotInventaire = {};
    }

    /**
     * @param {string | number} item
     */
    set addItem(item) {
        this.slotInventaire[item] = true;
    }

    /**
     * @param {string | number} item
     */
    set delete(item) {
        this.slotInventaire[item] = false;
    }

    isItemActive(item) {
        return this.slotInventaire[item] === true;
    }

    isCapoteActive() {
        return isItemActive(INVENTORIES_ITEMS.CAPOTE);
    }
    setCapoteActive() {
        add(INVENTORIES_ITEMS.CAPOTE);
    }
    gInventaire() {
        return this.slotInventaire;
    }
}

const INVENTORIES_ITEMS = {
    CAPOTE: "CAPOTE",
    CLEVOITURE: "CLEVOITURE",
    DIGUEDENTAIRE: "DIGUEDENTAIRE",
    FLYERSYMPTOMES: "FLYERSYMPTOMES",
    TELECOMMANDE: "TELECOMMANDE",
    CAPOTE: "CAPOTE"
}
