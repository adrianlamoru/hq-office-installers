export class HQForm {

    constructor(id = '', po = '', date = '', supervisor = '', description = '', qty = '', truck = '', location = '', warehouse = '') {
        this.id = id;
        this.po = po;
        this.date = date;
        this.supervisor = supervisor;
        this.description = description;
        this.qty = qty;
        this.truck = truck;
        this.location = location;
        this.warehouse = warehouse;

    }

    id: string;
    po: string;
    date: string;
    supervisor: string;
    description: string;
    qty: string;
    truck: string;
    location: string;
    warehouse: string;
}
