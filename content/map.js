app.t_s = 32;
app.w_w = 180;
app.w_h = 30;

// 0 1 2    ) ! @
// 3 4 5 9  # $ %
// 6 7 8    ^ & *

// A B C  I J K
// D   E  L M N
// F G H  O P Q

app.terrains = "\
01111111111111126@LMMMMMMMMMMMMABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB\
349494949494949^2%LMMMMMMMMMMMAQ9494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
3949494949494949#%LMMMMMMMMMMMN94949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
34949494949494945%LMMMMMMMMMMMN49494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
39494949494949495%LMMMAPPPPPPPQ94949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
34949494949494945%LMMMN4949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
39494949494949495%OPPPQ9494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
349494949)777777867777@4949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
3949494945$$$$$$$$$$$$%9494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
3494949495$$$$$$$$$$$$%4949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
3949494945$$$$$$$$$$$$%9494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
349494949^212$01111201*4949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
3949494949495$3949453949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
3494949494945$3494953494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
3949494949495$3949456777@94949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
349494949494^&*4949^1111*49494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
394949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
349494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
394949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
349494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
394949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
349494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
394949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
349494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
394949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
349494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
394949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
349494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494\
394949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949494949\
677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777"

app.covers = "\
000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\
045636456265465600000000000000004020600040040000000000000000400400000000000000004004000000000000000040040000000000000000400400000000000000004004000000000000000040040000000000000000\
004564564264524210000000000000045634645565400000000035643255654000000000356432556540000000003564325565400000000035643255654000000000356432556540000000003564325565400000000035643200\
045632654660152313000000000000000006464565650000002560000045656500000025600000456565000000256000004565650000002560000045656500000025600000456565000000256000004565650000002560000000\
000404560405604000000000000000000000406000000000045000223460000000000450002234600000000004500022346000000000045000223460000000000450002234600000000004500022346000000000045000223400\
000450600234060500000000000000000000000000000006063400246600000000060634002466000000000606340024660000000006063400246600000000060634002466000000000606340024660000000006063400246600\
000520536654260000000000000000000000560026000000245006010200260000002450060102002600000024500601020026000000245006010200260000002450060102002600000024500601020026000000245006010200\
006463456111111110000000000000000406000050000000024562345600500000000245623456005000000002456234560050000000024562345600500000000245623456005000000002456234560050000000024562345620\
000455460100000000000000000000000000004000000000054500434440000000000545004344400000000005450043444000000000054500434440000000000545004344400000000005450043444000000000054500434420\
000141600100000000000000000000000000000060403004563056432500604030045630564325006040300456305643250060403004563056432500604030045630564325006040300456305643250060403004563056432560\
062514300100000000000000000060023000004563456650546456546245634566505464565462456345665054645654624563456650546456546245634566505464565462456345665054645654624563456650546456546240\
012300000111001111100000000000000000004656024562565464524546560245625654645245465602456256546452454656024562565464524546560245625654645245465602456256546452454656024562565464524560\
065656100000000000000000000045065460305636436624562456654656364366245624566546563643662456245665465636436624562456654656364366245624566546563643662456245665465636436624562456654650\
000160030000000000000000000000000000000456350002456254625404563500024562546254045635000245625462540456350002456254625404563500024562546254045635000245625462540456350002456254625460\
002304005010000000000000000000000000000024562456656654645600245624566566546456002456245665665464560024562456656654645600245624566566546456002456245665665464560024562456656654645620\
002001000305002300000000000000000000045635645646245625646456356456462456256464563564564624562564645635645646245625646456356456462456256464563564564624562564645635645646245625646420\
023060203600000000062300001111111111565234502500262045644252345025002620456442523450250026204564425234502500262045644252345025002620456442523450250026204564425234502500262045644260\
036020400543200003450000000504566545655345634525602064554653456345256020645546534563452560206455465345634525602064554653456345256020645546534563452560206455465345634525602064554640\
050300020000406065456456564565444545345665443050620540205656654430506205402056566544305062054020565665443050620540205656654430506205402056566544305062054020565665443050620540205640\
023450303005003301230000000121230123560454565645604506456004545656456045064560045456564560450645600454565645604506456004545656456045064560045456564560450645600454565645604506456000\
066004012033001612012302000123416512610045665456454565445600456654564545654456004566545645456544560045665456454565445600456654564545654456004566545645456544560045665456454565445660\
000600230030546013420430123412651340050403005600634022103604030056006340221036040300560063402210360403005600634022103604030056006340221036040300560063402210360403005600634022103660\
604020340602345000454460001236120531504640604060450560206046406040604505602060464060406045056020604640604060450560206046406040604505602060464060406045056020604640604060450560206040\
043023405023460034603440040045606045645032602030502060040650326020305020600406503260203050206004065032602030502060040650326020305020600406503260203050206004065032602030502060040600\
052034060234052034563400045604104524560456440406040560302604564404060405603026045644040604056030260456440406040560302604564404060405603026045644040604056030260456440406040560302640\
012351266123600405045645045660650545004164665040001023063241646650400010230632416466504000102306324164665040001023063241646650400010230632416466504000102306324164665040001023063240\
065560510132006000456123415161004506330456454504564564654604564545045645646546045645450456456465460456454504564564654604564545045645646546045645450456456465460456454504564564654650\
016364560061020100000001324450045604050415604001450630454404156040014506304544041560400145063045440415604001450630454404156040014506304544041560400145063045440415604001450630454400\
035565630060405001236314134045060405064020300546131056440040203005461310564400402030054613105644004020300546131056440040203005461310564400402030054613105644004020300546131056440000\
000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

app.drawBackground = function (ctx, W_H, W_W, S_H, S_W, O_H, O_W, E_H, E_W) {
    for (let i = O_H; i < (O_H + W_H + (S_H == 1 ? 1 : 0)); i++) {
        for (let j = O_W; j < (O_W + W_W + (S_W == 1 ? 1 : 0)); j++) {
            ctx.drawImage(app.TERRAIN_IMAGES[app.terrains.charAt(i * app.w_w + j)], (j - O_W) * app.t_s - E_W, (i - O_H) * app.t_s - E_H, app.t_s, app.t_s);
        }
    }
    for (let i = O_H; i < (O_H + W_H + (S_H == 1 ? 1 : 0)); i++) {
        for (let j = O_W; j < (O_W + W_W + (S_W == 1 ? 1 : 0)); j++) {
            if (app.covers.charAt(i * app.w_w + j) != "0") {
                ctx.drawImage(app.COVER_IMAGES[app.covers.charAt(i * app.w_w + j)], (j - O_W) * app.t_s - E_W, (i - O_H) * app.t_s - E_H, app.t_s, app.t_s);
            }
        }
    }
}
