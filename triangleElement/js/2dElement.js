

class elementy {

    constructor(){

        //ukládá všechna data, aby je mohl porovnávat se souřadnicí myši
        this.vsechnySouradnice = [];
        this.vsechnyCislaElementu = [];
        this.vsechnaCislaVrcholu = [];
        this.vsechnyBarvy = [];
        this.vsechnyHodnotyVrcholu = [];
        this.vsechnyHodnotyElementu = [];
        this.vsechnyBarvyCarElementu = [];
        this.vsechnytloustkyCarElementu = [];

        //aby detekoval na jakem elementu se nachazi kurzor mysi, je potreba ziskat pole vsech usecek
        this.poleVsechUsecek = [];
        this.abPole = [];

        //aby zobrazoval spravna cisla uzlu, je treba aby je seskupil do pole
        this.poleVsechUzlu = [];


        this.class = '{"class": {' +
        '           "konzolaSilaNaKonci": [' +
        '                   "konzolaSilaNaKonci1"' +
        '           ]}' +    
        '       }'; 

        this.elementy = '{"elementy": [' +
                        '{"data":' +
                        '{"element": [' +
                                '{"Souradnice":[[100.0, 20.0], [100.0, 0.0], [120.0, 0.0]],"cisloElementu":0,"barva":"hsl(350, 100%, 50%)","OznaceniVrcholu":[60.0, 1.0, 5.0],"HodnotyVrcholu":[1.0, 1.0, 0.78091241],"HodnotaElementu":0.9269708033333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 0.0], [120.0, 20.0], [100.0, 20.0]],"cisloElementu":1,"barva":"hsl(342, 100%, 50%)","OznaceniVrcholu":[5.0, 61.0, 60.0],"HodnotyVrcholu":[0.78091241, 0.787892622, 1.0],"HodnotaElementu":0.8562683440000001,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 20.0], [120.0, 0.0], [140.0, 0.0]],"cisloElementu":2,"barva":"hsl(331, 100%, 50%)","OznaceniVrcholu":[61.0, 5.0, 6.0],"HodnotyVrcholu":[0.787892622, 0.78091241, 0.679427243],"HodnotaElementu":0.7494107583333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 0.0], [140.0, 20.0], [120.0, 20.0]],"cisloElementu":3,"barva":"hsl(327, 100%, 50%)","OznaceniVrcholu":[6.0, 62.0, 61.0],"HodnotyVrcholu":[0.679427243, 0.681921019, 0.787892622],"HodnotaElementu":0.7164136280000001,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 20.0], [140.0, 0.0], [160.0, 0.0]],"cisloElementu":4,"barva":"hsl(320, 100%, 50%)","OznaceniVrcholu":[62.0, 6.0, 7.0],"HodnotyVrcholu":[0.681921019, 0.679427243, 0.601686228],"HodnotaElementu":0.65434483,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 0.0], [160.0, 20.0], [140.0, 20.0]],"cisloElementu":5,"barva":"hsl(318, 100%, 50%)","OznaceniVrcholu":[7.0, 63.0, 62.0],"HodnotyVrcholu":[0.601686228, 0.602928678, 0.681921019],"HodnotaElementu":0.6288453083333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 20.0], [160.0, 0.0], [180.0, 0.0]],"cisloElementu":6,"barva":"hsl(312, 100%, 50%)","OznaceniVrcholu":[63.0, 7.0, 8.0],"HodnotyVrcholu":[0.602928678, 0.601686228, 0.539077652],"HodnotaElementu":0.5812308526666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 0.0], [180.0, 20.0], [160.0, 20.0]],"cisloElementu":7,"barva":"hsl(310, 100%, 50%)","OznaceniVrcholu":[8.0, 64.0, 63.0],"HodnotyVrcholu":[0.539077652, 0.539862727, 0.602928678],"HodnotaElementu":0.560623019,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 20.0], [180.0, 0.0], [200.0, 0.0]],"cisloElementu":8,"barva":"hsl(306, 100%, 50%)","OznaceniVrcholu":[64.0, 8.0, 9.0],"HodnotyVrcholu":[0.539862727, 0.539077652, 0.487891481],"HodnotaElementu":0.5222772866666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 0.0], [200.0, 20.0], [180.0, 20.0]],"cisloElementu":9,"barva":"hsl(304, 100%, 50%)","OznaceniVrcholu":[9.0, 65.0, 64.0],"HodnotyVrcholu":[0.487891481, 0.488420244, 0.539862727],"HodnotaElementu":0.505391484,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 20.0], [200.0, 0.0], [220.00000000000003, 0.0]],"cisloElementu":10,"barva":"hsl(301, 100%, 50%)","OznaceniVrcholu":[65.0, 9.0, 10.0],"HodnotyVrcholu":[0.488420244, 0.487891481, 0.445382933],"HodnotaElementu":0.47389821933333326,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 0.0], [220.00000000000003, 20.0], [200.0, 20.0]],"cisloElementu":11,"barva":"hsl(299, 100%, 50%)","OznaceniVrcholu":[10.0, 66.0, 65.0],"HodnotyVrcholu":[0.445382933, 0.445750662, 0.488420244],"HodnotaElementu":0.45985127966666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 20.0], [220.00000000000003, 0.0], [240.0, 0.0]],"cisloElementu":12,"barva":"hsl(297, 100%, 50%)","OznaceniVrcholu":[66.0, 10.0, 11.0],"HodnotyVrcholu":[0.445750662, 0.445382933, 0.409569247],"HodnotaElementu":0.433567614,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 0.0], [240.0, 20.0], [220.00000000000003, 20.0]],"cisloElementu":13,"barva":"hsl(295, 100%, 50%)","OznaceniVrcholu":[11.0, 67.0, 66.0],"HodnotyVrcholu":[0.409569247, 0.409832748, 0.445750662],"HodnotaElementu":0.42171755233333336,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 20.0], [240.0, 0.0], [260.0, 0.0]],"cisloElementu":14,"barva":"hsl(293, 100%, 50%)","OznaceniVrcholu":[67.0, 11.0, 12.0],"HodnotyVrcholu":[0.409832748, 0.409569247, 0.379012241],"HodnotaElementu":0.399471412,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 0.0], [260.0, 20.0], [240.0, 20.0]],"cisloElementu":15,"barva":"hsl(292, 100%, 50%)","OznaceniVrcholu":[12.0, 68.0, 67.0],"HodnotyVrcholu":[0.379012241, 0.379206357, 0.409832748],"HodnotaElementu":0.3893504486666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 20.0], [260.0, 0.0], [280.0, 0.0]],"cisloElementu":16,"barva":"hsl(290, 100%, 50%)","OznaceniVrcholu":[68.0, 12.0, 13.0],"HodnotyVrcholu":[0.379206357, 0.379012241, 0.352650095],"HodnotaElementu":0.3702895643333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 0.0], [280.0, 20.0], [260.0, 20.0]],"cisloElementu":17,"barva":"hsl(289, 100%, 50%)","OznaceniVrcholu":[13.0, 69.0, 68.0],"HodnotyVrcholu":[0.352650095, 0.352796415, 0.379206357],"HodnotaElementu":0.3615509556666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 20.0], [280.0, 0.0], [300.0, 0.0]],"cisloElementu":18,"barva":"hsl(287, 100%, 50%)","OznaceniVrcholu":[69.0, 13.0, 14.0],"HodnotyVrcholu":[0.352796415, 0.352650095, 0.329684192],"HodnotaElementu":0.34504356733333336,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 0.0], [300.0, 20.0], [280.0, 20.0]],"cisloElementu":19,"barva":"hsl(286, 100%, 50%)","OznaceniVrcholu":[14.0, 70.0, 69.0],"HodnotyVrcholu":[0.329684192, 0.329796521, 0.352796415],"HodnotaElementu":0.3374257093333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 20.0], [300.0, 0.0], [320.0, 0.0]],"cisloElementu":20,"barva":"hsl(285, 100%, 50%)","OznaceniVrcholu":[70.0, 14.0, 15.0],"HodnotyVrcholu":[0.329796521, 0.329684192, 0.30950364],"HodnotaElementu":0.32299478433333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 0.0], [320.0, 20.0], [300.0, 20.0]],"cisloElementu":21,"barva":"hsl(284, 100%, 50%)","OznaceniVrcholu":[15.0, 71.0, 70.0],"HodnotyVrcholu":[0.30950364, 0.309591119, 0.329796521],"HodnotaElementu":0.31629709333333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 20.0], [320.0, 0.0], [340.0, 0.0]],"cisloElementu":22,"barva":"hsl(283, 100%, 50%)","OznaceniVrcholu":[71.0, 15.0, 16.0],"HodnotyVrcholu":[0.309591119, 0.30950364, 0.291633938],"HodnotaElementu":0.3035762323333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 0.0], [340.0, 20.0], [320.0, 20.0]],"cisloElementu":23,"barva":"hsl(282, 100%, 50%)","OznaceniVrcholu":[16.0, 72.0, 71.0],"HodnotyVrcholu":[0.291633938, 0.291702819, 0.309591119],"HodnotaElementu":0.29764262533333335,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 20.0], [340.0, 0.0], [360.0, 0.0]],"cisloElementu":24,"barva":"hsl(281, 100%, 50%)","OznaceniVrcholu":[72.0, 16.0, 17.0],"HodnotyVrcholu":[0.291702819, 0.291633938, 0.275701204],"HodnotaElementu":0.28634598699999997,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 0.0], [360.0, 20.0], [340.0, 20.0]],"cisloElementu":25,"barva":"hsl(280, 100%, 50%)","OznaceniVrcholu":[17.0, 73.0, 72.0],"HodnotyVrcholu":[0.275701204, 0.275755897, 0.291702819],"HodnotaElementu":0.28105330666666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 20.0], [360.0, 0.0], [380.0, 0.0]],"cisloElementu":26,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[73.0, 17.0, 18.0],"HodnotyVrcholu":[0.275755897, 0.275701204, 0.26140665],"HodnotaElementu":0.2709545836666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 0.0], [380.0, 20.0], [360.0, 20.0]],"cisloElementu":27,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[18.0, 74.0, 73.0],"HodnotyVrcholu":[0.26140665, 0.261450394, 0.275755897],"HodnotaElementu":0.2662043136666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 20.0], [380.0, 0.0], [400.0, 0.0]],"cisloElementu":28,"barva":"hsl(278, 100%, 50%)","OznaceniVrcholu":[74.0, 18.0, 19.0],"HodnotyVrcholu":[0.261450394, 0.26140665, 0.248507818],"HodnotaElementu":0.25712162066666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 0.0], [400.0, 20.0], [380.0, 20.0]],"cisloElementu":29,"barva":"hsl(277, 100%, 50%)","OznaceniVrcholu":[19.0, 75.0, 74.0],"HodnotyVrcholu":[0.248507818, 0.248542988, 0.261450394],"HodnotaElementu":0.2528337333333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 20.0], [400.0, 0.0], [420.0, 0.0]],"cisloElementu":30,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[75.0, 19.0, 20.0],"HodnotyVrcholu":[0.248542988, 0.248507818, 0.236805237],"HodnotaElementu":0.24461868099999998,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 0.0], [420.0, 20.0], [400.0, 20.0]],"cisloElementu":31,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[20.0, 76.0, 75.0],"HodnotyVrcholu":[0.236805237, 0.236831883, 0.248542988],"HodnotaElementu":0.24072670266666665,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 20.0], [420.0, 0.0], [440.00000000000006, 0.0]],"cisloElementu":32,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[76.0, 20.0, 21.0],"HodnotyVrcholu":[0.236831883, 0.236805237, 0.226145318],"HodnotaElementu":0.23326081266666668,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 0.0], [440.00000000000006, 20.0], [420.0, 20.0]],"cisloElementu":33,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[21.0, 77.0, 76.0],"HodnotyVrcholu":[0.226145318, 0.226149303, 0.236831883],"HodnotaElementu":0.22970883466666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 20.0], [440.00000000000006, 0.0], [459.99999999999994, 0.0]],"cisloElementu":34,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[77.0, 21.0, 22.0],"HodnotyVrcholu":[0.226149303, 0.226145318, 0.216534112],"HodnotaElementu":0.222942911,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 0.0], [459.99999999999994, 20.0], [440.00000000000006, 20.0]],"cisloElementu":35,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[22.0, 78.0, 77.0],"HodnotyVrcholu":[0.216534112, 0.21643647, 0.226149303],"HodnotaElementu":0.21970662833333332,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 20.0], [459.99999999999994, 0.0], [480.0, 0.0]],"cisloElementu":36,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[78.0, 22.0, 23.0],"HodnotyVrcholu":[0.21643647, 0.216534112, 0.208949966],"HodnotaElementu":0.213973516,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 0.0], [480.0, 20.0], [459.99999999999994, 20.0]],"cisloElementu":37,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[23.0, 79.0, 78.0],"HodnotyVrcholu":[0.208949966, 0.208576925, 0.21643647],"HodnotaElementu":0.2113211203333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 20.0], [480.0, 0.0], [500.0, 0.0]],"cisloElementu":38,"barva":"hsl(272, 100%, 50%)","OznaceniVrcholu":[79.0, 23.0, 2.0],"HodnotyVrcholu":[0.208576925, 0.208949966, 0.209916947],"HodnotaElementu":0.20914794599999997,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[500.0, 0.0], [500.0, 20.0], [480.0, 20.0]],"cisloElementu":39,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[2.0, 24.0, 79.0],"HodnotyVrcholu":[0.209916947, 0.211170805, 0.208576925],"HodnotaElementu":0.20988822566666665,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[100.0, 40.0], [100.0, 20.0], [120.0, 20.0]],"cisloElementu":40,"barva":"hsl(350, 100%, 50%)","OznaceniVrcholu":[59.0, 60.0, 61.0],"HodnotyVrcholu":[1.0, 1.0, 0.787892622],"HodnotaElementu":0.9292975406666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 20.0], [120.0, 40.0], [100.0, 40.0]],"cisloElementu":41,"barva":"hsl(342, 100%, 50%)","OznaceniVrcholu":[61.0, 80.0, 59.0],"HodnotyVrcholu":[0.787892622, 0.789100555, 1.0],"HodnotaElementu":0.8589977256666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 40.0], [120.0, 20.0], [140.0, 20.0]],"cisloElementu":42,"barva":"hsl(331, 100%, 50%)","OznaceniVrcholu":[80.0, 61.0, 62.0],"HodnotyVrcholu":[0.789100555, 0.787892622, 0.681921019],"HodnotaElementu":0.7529713986666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 20.0], [140.0, 40.0], [120.0, 40.0]],"cisloElementu":43,"barva":"hsl(327, 100%, 50%)","OznaceniVrcholu":[62.0, 81.0, 80.0],"HodnotyVrcholu":[0.681921019, 0.682735958, 0.789100555],"HodnotaElementu":0.7179191773333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 40.0], [140.0, 20.0], [160.0, 20.0]],"cisloElementu":44,"barva":"hsl(321, 100%, 50%)","OznaceniVrcholu":[81.0, 62.0, 63.0],"HodnotyVrcholu":[0.682735958, 0.681921019, 0.602928678],"HodnotaElementu":0.6558618850000001,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 20.0], [160.0, 40.0], [140.0, 40.0]],"cisloElementu":45,"barva":"hsl(318, 100%, 50%)","OznaceniVrcholu":[63.0, 82.0, 81.0],"HodnotyVrcholu":[0.602928678, 0.60356243, 0.682735958],"HodnotaElementu":0.6297423553333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 40.0], [160.0, 20.0], [180.0, 20.0]],"cisloElementu":46,"barva":"hsl(313, 100%, 50%)","OznaceniVrcholu":[82.0, 63.0, 64.0],"HodnotyVrcholu":[0.60356243, 0.602928678, 0.539862727],"HodnotaElementu":0.582117945,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 20.0], [180.0, 40.0], [160.0, 40.0]],"cisloElementu":47,"barva":"hsl(310, 100%, 50%)","OznaceniVrcholu":[64.0, 83.0, 82.0],"HodnotyVrcholu":[0.539862727, 0.540368362, 0.60356243],"HodnotaElementu":0.5612645063333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 40.0], [180.0, 20.0], [200.0, 20.0]],"cisloElementu":48,"barva":"hsl(306, 100%, 50%)","OznaceniVrcholu":[83.0, 64.0, 65.0],"HodnotyVrcholu":[0.540368362, 0.539862727, 0.488420244],"HodnotaElementu":0.5228837776666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 20.0], [200.0, 40.0], [180.0, 40.0]],"cisloElementu":49,"barva":"hsl(304, 100%, 50%)","OznaceniVrcholu":[65.0, 84.0, 83.0],"HodnotyVrcholu":[0.488420244, 0.488811067, 0.540368362],"HodnotaElementu":0.5058665576666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 40.0], [200.0, 20.0], [220.00000000000003, 20.0]],"cisloElementu":50,"barva":"hsl(301, 100%, 50%)","OznaceniVrcholu":[84.0, 65.0, 66.0],"HodnotyVrcholu":[0.488811067, 0.488420244, 0.445750662],"HodnotaElementu":0.4743273243333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 20.0], [220.00000000000003, 40.0], [200.0, 40.0]],"cisloElementu":51,"barva":"hsl(299, 100%, 50%)","OznaceniVrcholu":[66.0, 85.0, 84.0],"HodnotyVrcholu":[0.445750662, 0.44604894, 0.488811067],"HodnotaElementu":0.4602035563333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 40.0], [220.00000000000003, 20.0], [240.0, 20.0]],"cisloElementu":52,"barva":"hsl(297, 100%, 50%)","OznaceniVrcholu":[85.0, 66.0, 67.0],"HodnotyVrcholu":[0.44604894, 0.445750662, 0.409832748],"HodnotaElementu":0.43387745000000005,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 20.0], [240.0, 40.0], [220.00000000000003, 40.0]],"cisloElementu":53,"barva":"hsl(295, 100%, 50%)","OznaceniVrcholu":[67.0, 86.0, 85.0],"HodnotyVrcholu":[0.409832748, 0.410061814, 0.44604894],"HodnotaElementu":0.42198116733333335,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 40.0], [240.0, 20.0], [260.0, 20.0]],"cisloElementu":54,"barva":"hsl(293, 100%, 50%)","OznaceniVrcholu":[86.0, 67.0, 68.0],"HodnotyVrcholu":[0.410061814, 0.409832748, 0.379206357],"HodnotaElementu":0.3997003063333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 20.0], [260.0, 40.0], [240.0, 40.0]],"cisloElementu":55,"barva":"hsl(292, 100%, 50%)","OznaceniVrcholu":[68.0, 87.0, 86.0],"HodnotyVrcholu":[0.379206357, 0.379384556, 0.410061814],"HodnotaElementu":0.389550909,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 40.0], [260.0, 20.0], [280.0, 20.0]],"cisloElementu":56,"barva":"hsl(290, 100%, 50%)","OznaceniVrcholu":[87.0, 68.0, 69.0],"HodnotyVrcholu":[0.379384556, 0.379206357, 0.352796415],"HodnotaElementu":0.37046244266666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 20.0], [280.0, 40.0], [260.0, 40.0]],"cisloElementu":57,"barva":"hsl(289, 100%, 50%)","OznaceniVrcholu":[69.0, 88.0, 87.0],"HodnotyVrcholu":[0.352796415, 0.352936649, 0.379384556],"HodnotaElementu":0.3617058733333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 40.0], [280.0, 20.0], [300.0, 20.0]],"cisloElementu":58,"barva":"hsl(287, 100%, 50%)","OznaceniVrcholu":[88.0, 69.0, 70.0],"HodnotyVrcholu":[0.352936649, 0.352796415, 0.329796521],"HodnotaElementu":0.3451765283333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 20.0], [300.0, 40.0], [280.0, 40.0]],"cisloElementu":59,"barva":"hsl(286, 100%, 50%)","OznaceniVrcholu":[70.0, 89.0, 88.0],"HodnotyVrcholu":[0.329796521, 0.329907727, 0.352936649],"HodnotaElementu":0.3375469656666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 40.0], [300.0, 20.0], [320.0, 20.0]],"cisloElementu":60,"barva":"hsl(285, 100%, 50%)","OznaceniVrcholu":[89.0, 70.0, 71.0],"HodnotyVrcholu":[0.329907727, 0.329796521, 0.309591119],"HodnotaElementu":0.3230984556666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 20.0], [320.0, 40.0], [300.0, 40.0]],"cisloElementu":61,"barva":"hsl(284, 100%, 50%)","OznaceniVrcholu":[71.0, 90.0, 89.0],"HodnotyVrcholu":[0.309591119, 0.309679622, 0.329907727],"HodnotaElementu":0.31639282266666663,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 40.0], [320.0, 20.0], [340.0, 20.0]],"cisloElementu":62,"barva":"hsl(283, 100%, 50%)","OznaceniVrcholu":[90.0, 71.0, 72.0],"HodnotyVrcholu":[0.309679622, 0.309591119, 0.291702819],"HodnotaElementu":0.30365785333333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 20.0], [340.0, 40.0], [320.0, 40.0]],"cisloElementu":63,"barva":"hsl(282, 100%, 50%)","OznaceniVrcholu":[72.0, 91.0, 90.0],"HodnotyVrcholu":[0.291702819, 0.291773191, 0.309679622],"HodnotaElementu":0.29771854400000003,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 40.0], [340.0, 20.0], [360.0, 20.0]],"cisloElementu":64,"barva":"hsl(281, 100%, 50%)","OznaceniVrcholu":[91.0, 72.0, 73.0],"HodnotyVrcholu":[0.291773191, 0.291702819, 0.275755897],"HodnotaElementu":0.2864106356666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 20.0], [360.0, 40.0], [340.0, 40.0]],"cisloElementu":65,"barva":"hsl(280, 100%, 50%)","OznaceniVrcholu":[73.0, 92.0, 91.0],"HodnotyVrcholu":[0.275755897, 0.275811513, 0.291773191],"HodnotaElementu":0.2811135336666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 40.0], [360.0, 20.0], [380.0, 20.0]],"cisloElementu":66,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[92.0, 73.0, 74.0],"HodnotyVrcholu":[0.275811513, 0.275755897, 0.261450394],"HodnotaElementu":0.27100593466666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 20.0], [380.0, 40.0], [360.0, 40.0]],"cisloElementu":67,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[74.0, 93.0, 92.0],"HodnotyVrcholu":[0.261450394, 0.261493937, 0.275811513],"HodnotaElementu":0.266251948,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 40.0], [380.0, 20.0], [400.0, 20.0]],"cisloElementu":68,"barva":"hsl(278, 100%, 50%)","OznaceniVrcholu":[93.0, 74.0, 75.0],"HodnotyVrcholu":[0.261493937, 0.261450394, 0.248542988],"HodnotaElementu":0.25716243966666663,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 20.0], [400.0, 40.0], [380.0, 40.0]],"cisloElementu":69,"barva":"hsl(277, 100%, 50%)","OznaceniVrcholu":[75.0, 94.0, 93.0],"HodnotyVrcholu":[0.248542988, 0.248577584, 0.261493937],"HodnotaElementu":0.252871503,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 40.0], [400.0, 20.0], [420.0, 20.0]],"cisloElementu":70,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[94.0, 75.0, 76.0],"HodnotyVrcholu":[0.248577584, 0.248542988, 0.236831883],"HodnotaElementu":0.24465081833333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 20.0], [420.0, 40.0], [400.0, 40.0]],"cisloElementu":71,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[76.0, 95.0, 94.0],"HodnotyVrcholu":[0.236831883, 0.236864419, 0.248577584],"HodnotaElementu":0.240757962,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 40.0], [420.0, 20.0], [440.00000000000006, 20.0]],"cisloElementu":72,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[95.0, 76.0, 77.0],"HodnotyVrcholu":[0.236864419, 0.236831883, 0.226149303],"HodnotaElementu":0.23328186833333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 20.0], [440.00000000000006, 40.0], [420.0, 40.0]],"cisloElementu":73,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[77.0, 96.0, 95.0],"HodnotyVrcholu":[0.226149303, 0.226196008, 0.236864419],"HodnotaElementu":0.22973657666666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 40.0], [440.00000000000006, 20.0], [459.99999999999994, 20.0]],"cisloElementu":74,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[96.0, 77.0, 78.0],"HodnotyVrcholu":[0.226196008, 0.226149303, 0.21643647],"HodnotaElementu":0.22292726033333332,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 20.0], [459.99999999999994, 40.0], [440.00000000000006, 40.0]],"cisloElementu":75,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[78.0, 97.0, 96.0],"HodnotyVrcholu":[0.21643647, 0.21650602, 0.226196008],"HodnotaElementu":0.21971283266666664,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 40.0], [459.99999999999994, 20.0], [480.0, 20.0]],"cisloElementu":76,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[97.0, 78.0, 79.0],"HodnotyVrcholu":[0.21650602, 0.21643647, 0.208576925],"HodnotaElementu":0.213839805,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 20.0], [480.0, 40.0], [459.99999999999994, 40.0]],"cisloElementu":77,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[79.0, 98.0, 97.0],"HodnotyVrcholu":[0.208576925, 0.208527629, 0.21650602],"HodnotaElementu":0.21120352466666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 40.0], [480.0, 20.0], [500.0, 20.0]],"cisloElementu":78,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[98.0, 79.0, 24.0],"HodnotyVrcholu":[0.208527629, 0.208576925, 0.211170805],"HodnotaElementu":0.20942511966666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[500.0, 20.0], [500.0, 40.0], [480.0, 40.0]],"cisloElementu":79,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[24.0, 25.0, 98.0],"HodnotyVrcholu":[0.211170805, 0.211327109, 0.208527629],"HodnotaElementu":0.21034184766666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[100.0, 60.0], [100.0, 40.0], [120.0, 40.0]],"cisloElementu":80,"barva":"hsl(350, 100%, 50%)","OznaceniVrcholu":[58.0, 59.0, 80.0],"HodnotyVrcholu":[1.0, 1.0, 0.789100555],"HodnotaElementu":0.9297001850000001,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 40.0], [120.0, 60.0], [100.0, 60.0]],"cisloElementu":81,"barva":"hsl(342, 100%, 50%)","OznaceniVrcholu":[80.0, 99.0, 58.0],"HodnotyVrcholu":[0.789100555, 0.789144584, 1.0],"HodnotaElementu":0.8594150463333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 60.0], [120.0, 40.0], [140.0, 40.0]],"cisloElementu":82,"barva":"hsl(331, 100%, 50%)","OznaceniVrcholu":[99.0, 80.0, 81.0],"HodnotyVrcholu":[0.789144584, 0.789100555, 0.682735958],"HodnotaElementu":0.7536603656666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 40.0], [140.0, 60.0], [120.0, 60.0]],"cisloElementu":83,"barva":"hsl(327, 100%, 50%)","OznaceniVrcholu":[81.0, 100.0, 99.0],"HodnotyVrcholu":[0.682735958, 0.682822127, 0.789144584],"HodnotaElementu":0.718234223,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 60.0], [140.0, 40.0], [160.0, 40.0]],"cisloElementu":84,"barva":"hsl(321, 100%, 50%)","OznaceniVrcholu":[100.0, 81.0, 82.0],"HodnotyVrcholu":[0.682822127, 0.682735958, 0.60356243],"HodnotaElementu":0.656373505,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 40.0], [160.0, 60.0], [140.0, 60.0]],"cisloElementu":85,"barva":"hsl(318, 100%, 50%)","OznaceniVrcholu":[82.0, 101.0, 100.0],"HodnotyVrcholu":[0.60356243, 0.603732346, 0.682822127],"HodnotaElementu":0.6300389676666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 60.0], [160.0, 40.0], [180.0, 40.0]],"cisloElementu":86,"barva":"hsl(313, 100%, 50%)","OznaceniVrcholu":[101.0, 82.0, 83.0],"HodnotyVrcholu":[0.603732346, 0.60356243, 0.540368362],"HodnotaElementu":0.5825543793333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 40.0], [180.0, 60.0], [160.0, 60.0]],"cisloElementu":87,"barva":"hsl(310, 100%, 50%)","OznaceniVrcholu":[83.0, 102.0, 101.0],"HodnotyVrcholu":[0.540368362, 0.540580939, 0.603732346],"HodnotaElementu":0.5615605490000001,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 60.0], [180.0, 40.0], [200.0, 40.0]],"cisloElementu":88,"barva":"hsl(306, 100%, 50%)","OznaceniVrcholu":[102.0, 83.0, 84.0],"HodnotyVrcholu":[0.540580939, 0.540368362, 0.488811067],"HodnotaElementu":0.523253456,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 40.0], [200.0, 60.0], [180.0, 60.0]],"cisloElementu":89,"barva":"hsl(304, 100%, 50%)","OznaceniVrcholu":[84.0, 103.0, 102.0],"HodnotyVrcholu":[0.488811067, 0.489025569, 0.540580939],"HodnotaElementu":0.5061391916666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 60.0], [200.0, 40.0], [220.00000000000003, 40.0]],"cisloElementu":90,"barva":"hsl(301, 100%, 50%)","OznaceniVrcholu":[103.0, 84.0, 85.0],"HodnotyVrcholu":[0.489025569, 0.488811067, 0.44604894],"HodnotaElementu":0.47462852533333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 40.0], [220.00000000000003, 60.0], [200.0, 60.0]],"cisloElementu":91,"barva":"hsl(300, 100%, 50%)","OznaceniVrcholu":[85.0, 104.0, 103.0],"HodnotyVrcholu":[0.44604894, 0.446245213, 0.489025569],"HodnotaElementu":0.46043990733333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 60.0], [220.00000000000003, 40.0], [240.0, 40.0]],"cisloElementu":92,"barva":"hsl(297, 100%, 50%)","OznaceniVrcholu":[104.0, 85.0, 86.0],"HodnotyVrcholu":[0.446245213, 0.44604894, 0.410061814],"HodnotaElementu":0.4341186556666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 40.0], [240.0, 60.0], [220.00000000000003, 60.0]],"cisloElementu":93,"barva":"hsl(295, 100%, 50%)","OznaceniVrcholu":[86.0, 105.0, 104.0],"HodnotyVrcholu":[0.410061814, 0.410233602, 0.446245213],"HodnotaElementu":0.4221802096666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 60.0], [240.0, 40.0], [260.0, 40.0]],"cisloElementu":94,"barva":"hsl(293, 100%, 50%)","OznaceniVrcholu":[105.0, 86.0, 87.0],"HodnotyVrcholu":[0.410233602, 0.410061814, 0.379384556],"HodnotaElementu":0.399893324,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 40.0], [260.0, 60.0], [240.0, 60.0]],"cisloElementu":95,"barva":"hsl(292, 100%, 50%)","OznaceniVrcholu":[87.0, 106.0, 105.0],"HodnotyVrcholu":[0.379384556, 0.379531499, 0.410233602],"HodnotaElementu":0.3897165523333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 60.0], [260.0, 40.0], [280.0, 40.0]],"cisloElementu":96,"barva":"hsl(290, 100%, 50%)","OznaceniVrcholu":[106.0, 87.0, 88.0],"HodnotyVrcholu":[0.379531499, 0.379384556, 0.352936649],"HodnotaElementu":0.37061756799999995,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 40.0], [280.0, 60.0], [260.0, 60.0]],"cisloElementu":97,"barva":"hsl(289, 100%, 50%)","OznaceniVrcholu":[88.0, 107.0, 106.0],"HodnotyVrcholu":[0.352936649, 0.353060493, 0.379531499],"HodnotaElementu":0.36184288033333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 60.0], [280.0, 40.0], [300.0, 40.0]],"cisloElementu":98,"barva":"hsl(287, 100%, 50%)","OznaceniVrcholu":[107.0, 88.0, 89.0],"HodnotyVrcholu":[0.353060493, 0.352936649, 0.329907727],"HodnotaElementu":0.34530162299999995,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 40.0], [300.0, 60.0], [280.0, 60.0]],"cisloElementu":99,"barva":"hsl(286, 100%, 50%)","OznaceniVrcholu":[89.0, 108.0, 107.0],"HodnotyVrcholu":[0.329907727, 0.330010834, 0.353060493],"HodnotaElementu":0.3376596846666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 60.0], [300.0, 40.0], [320.0, 40.0]],"cisloElementu":100,"barva":"hsl(285, 100%, 50%)","OznaceniVrcholu":[108.0, 89.0, 90.0],"HodnotyVrcholu":[0.330010834, 0.329907727, 0.309679622],"HodnotaElementu":0.32319939433333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 40.0], [320.0, 60.0], [300.0, 60.0]],"cisloElementu":101,"barva":"hsl(284, 100%, 50%)","OznaceniVrcholu":[90.0, 109.0, 108.0],"HodnotyVrcholu":[0.309679622, 0.309764513, 0.330010834],"HodnotaElementu":0.31648498966666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 60.0], [320.0, 40.0], [340.0, 40.0]],"cisloElementu":102,"barva":"hsl(283, 100%, 50%)","OznaceniVrcholu":[109.0, 90.0, 91.0],"HodnotyVrcholu":[0.309764513, 0.309679622, 0.291773191],"HodnotaElementu":0.30373910866666665,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 40.0], [340.0, 60.0], [320.0, 60.0]],"cisloElementu":103,"barva":"hsl(282, 100%, 50%)","OznaceniVrcholu":[91.0, 110.0, 109.0],"HodnotyVrcholu":[0.291773191, 0.291842339, 0.309764513],"HodnotaElementu":0.2977933476666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 60.0], [340.0, 40.0], [360.0, 40.0]],"cisloElementu":104,"barva":"hsl(281, 100%, 50%)","OznaceniVrcholu":[110.0, 91.0, 92.0],"HodnotyVrcholu":[0.291842339, 0.291773191, 0.275811513],"HodnotaElementu":0.286475681,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 40.0], [360.0, 60.0], [340.0, 60.0]],"cisloElementu":105,"barva":"hsl(280, 100%, 50%)","OznaceniVrcholu":[92.0, 111.0, 110.0],"HodnotyVrcholu":[0.275811513, 0.275867317, 0.291842339],"HodnotaElementu":0.281173723,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 60.0], [360.0, 40.0], [380.0, 40.0]],"cisloElementu":106,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[111.0, 92.0, 93.0],"HodnotyVrcholu":[0.275867317, 0.275811513, 0.261493937],"HodnotaElementu":0.271057589,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 40.0], [380.0, 60.0], [360.0, 60.0]],"cisloElementu":107,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[93.0, 112.0, 111.0],"HodnotyVrcholu":[0.261493937, 0.261538903, 0.275867317],"HodnotaElementu":0.2663000523333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 60.0], [380.0, 40.0], [400.0, 40.0]],"cisloElementu":108,"barva":"hsl(278, 100%, 50%)","OznaceniVrcholu":[112.0, 93.0, 94.0],"HodnotyVrcholu":[0.261538903, 0.261493937, 0.248577584],"HodnotaElementu":0.25720347466666665,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 40.0], [400.0, 60.0], [380.0, 60.0]],"cisloElementu":109,"barva":"hsl(277, 100%, 50%)","OznaceniVrcholu":[94.0, 113.0, 112.0],"HodnotyVrcholu":[0.248577584, 0.248614977, 0.261538903],"HodnotaElementu":0.252910488,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 60.0], [400.0, 40.0], [420.0, 40.0]],"cisloElementu":110,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[113.0, 94.0, 95.0],"HodnotyVrcholu":[0.248614977, 0.248577584, 0.236864419],"HodnotaElementu":0.24468566,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 40.0], [420.0, 60.0], [400.0, 60.0]],"cisloElementu":111,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[95.0, 114.0, 113.0],"HodnotyVrcholu":[0.236864419, 0.236899982, 0.248614977],"HodnotaElementu":0.240793126,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 60.0], [420.0, 40.0], [440.00000000000006, 40.0]],"cisloElementu":112,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[114.0, 95.0, 96.0],"HodnotyVrcholu":[0.236899982, 0.236864419, 0.226196008],"HodnotaElementu":0.23332013633333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 40.0], [440.00000000000006, 60.0], [420.0, 60.0]],"cisloElementu":113,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[96.0, 115.0, 114.0],"HodnotyVrcholu":[0.226196008, 0.226240134, 0.236899982],"HodnotaElementu":0.229778708,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 60.0], [440.00000000000006, 40.0], [459.99999999999994, 40.0]],"cisloElementu":114,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[115.0, 96.0, 97.0],"HodnotyVrcholu":[0.226240134, 0.226196008, 0.21650602],"HodnotaElementu":0.22298072066666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 40.0], [459.99999999999994, 60.0], [440.00000000000006, 60.0]],"cisloElementu":115,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[97.0, 116.0, 115.0],"HodnotyVrcholu":[0.21650602, 0.216561394, 0.226240134],"HodnotaElementu":0.21976918266666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 60.0], [459.99999999999994, 40.0], [480.0, 40.0]],"cisloElementu":116,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[116.0, 97.0, 98.0],"HodnotyVrcholu":[0.216561394, 0.21650602, 0.208527629],"HodnotaElementu":0.2138650143333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 40.0], [480.0, 60.0], [459.99999999999994, 60.0]],"cisloElementu":117,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[98.0, 117.0, 116.0],"HodnotyVrcholu":[0.208527629, 0.208492982, 0.216561394],"HodnotaElementu":0.21119400166666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 60.0], [480.0, 40.0], [500.0, 40.0]],"cisloElementu":118,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[117.0, 98.0, 25.0],"HodnotyVrcholu":[0.208492982, 0.208527629, 0.211327109],"HodnotaElementu":0.20944924,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[500.0, 40.0], [500.0, 60.0], [480.0, 60.0]],"cisloElementu":119,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[25.0, 26.0, 117.0],"HodnotyVrcholu":[0.211327109, 0.211275593, 0.208492982],"HodnotaElementu":0.21036522800000002,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[100.0, 80.0], [100.0, 60.0], [120.0, 60.0]],"cisloElementu":120,"barva":"hsl(350, 100%, 50%)","OznaceniVrcholu":[57.0, 58.0, 99.0],"HodnotyVrcholu":[1.0, 1.0, 0.789144584],"HodnotaElementu":0.9297148613333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 60.0], [120.0, 80.0], [100.0, 80.0]],"cisloElementu":121,"barva":"hsl(342, 100%, 50%)","OznaceniVrcholu":[99.0, 118.0, 57.0],"HodnotyVrcholu":[0.789144584, 0.789021375, 1.0],"HodnotaElementu":0.859388653,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 80.0], [120.0, 60.0], [140.0, 60.0]],"cisloElementu":122,"barva":"hsl(331, 100%, 50%)","OznaceniVrcholu":[118.0, 99.0, 100.0],"HodnotyVrcholu":[0.789021375, 0.789144584, 0.682822127],"HodnotaElementu":0.7536626953333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 60.0], [140.0, 80.0], [120.0, 80.0]],"cisloElementu":123,"barva":"hsl(327, 100%, 50%)","OznaceniVrcholu":[100.0, 119.0, 118.0],"HodnotyVrcholu":[0.682822127, 0.682697843, 0.789021375],"HodnotaElementu":0.7181804483333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 80.0], [140.0, 60.0], [160.0, 60.0]],"cisloElementu":124,"barva":"hsl(321, 100%, 50%)","OznaceniVrcholu":[119.0, 100.0, 101.0],"HodnotyVrcholu":[0.682697843, 0.682822127, 0.603732346],"HodnotaElementu":0.6564174386666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 60.0], [160.0, 80.0], [140.0, 80.0]],"cisloElementu":125,"barva":"hsl(318, 100%, 50%)","OznaceniVrcholu":[101.0, 120.0, 119.0],"HodnotyVrcholu":[0.603732346, 0.6036871, 0.682697843],"HodnotaElementu":0.6300390963333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 80.0], [160.0, 60.0], [180.0, 60.0]],"cisloElementu":126,"barva":"hsl(313, 100%, 50%)","OznaceniVrcholu":[120.0, 101.0, 102.0],"HodnotyVrcholu":[0.6036871, 0.603732346, 0.540580939],"HodnotaElementu":0.5826667950000001,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 60.0], [180.0, 80.0], [160.0, 80.0]],"cisloElementu":127,"barva":"hsl(310, 100%, 50%)","OznaceniVrcholu":[102.0, 121.0, 120.0],"HodnotyVrcholu":[0.540580939, 0.540615094, 0.6036871],"HodnotaElementu":0.561627711,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 80.0], [180.0, 60.0], [200.0, 60.0]],"cisloElementu":128,"barva":"hsl(306, 100%, 50%)","OznaceniVrcholu":[121.0, 102.0, 103.0],"HodnotyVrcholu":[0.540615094, 0.540580939, 0.489025569],"HodnotaElementu":0.5234072006666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 60.0], [200.0, 80.0], [180.0, 80.0]],"cisloElementu":129,"barva":"hsl(304, 100%, 50%)","OznaceniVrcholu":[103.0, 122.0, 121.0],"HodnotyVrcholu":[0.489025569, 0.489113397, 0.540615094],"HodnotaElementu":0.5062513533333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 80.0], [200.0, 60.0], [220.00000000000003, 60.0]],"cisloElementu":130,"barva":"hsl(301, 100%, 50%)","OznaceniVrcholu":[122.0, 103.0, 104.0],"HodnotyVrcholu":[0.489113397, 0.489025569, 0.446245213],"HodnotaElementu":0.47479472633333336,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 60.0], [220.00000000000003, 80.0], [200.0, 80.0]],"cisloElementu":131,"barva":"hsl(300, 100%, 50%)","OznaceniVrcholu":[104.0, 123.0, 122.0],"HodnotyVrcholu":[0.446245213, 0.446360097, 0.489113397],"HodnotaElementu":0.46057290233333337,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 80.0], [220.00000000000003, 60.0], [240.0, 60.0]],"cisloElementu":132,"barva":"hsl(297, 100%, 50%)","OznaceniVrcholu":[123.0, 104.0, 105.0],"HodnotyVrcholu":[0.446360097, 0.446245213, 0.410233602],"HodnotaElementu":0.4342796373333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 60.0], [240.0, 80.0], [220.00000000000003, 80.0]],"cisloElementu":133,"barva":"hsl(295, 100%, 50%)","OznaceniVrcholu":[105.0, 124.0, 123.0],"HodnotyVrcholu":[0.410233602, 0.410356272, 0.446360097],"HodnotaElementu":0.42231665699999993,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 80.0], [240.0, 60.0], [260.0, 60.0]],"cisloElementu":134,"barva":"hsl(293, 100%, 50%)","OznaceniVrcholu":[124.0, 105.0, 106.0],"HodnotyVrcholu":[0.410356272, 0.410233602, 0.379531499],"HodnotaElementu":0.4000404576666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 60.0], [260.0, 80.0], [240.0, 80.0]],"cisloElementu":135,"barva":"hsl(292, 100%, 50%)","OznaceniVrcholu":[106.0, 125.0, 124.0],"HodnotyVrcholu":[0.379531499, 0.379650053, 0.410356272],"HodnotaElementu":0.38984594133333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 80.0], [260.0, 60.0], [280.0, 60.0]],"cisloElementu":136,"barva":"hsl(290, 100%, 50%)","OznaceniVrcholu":[125.0, 106.0, 107.0],"HodnotyVrcholu":[0.379650053, 0.379531499, 0.353060493],"HodnotaElementu":0.3707473483333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 60.0], [280.0, 80.0], [260.0, 80.0]],"cisloElementu":137,"barva":"hsl(289, 100%, 50%)","OznaceniVrcholu":[107.0, 126.0, 125.0],"HodnotyVrcholu":[0.353060493, 0.353168462, 0.379650053],"HodnotaElementu":0.36195966933333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 80.0], [280.0, 60.0], [300.0, 60.0]],"cisloElementu":138,"barva":"hsl(287, 100%, 50%)","OznaceniVrcholu":[126.0, 107.0, 108.0],"HodnotyVrcholu":[0.353168462, 0.353060493, 0.330010834],"HodnotaElementu":0.345413263,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 60.0], [300.0, 80.0], [280.0, 80.0]],"cisloElementu":139,"barva":"hsl(286, 100%, 50%)","OznaceniVrcholu":[108.0, 127.0, 126.0],"HodnotyVrcholu":[0.330010834, 0.330105409, 0.353168462],"HodnotaElementu":0.3377615683333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 80.0], [300.0, 60.0], [320.0, 60.0]],"cisloElementu":140,"barva":"hsl(285, 100%, 50%)","OznaceniVrcholu":[127.0, 108.0, 109.0],"HodnotyVrcholu":[0.330105409, 0.330010834, 0.309764513],"HodnotaElementu":0.32329358533333336,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 60.0], [320.0, 80.0], [300.0, 80.0]],"cisloElementu":141,"barva":"hsl(284, 100%, 50%)","OznaceniVrcholu":[109.0, 128.0, 127.0],"HodnotyVrcholu":[0.309764513, 0.309845114, 0.330105409],"HodnotaElementu":0.31657167866666663,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 80.0], [320.0, 60.0], [340.0, 60.0]],"cisloElementu":142,"barva":"hsl(283, 100%, 50%)","OznaceniVrcholu":[128.0, 109.0, 110.0],"HodnotyVrcholu":[0.309845114, 0.309764513, 0.291842339],"HodnotaElementu":0.303817322,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 60.0], [340.0, 80.0], [320.0, 80.0]],"cisloElementu":143,"barva":"hsl(282, 100%, 50%)","OznaceniVrcholu":[110.0, 129.0, 128.0],"HodnotyVrcholu":[0.291842339, 0.291909726, 0.309845114],"HodnotaElementu":0.2978657263333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 80.0], [340.0, 60.0], [360.0, 60.0]],"cisloElementu":144,"barva":"hsl(281, 100%, 50%)","OznaceniVrcholu":[129.0, 110.0, 111.0],"HodnotyVrcholu":[0.291909726, 0.291842339, 0.275867317],"HodnotaElementu":0.286539794,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 60.0], [360.0, 80.0], [340.0, 80.0]],"cisloElementu":145,"barva":"hsl(280, 100%, 50%)","OznaceniVrcholu":[111.0, 130.0, 129.0],"HodnotyVrcholu":[0.275867317, 0.275923122, 0.291909726],"HodnotaElementu":0.28123338833333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 80.0], [360.0, 60.0], [380.0, 60.0]],"cisloElementu":146,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[130.0, 111.0, 112.0],"HodnotyVrcholu":[0.275923122, 0.275867317, 0.261538903],"HodnotaElementu":0.2711097806666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 60.0], [380.0, 80.0], [360.0, 80.0]],"cisloElementu":147,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[112.0, 131.0, 130.0],"HodnotyVrcholu":[0.261538903, 0.261585462, 0.275923122],"HodnotaElementu":0.26634916233333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 80.0], [380.0, 60.0], [400.0, 60.0]],"cisloElementu":148,"barva":"hsl(278, 100%, 50%)","OznaceniVrcholu":[131.0, 112.0, 113.0],"HodnotyVrcholu":[0.261585462, 0.261538903, 0.248614977],"HodnotaElementu":0.2572464473333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 60.0], [400.0, 80.0], [380.0, 80.0]],"cisloElementu":149,"barva":"hsl(277, 100%, 50%)","OznaceniVrcholu":[113.0, 132.0, 131.0],"HodnotyVrcholu":[0.248614977, 0.248655246, 0.261585462],"HodnotaElementu":0.252951895,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 80.0], [400.0, 60.0], [420.0, 60.0]],"cisloElementu":150,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[132.0, 113.0, 114.0],"HodnotyVrcholu":[0.248655246, 0.248614977, 0.236899982],"HodnotaElementu":0.2447234016666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 60.0], [420.0, 80.0], [400.0, 80.0]],"cisloElementu":151,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[114.0, 133.0, 132.0],"HodnotyVrcholu":[0.236899982, 0.236937117, 0.248655246],"HodnotaElementu":0.2408307816666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 80.0], [420.0, 60.0], [440.00000000000006, 60.0]],"cisloElementu":152,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[133.0, 114.0, 115.0],"HodnotyVrcholu":[0.236937117, 0.236899982, 0.226240134],"HodnotaElementu":0.23335907766666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 60.0], [440.00000000000006, 80.0], [420.0, 80.0]],"cisloElementu":153,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[115.0, 134.0, 133.0],"HodnotyVrcholu":[0.226240134, 0.226276139, 0.236937117],"HodnotaElementu":0.22981779666666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 80.0], [440.00000000000006, 60.0], [459.99999999999994, 60.0]],"cisloElementu":154,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[134.0, 115.0, 116.0],"HodnotyVrcholu":[0.226276139, 0.226240134, 0.216561394],"HodnotaElementu":0.22302588899999998,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 60.0], [459.99999999999994, 80.0], [440.00000000000006, 80.0]],"cisloElementu":155,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[116.0, 135.0, 134.0],"HodnotyVrcholu":[0.216561394, 0.216593305, 0.226276139],"HodnotaElementu":0.21981027933333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 80.0], [459.99999999999994, 60.0], [480.0, 60.0]],"cisloElementu":156,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[135.0, 116.0, 117.0],"HodnotyVrcholu":[0.216593305, 0.216561394, 0.208492982],"HodnotaElementu":0.21388256033333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 60.0], [480.0, 80.0], [459.99999999999994, 80.0]],"cisloElementu":157,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[117.0, 136.0, 135.0],"HodnotyVrcholu":[0.208492982, 0.208481784, 0.216593305],"HodnotaElementu":0.211189357,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 80.0], [480.0, 60.0], [500.0, 60.0]],"cisloElementu":158,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[136.0, 117.0, 26.0],"HodnotyVrcholu":[0.208481784, 0.208492982, 0.211275593],"HodnotaElementu":0.20941678633333335,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[500.0, 60.0], [500.0, 80.0], [480.0, 80.0]],"cisloElementu":159,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[26.0, 27.0, 136.0],"HodnotyVrcholu":[0.211275593, 0.211243005, 0.208481784],"HodnotaElementu":0.2103334606666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[100.0, 100.0], [100.0, 80.0], [120.0, 80.0]],"cisloElementu":160,"barva":"hsl(350, 100%, 50%)","OznaceniVrcholu":[56.0, 57.0, 118.0],"HodnotyVrcholu":[1.0, 1.0, 0.789021375],"HodnotaElementu":0.9296737916666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 80.0], [120.0, 100.0], [100.0, 100.0]],"cisloElementu":161,"barva":"hsl(342, 100%, 50%)","OznaceniVrcholu":[118.0, 137.0, 56.0],"HodnotyVrcholu":[0.789021375, 0.788900088, 1.0],"HodnotaElementu":0.8593071543333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 100.0], [120.0, 80.0], [140.0, 80.0]],"cisloElementu":162,"barva":"hsl(331, 100%, 50%)","OznaceniVrcholu":[137.0, 118.0, 119.0],"HodnotyVrcholu":[0.788900088, 0.789021375, 0.682697843],"HodnotaElementu":0.7535397686666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 80.0], [140.0, 100.0], [120.0, 100.0]],"cisloElementu":163,"barva":"hsl(327, 100%, 50%)","OznaceniVrcholu":[119.0, 138.0, 137.0],"HodnotyVrcholu":[0.682697843, 0.682525698, 0.788900088],"HodnotaElementu":0.7180412096666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 100.0], [140.0, 80.0], [160.0, 80.0]],"cisloElementu":164,"barva":"hsl(321, 100%, 50%)","OznaceniVrcholu":[138.0, 119.0, 120.0],"HodnotyVrcholu":[0.682525698, 0.682697843, 0.6036871],"HodnotaElementu":0.6563035469999999,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 80.0], [160.0, 100.0], [140.0, 100.0]],"cisloElementu":165,"barva":"hsl(318, 100%, 50%)","OznaceniVrcholu":[120.0, 139.0, 138.0],"HodnotyVrcholu":[0.6036871, 0.603564846, 0.682525698],"HodnotaElementu":0.6299258813333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 100.0], [160.0, 80.0], [180.0, 80.0]],"cisloElementu":166,"barva":"hsl(313, 100%, 50%)","OznaceniVrcholu":[139.0, 120.0, 121.0],"HodnotyVrcholu":[0.603564846, 0.6036871, 0.540615094],"HodnotaElementu":0.5826223466666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 80.0], [180.0, 100.0], [160.0, 100.0]],"cisloElementu":167,"barva":"hsl(310, 100%, 50%)","OznaceniVrcholu":[121.0, 140.0, 139.0],"HodnotyVrcholu":[0.540615094, 0.540571837, 0.603564846],"HodnotaElementu":0.5615839256666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 100.0], [180.0, 80.0], [200.0, 80.0]],"cisloElementu":168,"barva":"hsl(306, 100%, 50%)","OznaceniVrcholu":[140.0, 121.0, 122.0],"HodnotyVrcholu":[0.540571837, 0.540615094, 0.489113397],"HodnotaElementu":0.5234334426666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 80.0], [200.0, 100.0], [180.0, 100.0]],"cisloElementu":169,"barva":"hsl(304, 100%, 50%)","OznaceniVrcholu":[122.0, 141.0, 140.0],"HodnotyVrcholu":[0.489113397, 0.489140793, 0.540571837],"HodnotaElementu":0.5062753423333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 100.0], [200.0, 80.0], [220.00000000000003, 80.0]],"cisloElementu":170,"barva":"hsl(301, 100%, 50%)","OznaceniVrcholu":[141.0, 122.0, 123.0],"HodnotyVrcholu":[0.489140793, 0.489113397, 0.446360097],"HodnotaElementu":0.474871429,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 80.0], [220.00000000000003, 100.0], [200.0, 100.0]],"cisloElementu":171,"barva":"hsl(300, 100%, 50%)","OznaceniVrcholu":[123.0, 142.0, 141.0],"HodnotyVrcholu":[0.446360097, 0.446434025, 0.489140793],"HodnotaElementu":0.4606449716666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 100.0], [220.00000000000003, 80.0], [240.0, 80.0]],"cisloElementu":172,"barva":"hsl(297, 100%, 50%)","OznaceniVrcholu":[142.0, 123.0, 124.0],"HodnotyVrcholu":[0.446434025, 0.446360097, 0.410356272],"HodnotaElementu":0.43438346466666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 80.0], [240.0, 100.0], [220.00000000000003, 100.0]],"cisloElementu":173,"barva":"hsl(295, 100%, 50%)","OznaceniVrcholu":[124.0, 143.0, 142.0],"HodnotyVrcholu":[0.410356272, 0.41045332, 0.446434025],"HodnotaElementu":0.42241453900000003,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 100.0], [240.0, 80.0], [260.0, 80.0]],"cisloElementu":174,"barva":"hsl(293, 100%, 50%)","OznaceniVrcholu":[143.0, 124.0, 125.0],"HodnotyVrcholu":[0.41045332, 0.410356272, 0.379650053],"HodnotaElementu":0.400153215,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 80.0], [260.0, 100.0], [240.0, 100.0]],"cisloElementu":175,"barva":"hsl(292, 100%, 50%)","OznaceniVrcholu":[125.0, 144.0, 143.0],"HodnotyVrcholu":[0.379650053, 0.379753257, 0.41045332],"HodnotaElementu":0.38995220999999997,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 100.0], [260.0, 80.0], [280.0, 80.0]],"cisloElementu":176,"barva":"hsl(290, 100%, 50%)","OznaceniVrcholu":[144.0, 125.0, 126.0],"HodnotyVrcholu":[0.379753257, 0.379650053, 0.353168462],"HodnotaElementu":0.3708572573333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 80.0], [280.0, 100.0], [260.0, 100.0]],"cisloElementu":177,"barva":"hsl(289, 100%, 50%)","OznaceniVrcholu":[126.0, 145.0, 144.0],"HodnotyVrcholu":[0.353168462, 0.353267495, 0.379753257],"HodnotaElementu":0.3620630713333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 100.0], [280.0, 80.0], [300.0, 80.0]],"cisloElementu":178,"barva":"hsl(287, 100%, 50%)","OznaceniVrcholu":[145.0, 126.0, 127.0],"HodnotyVrcholu":[0.353267495, 0.353168462, 0.330105409],"HodnotaElementu":0.34551378866666665,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 80.0], [300.0, 100.0], [280.0, 100.0]],"cisloElementu":179,"barva":"hsl(286, 100%, 50%)","OznaceniVrcholu":[127.0, 146.0, 145.0],"HodnotyVrcholu":[0.330105409, 0.330194948, 0.353267495],"HodnotaElementu":0.3378559506666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 100.0], [300.0, 80.0], [320.0, 80.0]],"cisloElementu":180,"barva":"hsl(285, 100%, 50%)","OznaceniVrcholu":[146.0, 127.0, 128.0],"HodnotyVrcholu":[0.330194948, 0.330105409, 0.309845114],"HodnotaElementu":0.3233818236666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 80.0], [320.0, 100.0], [300.0, 100.0]],"cisloElementu":181,"barva":"hsl(284, 100%, 50%)","OznaceniVrcholu":[128.0, 147.0, 146.0],"HodnotyVrcholu":[0.309845114, 0.30992303, 0.330194948],"HodnotaElementu":0.31665436399999997,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 100.0], [320.0, 80.0], [340.0, 80.0]],"cisloElementu":182,"barva":"hsl(283, 100%, 50%)","OznaceniVrcholu":[147.0, 128.0, 129.0],"HodnotyVrcholu":[0.30992303, 0.309845114, 0.291909726],"HodnotaElementu":0.30389262333333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 80.0], [340.0, 100.0], [320.0, 100.0]],"cisloElementu":183,"barva":"hsl(282, 100%, 50%)","OznaceniVrcholu":[129.0, 148.0, 147.0],"HodnotyVrcholu":[0.291909726, 0.291975896, 0.30992303],"HodnotaElementu":0.2979362173333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 100.0], [340.0, 80.0], [360.0, 80.0]],"cisloElementu":184,"barva":"hsl(281, 100%, 50%)","OznaceniVrcholu":[148.0, 129.0, 130.0],"HodnotyVrcholu":[0.291975896, 0.291909726, 0.275923122],"HodnotaElementu":0.28660291466666665,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 80.0], [360.0, 100.0], [340.0, 100.0]],"cisloElementu":185,"barva":"hsl(280, 100%, 50%)","OznaceniVrcholu":[130.0, 149.0, 148.0],"HodnotyVrcholu":[0.275923122, 0.27597874, 0.291975896],"HodnotaElementu":0.281292586,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 100.0], [360.0, 80.0], [380.0, 80.0]],"cisloElementu":186,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[149.0, 130.0, 131.0],"HodnotyVrcholu":[0.27597874, 0.275923122, 0.261585462],"HodnotaElementu":0.27116244133333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 80.0], [380.0, 100.0], [360.0, 100.0]],"cisloElementu":187,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[131.0, 150.0, 149.0],"HodnotyVrcholu":[0.261585462, 0.261632644, 0.27597874],"HodnotaElementu":0.2663989486666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 100.0], [380.0, 80.0], [400.0, 80.0]],"cisloElementu":188,"barva":"hsl(278, 100%, 50%)","OznaceniVrcholu":[150.0, 131.0, 132.0],"HodnotyVrcholu":[0.261632644, 0.261585462, 0.248655246],"HodnotaElementu":0.2572911173333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 80.0], [400.0, 100.0], [380.0, 100.0]],"cisloElementu":189,"barva":"hsl(277, 100%, 50%)","OznaceniVrcholu":[132.0, 151.0, 150.0],"HodnotyVrcholu":[0.248655246, 0.248696588, 0.261632644],"HodnotaElementu":0.252994826,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 100.0], [400.0, 80.0], [420.0, 80.0]],"cisloElementu":190,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[151.0, 132.0, 133.0],"HodnotyVrcholu":[0.248696588, 0.248655246, 0.236937117],"HodnotaElementu":0.24476298366666668,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 80.0], [420.0, 100.0], [400.0, 100.0]],"cisloElementu":191,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[133.0, 152.0, 151.0],"HodnotyVrcholu":[0.236937117, 0.236974663, 0.248696588],"HodnotaElementu":0.24086945599999998,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 100.0], [420.0, 80.0], [440.00000000000006, 80.0]],"cisloElementu":192,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[152.0, 133.0, 134.0],"HodnotyVrcholu":[0.236974663, 0.236937117, 0.226276139],"HodnotaElementu":0.233395973,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 80.0], [440.00000000000006, 100.0], [420.0, 100.0]],"cisloElementu":193,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[134.0, 153.0, 152.0],"HodnotyVrcholu":[0.226276139, 0.226309757, 0.236974663],"HodnotaElementu":0.22985351966666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 100.0], [440.00000000000006, 80.0], [459.99999999999994, 80.0]],"cisloElementu":194,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[153.0, 134.0, 135.0],"HodnotyVrcholu":[0.226309757, 0.226276139, 0.216593305],"HodnotaElementu":0.22305973366666665,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 80.0], [459.99999999999994, 100.0], [440.00000000000006, 100.0]],"cisloElementu":195,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[135.0, 154.0, 153.0],"HodnotyVrcholu":[0.216593305, 0.216620988, 0.226309757],"HodnotaElementu":0.21984135000000002,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 100.0], [459.99999999999994, 80.0], [480.0, 80.0]],"cisloElementu":196,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[154.0, 135.0, 136.0],"HodnotyVrcholu":[0.216620988, 0.216593305, 0.208481784],"HodnotaElementu":0.21389869233333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 80.0], [480.0, 100.0], [459.99999999999994, 100.0]],"cisloElementu":197,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[136.0, 155.0, 154.0],"HodnotyVrcholu":[0.208481784, 0.20849149, 0.216620988],"HodnotaElementu":0.21119808733333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 100.0], [480.0, 80.0], [500.0, 80.0]],"cisloElementu":198,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[155.0, 136.0, 27.0],"HodnotyVrcholu":[0.20849149, 0.208481784, 0.211243005],"HodnotaElementu":0.20940542633333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[500.0, 80.0], [500.0, 100.0], [480.0, 100.0]],"cisloElementu":199,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[27.0, 28.0, 155.0],"HodnotyVrcholu":[0.211243005, 0.211245665, 0.20849149],"HodnotaElementu":0.21032672,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[100.0, 120.0], [100.0, 100.0], [120.0, 100.0]],"cisloElementu":200,"barva":"hsl(350, 100%, 50%)","OznaceniVrcholu":[55.0, 56.0, 137.0],"HodnotyVrcholu":[1.0, 1.0, 0.788900088],"HodnotaElementu":0.9296333626666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 100.0], [120.0, 120.0], [100.0, 120.0]],"cisloElementu":201,"barva":"hsl(342, 100%, 50%)","OznaceniVrcholu":[137.0, 156.0, 55.0],"HodnotyVrcholu":[0.788900088, 0.788779678, 1.0],"HodnotaElementu":0.8592265886666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 120.0], [120.0, 100.0], [140.0, 100.0]],"cisloElementu":202,"barva":"hsl(331, 100%, 50%)","OznaceniVrcholu":[156.0, 137.0, 138.0],"HodnotyVrcholu":[0.788779678, 0.788900088, 0.682525698],"HodnotaElementu":0.7534018213333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 100.0], [140.0, 120.0], [120.0, 120.0]],"cisloElementu":203,"barva":"hsl(327, 100%, 50%)","OznaceniVrcholu":[138.0, 157.0, 156.0],"HodnotyVrcholu":[0.682525698, 0.682327622, 0.788779678],"HodnotaElementu":0.717877666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 120.0], [140.0, 100.0], [160.0, 100.0]],"cisloElementu":204,"barva":"hsl(321, 100%, 50%)","OznaceniVrcholu":[157.0, 138.0, 139.0],"HodnotyVrcholu":[0.682327622, 0.682525698, 0.603564846],"HodnotaElementu":0.6561393886666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 100.0], [160.0, 120.0], [140.0, 120.0]],"cisloElementu":205,"barva":"hsl(318, 100%, 50%)","OznaceniVrcholu":[139.0, 158.0, 157.0],"HodnotyVrcholu":[0.603564846, 0.60343212, 0.682327622],"HodnotaElementu":0.6297748626666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 120.0], [160.0, 100.0], [180.0, 100.0]],"cisloElementu":206,"barva":"hsl(313, 100%, 50%)","OznaceniVrcholu":[158.0, 139.0, 140.0],"HodnotyVrcholu":[0.60343212, 0.603564846, 0.540571837],"HodnotaElementu":0.5825229343333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 100.0], [180.0, 120.0], [160.0, 120.0]],"cisloElementu":207,"barva":"hsl(310, 100%, 50%)","OznaceniVrcholu":[140.0, 159.0, 158.0],"HodnotyVrcholu":[0.540571837, 0.540528103, 0.60343212],"HodnotaElementu":0.5615106866666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 120.0], [180.0, 100.0], [200.0, 100.0]],"cisloElementu":208,"barva":"hsl(306, 100%, 50%)","OznaceniVrcholu":[159.0, 140.0, 141.0],"HodnotyVrcholu":[0.540528103, 0.540571837, 0.489140793],"HodnotaElementu":0.5234135776666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 100.0], [200.0, 120.0], [180.0, 120.0]],"cisloElementu":209,"barva":"hsl(304, 100%, 50%)","OznaceniVrcholu":[141.0, 160.0, 159.0],"HodnotyVrcholu":[0.489140793, 0.489172104, 0.540528103],"HodnotaElementu":0.5062803333333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 120.0], [200.0, 100.0], [220.00000000000003, 100.0]],"cisloElementu":210,"barva":"hsl(301, 100%, 50%)","OznaceniVrcholu":[160.0, 141.0, 142.0],"HodnotyVrcholu":[0.489172104, 0.489140793, 0.446434025],"HodnotaElementu":0.47491564066666664,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 100.0], [220.00000000000003, 120.0], [200.0, 120.0]],"cisloElementu":211,"barva":"hsl(300, 100%, 50%)","OznaceniVrcholu":[142.0, 161.0, 160.0],"HodnotyVrcholu":[0.446434025, 0.446512505, 0.489172104],"HodnotaElementu":0.46070621133333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 120.0], [220.00000000000003, 100.0], [240.0, 100.0]],"cisloElementu":212,"barva":"hsl(297, 100%, 50%)","OznaceniVrcholu":[161.0, 142.0, 143.0],"HodnotyVrcholu":[0.446512505, 0.446434025, 0.41045332],"HodnotaElementu":0.43446661666666664,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 100.0], [240.0, 120.0], [220.00000000000003, 120.0]],"cisloElementu":213,"barva":"hsl(295, 100%, 50%)","OznaceniVrcholu":[143.0, 162.0, 161.0],"HodnotyVrcholu":[0.41045332, 0.410553735, 0.446512505],"HodnotaElementu":0.42250652,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 120.0], [240.0, 100.0], [260.0, 100.0]],"cisloElementu":214,"barva":"hsl(293, 100%, 50%)","OznaceniVrcholu":[162.0, 143.0, 144.0],"HodnotyVrcholu":[0.410553735, 0.41045332, 0.379753257],"HodnotaElementu":0.4002534373333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 100.0], [260.0, 120.0], [240.0, 120.0]],"cisloElementu":215,"barva":"hsl(292, 100%, 50%)","OznaceniVrcholu":[144.0, 163.0, 162.0],"HodnotyVrcholu":[0.379753257, 0.379858356, 0.410553735],"HodnotaElementu":0.39005511600000004,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 120.0], [260.0, 100.0], [280.0, 100.0]],"cisloElementu":216,"barva":"hsl(290, 100%, 50%)","OznaceniVrcholu":[163.0, 144.0, 145.0],"HodnotyVrcholu":[0.379858356, 0.379753257, 0.353267495],"HodnotaElementu":0.37095970266666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 100.0], [280.0, 120.0], [260.0, 120.0]],"cisloElementu":217,"barva":"hsl(289, 100%, 50%)","OznaceniVrcholu":[145.0, 164.0, 163.0],"HodnotyVrcholu":[0.353267495, 0.35336743, 0.379858356],"HodnotaElementu":0.36216442699999996,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 120.0], [280.0, 100.0], [300.0, 100.0]],"cisloElementu":218,"barva":"hsl(287, 100%, 50%)","OznaceniVrcholu":[164.0, 145.0, 146.0],"HodnotyVrcholu":[0.35336743, 0.353267495, 0.330194948],"HodnotaElementu":0.34560995766666663,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 100.0], [300.0, 120.0], [280.0, 120.0]],"cisloElementu":219,"barva":"hsl(286, 100%, 50%)","OznaceniVrcholu":[146.0, 165.0, 164.0],"HodnotyVrcholu":[0.330194948, 0.330284815, 0.35336743],"HodnotaElementu":0.3379490643333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 120.0], [300.0, 100.0], [320.0, 100.0]],"cisloElementu":220,"barva":"hsl(285, 100%, 50%)","OznaceniVrcholu":[165.0, 146.0, 147.0],"HodnotyVrcholu":[0.330284815, 0.330194948, 0.30992303],"HodnotaElementu":0.32346759766666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 100.0], [320.0, 120.0], [300.0, 120.0]],"cisloElementu":221,"barva":"hsl(284, 100%, 50%)","OznaceniVrcholu":[147.0, 166.0, 165.0],"HodnotyVrcholu":[0.30992303, 0.31000097, 0.330284815],"HodnotaElementu":0.3167362716666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 120.0], [320.0, 100.0], [340.0, 100.0]],"cisloElementu":222,"barva":"hsl(283, 100%, 50%)","OznaceniVrcholu":[166.0, 147.0, 148.0],"HodnotyVrcholu":[0.31000097, 0.30992303, 0.291975896],"HodnotaElementu":0.303966632,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 100.0], [340.0, 120.0], [320.0, 120.0]],"cisloElementu":223,"barva":"hsl(282, 100%, 50%)","OznaceniVrcholu":[148.0, 167.0, 166.0],"HodnotyVrcholu":[0.291975896, 0.292041918, 0.31000097],"HodnotaElementu":0.29800626133333336,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 120.0], [340.0, 100.0], [360.0, 100.0]],"cisloElementu":224,"barva":"hsl(281, 100%, 50%)","OznaceniVrcholu":[167.0, 148.0, 149.0],"HodnotyVrcholu":[0.292041918, 0.291975896, 0.27597874],"HodnotaElementu":0.286665518,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 100.0], [360.0, 120.0], [340.0, 120.0]],"cisloElementu":225,"barva":"hsl(280, 100%, 50%)","OznaceniVrcholu":[149.0, 168.0, 167.0],"HodnotyVrcholu":[0.27597874, 0.276034056, 0.292041918],"HodnotaElementu":0.2813515713333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 120.0], [360.0, 100.0], [380.0, 100.0]],"cisloElementu":226,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[168.0, 149.0, 150.0],"HodnotyVrcholu":[0.276034056, 0.27597874, 0.261632644],"HodnotaElementu":0.27121514666666674,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 100.0], [380.0, 120.0], [360.0, 120.0]],"cisloElementu":227,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[150.0, 169.0, 168.0],"HodnotyVrcholu":[0.261632644, 0.261679294, 0.276034056],"HodnotaElementu":0.26644866466666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 120.0], [380.0, 100.0], [400.0, 100.0]],"cisloElementu":228,"barva":"hsl(278, 100%, 50%)","OznaceniVrcholu":[169.0, 150.0, 151.0],"HodnotyVrcholu":[0.261679294, 0.261632644, 0.248696588],"HodnotaElementu":0.25733617533333336,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 100.0], [400.0, 120.0], [380.0, 120.0]],"cisloElementu":229,"barva":"hsl(277, 100%, 50%)","OznaceniVrcholu":[151.0, 170.0, 169.0],"HodnotyVrcholu":[0.248696588, 0.248737059, 0.261679294],"HodnotaElementu":0.25303764700000003,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 120.0], [400.0, 100.0], [420.0, 100.0]],"cisloElementu":230,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[170.0, 151.0, 152.0],"HodnotyVrcholu":[0.248737059, 0.248696588, 0.236974663],"HodnotaElementu":0.24480277000000003,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 100.0], [420.0, 120.0], [400.0, 120.0]],"cisloElementu":231,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[152.0, 171.0, 170.0],"HodnotyVrcholu":[0.236974663, 0.237011111, 0.248737059],"HodnotaElementu":0.240907611,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 120.0], [420.0, 100.0], [440.00000000000006, 100.0]],"cisloElementu":232,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[171.0, 152.0, 153.0],"HodnotyVrcholu":[0.237011111, 0.236974663, 0.226309757],"HodnotaElementu":0.23343184366666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 100.0], [440.00000000000006, 120.0], [420.0, 120.0]],"cisloElementu":233,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[153.0, 172.0, 171.0],"HodnotyVrcholu":[0.226309757, 0.226342688, 0.237011111],"HodnotaElementu":0.22988785199999998,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 120.0], [440.00000000000006, 100.0], [459.99999999999994, 100.0]],"cisloElementu":234,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[172.0, 153.0, 154.0],"HodnotyVrcholu":[0.226342688, 0.226309757, 0.216620988],"HodnotaElementu":0.22309114433333332,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 100.0], [459.99999999999994, 120.0], [440.00000000000006, 120.0]],"cisloElementu":235,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[154.0, 173.0, 172.0],"HodnotyVrcholu":[0.216620988, 0.216648869, 0.226342688],"HodnotaElementu":0.21987084833333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 120.0], [459.99999999999994, 100.0], [480.0, 100.0]],"cisloElementu":236,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[173.0, 154.0, 155.0],"HodnotyVrcholu":[0.216648869, 0.216620988, 0.20849149],"HodnotaElementu":0.21392044899999998,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 100.0], [480.0, 120.0], [459.99999999999994, 120.0]],"cisloElementu":237,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[155.0, 174.0, 173.0],"HodnotyVrcholu":[0.20849149, 0.208507689, 0.216648869],"HodnotaElementu":0.21121601599999998,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 120.0], [480.0, 100.0], [500.0, 100.0]],"cisloElementu":238,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[174.0, 155.0, 28.0],"HodnotyVrcholu":[0.208507689, 0.20849149, 0.211245665],"HodnotaElementu":0.20941494800000002,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[500.0, 100.0], [500.0, 120.0], [480.0, 120.0]],"cisloElementu":239,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[28.0, 29.0, 174.0],"HodnotyVrcholu":[0.211245665, 0.211257864, 0.208507689],"HodnotaElementu":0.21033707266666668,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[100.0, 140.0], [100.0, 120.0], [120.0, 120.0]],"cisloElementu":240,"barva":"hsl(350, 100%, 50%)","OznaceniVrcholu":[54.0, 55.0, 156.0],"HodnotyVrcholu":[1.0, 1.0, 0.788779678],"HodnotaElementu":0.929593226,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 120.0], [120.0, 140.0], [100.0, 140.0]],"cisloElementu":241,"barva":"hsl(342, 100%, 50%)","OznaceniVrcholu":[156.0, 175.0, 54.0],"HodnotyVrcholu":[0.788779678, 0.788673281, 1.0],"HodnotaElementu":0.8591509863333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 140.0], [120.0, 120.0], [140.0, 120.0]],"cisloElementu":242,"barva":"hsl(331, 100%, 50%)","OznaceniVrcholu":[175.0, 156.0, 157.0],"HodnotyVrcholu":[0.788673281, 0.788779678, 0.682327622],"HodnotaElementu":0.7532601936666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 120.0], [140.0, 140.0], [120.0, 140.0]],"cisloElementu":243,"barva":"hsl(327, 100%, 50%)","OznaceniVrcholu":[157.0, 176.0, 175.0],"HodnotyVrcholu":[0.682327622, 0.682116391, 0.788673281],"HodnotaElementu":0.7177057646666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 140.0], [140.0, 120.0], [160.0, 120.0]],"cisloElementu":244,"barva":"hsl(321, 100%, 50%)","OznaceniVrcholu":[176.0, 157.0, 158.0],"HodnotyVrcholu":[0.682116391, 0.682327622, 0.60343212],"HodnotaElementu":0.6559587109999999,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 120.0], [160.0, 140.0], [140.0, 140.0]],"cisloElementu":245,"barva":"hsl(318, 100%, 50%)","OznaceniVrcholu":[158.0, 177.0, 176.0],"HodnotyVrcholu":[0.60343212, 0.603360371, 0.682116391],"HodnotaElementu":0.629636294,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 140.0], [160.0, 120.0], [180.0, 120.0]],"cisloElementu":246,"barva":"hsl(313, 100%, 50%)","OznaceniVrcholu":[177.0, 158.0, 159.0],"HodnotyVrcholu":[0.603360371, 0.60343212, 0.540528103],"HodnotaElementu":0.5824401979999999,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 120.0], [180.0, 140.0], [160.0, 140.0]],"cisloElementu":247,"barva":"hsl(310, 100%, 50%)","OznaceniVrcholu":[159.0, 178.0, 177.0],"HodnotyVrcholu":[0.540528103, 0.540568313, 0.603360371],"HodnotaElementu":0.5614855956666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 140.0], [180.0, 120.0], [200.0, 120.0]],"cisloElementu":248,"barva":"hsl(306, 100%, 50%)","OznaceniVrcholu":[178.0, 159.0, 160.0],"HodnotyVrcholu":[0.540568313, 0.540528103, 0.489172104],"HodnotaElementu":0.52342284,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 120.0], [200.0, 140.0], [180.0, 140.0]],"cisloElementu":249,"barva":"hsl(304, 100%, 50%)","OznaceniVrcholu":[160.0, 179.0, 178.0],"HodnotyVrcholu":[0.489172104, 0.48927491, 0.540568313],"HodnotaElementu":0.5063384423333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 140.0], [200.0, 120.0], [220.00000000000003, 120.0]],"cisloElementu":250,"barva":"hsl(301, 100%, 50%)","OznaceniVrcholu":[179.0, 160.0, 161.0],"HodnotyVrcholu":[0.48927491, 0.489172104, 0.446512505],"HodnotaElementu":0.47498650633333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 120.0], [220.00000000000003, 140.0], [200.0, 140.0]],"cisloElementu":251,"barva":"hsl(300, 100%, 50%)","OznaceniVrcholu":[161.0, 180.0, 179.0],"HodnotyVrcholu":[0.446512505, 0.446640908, 0.48927491],"HodnotaElementu":0.46080944100000004,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 140.0], [220.00000000000003, 120.0], [240.0, 120.0]],"cisloElementu":252,"barva":"hsl(297, 100%, 50%)","OznaceniVrcholu":[180.0, 161.0, 162.0],"HodnotyVrcholu":[0.446640908, 0.446512505, 0.410553735],"HodnotaElementu":0.43456904933333335,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 120.0], [240.0, 140.0], [220.00000000000003, 140.0]],"cisloElementu":253,"barva":"hsl(295, 100%, 50%)","OznaceniVrcholu":[162.0, 181.0, 180.0],"HodnotyVrcholu":[0.410553735, 0.410685397, 0.446640908],"HodnotaElementu":0.42262668000000003,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 140.0], [240.0, 120.0], [260.0, 120.0]],"cisloElementu":254,"barva":"hsl(293, 100%, 50%)","OznaceniVrcholu":[181.0, 162.0, 163.0],"HodnotyVrcholu":[0.410685397, 0.410553735, 0.379858356],"HodnotaElementu":0.40036582933333337,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 120.0], [260.0, 140.0], [240.0, 140.0]],"cisloElementu":255,"barva":"hsl(292, 100%, 50%)","OznaceniVrcholu":[163.0, 182.0, 181.0],"HodnotyVrcholu":[0.379858356, 0.379981807, 0.410685397],"HodnotaElementu":0.3901751866666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 140.0], [260.0, 120.0], [280.0, 120.0]],"cisloElementu":256,"barva":"hsl(290, 100%, 50%)","OznaceniVrcholu":[182.0, 163.0, 164.0],"HodnotyVrcholu":[0.379981807, 0.379858356, 0.35336743],"HodnotaElementu":0.3710691976666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 120.0], [280.0, 140.0], [260.0, 140.0]],"cisloElementu":257,"barva":"hsl(289, 100%, 50%)","OznaceniVrcholu":[164.0, 183.0, 182.0],"HodnotyVrcholu":[0.35336743, 0.35347767, 0.379981807],"HodnotaElementu":0.3622756356666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 140.0], [280.0, 120.0], [300.0, 120.0]],"cisloElementu":258,"barva":"hsl(287, 100%, 50%)","OznaceniVrcholu":[183.0, 164.0, 165.0],"HodnotyVrcholu":[0.35347767, 0.35336743, 0.330284815],"HodnotaElementu":0.34570997166666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 120.0], [300.0, 140.0], [280.0, 140.0]],"cisloElementu":259,"barva":"hsl(286, 100%, 50%)","OznaceniVrcholu":[165.0, 184.0, 183.0],"HodnotyVrcholu":[0.330284815, 0.330380191, 0.35347767],"HodnotaElementu":0.3380475586666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 140.0], [300.0, 120.0], [320.0, 120.0]],"cisloElementu":260,"barva":"hsl(285, 100%, 50%)","OznaceniVrcholu":[184.0, 165.0, 166.0],"HodnotyVrcholu":[0.330380191, 0.330284815, 0.31000097],"HodnotaElementu":0.32355532533333337,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 120.0], [320.0, 140.0], [300.0, 140.0]],"cisloElementu":261,"barva":"hsl(284, 100%, 50%)","OznaceniVrcholu":[166.0, 185.0, 184.0],"HodnotyVrcholu":[0.31000097, 0.310081601, 0.330380191],"HodnotaElementu":0.3168209206666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 140.0], [320.0, 120.0], [340.0, 120.0]],"cisloElementu":262,"barva":"hsl(283, 100%, 50%)","OznaceniVrcholu":[185.0, 166.0, 167.0],"HodnotyVrcholu":[0.310081601, 0.31000097, 0.292041918],"HodnotaElementu":0.3040414963333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 120.0], [340.0, 140.0], [320.0, 140.0]],"cisloElementu":263,"barva":"hsl(282, 100%, 50%)","OznaceniVrcholu":[167.0, 186.0, 185.0],"HodnotyVrcholu":[0.292041918, 0.292108897, 0.310081601],"HodnotaElementu":0.29807747199999995,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 140.0], [340.0, 120.0], [360.0, 120.0]],"cisloElementu":264,"barva":"hsl(281, 100%, 50%)","OznaceniVrcholu":[186.0, 167.0, 168.0],"HodnotyVrcholu":[0.292108897, 0.292041918, 0.276034056],"HodnotaElementu":0.2867282903333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 120.0], [360.0, 140.0], [340.0, 140.0]],"cisloElementu":265,"barva":"hsl(280, 100%, 50%)","OznaceniVrcholu":[168.0, 187.0, 186.0],"HodnotyVrcholu":[0.276034056, 0.27608907, 0.292108897],"HodnotaElementu":0.28141067433333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 140.0], [360.0, 120.0], [380.0, 120.0]],"cisloElementu":266,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[187.0, 168.0, 169.0],"HodnotyVrcholu":[0.27608907, 0.276034056, 0.261679294],"HodnotaElementu":0.27126747333333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 120.0], [380.0, 140.0], [360.0, 140.0]],"cisloElementu":267,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[169.0, 188.0, 187.0],"HodnotyVrcholu":[0.261679294, 0.261724485, 0.27608907],"HodnotaElementu":0.2664976163333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 140.0], [380.0, 120.0], [400.0, 120.0]],"cisloElementu":268,"barva":"hsl(278, 100%, 50%)","OznaceniVrcholu":[188.0, 169.0, 170.0],"HodnotyVrcholu":[0.261724485, 0.261679294, 0.248737059],"HodnotaElementu":0.25738027933333335,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 120.0], [400.0, 140.0], [380.0, 140.0]],"cisloElementu":269,"barva":"hsl(277, 100%, 50%)","OznaceniVrcholu":[170.0, 189.0, 188.0],"HodnotyVrcholu":[0.248737059, 0.248774965, 0.261724485],"HodnotaElementu":0.25307883633333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 140.0], [400.0, 120.0], [420.0, 120.0]],"cisloElementu":270,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[189.0, 170.0, 171.0],"HodnotyVrcholu":[0.248774965, 0.248737059, 0.237011111],"HodnotaElementu":0.244841045,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 120.0], [420.0, 140.0], [400.0, 140.0]],"cisloElementu":271,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[171.0, 190.0, 189.0],"HodnotyVrcholu":[0.237011111, 0.237044377, 0.248774965],"HodnotaElementu":0.24094348433333332,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 140.0], [420.0, 120.0], [440.00000000000006, 120.0]],"cisloElementu":272,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[190.0, 171.0, 172.0],"HodnotyVrcholu":[0.237044377, 0.237011111, 0.226342688],"HodnotaElementu":0.23346605866666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 120.0], [440.00000000000006, 140.0], [420.0, 140.0]],"cisloElementu":273,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[172.0, 191.0, 190.0],"HodnotyVrcholu":[0.226342688, 0.226372834, 0.237044377],"HodnotaElementu":0.22991996633333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 140.0], [440.00000000000006, 120.0], [459.99999999999994, 120.0]],"cisloElementu":274,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[191.0, 172.0, 173.0],"HodnotyVrcholu":[0.226372834, 0.226342688, 0.216648869],"HodnotaElementu":0.22312146366666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 120.0], [459.99999999999994, 140.0], [440.00000000000006, 140.0]],"cisloElementu":275,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[173.0, 192.0, 191.0],"HodnotyVrcholu":[0.216648869, 0.21667353, 0.226372834],"HodnotaElementu":0.219898411,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 140.0], [459.99999999999994, 120.0], [480.0, 120.0]],"cisloElementu":276,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[192.0, 173.0, 174.0],"HodnotyVrcholu":[0.21667353, 0.216648869, 0.208507689],"HodnotaElementu":0.2139433626666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 120.0], [480.0, 140.0], [459.99999999999994, 140.0]],"cisloElementu":277,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[174.0, 193.0, 192.0],"HodnotyVrcholu":[0.208507689, 0.208516241, 0.21667353],"HodnotaElementu":0.2112324866666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 140.0], [480.0, 120.0], [500.0, 120.0]],"cisloElementu":278,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[193.0, 174.0, 29.0],"HodnotyVrcholu":[0.208516241, 0.208507689, 0.211257864],"HodnotaElementu":0.20942726466666664,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[500.0, 120.0], [500.0, 140.0], [480.0, 140.0]],"cisloElementu":279,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[29.0, 30.0, 193.0],"HodnotyVrcholu":[0.211257864, 0.211250839, 0.208516241],"HodnotaElementu":0.210341648,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[100.0, 160.0], [100.0, 140.0], [120.0, 140.0]],"cisloElementu":280,"barva":"hsl(350, 100%, 50%)","OznaceniVrcholu":[53.0, 54.0, 175.0],"HodnotyVrcholu":[1.0, 1.0, 0.788673281],"HodnotaElementu":0.9295577603333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 140.0], [120.0, 160.0], [100.0, 160.0]],"cisloElementu":281,"barva":"hsl(342, 100%, 50%)","OznaceniVrcholu":[175.0, 194.0, 53.0],"HodnotyVrcholu":[0.788673281, 0.78881186, 1.0],"HodnotaElementu":0.8591617136666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 160.0], [120.0, 140.0], [140.0, 140.0]],"cisloElementu":282,"barva":"hsl(331, 100%, 50%)","OznaceniVrcholu":[194.0, 175.0, 176.0],"HodnotyVrcholu":[0.78881186, 0.788673281, 0.682116391],"HodnotaElementu":0.7532005106666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 140.0], [140.0, 160.0], [120.0, 160.0]],"cisloElementu":283,"barva":"hsl(327, 100%, 50%)","OznaceniVrcholu":[176.0, 195.0, 194.0],"HodnotyVrcholu":[0.682116391, 0.68205311, 0.78881186],"HodnotaElementu":0.7176604536666668,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 160.0], [140.0, 140.0], [160.0, 140.0]],"cisloElementu":284,"barva":"hsl(321, 100%, 50%)","OznaceniVrcholu":[195.0, 176.0, 177.0],"HodnotyVrcholu":[0.68205311, 0.682116391, 0.603360371],"HodnotaElementu":0.6558432906666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 140.0], [160.0, 160.0], [140.0, 160.0]],"cisloElementu":285,"barva":"hsl(318, 100%, 50%)","OznaceniVrcholu":[177.0, 196.0, 195.0],"HodnotyVrcholu":[0.603360371, 0.603508035, 0.68205311],"HodnotaElementu":0.6296405053333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 160.0], [160.0, 140.0], [180.0, 140.0]],"cisloElementu":286,"barva":"hsl(313, 100%, 50%)","OznaceniVrcholu":[196.0, 177.0, 178.0],"HodnotyVrcholu":[0.603508035, 0.603360371, 0.540568313],"HodnotaElementu":0.5824789063333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 140.0], [180.0, 160.0], [160.0, 160.0]],"cisloElementu":287,"barva":"hsl(310, 100%, 50%)","OznaceniVrcholu":[178.0, 197.0, 196.0],"HodnotyVrcholu":[0.540568313, 0.540809844, 0.603508035],"HodnotaElementu":0.5616287306666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 160.0], [180.0, 140.0], [200.0, 140.0]],"cisloElementu":288,"barva":"hsl(306, 100%, 50%)","OznaceniVrcholu":[197.0, 178.0, 179.0],"HodnotyVrcholu":[0.540809844, 0.540568313, 0.48927491],"HodnotaElementu":0.5235510223333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 140.0], [200.0, 160.0], [180.0, 160.0]],"cisloElementu":289,"barva":"hsl(304, 100%, 50%)","OznaceniVrcholu":[179.0, 198.0, 197.0],"HodnotyVrcholu":[0.48927491, 0.489519501, 0.540809844],"HodnotaElementu":0.5065347516666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 160.0], [200.0, 140.0], [220.00000000000003, 140.0]],"cisloElementu":290,"barva":"hsl(301, 100%, 50%)","OznaceniVrcholu":[198.0, 179.0, 180.0],"HodnotyVrcholu":[0.489519501, 0.48927491, 0.446640908],"HodnotaElementu":0.47514510633333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 140.0], [220.00000000000003, 160.0], [200.0, 160.0]],"cisloElementu":291,"barva":"hsl(300, 100%, 50%)","OznaceniVrcholu":[180.0, 199.0, 198.0],"HodnotyVrcholu":[0.446640908, 0.446857632, 0.489519501],"HodnotaElementu":0.46100601366666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 160.0], [220.00000000000003, 140.0], [240.0, 140.0]],"cisloElementu":292,"barva":"hsl(297, 100%, 50%)","OznaceniVrcholu":[199.0, 180.0, 181.0],"HodnotyVrcholu":[0.446857632, 0.446640908, 0.410685397],"HodnotaElementu":0.434727979,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 140.0], [240.0, 160.0], [220.00000000000003, 160.0]],"cisloElementu":293,"barva":"hsl(295, 100%, 50%)","OznaceniVrcholu":[181.0, 200.0, 199.0],"HodnotyVrcholu":[0.410685397, 0.410868945, 0.446857632],"HodnotaElementu":0.4228039913333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 160.0], [240.0, 140.0], [260.0, 140.0]],"cisloElementu":294,"barva":"hsl(293, 100%, 50%)","OznaceniVrcholu":[200.0, 181.0, 182.0],"HodnotyVrcholu":[0.410868945, 0.410685397, 0.379981807],"HodnotaElementu":0.4005120496666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 140.0], [260.0, 160.0], [240.0, 160.0]],"cisloElementu":295,"barva":"hsl(292, 100%, 50%)","OznaceniVrcholu":[182.0, 201.0, 200.0],"HodnotyVrcholu":[0.379981807, 0.38013477, 0.410868945],"HodnotaElementu":0.39032850733333335,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 160.0], [260.0, 140.0], [280.0, 140.0]],"cisloElementu":296,"barva":"hsl(290, 100%, 50%)","OznaceniVrcholu":[201.0, 182.0, 183.0],"HodnotyVrcholu":[0.38013477, 0.379981807, 0.35347767],"HodnotaElementu":0.37119808233333335,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 140.0], [280.0, 160.0], [260.0, 160.0]],"cisloElementu":297,"barva":"hsl(289, 100%, 50%)","OznaceniVrcholu":[183.0, 202.0, 201.0],"HodnotyVrcholu":[0.35347767, 0.353604196, 0.38013477],"HodnotaElementu":0.3624055453333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 160.0], [280.0, 140.0], [300.0, 140.0]],"cisloElementu":298,"barva":"hsl(287, 100%, 50%)","OznaceniVrcholu":[202.0, 183.0, 184.0],"HodnotyVrcholu":[0.353604196, 0.35347767, 0.330380191],"HodnotaElementu":0.3458206856666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 140.0], [300.0, 160.0], [280.0, 160.0]],"cisloElementu":299,"barva":"hsl(286, 100%, 50%)","OznaceniVrcholu":[184.0, 203.0, 202.0],"HodnotyVrcholu":[0.330380191, 0.330484205, 0.353604196],"HodnotaElementu":0.33815619733333335,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 160.0], [300.0, 140.0], [320.0, 140.0]],"cisloElementu":300,"barva":"hsl(285, 100%, 50%)","OznaceniVrcholu":[203.0, 184.0, 185.0],"HodnotyVrcholu":[0.330484205, 0.330380191, 0.310081601],"HodnotaElementu":0.32364866566666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 140.0], [320.0, 160.0], [300.0, 160.0]],"cisloElementu":301,"barva":"hsl(284, 100%, 50%)","OznaceniVrcholu":[185.0, 204.0, 203.0],"HodnotyVrcholu":[0.310081601, 0.310166478, 0.330484205],"HodnotaElementu":0.31691076133333335,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 160.0], [320.0, 140.0], [340.0, 140.0]],"cisloElementu":302,"barva":"hsl(283, 100%, 50%)","OznaceniVrcholu":[204.0, 185.0, 186.0],"HodnotyVrcholu":[0.310166478, 0.310081601, 0.292108897],"HodnotaElementu":0.304118992,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 140.0], [340.0, 160.0], [320.0, 160.0]],"cisloElementu":303,"barva":"hsl(282, 100%, 50%)","OznaceniVrcholu":[186.0, 205.0, 204.0],"HodnotyVrcholu":[0.292108897, 0.292177506, 0.310166478],"HodnotaElementu":0.29815096033333327,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 160.0], [340.0, 140.0], [360.0, 140.0]],"cisloElementu":304,"barva":"hsl(281, 100%, 50%)","OznaceniVrcholu":[205.0, 186.0, 187.0],"HodnotyVrcholu":[0.292177506, 0.292108897, 0.27608907],"HodnotaElementu":0.28679182433333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 140.0], [360.0, 160.0], [340.0, 160.0]],"cisloElementu":305,"barva":"hsl(280, 100%, 50%)","OznaceniVrcholu":[187.0, 206.0, 205.0],"HodnotyVrcholu":[0.27608907, 0.276143905, 0.292177506],"HodnotaElementu":0.28147016033333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 160.0], [360.0, 140.0], [380.0, 140.0]],"cisloElementu":306,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[206.0, 187.0, 188.0],"HodnotyVrcholu":[0.276143905, 0.27608907, 0.261724485],"HodnotaElementu":0.27131915333333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 140.0], [380.0, 160.0], [360.0, 160.0]],"cisloElementu":307,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[188.0, 207.0, 206.0],"HodnotyVrcholu":[0.261724485, 0.261767873, 0.276143905],"HodnotaElementu":0.266545421,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 160.0], [380.0, 140.0], [400.0, 140.0]],"cisloElementu":308,"barva":"hsl(278, 100%, 50%)","OznaceniVrcholu":[207.0, 188.0, 189.0],"HodnotyVrcholu":[0.261767873, 0.261724485, 0.248774965],"HodnotaElementu":0.25742244099999995,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 140.0], [400.0, 160.0], [380.0, 160.0]],"cisloElementu":309,"barva":"hsl(277, 100%, 50%)","OznaceniVrcholu":[189.0, 208.0, 207.0],"HodnotyVrcholu":[0.248774965, 0.248809425, 0.261767873],"HodnotaElementu":0.253117421,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 160.0], [400.0, 140.0], [420.0, 140.0]],"cisloElementu":310,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[208.0, 189.0, 190.0],"HodnotyVrcholu":[0.248809425, 0.248774965, 0.237044377],"HodnotaElementu":0.24487625566666668,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 140.0], [420.0, 160.0], [400.0, 160.0]],"cisloElementu":311,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[190.0, 209.0, 208.0],"HodnotyVrcholu":[0.237044377, 0.237073017, 0.248809425],"HodnotaElementu":0.24097560633333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 160.0], [420.0, 140.0], [440.00000000000006, 140.0]],"cisloElementu":312,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[209.0, 190.0, 191.0],"HodnotyVrcholu":[0.237073017, 0.237044377, 0.226372834],"HodnotaElementu":0.23349674266666665,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 140.0], [440.00000000000006, 160.0], [420.0, 160.0]],"cisloElementu":313,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[191.0, 210.0, 209.0],"HodnotyVrcholu":[0.226372834, 0.226398495, 0.237073017],"HodnotaElementu":0.22994811533333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 160.0], [440.00000000000006, 140.0], [459.99999999999994, 140.0]],"cisloElementu":314,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[210.0, 191.0, 192.0],"HodnotyVrcholu":[0.226398495, 0.226372834, 0.21667353],"HodnotaElementu":0.2231482863333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 140.0], [459.99999999999994, 160.0], [440.00000000000006, 160.0]],"cisloElementu":315,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[192.0, 211.0, 210.0],"HodnotyVrcholu":[0.21667353, 0.216692907, 0.226398495],"HodnotaElementu":0.219921644,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 160.0], [459.99999999999994, 140.0], [480.0, 140.0]],"cisloElementu":316,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[211.0, 192.0, 193.0],"HodnotyVrcholu":[0.216692907, 0.21667353, 0.208516241],"HodnotaElementu":0.21396089266666665,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 140.0], [480.0, 160.0], [459.99999999999994, 160.0]],"cisloElementu":317,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[193.0, 212.0, 211.0],"HodnotyVrcholu":[0.208516241, 0.208508583, 0.216692907],"HodnotaElementu":0.21123924366666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 160.0], [480.0, 140.0], [500.0, 140.0]],"cisloElementu":318,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[212.0, 193.0, 30.0],"HodnotyVrcholu":[0.208508583, 0.208516241, 0.211250839],"HodnotaElementu":0.20942522099999997,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[500.0, 140.0], [500.0, 160.0], [480.0, 160.0]],"cisloElementu":319,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[30.0, 31.0, 212.0],"HodnotyVrcholu":[0.211250839, 0.211211002, 0.208508583],"HodnotaElementu":0.21032347466666668,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[100.0, 180.0], [100.0, 160.0], [120.0, 160.0]],"cisloElementu":320,"barva":"hsl(350, 100%, 50%)","OznaceniVrcholu":[52.0, 53.0, 194.0],"HodnotyVrcholu":[1.0, 1.0, 0.78881186],"HodnotaElementu":0.9296039533333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 160.0], [120.0, 180.0], [100.0, 180.0]],"cisloElementu":321,"barva":"hsl(342, 100%, 50%)","OznaceniVrcholu":[194.0, 213.0, 52.0],"HodnotyVrcholu":[0.78881186, 0.790270631, 1.0],"HodnotaElementu":0.8596941636666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 180.0], [120.0, 160.0], [140.0, 160.0]],"cisloElementu":322,"barva":"hsl(331, 100%, 50%)","OznaceniVrcholu":[213.0, 194.0, 195.0],"HodnotyVrcholu":[0.790270631, 0.78881186, 0.68205311],"HodnotaElementu":0.7537118669999999,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 160.0], [140.0, 180.0], [120.0, 180.0]],"cisloElementu":323,"barva":"hsl(327, 100%, 50%)","OznaceniVrcholu":[195.0, 214.0, 213.0],"HodnotyVrcholu":[0.68205311, 0.682778475, 0.790270631],"HodnotaElementu":0.7183674053333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 180.0], [140.0, 160.0], [160.0, 160.0]],"cisloElementu":324,"barva":"hsl(321, 100%, 50%)","OznaceniVrcholu":[214.0, 195.0, 196.0],"HodnotyVrcholu":[0.682778475, 0.68205311, 0.603508035],"HodnotaElementu":0.6561132066666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 160.0], [160.0, 180.0], [140.0, 180.0]],"cisloElementu":325,"barva":"hsl(318, 100%, 50%)","OznaceniVrcholu":[196.0, 215.0, 214.0],"HodnotyVrcholu":[0.603508035, 0.604162064, 0.682778475],"HodnotaElementu":0.6301495246666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 180.0], [160.0, 160.0], [180.0, 160.0]],"cisloElementu":326,"barva":"hsl(313, 100%, 50%)","OznaceniVrcholu":[215.0, 196.0, 197.0],"HodnotyVrcholu":[0.604162064, 0.603508035, 0.540809844],"HodnotaElementu":0.5828266476666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 160.0], [180.0, 180.0], [160.0, 180.0]],"cisloElementu":327,"barva":"hsl(310, 100%, 50%)","OznaceniVrcholu":[197.0, 216.0, 215.0],"HodnotyVrcholu":[0.540809844, 0.541365292, 0.604162064],"HodnotaElementu":0.5621124000000001,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 180.0], [180.0, 160.0], [200.0, 160.0]],"cisloElementu":328,"barva":"hsl(306, 100%, 50%)","OznaceniVrcholu":[216.0, 197.0, 198.0],"HodnotyVrcholu":[0.541365292, 0.540809844, 0.489519501],"HodnotaElementu":0.5238982123333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 160.0], [200.0, 180.0], [180.0, 180.0]],"cisloElementu":329,"barva":"hsl(305, 100%, 50%)","OznaceniVrcholu":[198.0, 217.0, 216.0],"HodnotyVrcholu":[0.489519501, 0.489946833, 0.541365292],"HodnotaElementu":0.5069438753333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 180.0], [200.0, 160.0], [220.00000000000003, 160.0]],"cisloElementu":330,"barva":"hsl(301, 100%, 50%)","OznaceniVrcholu":[217.0, 198.0, 199.0],"HodnotyVrcholu":[0.489946833, 0.489519501, 0.446857632],"HodnotaElementu":0.475441322,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 160.0], [220.00000000000003, 180.0], [200.0, 180.0]],"cisloElementu":331,"barva":"hsl(300, 100%, 50%)","OznaceniVrcholu":[199.0, 218.0, 217.0],"HodnotyVrcholu":[0.446857632, 0.44717709, 0.489946833],"HodnotaElementu":0.46132718500000003,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 180.0], [220.00000000000003, 160.0], [240.0, 160.0]],"cisloElementu":332,"barva":"hsl(297, 100%, 50%)","OznaceniVrcholu":[218.0, 199.0, 200.0],"HodnotyVrcholu":[0.44717709, 0.446857632, 0.410868945],"HodnotaElementu":0.434967889,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 160.0], [240.0, 180.0], [220.00000000000003, 180.0]],"cisloElementu":333,"barva":"hsl(295, 100%, 50%)","OznaceniVrcholu":[200.0, 219.0, 218.0],"HodnotyVrcholu":[0.410868945, 0.411109254, 0.44717709],"HodnotaElementu":0.42305176299999997,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 180.0], [240.0, 160.0], [260.0, 160.0]],"cisloElementu":334,"barva":"hsl(293, 100%, 50%)","OznaceniVrcholu":[219.0, 200.0, 201.0],"HodnotyVrcholu":[0.411109254, 0.410868945, 0.38013477],"HodnotaElementu":0.400704323,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 160.0], [260.0, 180.0], [240.0, 180.0]],"cisloElementu":335,"barva":"hsl(292, 100%, 50%)","OznaceniVrcholu":[201.0, 220.0, 219.0],"HodnotyVrcholu":[0.38013477, 0.380318565, 0.411109254],"HodnotaElementu":0.39052086300000005,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 180.0], [260.0, 160.0], [280.0, 160.0]],"cisloElementu":336,"barva":"hsl(290, 100%, 50%)","OznaceniVrcholu":[220.0, 201.0, 202.0],"HodnotyVrcholu":[0.380318565, 0.38013477, 0.353604196],"HodnotaElementu":0.37135251033333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 160.0], [280.0, 180.0], [260.0, 180.0]],"cisloElementu":337,"barva":"hsl(289, 100%, 50%)","OznaceniVrcholu":[202.0, 221.0, 220.0],"HodnotyVrcholu":[0.353604196, 0.353746988, 0.380318565],"HodnotaElementu":0.362556583,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 180.0], [280.0, 160.0], [300.0, 160.0]],"cisloElementu":338,"barva":"hsl(287, 100%, 50%)","OznaceniVrcholu":[221.0, 202.0, 203.0],"HodnotyVrcholu":[0.353746988, 0.353604196, 0.330484205],"HodnotaElementu":0.3459451296666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 160.0], [300.0, 180.0], [280.0, 180.0]],"cisloElementu":339,"barva":"hsl(286, 100%, 50%)","OznaceniVrcholu":[203.0, 222.0, 221.0],"HodnotyVrcholu":[0.330484205, 0.330596381, 0.353746988],"HodnotaElementu":0.338275858,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 180.0], [300.0, 160.0], [320.0, 160.0]],"cisloElementu":340,"barva":"hsl(285, 100%, 50%)","OznaceniVrcholu":[222.0, 203.0, 204.0],"HodnotyVrcholu":[0.330596381, 0.330484205, 0.310166478],"HodnotaElementu":0.32374902133333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 160.0], [320.0, 180.0], [300.0, 180.0]],"cisloElementu":341,"barva":"hsl(284, 100%, 50%)","OznaceniVrcholu":[204.0, 223.0, 222.0],"HodnotyVrcholu":[0.310166478, 0.310255099, 0.330596381],"HodnotaElementu":0.317005986,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 180.0], [320.0, 160.0], [340.0, 160.0]],"cisloElementu":342,"barva":"hsl(283, 100%, 50%)","OznaceniVrcholu":[223.0, 204.0, 205.0],"HodnotyVrcholu":[0.310255099, 0.310166478, 0.292177506],"HodnotaElementu":0.3041996943333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 160.0], [340.0, 180.0], [320.0, 180.0]],"cisloElementu":343,"barva":"hsl(282, 100%, 50%)","OznaceniVrcholu":[205.0, 224.0, 223.0],"HodnotyVrcholu":[0.292177506, 0.292247475, 0.310255099],"HodnotaElementu":0.2982266933333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 180.0], [340.0, 160.0], [360.0, 160.0]],"cisloElementu":344,"barva":"hsl(281, 100%, 50%)","OznaceniVrcholu":[224.0, 205.0, 206.0],"HodnotyVrcholu":[0.292247475, 0.292177506, 0.276143905],"HodnotaElementu":0.28685629533333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 160.0], [360.0, 180.0], [340.0, 180.0]],"cisloElementu":345,"barva":"hsl(280, 100%, 50%)","OznaceniVrcholu":[206.0, 225.0, 224.0],"HodnotyVrcholu":[0.276143905, 0.276198683, 0.292247475],"HodnotaElementu":0.281530021,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 180.0], [360.0, 160.0], [380.0, 160.0]],"cisloElementu":346,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[225.0, 206.0, 207.0],"HodnotyVrcholu":[0.276198683, 0.276143905, 0.261767873],"HodnotaElementu":0.27137015366666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 160.0], [380.0, 180.0], [360.0, 180.0]],"cisloElementu":347,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[207.0, 226.0, 225.0],"HodnotyVrcholu":[0.261767873, 0.261809991, 0.276198683],"HodnotaElementu":0.2665921823333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 180.0], [380.0, 160.0], [400.0, 160.0]],"cisloElementu":348,"barva":"hsl(278, 100%, 50%)","OznaceniVrcholu":[226.0, 207.0, 208.0],"HodnotyVrcholu":[0.261809991, 0.261767873, 0.248809425],"HodnotaElementu":0.25746242966666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 160.0], [400.0, 180.0], [380.0, 180.0]],"cisloElementu":349,"barva":"hsl(277, 100%, 50%)","OznaceniVrcholu":[208.0, 227.0, 226.0],"HodnotyVrcholu":[0.248809425, 0.24884113, 0.261809991],"HodnotaElementu":0.25315351533333336,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 180.0], [400.0, 160.0], [420.0, 160.0]],"cisloElementu":350,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[227.0, 208.0, 209.0],"HodnotyVrcholu":[0.24884113, 0.248809425, 0.237073017],"HodnotaElementu":0.24490785733333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 160.0], [420.0, 180.0], [400.0, 180.0]],"cisloElementu":351,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[209.0, 228.0, 227.0],"HodnotyVrcholu":[0.237073017, 0.237097361, 0.24884113],"HodnotaElementu":0.241003836,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 180.0], [420.0, 160.0], [440.00000000000006, 160.0]],"cisloElementu":352,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[228.0, 209.0, 210.0],"HodnotyVrcholu":[0.237097361, 0.237073017, 0.226398495],"HodnotaElementu":0.23352295766666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 160.0], [440.00000000000006, 180.0], [420.0, 180.0]],"cisloElementu":353,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[210.0, 229.0, 228.0],"HodnotyVrcholu":[0.226398495, 0.226419222, 0.237097361],"HodnotaElementu":0.2299716926666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 180.0], [440.00000000000006, 160.0], [459.99999999999994, 160.0]],"cisloElementu":354,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[229.0, 210.0, 211.0],"HodnotyVrcholu":[0.226419222, 0.226398495, 0.216692907],"HodnotaElementu":0.22317020799999998,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 160.0], [459.99999999999994, 180.0], [440.00000000000006, 180.0]],"cisloElementu":355,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[211.0, 230.0, 229.0],"HodnotyVrcholu":[0.216692907, 0.216702493, 0.226419222],"HodnotaElementu":0.21993820733333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 180.0], [459.99999999999994, 160.0], [480.0, 160.0]],"cisloElementu":356,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[230.0, 211.0, 212.0],"HodnotyVrcholu":[0.216702493, 0.216692907, 0.208508583],"HodnotaElementu":0.21396799433333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 160.0], [480.0, 180.0], [459.99999999999994, 180.0]],"cisloElementu":357,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[212.0, 231.0, 230.0],"HodnotyVrcholu":[0.208508583, 0.208458935, 0.216702493],"HodnotaElementu":0.21122333699999998,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 180.0], [480.0, 160.0], [500.0, 160.0]],"cisloElementu":358,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[231.0, 212.0, 31.0],"HodnotyVrcholu":[0.208458935, 0.208508583, 0.211211002],"HodnotaElementu":0.20939284,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[500.0, 160.0], [500.0, 180.0], [480.0, 180.0]],"cisloElementu":359,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[31.0, 32.0, 231.0],"HodnotyVrcholu":[0.211211002, 0.21126629, 0.208458935],"HodnotaElementu":0.21031207566666668,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[100.0, 200.0], [100.0, 180.0], [120.0, 180.0]],"cisloElementu":360,"barva":"hsl(350, 100%, 50%)","OznaceniVrcholu":[4.0, 52.0, 213.0],"HodnotyVrcholu":[1.0, 1.0, 0.790270631],"HodnotaElementu":0.9300902103333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 180.0], [120.0, 200.0], [100.0, 200.0]],"cisloElementu":361,"barva":"hsl(343, 100%, 50%)","OznaceniVrcholu":[213.0, 51.0, 4.0],"HodnotyVrcholu":[0.790270631, 0.796648131, 1.0],"HodnotaElementu":0.8623062539999999,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[120.0, 200.0], [120.0, 180.0], [140.0, 180.0]],"cisloElementu":362,"barva":"hsl(331, 100%, 50%)","OznaceniVrcholu":[51.0, 213.0, 214.0],"HodnotyVrcholu":[0.796648131, 0.790270631, 0.682778475],"HodnotaElementu":0.7565657456666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 180.0], [140.0, 200.0], [120.0, 200.0]],"cisloElementu":363,"barva":"hsl(328, 100%, 50%)","OznaceniVrcholu":[214.0, 50.0, 51.0],"HodnotyVrcholu":[0.682778475, 0.685647866, 0.796648131],"HodnotaElementu":0.7216914906666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[140.0, 200.0], [140.0, 180.0], [160.0, 180.0]],"cisloElementu":364,"barva":"hsl(321, 100%, 50%)","OznaceniVrcholu":[50.0, 214.0, 215.0],"HodnotyVrcholu":[0.685647866, 0.682778475, 0.604162064],"HodnotaElementu":0.6575294683333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 180.0], [160.0, 200.0], [140.0, 200.0]],"cisloElementu":365,"barva":"hsl(318, 100%, 50%)","OznaceniVrcholu":[215.0, 49.0, 50.0],"HodnotyVrcholu":[0.604162064, 0.605563845, 0.685647866],"HodnotaElementu":0.6317912583333334,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[160.0, 200.0], [160.0, 180.0], [180.0, 180.0]],"cisloElementu":366,"barva":"hsl(313, 100%, 50%)","OznaceniVrcholu":[49.0, 215.0, 216.0],"HodnotyVrcholu":[0.605563845, 0.604162064, 0.541365292],"HodnotaElementu":0.583697067,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 180.0], [180.0, 200.0], [160.0, 200.0]],"cisloElementu":367,"barva":"hsl(311, 100%, 50%)","OznaceniVrcholu":[216.0, 48.0, 49.0],"HodnotyVrcholu":[0.541365292, 0.542196652, 0.605563845],"HodnotaElementu":0.5630419296666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[180.0, 200.0], [180.0, 180.0], [200.0, 180.0]],"cisloElementu":368,"barva":"hsl(306, 100%, 50%)","OznaceniVrcholu":[48.0, 216.0, 217.0],"HodnotyVrcholu":[0.542196652, 0.541365292, 0.489946833],"HodnotaElementu":0.5245029256666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 180.0], [200.0, 200.0], [180.0, 200.0]],"cisloElementu":369,"barva":"hsl(305, 100%, 50%)","OznaceniVrcholu":[217.0, 47.0, 48.0],"HodnotyVrcholu":[0.489946833, 0.490493382, 0.542196652],"HodnotaElementu":0.5075456223333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[200.0, 200.0], [200.0, 180.0], [220.00000000000003, 180.0]],"cisloElementu":370,"barva":"hsl(301, 100%, 50%)","OznaceniVrcholu":[47.0, 217.0, 218.0],"HodnotyVrcholu":[0.490493382, 0.489946833, 0.44717709],"HodnotaElementu":0.47587243500000004,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 180.0], [220.00000000000003, 200.0], [200.0, 200.0]],"cisloElementu":371,"barva":"hsl(300, 100%, 50%)","OznaceniVrcholu":[218.0, 46.0, 47.0],"HodnotyVrcholu":[0.44717709, 0.447554607, 0.490493382],"HodnotaElementu":0.461741693,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[220.00000000000003, 200.0], [220.00000000000003, 180.0], [240.0, 180.0]],"cisloElementu":372,"barva":"hsl(297, 100%, 50%)","OznaceniVrcholu":[46.0, 218.0, 219.0],"HodnotyVrcholu":[0.447554607, 0.44717709, 0.411109254],"HodnotaElementu":0.43528031699999997,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 180.0], [240.0, 200.0], [220.00000000000003, 200.0]],"cisloElementu":373,"barva":"hsl(296, 100%, 50%)","OznaceniVrcholu":[219.0, 45.0, 46.0],"HodnotyVrcholu":[0.411109254, 0.411378701, 0.447554607],"HodnotaElementu":0.42334752066666664,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[240.0, 200.0], [240.0, 180.0], [260.0, 180.0]],"cisloElementu":374,"barva":"hsl(293, 100%, 50%)","OznaceniVrcholu":[45.0, 219.0, 220.0],"HodnotyVrcholu":[0.411378701, 0.411109254, 0.380318565],"HodnotaElementu":0.40093550666666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 180.0], [260.0, 200.0], [240.0, 200.0]],"cisloElementu":375,"barva":"hsl(292, 100%, 50%)","OznaceniVrcholu":[220.0, 44.0, 45.0],"HodnotyVrcholu":[0.380318565, 0.380516131, 0.411378701],"HodnotaElementu":0.390737799,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[260.0, 200.0], [260.0, 180.0], [280.0, 180.0]],"cisloElementu":376,"barva":"hsl(290, 100%, 50%)","OznaceniVrcholu":[44.0, 220.0, 221.0],"HodnotyVrcholu":[0.380516131, 0.380318565, 0.353746988],"HodnotaElementu":0.371527228,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 180.0], [280.0, 200.0], [260.0, 200.0]],"cisloElementu":377,"barva":"hsl(289, 100%, 50%)","OznaceniVrcholu":[221.0, 43.0, 44.0],"HodnotyVrcholu":[0.353746988, 0.353895181, 0.380516131],"HodnotaElementu":0.3627194333333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[280.0, 200.0], [280.0, 180.0], [300.0, 180.0]],"cisloElementu":378,"barva":"hsl(287, 100%, 50%)","OznaceniVrcholu":[43.0, 221.0, 222.0],"HodnotyVrcholu":[0.353895181, 0.353746988, 0.330596381],"HodnotaElementu":0.34607951666666664,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 180.0], [300.0, 200.0], [280.0, 200.0]],"cisloElementu":379,"barva":"hsl(286, 100%, 50%)","OznaceniVrcholu":[222.0, 42.0, 43.0],"HodnotyVrcholu":[0.330596381, 0.330709615, 0.353895181],"HodnotaElementu":0.33840039233333336,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[300.0, 200.0], [300.0, 180.0], [320.0, 180.0]],"cisloElementu":380,"barva":"hsl(285, 100%, 50%)","OznaceniVrcholu":[42.0, 222.0, 223.0],"HodnotyVrcholu":[0.330709615, 0.330596381, 0.310255099],"HodnotaElementu":0.32385369833333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 180.0], [320.0, 200.0], [300.0, 200.0]],"cisloElementu":381,"barva":"hsl(284, 100%, 50%)","OznaceniVrcholu":[223.0, 41.0, 42.0],"HodnotyVrcholu":[0.310255099, 0.310342848, 0.330709615],"HodnotaElementu":0.31710252066666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[320.0, 200.0], [320.0, 180.0], [340.0, 180.0]],"cisloElementu":382,"barva":"hsl(283, 100%, 50%)","OznaceniVrcholu":[41.0, 223.0, 224.0],"HodnotyVrcholu":[0.310342848, 0.310255099, 0.292247475],"HodnotaElementu":0.3042818073333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 180.0], [340.0, 200.0], [320.0, 200.0]],"cisloElementu":383,"barva":"hsl(282, 100%, 50%)","OznaceniVrcholu":[224.0, 40.0, 41.0],"HodnotyVrcholu":[0.292247475, 0.29231609, 0.310342848],"HodnotaElementu":0.29830213766666663,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[340.0, 200.0], [340.0, 180.0], [360.0, 180.0]],"cisloElementu":384,"barva":"hsl(281, 100%, 50%)","OznaceniVrcholu":[40.0, 224.0, 225.0],"HodnotyVrcholu":[0.29231609, 0.292247475, 0.276198683],"HodnotaElementu":0.2869207493333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 180.0], [360.0, 200.0], [340.0, 200.0]],"cisloElementu":385,"barva":"hsl(280, 100%, 50%)","OznaceniVrcholu":[225.0, 39.0, 40.0],"HodnotyVrcholu":[0.276198683, 0.276252438, 0.29231609],"HodnotaElementu":0.2815890703333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[360.0, 200.0], [360.0, 180.0], [380.0, 180.0]],"cisloElementu":386,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[39.0, 225.0, 226.0],"HodnotyVrcholu":[0.276252438, 0.276198683, 0.261809991],"HodnotaElementu":0.2714203706666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 180.0], [380.0, 200.0], [360.0, 200.0]],"cisloElementu":387,"barva":"hsl(279, 100%, 50%)","OznaceniVrcholu":[226.0, 38.0, 39.0],"HodnotyVrcholu":[0.261809991, 0.261851695, 0.276252438],"HodnotaElementu":0.26663804133333335,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[380.0, 200.0], [380.0, 180.0], [400.0, 180.0]],"cisloElementu":388,"barva":"hsl(278, 100%, 50%)","OznaceniVrcholu":[38.0, 226.0, 227.0],"HodnotyVrcholu":[0.261851695, 0.261809991, 0.24884113],"HodnotaElementu":0.2575009386666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 180.0], [400.0, 200.0], [380.0, 200.0]],"cisloElementu":389,"barva":"hsl(277, 100%, 50%)","OznaceniVrcholu":[227.0, 37.0, 38.0],"HodnotyVrcholu":[0.24884113, 0.24887265, 0.261851695],"HodnotaElementu":0.2531884916666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[400.0, 200.0], [400.0, 180.0], [420.0, 180.0]],"cisloElementu":390,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[37.0, 227.0, 228.0],"HodnotyVrcholu":[0.24887265, 0.24884113, 0.237097361],"HodnotaElementu":0.244937047,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 180.0], [420.0, 200.0], [400.0, 200.0]],"cisloElementu":391,"barva":"hsl(276, 100%, 50%)","OznaceniVrcholu":[228.0, 36.0, 37.0],"HodnotyVrcholu":[0.237097361, 0.237120346, 0.24887265],"HodnotaElementu":0.24103011900000001,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[420.0, 200.0], [420.0, 180.0], [440.00000000000006, 180.0]],"cisloElementu":392,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[36.0, 228.0, 229.0],"HodnotyVrcholu":[0.237120346, 0.237097361, 0.226419222],"HodnotaElementu":0.233545643,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 180.0], [440.00000000000006, 200.0], [420.0, 200.0]],"cisloElementu":393,"barva":"hsl(275, 100%, 50%)","OznaceniVrcholu":[229.0, 35.0, 36.0],"HodnotyVrcholu":[0.226419222, 0.226431382, 0.237120346],"HodnotaElementu":0.22999031666666667,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[440.00000000000006, 200.0], [440.00000000000006, 180.0], [459.99999999999994, 180.0]],"cisloElementu":394,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[35.0, 229.0, 230.0],"HodnotyVrcholu":[0.226431382, 0.226419222, 0.216702493],"HodnotaElementu":0.22318436566666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 180.0], [459.99999999999994, 200.0], [440.00000000000006, 200.0]],"cisloElementu":395,"barva":"hsl(274, 100%, 50%)","OznaceniVrcholu":[230.0, 34.0, 35.0],"HodnotyVrcholu":[0.216702493, 0.216643229, 0.226431382],"HodnotaElementu":0.21992570133333333,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[459.99999999999994, 200.0], [459.99999999999994, 180.0], [480.0, 180.0]],"cisloElementu":396,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[34.0, 230.0, 231.0],"HodnotyVrcholu":[0.216643229, 0.216702493, 0.208458935],"HodnotaElementu":0.21393488566666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 180.0], [480.0, 200.0], [459.99999999999994, 200.0]],"cisloElementu":397,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[231.0, 33.0, 34.0],"HodnotyVrcholu":[0.208458935, 0.207956899, 0.216643229],"HodnotaElementu":0.21101968766666668,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[480.0, 200.0], [480.0, 180.0], [500.0, 180.0]],"cisloElementu":398,"barva":"hsl(272, 100%, 50%)","OznaceniVrcholu":[33.0, 231.0, 32.0],"HodnotyVrcholu":[0.207956899, 0.208458935, 0.21126629],"HodnotaElementu":0.20922737466666666,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"},' +
                                '{"Souradnice":[[500.0, 180.0], [500.0, 200.0], [480.0, 200.0]],"cisloElementu":399,"barva":"hsl(273, 100%, 50%)","OznaceniVrcholu":[32.0, 3.0, 33.0],"HodnotyVrcholu":[0.21126629, 0.212486985, 0.207956899],"HodnotaElementu":0.21057005799999998,"BarvaCaryElementu":"black","tloustkaCaryElementu":"1"}' +
                        ']' +
                        '},' +
                        '"Ox":50,' +
                        '"Oy":50,' +
                        '"BarvaCaryElementuZvyrazneni":"blue",' +
                        '"tloustkaCaryElementuZvyrazneni":"5",' +
                        '"cisloElementuZvyrazneni":-1,' +
                        '"nevyplnitCisloEelemntu":-1,' +
                        '"cislaVsechUzlu":false,' +
                        '"HodnotyVsechUzlu":false,' +
                        '"nasobek":1,' +
                        '"zaokrouhliNaPocetMist":0,' +
                        '"id":"test",' +
                        '"class":"XX"}' +
                        ']}';
        

        this.vykresliVsechnyElementy()

        //pouze pro orientaci - jako test
        //this.test();

    }


    //getry:
    getVsechnySouradnice(){
        return(this.vsechnySouradnice);
    }

    getVsechnyCislaElementu(){
        return(this.vsechnyCislaElementu);
    }

    getVsechnaCislaVrcholu(){
        return(this.vsechnaCislaVrcholu);
    }

    getPoleVsechUsecek(){
        return(this.poleVsechUsecek);
    }

    getVsechnyBarvy(){
        return(this.vsechnyBarvy);
    }

    getPoleVsechUzlu(){
        return(this.poleVsechUzlu);
    }

    getVsechnyHodnotyVrcholu(){
        return(this.vsechnyHodnotyVrcholu)
    }

    getVsechnyHodnotyElementu(){
        return(this.vsechnyHodnotyElementu)
    }

    getVsechnyBarvyCarElementu(){
        return(this.vsechnyBarvyCarElementu)
    }

    getVsechnytloustkyCarElementu(){
        return(this.vsechnytloustkyCarElementu)
    }

    getABPole(){
        return(this.abPole);
    }

    getCislaVsechUzlu(){
        return(this.cislaVsechUzlu);
    }

    getHodnotyVsechUzlu(){
        return(this.HodnotyVsechUzlu);
    }

    getNasobek(){
        return(this.nasobek);
    }

    getZaokrouhliNaPocetMist(){
        return(this.zaokrouhliNaPocetMist)
    }

    getOx(){
        return(this.Ox);
    }

    getOy(){
        return(this.Oy);
    }
    

    vykresliVsechnyElementy(){

        var obj = JSON.parse(this.elementy);
        var pocetId;

        pocetId = obj.elementy.length;

        //nacita koty pro jednotliva id
        for (var id = 0; id < pocetId; id++) {
            this.ziskejDataProCanvas(id, obj);
        }    

    }

    ziskejDataProCanvas(id, obj){

        var elementId = obj.elementy[id].id;
        if(elementId == ""){    //pokud je id "" pak nacte JSON class

            var trida = obj.element[id].class;
            var objClass = JSON.parse(this.class);
            var vsechnaId = objClass.class[trida];
            
            if(vsechnaId != undefined){

                for (var i = 0; i < vsechnaId.length; i++) {

                    elementId = vsechnaId[i];
                    
                    var c = document.getElementById(elementId);
                    try {
                        var ctx = c.getContext("2d");
                        this.vykreslivsechnyElementyDaneId(id, ctx, obj);
                    }
                    catch(err) {
                        console.log(elementId + " nenalezen");
                    }

                }
                
            }
            
        }
        else {

            var c = document.getElementById(elementId);

       //     try {
                var ctx = c.getContext("2d");
                this.vykreslivsechnyElementyDaneId(id, ctx, obj);
      //      }
       //     catch(err) {
      //          console.log(elementId + " nenalezen");
         //   }
            
        }
     
    }

    vykreslivsechnyElementyDaneId(id, ctx, obj){
        
        var pocetElementu;

        //console.log(obj.elementy[0].data.element.length);
        pocetElementu = obj.elementy[0].data.element.length;
        
        this.Ox = obj.elementy[id].Ox;
        this.Oy = obj.elementy[id].Oy;

        //pokud se ma zvyraznit dany element, zmeni se pouze jeho tloustka a barva cary
        //deje se to tak, ze se prepisou data zde
        var BarvaCaryElementuZvyrazneni = obj.elementy[id].BarvaCaryElementuZvyrazneni;
        var tloustkaCaryElementuZvyrazneni = obj.elementy[id].tloustkaCaryElementuZvyrazneni;
        var cisloElementuZvyrazneni = obj.elementy[id].cisloElementuZvyrazneni;

        //je mozne nezobrazit vypln elementu, udela se to tak, ze u daneho elementu se zmeni barva vyplne na "-1"
        var nevyplnitCisloEelemntu = obj.elementy[id].nevyplnitCisloEelemntu;

        //udava zda popisovat cisla vrcholu
        this.cislaVsechUzlu = obj.elementy[id].cislaVsechUzlu;

        //udava zda popisovat hodnoty vrcholu
        this.HodnotyVsechUzlu = obj.elementy[id].HodnotyVsechUzlu;

        //aby se popisy neprekryvaly, je mozne je vynasobit nasobkem a zaokrouhlit na pocet mist
        this.nasobek = obj.elementy[id].nasobek;
        this.zaokrouhliNaPocetMist = obj.elementy[id].zaokrouhliNaPocetMist;
        


        //vykresli vsechen popis
        for (var i = 0; i < pocetElementu; i++) {
            
            var Souradnice = obj.elementy[id].data.element[i].Souradnice;
            var barva = obj.elementy[id].data.element[i].barva;
            var cisloElementu = obj.elementy[id].data.element[i].cisloElementu;
            var OznaceniVrcholu = obj.elementy[id].data.element[i].OznaceniVrcholu;
            var HodnotyVrcholu = obj.elementy[id].data.element[i].HodnotyVrcholu;
            var HodnotaElementu = obj.elementy[id].data.element[i].HodnotaElementu;
            var BarvaCaryElementu = obj.elementy[id].data.element[i].BarvaCaryElementu;
            var tloustkaCaryElementu = obj.elementy[id].data.element[i].tloustkaCaryElementu;

            //zvyrazni element tak, ze prepise jeho data
            if(cisloElementu == cisloElementuZvyrazneni){
                BarvaCaryElementu = BarvaCaryElementuZvyrazneni;
                tloustkaCaryElementu = tloustkaCaryElementuZvyrazneni;
            }

            //nevykresli vypln elementu
            if(cisloElementu == nevyplnitCisloEelemntu){
                barva = "-1";
            }
           
            //this.vykresliObrysElementu(Souradnice, barva);

            //ukládá všechna data
            this.vsechnySouradnice.push(Souradnice);
            this.vsechnyCislaElementu.push(cisloElementu);
            this.vsechnaCislaVrcholu.push(OznaceniVrcholu);
            this.vsechnyBarvy.push(barva);
            this.vsechnyHodnotyVrcholu.push(HodnotyVrcholu)
            this.vsechnyHodnotyElementu.push(HodnotaElementu)
            this.vsechnyBarvyCarElementu.push(BarvaCaryElementu)
            this.vsechnytloustkyCarElementu.push(tloustkaCaryElementu)

            //vytvari pole vsech usecek elementu
            this.ziskejPoleVsechUsecekElementu(Souradnice, cisloElementu);
            
            //vytvari pole vsech ulu
            this.zapisujUzlyDoPoleUzlu(Souradnice, OznaceniVrcholu)
        }


        //vrati koeficienty "a" a "b"
        this.abPole = this.vratPoleKoeficientuAB(this.poleVsechUsecek);

        //console.log(this.poleVsechUzlu);

    }


    //rozlozi jeden element na usecky
    ziskejPoleVsechUsecekElementu(souradniceJednohoElementu, cisloElementu){

        var Ax;
        var Ay;
        var Bx;
        var By;

        var indexBoduA;
        var indexBoduB;


        //console.log(souradniceJednohoElementu);

        for (var i = 0; i < souradniceJednohoElementu.length; i++) {

            if(i < souradniceJednohoElementu.length-1){
                indexBoduA = i;
                indexBoduB = i + 1;
            }
            else {
                indexBoduA = i;
                indexBoduB = 0;
            }

            var BodA = souradniceJednohoElementu[indexBoduA];
            var BodB = souradniceJednohoElementu[indexBoduB];

            //console.log(BodA);
            Ax = BodA[0];
            Ay = BodA[1];
            Bx = BodB[0];
            By = BodB[1];

            var usecka = [Ax, Ay, Bx, By, cisloElementu];
            this.poleVsechUsecek.push(usecka);

        }

    }


    //vrati pole koeficientu "a" a "b" kazde usecky
    //kazda polozka odpovida dane usecce
    vratPoleKoeficientuAB(poleVsechUsecek){

        var koeficientyAB = [];
        var abPole = []; //dvojice koeficientu pro kazdou usecku

        for (var i = 0; i < poleVsechUsecek.length; i++) {

            var usecka = poleVsechUsecek[i];
            var Ax = usecka[0];
            var Ay = usecka[1];
            var Bx = usecka[2];
            var By = usecka[3];

            var ab = this.spocitejRovniciPrimky(Ax, Ay, Bx, By)

            abPole.push(ab);

        }
        
        return(abPole);

    }


    spocitejRovniciPrimky(Ax, Ay, Bx, By)
    {

        //koeficienty primky y = ax + b
        var a;
        var b;
        var ab = [];

        a = (Ay-By)/(Ax-Bx);
        b = By-Bx*a;

        ab.push(a);
        ab.push(b);

        return(ab);

    }


    //nacte vsechny uzly a seradi je do pole
    //index 1 : x
    //index 2 : y
    //index 3 : cislo uzlu

    zapisujUzlyDoPoleUzlu(Souradnice, OznaceniVrcholu){

        var uzelX;
        var uzelY;
        var cisloUzlu;
        var uzelXY;

        for (var i = 0; i < Souradnice.length; i++) {
            uzelXY = Souradnice[i];
            uzelX = uzelXY[0];
            uzelY = uzelXY[1];
            cisloUzlu = OznaceniVrcholu[i];

            this.zapisUzelDoPoleUzlu(uzelX, uzelY, cisloUzlu);
        }

    }
    

    zapisUzelDoPoleUzlu(uzelX, uzelY, cisloUzlu){
        
        var uzelXYcislo = [];
        var cisloUzluJizJeZapsano;

        cisloUzluJizJeZapsano = this.detekujZdaCisloUzluJeJizZapsano(this.poleVsechUzlu, cisloUzlu);
        
        if(cisloUzluJizJeZapsano == false){
            uzelXYcislo = [uzelX, uzelY, cisloUzlu];
            this.poleVsechUzlu.push(uzelXYcislo);
        }
        
    }


    detekujZdaCisloUzluJeJizZapsano(poleVsechUzlu, cisloUzluReq){

        var cisloUzluAct;
        var uzel;
        var cisloUzluJizJeZapsano = false;

        for (var i = 0; i < poleVsechUzlu.length; i++) {
            uzel = poleVsechUzlu[i];
            cisloUzluAct = uzel[2];
            if(cisloUzluAct == cisloUzluReq){
                cisloUzluJizJeZapsano = true;
                break;
            }
        }

        return(cisloUzluJizJeZapsano);
    }


}


class vykresliVsechnyElementy {

    constructor(vsechnySouradnice, vsechnyBarvy, Ox, Oy, vsechnyBarvyCarElementu, vsechnytloustkyCarElementu){
        this.Ox = Ox;
        this.Oy = Oy;
        this.vykreslujVsechnyElementy(vsechnySouradnice, vsechnyBarvy, vsechnyBarvyCarElementu, vsechnytloustkyCarElementu);
    }

    //vrati ctx, aby mohl vykreslovat popis z jine tridy
    getCtx(){
        return(this.ctx);
    }


    vykreslujVsechnyElementy(vsechnySouradnice, vsechnyBarvy, vsechnyBarvyCarElementu, vsechnytloustkyCarElementu){

        var souradniceElement = [];
        var barvaElement;
        var barvaCaryElementu;
        var tloustkaCaryElementu;

        for (var i = 0; i < vsechnySouradnice.length; i++) {
            souradniceElement = vsechnySouradnice[i];
            barvaElement = vsechnyBarvy[i];
            barvaCaryElementu = vsechnyBarvyCarElementu[i]
            tloustkaCaryElementu = vsechnytloustkyCarElementu[i]
        
            this.vykresliElement(souradniceElement, barvaElement, barvaCaryElementu, tloustkaCaryElementu);
        }
    }


    vykresliElement(souradnice, barva, barvaCaryElementu, tloustkaCaryElementu){

        var c = document.getElementById("test");
        this.ctx = c.getContext("2d");
        this.ctx.beginPath();

        //var souradnice = [[50,160],[70,80],[90,200]];
        var prvniCara;

        //vykresli danou caru
        for (var i = 0; i < souradnice.length; i++) {
            
            if(i == 0){
                prvniCara = true;
            }
            else {
                prvniCara = false;
            }

            this.vykresliDanouCaru(souradnice, i, prvniCara);
            
        }

        this.ctx.closePath();
        this.ctx.strokeStyle = barvaCaryElementu;
        this.ctx.lineWidth = tloustkaCaryElementu;
        this.ctx.stroke();

        if(barva != "-1"){
            this.ctx.fillStyle = barva;
            this.ctx.fill();
        }

    }


    vykresliDanouCaru(souradnice, indexBodu, prvniCara){

        var XYbod1 = souradnice[indexBodu];
        this.vykresliCaru(XYbod1[0], XYbod1[1], prvniCara);

    }


    vykresliCaru(Ax, Ay, prvniCara){

        Ax = Ax + this.Ox;
        Ay = Ay + this.Oy;

        if(prvniCara == true){
            this.ctx.moveTo(Ax, Ay);
        }
        else {
            this.ctx.lineTo(Ax, Ay);
        }
        
    }

}


class popisVsechnyUzly{

    constructor(vsechnySouradnice, vsechnaCislaVrcholu, Ox, Oy, nasobek, zaokrouhliNaPocetMist){

        var c = document.getElementById("test");
        this.ctx = c.getContext("2d");

        this.vsechnySouradnice = vsechnySouradnice;
        this.vsechnaCislaVrcholu = vsechnaCislaVrcholu;
        this.Ox = Ox;
        this.Oy = Oy;

        this.nasobek = nasobek;
        this.zaokrouhliNaPocetMist = zaokrouhliNaPocetMist;
        this.ziskejSouradniceProDanyElement(this.vsechnySouradnice, this.vsechnaCislaVrcholu)

    }

    ziskejSouradniceProDanyElement(vsechnySouradnice, vsechnyPopisyUzlu){

        for (var iEl = 0; iEl < vsechnySouradnice.length; iEl++) {
            var souradniceProDanyElement = vsechnySouradnice[iEl];
            var popisUzluProDanyElement = vsechnyPopisyUzlu[iEl];
        
            this.ziskejSouradniceProDanyUzel(souradniceProDanyElement, popisUzluProDanyElement);

        }
    }

    ziskejSouradniceProDanyUzel(souradniceProDanyElement, popisUzluProDanyElement){

        for (var iUz = 0; iUz < souradniceProDanyElement.length; iUz++) {
            var souradniceProDanyUzel = souradniceProDanyElement[iUz];
            var popisUzlu = popisUzluProDanyElement[iUz]

            //prenasobi hodnotu popisu pozadovanym nasobkem
            popisUzlu = popisUzlu * this.nasobek;

            //zaokrouhli na pocet pozadovanych mist
            if(this.zaokrouhliNaPocetMist > 0){
                var posunNasobek = this.zaokrouhliNaPocetMist*10
                popisUzlu = Math.round(popisUzlu*posunNasobek)/posunNasobek
            }

            var x = souradniceProDanyUzel[0] + this.Ox;
            var y = souradniceProDanyUzel[1] + this.Oy;
            
            this.vlozpopis(popisUzlu, x, y, "black")
        }    
    }

    vlozpopis(text, x, y, barva){

        console.log(text);
       
        this.ctx.fillStyle = barva;
        this.ctx.font = "15px Arial";
        this.ctx.fillText(text, x, y);

    }


}


//popise element nazaklade kliknuti, nebo vyberu
class popisElementu {

    constructor(ctx, x, y, popis, barva){

        var text = popis;
        this.ctx = ctx;
        if(text != undefined){
            this.vlozpopis(text, x, y, barva);
        }
        
    }

    vlozpopis(text, x, y, barva){
       
        this.ctx.fillStyle = barva;
        this.ctx.font = "15px Arial";
        this.ctx.fillText(text, x, y);

    }

}



class pohybMysi {

    constructor(event, poleVsechUsecek, abPole, ctx, poleVsechUzlu, Ox, Oy, vsechnaCislaVrcholu, vsechnyHodnotyVrcholu){

        this.poleVsechUsecek = poleVsechUsecek;
        
        this.a = [];
        this.b = [];


        var x = event.clientX - Ox;
        var y = event.clientY - Oy;


        var nejblizsiUsecky = [];
        var cisloElementu;      //cislo elementu na ktery bylo kliknuto
        var cisloUzlu;          //cislo uzlu na ktery bylo kliknuto

        //vypisuje cislo elementu, na ktere je kliknuto
        //nejblizsiUsecky = this.vratOkrajoveUsecky(x, abPole, poleVsechUsecek);
        //cisloElementu = this.vratCisloElementuNaKteryByloKliknuto(nejblizsiUsecky, y);

        //najde cislo uzlu, na ktery bylo kliknuto
        cisloUzlu = this.vratCisloUzluNaKteryByloKliknuto(poleVsechUzlu, x, y);

        var hodnotyZGrafu = new vyhledejHodnotyZGrafu(vsechnaCislaVrcholu, vsechnyHodnotyVrcholu, cisloUzlu);
        console.log(cisloUzlu);

        //popise element
        if(cisloUzlu == -1){ //pokud neni vybrano cislo uzlu
            //var popisElement = new popisElementu(ctx, x, y, cisloElementu, "#006600");
        }
        else {            //pokud je vybran uzel, pak popise uzel
            var popisUzlu = new popisElementu(ctx, x, y, cisloUzlu, "orange");
        }
   

    }


    vratCisloUzluNaKteryByloKliknuto(poleVsechUzlu, xKlikMysi, yKlikMysi){

        var tolerance = 10;
        var vzdalenost;
        var vzdalenostMin;
        var Ax;
        var Ay;
        var uzel;
        var cisloUzlu;
        var cisloUzluMin;

        for (var i = 0; i < poleVsechUzlu.length; i++) {
            uzel = poleVsechUzlu[i];
            Ax = uzel[0];
            Ay = uzel[1];
            cisloUzlu = uzel[2];

            vzdalenost = this.vratVzdalenostMeziDvemaBody(Ax, Ay, xKlikMysi, yKlikMysi);

            //nastavi vychozi hodnotu
            if(i == 0){
                vzdalenostMin = vzdalenost;
                cisloUzluMin = cisloUzlu;  
            }

            //uvazuje jen kdyz vzdalenost je mensi nez tolerance
            if(vzdalenost < tolerance){
                if(vzdalenost < vzdalenostMin){
                    vzdalenostMin = vzdalenost;
                    cisloUzluMin = cisloUzlu;     
                }
            }
        }

        //pokud je vzdalenostMin > tolerance, prepise na -1
        if(vzdalenostMin > tolerance){
            cisloUzluMin = -1;
        }

        return(cisloUzluMin);

    }


    //vraci vzdalenosti mezi bodem kkliknuti a vsemi uzly
    vratVzdalenostMeziDvemaBody(Ax, Ay, Bx, By){

        var vzdalenost;
        var vzdalenost2;

        vzdalenost2 = (Ax - Bx)*(Ax - Bx) + (Ay - By)*(Ay - By);
        vzdalenost = Math.pow(vzdalenost2, 0.5);

        return(vzdalenost);

    }



    vratCisloElementuNaKteryByloKliknuto(nejblizsiUsecky, yKlikMysi){

        var useckaA = nejblizsiUsecky[0];
        var useckaB = nejblizsiUsecky[1];

        if(useckaA != undefined){
            var indexElementuA = useckaA[2];
            var indexElementuB = useckaB[2];
        }

        var indexElementu = -1;

        if(indexElementuA == indexElementuB){
            indexElementu = indexElementuA;
        }

        //zatim nevim zda pouzivat
        //var nejblizsiNizsiUsecka = this.vratNejblizsiNizsiUsecku(nejblizsiUsecky, yKlikMysi);
        //var nejblizsiVyssiUsecka = this.vratNejblizsiVyssiUsecku(nejblizsiUsecky, yKlikMysi);
    

        return(indexElementu);

    }


    vratNejblizsiNizsiUsecku(nejblizsiUsecky, yKlikMysi){

        var yUsecka;
        var rozdilYUseckaYKlik;
        var rozdilMin;
        var usecka;
        var useckaNejblizsiNizsi;

        for (var i = 0; i < nejblizsiUsecky.length; i++) {
            usecka = nejblizsiUsecky[i];
            yUsecka = usecka[0];
            rozdilYUseckaYKlik = yUsecka - yKlikMysi;

            if(i == 0){
                rozdilMin = rozdilYUseckaYKlik;
                useckaNejblizsiNizsi = nejblizsiUsecky[0];
            }
            else {
                if(rozdilYUseckaYKlik < rozdilMin){
                    rozdilMin = rozdilYUseckaYKlik;
                    useckaNejblizsiNizsi = nejblizsiUsecky[i];
                }
            }

        }  
        
        return(useckaNejblizsiNizsi);

    }


    vratNejblizsiVyssiUsecku(nejblizsiUsecky, yKlikMysi){

        var yUsecka;
        var rozdilYUseckaYKlik;
        var rozdilMin;
        var usecka;
        var useckaNejblizsiVyssi;

        for (var i = 0; i < nejblizsiUsecky.length; i++) {
            usecka = nejblizsiUsecky[i];
            yUsecka = usecka[0];
            rozdilYUseckaYKlik = yKlikMysi - yUsecka;

            if(i == 0){
                rozdilMin = rozdilYUseckaYKlik;
                useckaNejblizsiVyssi = nejblizsiUsecky[0];
            }
            else {
                if(rozdilYUseckaYKlik < rozdilMin){
                    rozdilMin = rozdilYUseckaYKlik;
                    useckaNejblizsiVyssi = nejblizsiUsecky[i];
                }
            }

        }  

        return(useckaNejblizsiVyssi);

    }     

    //vrati pole nejblizsich usecek nad a pod bodem kliknuti
    vratOkrajoveUsecky(XklikMysi, abPole, poleVsechUsecek){

        var y;
        var nejblizsiUsecky = [];
        var yPolePolozka = [];  //obsahuje souradnici y (prusecik svislice) prislusny index usecky a cislo prislusejiciho elementu
        var bodSeNachaziNaUsecce;
       
        for (var i = 0; i < abPole.length; i++) {

            var usecka = poleVsechUsecek[i];
            var Ay = usecka[1];
            var By = usecka[3];
            var cisloElementu = usecka[4];

            var ab = abPole[i];
            var a = ab[0];
            var b = ab[1];

            y = a * XklikMysi + b;

            bodSeNachaziNaUsecce = this.detekujZdaYbodSeNachaziNaUsecce(Ay, By, y);

            if(bodSeNachaziNaUsecce == true){
                yPolePolozka = [y, i, cisloElementu];
                nejblizsiUsecky.push(yPolePolozka);
            }

        }

        
        return(nejblizsiUsecky);

    }



    

    //detekuje, zda y-ova souradnce se skurtecne nachazi na usecce
    //muze se take nacahzet sice na stejne primce, ale mimo dane body, tj. mimo usecku
    detekujZdaYbodSeNachaziNaUsecce(Ay, By, Y){

        var bodSeNachaziNaUsecce = false;
        var vzdalAB;
        var vzdalAY;
        var vzdalBY;

        vzdalAB = Math.abs(Ay-By);
        vzdalAY = Math.abs(Ay-Y);
        vzdalBY = Math.abs(By-Y);

        if(vzdalAY <= vzdalAB){
            if(vzdalBY <= vzdalAB){
                bodSeNachaziNaUsecce = true;
            }
        }


        return(bodSeNachaziNaUsecce);

    }


    napisSour(x, y){

        var coords = "X coords: " + x + ", Y coords: " + y;
        console.log(coords);
       
    }

}


//trida vyhledava hodnoty pro zobrazeni, po kliknuti na uzel
class vyhledejHodnotyZGrafu {

    constructor(vsechnaCislaVrcholu, vsechnyHodnotyVrcholu, cisloUzluExp){

        var indexVPoliVrcholuAVrchol = []
        var hodnotaVrcholu;
        
        indexVPoliVrcholuAVrchol = this.vratRadekSCislemUzlu(vsechnaCislaVrcholu, cisloUzluExp)
        hodnotaVrcholu = this.vratHodnotuVrcholu(vsechnyHodnotyVrcholu, indexVPoliVrcholuAVrchol)

        console.log(hodnotaVrcholu);
        

    }

    //cisla uzlu jsou v JSONu pod: OznaceniVrcholu":[138.0, 157.0, 156.0]
    //metoda vraci cislo radku, kde je prvni uzel nalezen
    vratRadekSCislemUzlu(vsechnaCislaVrcholu, cisloUzluExp){

        var cislaVrcholuradek;
        var indexVPoliVrcholRadek;
        var indexVPoliVrcholuAVrchol = []  //obsahuje dvojici indexu ukazujici na radek pole a index v radku vsechnaCislaVrcholu

        for (var r = 0; r < vsechnaCislaVrcholu.length; r++) {
            cislaVrcholuradek = vsechnaCislaVrcholu[r]
            indexVPoliVrcholRadek = this.vratIndexCislaUzluVeVrcholRadek(cislaVrcholuradek, cisloUzluExp)
            if(indexVPoliVrcholRadek > -1){
                indexVPoliVrcholuAVrchol.push(r);
                indexVPoliVrcholuAVrchol.push(indexVPoliVrcholRadek);
                break;
            }
            
        }   
        
        return(indexVPoliVrcholuAVrchol)

    }

    vratIndexCislaUzluVeVrcholRadek(vrcholRadek, cisloUzluExp){

        var cisloUzlu;
        var indexVPoliVrcholRadek;

        indexVPoliVrcholRadek = -1;

        for (var i = 0; i < vrcholRadek.length; i++) {
            cisloUzlu = vrcholRadek[i];
            if(cisloUzlu == cisloUzluExp){
                indexVPoliVrcholRadek = i;
            }
        }

        return(indexVPoliVrcholRadek);
    }

    vratHodnotuVrcholu(vsechnyHodnotyVrcholu, indexVPoliVrcholuAVrchol){

        var indexRadek;
        var indexNaRadku;
        var hodnotyVrcholuRadek;
        var vrcholHodnota;

        indexRadek = indexVPoliVrcholuAVrchol[0];
        indexNaRadku = indexVPoliVrcholuAVrchol[1];

        if(indexRadek != undefined){
            if(indexNaRadku != undefined){
                hodnotyVrcholuRadek = vsechnyHodnotyVrcholu[indexRadek];
                vrcholHodnota = hodnotyVrcholuRadek[indexNaRadku];
            }
        }

        return(vrcholHodnota);

    }
    
}


//uklada globalni data, aby je mohl porovnavat s daty pri pohybu mysi
var vsechnySouradnice = [];
var vsechnyCislaElementu = [];
var vsechnaCislaVrcholu = [];
var vsechnyBarvy = [];
var poleVsechUsecek = [];
var vsechnyBarvyCarElementu = [];
var vsechnytloustkyCarElementu = [];
var vsechnyHodnotyVrcholu = []
var vsechnyHodnotyElementu = []
var abPole = [];
var ctx;

var Ox;
var Oy;
var cislaVsechUzlu;
var hodnotyVsechUzlu;
var nasobek;
var zaokrouhliNaPocetMist;

//zacatek programu - nacte data z JSONu
$(document).ready(function(){

    var grafika = new elementy();

    vsechnySouradnice = grafika.getVsechnySouradnice();
    vsechnyCislaElementu = grafika.getVsechnyCislaElementu();
    vsechnaCislaVrcholu = grafika.getVsechnaCislaVrcholu();
    vsechnyBarvy = grafika.getVsechnyBarvy();
    poleVsechUsecek = grafika.getPoleVsechUsecek();
    abPole = grafika.getABPole();
    poleVsechUzlu = grafika.getPoleVsechUzlu();
    vsechnyBarvyCarElementu = grafika.getVsechnyBarvyCarElementu();
    vsechnytloustkyCarElementu = grafika.getVsechnytloustkyCarElementu();
    vsechnyHodnotyVrcholu = grafika.getVsechnyHodnotyVrcholu();
    vsechnyHodnotyElementu = grafika.getVsechnyHodnotyElementu();
    
    //globalni nastaveni
    Ox = grafika.getOx();
    Oy = grafika.getOy();
    cislaVsechUzlu = grafika.getCislaVsechUzlu();
    hodnotyVsechUzlu = grafika.getHodnotyVsechUzlu();
    nasobek = grafika.getNasobek();
    zaokrouhliNaPocetMist = grafika.getZaokrouhliNaPocetMist();

    //vykresli grafiku bez kliknuti (pri prvnim obnoveni)
    var vykresleniElementu = new vykresliVsechnyElementy(vsechnySouradnice, vsechnyBarvy, Ox, Oy, vsechnyBarvyCarElementu, vsechnytloustkyCarElementu);
    
    //popise vsechny uzly, je-li to nastaveno v globalnim nastaveni
    if(cislaVsechUzlu == true){
        var vykresliPopisVsechUzlu = new popisVsechnyUzly(vsechnySouradnice, vsechnaCislaVrcholu, Ox, Oy, nasobek, zaokrouhliNaPocetMist)
    }
    if(hodnotyVsechUzlu == true){
        var vykresliPopisVsechUzlu = new popisVsechnyUzly(vsechnySouradnice, vsechnyHodnotyVrcholu, Ox, Oy, nasobek, zaokrouhliNaPocetMist)
    }

    //vrati ctx aby mohl popisovat elementy (treba na zaklade kliknuti mysi)
    ctx = vykresleniElementu.getCtx();

});


// JE MOZNE REAGOVAT NA KLIKANI - ZATIM JE TO VYPNUTE

$("#test").click(function(event) {
    var c = document.getElementById("test");
    ctx.clearRect(0, 0, c.width, c.height);

    //vykresli grafiku pri kliknuti
    var vykresleniElementu = new vykresliVsechnyElementy(vsechnySouradnice, vsechnyBarvy, Ox, Oy, vsechnyBarvyCarElementu, vsechnytloustkyCarElementu);
    var souradnice = new pohybMysi(event, poleVsechUsecek, abPole, ctx, poleVsechUzlu, Ox, Oy, vsechnaCislaVrcholu, vsechnyHodnotyVrcholu);

});






