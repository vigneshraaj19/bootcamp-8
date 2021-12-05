class movie
{
    constructor(title,studio)
    {
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
    getPG()
    {
        return this.title+ 
        this.studio+
        this.rating;
        
    }
}

var a1=new movie("casino royale","eon productions");
console.log(a1.getPG());