class BlogPost {
    constructor(a, b, c, d) {
        this.authorName = a;
        this.title = b;
        this.text = c;
        this.publicationDate = d;
    }
}


class Blog {
    constructor() {
        this.blogs = [];
    }
    add() {
        this.blogs.push(BlogPost)
    }
    delete(int) {
        delete this.blogs[int]
    }
    update(int, BlogPost) {
        this.blogs[int] = BlogPost
    }
}