class Product {
    createdAt: string;
    displayName: string;
    avatar : string;
    id: string;

    constructor(createdAt: string, displayName: string, avatar: string, id: string) {
        this.createdAt = createdAt;
        this.displayName = displayName;
        this.avatar = avatar;
        this.id = id;
    }

}