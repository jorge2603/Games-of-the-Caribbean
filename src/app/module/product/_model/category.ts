export class Category {
    category_id: string;
    acronym: string;
    category: string;
    status: string;

    constructor(category_id: string, acronym: string, category: string, status: string) {
        this.category_id = category_id;
        this.acronym = acronym;
        this.category = category;
        this.status = status;
    }
}
