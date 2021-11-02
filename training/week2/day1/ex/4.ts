interface Printable{
    printAlllFields()
}


class Domino implements Printable {
    domino=[];
    printAlllFields(){
        for(var i = 0;i < this.domino.length;i++)
        console.log(this.domino[i])
    }
}

class todo implements Printable {
    todo=[];
    printAlllFields(){
        for(var i = 0;i < this.todo.length;i++)
        console.log(this.todo[i])
    }
}