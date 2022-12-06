
//vybere element, na ktery ukazuji mysi
class vyberElementu {

    constructor(){

        var Ax = 50;
        var Ay = 160;
        var Bx = 70;
        var By = 80;

        this.a;
        this.b;

        //spocita koeficienty "a" a "b"
        this.spocitejRovniciPrimky(Ax, Ay, Bx, By);

        var x = 60;
        var y;


        y = this.vratSouradniciYNaPrimce(x, this.a, this.b)

        console.log(y);
        

    }


    spocitejRovniciPrimky(Ax, Ay, Bx, By)
    {

        //koeficienty primky y = ax + b
        var a;
        var b;

        a = (Ay-By)/(Ax-Bx);
        b = By-Bx*a;

        this.a = a;
        this.b = b;

    }


    vratSouradniciYNaPrimce(X, a, b){

        var Y;

        Y = a*X + b;

        return(Y);

    }

}


//zacatek programu - nacte data z JSONu
$(document).ready(function(){

    var grafika = new vyberElementu();

});
