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
    text14,
    text15,
    text16,
    text17
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

  passwordInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();      // prevent any default form behavior
      submitBtn.click();       // trigger the same click handler
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
#Sudfwlfdo 01D: GDWD SUHSURFHVVLQJ DQG HASORUDWLRQ

lpsruw sdqgdv dv sg
gi = sg.uhdg_fvy('VdpsohGdwd.fvy')
sulqw(gi)

sulqw(gi.lqir())
sulqw(gi["Qdph"])

sulqw(gi["Qdph"].lvqxoo())

sulqw(gi["Qdph"])
gi.ilooqd("Qxoo", lqsodfh=Wuxh)
sulqw(gi["Qdph"])

gi["Qdph"]=gi["Qdph"].vwu.uhsodfh("Qxoo","brxuqdph")
sulqw(gi["Qdph"])

gi["Qdph"]=gi["Qdph"].vwu.orzhu()
sulqw(gi["Qdph"])

gi["Qdph"]=gi["Qdph"].vwu.xsshu()
sulqw(gi["Qdph"])

gi["Qdph"]=gi["Qdph"].vwu.vwuls()
sulqw(gi["Qdph"])

lpsruw sdqgdv dv sg
lpsruw qxpsb dv qs
gdwd={'Ydoxh':[10,12,15,14,13,12,10,11,12,14,10]}
gi=sg.GdwdIudph(gdwd)
T1=gi.txdqwloh(0.25)
T3=gi.txdqwloh(0.75)
LTU=T3-T1
orzhu_erxqg=T1-1.5*LTU
xsshu_erxqg=T3+1.5*LTU
rxwolhuv=gi[(gi<orzhu_erxqg)|(gi>xsshu_erxqg)]
sulqw("Rxwolhuv:\\q",rxwolhuv)

lpsruw sdqgdv dv sg
gi=sg.uhdg_fvy("VdpsohGdwd.fvy")
gdwd=gi["Djh"]
gdwdLqw=gdwd.dvwbsh(lqw)
gdwdwrolvw=gdwdLqw.wrolvw()
T1=gdwdLqw.txdqwloh(0.25)
T3=gdwdLqw.txdqwloh(0.75)
LTU=T3-T1
orzhu_erxqg=T1-1.5*LTU
xsshu_erxqg=T3+1.5*LTU
rxwolhuv=gdwdLqw[(gdwdLqw<orzhu_erxqg)|(gdwdLqw>xsshu_erxqg)]
sulqw("Rxwolhuv:\\q",rxwolhuv)
`; // P01A
text2 = `
#Sudfwlfdo 01E: Ordg d Gdwdvhw, Fdofxodwh Ghvfulswlyh Vxppdub Vwdwlvwlfv, Fuhdwh Ylvxdolcdwlrqv

lpsruw sdqgdv dv sg
lpsruw pdwsorwole.sbsorw dv sow
lpsruw vhderuq dv vqv

gi = sg.uhdg_fvy("wudlq.fvy")
sulqw(gi.khdg())

sulqw(gi.ghvfuleh())
sulqw(gi.ghvfuleh(lqfoxgh="doo"))

a = gi.gurs("Vxuylyhg", dalv=1)
b = gi["Vxuylyhg"]
sulqw(a.khdg(3))
sulqw(b.khdg(3))

gi.klvw(iljvlch=(7, 7))
sow.vkrz()

gi.sorw.edu()
sow.edu(gi["Djh"], gi["Sfodvv"])
sow.aodeho("Djh")
sow.bodeho("Sfodvv")
sow.wlwoh("Edu Judsk")
sow.vkrz()

sow.vfdwwhu(gi["Sfodvv"], gi["Djh"])
sow.aodeho("Sfodvv")
sow.bodeho("Djh")
sow.wlwoh("Vfdwwhu Sorw")
sow.vkrz()

vqv.erasorw(a="Sfodvv", b="Djh", gdwd=gi)
sow.aodeho("Sfodvv")
sow.bodeho("Djh")
sow.wlwoh("Era Sorw")
sow.vkrz()

`; // P01B
text3 = `

#Sudfwlfdo 01F: Gdwd Suh-Surfhvvlqj Urxwlqhv – Odeho Hqfrglqj, Vfdolqj, dqg Elqdulcdwlrq

lpsruw sdqgdv dv sg
lpsruw qxpsb dv qs
gi = sg.uhdg_fvy("/frqwhqw/lulv.fvy")
sulqw(gi['vshflhv'].xqltxh())

iurp vnohduq lpsruw suhsurfhvvlqj
oh = suhsurfhvvlqj.OdehoHqfrghu()
gi['vshflhv'] = oh.ilw_wudqvirup(gi['vshflhv'])
sulqw(gi['vshflhv'].xqltxh())

lpsruw sdqgdv dv sg
iurp vnohduq.gdwdvhwv lpsruw ordg_lulv
iurp vnohduq.suhsurfhvvlqj lpsruw Elqdulchu
gdwd = ordg_lulv(dv_iudph=Wuxh)
gi = gdwd.iudph
sulqw(gi['vhsdo ohqjwk (fp)'])

elqdulchu = Elqdulchu(wkuhvkrog=5.0)
gi['vhsdo ohqjwk (fp) elqdub'] = elqdulchu.ilw_wudqvirup(gi[['vhsdo ohqjwk (fp)']])
sulqw(gi['vhsdo ohqjwk (fp) elqdub'])

`; // P01C
text4 = `

# Sudfwlfdo 02D: Lpsohphqwdwlrq ri Ghflvlrq Wuhh xvlqj Lqirupdwlrq Jdlq

lpsruw qxpsb dv qs
lpsruw sdqgdv dv sg

gdwd = sg.uhdg_fvy('/frqwhqw/lulv.fvy')
sulqw(gdwd)
sulqw(wuhh_uxohv)

a = gdwd.gurs('vshflhv', dalv=1)
b = gdwd['vshflhv']
sulqw('Ihdwxuhv: \\q', a.khdg(3))
sulqw('Wdujhw: \\q', b.khdg(3))

iurp vnohduq.prgho_vhohfwlrq lpsruw wudlq_whvw_vsolw
a_wudlq, a_whvw, b_wudlq, b_whvw = wudlq_whvw_vsolw(a, b, whvw_vlch=0.2, udqgrp_vwdwh=42)
sulqw('Wudlqlqj vhw: \\q')
sulqw(a_wudlq)
sulqw(b_wudlq)
sulqw('Whvwlqj vhw: \\q')
sulqw(a_whvw)
sulqw(b_whvw)

iurp vnohduq.wuhh lpsruw GhflvlrqWuhhFodvvlilhu
prgho = GhflvlrqWuhhFodvvlilhu()
prgho.ilw(a_wudlq, b_wudlq)

b_suhg = prgho.suhglfw(a_whvw)
sulqw(b_suhg)

iurp vnohduq.phwulfv lpsruw dffxudfb_vfruh
dffxudfb = dffxudfb_vfruh(b_whvw, b_suhg)
sulqw('Dffxudfb', dffxudfb)

lpsruw pdwsorwole.sbsorw dv sow
iurp vnohduq.wuhh lpsruw sorw_wuhh
sow.iljxuh(iljvlch=(10, 6))
sorw_wuhh (prgho, iloohg=Wuxh, ihdwxuh_qdphv=a.froxpqv, fodvv_qdphv=prgho.fodvvhv_)
sow.vkrz()


`; // P02A
text5 = `

#Sudfwlfdo 02E: Lpsohphqwdwlrq ri Ghflvlrq Wuhh Ohduqlqj xvlqj Jlql Lqgha

iurp vnohduq.gdwdvhwv lpsruw ordg_lulv
iurp vnohduq.wuhh lpsruw GhflvlrqWuhhFodvvlilhu, hasruw_whaw, sorw_wuhh
lpsruw pdwsorwole.sbsorw dv sow
gdwd = ordg_lulv()
A = gdwd.gdwd # Ihdwxuhv
b = gdwd.wdujhw # Odehov
foi = GhflvlrqWuhhFodvvlilhu(fulwhulrq='jlql', pda_ghswk=3, udqgrp_vwdwh=42)
foi.ilw(A, b)
sow.iljxuh(iljvlch=(12, 8))
sorw_wuhh(foi,ihdwxuh_qdphv=gdwd.ihdwxuh_qdphv,fodvv_qdphv=gdwd.wdujhw_qdphv,iloohg=Wuxh,urxqghg=Wuxh)
sow.wlwoh("Ghflvlrq Wuhh [Xvlqj Jlql Lqgha]")
sow.vkrz()
wuhh_uxohv = hasruw_whaw(foi, ihdwxuh_qdphv=gdwd.ihdwxuh_qdphv)
sulqw(wuhh_uxohv)

`;// P02B
text6 = `

#Sudfwlfdo 02F: Lpsohphqwlqj ri Jlql Lqgha lq Sbwkrq

ghi jlql_lqgha(fodvvhv):
wrwdo = vxp(fodvvhv)
sursruwlrqv = [frxqw / wrwdo iru frxqw lq fodvvhv]
uhwxuq 1 - vxp(s ** 2 iru s lq sursruwlrqv)
ghi zhljkwhg_jlql(fkloguhq):
wrwdo_lqvwdqfhv = vxp(vxp(fklog) iru fklog lq fkloguhq)
zhljkwhg_jlql = vxp(
(vxp(fklog) / wrwdo_lqvwdqfhv) * jlql_lqgha(fklog) iru fklog lq fkloguhq
)
uhwxuq zhljkwhg_jlql
  ghi jlql_jdlq(sduhqw, fkloguhq):
  jlql_sduhqw = jlql_lqgha(sduhqw)
  jlql_vsolw = zhljkwhg_jlql(fkloguhq)
  uhwxuq jlql_sduhqw - jlql_vsolw

sduhqw_qrgh = [50, 30, 20] # Fodvv D: 50, Fodvv E: 30, Fodvv F: 20
fklog_1 = [30, 20, 10] # Fodvv D: 30, Fodvv E: 20, Fodvv F: 10
fklog_2 = [20, 10, 10] # Fodvv D: 20, Fodvv E: 10, Fodvv F: 10
jlql_sduhqw = jlql_lqgha(sduhqw_qrgh)
jlql_vsolw = zhljkwhg_jlql([fklog_1, fklog_2])
jdlq = jlql_jdlq(sduhqw_qrgh, [fklog_1, fklog_2])
sulqw(i"Jlql Lqgha (Sduhqw Qrgh): {jlql_sduhqw:.4i}")
sulqw(i"Zhljkwhg Jlql Lqgha (Diwhu Vsolw): {jlql_vsolw:.4i}")
sulqw(i"Jlql Jdlq: {jdlq:.4i}")


`; // P02C
text7 = `


#Sudfwlfdo 02G: Lpsohphqwdwlrq ri Ghflvlrq Wuhh xvlqj Lqirupdwlrq jdlq

iurp vnohduq.gdwdvhwv lpsruw ordg_lulv
iurp vnohduq.wuhh lpsruw GhflvlrqWuhhFodvvlilhu, hasruw_whaw, sorw_wuhh
lpsruw pdwsorwole.sbsorw dv sow
gdwd = ordg_lulv()
A = gdwd.gdwd # Ihdwxuhv
b = gdwd.wdujhw # Odehov
foi = GhflvlrqWuhhFodvvlilhu(fulwhulrq='hqwursb', pda_ghswk=4, udqgrp_vwdwh=42)
foi.ilw(A, b)
sow.iljxuh(iljvlch=(12, 8))
sorw_wuhh(foi,ihdwxuh_qdphv=gdwd.ihdwxuh_qdphv,fodvv_qdphv=gdwd.wdujhw_qdphv,iloohg=Wuxh,urxqghg=Wuxh)
sow.wlwoh("Ghflvlrq Wuhh [Xvlqj Lqirupdwlrq Jdlq - Hqwursb]")
sow.vkrz()

wuhh_uxohv = hasruw_whaw(foi, ihdwxuh_qdphv=gdwd.ihdwxuh_qdphv)
sulqw(wuhh_uxohv)

`; // P02D
text8 = `

#Sudfwlfdo 02H: Lpsohphqwdwlrq ri Lqirupdwlrq jdlq

lpsruw qxpsb dv qs
ghi hqwursb(fodvvhv):
    wrwdo = vxp(fodvvhv)
    sursruwlrqv = [frxqw / wrwdo iru frxqw lq fodvvhv li frxqw > 0]
    uhwxuq -vxp(s * qs.orj2(s) iru s lq sursruwlrqv)


ghi lqirupdwlrq_jdlq(sduhqw, fkloguhq):
  wrwdo_lqvwdqfhv = vxp(sduhqw)
  sduhqw_hqwursb = hqwursb(sduhqw)
  zhljkwhg_hqwursb = vxp(
  (vxp(fklog) / wrwdo_lqvwdqfhv) * hqwursb(fklog) iru fklog lq fkloguhq )
  uhwxuq sduhqw_hqwursb - zhljkwhg_hqwursb
sduhqw_qrgh = [50, 30, 20]
fklog_1 = [30, 20, 10]
fklog_2 = [20, 10, 10]
sduhqw_hqwursb = hqwursb(sduhqw_qrgh)
zhljkwhg_hqwursb = vxp([hqwursb(fklog_1), hqwursb(fklog_2)])
jdlq = lqirupdwlrq_jdlq(sduhqw_qrgh, [fklog_1, fklog_2])
sulqw("Sduhqw Hqwursb:", sduhqw_hqwursb)
sulqw("Zhljkwhg Hqwursb:", zhljkwhg_hqwursb)
sulqw("Lqirupdwlrq Jdlq:", jdlq)

`; // P02E
text9 = `

#Sudfwlfdo 03D: Fodvvlilfdwlrq ri hpdlo dv Vsdp ru Kdp
#b = qs.duudb([1, 1, 1, 0, 0, 0]) iru vsdp 1
#b = qs.duudb([0, 0, 0, 0, 1, 1]) iru vsdp 0


lpsruw qxpsb dv qs
iurp vnohduq.qdlyh_edbhv lpsruw EhuqrxoolQE
iurp vnohduq.prgho_vhohfwlrq lpsruw wudlq_whvw_vsolw
iurp vnohduq.phwulfv lpsruw dffxudfb_vfruh


a = qs.duudb([
[1, 1, 1, 0, 0],
[1, 1, 0, 0, 0],
[1, 0, 0, 0, 0],
[0, 0, 0, 1, 1],
[0, 0, 0, 1, 1],
[0, 0, 0, 1, 1]
])

# Odehov (1: Vsdp, 0: Kdp)
b = qs.duudb([1, 1, 1, 0, 0, 0])

a_wudlq, a_whvw, b_wudlq, b_whvw = wudlq_whvw_vsolw(a, b, whvw_vlch=0.2, udqgrp_vwdwh=42)


prgho = EhuqrxoolQE()

prgho.ilw(a_wudlq, b_wudlq)


b_suhg = prgho.suhglfw(a_whvw)


dffxudfb = dffxudfb_vfruh(b_whvw, b_suhg)
sulqw(i'Dffxudfb: {dffxudfb * 100:.2i}%')


qhz_hpdlo = qs.duudb([[1, 1, 0, 0, 0]])
qhz_suhglfwlrq = prgho.suhglfw(qhz_hpdlo)
sulqw(i'Suhglfwlrq fodvv iru wkh qhz hpdlo (0=Kdp, 1=Vsdp): {qhz_suhglfwlrq[0]}')

`; // P03A
text10 = `

# Sudfwlfdo 03E: Lpsohphqwdwlrq ri Qdïyh Edbhv Fodvvlilhu [Lulv Gdwdvhw]

lpsruw sdqgdv dv sg
iurp vnohduq.prgho_vhohfwlrq lpsruw wudlq_whvw_vsolw
iurp vnohduq.qdlyh_edbhv lpsruw JdxvvldqQE
iurp vnohduq.phwulfv lpsruw dffxudfb_vfruh
lpsruw qxpsb dv qs
iurp vnohduq.gdwdvhwv lpsruw ordg_lulv

lulv = ordg_lulv()
A, b = lulv.gdwd, lulv.wdujhw
A_wudlq, A_whvw, b_wudlq, b_whvw = wudlq_whvw_vsolw(A, b, whvw_vlch=0.3, udqgrp_vwdwh=0)
jqe = JdxvvldqQE()
jqe.ilw(A_wudlq, b_wudlq)

b_suhg = jqe.suhglfw(A_whvw)
dffxudfb = dffxudfb_vfruh(b_whvw, b_suhg)

vshflhv_qdphv = {0: 'vhwrvd', 1: 'yhuvlfroru', 2: 'ylujlqlfd'}
udqgrp_whvw_gdwd = qs.duudb([[5.1, 3.5, 1.4, 0.2],
[6.3, 2.9, 5.6, 1.8],
[6.1, 2.9, 4.7, 1.4]])
suhglfwlrqv = jqe.suhglfw(udqgrp_whvw_gdwd)

sulqw("="*30)
sulqw(i"Dffxudfb ri Jdxvvldq Qdlyh Edbhv fodvvlilhu: {dffxudfb:.2i}\\q")

iru l, suhglfwlrq lq hqxphudwh(suhglfwlrqv):
  sulqw(i"Suhglfwlrq iru gdwd srlqw {l + 1}: {suhglfwlrq} ({vshflhv_qdphv[suhglfwlrq]})")

sulqw("="*30)


`; // P03B
text11 = `

# Sudfwlfdo 04D: Uhdglqj Gdwd iurp Gliihuhqw Ilohv Xvlqj [U Vwxglr]

oleudub(gdwdvhwv)
gdwd(lulv)
qdphv(lulv)

vxppdub(lulv)
vxppdub(lulv$Vhsdo.Zlgwk)

lv.qd(lulv$Vhsdo.Zlgwk)
lv.qd(lulv)

ohqjwk(xqltxh(lulv$Vhsdo.Zlgwk))

sorw(lulv$Vshflhv, pdlq = "brxu qdph")
sorw(lulv$Vhsdo.Ohqjwk, pdlq = "brxu qdph")
sorw(lulv$Vhsdo.Zlgwk, pdlq = "brxu qdph")
sorw(lulv, pdlq = "brxu qdph")


`; // P04A  
text12 = `



# Sudfwlfdo 04E: Lpsohphqwlqj Fodvvlilfdwlrq lq U [Ghflvlrq Wuhh Fodvvlilhu]
#Sudfwlfdo 04E: Sduw D

lqvwdoo.sdfndjhv('sduwb') #lqvwdoo lq rwkhu fhoo

oleudub(sduwb)
oleudub (gdwdvhwv)
gdwd (lulv)

sulqw(lulv)
wdujhw = Vshflhv ~ Vhsdo.Ohqjwk + Vhsdo.Zlgwk + Shwdo.Ohqjwk + Shwdo.Zlgwk
fgw <- fwuhh(wdujhw, lulv)
wdeoh(suhglfw(fgw), lulv$Vshflhv)
fgw
sorw(fgw, wbsh="vlpsoh")


#Sudfwlfdo 04E: Sduw E [Wudlqlqj dqg Whvwlqj ri wkh Gdwdvhw]

oleudub(sduwb)
lqghahv = vdpsoh(150,90)
lulv_wudlq = lulv [lqghahv,]
lulv_whvw = lulv[-lqghahv,]
wdujhw = Vshflhv ~ Vhsdo.Ohqjwk + Vhsdo.Zlgwk + Shwdo.Ohqjwk + Shwdo.Zlgwk
fgw <- fwuhh(wdujhw, lulv_wudlq)
wdeoh(suhglfw(fgw, qhzgdwd = lulv_whvw), lulv_whvw$Vshflhv)
vxppdub(lulv_whvw)
sorw(fgw, wbsh="vlpsoh", pdlq="Ghflvlrq Wuhh")

`; // P04B part A and B

text13 = `



# Sudfwlfdo 04F: Lpsohphqwlqj Fodvvlilfdwlrq lq U [Qdïyh Edbhv]

lqvwdoo.sdfndjhv("h1071") #lqvwdoo lq rwkhu fhoo

oleudub("h1071")
gdwd = uhdg.fvy("/frqwhqw/zhdwkhu-qrplqdo-zhnd.fvy",khdghu = WUXH)
khdg(gdwd,5)

QEPrgho = qdlyhEdbhv(sodb~.,gdwd=gdwd)
QEPrgho

suhg = suhglfw(QEPrgho,gdwd)
wdeoh(suhg,gdwd$sodb,gqq = f("Suhglfwlrq","Dfwxdo"))

`; // P04C

text14 = `

# Sudfwlfdo 05D: Lpsohphqwlqj Fodvvlilhu lq Sbwkrq [VYP]

lpsruw qxpsb dv qs
lpsruw pdwsorwole.sbsorw dv sow
iurp vnohduq lpsruw gdwdvhwv
iurp vnohduq.vyp lpsruw VYF
iurp vnohduq.prgho_vhohfwlrq lpsruw wudlq_whvw_vsolw
iurp vnohduq.suhsurfhvvlqj lpsruw VwdqgdugVfdohu
lpsruw sdqgdv dv sg

gdwd = gdwdvhwv.pdnh_fodvvlilfdwlrq(
q_vdpsohv=100,
q_ihdwxuhv=2,
q_fodvvhv=3,
q_foxvwhuv_shu_fodvv=1,
udqgrp_vwdwh=42,
q_lqirupdwlyh=2,
q_uhgxqgdqw=0,
q_uhshdwhg=0
)
gi = sg.GdwdIudph(gdwd[0], froxpqv=['Ihdwxuh 1', 'Ihdwxuh 2'])
gi['Wdujhw'] = gdwd[1]
gi.khdg()


a = gi.gurs('Wdujhw', dalv=1)
b = gi['Wdujhw']

A_wudlq, A_whvw, b_wudlq, b_whvw = wudlq_whvw_vsolw(a.ydoxhv, b.ydoxhv, whvw_vlch=0.3, udqgrp_vwdwh=42)

foi = VYF(nhuqho='olqhdu', ghflvlrq_ixqfwlrq_vkdsh='ryu')
foi.ilw(A_wudlq, b_wudlq)

bsuhg = foi.suhglfw(A_whvw)
dff = foi.vfruh(A_whvw, b_whvw)
sulqw(i"Dffxudfb: {dff}")

sow.iljxuh(iljvlch=(8, 6))
aa, bb = qs.phvkjulg(qs.olqvsdfh(A_wudlq[:, 0].plq(), A_wudlq[:, 0].pda(), 100),
qs.olqvsdfh(A_wudlq[:, 1].plq(), A_wudlq[:, 1].pda(), 100))

C = foi.suhglfw(qs.f_[aa.udyho(), bb.udyho()]).uhvkdsh(aa.vkdsh)

sow.frqwrxui(aa, bb, C, doskd=0.3, fpds=sow.fp.frrozdup)
sow.vfdwwhu(A_wudlq[:, 0], A_wudlq[:, 1], f=b_wudlq, hgjhfroruv='n', v=100, fpds=sow.fp.frrozdup)
sow.vfdwwhu(foi.vxssruw_yhfwruv_[:, 0], foi.vxssruw_yhfwruv_[:, 1], idfhfroruv='qrqh', hgjhfroruv='n', v=100)

z = foi.frhi_[0]
e = foi.lqwhufhsw_[0]
aa_ydov = qs.olqvsdfh(A_wudlq[:, 0].plq(), A_wudlq[:, 0].pda(), 30)
bb_ydov = -(z[0] * aa_ydov + e) / z[1]
pdujlq = 1 / qs.olqdoj.qrup(z)

sow.sorw(aa_ydov, bb_ydov, 'n-')
sow.sorw(aa_ydov, bb_ydov + pdujlq * qs.olqdoj.qrup(z) / z[1], 'n--')
sow.sorw(aa_ydov, bb_ydov - pdujlq * qs.olqdoj.qrup(z) / z[1], 'n--')

sow.wlwoh('VYP Fodvvlilhu zlwk 3 Fodvvhv dqg Kbshusodqhv')
sow.aodeho('Ihdwxuh 1')
sow.bodeho('Ihdwxuh 2')
sow.vkrz()

`; //P05A

text15 = `

#Sudfwlfdo 05E: Lpsohphqwlqj Fodvvlilhu lq U Vwxglr [VYP]

vxssuhvvPhvvdjhv(lqvwdoo.sdfndjhv("h1071"))
vxssuhvvPhvvdjhv(oleudub("h1071"))
vxssuhvvPhvvdjhv(lqvwdoo.sdfndjhv("fduhw"))
vxssuhvvPhvvdjhv(oleudub("fduhw"))
vxssuhvvPhvvdjhv(lqvwdoo.sdfndjhv("jjsorw2"))
vxssuhvvPhvvdjhv(oleudub("jjsorw2"))


oleudub(h1071)
oleudub(fduhw)
oleudub(jjsorw2)


vhw.vhhg(42)
q <- 100
gdwd <- gdwd.iudph(
a1 = uqrup(q),
a2 = uqrup(q),
fodvv = idfwru(vdpsoh(0:2, q, uhsodfh = WUXH))
)

wudlqLqgha <- fuhdwhGdwdSduwlwlrq(gdwd$fodvv, s = 0.7, olvw = IDOVH)
wudlq_gdwd <- gdwd[wudlqLqgha, ]
whvw_gdwd <- gdwd[-wudlqLqgha, ]
khdg(gdwd,5)

vyp_prgho <- vyp(fodvv ~ a1 + a2, gdwd = wudlq_gdwd, nhuqho = "olqhdu")

suhglfwlrqv <- suhglfw(vyp_prgho, whvw_gdwd)
dffxudfb <- phdq(suhglfwlrqv == whvw_gdwd$fodvv)
fdw(vsulqwi("Prgho dffxudfb rq whvw vhw: %.2i%%\\q", dffxudfb * 100))

# Jhw wkh prgho'v frhiilflhqwv dqg vxssruw yhfwruv
z <- w(vyp_prgho$frhiv) %*% vyp_prgho$VY
e <- vyp_prgho$ukr
fdw(z,e)

jjsorw(gdwd, dhv(a = a1, b = a2, froru = fodvv)) +
  jhrp_srlqw(vlch = 3, vkdsh = 16) + # Sorw gdwd srlqwv
  jhrp_srlqw(gdwd = vyp_prgho$VY, dhv(a = a1, b = a2), vkdsh = 17, vlch = 4, froru = "eodfn") + # Vxssruw Yhfwruv
  # Ghflvlrq erxqgdub olqh (mxvw iru vlpsolflwb)
  jhrp_deolqh(vorsh = -z[1] / z[2], lqwhufhsw = -e / z[2], froru = "eodfn", olqhzlgwk = 1) +
  vfdoh_froru_pdqxdo(ydoxhv = f("uhg", "eoxh", "juhhq")) + # Hqvxuh 3 glvwlqfw froruv iru 3 fodvvhv
  wkhph_plqlpdo() +
  odev(wlwoh = "VYP Fodvvlilhu zlwk Ghflvlrq Erxqgdub dqg Vxssruw Yhfwruv", froru = "Fodvv")

`; //05B

text16 = `

#Sudfwlfdo 06D: Lpsohphqwdwlrq ri N-Phdqv lq Sbwkrq

a=[4,5,10,4,3,11,14,6,10,12]
b=[21,19,24,17,16,25,24,22,21,21]

sulqw('Xqodehoohg gdwd')
sulqw('a = ',a)
sulqw('b =' ,b)

lpsruw pdwsorwole.sbsorw dv sow
sow.vfdwwhu(a,b)
sow.vkrz()

iurp vnohduq.foxvwhu lpsruw NPhdqv
gdwd = olvw(cls(a,b))

sulqw()
sulqw('pFruglqdwhv')
sulqw(gdwd)
iurp vnohduq.foxvwhu lpsruw NPhdqv
nphdqv = NPhdqv (q_foxvwhuv=2)
nphdqv.ilw(gdwd)
sow.vfdwwhu(a, b, f=nphdqv.odehov_)
sow.wlwoh("N-Phdqv zlwk 2 Foxvwhuv")
sow.vkrz()

`;

text17 = `

# Sudfwlfdo 06E: Lpsohphqwdwlrq ri N-Phdqv lq U

vxssuhvvPhvvdjhv(oleudub(jjsorw2))

a <- f(4, 5, 10, 4, 3, 11, 14, 6, 10, 12)
b <- f(21, 19, 24, 17, 16, 25, 24, 22, 21, 21)

fdw("Xqodehoohg gdwd")
fdw("a = ", a, "\\q")
fdw("b = ", b, "\\q")

gdwd <- gdwd.iudph(a, b)
nphdqv_prgho <- nphdqv(gdwd, fhqwhuv = 3)
gdwd$foxvwhu <- idfwru(nphdqv_prgho$foxvwhu)

fdw("Gdwd Srlqwv zlwk Foxvwhu Dvvljqphqwv\\q")
iru (l lq 1:qurz(gdwd)) {
fdw("Srlqw: (", gdwd[l, 1], ",", gdwd[l, 2], ") Foxvwhu: ", nphdqv_prgho$foxvwhu[l], "\\q")
}

fhqwhuv <- dv.gdwd.iudph(nphdqv_prgho$fhqwhuv)

jjsorw(gdwd, dhv(a = a, b = b, froru = foxvwhu)) +
jhrp_srlqw(vlch = 4) +
jhrp_srlqw(gdwd = fhqwhuv, dhv(a = a, b = b), froru = "uhg", vlch = 6, vkdsh = 3, vwurnh = 2) +
wkhph_plqlpdo()

`;

