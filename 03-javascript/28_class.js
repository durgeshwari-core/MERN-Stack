class createpencil{
    constructor(name,company,color,price){ //constructor
        this.name=name;
        this.company=company;
        this.color=color;
        this.price=price;
    }
        write(text){ //methods
            let h1 = document.createElement("h1");
            h1.textContent=text;
            h1.style.color=this.color;
            document.body.appendChild(h1);
        }
}

let p1 = new createpencil("apsara","hindustan pencils", "red",20);
let p2 = new createpencil("natraj","hindustan pencils", "blue",30)