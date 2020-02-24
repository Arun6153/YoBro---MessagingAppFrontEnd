export class Authenticate {
    public email: string;
    public id: number;
    public name:string;
    public data: any;
    constructor() { }
    load_data(): void {
        this.data = localStorage.getItem("logged_user");
        this.data = JSON.parse(this.data);
        //this.data = this.data[0];
        console.log(this.data);
    }
    set_data(): void {
        this.load_data();
        this.email = this.data.email;
        this.id = this.data.id;
        this.name = this.data.name;
        console.log("id : "+this.id);
    }
    check_user(): boolean {
        this.load_data();
        if (!this.data) return false;
        return true;
    }
    user_id():number
    {
        return this.id;
    }
    user_name():string
    {
        return this.name;
    }
    user_email():string
    {
        return this.email;
    }
}