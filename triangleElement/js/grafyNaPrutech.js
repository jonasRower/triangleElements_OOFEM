
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

        this.grafyKCE = '{"grafyKCE": [' +
                        '   {"data": ['+
                        '       {"prut": {' +
                        '           "kce": {"Ax":0,"Ay":0,"Bx":300,"By":0,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"darkBlue", "tloustkaCary":"3"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":-30,"hodnotaVpravo":-30,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"Ox":50},'+
                        '       {"Oy":130},'+
                        '       {"id":"konzolaSilaNaKonci"},' + 
                        '       {"class":""}' + 
                        '   ]},' + 

                        '   {"data": ['+
                        '       {"prut": {' +
                        '           "kce": {"Ax":0,"Ay":0,"Bx":10,"By":-7.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":10,"Ay":-7.8,"Bx":20,"By":-15.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":20,"Ay":-15.2,"Bx":30,"By":-22.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":30,"Ay":-22.2,"Bx":40,"By":-28.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":40,"Ay":-28.8,"Bx":50,"By":-35,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":50,"Ay":-35,"Bx":60,"By":-40.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":60,"Ay":-40.8,"Bx":70,"By":-46.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":70,"Ay":-46.2,"Bx":80,"By":-51.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":80,"Ay":-51.2,"Bx":90,"By":-55.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":90,"Ay":-55.8,"Bx":100,"By":-60,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":100,"Ay":-60,"Bx":110,"By":-63.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":110,"Ay":-63.8,"Bx":120,"By":-67.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":120,"Ay":-67.2,"Bx":130,"By":-70.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":130,"Ay":-70.2,"Bx":140,"By":-72.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":140,"Ay":-72.8,"Bx":150,"By":-75,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":150,"Ay":-75,"Bx":160,"By":-76.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":160,"Ay":-76.8,"Bx":170,"By":-78.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":170,"Ay":-78.2,"Bx":180,"By":-79.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":180,"Ay":-79.2,"Bx":190,"By":-79.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":190,"Ay":-79.8,"Bx":200,"By":-80,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":200,"Ay":-80,"Bx":210,"By":-79.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":210,"Ay":-79.8,"Bx":220,"By":-79.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":220,"Ay":-79.2,"Bx":230,"By":-78.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":230,"Ay":-78.2,"Bx":240,"By":-76.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":240,"Ay":-76.8,"Bx":250,"By":-75,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":250,"Ay":-75,"Bx":260,"By":-72.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":260,"Ay":-72.8,"Bx":270,"By":-70.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":270,"Ay":-70.2,"Bx":280,"By":-67.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":280,"Ay":-67.2,"Bx":290,"By":-63.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":290,"Ay":-63.8,"Bx":300,"By":-60,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":300,"Ay":-60,"Bx":310,"By":-55.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":310,"Ay":-55.8,"Bx":320,"By":-51.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":320,"Ay":-51.2,"Bx":330,"By":-46.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":330,"Ay":-46.2,"Bx":340,"By":-40.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":340,"Ay":-40.8,"Bx":350,"By":-35,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":350,"Ay":-35,"Bx":360,"By":-28.8,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":360,"Ay":-28.8,"Bx":370,"By":-22.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":370,"Ay":-22.2,"Bx":380,"By":-15.2,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":380,"Ay":-15.2,"Bx":390,"By":-7.80000000000001,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":390,"Ay":-7.80000000000001,"Bx":400,"By":0,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":200,"Ay":-70,"Bx":200,"By":-90,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":200,"Ay":50,"Bx":400,"By":50,"graf":true,"typZadaniGrafu":"nasobkyMocnin"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[80,0.15,-0.0015],"hodnotaVlevo":0,"hodnotaVpravo":30}'+
                        '       }},' +
                        '       {"Ox":50},'+
                        '       {"Oy":130},'+
                        '       {"id":"nultyStav"},' + 
                        '       {"class":"nultyStav"}' + 
                        '   ]},' + 

                        '   {"data": ['+
                        '       {"prut": {' +
                        '           "kce": {"Ax":0,"Ay":0,"Bx":20,"By":-28.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":20,"Ay":-28.5,"Bx":40,"By":-54,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":40,"Ay":-54,"Bx":60,"By":-76.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":60,"Ay":-76.5,"Bx":80,"By":-96,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":80,"Ay":-96,"Bx":100,"By":-112.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":100,"Ay":-112.5,"Bx":120,"By":-126,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":120,"Ay":-126,"Bx":140,"By":-136.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":140,"Ay":-136.5,"Bx":160,"By":-144,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":160,"Ay":-144,"Bx":180,"By":-148.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":180,"Ay":-148.5,"Bx":200,"By":-150,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":200,"Ay":-150,"Bx":220,"By":-148.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":220,"Ay":-148.5,"Bx":240,"By":-144,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":240,"Ay":-144,"Bx":260,"By":-136.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":260,"Ay":-136.5,"Bx":280,"By":-126,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":280,"Ay":-126,"Bx":300,"By":-112.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":300,"Ay":-112.5,"Bx":320,"By":-96,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":320,"Ay":-96,"Bx":340,"By":-76.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":340,"Ay":-76.5,"Bx":360,"By":-54,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":360,"Ay":-54,"Bx":380,"By":-28.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":380,"Ay":-28.5,"Bx":400,"By":0,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":0,"Ay":50,"Bx":400,"By":50,"graf":true,"typZadaniGrafu":"nasobkyMocnin"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[50,0.3,-0.00075],"hodnotaVlevo":0,"hodnotaVpravo":30}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":200,"Ay":-140,"Bx":200,"By":-160,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"Ox":50},'+
                        '       {"Oy":200},'+
                        '       {"id":"prvniStav"},' + 
                        '       {"class":"prvniStav"}' + 
                        '   ]},' + 

                        '   {"data": ['+
                        '       {"prut": {' +
                        '           "kce": {"Ax":0,"Ay":0,"Bx":20,"By":-28.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":20,"Ay":-28.5,"Bx":40,"By":-54,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":40,"Ay":-54,"Bx":60,"By":-76.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":60,"Ay":-76.5,"Bx":80,"By":-96,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":80,"Ay":-96,"Bx":100,"By":-112.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":100,"Ay":-112.5,"Bx":120,"By":-126,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":120,"Ay":-126,"Bx":140,"By":-136.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":140,"Ay":-136.5,"Bx":160,"By":-144,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":160,"Ay":-144,"Bx":180,"By":-148.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":180,"Ay":-148.5,"Bx":200,"By":-150,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":200,"Ay":-150,"Bx":220,"By":-148.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":220,"Ay":-148.5,"Bx":240,"By":-144,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":240,"Ay":-144,"Bx":260,"By":-136.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":260,"Ay":-136.5,"Bx":280,"By":-126,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":280,"Ay":-126,"Bx":300,"By":-112.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":300,"Ay":-112.5,"Bx":320,"By":-96,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":320,"Ay":-96,"Bx":340,"By":-76.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":340,"Ay":-76.5,"Bx":360,"By":-54,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":360,"Ay":-54,"Bx":380,"By":-28.5,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":380,"Ay":-28.5,"Bx":400,"By":0,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"prut": {' +
                        '           "kce": {"Ax":200,"Ay":-140,"Bx":200,"By":-160,"graf":false,"typZadaniGrafu":"krajniHodnoty", "barvaCary":"#000000", "tloustkaCary":"1"},'+
                        '           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[],"hodnotaVlevo":10,"hodnotaVpravo":20,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"1","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}'+
                        '       }},' +
                        '       {"Ox":100},'+
                        '       {"Oy":200},'+
                        '       {"id":"reakce"},' + 
                        '       {"class":"reakce"}' + 
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

        console.log(id)

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

            try {
                var ctx = c.getContext("2d");
                this.vykresliVsechnyKotyDaneKotyId(id, ctx, obj);
            }
            catch(err) {
                console.log(elementId + " nenalezen");
            }
            
        }
     
    }


    vykresliVsechnyKotyDaneKotyId(id, ctx, obj){

        var pocetPrutu;
        pocetPrutu = obj.grafyKCE[id].data.length;

        var Ox = obj.grafyKCE[id].data[pocetPrutu-4].Ox;
        var Oy = obj.grafyKCE[id].data[pocetPrutu-3].Oy;

        //vykresli vsechny pruty
        for (var i = 0; i < pocetPrutu-4; i++) {

            var Ax = obj.grafyKCE[id].data[i].prut.kce.Ax;
            var Ay = obj.grafyKCE[id].data[i].prut.kce.Ay;
            var Bx = obj.grafyKCE[id].data[i].prut.kce.Bx;
            var By = obj.grafyKCE[id].data[i].prut.kce.By;
            var graf = obj.grafyKCE[id].data[i].prut.kce.graf;
            var typZadaniGrafu = obj.grafyKCE[id].data[i].prut.kce.typZadaniGrafu;
            var delkaKrokuPriblizne = obj.grafyKCE[id].data[i].prut.graf.delkaKrokuPriblizne;
            var nasobkyMocnin = obj.grafyKCE[id].data[i].prut.graf.nasobkyMocnin;
            var hodnotaVlevo = obj.grafyKCE[id].data[i].prut.graf.hodnotaVlevo;
            var hodnotaVpravo = obj.grafyKCE[id].data[i].prut.graf.hodnotaVpravo;

            var barvaCaryPrut = obj.grafyKCE[id].data[i].prut.kce.barvaCary;
            var tloustkaCaryPrut = obj.grafyKCE[id].data[i].prut.kce.tloustkaCary;
            var barvaCarySrafy = obj.grafyKCE[id].data[i].prut.graf.barvaCarySrafy;
            var tloustkaCarySrafy = obj.grafyKCE[id].data[i].prut.graf.tloustkaCarySrafa;
            var barvaCaryGraf = obj.grafyKCE[id].data[i].prut.graf.barvaCaryGraf;
            var tloustkaCaryGraf = obj.grafyKCE[id].data[i].prut.graf.tloustkaCaryGraf;

            Ax = Ax + Ox;
            Ay = Ay + Oy;
            Bx = Bx + Ox;
            By = By + Oy;

            //je-li vypnut graf, pak se delkaKrokuPriblizne prepise na 0
            //tim se nevykresli graf prutu
            //to se prenastavi, pokud graf == false;
            if(graf == false){
                delkaKrokuPriblizne = 0; 
            }

            //kdyz je graf vypnuty, nema vyznam prepocitavat zadani
            if(graf == true){
                //je-li zadan graf pomoci krajnich hodnot, pak prepise nasobky mocnin
                if( typZadaniGrafu == "krajniHodnoty" ){
                    nasobkyMocnin = this.dopocitejNasobkyMocnin(Ax, Ay, Bx, By, hodnotaVlevo, hodnotaVpravo)
                }
            }

            var prut = new vykresliPrut(Ax, Ay, Bx, By, nasobkyMocnin, delkaKrokuPriblizne, ctx, Ox, Oy, barvaCaryPrut, tloustkaCaryPrut, barvaCarySrafy, tloustkaCarySrafy, barvaCaryGraf, tloustkaCaryGraf);
        
        }

    }


    //dopocita nasobky mocnin, pokud je pozadovanoi zadani pomoci 2 krajnich bodu
    dopocitejNasobkyMocnin(Ax, Ay, Bx, By, yA, yB){

        var delkaPrutu = Math.pow(((Ax - Bx)*(Ax - Bx) + (Ay - By)*(Ay - By)), 0.5);
        var deltaY = yB-yA;
        
        var a = deltaY/delkaPrutu;
        var b = yA;

        var nasobkyMocnin = [b, a];

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

    constructor(Ax, Ay, Bx, By, koeficientyPredMocninamiFunkce, delkaKrokuPriblizne)
    {

        this.Ax = Ax;
        this.Ay = Ay;
        this.Bx = Bx;
        this.Ny = By;

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

        console.log(this.funkcniHodnoty);
        

        //------------------------------------------------------

        //pokud prut je vodorovny, pak uvazuje ze se neprepocitavaji souradnice x a y grafu, ale vezmou se primo z funkcnich hodnot
        if((By - Ay)==0){
            funkcniHodnotyXVekt = souradniceXVekt;
            funkcniHodnotyYVekt = this.funkcniHodnoty;
        }
        else {
            funkcniHodnotyXVekt = this.vratFunkcniHodnotySouradniceX(souradniceXVekt, souradniceYVekt, koeficientyBn, this.an, this.funkcniHodnoty);
            funkcniHodnotyYVekt = this.vratFunkcniHodnotySouradniceY(funkcniHodnotyXVekt, this.an, koeficientyBn);
            //funkcniHodnotyYVekt = this.upravFunkcniHodnotyY(funkcniHodnotyYVekt, souradniceYVekt);
        }

        console.log(funkcniHodnotyXVekt);
        console.log(funkcniHodnotyYVekt);



        //nastavi pole jako clenska data
        this.souradniceXVekt = souradniceXVekt;
        this.souradniceYVekt = souradniceYVekt;
        this.funkcniHodnotyXVekt = funkcniHodnotyXVekt;
        this.funkcniHodnotyYVekt =funkcniHodnotyYVekt;

        //console.log(funkcniHodnotyXVekt);
        //console.log(funkcniHodnotyYVekt);

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

        //an ulozi do clensek promenne rovnou, bn uklada do pole
        this.an = an;

        //nize dopocitava bn pro kazdou primku zvlast
        for (var i = 0; i < souradniceXVekt.length; i++) {
            Ax = souradniceXVekt[i];
            Ay = souradniceYVekt[i];

            bn = -an*Ax + Ay;
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

            //console.log(funkcniHodnotaY);
           // console.log(souradniceY);
            //console.log(yOpravena);

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

        var vzdalXBx1;     //vzdalenost mezi prusecikem kruznice a primky  a bodem Bx - uvazuje se koren x1 
        var vzdalXBx2;     //vzdalenost mezi prusecikem kruznice a primky  a bodem Bx - uvazuje se koren x2

        a = (Math.pow(aPrimka,2))+1;
        b = 2 * aPrimka * (bPrimka - Ay) - 2 * Ax;
        c = Math.pow((bPrimka - Ay), 2) + Math.pow(Ax, 2) - Math.pow(r, 2);

        //nize resi kvadratickou rovnici
        //x = (-b +-(b2-4ac)^0.5)/2a

        Diskriminant = b*b - 4*a*c
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

        //dopocita y-souradnici, k souradnici x
        //y = aPrimka * x + bPrimka;
/*
        console.log("kkkkkkkkkk");
        console.log(aPrimka);
        console.log(bPrimka);
        console.log(Ax);
        console.log(Ay);
        console.log(r);
        console.log(x);
        console.log("kkkkkkkkkk");
*/
        return(x)

    }


}


class vykresliPrut {

    constructor(Ax, Ay, Bx, By, koeficientyPredMocninamiFunkce, delkaKrokuPriblizne, ctx, Ox, Oy, barvaCaryPrut, tloustkaCaryPrut, barvaCarySrafy, tloustkaCarySrafy, barvaCaryHranice, tloustkaCaryHranice){

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

        //definuje pole ktere uchovavaji souradnice o vykresleni grafu po elementu
        this.souradniceXVekt = [];
        this.souradniceYVekt = [];
        this.funkcniHodnotyXVekt = [];
        this.funkcniHodnotyYVekt = [];

        //nakresli prut
        this.nakresliPrut(Ax, Ay, Bx, By, ctx, barvaCaryPrut, tloustkaCaryPrut);

        
        if(delkaKrokuPriblizne > 0){

            //inicializuje tridu pro ziskani souradnic pro vykresleni grafu na elementu
            var souradniceGrafuElementu = new vypocetSouradnicGrafuPrutu(Ax, Ay, Bx, By, koeficientyPredMocninamiFunkce, delkaKrokuPriblizne)
            
            //data pro vykresleni grafu na elementu
            this.souradniceXVekt = souradniceGrafuElementu.getSouradniceXVekt();
            this.souradniceYVekt = souradniceGrafuElementu.getSouradniceYVekt();
            this.funkcniHodnotyXVekt = souradniceGrafuElementu.getFunkcniHodnotyXVekt();
            this.funkcniHodnotyYVekt = souradniceGrafuElementu.getFunkcniHodnotyYVekt();

            console.log(this.funkcniHodnotyXVekt);
            console.log(this.funkcniHodnotyYVekt);

            //nakresli hranici grafu
            this.vykreslujHraniciGrafu(this.funkcniHodnotyXVekt, this.funkcniHodnotyYVekt, ctx, barvaCaryHranice, tloustkaCaryHranice);

            //vykresluj srafy grafu
            this.vykreslujSrafyGrafu(this.souradniceXVekt, this.souradniceYVekt, this.funkcniHodnotyXVekt, this.funkcniHodnotyYVekt, ctx, barvaCarySrafy, tloustkaCarySrafy);

        }

    }

    nakresliPrut(Ax, Ay, Bx, By, ctx, barvaCary, tloustkaCary)
    {
        ctx.moveTo(Ax, Ay);
        ctx.lineTo(Bx, By);
        ctx.strokeStyle = barvaCary;
        ctx.lineWidth = tloustkaCary;
        ctx.stroke();
    }

    //vykresluje hranici grafu
    vykreslujHraniciGrafu(funkcniHodnotyXVekt, funkcniHodnotyYVekt, ctx, barvaCary, tloustkaCary)
    {

        //body hranice grafu Ax, Ay, Bx, By
        var Ax;
        var Ay;
        var Bx;
        var By;

        Ax = funkcniHodnotyXVekt[0];
        Ay = funkcniHodnotyYVekt[0];

        for (var i = 1; i < funkcniHodnotyXVekt.length; i++) {

            Bx = funkcniHodnotyXVekt[i];
            By = funkcniHodnotyYVekt[i];

            this.nakresliHraniciGrafu(Ax, Ay, Bx, By, ctx, barvaCary, tloustkaCary);

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
        ctx.moveTo(Ax , Ay + this.Oy);
        ctx.lineTo(Bx , By + this.Oy);
        ctx.strokeStyle = barvaCary;
        ctx.lineWidth = tloustkaCary;
        ctx.stroke();
    }

    nakresliCaruSrafy(Ax, Ay, Bx, By, ctx, barvaCary, tloustkaCary)
    {
        ctx.moveTo(Ax , Ay);
        ctx.lineTo(Bx , By + this.Oy);
        ctx.strokeStyle = barvaCary;
        ctx.lineWidth = tloustkaCary;
        ctx.stroke();
    }

}


$(document).ready(function() {

    var grafika = new vykresliKonstrukci();

});