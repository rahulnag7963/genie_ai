

const randWord = `linecitykindidea
westmindlandcare
backratewordfood
teamroletownbank
needeasttypedate
wifeclublordking
costgirlgamelove
newsresthairbill
firesizetermplan
halllistlosswall
paularmyunitpark
hourtestlookdeal
helppageriskfish
filmshopsitemark
ladytasksalelack
postfirmshowbaby
basemisspastcash
ruleturndutyball
raceedgegoldwood
textfootrisehalf
steppainhillwill
marywindbandfarm
skinplayfearmove
rocktreewinestar
hopeuserpathrain
goalseatfig.pair
callnotetourcard
signfundfilejack
cellleaddebtboat
heatneckcodehell
coaldrugtonyalan
copyacidvotemilk
tapeflowirontrip
lanepoolholeflat
mikeshipmealtone
spotfueldeskfall
dietsoilroofnose
songtalklinkring
raillakebirdloan
walkmassjanebush
bathitemportmeat
selfgatemillgolf
coresnowcampgulf
wardbellmailtank
coatbeermoodmile
yardbosswagewave
dukeluckruthsake
nicksaltsandsuit
soulgiftdarkdec.
pollholdkonghong
moonwinggoodpeak
auntmodeandycake
bonddiskbombhost
tailfordloadzone
packlucydustpoem
pipeboneannaearl
jeanliftjuryhero
genecolddawnharm
cookbowlpopetool
maledropfatewire
silkfolkpoethunt
talebeltjokegaze
bulkrootstopkate
navykneetubeease
rankmessblowross
rapeericlockdean
gearbulljewstaxi
chipbikeplot
woolcouppassinch
tidepondriderice
pitylambminedose
discboomtwinclay
pilemategripmenu
seedpreydishchap
mickwishchinrush
ropedearbeefcrop
leafgainflag
bootmythgangemma
rollquidfoolhull
deckkissislebias
poletraykickhint
tuneovenlochnest
drawraidevilbarn
soupdowntraplamp
bluehooksoappalm
cavelionwakepint
famedockbearecho
duckbilecornjazz
coinplearagegrid
beathaltlacestay
lumptentclueshoe
jailrearshahcarl
furypactbassfort
axislawnmaskgray
vol.pumpgrinbeam
hiremistgallsigh
sinkhornsealswan
cagesolonormcape
curepineexitheir
hooddirtreedsean
castglenshedgrey
lungsofamoorslip
loopshawdeerriot
cultverbpeatfist
corkmaidcalmdrum
yarnchatcartexam
jumpirisforkjeff
damelilywolfmoss
plusfeelaleczero
sackfarebailgill
wearhighgownfuss
bangtollallynode
washglowheellevy
stemmattkhantrio
archveindalebrow
jilltobyheapkite
tynelangnoondana
cafevalemarcpara
urgeponysaildoll
cordbitefoambeta
deedwattboltcoun
bendherdeden
limeknotdomecalf
racklimbchefjake
monknailnounslot
whiphartbecktomb
goatkohlfaircoke
stanpilltearpike
lofttyreyuangran
pushmareduskpork
doleacrerosajunk
ginaturfpoloscum
wormleapninakemp
atomgluespincole
pierhydebethbean
mamareeflogo
jessricknoeltsar
swimplugroartina
peermaindashburn
quizpeelkirkotto
blocfluxpickpunk
frogsonywrithare
envybuckpestcol.
vasehowelucetbsp
lavalustbach
foilbaitmastcarr
canequaypullbark
viceburypapa
veilgaleriftmaze
toddwaitzincscot
foldnavelowebulb
slabfineclanvoid
coneproframpgala
robemeshsagafife
meanvetospurdump
vinelassliarweir
dragjadeauravisa
iconborotramtort
loafrubymintleak
doomboartierbout
scarhatelearjeep
featmaudwombmalt
coilcarpcubecrag
haulhawkbutttile
joeyruinherbmole
bustscanrunesoda
hanktunaseamprop
pinkforewantmake
flaphazedellfiat
wademuckboilwang
eyrehymnmemotrek
zealcrabcrowrave
studsafelizaapex
poseputtsagefrau
joshverakylepeck
tilldentrafthose
fontrumpcoltwild
hypemonafusetech
boonopentackvent
stabploybeakstew
mallskyedeptclip
limaholtcombslum
slamtoadbowedyke
harprashriteplum
goremoatachemoth
polygaspporeknob
trimskipmeadbunk
helmbumpnovachop
minkrustchubpram
waspcraycovegaol
ductbedeovalaide
vestidolhale
hideeddydartauto
pulpflawfindbrew
comaepiclyonware
kievfoalribawhim
slitneonexpofoul
tactonussurfpuff
tartslapwisecurl
secthivestaglark
jockcaptenidperm
kerbdemotaitsill
readgritmustyale
hoggliketick
pearswayspitgram
dialrinddungjava
cocayogawrenchad
socklingglyn
shamhecktrotfern
duelreelnesscrux
coolnapehickblur
tuckmidiguruloco
mitereininfooral
dadawarpblotstir
zetaseptbabeduff
yanghailsolehiss
clawdyerhangtoss
overluredavyberg
kiwisnaggullnana
dripwicksootbyte
limpshincertmule
cuffdopefleacope
zestslugtakemayo
tiltrakekilnbran
flakduetlullthud
altopangbrimwrap
taffbiffdunesash
keepbirtponsspar
winkfilltungbray
ritzbashaxlemali
macetorybeadloom
hurtthawparrgraf
casamanegistglee
lobevialflophalo
moangrubrotachan
hushkillnomeflue
ariabufffraydamn
lorefeudsaulcath
mimeomentwiggerm
gaitjerksiltzoom
tangludowandkilo
flexmusejoltpall
heedbritgulp
hoaxhiltmonolego`;

export const generateRandomWord = (): string => {
    const wordsArray = randWord.replace(/\s/g, '').match(/.{1,4}/g);
    const randNum = wordsArray ? Math.floor(Math.random() * wordsArray.length) : 0;
    return wordsArray ? wordsArray[randNum].toString() : '';
  };