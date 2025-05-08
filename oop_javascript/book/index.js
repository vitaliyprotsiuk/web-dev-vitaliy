class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    };

    read() {
        console.log(`Reading book ${this.title} which was written by ${this.author}`);
    };
};

radiance = new Book('Radiance', 'Stiven King');

radiance.read();