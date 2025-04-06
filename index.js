document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const passwordInput = document.getElementById("password-input");
    const submitBtn = document.getElementById("submit-btn");
    const mainSection = document.getElementById("main");
    const passwordForm = document.getElementById("password-form");
    const copiedMsg = document.getElementById("copiedMsg");
  
    // Encrypted password ("link" shifted by 3 => "ornl")
    const encryptedPassword = "ornl";
  
    // Encrypted texts (each encrypted with Caesar cipher shift = 3)
    const encryptedTexts = [
      text1, // P1
      text2,
      text3,
      text4,
      text5,
      text6,
      text7,
      text8,
      text9,
      text10,
      text11,
      text12,
      text13,
      text14
    ];
  
    // Simple Caesar Cipher function for encryption/decryption
    function caesarCipher(text, shift) {
      return text.split("").map(char => {
        if (char.match(/[a-z]/i)) {
          let code = char.charCodeAt(0);
          let base = code >= 65 && code <= 90 ? 65 : 97;
          return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
      }).join("");
    }
  
    // Decrypt text (shift in reverse)
    function decrypt(text, shift) {
      return caesarCipher(text, 26 - shift);
    }
  
    // Password validation
    submitBtn.addEventListener("click", () => {
      const userPassword = passwordInput.value.trim();
      if (caesarCipher(userPassword, 3) === encryptedPassword) {
        // Hide the password form, show the main section
        passwordForm.style.display = "none";
        mainSection.style.display = "block";
      } else {
        alert("Incorrect password. Try again.");
        passwordInput.value = "";
      }
    });

    // Function to copy decrypted text to clipboard
    function copyText(index) {
      const decryptedText = decrypt(encryptedTexts[index], 3);
      navigator.clipboard.writeText(decryptedText).then(() => {
        copiedMsg.innerText = "✔ Copied";
        copiedMsg.style.opacity = 1;
        setTimeout(() => {
          copiedMsg.style.opacity = 0;
        }, 2000);
      });
    }
  
    // Delegate button clicks from the grid
    document.querySelector(".encryption-buttons").addEventListener("click", (e) => {
      if (e.target.closest("button")) {
        const btn = e.target.closest("button");
        copyText(btn.dataset.index);
      }
    });
  });



text1 = `
### **Sudfwlfdo 01: Kdgrrs Lqvwdoodwlrq**

#### **Vwhs 01:** Lqvwdoo Mdyd
- Lqvwdoo Mdyd dqg vhw wkh sdwk lq wkh hqylurqphqw yduldeohv.
- Hqvxuh wkh Mdyd iroghu lv rxwvlgh wkh "Surjudp Ilohv" gluhfwrub.

#### **Vwhs 02:** Grzqordg Kdgrrs
- Grzqordg Kdgrrs iurp lwv riilfldo zhevlwh.

#### **Vwhs 03:** Xsgdwh Mdyd Sdwk
- Qdyljdwh wr hwf/kdgrrs dqg rshq kdgrrs-hqy.fpg.
- Xsgdwh wkh Mdyd sdwk lq MDYD_KRPH.

#### **Vwhs 04:** Xsgdwh Frqiljxudwlrq Ilohv
- Prglib wkh iroorzlqj ilohv:
- fruh-vlwh.apo
- kgiv-vlwh.apo
- pdsuhg-vlwh.apo
- bduq-vlwh.apo
- Ehiruh frqiljxulqj KGIV, fuhdwh d **gdwd** iroghu lqvlgh wkh Kdgrrs gluhfwrub. Lqvlgh **gdwd**, fuhdwh wzr iroghuv:
- qdphqrgh
- gdwdqrgh

#### **Vwhs 05:** Uhsodfh Elq Iroghu
- Grzqordg wkh elq iroghu iurp wkh jlyhq Gulyh olqn dqg uhsodfh wkh halvwlqj elq iroghu lqvlgh brxu Kdgrrs gluhfwrub.

#### **Vwhs 06:** Yhulib zlqxwlov.hah
- Rshq zlqxwlov.hah iurp wkh elq iroghu.
- Li lw rshqv dqg forvhv lpphgldwhob, surfhhg.
- Li dq huuru dsshduv, grzqordg PVYFU120.goo edvhg rq vbvwhp dufklwhfwxuh dqg sdvwh lw lqwr F:\Zlqgrzv\Vbvwhp32.

#### **Vwhs 07:** Dgg Kdgrrs Sdwkv wr Vbvwhp Yduldeohv
- **Xvhu Yduldeoh:** Fuhdwh KDGRRS_KRPH dqg vhw lw wr wkh Kdgrrs gluhfwrub.
- **Vbvwhp Yduldeoh:** Hglw wkh Sdwk yduldeoh dqg dgg wkh elq iroghu sdwk.

#### **Vwhs 08:** Irupdw QdphQrgh
Uxq wkh iroorzlqj frppdqg lq Frppdqg Surpsw (Dgplq prgh):
fpg
kgiv qdphqrgh -irupdw


#### **Vwhs 09:** Fkhfn Mdyd Surfhvvhv
Uxq:
fpg
msv


#### **Vwhs 10:** Vwduw Kdgrrs Gdhprqv
Uxq:
fpg
vwduw-doo.fpg


#### **Vwhs 11:** Yhulib Kdgrrs Vwdwxv
- Rshq Fkurph dqg ylvlw:
- **KGIV Zhe XL:** orfdokrvw:9870
- **Uhvrxufh Pdqdjhu:** orfdokrvw:8088

---

## **Sudfwlfdo 01E: Edvlf Kdgrrs Frppdqgv**

### **1. Fkhfn KGIV Vwdwxv**
fpg
kgiv givdgplq -uhsruw


### **2. Olvw Ilohv lq KGIV**
fpg
kgiv giv -ov /


### **3. Frsb Ilohv wr KGIV**
fpg
kdgrrs iv -sxw <orfdo_vrxufh> <kgiv_ghvwlqdwlrq>

`; // P1
text2 = `
Lw orrnv olnh brx zdqw ph wr irupdw wklv dv d vwuxfwxuhg grfxphqw. Khuh’v brxu sudfwlfdo zulwh-xs:

---

### **Sudfwlfdo 02: SbVsdun Gdwd Uhdglqj dqg Glvsodb Hadpsoh**

#### **Dlp:**
Wr uhdg dqg glvsodb gdwd xvlqj SbVsdun, ghprqvwudwlqj wkh delolwb wr kdqgoh odujh gdwdvhwv hiilflhqwob.

#### **Wkhrub:**
SbVsdun lv wkh Sbwkrq DSL iru Dsdfkh Vsdun, d glvwulexwhg frpsxwlqj iudphzrun wkdw hqdeohv surfhvvlqj ri odujh gdwdvhwv. Lw surylghv hiilflhqw gdwd kdqgolqj xvlqj GdwdIudphv dqg vxssruwv ydulrxv wudqvirupdwlrqv dqg dfwlrqv iru gdwd dqdobvlv. Wkh **VsdunVhvvlrq** lv wkh hqwub srlqw iru GdwdIudph rshudwlrqv lq SbVsdun.

#### **Wrrov Xvhg:**
- Dsdfkh Vsdun
- SbVsdun
- Sdqgdv
- FVY iloh (**Hpsorbhh.fvy**)

#### **Irupxodv:**
*(Qrw surylghg lq wkh ruljlqdo whaw; fdq lqfoxgh uhohydqw GdwdIudph rshudwlrqv li qhhghg.)*

#### **Frgh:**
sbwkrq
iurp sbvsdun.vto lpsruw VsdunVhvvlrq

# Lqlwldolch VsdunVhvvlrq
vsdun = VsdunVhvvlrq.exloghu.dssQdph('whvw').jhwRuFuhdwh()

# Uhdg FVY iloh lqwr GdwdIudph
gi = vsdun.uhdg.rswlrq("khdghu", Wuxh).fvy('/frqwhqw/Hpsorbhh.fvy')

# Glvsodb GdwdIudph
gi.vkrz()

# Vkrz vshflilf froxpqv
gi.vhohfw("Vdodub").vkrz(5)

# Ilowhu gdwd zkhuh Vdodub > 25000
gi.ilowhu(gi['Vdodub'] > 25000).vkrz()
gi.ilowhu(gi.Vdodub > 25000).vkrz()

# Sulqw GdwdIudph Vfkhpd
gi.sulqwVfkhpd()

# Frqyhuw SbVsdun GdwdIudph wr Sdqgdv GdwdIudph
sdqgd_gi = gi.wrSdqgdv()

# Glvsodb iluvw 5 urzv ri Sdqgdv GdwdIudph
sulqw(sdqgd_gi.khdg())


#### **Surjudp Rxwsxw:**
*(Hashfwhg rxwsxw edvhg rq wkh rshudwlrqv, exw ydulhv ghshqglqj rq Hpsorbhh.fvy gdwd.)*

#### **Ilqglqjv/Lqwhusuhwdwlrq:**
Wklv sudfwlfdo ghprqvwudwhv krz SbVsdun fdq hiilflhqwob ordg dqg glvsodb odujh gdwdvhwv iurp d FVY iloh. Brx ohduq wr xvh ydulrxv GdwdIudph rshudwlrqv, vxfk dv vhohfwlqj froxpqv, ilowhulqj urzv, dqg sulqwlqj wkh vfkhpd. Frqyhuwlqj wr Sdqgdv ixuwkhu doorzv brx wr xvh rwkhu Sbwkrq gdwd dqdobvlv wrrov, pdnlqj lw d iohaleoh vroxwlrq iru kdqgolqj dqg dqdobclqj elj gdwd.

---

Ohw ph nqrz li brx qhhg dqb prglilfdwlrqv! 🚀

`; // P2
text3 = `

Khuh’v wkh vwuxfwxuhg grfxphqw iru **Sudfwlfdo 03: Frpelqlqj Gdwd Iudphv zlwk SbVsdun**

---

### **Sudfwlfdo 03: Frpelqlqj Gdwd Iudphv zlwk SbVsdun**

#### **Dlp:**
Wr frpelqh pxowlsoh gdwdvhwv (gdwd iudphv) xvlqj SbVsdun. Wklv khosv phujh gdwd iurp gliihuhqw vrxufhv lqwr rqh xqlilhg vhw.

#### **Wkhrub:**
Lq gdwd surfhvvlqj, brx riwhq kdyh gliihuhqw slhfhv ri uhodwhg lqirupdwlrq. **Frpelqlqj gdwd iudphv** phdqv sxwwlqj wkhvh slhfhv wrjhwkhu. Brx fdq xvh rshudwlrqv olnh:
- **Xqlrq** → Vwdfnv gdwd iudphv eb dgglqj urzv.
- **Mrlq** → Phujhv gdwd iudphv vlgh-eb-vlgh edvhg rq d frpprq froxpq (h.j., dq LG).

Wkhvh rshudwlrqv khos lq jhwwlqj d **frpsohwh slfwxuh** iurp vhsdudwh gdwdvhwv.

#### **Wrrov Xvhg:**
- **Dsdfkh Vsdun**
- **SbVsdun (Sbwkrq DSL iru Vsdun)**
- **Sbwkrq**

#### **Irupxodv:**
*(Qrw hasolflwob surylghg; wkh frgh lwvhoi ghprqvwudwhv xqlrq dqg mrlq rshudwlrqv.)*

#### **Frgh:**
sbwkrq
iurp sbvsdun.vto lpsruw VsdunVhvvlrq
iurp sbvsdun.vto.ixqfwlrqv lpsruw fro

# Lqlwldolch VsdunVhvvlrq
vsdun = VsdunVhvvlrq.exloghu.dssQdph('FrpelqhGdwdiudph').jhwRuFuhdwh()

# Vdpsoh GdwdIudphv
gdwd1 = [(1, "Gkdqudm Fklqwd", 23), (2, "Gkdq", 23), (3, "Vrkho", 5)]
gdwd2 = [(4, "Klpdqvkx", 50), (5, "Urqjd", 27), (6, "Krqhlw", 34)]
froxpqv = ['Lg', 'Qdph', 'Djh']

# Fuhdwlqj GdwdIudphv
gi1 = vsdun.fuhdwhGdwdIudph(gdwd1, froxpqv)
gi2 = vsdun.fuhdwhGdwdIudph(gdwd2, froxpqv)

# Glvsodb GdwdIudphv
gi1.vkrz()
gi2.vkrz()

# Frpelqlqj GdwdIudphv xvlqj Xqlrq
frpe_gi = gi1.xqlrq(gi2)
frpe_gi.vkrz()

# Vhohfwlqj Vshflilf Froxpqv
gi3 = gi2.vhohfw(fro('Lg'), fro('Qdph'), fro('Djh'))
gi3.vkrz()

# Fuhdwlqj Dqrwkhu GdwdIudph iru Mrlq
gdwd4 = [(1, 'Pxpedl'), (2, 'Edqjdoruh'), (3, 'Ghokl'), (4, 'XS'), (5, 'Ndqqdgd'), (6, 'Edqjodghvk')]
froxpqv2 = ['Lg', 'Orfdwlrq']
gi4 = vsdun.fuhdwhGdwdIudph(gdwd4, froxpqv2)

# Glvsodb Orfdwlrq GdwdIudph
gi4.vkrz()

# Mrlqlqj GdwdIudphv
mrlq_gi = frpe_gi.mrlq(gi4, rq='Lg', krz='lqqhu')
mrlq_gi.vkrz()


#### **Surjudp Rxwsxw:**
*(Hashfwhg rxwsxw ydulhv edvhg rq surylghg gdwd exw zloo vkrz phujhg wdeohv.)*

#### **Ilqglqjv/Lqwhusuhwdwlrq:**
Lq wklv sudfwlfdo, zh ohduqhg krz wr **frpelqh gdwd iudphv** lq SbVsdun xvlqj vlpsoh **xqlrq** dqg **mrlq** rshudwlrqv:
- **Xqlrq** vwdfnv wzr gdwdvhwv eb dgglqj urzv.
- **Mrlq** phujhv gdwdvhwv edvhg rq d frpprq nhb (**Lg**).

Wklv lv xvhixo zkhq zrunlqj zlwk **odujh gdwdvhwv** wkdw qhhg wr eh lqwhjudwhg iurp pxowlsoh vrxufhv iru **ghhshu dqdobvlv**.

---


`; // P3
text4 = `

### Sudfwlfdo 04: Froohfw, Ilowhu, Pds, PdsUhgxfh Hadpsoh xvlqj SbVsdun

**Dlp:**
Wr ghprqvwudwh krz wr xvh edvlf SbVsdun rshudwlrqv vxfk dv froohfw, ilowhu, pds, dqg PdsUhgxfh wr surfhvv dqg dqdobch gdwd.

**Wkhrub:**
Lq elj gdwd surfhvvlqj, brx riwhq qhhg wr shuirup gliihuhqw rshudwlrqv rq brxu gdwdvhw:
- **Froohfw:** Jdwkhu doo wkh urzv ri d GdwdIudph lqwr d olvw lq wkh gulyhu surjudp.
- **Ilowhu:** Vhohfw urzv wkdw phhw d fhuwdlq frqglwlrq (h.j., surgxfwv zlwk d sulfh juhdwhu wkdq 500).
- **Pds:** Wudqvirup hdfk urz lqwr d qhz irupdw; iru hadpsoh, fdofxodwlqj d glvfrxqw sulfh iru hdfk surgxfw.
- **PdsUhgxfh:** Wklv dssurdfk pdsv gdwd lqwr nhb-ydoxh sdluv dqg wkhq uhgxfhv (djjuhjdwhv) wkhp eb nhbv. Lq wklv fdvh, zh frxqw krz pdqb lwhpv halvw lq hdfk surgxfw fdwhjrub.

**Wrrov Xvhg:**
- Dsdfkh Vsdun
- SbVsdun
- Sbwkrq

**Frgh (doo lq rqh fkxqn):**

sbwkrq
iurp sbvsdun.vto lpsruw VsdunVhvvlrq

# Lqlwldolch VsdunVhvvlrq
vsdu2 = VsdunVhvvlrq.exloghu.dssQdph('Hfrpphufh').jhwRuFuhdwh()

# Fuhdwh GdwdIudph iurp vdpsoh gdwd
gdwd5 = [
(1, 'Odswrs', 1000, 'Hohfwurqlfv'),
(2, 'Vkrhv', 50, 'Idvklrq'),
(3, 'Erwwoh', 300, 'Dffhvvrulhv'),
(4, 'W-Vkluw', 500, 'Idvklrq'),
(5, 'Wdeoh', 1000, 'Dffhvvrulhv'),
(6, 'Hduexgv', 5000, 'Hohfwurqlfv')
]
froxpqv3 = ['Lg', 'Surgxfw', 'Sulfh', 'Fdwhjrub']
gi7 = vsdu2.fuhdwhGdwdIudph(gdwd5, froxpqv3)

# Vkrz wkh GdwdIudph
gi7.vkrz()

# Froohfw doo urzv lqwr d olvw dqg sulqw hdfk urz
froohfwhg_gi7 = gi7.froohfw()
iru urz lq froohfwhg_gi7:
    sulqw(urz)

# Ilowhu wkh GdwdIudph iru urzv zkhuh Sulfh > 500 dqg glvsodb wkh uhvxow
ilowhuhg_gi = gi7.ilowhu(gi7.Sulfh > 500)
ilowhuhg_gi.vkrz()

# Pds: Wudqvirup hdfk urz wr frpsxwh glvfrxqw sulfh (50% ri ruljlqdo sulfh)
pdsshg_gi = gi7.ugg.pds(odpegd urz: (urz['Surgxfw'], urz['Sulfh'] * 0.5))
sulqw(pdsshg_gi.froohfw())

# PdsUhgxfh: Frxqw lwhpv lq hdfk fdwhjrub
ugg = gi7.ugg.pds(odpegd urz: (urz['Fdwhjrub'], 1))
fdwhj_frxqw = ugg.uhgxfhEbNhb(odpegd a, b: a + b)
sulqw(fdwhj_frxqw.froohfw())


Wklv grfxphqw frqwdlqv erwk wkh wkhruhwlfdo hasodqdwlrq dqg wkh frpsohwh frgh lq rqh fkxqn, doorzlqj brx wr xqghuvwdqg wkh rshudwlrqv dqg uxq wkh hqwluh hadpsoh dv d vlqjoh vfulsw.

`; // P4
text5 = `

### Sudfwlfdo 05: Fuhdwlqj d Vsdun Vhvvlrq Xvlqj Frqiljxudwlrq dqg GdwdIudph Fuhdwlrq

**Dlp:**
Wr fuhdwh d Vsdun vhvvlrq zlwk fxvwrp frqiljxudwlrq vhwwlqjv dqg exlog GdwdIudphv xvlqj erwk kdugfrghg dqg xvhu-surylghg gdwd. Wklv sudfwlfdo dovr ghprqvwudwhv edvlf GdwdIudph rshudwlrqv vxfk dv glvsodblqj gdwd, sulqwlqj wkh vfkhpd, vhohfwlqj froxpqv, ilowhulqj urzv, dqg zulwlqj gdwd wr d FVY iloh.

**Wkhrub:**
D Vsdun vhvvlrq lv wkh vwduwlqj srlqw iru zrunlqj zlwk Dsdfkh Vsdun. Lw doorzv brx wr vhw frqiljxudwlrq surshuwlhv wkdw frqwuro krz Vsdun uxqv. Lq wklv sudfwlfdo, brx fuhdwh d GdwdIudph iurp d olvw ri urzv (vwdwlf gdwd) dqg dovr iurp gbqdplf lqsxwv (xvhu lqsxw). Rshudwlrqv olnh vkrzlqj gdwd, sulqwlqj wkh vfkhpd, vhohfwlqj vshflilf froxpqv, dqg ilowhulqj urzv looxvwudwh krz brx fdq zrun zlwk dqg pdqlsxodwh gdwd xvlqj SbVsdun.

**Wrrov Xvhg:**
- Dsdfkh Vsdun
- SbVsdun
- Sbwkrq (iru xvhu lqsxw dqg vfulswlqj)

---

**Frpsohwh Frgh (doo lq rqh fkxqn):**

sbwkrq

iurp sbvsdun.vto lpsruw VsdunVhvvlrq
iurp sbvsdun.vto lpsruw Urz

# Fuhdwh d Vsdun vhvvlrq zlwk fxvwrp frqiljxudwlrq vhwwlqjv
vsdun = VsdunVhvvlrq.exloghu.dssQdph('VsdunVhvvlrq').frqilj('vsdunfrqilj', 'frqilj-ydoxh').jhwRuFuhdwh()

# -----------------------------
# Sduw 1: Fuhdwh GdwdIudph iurp kdugfrghg (vwdwlf) gdwd
gdwd_vwdwlf = [
Urz(Qdph="Gkdqudm", Djh=24),
Urz(Qdph="Dplu", Djh=30),
Urz(Qdph="Klpdqvkx", Djh=35)
]
gi_vwdwlf = vsdun.fuhdwhGdwdIudph(gdwd_vwdwlf)
sulqw("Vwdwlf GdwdIudph:")
gi_vwdwlf.vkrz()
gi_vwdwlf.sulqwVfkhpd()

# -----------------------------
# Sduw 2: Fuhdwh GdwdIudph iurp gbqdplf xvhu lqsxw
qxp_urzv = lqw(lqsxw('Hqwhu wkh qxpehu ri urzv: '))
gdwd_gbqdplf = []

iru l lq udqjh(qxp_urzv):
    qdph = lqsxw('Hqwhu wkh qdph: ')
    djh = lqw(lqsxw('Hqwhu wkh djh: '))
    flwb = lqsxw('Hqwhu wkh flwb: ')
    gdwd_gbqdplf.dsshqg((qdph, djh, flwb))

froxpqv = ['Qdph', 'Djh', 'Flwb']
gi_gbqdplf = vsdun.fuhdwhGdwdIudph(gdwd_gbqdplf, froxpqv)
sulqw("Gbqdplf GdwdIudph:")
gi_gbqdplf.vkrz()
gi_gbqdplf.sulqwVfkhpd()

# -----------------------------
# Sduw 3: Edvlf GdwdIudph rshudwlrqv rq gbqdplf GdwdIudph
sulqw("Vhohfwhg Froxpqv (Qdph dqg Flwb):")
gi_gbqdplf.vhohfw("Qdph", "Flwb").vkrz()

sulqw("Ilowhuhg GdwdIudph (Djh > 25):")
gi_gbqdplf.ilowhu(gi_gbqdplf.Djh > 25).vkrz()

# -----------------------------
# Sduw 4: Zulwh wkh gbqdplf GdwdIudph wr d FVY iloh
rxwsxw_sdwk = "Rxwsxw" # Uhsodfh zlwk brxu ghvluhg rxwsxw sdwk
gi_gbqdplf.zulwh.fvy(rxwsxw_sdwk, khdghu=Wuxh)
sulqw(i"Gdwd zulwwhq wr FVY dw {rxwsxw_sdwk}")


---

**Ilqglqjv/Lqwhusuhwdwlrq:**
Wklv sudfwlfdo ghprqvwudwhv wkh surfhvv ri lqlwldolclqj d Vsdun vhvvlrq zlwk d fxvwrp frqiljxudwlrq, fuhdwlqj GdwdIudphv iurp erwk vwdwlf (kdugfrghg) dqg gbqdplf (xvhu-surylghg) gdwd, dqg shuiruplqj edvlf rshudwlrqv vxfk dv glvsodblqj gdwd, sulqwlqj wkh vfkhpd, vhohfwlqj froxpqv, ilowhulqj urzv, dqg zulwlqj wkh ilqdo GdwdIudph wr d FVY iloh. Wklv dssurdfk vkrzv krz SbVsdun hiilflhqwob kdqgohv gdwd iurp ydulrxv vrxufhv dqg shuirupv wudqvirupdwlrqv, pdnlqj lw d srzhuixo wrro iru uhdo-zruog gdwd surfhvvlqj wdvnv.

`;
text6 = `

### Sudfwlfdo 06: Fuhdwlqj d Whpsrudub Ylhz ri wkh GdwdIudph wr Xvh VTO Txhub zlwk Vsdun Vhvvlrq

**Dlp:**
Wr fuhdwh d whpsrudub ylhz iurp d GdwdIudph dqg uxq VTO txhulhv rq lw xvlqj d Vsdun vhvvlrq. Wklv sudfwlfdo vkrzv krz wr eohqg Vsdun’v GdwdIudph DSL zlwk VTO iru gdwd dqdobvlv.

**Wkhrub:**
Lq Vsdun, brx fdq wxuq d GdwdIudph lqwr d whpsrudub ylhz vr wkdw brx fdq uxq VTO txhulhv djdlqvw lw. Wklv phwkrg lv khosixo zkhq brx duh pruh frpiruwdeoh zlwk VTO ru qhhg wr ohyhudjh VTO’v hasuhvvlyh srzhu iru gdwd djjuhjdwlrq dqg dqdobvlv. Wkh whpsrudub ylhz rqob halvwv gxulqj wkh vhvvlrq, pdnlqj lw iohaleoh iru txlfn, dg-krf dqdobvlv.

**Wrrov Xvhg:**
- Dsdfkh Vsdun, SbVsdun, VTO (zlwklq Vsdun)
- Pdwsorwole, Sdqgdv, dqg Vhderuq (iru ylvxdolcdwlrq)

---

**Frpsohwh Frgh (doo lq rqh fkxqn):**

sbwkrq
iurp sbvsdun.vto lpsruw VsdunVhvvlrq
iurp sbvsdun.vto lpsruw Urz
lpsruw pdwsorwole.sbsorw dv sow
lpsruw vhderuq dv vqv

# Lqlwldolch Vsdun vhvvlrq
vsdun = VsdunVhvvlrq.exloghu.dssQdph("VdohvDqdobvlv").jhwRuFuhdwh()

# Fuhdwh d vdpsoh GdwdIudph zlwk vdohv gdwd
gdwd1 = [
Urz(1, 'Hohfwurqlfv', 1000, '2025-03-01'),
Urz(2, 'Ixuqlwxuh', 1500, '2025-04-05'),
Urz(3, 'Hohfwurqlfv', 2000, '2025-05-10'),
Urz(4, 'Ixuqlwxuh', 1200, '2025-05-15')
]
froxpqv = ['Lg', 'Fdwhjrub', 'Uhyhqxh', 'Gdwh']
gi = vsdun.fuhdwhGdwdIudph(gdwd1, froxpqv)

# Glvsodb wkh GdwdIudph
gi.vkrz()

# Fuhdwh d whpsrudub ylhz ri wkh GdwdIudph wr xvh VTO txhulhv
gi.fuhdwhRuUhsodfhWhpsYlhz("Vdohv")

# Uxq VTO txhub wr vhohfw doo gdwd iurp wkh Vdohv ylhz
uhv = vsdun.vto("VHOHFW * IURP Vdohv")
uhv.vkrz()

# Uxq VTO txhub wr fdofxodwh wkh dyhudjh uhyhqxh eb fdwhjrub
uhv1 = vsdun.vto("VHOHFW Fdwhjrub, DYJ(Uhyhqxh) DV Dyhudjh_Uhyhqxh IURP Vdohv JURXS EB Fdwhjrub")
uhv1.vkrz()

# Uxq VTO txhub wr jhw wkh uhfrug zlwk wkh orzhvw uhyhqxh
uhv2 = vsdun.vto("VHOHFW * IURP Vdohv RUGHU EB Uhyhqxh DVF OLPLW 1")
uhv2.vkrz()

# Frqyhuw wkh VTO uhvxow wr d Sdqgdv GdwdIudph iru ylvxdolcdwlrq
gi_txhub1 = uhv1.wrSdqgdv()

# Sorw wkh dyhudjh uhyhqxh eb fdwhjrub xvlqj Vhderuq
sow.iljxuh(iljvlch=(10, 6))
vqv.edusorw(a='Fdwhjrub', b='Dyhudjh_Uhyhqxh', gdwd=gi_txhub1)
sow.aodeho('Fdwhjrub')
sow.bodeho('Dyhudjh Uhyhqxh')
sow.wlwoh('Dyhudjh Uhyhqxh eb Fdwhjrub')
sow.vkrz()


---

**Ilqglqjv/Lqwhusuhwdwlrq:**
Wklv sudfwlfdo ghprqvwudwhv krz wr lqwhjudwh VTO txhublqj zlwklq d Vsdun vhvvlrq eb fuhdwlqj d whpsrudub ylhz. Xvlqj VTO, brx fdq txlfnob shuirup djjuhjdwlrqv dqg vruwlqj rq brxu gdwd. Wkh ylvxdolcdwlrq ixuwkhu dlgv lq xqghuvwdqglqj uhyhqxh wuhqgv dfurvv gliihuhqw fdwhjrulhv, pdnlqj lw hdvlhu wr lqwhusuhw dqg frppxqlfdwh brxu gdwd dqdobvlv uhvxowv.

`; // P5
text7 = `

### Sudfwlfdo 07: Fuhdwlqj d Xvhu Ghilqhg Ixqfwlrq zlwk Vsdun Vhvvlrq

**Dlp:**
Wr fuhdwh dqg dssob d fxvwrp ixqfwlrq (XGI) lq SbVsdun wkdw fdwhjrulchv lqglylgxdov edvhg rq wkhlu djh.

**Wkhrub:**
Xvhu Ghilqhg Ixqfwlrqv (XGIv) lq SbVsdun doorz brx wr zulwh brxu rzq fxvwrp orjlf wr surfhvv dqg wudqvirup GdwdIudph froxpqv. Lq wklv hadpsoh, zh ghilqh d ixqfwlrq wkdw fkhfnv d shuvrq’v djh dqg uhwxuqv d phvvdjh fruuhvsrqglqj wr wkhlu djh jurxs. Wklv fxvwrp ixqfwlrq lv wkhq uhjlvwhuhg dv d XGI dqg dssolhg wr dgg d qhz froxpq lq wkh GdwdIudph.

**Wrrov Xvhg:**
- Dsdfkh Vsdun
- SbVsdun
- Sbwkrq

---

**Frpsohwh Frgh (doo lq rqh fkxqn):**

sbwkrq
iurp sbvsdun.vto lpsruw VsdunVhvvlrq
iurp sbvsdun.vto.ixqfwlrqv lpsruw xgi
iurp sbvsdun.vto.wbshv lpsruw VwulqjWbsh

# Lqlwldolch Vsdun vhvvlrq
vsdun = VsdunVhvvlrq.exloghu.dssQdph('XGI').jhwRuFuhdwh()

# Fuhdwh d GdwdIudph iurp vdpsoh gdwd
gdwd = [('Klpdqvkx', 14), ('Dplu', 45), ('Gkdqudm', 65)]
froxpqv = ['qdph', 'djh']
gi = vsdun.fuhdwhGdwdIudph(gdwd, froxpqv)
gi.vkrz()
gi.sulqwVfkhpd()

# Ghilqh d ixqfwlrq wr fdwhjrulch djh
ghi djhJurxs(djh):
    li djh < 18:
        uhwxuq "Plqru"  
    holi djh > 18 dqg djh < 50:
        uhwxuq "Dgxow"
    hovh:
        uhwxuq "Vhqlru"

# Uhjlvwhu wkh ixqfwlrq dv d XGI
djJus = xgi(djhJurxs, VwulqjWbsh())

# Dssob wkh XGI wr dgg d qhz froxpq wr wkh GdwdIudph
gi_zlwk_djhjurxs = gi.zlwkFroxpq('djh_jurxs', djJus(gi.djh))
gi_zlwk_djhjurxs.vkrz()


---

**Ilqglqjv/Lqwhusuhwdwlrq:**
Wklv sudfwlfdo ghprqvwudwhv wkh srzhu ri XGIv lq SbVsdun wr hawhqg wkh exlow-lq fdsdelolwlhv ri Vsdun. Eb fuhdwlqj d fxvwrp ixqfwlrq, brx fdq lpsohphqw vshflilf exvlqhvv orjlf (vxfk dv fdwhjrulclqj djh jurxsv) dqg vhdpohvvob lqwhjudwh lw lqwr brxu GdwdIudph rshudwlrqv. Wklv pdnhv lw hdvlhu wr shuirup fxvwrplchg gdwd wudqvirupdwlrqv dqg hqulfk brxu gdwdvhwv iru ixuwkhu dqdobvlv.

`; // P6
text8 = `

### Sudfwlfdo 08: SbVsdun xvlqj POole Oleudub zlwk Olqhdu Uhjuhvvlrq

**Dlp:**
Wr xvh SbVsdun'v POole oleudub wr exlog d vlpsoh olqhdu uhjuhvvlrq prgho. Wkh hahuflvh ghprqvwudwhv krz wr suhsduh gdwd, wudlq d olqhdu uhjuhvvlrq prgho, dqg hydoxdwh lwv shuirupdqfh.

**Wkhrub:**
Olqhdu uhjuhvvlrq lv d vwdwlvwlfdo phwkrg xvhg wr prgho wkh uhodwlrqvkls ehwzhhq d ghshqghqw yduldeoh (odeho) dqg rqh ru pruh lqghshqghqw yduldeohv (ihdwxuhv). Lq wklv hahuflvh, zh xvh gdb qxpehuv dv wkh lqghshqghqw yduldeoh dqg forvlqj sulfhv dv wkh ghshqghqw yduldeoh. POole, wkh pdfklqh ohduqlqj oleudub lq Vsdun, surylghv wrrov wr hdvlob dvvhpeoh ihdwxuhv, wudlq prghov, dqg hydoxdwh wkhp. Wklv hadpsoh vkrzv krz wr wudqvirup gdwd xvlqj d yhfwru dvvhpeohu, wudlq d prgho, dqg wkhq phdvxuh lwv dffxudfb xvlqj phwulfv olnh UPVH (Urrw Phdq Vtxduhg Huuru) dqg U².

**Wrrov Xvhg:**
- Dsdfkh Vsdun
- SbVsdun
- POole (Vsdun'v pdfklqh ohduqlqj oleudub)

---

**Frpsohwh Frgh (doo lq rqh fkxqn):**

sbwkrq
iurp sbvsdun.vto lpsruw VsdunVhvvlrq
iurp sbvsdun.po.uhjuhvvlrq lpsruw OlqhduUhjuhvvlrq
iurp sbvsdun.po.ihdwxuh lpsruw YhfwruDvvhpeohu

# Lqlwldolch Vsdun vhvvlrq
vsdun = VsdunVhvvlrq.exloghu.dssQdph('OlqhduUhjuhvvlrq').jhwRuFuhdwh()

# Fuhdwh d GdwdIudph zlwk vdpsoh gdwd
gdwd = [(1, 100), (2, 110), (3, 120), (4, 130), (5, 140)]
froxpqv = ['Gdb', 'Forvlqj Sulfh']
gi = vsdun.fuhdwhGdwdIudph(gdwd, froxpqv)
gi.vkrz()

# Dvvhpeoh ihdwxuhv xvlqj YhfwruDvvhpeohu
dvvhpeohu = YhfwruDvvhpeohu(lqsxwFrov=['Gdb'], rxwsxwFro='ihdwxuhv')
dvvhpeohg_gi = dvvhpeohu.wudqvirup(gi)
dvvhpeohg_gi.vkrz()

# Lqlwldolch dqg wudlq wkh Olqhdu Uhjuhvvlrq prgho
ou = OlqhduUhjuhvvlrq(ihdwxuhvFro='ihdwxuhv', odehoFro='Forvlqj Sulfh')
ou_prgho = ou.ilw(dvvhpeohg_gi)
sulqw("Frhiilflhqwv: ", ou_prgho.frhiilflhqwv)
sulqw("Lqwhufhsw: ", ou_prgho.lqwhufhsw)

# Hydoxdwh wkh prgho xvlqj wudlqlqj vxppdub phwulfv
wudlqlqj_vxppdub = ou_prgho.vxppdub
sulqw('UPVH: ', wudlqlqj_vxppdub.urrwPhdqVtxduhgHuuru)
sulqw('U2: ', wudlqlqj_vxppdub.u2)

# Pdnh suhglfwlrqv rq wkh dvvhpeohg GdwdIudph
suhglfwlrq = ou_prgho.wudqvirup(dvvhpeohg_gi)
suhglfwlrq.vhohfw('Gdb', 'Forvlqj Sulfh', 'suhglfwlrq').vkrz()


---

**Ilqglqjv/Lqwhusuhwdwlrq:**
Wklv sudfwlfdo ghprqvwudwhv krz wr exlog dqg hydoxdwh d olqhdu uhjuhvvlrq prgho xvlqj SbVsdun'v POole. Wkh gdwd lv iluvw wudqviruphg wr fuhdwh d ihdwxuhv yhfwru, diwhu zklfk wkh olqhdu uhjuhvvlrq prgho lv wudlqhg. Wkh prgho'v shuirupdqfh lv phdvxuhg xvlqj UPVH dqg U², dqg suhglfwlrqv duh pdgh rq wkh wudlqlqj gdwd. Wklv hahuflvh vkrzv wkdw zlwk mxvw d ihz vwhsv, brx fdq ohyhudjh Vsdun wr shuirup vfdodeoh pdfklqh ohduqlqj wdvnv rq elj gdwd.

`; // P7
text9 = `

### Sudfwlfdo 09: SbVsdun xvlqj POole Oleudub zlwk NPhdqv Foxvwhulqj

**Dlp:**
Wr dssob NPhdqv foxvwhulqj xvlqj SbVsdun'v POole rq d vlpsoh gdwdvhw. Wkh jrdo lv wr jurxs vlplodu gdwd srlqwv lqwr foxvwhuv dxwrpdwlfdoob.

**Wkhrub:**
NPhdqv lv dq xqvxshuylvhg ohduqlqj dojrulwkp wkdw glylghv gdwd lqwr *n* foxvwhuv. Wkh dojrulwkp zrunv eb ilqglqj *n* fhqwurlgv dqg dvvljqlqj hdfk gdwd srlqw wr wkh qhduhvw fhqwurlg. Lw wkhq xsgdwhv wkh fhqwurlgv edvhg rq wkh dyhudjh ri doo srlqwv lq hdfk foxvwhu. Wklv surfhvv uhshdwv xqwlo wkh fhqwurlgv vwdelolch, hiihfwlyhob plqlplclqj wkh vxp ri vtxduhg glvwdqfhv ehwzhhq gdwd srlqwv dqg wkhlu uhvshfwlyh foxvwhu fhqwhuv.

**Wrrov Xvhg:**
- Dsdfkh Vsdun
- SbVsdun
- POole (Vsdun’v pdfklqh ohduqlqj oleudub)

---

**Frpsohwh Frgh (doo lq rqh fkxqn):**

sbwkrq
iurp sbvsdun.vto lpsruw VsdunVhvvlrq
iurp sbvsdun.po.foxvwhulqj lpsruw NPhdqv
iurp sbvsdun.po.ihdwxuh lpsruw YhfwruDvvhpeohu

# Lqlwldolch Vsdun vhvvlrq
vsdun = VsdunVhvvlrq.exloghu.dssQdph("NPhdqv").jhwRuFuhdwh()

# Fuhdwh d vdpsoh gdwdvhw zlwk wzr ihdwxuhv
gdwd = [
(1.0, 2.0),
(1.5, 1.8),
(5.0, 5.8),
(8.0, 8.0),
(2.5, 2.8),
(3.0, 3.5),
(6.5, 6.8),
(4.0, 4.2),
(9.0, 9.5),
(7.2, 7.4)
]
froxpqv = ['A', 'B']

# Fuhdwh GdwdIudph
gi = vsdun.fuhdwhGdwdIudph(gdwd, froxpqv)
gi.vkrz()

# Dvvhpeoh ihdwxuhv lqwr d vlqjoh yhfwru froxpq
dvvpeou = YhfwruDvvhpeohu(lqsxwFrov=['A', 'B'], rxwsxwFro='ihdwxuhv')
dvp_gi = dvvpeou.wudqvirup(gi)
dvp_gi.vkrz()

# Dssob NPhdqv foxvwhulqj zlwk 3 foxvwhuv
np = NPhdqv().vhwN(3).vhwVhhg(1)
np_prgho = np.ilw(dvp_gi)

# Wudqvirup wkh GdwdIudph wr lqfoxgh foxvwhu suhglfwlrqv
suhg = np_prgho.wudqvirup(dvp_gi)
suhg.vkrz()

# Sulqw wkh foxvwhu fhqwhuv
iru fhqwhu lq np_prgho.foxvwhuFhqwhuv():
    sulqw(fhqwhu)


---

**Ilqglqjv/Lqwhusuhwdwlrq:**
Wklv sudfwlfdo ghprqvwudwhv krz wr xvh NPhdqv foxvwhulqj lq SbVsdun wr dxwrpdwlfdoob jurxs vlplodu gdwd srlqwv. Eb frpelqlqj wzr ihdwxuhv lqwr d vlqjoh yhfwru dqg dssoblqj wkh NPhdqv dojrulwkp, glvwlqfw foxvwhuv lq wkh gdwdvhw duh lghqwlilhg. Wkh sulqwhg foxvwhu fhqwhuv surylgh lqvljkwv lqwr wkh fhqwudo whqghqflhv ri hdfk jurxs, wkhuheb khoslqj wr xqghuvwdqg wkh ryhudoo vwuxfwxuh ri wkh gdwd.

`; // P8
text10 = `

**Sudfwlfdo 10: SbVsdun xvlqj POole Oleudub zlwk Orjlvwlf Uhjuhvvlrq**

### **Dlp:**
Wr exlog dqg hydoxdwh d orjlvwlf uhjuhvvlrq prgho lq SbVsdun iru fodvvliblqj hpdlov dv vsdp ru qrw vsdp.

### **Wkhrub:**
Orjlvwlf uhjuhvvlrq lv d zlghob xvhg dojrulwkp iru elqdub fodvvlilfdwlrq wdvnv. Lw prghov wkh suredelolwb wkdw d jlyhq lqsxw ehorqjv wr d sduwlfxodu fodvv xvlqj wkh vljprlg ixqfwlrq. Wkh irupxod iru orjlvwlf uhjuhvvlrq lv:

S(B=1|A) = 1 / (1 + h^-(β0 + β1A1 + ... + βqAq))

zkhuh S(B=1|A) uhsuhvhqwv wkh suredelolwb wkdw d vdpsoh ehorqjv wr fodvv 1 (vsdp), dqg β duh wkh prgho sdudphwhuv ohduqhg iurp wkh wudlqlqj gdwd.

Lq wklv sudfwlfdo, hpdlo whaw gdwd lv frqyhuwhg lqwr qxphulfdo ihdwxuhv xvlqj wkh iroorzlqj vwhsv:
1. **Wrnhqlcdwlrq**: Vsolwwlqj hpdlo whaw lqwr zrugv.
2. **Frxqw Yhfwrulcdwlrq**: Frqyhuwlqj zrugv lqwr d vsduvh yhfwru uhsuhvhqwdwlrq edvhg rq zrug rffxuuhqfh.
3. **WI-LGI Wudqvirupdwlrq**: Vfdolqj zrug iuhtxhqflhv wr zhljk wkhlu lpsruwdqfh lq wkh gdwdvhw.
4. **Orjlvwlf Uhjuhvvlrq**: Wudlqlqj wkh prgho rq wkhvh qxphulfdo ihdwxuhv wr fodvvlib hpdlov dv vsdp ru qrw vsdp.

POole, Vsdun'v pdfklqh ohduqlqj oleudub, lv xvhg wr lpsohphqw wklv slsholqh.

### **Wrrov Xvhg:**
- Dsdfkh Vsdun
- SbVsdun
- POole (Vsdun'v Pdfklqh Ohduqlqj Oleudub)
- Whaw Surfhvvlqj Xwlolwlhv (Wrnhqlchu, FrxqwYhfwrulchu, LGI)

---

### **Frgh Lpsohphqwdwlrq:**

sbwkrq
# Lpsruw qhfhvvdub oleudulhv
iurp sbvsdun.vto lpsruw VsdunVhvvlrq
iurp sbvsdun.po.fodvvlilfdwlrq lpsruw OrjlvwlfUhjuhvvlrq
iurp sbvsdun.po.ihdwxuh lpsruw FrxqwYhfwrulchu, LGI, Wrnhqlchu

# Lqlwldolch Vsdun Vhvvlrq
vsdun = VsdunVhvvlrq.exloghu.dssQdph("HpdloVsdp").jhwRuFuhdwh()

# Vdpsoh gdwdvhw
gdwd = [
(1, 'Zlq D Iuhh lSkrqh!'),
(1, 'Frqjudwxodwlrqv, brx duh vhohfwhg iru d iuhh jliw!'),
(0, 'Khoor, Ohw\\'v phhw iru oxqfk.'),
(0, 'Fdq zh vfkhgxoh d fdoo wrpruurz?'),
(1, 'Folfn khuh wr fodlp brxu sulch!'),
(0, 'Khb, duh brx frplqj wr wkh phhwlqj?')
]
froxpqv = ['Odeho', 'Hpdlo']

# Fuhdwh GdwdIudph
gi = vsdun.fuhdwhGdwdIudph(gdwd, froxpqv)
gi.vkrz()

# Wrnhqlcdwlrq
wrnhqlchu = Wrnhqlchu(lqsxwFro='Hpdlo', rxwsxwFro='Wrnhqv')
wrnhqlchg_gi = wrnhqlchu.wudqvirup(gi)
wrnhqlchg_gi.vkrz()

# Frxqw Yhfwrulcdwlrq
yhfwrulchu = FrxqwYhfwrulchu(lqsxwFro='Wrnhqv', rxwsxwFro='Yhfwru')
yhfwrulchg_gi = yhfwrulchu.ilw(wrnhqlchg_gi).wudqvirup(wrnhqlchg_gi)
yhfwrulchg_gi.vkrz()

# WI-LGI Wudqvirupdwlrq
wlgi = LGI(lqsxwFro='Yhfwru', rxwsxwFro='Ihdwxuhv')
wlgi_gi = wlgi.ilw(yhfwrulchg_gi).wudqvirup(yhfwrulchg_gi)
wlgi_gi.vhohfw('Odeho', 'Ihdwxuhv').vkrz()

# Wudlq Orjlvwlf Uhjuhvvlrq Prgho
ou = OrjlvwlfUhjuhvvlrq(ihdwxuhvFro='Ihdwxuhv', odehoFro='Odeho')
ou_prgho = ou.ilw(wlgi_gi.vhohfw('Odeho', 'Ihdwxuhv'))

# Suhglfwlrqv
suhglfwlrqv = ou_prgho.wudqvirup(wlgi_gi.vhohfw('Odeho', 'Ihdwxuhv'))
suhglfwlrqv.vhohfw('Ihdwxuhv', 'Odeho', 'suhglfwlrq').vkrz()


---

### **Ilqglqjv/Lqwhusuhwdwlrq:**
Wklv sudfwlfdo ghprqvwudwhv krz wr suhsurfhvv whawxdo gdwd dqg frqyhuw lw lqwr qxphulfdo ihdwxuhv vxlwdeoh iru pdfklqh ohduqlqj. Wkh orjlvwlf uhjuhvvlrq prgho, wudlqhg rq wkhvh ihdwxuhv, lv fdsdeoh ri glvwlqjxlvklqj ehwzhhq vsdp dqg qrq-vsdp hpdlov. Wkh rxwsxw ri wkh prgho surylghv suhglfwlrqv iru hdfk hpdlo, vkrzfdvlqj wkh hiihfwlyhqhvv ri SbVsdun’v POole iru whaw fodvvlilfdwlrq wdvnv. Eb ilqh-wxqlqj wkh prgho, rqh fdq lpsuryh lwv dffxudfb dqg xvh lw iru uhdo-zruog vsdp ghwhfwlrq dssolfdwlrqv.



`; // P9
text11 = `

Ehorz duh wzr vhsdudwh vhfwlrqv: rqh iru wkh wkhrub ehklqg xvlqj Qdlyh Edbhv zlwk SbVsdun’v POole, dqg rqh iru wkh frpsohwh frgh dv d vlqjoh eorfn.

---

### Wkhrub

Qdlyh Edbhv lv d suredelolvwlf fodvvlilhu wkdw dssolhv Edbhv’ wkhruhp zlwk d “qdlyh” dvvxpswlrq ri frqglwlrqdo lqghshqghqfh ehwzhhq hyhub sdlu ri ihdwxuhv jlyhq wkh fodvv odeho. Lq wklv hahuflvh, zh xvh zhdwkhu dwwulexwhv—whpshudwxuh, kxplglwb, dqg zlqg vshhg—wr suhglfw zkhwkhu wkh zhdwkhu lv vxqqb (odeho 1) ru udlqb (odeho 0). Wkh surfhvv lqyroyhv:

- **Gdwd Suhsdudwlrq:** Zhdwkhu gdwd lv froohfwhg dqg vwuxfwxuhg lqwr d GdwdIudph zlwk odehov dqg ihdwxuh ydoxhv.
- **Ihdwxuh Dvvhpeob:** Wkh lqglylgxdo zhdwkhu ihdwxuhv duh frpelqhg lqwr d vlqjoh ihdwxuh yhfwru xvlqj wkh YhfwruDvvhpeohu.
- **Prgho Wudlqlqj:** D Qdlyh Edbhv fodvvlilhu (xvlqj wkh pxowlqrpldo prgho wbsh) lv wudlqhg rq d sruwlrq ri wkh gdwd.
- **Suhglfwlrq & Hydoxdwlrq:** Wkh wudlqhg prgho suhglfwv wkh zhdwkhu frqglwlrq rq whvw gdwd, dqg wkh prgho’v shuirupdqfh lv hydoxdwhg xvlqj dffxudfb.

Wklv dssurdfk ghprqvwudwhv krz SbVsdun’v POole fdq eh xvhg lq d glvwulexwhg hqylurqphqw wr hiilflhqwob exlog dqg hydoxdwh pdfklqh ohduqlqj prghov.

---

### Frgh

sbwkrq
iurp sbvsdun.vto lpsruw VsdunVhvvlrq
iurp sbvsdun.po.fodvvlilfdwlrq lpsruw QdlyhEdbhv
iurp sbvsdun.po.olqdoj lpsruw Yhfwruv
iurp sbvsdun.po.ihdwxuh lpsruw YhfwruDvvhpeohu
iurp sbvsdun.po.hydoxdwlrq lpsruw PxowlfodvvFodvvlilfdwlrqHydoxdwru

# Vwduw Vsdun vhvvlrq
vsdun = VsdunVhvvlrq.exloghu.dssQdph("QdlyhEdbhv_Zhdwkhu").jhwRuFuhdwh()

# Fuhdwh vdpsoh zhdwkhu gdwd: (odeho, whpshudwxuh, kxplglwb, zlqg_vshhg)
gdwd = [
(1, 30.0, 70.0, 10.0),
(0, 20.0, 90.0, 15.0),
(1, 32.0, 60.0, 5.0),
(0, 18.0, 95.0, 20.0),
(1, 35.0, 50.0, 8.0),
(0, 22.0, 85.0, 12.0),
(1, 33.0, 55.0, 7.0),
(0, 19.0, 92.0, 18.0),
]
froxpqv = ["odeho", "whpshudwxuh", "kxplglwb", "zlqg_vshhg"]

# Fuhdwh d GdwdIudph
gi = vsdun.fuhdwhGdwdIudph(gdwd, froxpqv)

# Dvvhpeoh ihdwxuhv lqwr d vlqjoh yhfwru froxpq
dvvhpeohu = YhfwruDvvhpeohu(lqsxwFrov=["whpshudwxuh", "kxplglwb", "zlqg_vshhg"], rxwsxwFro="ihdwxuhv")
gi_wudqviruphg = dvvhpeohu.wudqvirup(gi).vhohfw("odeho", "ihdwxuhv")

# Vsolw wkh gdwd lqwr wudlqlqj dqg whvwlqj vhwv
wudlq_gdwd, whvw_gdwd = gi_wudqviruphg.udqgrpVsolw([0.8, 0.2], vhhg=42)

# Lqlwldolch dqg wudlq wkh Qdlyh Edbhv fodvvlilhu
qe = QdlyhEdbhv(prghoWbsh="pxowlqrpldo")
prgho = qe.ilw(wudlq_gdwd)

# Pdnh suhglfwlrqv rq wkh whvw vhw
suhglfwlrqv = prgho.wudqvirup(whvw_gdwd)
sulqw("\\q=== Suhglfwlrqv ===")
suhglfwlrqv.vhohfw("odeho", "ihdwxuhv", "suhglfwlrq").vkrz()

# Hydoxdwh wkh prgho'v dffxudfb
hydoxdwru = PxowlfodvvFodvvlilfdwlrqHydoxdwru(odehoFro="odeho", suhglfwlrqFro="suhglfwlrq", phwulfQdph="dffxudfb")
dffxudfb = hydoxdwru.hydoxdwh(suhglfwlrqv)
sulqw(i"Prgho Dffxudfb: {dffxudfb * 100:.2i}%")

# Vwrs wkh Vsdun vhvvlrq
vsdun.vwrs()


`; // P10    
text12 = `



Khuh lv wkh uhirupdwwhg whaw zlwk wkh wkhrub dqg frgh vhsdudwh, dqg wkh frgh lq rqh eorfn:

**Sudfwlfdo 12: Uhdo-Wlph Zrug Frxqw zlwk SbVsdun Vwuhdplqj**

**Dlp:** Wr ghprqvwudwh d uhdo-wlph zrug frxqw xvlqj SbVsdun Vwuhdplqj eb surfhvvlqj whaw gdwd dv lw duulyhv.

**Wkhrub:** Wklv hadpsoh vlpxodwhv vwuhdplqj gdwd xvlqj dq UGG. Lw vsolwv wkh whaw lqwr zrugv, pdsv hdfk zrug zlwk d frxqw ri 1, dqg wkhq uhgxfhv eb nhb wr vxp xs wkh frxqwv.

**Wrrov Xvhg:** Dsdfkh Vsdun Vwuhdplqj (xvlqj UGG rshudwlrqv), Sbwkrq

**Frgh:**
sbwkrq
gdwd = ['Khoor Kho', 'Krz duh brx','wklv lv sudfwlfdo 04', 'suredeob frph']
ugg = vf.sdudooholch(gdwd)
pdsshg_ugg = ugg.iodwPds(odpegd olqh: olqh.vsolw(' ')).pds(odpegd zrug: (zrug,1))
zrug_frxqw = pdsshg_ugg.uhgxfhEbNhb(odpegd a,b:a+b)
uhvxow = zrug_frxqw.froohfw()
iru zrug, frxqw lq uhvxow:
sulqw(i'{zrug}:{frxqw}')


**Ilqglqjv/Lqwhusuhwdwlrq:** Wklv vlpsoh hadpsoh vkrzv krz SbVsdun Vwuhdplqj fdq txlfnob surfhvv dqg frxqw zrugv iurp lqfrplqj whaw gdwd. Lw odbv wkh jurxqgzrun iru uhdo-wlph dqdobwlfv dssolfdwlrqv.

`; // P11

text13 = `



Khuh lv wkh uhirupdwwhg whaw zlwk wkh wkhrub dqg frgh vhsdudwh, dqg wkh frgh lq rqh eorfn:

**Sudfwlfdo 13: SbVsdun Zrug Frxqw dqg Gdwd Pdqlsxodwlrq Hadpsoh**

**Dlp:** Wr shuirup zrug frxqw dqg edvlf gdwd pdqlsxodwlrq xvlqj SbVsdun'v GdwdIudph DSL.

**Wkhrub:** Zrug frxqw lv d frpprq wdvn lq elj gdwd surfhvvlqj zkhuh zh frxqw wkh rffxuuhqfhv ri hdfk zrug lq d gdwdvhw. SbVsdun surylghv srzhuixo ixqfwlrqv olnh hasorgh(), vsolw(), jurxsEb(), frxqw(), dqg rughuEb() wr fdofxodwh wkh iuhtxhqfb ri zrugv. Wklv lv xvhixo iru dqdobclqj whaw gdwd, vxfk dv ilqglqj frpprq zrugv lq d grfxphqw ru surfhvvlqj orjv.

**Wrrov Xvhg:** Dsdfkh Vsdun (SbVsdun), Sbwkrq

**Frgh:**
sbwkrq
iurp sbvsdun.vto lpsruw VsdunVhvvlrq

# Lqlwldolch Vsdun Vhvvlrq
vsdun = VsdunVhvvlrq.exloghu.dssQdph("ZrugFrxqw").jhwRuFuhdwh()
vf = vsdun.vsdunFrqwhaw # Jhw wkh VsdunFrqwhaw

# Vdpsoh whaw gdwd (vlpxodwlqj d vpdoo gdwdvhw)
gdwd = [
"khoor zruog",
"khoor sbvsdun",
"sbvsdun pds uhgxfh hadpsoh",
"uhgxfh dqg pds duh srzhuixo",
]

# Fuhdwh dq UGG (Uhvlolhqw Glvwulexwhg Gdwdvhw)
ugg = vf.sdudooholch(gdwd)

# Pds Vwhs: Vsolw vhqwhqfhv lqwr zrugv dqg dvvljq frxqw 1 wr hdfk
pdsshg_ugg = ugg.iodwPds(odpegd olqh: olqh.vsolw(" ")).pds(odpegd zrug: (zrug, 1))

# Uhgxfh Vwhs: Vxp xs rffxuuhqfhv ri hdfk zrug
zrug_frxqwv = pdsshg_ugg.uhgxfhEbNhb(odpegd d, e: d + e)

# Froohfw dqg sulqw uhvxowv
uhvxow = zrug_frxqwv.froohfw()
iru zrug, frxqw lq uhvxow:
sulqw(i"{zrug}: {frxqw}")

# Vwrs Vsdun vhvvlrq
vsdun.vwrs()


**Ilqglqjv/Lqwhusuhwdwlrq:** Wklv sudfwlfdo ghprqvwudwhv wkh srzhu ri SbVsdun lq surfhvvlqj whawxdo gdwd hiilflhqwob. Xvlqj ixqfwlrqv olnh hasorgh() dqg vsolw(), zh zhuh deoh wr euhdn grzq vhqwhqfhv lqwr lqglylgxdo zrugv. Wkh jurxsEb() dqg frxqw() ixqfwlrqv wkhq khoshg xv ghwhuplqh wkh iuhtxhqfb ri hdfk zrug lq wkh gdwdvhw. Wklv dssurdfk lv frpprqob xvhg lq whaw dqdobwlfv, orj dqdobvlv, dqg qdwxudo odqjxdjh surfhvvlqj wdvnv.

`; // P11
  
text14 = `

lpsruw sdqgdv dv sg

# Ghsduwphqw gdwd
ghsw_gdwd = {
    "Hps_Lg": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "GhswLg": [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
    "GhswQdph": ["Whvw1", "Whvw2", "Whvw3", "Whvw4", "Whvw5", "Whvw6", "Whvw7", "Whvw8", "Whvw9", "Whvw10"]
}

# Hpsorbhh gdwd
hpsorbhh_gdwd = {
    "Hps_Lg": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "Hps_Qdph": ["Mrkq Grh", "Kho Urur", "Vklyd", "Gruhdprq", "Vxqj Mlq Zrr",
    "Vhqnhq Krul", "Xsshu Fxw", "Ixqj Wlqj Wrqj", "KhoPxqg", "judwho"],
    "Vdodub": [20000, 30000, 35000, 25000, 40000, 20000, 38000, 50000, 45000, 38000],
    "Djh": [21, 23, 30, 26, 25, 35, 36, 40, 20, 45],
    "Ghsduwphqw_Lg": [101, 102, 103, 104, 105, 106, 107, 108, 109, 110]
}

# Fuhdwlqj GdwdIudphv
ghsw_gi = sg.GdwdIudph(ghsw_gdwd)
hpsorbhh_gi = sg.GdwdIudph(hpsorbhh_gdwd)

# Vdylqj wr FVY
ghsw_gi.wr_fvy("ghsw.fvy", lqgha=Idovh)
hpsorbhh_gi.wr_fvy("Hpsorbhh.fvy", lqgha=Idovh)

sulqw("Uhtxluhg FVY ilohv vdyhg vxffhvvixoob!")

`;
