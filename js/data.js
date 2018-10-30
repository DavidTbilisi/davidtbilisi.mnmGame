
/**
 * Created by david on 10/27/2018.
 */
import {Array} from './Array';
export var sharedData = {
    arr: new Array(),
    show: false,
    answer: false,
    one: new Array().rand(10, 99),
    tests: [],
    weakNums: [],
    rightClass: {good: false},
    names: ['000 - МаНоМетр','001 - МаНЖет','002 - МоНеТа','003 - МоНоКль','004 - НуНЧаки','005 - МеМБрана','006 - МаНиШка','007 - аНаНаС','008 - НиМФа','009 - НаМоРдник','010 - НоЖНицы','011 - Маленький оЖоГ','012 - НоГТи','013 - НоЖиК','014 - Маленькая ЖуЧка','015 - Маленький ГоБой','016 - аНГеЛ','017 - МаГиСтраль','018 - НоЖоВка','019 - аНГаР','020 - МаяТНик','021 - иНТеГрал','022 - МеДиаТор','023 - иНДиКатор','024 - НиТоЧка','025 - МоТоБлок','026 - МеТЛа','027 - уНиТаЗ','028 - НаДФиль','029 - МеТРо','030 - МуХоМор','031 - Майка КоЖаная','032 - МаКеТ','033 - МаКаКа','034 - Навозная КуЧа','035 - иНКуБатор','036 - МуХоЛовка','037 - МаКСим','038 - МаХоВик','039 - МиКРофон','040 - НоЧНик','041 - Маленький ЧиЖ','042 - МеЧеТь','043 - МяЧиК','044 - Маленькая Чешуйчатая Щука','045 - Набор ЩуПов','046 - МоЧаЛка','047 - НаЧеС','048 - МяЧ Футбольный','049 - Масть ЧеРви','050 - Малиновый ПиоН','051 - Много ПуГовиц','052 - МоПеД','053 - НаБойКи','054 - Новая ПеЧь','055 - Новая ПоБеда','056 - аМПуЛа','057 - НеБоСкреб','058 - Натуральный БиФштекс','059 - НаПеРсток','060 - МеЛьНица','061 - аНаЛьГин','062 - МоЛоТок','063 - МоЛоКо','064 - НаЛиЧник','065 - МоЛьБерт','066 - МыШеЛовка','067 - эМуЛьСия','068 - НаШиВка','069 - МыШЦа','070 - НеЗНайка','071 - МоЗГ','072 - МоСТ','073 - МаСКа','074 - НоСоЧки','075 - НеЗаБудка','076 - НоСиЛки','077 - НаСоС','078 - НаЗВание','079 - НоСоРог','080 - Маленький ВиНтик','081 - Набор ФуЖеров','082 - НеВоД','083 - Нейтральный ФиКсаж','084 - дюйМоВоЧка','085 - аМФиБия','086 - НаВоЛочка','087 - МаВЗолей','088 - Новый ВэФ','089 - аМФоРа','090 - МаРМелад','091 - МоРоЖеное','092 - аМоРТизатор','093 - МоРКовь','094 - НаРуЧники','095 - Медная ЦеПь','096 - МаРЛя','097 - МаРС','098 - МуРаВей','099 - НаРЦис','100 - стол','101 - ГоНГ','102 - оГНеТушитель','103 - ГаМаК','104 - ЖеМЧуг','105 - ГаМБургер','106 - ЖеНьШень','107 - ГНеЗдо','108 - оГНиВо','109 - ГеНеРатор','110 - ГиГаНт','111 - Голодная ГаГа','112 - ЖГуТ','113 - Голубая ГайКа','114 - Желтая ГуЩа','115 - Голубая Губная Помада','116 - ЖиГуЛи','117 - Глиняный ГуСь','118 - Гнутые ГВозди','119 - Голубые ГоРы','120 - ЖеТоН','121 - Железный ДоГ','122 - Глиняная ДуДка','123 - ГаДюКа','124 - Жирная ТоЧка','125 - оГромная ТуБа','126 - ГаДаЛка','127 - Гнутый ДиСк','128 - Желтый ДиВан','129 - ГиДРант','130 - Голубое оКНо','131 - Грубая КоЖа','132 - ЖаКеТ','133 - иГрушечный КоК','134 - Гравийная КуЧа','135 - Железный КаБлук','136 - ЖиКЛер','137 - ГазоноКоСилка','138 - Голубой КоВрик','139 - Географическая КаРта','140 - Железный ЧаН','141 - Жаропрочный ЧуГун','142 - Железная ЩеТка','143 - ЖуЧоК','144 - Голубя ЧуЧело','145 - Железный ЩуП','146 - Железная ЧаШа','147 - Говорящие ЧаСы','148 - Желтый ЩаВель','149 - Желтая ЧеРта','150 - ГиПНоз','151 - Желтая ПоГанка','152 - Желтая ПоДушка','153 - ГуБКа','154 - ГуБаЧ','155 - ГиППопотам','156 - ГоБеЛен','157 - ГиПС','158 - Жигулевское ПиВо','159 - ЖаБРы','160 - ГЛяНцеватель','161 - ГоЛоГрамма','162 - ЖёЛуДь','163 - ГаЛаКтика','164 - ГаЛоЧка','165 - ГЛоБус','166 - ГЛуШитель','167 - ГаЛСтук','168 - ГоЛоВастик','169 - ГаЛеРа','170 - ГуСеНица','171 - Грязная СаЖа','172 - ГаЗеТа','173 - ГаЗиК','174 - Жук уСаЧ','175 - ГаЗоПровод','176 - ЖеЗЛ','177 - одна (1) СоСалка','178 - Железный СиФон','179 - ГаЗиРовка','180 - ГаВаНа','181 - Голубой ФуЖер','182 - ГоВяДина','183 - Газовый ФаКел','184 - ЖВаЧка','185 - Глубинный ВиБратор','186 - Железная ВиЛка','187 - ГВоЗдодер','188 - Глазированные ВаФли','189 - ГВаРдеец','190 - ГРаНата','191 - ГаРаЖ','192 - ГРаДусник','193 - ГиРьКи','194 - ГоРЧица','195 - ГРиБ','196 - ГРеЛка','197 - оГРыЗок','198 - ГРаФин','199 - оГуРеЦ']
};


/*
function getNames () {
var ar = []; document.querySelectorAll('p font').forEach( (e) =>{ar.push( e.innerHTML )} );
    // console.log(ar);
 var string = '[';
 ar.forEach((e,i) => {
 if (i % 2 != 0) {
 string +=`'${e}',`
 }
 });
 string += "]"
    return string;
 }
* */