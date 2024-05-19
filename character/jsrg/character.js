const characters = {
	//起
	jsrg_liuhong: ["male", "qun", 4, ["jsrgchaozheng", "jsrgshenchong", "jsrgjulian"], ["zhu"]],
	jsrg_hejin: ["male", "qun", 4, ["jsrgzhaobing", "jsrgzhuhuan", "jsrgyanhuo"]],
	jsrg_sunjian: ["male", "qun", 4, ["jsrgpingtao", "jsrgjuelie"]],
	jsrg_huangfusong: ["male", "qun", 4, ["jsrgguanhuo", "jsrgjuxia"]],
	jsrg_xushao: ["male", "qun", 3, ["sbyingmen", "sbpingjian"]],
	jsrg_dongbai: ["female", "qun", 3, ["jsrgshichong", "jsrglianzhu"]],
	jsrg_qiaoxuan: ["male", "qun", 3, ["jsrgjuezhi", "jsrgjizhao"]],
	jsrg_yangbiao: ["male", "qun", "3/4", ["jsrgzhaohan", "jsrgrangjie", "jsrgyizheng"]],
	jsrg_kongrong: ["male", "qun", 3, ["jsrglirang", "jsrgzhengyi"]],
	jsrg_zhujun: ["male", "qun", 4, ["jsrgfendi", "jsrgjuxiang"]],
	jsrg_liubei: ["male", "qun", 4, ["jsrgjishan", "jsrgzhenqiao"]],
	jsrg_wangyun: ["male", "qun", 3, ["jsrgshelun", "jsrgfayi"], ["clan:太原王氏"]],
	jsrg_liuyan: ["male", "qun", 3, ["xinfu_limu", "jsrgtushe", "jsrgtongjue"], ["zhu"]],
	jsrg_caocao: ["male", "qun", 4, ["jsrgzhenglve", "jsrghuilie"]],
	jsrg_nanhualaoxian: ["male", "qun", 3, ["jsrgshoushu", "jsrgxundao", "jsrglinghua"]],
	//承
	jsrg_sunce: ["male", "wu", 4, ["jsrgduxing", "jsrgzhiheng", "jsrgzhasi", "jsrgbashi"], ["zhu"]],
	jsrg_xuyou: ["male", "wei", 3, ["jsrglipan", "jsrgqingxi", "jsrgjinmie"], ["doublegroup:wei:qun"]],
	jsrg_lvbu: ["male", "qun", 5, ["jsrgwuchang", "jsrgqingjiao", "jsrgchengxu"], ["doublegroup:shu:qun"]],
	jsrg_zhanghe: ["male", "wei", 4, ["jsrgqiongtu", "jsrgxianzhu"], ["doublegroup:wei:qun"]],
	jsrg_zoushi: ["female", "qun", 3, ["jsrgguyin", "jsrgzhangdeng"]],
	jsrg_guanyu: ["male", "shu", 5, ["jsrgguanjue", "jsrgnianen"], ["border:wei"]],
	jsrg_chendeng: ["male", "qun", 3, ["jsrglunshi", "jsrgguitu"]],
	jsrg_zhenji: ["female", "qun", 3, ["jsrgjixiang", "jsrgchengxian"]],
	jsrg_zhangliao: ["male", "qun", 4, ["jsrgzhengbing", "jsrgtuwei"], ["doublegroup:wei:qun"]],
	jsrg_xugong: ["male", "wu", 3, ["jsrgbiaozhao", "jsrgyechou"]],
	jsrg_chunyuqiong: ["male", "qun", 4, ["jsrgcangchu", "jsrgshishou"]],
	//转
	jsrg_guojia: ["male", "wei", 3, ["jsrgqingzi", "jsrgdingce", "jsrgzhenfeng"]],
	jsrg_zhangfei: ["male", "shu", 5, ["jsrgbaohe", "jsrgxushi"]],
	jsrg_machao: ["male", "qun", 4, ["jsrgzhuiming", "mashu"]],
	jsrg_lougui: ["male", "wei", 3, ["jsrgshacheng", "jsrgninghan"]],
	jsrg_zhangren: ["male", "qun", 4, ["jsrgfuni", "jsrgchuanxin"]],
	jsrg_huangzhong: ["male", "shu", 4, ["jsrgcuifeng", "jsrgdengnan"]],
	jsrg_xiahourong: ["male", "wei", 4, ["jsrgfenjian"]],
	jsrg_sunshangxiang: ["female", "wu", 3, ["jsrgguiji", "jsrgjiaohao"]],
	jsrg_pangtong: ["male", "qun", 3, ["jsrgmanjuan", "jsrgyangming"]],
	jsrg_hansui: ["male", "qun", 4, ["jsrgniluan", "jsrghuchou", "jsrgjiemeng"], ["zhu"]],
	jsrg_zhangchu: ["female", "qun", 3, ["jsrghuozhong", "jsrgrihui"]],
	jsrg_xiahouen: ["male", "wei", 4, ["jsrghujian", "jsrgshili"], ["die_audio:tw_xiahouen"]],
	jsrg_fanjiangzhangda: ["male", "wu", 5, ["jsrgfushan"]],
	//合
	jsrg_zhugeliang: ["male", "shu", 3, ["jsrgwentian", "jsrgchushi", "jsrgyinlve"]],
	jsrg_jiangwei: ["male", "shu", 4, ["jsrgjinfa", "jsrgfumou", "jsrgxuanfeng"], ["border:wei"]],
	jsrg_luxun: ["male", "wu", 3, ["jsrgyoujin", "jsrgdailao", "jsrgzhubei"]],
	jsrg_zhaoyun: ["male", "shu", 4, ["jsrglonglin", "jsrgzhendan"]],
	jsrg_simayi: ["male", "wei", 4, ["jsrgyingshi", "jsrgtuigu"]],
	jsrg_guoxun: ["male", "wei", 4, ["jsrgeqian", "jsrgfusha"]],
	jsrg_sunlubansunluyu: ["female", "wu", 3, ["jsrgdaimou", "jsrgfangjie"]],
	jsrg_caofang: ["male", "wei", "3/4", ["jsrgzhaotu", "jsrgjingju", "jsrgweizhui"], ["zhu"]],
	jsrg_sunjun: ["male", "wu", 4, ["jsrgyaoyan", "jsrgbazheng"]],
	jsrg_liuyong: ["male", "shu", 3, ["jsrgdanxin", "jsrgfengxiang"]],
	jsrg_weiwenzhugezhi: ["male", "wu", 4, ["jsrgfuhai"]],
	jsrg_zhangxuan: ["female", "wu", 4, ["jsrgtongli", "jsrgshezang"]],
	jsrg_gaoxiang: ["male", "shu", 4, ["jsrgchiying"]],
	jsrg_guozhao: ["female", "wei", 3, ["jsrgpianchong", "jsrgzunwei"]],
	//衰
	jsrg_yuanshao: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgzhimeng", "jsrgtianyu", "jsrgzhuni", "jsrghezhi"],
		isZhugong: true,
	},
	jsrg_caojiewangfu: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrgzonghai", "jsrgjueyin"],
	},
	jsrg_songhuanghou: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["jsrgzhongzen", "jsrgxuchong"],
	},
	jsrg_zhangjiao: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrgxiangru", "jsrgwudao"],
	},
};

export default characters;
