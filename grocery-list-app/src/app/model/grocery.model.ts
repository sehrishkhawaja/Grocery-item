export class GroceryItem {
    id: string;
    name: string;
    optionalNote: string;

    constructor(id, name, optionalNote) {
        this.name = name;
        this.optionalNote = optionalNote;
    }
}
