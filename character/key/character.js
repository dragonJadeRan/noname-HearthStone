const characters = {
    sp_key_yuri: {
        sex: "female",
        group: "qun",
        hp: 4,
        skills: ["mubing", "ziqu", "diaoling"],
        groupBorder: "key",
    },
    key_lucia: {
        sex: "female",
        group: "key",
        hp: 2,
        maxHp: 3,
        skills: ["lucia_duqu", "lucia_zhenren"]
    },
    key_kyousuke: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: ["nk_shekong", "key_huanjie"]
    },
    key_yuri: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["yuri_xingdong", "key_huanjie", "yuri_wangxi"],
        isZhugong: true,
    },
    key_haruko: {
        sex: "female",
        group: "key",
        hp: 4,
        skills: ["haruko_haofang", "haruko_zhuishi"]
    },
    key_umi: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["umi_chaofan", "umi_lunhui", "umi_qihuan"]
    },
    key_umi2: {
        sex: "female",
        group: "key",
        hp: 3,
        isUnseen: true,
    },
    key_rei: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: ["xiandeng", "shulv", "xisheng"]
    },
    key_komari: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["komari_tiankou", "komari_xueshang"]
    },
    key_yukine: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["yukine_wenzhou"]
    },
    key_yusa: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["yusa_yanyi", "yusa_misa", "dualside"],
        dualSideCharacter: "key_misa",
    },
    key_misa: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["misa_yehuo", "misa_yusa", "dualside"],
        isUnseen: true,
    },
    key_masato: {
        sex: "male",
        group: "key",
        hp: 4,
        maxHp: 8,
        skills: ["masato_baoquan"]
    },
    key_iwasawa: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["iwasawa_yinhang", "iwasawa_mysong"]
    },
    key_kengo: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: ["kengo_weishang", "kengo_guidui"]
    },
    key_yoshino: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: ["yoshino_jueyi"]
    },
    key_yui: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["yui_jiang", "yui_lieyin", "yui_takaramono"]
    },
    key_tsumugi: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["tsumugi_mugyu", "tsumugi_huilang"]
    },
    key_saya: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["saya_shouji", "saya_powei"]
    },
    key_harukakanata: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["haruka_shuangche"]
    },
    key_inari: {
        sex: "female",
        group: "key",
        hp: 2,
        skills: ["inari_baiwei", "inari_huhun"]
    },
    key_shiina: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["shiina_qingshen", "shiina_feiyan"]
    },
    key_sunohara: {
        sex: "double",
        group: "key",
        hp: 3,
        hujia: 2,
        skills: ["sunohara_chengshuang", "sunohara_tiaoyin", "sunohara_jianren"]
    },
    key_rin: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["rin_baoqiu"]
    },
    key_sasami: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["sasami_miaobian"]
    },
    key_akane: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["akane_jugu", "akane_quanqing", "akane_yifu"],
        isZhugong: true,
    },
    key_doruji: {
        sex: "female",
        group: "key",
        hp: 16,
        skills: ["doruji_feiqu"]
    },
    key_yuiko: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["yuiko_fenglun", "yuiko_dilve"]
    },
    key_riki: {
        sex: "double",
        group: "key",
        hp: 3,
        skills: ["riki_spwenji", "riki_nvzhuang", "riki_mengzhong"]
    },
    key_hisako: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["hisako_yinbao", "hisako_zhuanyun"]
    },
    key_hinata: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: ["hinata_qiulve", "hinata_ehou"]
    },
    key_noda: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: [
            "noda_fengcheng",
            "noda_xunxin"]
    },
    key_tomoya: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: ["tomoya_shangxian", "tomoya_wangjin"]
    },
    key_nagisa: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["nagisa_tiandu", "nagisa_fuxin"]
    },
    key_ayato: {
        sex: "male",
        group: "key",
        hp: 3,
        skills: ["ayato_jianshen", "ayato_zonghuan"]
    },
    key_ao: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["ao_xishi", "ao_kuihun", "ao_shixin"]
    },
    key_yuzuru: {
        sex: "male",
        group: "key",
        hp: 5,
        skills: ["yuzuru_wuxin", "yuzuru_deyi"]
    },
    sp_key_kanade: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["kanade_mapo", "kanade_benzhan"]
    },
    key_mio: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["mio_tuifu", "mio_tishen"]
    },
    key_midori: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["midori_nonghuan", "midori_tishen"]
    },
    key_kyoko: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["kyoko_juwu", "kyoko_zhengyi"]
    },
    key_shizuru: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["shizuru_nianli", "shizuru_benzhan"]
    },
    key_shiorimiyuki: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["shiorimiyuki_banyin", "shiorimiyuki_tingxian"]
    },
    key_miki: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["miki_shenqiang", "miki_huanmeng", "miki_zhiluo"]
    },
    key_shiori: {
        sex: "female",
        group: "key",
        hp: 2,
        maxHp: 3,
        skills: ["shiori_huijuan"]
    },
    key_kaori: {
        sex: "female",
        group: "key",
        hp: 3,
        maxHp: 4,
        skills: ["kaori_siyuan"]
    },
    key_akiko: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["akiko_dongcha"]
    },
    key_abyusa: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["abyusa_jueqing", "abyusa_dunying"]
    },
    key_godan: {
        sex: "male",
        group: "key",
        hp: 6,
        skills: ["godan_yuanyi", "godan_feiqu", "godan_xiaoyuan"]
    },
    key_yuu: {
        sex: "male",
        group: "key",
        hp: 3,
        skills: ["yuu_lveduo"]
    },
    key_ryoichi: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: ["ryoichi_baoyi", "ryoichi_tuipi"]
    },
    key_kotori: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["kotori_yumo", "kotori_huazhan"]
    },
    key_jojiro: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: ["jojiro_shensu", "jojiro_shunying"]
    },
    key_shiroha: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["shiroha_yuzhao", "shiroha_guying", "shiroha_jiezhao"]
    },
    key_shizuku: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["shizuku_sizhi", "shizuku_biyi", "shizuku_sanhua"]
    },
    key_hiroto: {
        sex: "male",
        group: "key",
        hp: 3,
        skills: ["hiroto_huyu", "hiroto_tuolao"]
    },
    key_sakuya: {
        sex: "male",
        group: "key",
        hp: 3,
        skills: ["youlong", "luanfeng", "sakuya_junbu"]
    },
    key_youta: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: []
    },
    key_rumi: {
        sex: "female",
        group: "key",
        hp: 3,
        maxHp: 4,
        skills: ["rumi_shuwu"]
    },
    key_chihaya: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["chihaya_liewu", "chihaya_youfeng"]
    },
    key_yukito: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: ["yukito_kongwu", "yukito_yaxiang"]
    },
    key_crow: {
        sex: "male",
        group: "key",
        hp: 4,
        skills: [],
        isUnseen: true,
    },
    key_asara: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["asara_shelu", "asara_yingwei"]
    },
    key_kotomi: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["kotomi_qinji", "kotomi_chuanxiang"]
    },
    key_mia: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["mia_shihui", "mia_qianmeng"]
    },
    key_kano: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["kano_liezhen", "kano_poyu"]
    },
    db_key_liyingxia: {
        sex: "female",
        group: "shu",
        hp: 3,
        skills: ["liyingxia_sanli", "liyingxia_zhenjun", "liyingxia_wumai"],
        doubleGroup: ['shu', 'key'],
    },
    key_erika: {
        sex: "female",
        group: "key",
        hp: 3,
        hujia: 2,
        skills: ["erika_shisong", "erika_yousheng"]
    },
    key_satomi: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["satomi_luodao", "satomi_daohai"]
    },
    key_iriya: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["iriya_yinji", "iriya_haozhi"]
    },
    key_fuuko: {
        sex: "female",
        group: "key",
        hp: 3,
        skills: ["fuuko_xingdiao", "fuuko_chuanyuan"]
    }
};

export default characters;