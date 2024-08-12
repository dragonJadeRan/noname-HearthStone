const translates = {
	ol_lingtong: "OL界凌统",
	ol_lingtong_prefix: "OL界",
	olxuanfeng: "旋风",
	olxuanfeng_info: "当你一次性失去至少两张牌后，或失去装备区的牌后，你可以依次弃置一至两名其他角色的共计两张牌。",
	ol_jianyong: "OL界简雍",
	ol_jianyong_prefix: "OL界",
	olqiaoshui: "巧说",
	olqiaoshui_info: "出牌阶段，你可与一名其他角色拼点。若你赢，你使用的下一张基本牌或普通锦囊牌可以额外指定任意一名其他角色为目标或减少指定一个目标；若你没赢，此技能于本回合失效且本回合你不能使用锦囊牌。",
	ol_caozhang: "OL界曹彰",
	ol_caozhang_prefix: "OL界",
	oljiangchi: "将驰",
	oljiangchi_info: "摸牌阶段结束时，你可以选择一项：①摸一张牌，本回合使用【杀】的次数上限-1，且【杀】不计入手牌上限。②重铸一张牌，本回合使用【杀】无距离限制，且使用【杀】的次数上限+1。",
	ol_sb_jiangwei: "OL谋姜维",
	ol_sb_jiangwei_prefix: "OL谋",
	olsbzhuri: "逐日",
	olsbzhuri_info: "你的阶段结束时，若你本阶段失去过手牌或得到过牌，则你可以与一名角色拼点。若你赢，你可以使用其中一张拼点牌；若你没赢，你失去1点体力或令此技能于本回合无效。",
	olsbranji: "燃己",
	olsbranji_info: "限定技，结束阶段。若你本回合使用过牌的阶段数大于等于/小于等于体力值，你可以获得技能〖困奋〗/〖诈降〗（同时满足则都获得，以此法获得的〖困奋〗直接修改为非锁定技）。若如此做，你将手牌数调整至手牌上限或将体力值回复至体力上限，然后你不能回复体力直到你杀死角色。",
	kunfenx: "困奋",
	kunfenx_info: "结束阶段开始时，你可以失去1点体力，然后摸两张牌。",
	ol_sb_guanyu: "OL谋关羽",
	ol_sb_guanyu_prefix: "OL谋",
	olsbfumeng: "赴梦",
	olsbfumeng_info: "一轮游戏开始时，你可以令任意张手牌的牌名视为【杀】。",
	olsbguidao: "归刀",
	olsbguidao_info: "出牌阶段，你可以重铸两张牌并视为使用一张【决斗】（重铸的【杀】数须比本回合上次发动〖归刀〗重铸的【杀】数多）。目标角色受到此牌伤害时，其须猜测你手牌中牌名为【杀】的牌数量多还是牌名不为【杀】的牌数多，若其猜错，则此【决斗】对其造成的伤害+1。",
	ol_sb_taishici: "OL谋太史慈",
	ol_sb_taishici_prefix: "OL谋",
	olsbdulie: "笃烈",
	olsbdulie_info: "每回合限一次，当你成为其他角色使用基本牌或普通锦囊牌的唯一目标时，你可以令此牌额外结算一次。若如此做，此牌结算完毕后，你摸X张牌（X为你的攻击范围且至多为5）。",
	olsbdouchan: "斗缠",
	olsbdouchan_info: "锁定技，准备阶段，你从牌堆中获得一张【决斗】，若牌堆没有【决斗】，则你的攻击范围和出牌阶段使用【杀】的次数上限+1（增加次数不超过游戏人数）。",
	olsbweilin: "威临",
	olsbweilin_info: "每回合限一次，你可以将一张牌当作任意【杀】或【酒】使用，且你以此法使用的牌指定最后一个目标后，你令所有目标角色本回合与此牌颜色相同的手牌均视为【杀】。",
	olsbduoshou: "夺首",
	olsbduoshou_info: "锁定技。①你每回合使用的第一张红色牌无距离限制。②你每回合使用的第一张基本牌不计入使用次数。③你每回合第一次造成伤害后，你摸一张牌。",
	ol_gaoshun: "OL界高顺",
	ol_gaoshun_prefix: "OL界",
	olxianzhen: "陷阵",
	olxianzhen_info: "出牌阶段限一次，你可以与一名角色拼点。若你赢，本回合你无视该角色的防具且对其使用牌没有次数和距离限制，且当你使用【杀】或普通锦囊牌指定目标时，可以令该角色也成为此牌的目标；若你没赢，本回合你不能对其使用【杀】且你的【杀】不计入手牌上限。",
	ol_sb_yuanshao: "OL谋袁绍",
	ol_sb_yuanshao_prefix: "OL谋",
	olsbhetao: "合讨",
	olsbhetao_info: "其他角色使用牌指定第一个目标后，若此牌指定的目标数大于1，则你可以弃置一张与此牌颜色相同的牌并令此牌改为对其中一名目标角色结算两次。",
	olsbshenli: "神离",
	olsbshenli_info: "出牌阶段限一次，当你使用【杀】指定目标后，你可以令所有可成为此牌目标的其他角色均成为此牌目标，此牌结算完毕后，若你因此牌造成的伤害值X：大于你的手牌数，你摸X张牌（至多摸五张）；大于你的体力值，你再次对所有目标角色中可以成为此牌目标的角色使用此牌。",
	olsbyufeng: "玉锋",
	olsbyufeng_sizhaojian: "思召剑",
	olsbyufeng_sizhaojian_info: "当你使用有点数的【杀】指定目标后，你令目标角色只能使用无点数或点数大于等于此【杀】的【闪】响应此牌。",
	olsbyufeng_block: "思召剑",
	olsbyufeng_info: "游戏开始时，你将【思召剑】置入装备区。",
	sizhaojian: "思召剑",
	sizhaojian_info: "当你使用有点数的【杀】指定目标后，你令目标角色只能使用无点数或点数大于等于此【杀】的【闪】响应此牌。",
	sizhaojian_append: '<span class="text" style="font-family: yuanli">【思召剑】于闪闪节（3月2日-3月15日）外离开装备区后，销毁此牌</span>',
	olsbshishou: "士首",
	olsbshishou_info: "主公技，其他群势力角色失去装备区的牌后，若你的装备区中没有武器牌，其可将【思召剑】置入你的装备区。",
	ol_yufan: "OL界虞翻",
	ol_yufan_prefix: "OL界",
	olzongxuan: "纵玄",
	olzongxuan_info: "当你弃置而失去牌后，或你的上家每回合因弃置首次失去牌后，你可以将位于弃牌堆的这些牌中的任意牌以任意顺序置于牌堆顶。",
	olzhiyan: "直言",
	olzhiyan_info: "你或你的上家的结束阶段，你可以令一名角色正面朝上摸一张牌，然后若此牌：为装备牌，则其使用此牌并回复1点体力；不为装备牌且其体力值不等于你，则其失去1点体力。",
	ol_chengpu: "OL界程普",
	ol_chengpu_prefix: "OL界",
	dclihuo: "疠火",
	dclihuo_info: "①你使用的非火【杀】可以改为火【杀】，若如此做，此牌结算完毕后，若此牌造成过伤害，则你弃置一张牌或失去1点体力。②你使用火【杀】可以额外指定一个目标。",
	olchunlao: "醇醪",
	olchunlao_info: "①当你或你的上下家的【杀】因弃置进入弃牌堆后，你将位于弃牌堆的这些牌称为“醇”置于武将牌上。②一名角色处于濒死状态时，你可以将一张“醇”置入弃牌堆，然后令其视为使用一张【酒】。③当一名角色失去体力后，你可以获得至多两张“醇”。",
	ol_wangyi: "OL界王异",
	ol_wangyi_prefix: "OL界",
	olzhenlie: "贞烈",
	olzhenlie_info: "当你成为其他角色使用【杀】或普通锦囊牌的目标后，你可以失去1点体力并令此牌对你无效，然后你选择一项：①获得使用者的一张牌；②于本回合的结束阶段发动一次〖秘计〗。",
	olzhenlie_effect: "秘计",
	olmiji: "秘计",
	olmiji_info: "结束阶段，若你已受伤，则你可以摸X张牌，然后你可以将至多X张牌任意分配给其他角色（X为你已损失的体力值）。",
	ol_sb_pangtong: "OL谋庞统",
	ol_sb_pangtong_prefix: "OL谋",
	olsbhongtu: "鸿图",
	olsbhongtu_info: "一名角色的阶段结束时，若你于此阶段得到过至少两张牌，你可以摸三张牌，展示三张手牌，令一名其他角色选择是否使用其中一张牌并令你随机弃置其中另一张牌。若使用牌的点数于三张牌中满足以下条件，其获得如下技能或效果直到其下一个回合的回合结束：唯一最大，其获得〖飞军〗；不为最大且不为最小，其获得〖潜袭〗；唯一最小，其手牌上限+2。若其未以此法使用牌，你对其与你各造成1点火焰伤害。",
	olsbqiwu: "栖梧",
	olsbqiwu_info: "当你每回合首次受到伤害时，若伤害来源为你或在你的攻击范围内，你可以弃置一张红色牌，防止此伤害。",
	ol_fazheng: "OL界法正",
	ol_fazheng_prefix: "OL界",
	olxuanhuo: "眩惑",
	olxuanhuo_info: "摸牌阶段结束时，你可以交给一名其他角色两张牌，然后其选择一项：1.对你选择的另一名其他角色使用一张【杀】，2.令你观看并获得其两张牌。",
	olenyuan: "恩怨",
	olenyuan1: "恩怨",
	olenyuan2: "恩怨",
	olenyuan_info: "①当你一次性获得一名其他角色超过一张牌后，你可以令其摸一张牌。②当你受到1点伤害后，你可以令伤害来源选择一项：1.将一张红色手牌交给你；2.失去1点体力。",
	ol_caifuren: "OL界蔡夫人",
	ol_caifuren_prefix: "OL界",
	olqieting: "窃听",
	olqieting_info: "其他角色的回合结束后，你可以选择X项：1.将其装备区的一张牌置入你的装备区；2.摸一张牌（X为以下条件中其本回合满足的项数：未对其他角色造成伤害、未对其他角色使用过牌）。",
	ol_liru: "OL界李儒",
	ol_liru_prefix: "OL界",
	olmieji: "灭计",
	olmieji_info: "出牌阶段限一次，你可以将一张锦囊牌置于牌堆顶，然后令一名其他角色弃置一张锦囊牌或两张非锦囊牌，然后你可以使用其弃置的一张牌。",
	ol_liubiao: "OL界刘表",
	ol_liubiao_prefix: "OL界",
	olzishou: "自守",
	olzishou_info: "摸牌阶段，你可以多摸X张牌，你以此法摸牌的结束阶段，若你本回合对其他角色造成过伤害，你弃置X张牌（X为全场势力数）。",
	olzongshi: "宗室",
	olzongshi_info: "锁定技。①你的手牌上限+X（X为全场势力数）。②每种势力限一次，当其他角色对你造成伤害时，你防止此伤害并令其摸一张牌。",
	ol_wuguotai: "OL界吴国太",
	ol_wuguotai_prefix: "OL界",
	olganlu: "甘露",
	olganlu_info: "出牌阶段限一次，你可以交换两名角色装备区内的牌，然后若你的已损失体力值小于X，你弃置X张牌（X为交换前两者装备区牌数之差）。",
	olbuyi: "补益",
	olbuyi_info: "一名角色进入濒死状态时，你可展示其区域内一张牌。若此牌不为基本牌，则其弃置此牌并回复1点体力。",
	ol_sb_kongrong: "OL谋孔融",
	ol_sb_kongrong_prefix: "OL谋",
	olsbliwen: "立文",
	olsbliwen_info: "①当你于回合内使用牌时，若此牌与你本回合使用的上一张牌的花色或点数相同，则你获得1枚“贤”标记（一名角色的“贤”标记上限为3）。②回合结束时，你可以失去任意枚“贤”标记并令等量其他角色各获得1枚“贤”标记，然后场上所有有“贤”标记的角色按照“贤”标记由大到小的顺序（“贤”标记数相同的角色按座次逆时针排序）依次选择是否使用一张非装备牌，若不选择使用，则其移去所有“贤”标记，然后你摸等量的牌。",
	olsbzhengyi: "争义",
	olsbzhengyi_info: "当一名有“贤”标记的角色受到伤害时，所有有“贤”标记同时选择是否取消此伤害，所有角色选择完毕后，若有角色选择是，则取消此伤害，然后选择是的角色中体力值最大的角色依次失去X点体力（X为伤害值）。",
	ol_zhangchunhua: "OL界张春华",
	ol_zhangchunhua_prefix: "OL界",
	oljianmie: "翦灭",
	oljianmie_info: "出牌阶段限一次，你可以选择一名其他角色，你与其依次选择一个颜色，然后依次弃置各自选择颜色的手牌，若你/其以此法弃置了更多手牌，则你/其视为对其/你使用一张【决斗】。",
	ol_caochong: "OL界曹冲",
	ol_caochong_prefix: "OL界",
	olchengxiang: "称象",
	olchengxiang_info: "当你受到1点伤害后，你可以亮出牌堆顶的四张牌，然后获得其中任意张点数之和不大于13的牌。",
	olrenxin: "仁心",
	olrenxin_info: "当一名其他角色进入濒死状态时，你可以翻面并弃置一张装备牌，然后令该角色回复体力至1点。",
};

export default translates;
