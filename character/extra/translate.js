const translates = {
	shen_luxun: "神陆逊",
	shen_luxun_prefix: "神",
	nzry_junlve: "军略",
	nzry_junlve_info: "锁定技，当你受到或造成伤害后，你获得X个“军略”标记(X为伤害点数)。",
	nzry_cuike: "摧克",
	nzry_cuike_info: "出牌阶段开始时，若“军略”标记的数量为奇数，你可以对一名角色造成1点伤害；若“军略”标记的数量为偶数，你可以横置一名角色并弃置其区域内的一张牌。然后，若“军略”标记的数量超过7个，你可以移去全部“军略”标记并对所有其他角色造成1点伤害。",
	nzry_dinghuo: "绽火",
	nzry_dinghuo_info: "限定技，出牌阶段，你可以移去全部“军略”标记，令至多等量的已横置角色弃置所有装备区内的牌。然后，你对其中一名角色造成1点火焰伤害。",
	shen_liubei: "神刘备",
	shen_liubei_prefix: "神",
	nzry_longnu: "龙怒",
	nzry_longnu_info: "转换技，锁定技，阴：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。阳：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。",
	nzry_jieying: "结营",
	nzry_jieying_info: "锁定技，游戏开始时或当你的武将牌重置时，你横置；所有已横置的角色手牌上限+2；结束阶段，你横置一名其他角色。",

	shen_ganning: "神甘宁",
	shen_ganning_prefix: "神",
	shen_zhangliao: "神张辽",
	shen_zhangliao_prefix: "神",

	drlt_poxi: "魄袭",
	drlt_poxi_info: "出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以弃置你与其手牌中的四张花色不同的牌。若如此做，根据此次弃置你的牌的数量执行以下效果：零张，扣减1点体力上限；一张，你结束出牌阶段且本回合手牌上限-1；三张，你回复1点体力；四张，你摸四张牌。",
	drlt_jieying: "劫营",
	drlt_jieying_info: "回合开始时，若场上没有拥有“营”标记的角色，你获得1个“营”标记；结束阶段，你可以将你的一个“营”标记交给一名角色；有“营”标记的角色摸牌阶段多摸一张牌，出牌阶段使用【杀】的次数上限+1，手牌上限+1。有“营”的其他角色回合结束时，其移去“营”标记，然后你获得其所有手牌。",
	drlt_jieying_mark: "劫营",
	drlt_duorui1: "失效技能",
	drlt_duorui1_bg: "锐",
	drlt_duorui: "夺锐",
	drlt_duorui_info: "当你于出牌阶段内对一名其他角色造成伤害后，你可以废除你装备区内的一个装备栏（若已全部废除则可以跳过此步骤），然后获得该角色的一个技能直到其的下回合结束或其死亡(觉醒技，限定技，主公技，隐匿技，使命技等特殊技能除外)。若如此做，该角色该技能失效且你不能再发动〖夺锐〗直到你失去以此法获得的技能。",
	drlt_zhiti: "止啼",
	drlt_zhiti_info: "锁定技。①你攻击范围内已受伤的其他角色手牌上限-1；②当你拼点或【决斗】胜利/或受到伤害后，若对方/伤害来源在你的攻击范围内，则你恢复一个装备栏。",

	shen_zhaoyun: "神赵云",
	shen_zhaoyun_prefix: "神",
	shen_guanyu: "神关羽",
	shen_guanyu_prefix: "神",
	shen_lvmeng: "神吕蒙",
	shen_lvmeng_prefix: "神",
	shen_simayi: "神司马懿",
	shen_simayi_prefix: "神",
	shen_caocao: "神曹操",
	shen_caocao_prefix: "神",
	shen_zhugeliang: "神诸葛亮",
	shen_zhugeliang_prefix: "神",
	shen_zhouyu: "神周瑜",
	shen_zhouyu_prefix: "神",
	shen_lvbu: "神吕布",
	shen_lvbu_prefix: "神",
	xinjuejing: "绝境",
	xinjuejing_info: "锁定技。①你的手牌上限+2。②当你进入或脱离濒死状态时，你摸一张牌。",
	relonghun: "龙魂",
	relonghun_info: "你可以将同花色的一至两张牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当普【无懈可击】。若你以此法使用了两张红色牌，则此牌回复值或伤害值+1。若你以此法使用了两张黑色牌，则你弃置当前回合角色一张牌。",
	xinlonghun: "龙魂",
	xinlonghun_info: "你可以将你的手牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当【无懈可击】。",
	longhun: "龙魂",
	longhun1: "龙魂♥︎",
	longhun2: "龙魂♦︎",
	longhun3: "龙魂♠︎",
	longhun4: "龙魂♣︎",
	juejing: "绝境",
	longhun_info: "你可以将同花色的X张牌按下列规则使用或打出：红桃当【桃】，方块当具火焰伤害的【杀】，梅花当【闪】，黑桃当【无懈可击】（X为你当前的体力值且至少为1）。",
	juejing_info: "锁定技。①摸牌阶段，你令额定摸牌数+X（X为你已损失的体力值）。②你的手牌上限+2。",
	wushen: "武神",
	wushen_info: "锁定技。①你的红桃手牌均视为【杀】。②你使用红桃【杀】无距离和次数限制且不可被响应。",
	wuhun: "武魂",
	wuhun_info: "锁定技，杀死你的角色立即进入濒死状态。",
	shelie: "涉猎",
	gongxin: "攻心",
	gongxin_discard: "弃置",
	gongxin_top: "牌堆顶",
	renjie: "忍戒",
	renjie2: "忍戒",
	renjie_info: "锁定技，当你受到1点伤害后，你获得一枚“忍”标记；锁定技，当你于弃牌阶段内弃置牌后，你获得等同于失去的牌数量的“忍”标记。",
	sbaiyin: "拜印",
	sbaiyin_info: "觉醒技，准备阶段开始时，若你的“忍”标记数不小于4，你减1点体力上限，然后获得〖极略〗。",
	jilue: "极略",
	jilue_info: "当一名角色的判定牌生效前，你可以弃1枚“忍”标记并发动〖鬼才〗；每当你受到伤害后，你可以弃1枚“忍”标记并发动〖放逐〗；当你使用锦囊牌时，你可以弃1枚“忍”标记并发动〖集智〗；出牌阶段限一次，你可以弃1枚“忍”标记并发动〖制衡〗；出牌阶段，你可以弃1枚“忍”标记并获得〖完杀〗直到回合结束。",
	jilue_guicai: "鬼才",
	jilue_fangzhu: "放逐",
	jilue_wansha: "完杀",
	jilue_zhiheng: "制衡",
	jilue_jizhi: "集智",
	jilue_guicai_info: "在任意角色的判定牌生效前，你可以打出一张牌代替之。",
	jilue_fangzhu_info: "当你受到伤害后，你可令一名其他角色摸X张牌（X为你已损失的体力值），然后该角色将武将牌翻面。",
	jilue_wansha_info: "锁定技。①你的回合内，不处于濒死状态的其他角色不能使用【桃】。②当有角色于你的回合内进入濒死状态时，你令其以外的所有其他角色的非锁定技失效直到此濒死状态结算结束。",
	jilue_zhiheng_info: "出牌阶段限一次，你可以弃置任意张牌并摸等量的牌，若你在发动〖制衡〗时弃置了所有手牌，则你多摸一张牌。",
	jilue_jizhi_info: "当你使用锦囊牌时，你可以摸一张牌。若此牌为基本牌，则你可以弃置之，然后令本回合手牌上限+1。",
	lianpo: "连破",
	lianpo_info: "一名角色的回合结束时，若你本回合内杀死过角色，则你可以进行一个额外的回合。",
	guixin: "归心",
	qinyin: "琴音",
	yeyan: "业炎",
	shelie_info: "摸牌阶段，你可以改为从牌堆顶亮出五张牌，然后选择获得不同花色的牌各一张。",
	gongxin_info: "出牌阶段限一次，你可以观看一名其他角色的手牌，并可以展示其中一张红桃牌，然后将其弃置或置于牌堆顶。",
	guixin_info: "当你受到1点伤害后，你可以获得每名其他角色区域里的一张牌，然后你翻面。",
	guixin_info_alter: "当你受到1点伤害后，你可以随机获得每名其他角色区域里的一张牌，然后你翻面。",
	qinyin_info: "弃牌阶段结束时，若你于此阶段内弃置过两张或更多的牌，则你可以选择一项：1. 令所有角色各回复1点体力；2. 令所有角色各失去1点体力。",
	// qinyin_info:'每当你于弃牌阶段内因你的弃置而失去第X张手牌时（X至少为2），你可以选择一项：1.令所有角色各回复1点体力；2.令所有角色各失去1点体力。每阶段限一次。',
	yeyan_info: "限定技，出牌阶段，你可以对一至三名角色造成至多共3点火焰伤害（你可以任意分配每名目标角色受到的伤害点数），若你将对一名角色分配2点或更多的火焰伤害，你须先弃置四张不同花色的手牌再失去3点体力。",
	qixing: "七星",
	qixing_bg: "星",
	qixing2: "七星",
	qixing3: "七星",
	qixing_info: "游戏开始时，你将牌堆顶的七张牌置于你的武将牌上，称之为“星”。然后/摸牌阶段结束后，你可用任意数量的手牌等量交换这些“星”。",
	dawu: "大雾",
	dawu2_bg: "雾",
	dawu2: "大雾",
	dawu3: "大雾",
	// dawu2_info:'已获得大雾标记',
	dawu_info: "结束阶段，你可以弃置X张“星”并指定等量的角色：直到你的下回合开始，当这些角色受到非雷电伤害时，防止此伤害。",
	kuangfeng: "狂风",
	kuangfeng2: "狂风",
	kuangfeng2_bg: "风",
	// kuangfeng2_info:'已获得狂风标记',
	kuangfeng3: "狂风",
	kuangfeng_info: "结束阶段，你可以弃置1张“星”并指定一名角色：直到你的下回合开始，该角色受到火焰伤害时，此伤害+1。",
	baonu: "狂暴",
	baonu_bg: "暴",
	baonu_info: "锁定技，游戏开始时，你获得两枚“暴怒”标记；锁定技，当你造成/受到1点伤害后，你获得1枚“暴怒”标记。",
	shenfen: "神愤",
	shenfen_info: "限定技，出牌阶段，你可以弃置6枚暴怒标记，对场上所有其他角色造成1点伤害，然后令其弃置四张牌。",
	wuqian: "无前",
	wuqian_info: "出牌阶段，你可以弃置两枚暴怒标记并获得技能〖无双〗直到回合结束。",
	wumou: "无谋",
	wumou_info: "锁定技，当你使用普通锦囊牌时，你选择一项：1.弃置1枚“暴怒”标记；2.失去1点体力。",
	ol_wuqian: "无前",
	ol_wuqian_info: "出牌阶段，你可以弃置2枚“暴怒”标记并选择一名本回合内未选择过的其他角色，你获得技能〖无双〗并令其防具无效直到回合结束。",
	ol_shenfen: "神愤",
	ol_shenfen_info: "出牌阶段限一次，你可以弃置6枚“暴怒”标记并选择所有其他角色，对这些角色各造成1点伤害。然后这些角色先各弃置其装备区里的牌，再各弃置四张手牌。最后你将你的武将牌翻面。",
	new_wuhun: "武魂",
	new_wuhun_info: "锁定技，当你受到伤害后，伤害来源获得X个“梦魇”标记（X为伤害点数）。锁定技，当你死亡时，你选择一名“梦魇”标记数量最多的其他角色。该角色进行判定：若判定结果不为【桃】或【桃园结义】，则该角色死亡。",
	new_guixin: "归心",
	new_guixin_info: "当你受到1点伤害后，你可以按照你选择的区域优先度随机获得每名其他角色区域里的一张牌，然后你翻面。",
	ol_zhangliao: "OL神张辽",
	ol_zhangliao_prefix: "OL神",
	olduorui: "夺锐",
	olduorui2: "夺锐",
	olduorui_info: "当你于出牌阶段内对一名角色造成伤害后，你可以选择该角色武将牌上的一个技能。若如此做，你结束出牌阶段，且你令此技能于其下个回合结束之前无效。",
	olzhiti: "止啼",
	olzhiti_info: "锁定技，你攻击范围内已受伤角色的手牌上限-1。若场上已受伤的角色数：不小于1，你的手牌上限+1；不小于3，你于摸牌阶段开始时令额定摸牌数+1；不小于5，回合结束时，你废除一名角色的一个随机装备栏。",
	shen_caopi: "神曹丕",
	shen_caopi_prefix: "神",
	chuyuan: "储元",
	chuyuan_info: "一名角色受到伤害后，若你武将牌上「储」的数量小于体力上限，你可以令其摸一张牌。然后其将一张手牌置于你的武将牌上，称为「储」。",
	//chuyuan_info:'一名角色受到伤害后，你可以令其摸一张牌。然后其将一张手牌置于你的武将牌上，称为「储」。你的手牌上限+X（X为你武将牌上的「储」数）。',
	dengji: "登极",
	dengji_info: "觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后获得技能〖天行〗和〖奸雄〗。",
	tianxing: "天行",
	tianxing_info: "觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后失去技能〖储元〗，选择获得以下技能中的一个：〖仁德〗/〖制衡〗/〖乱击〗/〖行动〗。",
	shen_zhenji: "神甄宓",
	shen_zhenji_prefix: "神",
	shenfu: "神赋",
	shenfu_info: "回合结束时，若你的手牌数为：奇数，你可对一名其他角色造成1点雷属性伤害。若其因此进入过濒死状态，你可重复此流程（不能选择本次已选择过的角色）。偶数，你可选择一名角色，你令其摸一张牌或弃置一张手牌。若其手牌数等于体力值，你可重复此流程（不能选择本次已选择过的角色）。",
	qixian: "七弦",
	qixian_info: "锁定技，你的手牌上限视为7。",
	caopi_xingdong: "行动",
	caopi_xingdong_info: "出牌阶段限一次，你可以将一张【杀】或普通锦囊牌交给一名其他角色，然后该角色选择一项：对除你以外的角色使用此牌并在此牌结算完成后和你各摸一张牌；或跳过下回合的判定阶段和摸牌阶段。",
	shen_diaochan: "神貂蝉",
	shen_diaochan_prefix: "神",
	meihun: "魅魂",
	meihun_info: "结束阶段或当你成为【杀】的目标后，你可以令一名其他角色交给你一张你声明的花色的手牌，若其没有则你观看其手牌然后弃置其中一张。",
	huoxin_control: "惑心",
	huoxin: "惑心",
	huoxin_info: "出牌阶段限一次，你可以展示两张花色相同的手牌并分别交给两名其他角色，然后令这两名角色拼点，没赢的角色获得1个“魅惑”标记。拥有2个或更多“魅惑”的角色回合即将开始时，该角色移去其所有“魅惑”，此回合改为由你操控。",
	boss_zhaoyun: "高达一号",
	boss_zhaoyun_ab: "神赵云",
	boss_zhaoyun_prefix: "神",
	boss_juejing: "绝境",
	boss_juejing2: "绝境",
	boss_juejing_info: "锁定技，摸牌阶段开始前，你跳过此阶段。当你得到牌/失去手牌后，若你的手牌数大于4/小于4，则你将手牌摸至4张/弃置至4张。",
	zhanjiang: "斩将",
	zhanjiang_info: "准备阶段开始时，如果其他角色的装备区内有【青釭剑】，你可以获得之。",
	shen_guojia: "神郭嘉",
	shen_guojia_prefix: "神",
	shuishi: "慧识",
	shuishi_info: "出牌阶段限一次，若你的体力上限小于10，则你可选择一名角色。你令其摸一张牌，若其以此法得到的牌：与该角色的其他手牌花色均不相同，则你加1点体力上限，若你的体力上限小于10，则你可以重复此流程；否则你减1点体力上限，且其展示所有手牌。",
	stianyi: "天翊",
	stianyi_info: "觉醒技，准备阶段，若场上的所有存活角色均于本局游戏内受到过伤害，则你加2点体力上限并回复1点体力，然后令一名角色获得技能〖佐幸〗。",
	zuoxing: "佐幸",
	zuoxing2: "佐幸",
	zuoxing_info: "出牌阶段限一次，若令你获得〖佐幸〗的角色存活且体力上限大于1，则你可以令其减1点体力上限，并视为使用一张普通锦囊牌。",
	sghuishi: "辉逝",
	sghuishi_info: "限定技，出牌阶段，你可以选择一名其他角色：若其有未发动过的觉醒技，则你令其发动这些觉醒技时无视原有条件；否则其摸四张牌。然后你减2点体力上限。",
	shen_taishici: "神太史慈",
	shen_taishici_prefix: "神",
	dulie: "笃烈",
	dulie_info: "锁定技。当你成为【杀】的目标时，若使用者的体力值大于你，则你进行判定。若结果为红桃，则取消此目标。",
	tspowei: "破围",
	tspowei_info: "使命技。①游戏开始时，你令所有其他角色获得一个“围”。②一名角色受到伤害后，若其有“围”，则其移去“围”。③回合开始时，你选择所有有“围”的角色。这些角色失去“围”，然后这些角色的第一个不为你的下家获得等量的“围”。④一名其他角色的回合开始时，若其有“围”，则你可以选择一项：⒈弃置一张手牌并对其造成1点伤害。⒉若其体力值不大于你，则你获得其一张手牌。选择完成后，你视为在其攻击范围内直到回合结束。⑤使命：回合开始时，若场上没有“围”，则你获得技能〖神著〗。⑥失败：当你进入濒死状态时，你将体力值回复至1点，然后弃置装备区的所有牌。",
	shenzhu: "神著",
	shenzhu_info: "锁定技，当你使用有对应实体牌的非转化【杀】结算结束后，你选择一项：①摸一张牌，且本回合使用【杀】的次数上限+1。②摸三张牌，且本回合不能再使用【杀】。",
	dangmo: "荡魔",
	dangmo_info: "当你于出牌阶段内使用第一张【杀】选择目标后，你可以为此牌增加至多Y-1个目标（Y为你的体力值）。",
	reshuishi: "慧识",
	reshuishi_info: "出牌阶段限一次。若你的体力上限小于10，你可进行判定牌不置入弃牌堆的判定。若判定结果与本次发动技能时的其他判定结果的花色均不相同且你的体力上限小于10，则你加1点体力上限，且可以重复此流程。然后你将所有位于处理区的判定牌交给一名角色。若其手牌数为全场最多，则你减1点体力上限。",
	resghuishi: "辉逝",
	resghuishi_info: "限定技，出牌阶段，你可选择一名角色。若你的体力上限不小于存活人数且其有未发动的觉醒技，则你令其中一个技能无视发动条件；否则其摸四张牌。然后你减2点体力上限。",
	qizhengxiangsheng: "奇正相生",
	qizhengxiangsheng_info: "出牌阶段，对一名其他角色使用。你将目标角色标记为“奇兵”或“正兵”（对其他角色不可见）。然后目标角色可以打出一张【杀】或【闪】。若其是“奇兵”且未打出【杀】，则你对其造成1点伤害；若其是“正兵”且未打出【闪】，则你获得其一张牌。",
	shen_xunyu: "神荀彧",
	shen_xunyu_prefix: "神",
	tianzuo: "天佐",
	tianzuo_info: "锁定技。①游戏开始时，你将8张【奇正相生】加入牌堆。②【奇正相生】对你无效。",
	lingce: "灵策",
	lingce_info: "锁定技。当有【奇正相生】或智囊或〖定汉①〗记录过的锦囊牌被使用时，若此牌不为转化牌且对应实体牌数量为1，则你摸一张牌。",
	dinghan: "定汉",
	dinghan_info: "①当你成为未记录过的普通锦囊牌的目标时，或有未记录过的延时锦囊牌进入你的判定区时，你记录此牌名并取消之。②准备阶段，你可在〖定汉①〗的记录中添加或减少一种锦囊牌的牌名。",
	shen_sunce: "神孙策",
	shen_sunce_prefix: "神",
	yingba: "英霸",
	yingba_info: "①出牌阶段限一次，你可令一名体力上限大于1的其他角色减少1点体力上限并获得“平定”标记，然后你减少1点体力上限。②你对拥有“平定”标记的角色使用牌没有距离限制。",
	scfuhai: "覆海",
	scfuhai_info: "锁定技。①当你使用牌指定目标后，若目标角色有“平定”标记，则其不可响应此牌。若你本回合内以此法得到的牌数小于2，则你摸一张牌。②拥有“平定”标记的角色死亡时，你增加X点体力上限并摸X张牌。（X为其拥有的“平定”标记数）。",
	pinghe: "冯河",
	pinghe_info: "锁定技。①你的手牌上限基数等于你已损失的体力值。②当你受到其他角色造成的伤害时，若你有牌且你的体力上限大于1，则你防止此伤害，减1点体力上限并将一张手牌交给一名其他角色。然后若你拥有〖英霸〗，则伤害来源获得一个“平定”标记。",
	shen_jiangwei: "神姜维",
	shen_jiangwei_prefix: "神",
	jiufa: "九伐",
	jiufa_info: "①当你声明使用牌后或打出牌时，你记录此牌的牌名。②当你使用或打出的牌结算结束后，若你的〖九伐〗记录中包含至少⑨种不同的牌名，则你可以亮出牌堆顶的⑨张牌，选择并获得其中任意张点数各不相同且{这九张牌中存在未被选择且和已选择的牌点数相同}的牌，清除所有的记录，将其余牌置入弃牌堆。",
	tianren: "天任",
	tianren_info: "锁定技。①当有一张基本牌或普通锦囊牌不因使用而进入弃牌堆后，你获得一枚“天任”标记。②当你获得“天任”标记或体力上限变化后，若你的“天任”数不小于X，则你移去X枚“天任”，加1点体力上限并摸两张牌（X为你的体力上限）。",
	pingxiang: "平襄",
	pingxiang_info: "限定技。出牌阶段，若你的体力上限大于⑨，则你可减⑨点体力上限，视为使用至多⑨张火【杀】，然后失去〖九伐〗，并将手牌上限基数改为体力上限直到游戏结束。",
	shen_sunquan: "神孙权",
	shen_sunquan_prefix: "神",
	dili: "帝力",
	dili_info: '锁定技。游戏开始时，你随机获得一条<span style="font-family: yuanli">东吴命运线</span>。',
	yuheng: "驭衡",
	yuheng_info: '①出牌阶段限一次。你可以失去所有不为〖驭衡〗的非锁定技，然后随机获得全部<span style="font-family: yuanli">东吴命运线</span>涉及的一个技能。若你本阶段内没有发动过其他非锁定技，则你随机获得当前<span style="font-family: yuanli">东吴命运线</span>涉及的一个内容。②出牌阶段结束时，若你未于本阶段内发动过〖驭衡①〗，则你失去1点体力。',
	yuheng_append: '<span style="font-family: yuanli">天下英雄谁敌手？曹刘。生子当如孙仲谋！</span>',
	dili_shengzhi: "圣质",
	dili_shengzhi_info: "锁定技。若你因〖驭衡〗获得过〖英魂〗〖弘德〗〖秉壹〗，则当你使用点数为质数的牌时，此牌不可被响应。",
	dili_chigang: "持纲",
	dili_chigang_info: "锁定技。若你因〖驭衡〗获得过〖观微〗〖弼政〗〖安国〗，则当你的判定阶段开始前，你跳过此阶段并获得一个额外的摸牌阶段。",
	dili_qionglan: "穹览",
	dili_qionglan_info: '锁定技，限定技。若你因〖驭衡〗获得过〖涉猎〗〖问卦〗〖博图〗，则当你发动的〖驭衡〗结算结束后，你随机获得两条其他<span style="font-family: yuanli">东吴命运线</span>。',
	dili_quandao: "权道",
	dili_quandao_info: "锁定技。若你因〖驭衡〗获得过〖制衡〗〖诫训〗〖安恤〗，则你手牌区内点数为字母的牌的牌名视为【调剂盐梅】。",
	dili_jiaohui: "交辉",
	dili_jiaohui_info: "锁定技。若你因〖驭衡〗获得过〖下书〗〖结姻〗〖缔盟〗，且你的手牌数为1，则此牌的牌名视为【远交近攻】。",
	dili_yuanlv: "渊虑",
	dili_yuanlv_info: "锁定技。若你因〖驭衡〗获得过〖观潮〗〖决堰〗〖澜疆〗，则当你成为自己使用的不为【长安大舰】的装备牌的目标后，你将此牌置于弃牌堆，然后使用一张与此装备牌副类别相同的【长安大舰】。",
	changandajian_equip1: "长安大舰",
	changandajian_equip2: "长安大舰",
	changandajian_equip3: "长安大舰",
	changandajian_equip4: "长安大舰",
	changandajian_equip5: "长安大舰",
	changandajian_equip6: "长安大舰",
	changandajian_destroy: "长安大舰",
	changandajian_equip1_info: "锁定技。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
	changandajian_equip2_info: "锁定技。当你失去装备区内的【长安大舰】后，你销毁之并回复1点体力。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
	changandajian_equip3_info: "锁定技。其他角色至你的距离+2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
	changandajian_equip4_info: "锁定技。你至其他角色的距离-2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
	changandajian_equip5_info: "锁定技。你的手牌上限+2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
	changandajian_equip6_info: "锁定技。你至其他角色的距离-2，其他角色至你的距离+2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
	shen_machao: "神马超",
	shen_machao_prefix: "神",
	shouli: "狩骊",
	shouli_backup: "狩骊",
	shouli_info: "①锁定技，游戏开始时，你令场上所有角色从你的下家起，依次使用牌堆中的一张不为赠物的坐骑牌。②你可以将场上的一张进攻坐骑牌当做【杀】（无任何次数限制），防御坐骑牌当做【闪】使用或打出。若此坐骑牌的拥有者不为你，则其非锁定技于本回合内失效。且当你或其于本回合内受到伤害时，此伤害+1且改为雷属性。",
	hengwu: "横骛",
	hengwu_info: "当你使用或打出有花色的牌时，若你的手牌区内没有与此牌花色相同的牌，则你可以摸X张牌（X为场上装备区内花色与此牌相同的牌数）。",
	hengwu_append: '<span style="font-family: yuanli">棘手，怀念，摧毁！</span>',

	tw_shen_guanyu: "TW神关羽",
	tw_shen_guanyu_prefix: "TW神",
	twwushen: "武神",
	twwushen_info: "锁定技。①你的♥手牌均视为普【杀】。②你于每阶段使用的第一张【杀】不可被响应。③你使用♥【杀】无距离和次数限制。④当你使用♥【杀】选择目标后，你令所有拥有“梦魇”标记的角色均成为此【杀】的目标。",
	twwuhun: "武魂",
	twwuhun_info: "锁定技。①当你受到其他角色造成的1点伤害后，你令伤害来源获得1枚“梦魇”标记。②当你对有“梦魇”标记的其他角色造成伤害后，你令其获得一枚“梦魇”标记。③当你死亡时，你可进行判定。若结果不为【桃】或【桃园结义】，则你选择至少一名拥有“梦魇”标记的角色。令这些角色各自失去X点体力（X为其“梦魇”标记数）。",
	shen_zhangfei: "神张飞",
	shen_zhangfei_prefix: "神",
	shencai: "神裁",
	shencai_info: "出牌阶段限一次，你可以令一名其他角色进行判定。你获得此判定牌，然后若此判定牌：包含以下要素中的任意一个，则其失去已有的下列效果，并获得对应的效果：{⒈体力：当其受到伤害后，其失去等量的体力、⒉武器：其不能使用牌响应【杀】、⒊打出：当其失去手牌后，其再随机弃置一张手牌（不嵌套触发）、⒋距离：其的结束阶段开始时，其翻面}；若均不包含，你获得其区域里的一张牌，其获得一枚“死”并获得如下效果：其的角色手牌上限-X、其的回合结束时，若X大于场上存活人数，则其死亡（X为其“死”标记数）。",
	xunshi: "巡使",
	xunshi_info: "锁定技。①你的多目标锦囊牌均视为花色为none的普【杀】。②你使用颜色为none的牌无距离和次数限制。③当你使用无颜色的牌选择目标后，你令你的〖神裁〗的发动次数上限+1（至多为5），然后可以为此牌增加任意个目标。",
	shen_zhangjiao: "神张角",
	shen_zhangjiao_prefix: "神",
	yizhao: "异兆",
	yizhao_info: "锁定技。当你使用或打出牌时，你获得等同于此牌点数枚“黄”标记。然后若“黄”的十位数发生变化，你获得牌堆中一张点数为你“黄”的十位数的牌。",
	sijun: "肆军",
	sijun_info: "准备阶段，若“黄”数大于牌堆的牌数，你可以移去所有“黄”并洗牌，然后随机获得任意张点数之和为36的牌。",
	sanshou: "三首",
	sanshou_info: "当你受到伤害时，你可以亮出牌堆顶三张牌。若其中有本回合未被使用过的牌的类型，防止此伤害。",
	tianjie: "天劫",
	tianjie_info: "一名角色的回合结束时，若本回合牌堆洗过牌，你可以选择至多三名其他角色。你依次对每名目标角色造成X点雷电伤害（X为其手牌中【闪】的数量，至少为1）。",
	tw_shen_lvmeng: "TW神吕蒙",
	tw_shen_lvmeng_prefix: "TW神",
	twshelie: "涉猎",
	twshelie_info: "①摸牌阶段，你可放弃摸牌并亮出牌堆顶的五张牌，然后选择获得其中每种花色的牌各一张。②每轮限一次。结束阶段，若你本回合使用的花色数不小于你的体力值，你执行一个额外的摸牌阶段或出牌阶段。",
	twgongxin: "攻心",
	twgongxin2: "攻心",
	twgongxin_info: "出牌阶段限一次。你可以观看一名其他角色的手牌，然后你可以展示其中一张牌并选择一项：1.弃置此牌；2.将此牌置于牌堆顶。若该角色手牌中的花色数因此减少，你选择一种颜色，其于本回合不能使用或打出该颜色的牌。",
	shen_dengai: "神邓艾",
	shen_dengai_prefix: "神",
	dctuoyu: "拓域",
	dctuoyu_fengtian: "丰田",
	dctuoyu_qingqu: "清渠",
	dctuoyu_junshan: "峻山",
	dctuoyu_fengtian_tag: '<span data-nature="woodmm">丰田</span>',
	dctuoyu_qingqu_tag: '<span data-nature="watermm">清渠</span>',
	dctuoyu_junshan_tag: '<span data-nature="thundermm">峻山</span>',
	dctuoyu_info: "①锁定技。当你使用拥有对应副区域标签的牌时，你令此牌获得对应效果。<br>丰田：伤害值或回复值+1；清渠：无次数和距离限制；峻山：不可被响应。②出牌阶段开始时和结束时，你给你的手牌分配对应的已激活副区域标签（每个区域至多五张）。",
	dcxianjin: "险进",
	dcxianjin_info: "锁定技。当你每造成或受到两次伤害后，你激活一个副区域标签并摸X张牌（X为你已激活的副区域数，若你的手牌数为全场最多则改为摸一张牌）。",
	dcqijing: "奇径",
	dcqijing_info: "觉醒技。一名角色的回合结束后，若你的三个副区域标签均被激活，则你减1点体力上限，获得〖摧心〗，将座位移动至两名相邻的其他角色之间并执行一个额外回合。",
	dccuixin: "摧心",
	dccuixin_info: "当你不因此技能使用的基本牌或普通锦囊牌结算结束后，若此牌的目标于你使用此牌指定第一个目标时包含你的上家或下家，则你可以视为对下家或上家再使用一张牌名和元素相同的牌。",
	shen_dianwei: "神典韦",
	shen_dianwei_prefix: "神",
	juanjia: "捐甲",
	juanjia_info: "锁定技。游戏开始时，你废除一个防具栏，然后获得一个额外的武器栏。",
	qiexie: "挈挟",
	qiexie_info: "锁定技。准备阶段，你在剩余武将牌堆中随机观看五张牌，选择其中的任意张，将其按照如下规则转化为武器牌置入你的武器栏：{⒈此牌不具有花色，且其攻击范围和点数等于此武将牌的体力上限。⒉此武器牌的技能为该武将牌上所有描述中包含“【杀】”且不具有锁定技以外的标签的技能。⒊此武器牌离开你的装备区时，改为放回武将牌堆。}",
	cuijue: "摧决",
	cuijue_info: "每回合每名角色限一次。出牌阶段，你可以弃置一张牌，然后对攻击范围内距离最远的一名其他角色造成1点伤害（没有则不选）。",
	le_shen_jiaxu: "神贾诩",
	le_shen_jiaxu_prefix: "神",
	jxlianpo: "炼魄",
	jxlianpo_info: "锁定技。①若场上最大阵营为：反贼，其他角色的手牌上限-1，所有角色使用【杀】的次数上限和攻击范围+1；主忠，其他角色不能对其以外的角色使用【桃】。若有多个最大阵营，其他角色死亡后，来源摸两张牌或回复1点体力。②一轮游戏开始时，你展示一张未加入游戏或已死亡角色的身份牌，本轮视为该身份对应阵营的角色数+1。",
	jxzhaoluan: "兆乱",
	jxzhaoluan_info: "限定技。一名角色死亡前，若其此次进入过濒死状态，你可以取消之，令其加3点体力上限并失去所有非锁定技，回复体力至3点，摸四张牌。然后你获得如下效果：出牌阶段，你可以令一名成为过你〖兆乱〗目标的角色减1点体力上限，然后对一名此阶段未以此法选择过的角色造成1点伤害。",
	shen_huatuo: "手杀神华佗",
	shen_huatuo_prefix: "手杀神",
	wuling: "五灵",
	wuling_info: "①出牌阶段限两次。你可以选择一名没有“五禽戏”的角色，按照你选择的顺序向其传授“五禽戏”，且其获得如下效果：其获得你选择的第一种“五禽戏”的效果，并在其每个准备阶段移除当前“五禽戏”的效果并切换为下一种。②当你死亡时，你令场上的角色失去你传授的“五禽戏”。",
	wuling_wuqinxi: "五禽戏",
	wuling_wuqinxi_info: "<br><li>“五禽戏”分为“虎、鹿、熊、猿、鹤”五个不同的效果：" + "<br><li>虎：当你使用指定唯一目标的牌对目标角色造成伤害时，此伤害+1。" + "<br><li>鹿：①当你获得此效果时，你回复1点体力并弃置判定区的所有牌。②你不能成为延时锦囊牌的目标。" + "<br><li>熊：每回合限一次，当你受到伤害时，此伤害-1。" + "<br><li>猿：当你获得此效果时，你选择一名其他角色，获得其装备区里的一张牌。" + "<br><li>鹤：当你获得此效果时，你摸三张牌。",
	youyi: "游医",
	youyi_info: "①弃牌阶段结束时，你可以将所有于此阶段弃置的牌置入仁区。②出牌阶段限一次。你可以将仁区的所有牌置入弃牌堆，令所有角色各回复1点体力。",
	shen_lusu: "神鲁肃",
	shen_lusu_prefix: "神",
	dingzhou: "定州",
	dingzhou_info: "出牌阶段限一次。你可以将X张牌交给一名场上有牌的角色，然后你获得其场上的所有牌（X为其场上的牌数）。",
	tamo: "榻谟",
	tamo_info: "游戏开始时，你可以重新分配除主公外所有角色的座次。",
	tamo_info_doudizhu: "游戏开始时，你可以重新分配除三号位角色外所有角色的座次。",
	tamo_faq: "FAQ",
	tamo_faq_info: "<br><li>Q：在一号位不为主公的情况下，〖榻谟〗如何结算？</li><li>A：该角色可以正常进行座次交换。若受此技能影响导致一号位角色发生了变化，则以排列后的一号位角色为起始角色开始本局游戏。</li>",
	zhimeng: "智盟",
	zhimeng_info_identity: "回合结束后，你可以选择一名其他角色。若如此做，你与其将各自所有手牌置于处理区，然后你随机获得这些牌中的一半（向上取整），其获得剩余的牌。",
	zhimeng_info: "回合结束后，你可以选择一名手牌数不大于Y的其他角色（Y为你的手牌数+1）。若如此做，你与其将各自所有手牌置于处理区，然后你随机获得这些牌中的一半（向上取整），其获得剩余的牌。",
	shen_xuzhu: "神许褚",
	shen_xuzhu_prefix: "神",
	zhengqing: "争擎",
	zhengqing_info: "锁定技。一轮游戏开始时，你移去所有角色的“擎”标记，令上一轮于一回合内造成伤害值最高的角色获得此值数量枚“擎”，然后你与其各摸一张牌（多名角色则随机选择，优先为你）。若该角色为你且本次获得的“擎”数为本局游戏最多的一次，你改为摸X张牌（至多摸五张）。",
	zhuangpo: "壮魄",
	zhuangpo_info: "你可以将牌名为【杀】或牌面信息中包含“【杀】”的牌当【决斗】使用，然后你获得如下效果：1.当此【决斗】指定目标后，若你有“擎”，你可以移去任意枚“擎”，令目标角色弃置等量的牌；2.当你造成渠道为此牌的伤害时，若此牌的所有目标角色中存在有“擎”的角色，此伤害+1。",
	dc_shen_huatuo: "神华佗",
	dc_shen_huatuo_prefix: "神",
	jingyu: "静域",
	jingyu_info: "锁定技。每个技能每轮限一次，当一名角色发动不为〖静域〗的技能时，你摸一张牌。",
	lvxin: "滤心",
	lvxin_info: "出牌阶段限一次。你可以交给一名其他角色一张手牌并选择一项：⒈令其摸X张牌；⒉令其随机弃置X张手牌（X为游戏轮数，至多为5）。然后若其以此法得到/弃置了与你交给其的牌牌名相同的牌，其于其下次发动技能时回复/失去1点体力。",
	huandao: "寰道",
	huandao_info: "限定技。出牌阶段，你可以选择一名其他角色。你令其复原武将牌，系统随机生成一个与其同名的武将的武将牌上的一个与其拥有的技能均不同名的技能。其可以选择获得此技能，然后选择失去一个其他技能。",
	xin_simayi: "极略神司马懿",
	xin_simayi_ab: "手杀神司马懿",
	xin_simayi_prefix: "手杀神",
	xinrenjie: "忍戒",
	xinrenjie_info: "锁定技，当你需要响应其他角色的一张牌时，若你未响应此牌，你获得1枚“忍”标记（你每轮以此法至多获得4枚“忍”标记）。",
	xinbaiyin: "拜印",
	xinbaiyin_info: "觉醒技，准备阶段，若你的“忍”标记数不小于4，你减少1点体力上限，然后获得〖极略〗。",
	xinlianpo: "连破",
	xinlianpo_info: "当你杀死一名角色后，你可以选择一项：1.于此回合结束后获得一个额外回合；2.若你拥有〖极略〗，你获得一个你未拥有的〖极略〗技能。",
	xinjilve: "极略",
	xinjilve_info: "①当你获得此技能时，你获得〖鬼才〗并根据你的势力获得以下对应技能：魏：〖放逐〗；蜀：〖集智〗；吴：〖制衡〗；群：〖完杀〗。②出牌阶段开始时，你可以选择一项：1.弃置X枚“忍”标记并获得一个你未拥有的〖极略〗技能（X为你选择此项的次数+1）；2.弃置至多3枚“忍”标记并摸等量张牌。",
	new_simayi: "应天神司马懿",
	new_simayi_ab: "手杀神司马懿",
	new_simayi_prefix: "手杀神",
	jilin: "戢鳞",
	jilin_info: "①游戏开始时，你将牌堆顶两张牌暗置于你的武将牌上，称为“志”。②当你成为其他角色使用牌的目标时，你可以明置一张暗置的“志”令此牌对你无效。③回合开始时，你可用任意张手牌替换等量暗置的“志”。",
	yingyou: "英猷",
	yingyou_info: "①出牌阶段开始时，你可明置一张“志”然后摸X张牌（X为明置的“志”的数量）。②当你失去与明置的“志”其中一张花色相同的牌时，你摸一张牌。",
	yingtian: "应天",
	yingtian_info: "觉醒技。一名角色死亡后，若场上势力数不大于2，则你获得〖鬼才〗、〖完杀〗、〖连破〗并失去〖英猷〗且你本局游戏使用牌没有距离限制。",
	shen_huangzhong: "神黄忠",
	shen_huangzhong_prefix: "神",
	"1！5！": "毅武",
	"1！5！_info": "①若你的装备区里有武器牌，则你使用【杀】不可被响应。②当你使用【杀】结算完毕后，若你未因此【杀】造成过伤害，则你可以摸两张牌。③当你对一名其他角色造成伤害后，你可以获得1枚“赤”标记，然后从其随机X个未被击伤的部位中选择一个击伤（X为你的“赤”标记数）。",
	"1！5！_place1": "头部",
	"1！5！_place1_info": "令其失去所有体力",
	"1！5！_place2": "肩部",
	"1！5！_place2_info": "令其弃置装备区里的武器牌和坐骑牌",
	"1！5！_place3": "手部",
	"1！5！_place3_info": "令其手牌上限视为原来的一半（向下取整）直到其下个回合结束。",
	"1！5！_place4": "上肢",
	"1！5！_place4_info": "令其随机弃置两张手牌",
	"1！5！_place5": "下肢",
	"1！5！_place5_info": "令其体力值大于1时受到的伤害+1直到其下个回合结束",
	"1！5！_place6": "胸部",
	"1！5！_place6_info": "令其下个回合不能使用伤害牌",
	"1！5！_place7": "腹部",
	"1！5！_place7_info": "令其不能使用【闪】和【桃】直到其下个回合结束",
	chiren: "赤刃",
	chiren_info: "锁定技，结束阶段，若你的“赤”标记数大于等于你的已损失体力值，则你将体力值回复至4点，然后移去所有“赤”标记并摸等量的牌。",
};

export default translates;
