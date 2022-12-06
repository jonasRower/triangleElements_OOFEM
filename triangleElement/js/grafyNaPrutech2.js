
//#########################################################################
//               Trida pro vykreslovani konstrukce


class vykresliKonstrukci {

    constructor(){

        /*
        this.class = '{"class": {' +
                        '           "konzolaSilaNaKonci": [' +
                        '                   "konzolaSilaNaKonci1",' +
                        '                   "konzolaSilaNaKonci2",' +
                        '                   "konzolaSilaNaKonci3"' +
                        '           ],' +
                        '            "NultyStav": [' +
                        '                   "konzolaSilaNaKonci1",' +
                        '                   "konzolaSilaNaKonci2",' +
                        '                   "konzolaSilaNaKonci3"' +
                        '           ]}' +         
                        '       }'; 
        */

        this.class = '{"class": {' +
        '           "konzolaSilaNaKonci": [' +
        '                   "konzolaSilaNaKonci1"' +
        '           ]}' +    
        '       }'; 

        /*
        this.grafyKCE = '{"grafyKCE": [' +
                        '   {"data": ['+
                        '       {"prut": {' +
                        '           "kce": {"Ax":100,"Ay":0,"Bx":300,"By":10,"graf":true,"vykreslitPrut":false,"barvaCary":"darkBlue", "tloustkaCary":"3"},'+
                        '           "graf": {"delkaKrokuPriblizne":1,"nasobkyMocnin":[[0,0.5,1],[0,-100,0]],"vykreslitGraf":true,"vykreslitSrafu":false,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"Ox":50},'+
                        '       {"Oy":100},'+
                        '       {"id":"test"},' + 
                        '       {"class":""}' + 
                        '   ]}' + 
                        '   ]}';
        */

        this.grafyKCE = '{"grafyKCE": [' +
                        '  {"data": [' +
                        '     {"prut": {' +
                        '           "kce": {"Ax":0.0,"Ay":0.0,"Bx":240.0,"By":0.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3"},' +
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [0.0, -7.3499]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}' +
                        '       }},' +
                        '     {"prut": {' +
                        '           "kce": {"Ax":240.0,"Ay":0.0,"Bx":380.0,"By":0.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3"},' +
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [7.3499, -2.7756e-15]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}' +
                        '       }},' +
                        '     {"prut": {' +
                        '           "kce": {"Ax":380.0,"Ay":0.0,"Bx":580.0,"By":150.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3"},' +
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [-1.0658e-14, 37.5]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}' +
                        '       }},' +
                        '     {"prut": {' +
                        '           "kce": {"Ax":580.0,"Ay":150.0,"Bx":780.0,"By":300.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3"},' +
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [-37.5, -2.0428e-14]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}' +
                        '       }},' +
                        '     {"prut": {' +
                        '           "kce": {"Ax":240.0,"Ay":300.0,"Bx":240.0,"By":0.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3"},' +
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [-53.999, -8.8818e-15]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}' +
                        '       }},' +
                        '       {"Ox":50},' +
                        '       {"Oy":100},' +
                        '       {"meritkoGraf":0.74},' +
                        '       {"id":"test"},' +
                        '       {"class":""}' +
                        '   ]}' +
                        '   ]}';
        
        
        this.vykreslujVsechnyPruty();
        
    }


    vykreslujVsechnyPruty(){

        var obj = JSON.parse(this.grafyKCE);
        var pocetId;

        pocetId = obj.grafyKCE.length;

        //nacita koty pro jednotliva id
        for (var id = 0; id < pocetId; id++) {
            this.ZiskejDataProCanvas(id);
        }    

    }


    ZiskejDataProCanvas(id){

        var obj = JSON.parse(this.grafyKCE);

        var pocetPrutu;
        pocetPrutu = obj.grafyKCE[id].data.length;

        var elementId = obj.grafyKCE[id].data[pocetPrutu-2].id;
        if(elementId == ""){    //pokud je id "" pak nacte JSON class

            var trida = obj.grafyKCE[id].data[pocetPrutu-1].class;
            var objClass = JSON.parse(this.class);
            var vsechnaId = objClass.class[trida];

            if(vsechnaId != undefined){

                for (var i = 0; i < vsechnaId.length; i++) {

                    elementId = vsechnaId[i];
                    
                    var c = document.getElementById(elementId);
                    try {
                        var ctx = c.getContext("2d");
                        this.vykresliVsechnyKotyDaneKotyId(id, ctx, obj);
                    }
                    catch(err) {
                        console.log(elementId + " nenalezen");
                    }

                }

            }
            
        }
        else {

            var c = document.getElementById(elementId);

           // try {
                var ctx = c.getContext("2d");
                this.vykresliVsechnyKotyDaneKotyId(id, ctx, obj);
            //}
            //catch(err) {
            //    console.log(elementId + " nenalezen");
            //}
            
        }
     
    }


    vykresliVsechnyKotyDaneKotyId(id, ctx, obj){

        var pocetPrutu;
        pocetPrutu = obj.grafyKCE[id].data.length;

        var Ox = obj.grafyKCE[id].data[pocetPrutu-5].Ox;
        var Oy = obj.grafyKCE[id].data[pocetPrutu-4].Oy;
        var meritkoGraf = obj.grafyKCE[id].data[pocetPrutu-3].meritkoGraf;

        //vykresli vsechny pruty
        for (var i = 0; i < pocetPrutu-5; i++) {

            var Ax = obj.grafyKCE[id].data[i].prut.kce.Ax;
            var Ay = obj.grafyKCE[id].data[i].prut.kce.Ay;
            var Bx = obj.grafyKCE[id].data[i].prut.kce.Bx;
            var By = obj.grafyKCE[id].data[i].prut.kce.By;
            var graf = obj.grafyKCE[id].data[i].prut.kce.graf;
            var delkaKrokuPriblizne = obj.grafyKCE[id].data[i].prut.graf.delkaKrokuPriblizne;
            var nasobkyMocnin = obj.grafyKCE[id].data[i].prut.graf.nasobkyMocnin;

            var barvaCaryPrut = obj.grafyKCE[id].data[i].prut.kce.barvaCary;
            var tloustkaCaryPrut = obj.grafyKCE[id].data[i].prut.kce.tloustkaCary;
            var barvaCarySrafy = obj.grafyKCE[id].data[i].prut.graf.barvaCarySrafy;
            var tloustkaCarySrafy = obj.grafyKCE[id].data[i].prut.graf.tloustkaCarySrafa;
            var barvaCaryGraf = obj.grafyKCE[id].data[i].prut.graf.barvaCaryGraf;
            var tloustkaCaryGraf = obj.grafyKCE[id].data[i].prut.graf.tloustkaCaryGraf;

            var vykreslitGraf = obj.grafyKCE[id].data[i].prut.graf.vykreslitGraf;
            var vykreslitSrafu = obj.grafyKCE[id].data[i].prut.graf.vykreslitSrafu;
            var vykreslitPrut = obj.grafyKCE[id].data[i].prut.kce.vykreslitPrut;

            Ax = Ax + Ox;
            Ay = Ay + Oy;
            Bx = Bx + Ox;
            By = By + Oy;

            //defaultne je popis grafu vypnuty, nejsou nastaveny zadne hodnoty, jinak se data prepisuji v metode dopocitejNasobkyMocninDveHodnoty
            this.popisZacatek = ""
            this.popisKonec = ""

            //je-li vypnut graf, pak se delkaKrokuPriblizne prepise na 0
            //tim se nevykresli graf prutu
            //to se prenastavi, pokud graf == false;
            if(graf == false){
                delkaKrokuPriblizne = 0; 
            }

            //pokud se nevykresluje srafa, pak se tloustkaCarySrafy prepise na "-1", tim se cara nevykresli
            if(vykreslitSrafu == false){
                tloustkaCarySrafy = "-1";
            }

            //pokud se nevykresluje prut, pak tloustkaCary se prepise na "-1"
            if(vykreslitPrut == false){
                tloustkaCaryPrut = "-1";
            }

            //kdyz je graf vypnuty, nema vyznam prepocitavat zadani
            if(graf == true){
                nasobkyMocnin = this.dopocitejNasobkyMocnin2(Ax, Ay, Bx, By, nasobkyMocnin)
            }

            var prut = new vykresliPrut(Ax, Ay, Bx, By, nasobkyMocnin, delkaKrokuPriblizne, ctx, Ox, Oy, barvaCaryPrut, tloustkaCaryPrut, barvaCarySrafy, tloustkaCarySrafy, barvaCaryGraf, tloustkaCaryGraf, vykreslitGraf, meritkoGraf, this.popisZacatek, this.popisKonec);
        
        }

    }


    dopocitejNasobkyMocninTriHodnoty(delkaPrutu, X, Y){

        var XY = [];
        
        //1. radek soustavy rovnic
        var RadekABC = this.vratRadekSoustavyRovnicProVypocetABC(X[0]*delkaPrutu);
        XY.push(RadekABC);

        //2. radek soustavy rovnic
        var RadekABC = this.vratRadekSoustavyRovnicProVypocetABC(X[1]*delkaPrutu);
        XY.push(RadekABC);

        //3. radek soustavy rovnic
        var RadekABC = this.vratRadekSoustavyRovnicProVypocetABC(X[2]*delkaPrutu);
        XY.push(RadekABC);


        var XYinv = math.inv(XY);
        var abc = math.multiply(XYinv, Y);

        var a;
        var b;
        var c;

        a = abc[2];
        b = abc[1];
        c = abc[0];

        var vektorAbc = [a, b, c];

        return(vektorAbc);
        
    }


    vratRadekSoustavyRovnicProVypocetABC(x)
    {
        var x2 = x*x;
        var XYbod = [x2, x, 1];

        return(XYbod);
    }


    dopocitejNasobkyMocnin2(Ax, Ay, Bx, By, nasobkyMocnin){

        

        //nasobkyMocnin mohou byt ve tvaru [1,2,3] - pak se jedna o nasobky mocnin, uzivatelsky zadane
        //nebo ve tvaru [[100,200,300],[0,50,0]] - pak se jedna o souradnice x a y - zde je aproximovano parabolou
        
        //jednu nebo druhou variantu uchovava promenna jednaSeOSouradniceXY
        var jednaSeOSouradniceXY;
        var nasobkyMocninNew = [];
        jednaSeOSouradniceXY = Array.isArray(nasobkyMocnin[0])

        if(jednaSeOSouradniceXY == false){
            nasobkyMocninNew = nasobkyMocnin;
        }
        else {
            
            var X = nasobkyMocnin[0];
            var Y = nasobkyMocnin[1];

            var pocetKoeficientu;
            pocetKoeficientu = Y.length;

            

            var delkaPrutu = Math.pow(((Ax - Bx)*(Ax - Bx) + (Ay - By)*(Ay - By)), 0.5);

            if(pocetKoeficientu == 2){
                nasobkyMocninNew = this.dopocitejNasobkyMocninDveHodnoty(delkaPrutu, Y);
            }

            if(pocetKoeficientu == 3){
                nasobkyMocninNew = this.dopocitejNasobkyMocninTriHodnoty(delkaPrutu, X, Y);
            }

        }
        
        
        return(nasobkyMocninNew);

    }

    //dopocita nasobky mocnin, pokud je pozadovano zadani pomoci 2 krajnich bodu
    dopocitejNasobkyMocninDveHodnoty(delkaPrutu, Y){

        var yA = Y[0];
        var yB = Y[1];

        var deltaY = yB-yA;
        
        var a = deltaY/delkaPrutu;
        var b = yA;

        var nasobkyMocnin = [b, a];

        //dopocitava nasobky mocnin pro 3 hodnoty
        //var nasobkyMocnin = this.dopocitejNasobkyMocninTriHodnoty();

        //prepisuje data, aby mohl zobrazit popis grafu
        this.popisZacatek = yA
        this.popisKonec = yB

        return(nasobkyMocnin);

    }

};


//#########################################################################
//               Trida pro vypocitavani funkcnich hodnot na prutech

//trida vraci pole funkcnich hodnot pro dany element (prut)
//je treba zadat poradnice jako pole
// a pole koeficientu pred mocninami
class funkcniHodnotyNaElementu {

    constructor(koeficientyPredMocninamiFunkce, poradnice){

        this.funkcniHodnoty = [];

        this.koeficientyPredMocninamiFunkce = koeficientyPredMocninamiFunkce;
        this.poradnice = poradnice;

        this.funkcniHodnoty = this.vratFukcniHodnotyProPoradnice(koeficientyPredMocninamiFunkce, poradnice)

    }

    //vraci funkcni hodnoty
    getFunkcniHodnoty()
    {
        return(this.funkcniHodnoty);
    }


    vypocitejFunkcniHodnotu(mocnina, koeficient, poradnice)
    {
        var funkcniHodnota;
        funkcniHodnota = (Math.pow(poradnice, mocnina))*koeficient;

        return(funkcniHodnota);
    }


    vratFunkcniHodnotu(koeficientyPredMocninamiFunkce, poradnice)
    {

        var funkcniHodnota = 0;

        for (var i = 0; i < koeficientyPredMocninamiFunkce.length; i++) {
            var koeficient = koeficientyPredMocninamiFunkce[i];
            var mocnina = i;
            funkcniHodnota = funkcniHodnota + this.vypocitejFunkcniHodnotu(mocnina, koeficient, poradnice);
        }

    
        return(funkcniHodnota);

    }


    vratFukcniHodnotyProPoradnice(koeficientyPredMocninamiFunkce, poradnice)
    {

        var funkcniHodnoty = [];
        var funkcniHodnota;

        for (var i = 0; i < poradnice.length; i++) {
            var poradniceAktualni = poradnice[i];
            funkcniHodnota = this.vratFunkcniHodnotu(koeficientyPredMocninamiFunkce, poradniceAktualni);
            funkcniHodnoty.push(funkcniHodnota);
        }

        return(funkcniHodnoty);

    }

}

//###############################################################################################
//        Trida pro vypocitavani souradnic funkcnich hodnot pro vykreslovani grafu

//zde se dopocitavaji jednotlive souradnice vsech bodu grafu na jednom elementu
//zadaji se souradnice x,y koncu elementu, predpis funkcnich hodnot a zbytek se dopocita sam


class vypocetSouradnicGrafuPrutu {

    //spocitat c podle webu

    constructor(Ax, Ay, Bx, By, koeficientyPredMocninamiFunkce, delkaKrokuPriblizne, Oy, meritkoGraf)
    {

        this.Ax = Ax;
        this.Ay = Ay;
        this.Bx = Bx;
        this.Ny = By;
        this.Oy = Oy;
        this.meritkoGraf = meritkoGraf;

        this.delkaKroku;
        this.pocetKroku;

        this.koeficientyPredMocninamiFunkce = koeficientyPredMocninamiFunkce;
        this.delkaKrokuPriblizne = delkaKrokuPriblizne;

        //koeficienty "a" a "b" pro y=ax + b
        this.a;
        this.b;

        //koeficienty normaly
        this.an;
        //this.bn;  - koeficienty normaly jsou ulozene v poli, jelikoz kazdy koeficient lezi na jine kolmici ( prochazejici poradnici )
        
        //vrati koeficienty "a" a "b" primky
        this.spocitejRovniciPrimky(Ax, Ay, Bx, By);

        var poradnicePrutuVekt = []  // vektor s poradnicemi na prutu (prut je "rozsekan" na dilci intervaly)
        var souradniceXVekt = []     // vektor se souradnicemi X jednotlivych poradnic na prutu
        var souradniceYVekt = []     // vektor se souradnicemi Y jednotlivych poradnic na prutu
        var koeficientyBn = []       // vektor s koeficienty "b", kde kazde "b" nalezi kolmici vztycenou z X a Y dane poradnice

        var funkcniHodnotyXVekt = [] // vektor s funkcnimi hodnotami na prutu - souradnice X
        var funkcniHodnotyYVekt = [] // vektor s funkcnimi hodnotami na prutu - souradnice Y


        this.vratPocetIntervaluNaPrutu(Ax, Ay, Bx, By, this.delkaKrokuPriblizne);
        poradnicePrutuVekt = this.vratVektorSPoradnicemiNaPrutu(this.delkaKroku, this.pocetKroku);
        souradniceXVekt =  this.vratVektorXSouradnicProDaneVzdalenosti(poradnicePrutuVekt);     
        souradniceYVekt = this.vratVektorYSouradnicProDaneVzdalenosti(souradniceXVekt, this.a, this.b);
        koeficientyBn = this.vratVektorKoeficientuBn(souradniceXVekt, souradniceYVekt, this.a);
    
        
        //------------------------------------------------------
        //funkcni hodnoty bude volat a ziskavat sem:
        //var koeficientyPredMocninamiFunkce = [5, 10];
        //var poradnice = [0, 1, 2, 3, 4, 5];

        var funkcniHodnotyElement = new funkcniHodnotyNaElementu(this.koeficientyPredMocninamiFunkce, poradnicePrutuVekt);
        this.funkcniHodnoty = funkcniHodnotyElement.getFunkcniHodnoty();

        //pronasobi funkcni hodnoty meritkem
        this.funkcniHodnoty = this.pronasobFunkcniHodnotyMeritkem(this.funkcniHodnoty, this.meritkoGraf)

        //------------------------------------------------------
        
        //pokud prut je vodorovny, pak uvazuje ze se neprepocitavaji souradnice x a y grafu, ale vezmou se primo z funkcnich hodnot
        if((By - Ay)==0){
            funkcniHodnotyXVekt = souradniceXVekt;
            funkcniHodnotyYVekt = this.upravFunkcniHodnotyOy(this.funkcniHodnoty, this.Oy);
        }
        else {
            
            funkcniHodnotyXVekt = this.vratFunkcniHodnotySouradniceX(souradniceXVekt, souradniceYVekt, koeficientyBn, this.an, this.funkcniHodnoty);
            funkcniHodnotyYVekt = this.vratFunkcniHodnotySouradniceY(funkcniHodnotyXVekt, this.an, koeficientyBn);
            //funkcniHodnotyYVekt = this.upravFunkcniHodnotyY(funkcniHodnotyYVekt, souradniceYVekt);
        
            //obcas jsou hodnoty spatne, tak se zrcadli
            funkcniHodnotyXVekt = this.zrcadliSouradniceX(funkcniHodnotyXVekt, souradniceXVekt, this.Ax);
            funkcniHodnotyYVekt = this.zrcadliSouradniceY(funkcniHodnotyYVekt, souradniceYVekt, this.Ay);
        }

        //nastavi pole jako clenska data
        this.souradniceXVekt = souradniceXVekt;
        this.souradniceYVekt = souradniceYVekt;
        this.funkcniHodnotyXVekt = funkcniHodnotyXVekt;
        this.funkcniHodnotyYVekt = funkcniHodnotyYVekt;


    }


    //getry
    getSouradniceXVekt()
    {
        
        return(this.souradniceXVekt);
    };

    getSouradniceYVekt()
    {
        return(this.souradniceYVekt);
    };

    getFunkcniHodnotyXVekt()
    {
        return(this.funkcniHodnotyXVekt);
    };

    getFunkcniHodnotyYVekt()
    {
        return(this.funkcniHodnotyYVekt);
    };


    pronasobFunkcniHodnotyMeritkem(funkcniHodnoty, meritkoGraf)
    {
        var funkcniHodnota;
        var funkcniHodnotaMeritko;
        var funkcniHodnotyNew = []

        for (var i = 0; i < funkcniHodnoty.length; i++) {
            funkcniHodnota = funkcniHodnoty[i]
            funkcniHodnotaMeritko = funkcniHodnota * meritkoGraf;
            funkcniHodnotyNew.push(funkcniHodnotaMeritko);
        }    

        return(funkcniHodnotyNew)
    }


    upravFunkcniHodnotyOy(funkcniHodnoty, Oy)
    {
        var funkcniHodnota;
        var funkcniHodnotaOy;
        var funkcniHodnotyOy = [];

        for (var i = 0; i < funkcniHodnoty.length; i++) {
            funkcniHodnota = funkcniHodnoty[i];
            funkcniHodnotaOy = funkcniHodnota + Oy;
            funkcniHodnotyOy.push(funkcniHodnotaOy);
        }

        return(funkcniHodnotyOy);
    }


    //obcas je reseni v jinem kvadrantu, nez je ocekavano, tak se data prepocitavaji
    zrcadliSouradniceX(funkcniHodnotyXVekt, souradniceXVekt, Ax){

        var funkcniHodnota;
        var hodnotaX;
        var vzdalenostX;
        var hodnotaXnew;
        var funkcniHodnotyXVektNew = [];
        var X0;

        for (var i = 0; i < funkcniHodnotyXVekt.length; i++) {

            hodnotaX = funkcniHodnotyXVekt[i]

            //data se prepocitavaji, pokud funkcni hodnota je kladna, jinak ne
            funkcniHodnota = this.funkcniHodnoty[i];
            if(funkcniHodnota > 0){

                X0 = souradniceXVekt[i];

                vzdalenostX = hodnotaX - X0;
                hodnotaXnew = X0 - vzdalenostX;
                
                funkcniHodnotyXVektNew.push(hodnotaXnew);
            }
            else { //jinak zapisuje puvodni hodnotu
                funkcniHodnotyXVektNew.push(hodnotaX);
            }

        }   

        return(funkcniHodnotyXVektNew);

    }

    //zrcadli souradnice Y
    zrcadliSouradniceY(funkcniHodnotyYVekt, souradniceYVekt){

        var funkcniHodnota;
        var hodnotaY;
        var vzdalenostY;
        var hodnotaYnew;
        var funkcniHodnotyYVektNew = [];
        var Y0;

        for (var i = 0; i < funkcniHodnotyYVekt.length; i++) {

            hodnotaY = funkcniHodnotyYVekt[i];

            //data se prepocitavaji, pokud funkcni hodnota je kladna, jinak ne
            funkcniHodnota = this.funkcniHodnoty[i];

            if(funkcniHodnota > 0){
                
                Y0 = souradniceYVekt[i]; 
                vzdalenostY = hodnotaY - Y0;
                hodnotaYnew = Y0 - vzdalenostY;
                
                funkcniHodnotyYVektNew.push(hodnotaYnew);
            }
            else { //jinak zapisuje puvodni hodnotu
                funkcniHodnotyYVektNew.push(hodnotaY);
            }

            
        }   

        return(funkcniHodnotyYVektNew);

    }


    spocitejRovniciPrimky(Ax, Ay, Bx, By)
    {

        //koeficienty primky y = ax + b
        var a;
        var b;

        //smerovy vektor primky
        var u;
        var v;

        a = (Ay-By)/(Ax-Bx);
        b = By-Bx*a;

        u = 1;
        v = -a;

        this.a = a;
        this.b = b;

        this.u = u;
        this.v = v;        


    }

    vratPocetIntervaluNaPrutu(Ax, Ay, Bx, By, krokPriblizne)
    {

        var krok;
        var pocetKroku;
        var delkaPrutu = Math.pow(((Ax - Bx)*(Ax - Bx) + (Ay - By)*(Ay - By)), 0.5);

        pocetKroku = delkaPrutu / krokPriblizne;

        pocetKroku = Math.round(pocetKroku);
        krok = delkaPrutu / pocetKroku;

        this.delkaKroku = krok;
        this.pocetKroku = pocetKroku;

        return(krok);

    }

    vratVektorSPoradnicemiNaPrutu(delkaKroku, pocetKroku)
    {
        var poradnicePrutuVekt = [];
        var aktualniPoradnice = 0;

        //prida 0. poradnici
        poradnicePrutuVekt.push(aktualniPoradnice);

        for (var i = 0; i < pocetKroku; i++) {
            aktualniPoradnice = aktualniPoradnice + delkaKroku;
            poradnicePrutuVekt.push(aktualniPoradnice);
        }     

        return(poradnicePrutuVekt);
    }


    vratVektorXSouradnicProDaneVzdalenosti(vzdalenostiVektor)
    {

        var aktualniPoradnicePrutu;
        var aktualniXSouradnicePrutu;
        var souradniceXVekt = [];

        for (var i = 0; i < vzdalenostiVektor.length; i++) {
            aktualniPoradnicePrutu = vzdalenostiVektor[i];
            aktualniXSouradnicePrutu = this.spocitejSouradniciBoduNaPrimceVDaneVzdalenostiX(this.a, this.b, this.Ax, this.Ay, aktualniPoradnicePrutu, this.Bx);
            souradniceXVekt.push(aktualniXSouradnicePrutu);
        }
        
        return(souradniceXVekt);

    }


    vratVektorYSouradnicProDaneVzdalenosti(souradniceXVektor, a, b)
    {

        var aktualniSouradniceX;
        var aktualniSouradniceY;
        var souradniceYVekt = [];


        for (var i = 0; i < souradniceXVektor.length; i++) {
            aktualniSouradniceX = souradniceXVektor[i];
            aktualniSouradniceY = a * aktualniSouradniceX + b;
            //aktualniSouradniceY = 100 - aktualniSouradniceY;
            souradniceYVekt.push(aktualniSouradniceY);
        }     

        return(souradniceYVekt);

    }


    vratVektorKoeficientuBn(souradniceXVekt, souradniceYVekt, ap)
    {

        //koeficienty "a" a "b" normaly
        var an;
        var bn;

        var Ax;
        var Ay;

        var koeficientyBn = [];

        an = -1/ap;
        //an = -an;

        //an ulozi do clensek promenne rovnou, bn uklada do pole
        this.an = an;  

        //nize dopocitava bn pro kazdou primku zvlast
        for (var i = 0; i < souradniceXVekt.length; i++) {
            Ax = souradniceXVekt[i];
            Ay = souradniceYVekt[i];

            bn = -an*Ax + Ay;  // + 20;
            koeficientyBn.push(bn);

        }

        return(koeficientyBn);

    }


    vratFunkcniHodnotySouradniceX(souradniceXVekt, souradniceYVekt, koeficientyBn, an, funkcniHodnoty)
    {

        //pole kam zapisuje X-souradnice na normale (jako funkcni hodnoty)
        var funkcniHodnotyXVekt = [];

        //funkcni hodnota jako polomer kruznice
        var funkcniHodnota;

        //konkretni hodnota
        var funkcniHodnotaX;

        //Ax je bod jako prusecik prutu a normaly 
        var Ax;
        var Ay;

        //Bx je bod, aby vedel jake ma hledat reseni, zda x1, nebo x2
        var Bx = souradniceXVekt[souradniceXVekt.length];

        //koeficienty "a" a "b" normály
        //var an;   // definovano jako parametr
        var bn;     // nacita se z pole, pro kazdou normalu zvlast

        
        for (var i = 0; i < souradniceXVekt.length; i++) {

            funkcniHodnota = funkcniHodnoty[i];

            Ax = souradniceXVekt[i];
            Ay = souradniceYVekt[i];
            bn = koeficientyBn[i];

            funkcniHodnotaX = this.spocitejSouradniciBoduNaPrimceVDaneVzdalenostiX(an, bn, Ax, Ay, funkcniHodnota, Bx);
            funkcniHodnotyXVekt.push(funkcniHodnotaX);

        }

        return(funkcniHodnotyXVekt);

    }

   
    //upravuje funkcni honoty y, tak aby sedeli jako kdyz KCE neni natocena
    upravFunkcniHodnotyY(funkcniHodnotyYVekt, souradniceYVekt)
    {
        
        var yOpravena;
        var souradniceY;
        var funkcniHodnotaY;
        var funkcniHodnotyYVektNew = [];

        for (var i = 0; i < souradniceYVekt.length; i++) {
            funkcniHodnotaY = funkcniHodnotyYVekt[i];
            souradniceY = souradniceYVekt[i];
            yOpravena =  souradniceY - funkcniHodnotaY;

            funkcniHodnotyYVektNew.push(yOpravena);
        }    

        return(funkcniHodnotyYVektNew);

    }


    vratFunkcniHodnotySouradniceY(funkcniHodnotyXVekt, an, koeficientyBn)
    {

        var funkcniHodnotyYVekt = [];
        var funkcniHodnotaX;
        var funkcniHodnotaY;
        var bn;

        for (var i = 0; i < funkcniHodnotyXVekt.length; i++) {
            funkcniHodnotaX = funkcniHodnotyXVekt[i];
            bn = koeficientyBn[i];

            funkcniHodnotaY = an * funkcniHodnotaX + bn;

            //funkcniHodnotaY = an * funkcniHodnotaX + bn;
            funkcniHodnotyYVekt.push(funkcniHodnotaY);

        }

        return(funkcniHodnotyYVekt);
        
    }    


    spocitejSouradniciBoduNaPrimceVDaneVzdalenostiX(aPrimka, bPrimka, Ax, Ay, r, Bx)
    {
        //spocita kvadratickou rovnici, jejiz koreny jsou pruseciky s primkou
        //kvadraticka rovnice je ve tvaru ax2 + bx + c = 0
        //pozn. Ox a Oy jsou souradnice stredu kruznice

        //aPrimka bPrimka jsou koeficienty "a" a "b" primky
        //koeficienty "a" a "b" jsou koeficienty kruznice

        //bod Bx je predan jen z duvodu, aby rozhodl, ktery koiren je spravny
        //koren musi lezet mezi Ax a Bx
        
        var a;
        var b;
        var c;
        var x1;
        var x2;
        var x;            //uvazovany koren ktery je mezi Ax a Bx
        var Diskriminant;

        //aPrimka = -1/aPrimka;

        var xAbs;

        var vzdalXBx1;     //vzdalenost mezi prusecikem kruznice a primky  a bodem Bx - uvazuje se koren x1 
        var vzdalXBx2;     //vzdalenost mezi prusecikem kruznice a primky  a bodem Bx - uvazuje se koren x2

        a = (Math.pow(aPrimka,2))+1;
        b = 2 * aPrimka * (bPrimka - Ay) - 2 * Ax;
        c = Math.pow((bPrimka - Ay), 2) + Math.pow(Ax, 2) - Math.pow(r, 2);

        //nize resi kvadratickou rovnici
        //x = (-b +-(b2-4ac)^0.5)/2a

        Diskriminant = b*b - 4*a*c;
        x1 = (-b + Math.pow(Diskriminant, 0.5))/(2*a);
        x2 = (-b - Math.pow(Diskriminant, 0.5))/(2*a);

        vzdalXBx1 = Math.abs(x1 - Bx);
        vzdalXBx2 = Math.abs(x2 - Bx);

        //vybere ten koren, ktery je mezi Ax a Bx
        //pozna se to podle vzdalenosti x1/x2 - Bx, ta ktera je mensi, ten koren lezi v intervalu
        if(vzdalXBx2 < vzdalXBx1){
            x = x2;
        }
        else {
            x = x1;
        }

        //pokud r = 0, pak za koren se povazuje Ax
        if(r == 0){
            x = Ax;
        }

        return(x)

    }


}


class vykresliPrut {

    constructor(Ax, Ay, Bx, By, koeficientyPredMocninamiFunkce, delkaKrokuPriblizne, ctx, Ox, Oy, barvaCaryPrut, tloustkaCaryPrut, barvaCarySrafy, tloustkaCarySrafy, barvaCaryHranice, tloustkaCaryHranice, vykreslitGraf, meritkoGraf, popisZacatek, popisKonec){

        //var c = document.getElementById("myCanvas");
        ///var ctx = c.getContext("2d");
        ctx.beginPath();

        //definuje souradnice konce elementu (prutu)
        var Ax;
        var Ay;
        var Bx;
        var By;

        //posune souradnice pro vykresleni grafu na prutu O Ox a Oy (souradnice prutu jsou jiz posunuty)
        this.Ox = Ox;
        this.Oy = Oy;
        this.meritkoGraf = meritkoGraf;

        //vypise popis grafu
        this.popisZacatek = popisZacatek
        this.popisKonec = popisKonec

        //definuje pole ktere uchovavaji souradnice o vykresleni grafu po elementu
        this.souradniceXVekt = [];
        this.souradniceYVekt = [];
        this.funkcniHodnotyXVekt = [];
        this.funkcniHodnotyYVekt = [];

        this.hraniceGrafuVykresleni = [];

        //nakresli prut
        this.nakresliPrut(Ax, Ay, Bx, By, ctx, barvaCaryPrut, tloustkaCaryPrut);
        
        if(delkaKrokuPriblizne > 0){
            
            //inicializuje tridu pro ziskani souradnic pro vykresleni grafu na elementu
            var souradniceGrafuElementu = new vypocetSouradnicGrafuPrutu(Ax, Ay, Bx, By, koeficientyPredMocninamiFunkce, delkaKrokuPriblizne, this.Oy, this.meritkoGraf)
            
            //data pro vykresleni grafu na elementu
            this.souradniceXVekt = souradniceGrafuElementu.getSouradniceXVekt();
            this.souradniceYVekt = souradniceGrafuElementu.getSouradniceYVekt();
            this.funkcniHodnotyXVekt = souradniceGrafuElementu.getFunkcniHodnotyXVekt();
            this.funkcniHodnotyYVekt = souradniceGrafuElementu.getFunkcniHodnotyYVekt();

            //vrati pole true/false, podle ktereho se vykresluji jednotlive casti grafu
            this.hraniceGrafuVykresleni = this.vratTrueFalseProHraniciGrafu(vykreslitGraf, this.funkcniHodnotyXVekt.length)

            //nakresli hranici grafu
            this.vykreslujHraniciGrafu(this.funkcniHodnotyXVekt, this.funkcniHodnotyYVekt, ctx, barvaCaryHranice, tloustkaCaryHranice, this.hraniceGrafuVykresleni);

            //vykresluj srafy grafu
            this.vykreslujSrafyGrafu(this.souradniceXVekt, this.souradniceYVekt, this.funkcniHodnotyXVekt, this.funkcniHodnotyYVekt, ctx, barvaCarySrafy, tloustkaCarySrafy);

        }

    }


    //generuje pole, ktere umoznuje vykreslovat jen cast grafu
    vratTrueFalseProHraniciGrafu(vykreslitGraf, delkaPole)
    {

        //pokud je vykreslitGraf = -3, pak se dilky 1-3 nevykresli, pak 4-6 vykresli, 7-9 nevykresli, atd...
        //pokud je vykreslitGraf = +3, pak se dilky 1-3 vykresli, pak 4-6 nevykresli, 7-9 vykresli, atd...
        
        var vykresleniGrafuPole = [];
        var vykreslitGrafIndexZakladni;
        var vykreslitGrafIndex;
        var vykreslovatGraf;
        
        vykreslitGrafIndexZakladni = Math.abs(vykreslitGraf);
        vykreslitGrafIndex = vykreslitGrafIndexZakladni;

        if(Number.isInteger(vykreslitGraf) == true){

            if(vykreslitGraf < 0){
                vykreslovatGraf = false;
            }
            else {
                vykreslovatGraf = true;
            }
    
            for (var i = 0; i < delkaPole; i++) {
               
                if(i > vykreslitGrafIndex){
                    vykreslitGrafIndex = i;
                    vykreslitGrafIndex = vykreslitGrafIndex + vykreslitGrafIndexZakladni - 1;
                    if(vykreslovatGraf == false){
                        vykreslovatGraf = true;
                    }
                    else {
                        vykreslovatGraf = false;
                    }
                }
    
                vykresleniGrafuPole.push(vykreslovatGraf);
            }    
        }

        else {
            for (var i = 0; i < delkaPole; i++) {
                vykresleniGrafuPole.push(vykreslitGraf);
            }
        }

        return(vykresleniGrafuPole);

    }


    nakresliPrut(Ax, Ay, Bx, By, ctx, barvaCary, tloustkaCary)
    {
        if(tloustkaCary != "-1"){
            ctx.moveTo(Ax, Ay);
            ctx.lineTo(Bx, By);
            ctx.strokeStyle = barvaCary;
            ctx.lineWidth = tloustkaCary;
            ctx.stroke();
        }
    }

    //vykresluje hranici grafu
    vykreslujHraniciGrafu(funkcniHodnotyXVekt, funkcniHodnotyYVekt, ctx, barvaCary, tloustkaCary, hraniceGrafuVykresleni)
    {

        //body hranice grafu Ax, Ay, Bx, By
        var Ax;
        var Ay;
        var Bx;
        var By;
        var vykresleniGrafu;

        Ax = funkcniHodnotyXVekt[0];
        Ay = funkcniHodnotyYVekt[0]; 

        for (var i = 1; i < funkcniHodnotyXVekt.length; i++) {

            Bx = funkcniHodnotyXVekt[i];
            By = funkcniHodnotyYVekt[i];
            vykresleniGrafu = hraniceGrafuVykresleni[i];

            //popise hodnoty na grafu
            if(i == 1){
                this.vlozpopis(this.popisZacatek, Bx, By, ctx);
            }

            if(i == funkcniHodnotyXVekt.length-1){
                this.vlozpopis(this.popisKonec, Bx, By, ctx);
            }

            if(vykresleniGrafu == true){
                this.nakresliHraniciGrafu(Ax, Ay, Bx, By, ctx, barvaCary, tloustkaCary);
            }
            
            Ax = Bx;
            Ay = By;

        }

    }

    //vykresluje srafy grafu
    vykreslujSrafyGrafu(souradniceXVekt, souradniceYVekt, funkcniHodnotyXVekt, funkcniHodnotyYVekt, ctx, barvaCary, tloustkaCary)
    {

        //body jedne cary-srafy grafu Ax, Ay, Bx, By
        var Ax;
        var Ay;
        var Bx;
        var By;

        for (var i = 0; i < funkcniHodnotyXVekt.length; i++) {
            Ax = souradniceXVekt[i];
            Ay = souradniceYVekt[i];
            Bx = funkcniHodnotyXVekt[i];
            By = funkcniHodnotyYVekt[i];

            this.nakresliCaruSrafy(Ax, Ay, Bx, By, ctx, barvaCary, tloustkaCary);
        }    

    }

    nakresliHraniciGrafu(Ax, Ay, Bx, By, ctx, barvaCary, tloustkaCary)
    {
        if(tloustkaCary != "-1"){
            ctx.moveTo(Ax , Ay);
            ctx.lineTo(Bx , By);

            ctx.strokeStyle = barvaCary;
            ctx.lineWidth = tloustkaCary;
            ctx.stroke();
        }
    }

    nakresliCaruSrafy(Ax, Ay, Bx, By, ctx, barvaCary, tloustkaCary)
    {
        if(tloustkaCary != "-1"){

            ctx.moveTo(Ax , Ay);
            ctx.lineTo(Bx , By);
    
            ctx.strokeStyle = barvaCary;
            ctx.lineWidth = tloustkaCary;
            ctx.stroke();

        }
    }

    //popisuje hodnoty grafu
    vlozpopis(text, textX, textY, ctx){
       
        ctx.fillStyle = "black";
        ctx.font = "15px Arial";
        ctx.fillText(text, textX, textY);

    }

}


$(document).ready(function() {

    var grafika = new vykresliKonstrukci();

});