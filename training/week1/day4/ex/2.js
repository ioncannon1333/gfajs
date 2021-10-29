class BlogPost {
    constructor(a, b, c, d) {
        this.authorName = a;
        this.title = b;
        this.text = c;
        this.publicationDate = d;
    }
}



let obj1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04')
let obj2 = new BlogPost('Tim Urban', 'Wait but why',
    'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10')
let obj3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump',
    'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.',
    '2017.03.28')



console.log(obj1)
console.log(obj2)
console.log(obj3)