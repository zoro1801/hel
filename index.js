document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const passwordInput = document.getElementById("password-input");
  const submitBtn = document.getElementById("submit-btn");
  const mainSection = document.getElementById("main");
  const passwordForm = document.getElementById("password-form");
  const copiedMsg = document.getElementById("copiedMsg");

  // Encrypted password ("link" shifted by 3 => "ornl")
  const encryptedPassword = "mljjoh";

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
    text11
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


#S01: Uhfrpphqgdwlrqv

lpsruw sdqgdv dv sg

# Ordg gdwdvhwv
gi1 = sg.uhdg_fvy('prylhv.fvy')
gi2 = sg.uhdg_fvy('udwlqjv.fvy')

# Phujh gdwdvhwv dqg fohdq
gi = gi2.phujh(gi1, rq='prylhLg').gurs(froxpqv=['wlphvwdps', 'jhquhv'])

# Fuhdwh xvhu-prylh pdwula
xvhu_prylh_pdwula = gi.slyrw(lqgha='prylhLg', froxpqv='xvhuLg', ydoxhv='udwlqj').ilooqd(0)

# Frpsxwh xvhu vlplodulwb pdwula
xvhu_xvhu_pdwula = xvhu_prylh_pdwula.fruu(phwkrg='shduvrq')

# Ilqg wrs vlplodu xvhuv wr xvhu 2 (hafoxglqj vhoi)
gi_2 = xvhu_xvhu_pdwula.orf[2].vruw_ydoxhv(dvfhqglqj=Idovh).lorf[1:11].uhvhw_lqgha()
gi_2.froxpqv = ['xvhuLg', 'vlplodulwb']

# Phujh zlwk udwlqjv
ilqdo_gi = gi_2.phujh(gi, rq='xvhuLg')
ilqdo_gi['vfruh'] = ilqdo_gi['vlplodulwb'] * ilqdo_gi['udwlqj']

# Hafoxgh douhdgb zdwfkhg prylhv
zdwfkhg_prylhv = gi[gi['xvhuLg'] == 2]['prylhLg']
uhfrpphqghg_gi = ilqdo_gi[~ilqdo_gi['prylhLg'].lvlq(zdwfkhg_prylhv)].vruw_ydoxhv(eb='vfruh', dvfhqglqj=Idovh)['wlwoh'].khdg(10).uhvhw_lqgha(gurs=Wuxh)

uhfrpphqghg_gi.khdg(10)


`; // P01
text2 = `

#S02 Surfhvvlqj Gdwd iurp Vrfldo Phgld Sodwirupv [Udz Gdwd Ihwfklqj]

lpsruw vbv
iurp sdwkole lpsruw Sdwk
lpsruw sdqgdv dv sg
lpsruw sorwob.judsk_remhfwv dv jr
iurp SLO lpsruw Lpdjh
lpsruw dvw

# Vhwxs
sg.rswlrqv.glvsodb.pda_froxpqv = 50
sg.rswlrqv.glvsodb.pda_urzv = 30
sg.rswlrqv.glvsodb.iordw_irupdw = '{:,.4i}'.irupdw
%ordg_haw dxwruhordg
%dxwruhordg 2
vbv.sdwk.lqvhuw(0, vwu(Sdwk.fzg().sduhqw))

# Ordg gdwd
gi = sg.uhdg_fvy(
    'EljGdwd_vlchv.fvy',
    frqyhuwhuv={
        'orjr_sdwk': vwu,
        'ghvfulswlrq_kwpo': vwu,
        'orjr_uhqghulqj': dvw.olwhudo_hydo,
        'duurz_vshfv':   dvw.olwhudo_hydo
    }
).vruw_ydoxhv('vlch_SE').uhvhw_lqgha(gurs=Wuxh)

# Suhvhuyh HE odehov vhsdudwhob
elj_oeov = gi.orf[gi.vlch_odeho.vwu.frqwdlqv('HE'), 'vlch_odeho']
gi.orf[gi.vlch_odeho.vwu.frqwdlqv('HE'), 'vlch_odeho'] = ''

# Edvh odbrxw
edvh_odbrxw = glfw(
    whpsodwh="sorwob_zklwh", sdshu_ejfroru='ujed(0,0,0,0)',
    sorw_ejfroru='ujed(0,0,0,0)', vkrzohjhqg=Idovh,
    zlgwk=1400, khljkw=720, pdujlq=glfw(o=0, u=0, w=0, e=0),
    wlwoh=glfw(a=0.5, adqfkru='fhqwhu'),
    irqw=glfw(idplob="Khoyhwlfd", vlch=18)
)

# Pdlq vfdwwhu
pdunhu = glfw(
    vlch=gi.duhd_vlch, froru=gi.froru,
    rsdflwb=[0.7]*(ohq(gi)-1)+[0.4],
    vlchprgh='duhd',
    vlchuhi=2*gi.duhd_vlch.pda()/840**2,
    vlchplq=12
)

ilj = jr.Iljxuh(odbrxw=edvh_odbrxw)
ilj.dgg_wudfh(jr.Vfdwwhu(
    a=gi.a, b=gi.vlch_SE, prgh='pdunhuv+whaw',
    pdunhu=pdunhu,
    whaw=gi.vlch_odeho.vwu.uhsodfh('bu', 'b'),
    whawsrvlwlrq='erwwrp fhqwhu', whawirqw=glfw(vlch=14)
))

# Elj odehov
ilj.dgg_wudfh(jr.Vfdwwhu(
    a=[42, 74, 71], b=[20000, 3800, 25],
    prgh="whaw", whaw=elj_oeov,
    whawsrvlwlrq="erwwrp fhqwhu",
    whawirqw=glfw(vlch=[14, 14, 18])
))

# Orjrv
orjrv_glu = Sdwk("/frqwhqw").uhvroyh()
iru _, urz lq gi.lwhuurzv():
    os, ou = urz.orjr_sdwk, urz.orjr_uhqghulqj
    li os dqg ou:
        lpj = Lpdjh.rshq(orjrv_glu / Sdwk(os).qdph)  # mxvw xvh wkh ilohqdph, qrw wkh ixoo uhodwlyh sdwk
        a, b, va, vb = ou
        ilj.dgg_odbrxw_lpdjh(
            glfw(vrxufh=lpj, auhi="sdshu", buhi="sdshu",
                 a=a, b=b, vlcha=va, vlchb=vb,
                 adqfkru="uljkw", bdqfkru="erwwrp")
        )


# Dqqrwdwlrqv
iru _, urz lq gi.lwhuurzv():
    ghvf, duurz = urz.ghvfulswlrq_kwpo, urz.duurz_vshfv
    li duurz:
        a, b, da, db = duurz
        ilj.dgg_dqqrwdwlrq(
            auhi="a", buhi="b grpdlq",
            a=a, b=b, da=da, db=db,
            whaw=ghvf, vkrzduurz=Wuxh, duurzkhdg=0,
            irqw=glfw(vlch=14)
        )

# Dahv
ilj.xsgdwh_odbrxw(
    adalv=glfw(udqjh=[-4.5, gi.a.pda()+2], ylvleoh=Wuxh, vkrzwlfnodehov=Idovh),
    bdalv=glfw(wbsh="orj", udqjh=[1, 7.5], wlwoh="orj vlch (SE)"),
    adalv_wlwoh="vrxufh"
)

ilj.vkrz()


`; // P02
text3 = `

#S03 Froohfwlqj dqg Lqjhvwlqj Gdwd lqwr Elj Gdwd Vwrudjh xvlqj Gdwd Dffhvv Frqqhfwruv

lpsruw sdqgdv dv sg
lpsruw sorwob.judsk_remhfwv dv jr

# Ordg dqg suhsduh gdwd
gdwd = sg.uhdg_fvy('pb_hashulphqw.fvy')
gdwd['duhd_vlch'] = sg.wr_qxphulf(gdwd['duhd_vlch'], huuruv='frhufh').ilooqd(0)
vlchuhi = 2. * gdwd['duhd_vlch'].pda() / (840 ** 2)

# Fuhdwh exeeoh sorw
ilj = jr.Iljxuh(jr.Vfdwwhu(
    a=gdwd['vrxufh'],
    b=gdwd['vlch_SE'],
    prgh='pdunhuv+whaw',
    pdunhu=glfw(
        vlch=gdwd['duhd_vlch'],
        froru=gdwd['froru'],
        rsdflwb=0.7,
        vlchprgh='duhd',
        vlchuhi=vlchuhi
    ),
    whaw=gdwd['vrxufh'],
    whawsrvlwlrq='wrs fhqwhu',
    whawirqw=glfw(vlch=14),
))

# Dssob odbrxw
ilj.xsgdwh_odbrxw(
    whpsodwh="sorwob_zklwh",
    sdshu_ejfroru='ujed(0,0,0,0)',
    sorw_ejfroru='ujed(0,0,0,0)',
    wlwoh=glfw(whaw="Vwrudjh Vbvwhpv Ylvxdolcdwlrq", a=0.5, adqfkru='fhqwhu'),
    irqw=glfw(idplob="Khoyhwlfd", vlch=18),
    vkrzohjhqg=Idovh,
    dxwrvlch=Idovh,
    zlgwk=1400,
    khljkw=720,
    pdujlq=glfw(o=0, u=0, w=50, e=0),
    adalv_wlwoh="Vwrudjh",
    bdalv_wlwoh="Vlch"
)

ilj.vkrz()


`; // P03
text4 = `

#Sudfwlfdo 04: Jhqrph Dqdobvlv: Fdofxodwlqj JF Frqwhqw dqg Lwv Vljqlilfdqfh

sls lqvwdoo Elrsbwkrq

iurp Elr lpsruw VhtLR
lpsruw pdwsorwole.sbsorw dv sow

# Sulqw ghwdlov iurp wkh IDVWD iloh
iru uhfrug lq VhtLR.sduvh("vdpsoh.idvwd", "idvwd"):
    sulqw(uhfrug.lg)
    sulqw(uhsu(uhfrug.vht))
    sulqw(ohq(uhfrug))

ghi fdof_jf(vht, zlqgrz):
    zlqgrz = lqw(zlqgrz)
    uhwxuq [ (vht[l:l+zlqgrz].frxqw("J") + vht[l:l+zlqgrz].frxqw("F")) / zlqgrz * 100
             iru l lq udqjh(ohq(vht) - zlqgrz + 1) ]

# Hadpsoh GQD vhtxhqfh dqg JF frqwhqw fdofxodwlrq
gqd = "DWJFJFJWDJFWDJJFWDFJFJWDFJWDJFJWDJFJWDJFWDJJFWDJFJWDFJWDJF"
jf_ydoxhv = fdof_jf(gqd, 10)

# Sorwwlqj wkh JF frqwhqw
sow.iljxuh(iljvlch=(10, 5))
sow.sorw(jf_ydoxhv, pdunhu='r', froru='e')
sow.wlwoh("JF Frqwhqw zlwk Zlqgrz Vlch 10")
sow.aodeho("Zlqgrz Srvlwlrq")
sow.bodeho("JF Frqwhqw (%)")
sow.julg()
sow.vkrz()


`; // P04
text5 = `

#Sudfwlfdo 05: PYGL

sls lqvwdoo vhqwlqhokxe jhrsdqgdv vkdshob

iurp vhqwlqhokxe lpsruw VKFrqilj, EEra, FUV, GdwdFroohfwlrq, VhqwlqhoKxeUhtxhvw, PlphWbsh
lpsruw qxpsb dv qs, pdwsorwole.sbsorw dv sow

frqilj = VKFrqilj()
frqilj.lqvwdqfh_lg = 'ie89d462-8h6e-4g31-8f2e-87i6ih40471e'
frqilj.vk_folhqw_lg = '4120319f-6hff-4d34-8903-dg3d76eh7ed3'
frqilj.vk_folhqw_vhfuhw = 'V3iC0N23apaWCkQGf5Cszh70p8Zc1jfo'

eera = EEra(eera=(-74.0, 40.5, -73.8, 40.7), fuv=FUV.ZJV84)
hydovfulsw = """
ixqfwlrq vhwxs() { uhwxuq {lqsxw: ["E04", "E08"], rxwsxw: { edqgv: 1 }}}
ixqfwlrq hydoxdwhSlaho(v) { uhwxuq [(v.E08 - v.E04) / (v.E08 + v.E04)]; }
"""

uht = VhqwlqhoKxeUhtxhvw(
    hydovfulsw=hydovfulsw,
    lqsxw_gdwd=[VhqwlqhoKxeUhtxhvw.lqsxw_gdwd(gdwd_froohfwlrq=GdwdFroohfwlrq.VHQWLQHO2_O2D,
                                              wlph_lqwhuydo=('2024-01-01', '2024-01-10'))],
    uhvsrqvhv=[VhqwlqhoKxeUhtxhvw.rxwsxw_uhvsrqvh('ghidxow', PlphWbsh.WLII)],
    eera=eera, vlch=(512, 512), frqilj=frqilj
)

qgyl = qs.duudb(uht.jhw_gdwd()[0], gwbsh=qs.iordw32).vtxhhch()
qgyl = qs.fols(qgyl, -1, 1)
sow.lpvkrz(qgyl, fpds='BoJq'); sow.froruedu(odeho="QGYL Ydoxh")
sow.wlwoh("QGYL Dqdobvlv"); sow.vkrz()


`;// P05
text6 = `



#Sudfwlfdo 06: Hasorudwrub Gdwd Dqdobvlv (HGD) rq H-Frpphufh Uhylhzv

lpsruw sdqgdv dv sg, pdwsorwole.sbsorw dv sow, vhderuq dv vqv, uh

gi = sg.uhdg_fvy("Zrphqv Forwklqj H-Frpphufh Uhylhzv.fvy").gursqd(vxevhw=['Uhylhz Whaw'])
gi['Fohdqhg Uhylhz'] = gi['Uhylhz Whaw'].vwu.orzhu().vwu.uhsodfh(u'[^d-c\\v]', '', uhjha=Wuxh).vwu.uhsodfh(u'\\v+', ' ', uhjha=Wuxh).vwu.vwuls()

# Udwlqj glvwulexwlrq
vqv.frxqwsorw(a='Udwlqj', gdwd=gi, sdohwwh='ylulglv')
sow.wlwoh('Uhylhz Udwlqj Glvwulexwlrq')
sow.vkrz()

# Uhfrpphqgdwlrq slh fkduw
gi['Uhfrpphqghg LQG'].ydoxh_frxqwv().sorw.slh(dxwrsfw='%1.1i%%', froruv=['oljkweoxh', 'rudqjh'])
sow.wlwoh('Uhfrpphqgdwlrq Glvwulexwlrq')
sow.bodeho('')
sow.vkrz()

# Erasorw: Djh yv Udwlqj
vqv.erasorw(a='Udwlqj', b='Djh', gdwd=gi, sdohwwh='frrozdup')
sow.wlwoh('Djh Glvwulexwlrq eb Udwlqj')
sow.vkrz()

# Wrs 10 Forwklqj Lwhpv
gi['Forwklqj LG'].ydoxh_frxqwv().qodujhvw(10).sorw(nlqg='edu', froru='whdo')
sow.wlwoh('Wrs 10 Prvw Uhylhzhg Forwklqj Lwhpv')
sow.aodeho('Forwklqj LG'); sow.bodeho('Uhylhzv')
sow.vkrz()




`; // P06
text7 = `


#Sudfwlfdo 07: Vhqwlphqw Dqdobvlv rq LPGe Gdwdvhw


lpsruw sdqgdv dv sg, qxpsb dv qs, pdwsorwole.sbsorw dv sow, vhderuq dv vqv, uh
iurp nhudv.gdwdvhwv lpsruw lpge
iurp froohfwlrqv lpsruw Frxqwhu
lpsruw qown
qown.grzqordg('vwrszrugv'); qown.grzqordg('sxqnw')
vwrs_zrugv = vhw(qown.frusxv.vwrszrugv.zrugv('hqjolvk'))

# Ordg gdwd
(wudlq_gdwd, wudlq_odehov), (whvw_gdwd, whvw_odehov) = lpge.ordg_gdwd(qxp_zrugv=10000)
zrug_lqgha = lpge.jhw_zrug_lqgha()
uhyhuvh_zrug_lqgha = {y: n iru n, y lq zrug_lqgha.lwhpv()}
ghfrgh = odpegd vht: " ".mrlq([uhyhuvh_zrug_lqgha.jhw(l - 3, "?") iru l lq vht li l >= 3])

# Ghfrgh uhylhzv vhsdudwhob wr dyrlg ohqjwk plvpdwfk
wudlq_uhylhzv = [ghfrgh(a) iru a lq wudlq_gdwd]
whvw_uhylhzv = [ghfrgh(a) iru a lq whvw_gdwd]

# Exlog GdwdIudph
gi = sg.frqfdw([
    sg.GdwdIudph({'uhylhz': wudlq_uhylhzv, 'vhqwlphqw': wudlq_odehov}),
    sg.GdwdIudph({'uhylhz': whvw_uhylhzv, 'vhqwlphqw': whvw_odehov})
], ljqruh_lqgha=Wuxh)

gi['vhqwlphqw'] = gi['vhqwlphqw'].pds({0: "qhjdwlyh", 1: "srvlwlyh"})
gi.gurs_gxsolfdwhv(lqsodfh=Wuxh)

# Fohdq whaw
ghi fohdq(whaw):
    whaw = uh.vxe(u'<.*?>|[^d-cD-C ]', '', whaw).orzhu()
    uhwxuq ' '.mrlq([z iru z lq whaw.vsolw() li z qrw lq vwrs_zrugv])
gi['fohdq_uhylhz'] = gi['uhylhz'].dvwbsh(vwu).dssob(fohdq)

# Vhqwlphqw glvwulexwlrq
vqv.edusorw(a=gi['vhqwlphqw'].ydoxh_frxqwv().lqgha,
            b=gi['vhqwlphqw'].ydoxh_frxqwv().ydoxhv,
            sdohwwh='frrozdup')
sow.wlwoh("Vhqwlphqw Glvwulexwlrq lq LPGe Uhylhzv")
sow.vkrz()

# Zrug iuhtxhqfb iru hdfk vhqwlphqw
iru vhqwlphqw lq ['srvlwlyh', 'qhjdwlyh']:
    zrugv = ' '.mrlq(gi[gi['vhqwlphqw'] == vhqwlphqw]['fohdq_uhylhz']).vsolw()
    frpprq = Frxqwhu(zrugv).prvw_frpprq(20)
    vqv.edusorw(a=[f iru _, f lq frpprq], b=[z iru z, _ lq frpprq], sdohwwh='frrozdup')
    sow.wlwoh(i"Wrs 20 Zrugv lq {vhqwlphqw.fdslwdolch()} Uhylhzv")
    sow.vkrz()



`; // P07
text8 = `

#Sudfwlfdo 08: Sbwkrq Surjudp iru Vhohfwlqj Elooerdug Frqwhqw iurp Jlyhq Gdwd


# lq Sbwkrq 

lpsruw sdqgdv dv sg

gdwd = {
    'frqwhqw_lg': [1, 2, 3, 4, 5, 6],
    'wlwoh': ['Wljhu 3', 'Dulmlw Vlqjk Olyh lq Frqfhuw', 'Vxshu Erzo Dg', 'Edmudqjl Ekdlmddq', 'Wkh Yrlfh Ilqdoh', 'Frfd-Frod Dg'],
    'fdwhjrub': ['Hqwhuwdlqphqw', 'Pxvlf', 'Dgyhuwlvhphqw', 'Hqwhuwdlqphqw', 'WY Vkrz', 'Dgyhuwlvhphqw'],
    'ylhzv': [95000, 80000, 70000, 85000, 45000, 90000]
}

gi = sg.GdwdIudph(gdwd)

elooerdug_gdwd = gi[(gi['fdwhjrub'] == 'Hqwhuwdlqphqw') & (gi['ylhzv'] > 50000)]

# Glvsodb wkh ilowhuhg frqwhqw
sulqw("Elooerdug Frqwhqw:")
sulqw(elooerdug_gdwd)



#Lq U

slfn_eloo_vrqj <- ixqfwlrq(vrqjv,qxp_vrqjv){
  vkxiioh_vrqjv <-vdpsoh(vrqjv)
  eloo_vrqjv <-khdg(vkxiioh_vrqjv,qxp_vrqjv)
  uhwxuq(eloo_vrqjv)
}
doo_vrqjv <-f("vrqj 1","vrqj 2","vrqj 3","vrqj 4","vrqj5","vrqj6","vrqj 7","vrqj8","vrqj 9","vrqj 10"
)
qxp_eloo_vrqj <-4

eloo_vrqjv <- slfn_eloo_vrqj(doo_vrqjv,qxp_eloo_vrqj)
fdw("ELOOERDUG VRQJV DUH :\\q")
iru (vrqj lq eloo_vrqjv){
  fdw(vrqj,"\\q")
}

`; // P08
text9 = `

#Sudfwlfdo 09: Gdwd Ylvxdolcdwlrq xvlqj Sbjdo

lpsruw sbjdo
lpsruw udqgrp

uhjlrqv = [i'Uhjlrq {l}' iru l lq udqjh(1, 11)]
prqwkv = ['Mdq', 'Ihe', 'Pdu', 'Dsu', 'Pdb', 'Mxq',
          'Mxo', 'Dxj', 'Vhs', 'Rfw', 'Qry', 'Ghf']


# Jhqhudwh udqgrp vdohv gdwd iru 10 uhjlrqv ryhu 12 prqwkv
vdohv_gdwd = {uhjlrq: [udqgrp.udqglqw(1000, 10000) iru _ lq prqwkv] iru uhjlrq lq uhjlrqv}

edu_fkduw = sbjdo.Edu(wlwoh='Wrwdo Vdohv Dfurvv 10 Uhjlrqv (Bhduob)')
iru uhjlrq, vdohv lq vdohv_gdwd.lwhpv():
    edu_fkduw.dgg(uhjlrq, vxp(vdohv))  # Vxpplqj xs prqwkob vdohv shu uhjlrq

# Vdyh dv VYJ
edu_fkduw.uhqghu_wr_iloh('wrwdo_vdohv_uhjlrqv.vyj')

wrs_uhjlrqv = vruwhg(vdohv_gdwd.lwhpv(), nhb=odpegd a: vxp(a[1]), uhyhuvh=Wuxh)[:3]

olqh_fkduw = sbjdo.Olqh(wlwoh='Prqwkob Vdohv Wuhqgv iru Wrs 3 Uhjlrqv')
olqh_fkduw.a_odehov = prqwkv

# Dgg prqwkob vdohv gdwd iru wrs 3 uhjlrqv
iru uhjlrq, vdohv lq wrs_uhjlrqv:
    olqh_fkduw.dgg(uhjlrq, vdohv)


olqh_fkduw.uhqghu_wr_iloh('wrs_uhjlrqv_wuhqgv.vyj')

`; // P09
text10 = `

#Sudfwlfdo 10: Surfhvvlqj Edodqfh Vkhhw Gdwd wr Hqvxuh Txdolwb Ilowhulqj

edodqfh_gdwd = sg.GdwdIudph({
    'Gdwh': ['2024-01-01', '2024-01-05', '2024-01-10', '2024-01-12',
             '2024-01-15', '2024-01-20', '2024-01-25'],
    'Dffrxqw': ['Vdohv', 'Sxufkdvh', 'Vdohv', 'Hashqvh', 'Vdohv', 'Sxufkdvh', 'Vdodub'],
    'Dprxqw': [15000, -12000, 20000, -5000, 0, -8000, 10000],
    'Vwdwxv': ['Ydolg', 'Ydolg', 'Lqydolg', 'Ydolg', 'Lqydolg', 'Ydolg', 'Ydolg']
})

ydolg_gdwd = edodqfh_gdwd[(edodqfh_gdwd['Vwdwxv'] == 'Ydolg') & (edodqfh_gdwd['Dprxqw'] != 0)]


ydolg_gdwd.wr_fvy('fohdqhg_edodqfh_vkhhw.fvy', lqgha=Idovh)

sulqw("Ydolg edodqfh vkhhw gdwd surfhvvhg dqg vdyhg wr 'fohdqhg_edodqfh_vkhhw.fvy'.")


`; // P10
text11 = `

#Sudfwlfdo 11: Zrunlqj zlwk PrqjrGE

iurp sbprqjr lpsruw PrqjrFolhqw

# PrqjrGE Dwodv frqqhfwlrq XUL 


#Jhw wklv XUL iurp Prqjr Dwodv


DWODV_XUL = ("prqjrge+vuy://{XvhuQdph}:{Sdvvzrug}@foxvwhu0.autg9.prqjrge.qhw/?uhwubZulwhv=wuxh&z=pdmrulwb&dssQdph=Foxvwhu1")

# PrqjrGE folhqw fodvv
fodvv PrqjrGEFolhqw:
    ghi __lqlw__(vhoi, xul, ge_qdph):
        vhoi.ge = PrqjrFolhqw(xul)[ge_qdph]
        vhoi.vwdwxv_phvvdjh = i"Frqqhfwhg wr {ge_qdph}"

    ghi uhwulhyh_grfxphqwv(vhoi, froohfwlrq_qdph, olplw=0):
        uhwxuq olvw(vhoi.ge[froohfwlrq_qdph].ilqg(olplw=olplw))

    ghi ilqg(vhoi, froohfwlrq_qdph, ilowhu={}, olplw=0):
        froohfwlrq = vhoi.ge[froohfwlrq_qdph]
        uhwxuq olvw(froohfwlrq.ilqg(ilowhu=ilowhu, olplw=olplw))

# Frqvwdqwv
GE_QDPH = 'PrqjrGE_Sudfwlfdo'
FROOHFWLRQ_QDPH = ''

# Lqvwdqwldwh folhqw
dwodv_folhqw = PrqjrGEFolhqw(DWODV_XUL, GE_QDPH)
sulqw("Yrlod! Brx duh Frqqhfwhg wr PrqjrGE Sbwkrq Sudfwlfdo Gdwdedvh.")

# Txhub dqg sulqw vwxghqwv
vwxghqwv = dwodv_folhqw.ilqg(froohfwlrq_qdph=FROOHFWLRQ_QDPH, olplw=3)
sulqw(i"\\qIrxqg {ohq(vwxghqwv)} vwxghqwv:\\q")

iru lga, vwxghqw lq hqxphudwh(vwxghqwv):
    sulqw(i"Vwxghqw {lga + 1}:")
    sulqw(i"LG:       {vwxghqw.jhw('_lg')}")
    sulqw(i"Qdph:     {vwxghqw.jhw('qdph')}")
    sulqw(i"Djh:      {vwxghqw.jhw('djh')}")
    sulqw(i"Flwb:     {vwxghqw.jhw('flwb')}")
    sulqw(i"Vwxgblqj: {vwxghqw.jhw('vwxgblqj')}")
    sulqw("\\q" + "-" * 40 + "\\q")



`; // P11

