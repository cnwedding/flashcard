export interface Word {
  id: number;
  word: string;
  pinyin: string;
  type: string;
  meaning: string;
  example: string;
  pinyinExample: string;
  exampleMeaning: string;
}

export const vocabularyList: Word[] = [
  {
    id: 1,
    word: "爱心",
    pinyin: "Àixīn",
    type: "（名）",
    meaning: "tình yêu",
    example: "这些孩子非常需要爱心和关心。",
    pinyinExample: "Zhèxiē háizi fēicháng xūyào àixīn hé guānxīn.",
    exampleMeaning: "Những đứa trẻ này rất cần tình yêu và sự quan tâm."
  },
  {
    id: 2,
    word: "安排",
    pinyin: "ānpái",
    type: "（名,动)",
    meaning: "bố trí, sắp xếp",
    example: "他告诉我明天的活动安排。",
    pinyinExample: "Tā gàosù wǒ míngtiān de huódòng ānpái.",
    exampleMeaning: "Anh ây nói cho tôi các hoạt động đã được săp xêp trong trong ngàymai."
  },
  {
    id: 3,
    word: "安装",
    pinyin: "ānzhuāng",
    type: "（动）",
    meaning: "lắp đặt, cài đặt, lắp ráp",
    example: "教室里又安装了几盏灯。",
    pinyinExample: "Jiàoshì lǐ yòu ānzhuāngle jǐ zhǎn dēng.",
    exampleMeaning: "Trong phòng học lại được lắp mấy cái đèn."
  },
  {
    id: 4,
    word: "按",
    pinyin: "àn",
    type: "（动,介）",
    meaning: "theo",
    example: "按学校的计划，明天期末考 试。",
    pinyinExample: "Àn xuéxiào de jìhuà, míngtiān qímò kǎoshì.",
    exampleMeaning: "Theo kế hoạch của nhà trường, ngày mai thi cuối kj."
  },
  {
    id: 5,
    word: "按照",
    pinyin: "ànzhào",
    type: "（介）",
    meaning: "dựa vào, theo",
    example: "我们要按照规定去做肩",
    pinyinExample: "Wǒmen yào ànzhào guīdìng qù zuò jiān",
    exampleMeaning: "Chúng ta phải làm theo quy định."
  },
  {
    id: 6,
    word: "把",
    pinyin: "bǎ",
    type: "（介）",
    meaning: "đặt, đem, lấy",
    example: "我把书放桌子上了。",
    pinyinExample: "wǒ bǎ shū fàng zhuōzi shàngle.",
    exampleMeaning: "Tôi đăt sách ở trên bàn rồi."
  },
  {
    id: 7,
    word: "把",
    pinyin: "bǎ",
    type: "（量)",
    meaning: "con, cái, chiếc, cây",
    example: "他手里拿着一把雨 伞。",
    pinyinExample: "Tā shǒu lǐ názhe yī bǎ yǔsǎn.",
    exampleMeaning: "Anh ấy đang cầm một chiếc ô trên tay."
  },
  {
    id: 8,
    word: "把握",
    pinyin: "bǎwò",
    type: "（动,名）",
    meaning: "nắm chắc",
    example: "你要把握这个机会。",
    pinyinExample: "Nǐ yào bǎwò zhège jīhuì.",
    exampleMeaning: "Bạn phải nắm chắc cơ hội này."
  },
  {
    id: 9,
    word: "白",
    pinyin: "bái",
    type: "（副）",
    meaning: "mất công, vô ích",
    example: "我今天白来了。",
    pinyinExample: "Wǒ jīntiān bái láile.",
    exampleMeaning: "Mất công hôm nay tôi đến rồi."
  },
  {
    id: 10,
    word: "白菜",
    pinyin: "báicài",
    type: "（名）",
    meaning: "cải thảo",
    example: "这块地空着真可惜，种上一些白菜吧。",
    pinyinExample: "Zhè kuài dì kōngzhe zhēn kěxí, zhǒng shàng yīxiē báicài ba.",
    exampleMeaning: "Mảnh đất trống này thật đáng tiếc, trồng một chút cải thảo đi."
  },
  {
    id: 11,
    word: "班级",
    pinyin: "bānjí",
    type: "（名）",
    meaning: "lớp",
    example: "新学期，班级人数有些变动。",
    pinyinExample: "Xīn xuéqí, bānjí rénshù yǒuxiē biàndòng.",
    exampleMeaning: "Học kj mới sĩ số lớp có chút thay đổi."
  },
  {
    id: 12,
    word: "搬",
    pinyin: "bān",
    type: "（动）",
    meaning: "chuyển, dời",
    example: "这个桌子我搬不动。",
    pinyinExample: "Zhège zhuōzi wǒ bān bù dòng.",
    exampleMeaning: "Tôi không di chuyển được cái bàn này."
  },
  {
    id: 13,
    word: "搬家",
    pinyin: "bānjiā",
    type: "（动）",
    meaning: "chuyển nhà",
    example: "我搬家那天，有很多邻居来帮忙。",
    pinyinExample: "Wǒ bānjiā nèitiān, yǒu hěnduō línjū lái bāngmáng.",
    exampleMeaning: "Vào ngày tôi chuyên nhà, có rât nhiêu hàng xóm tới giúp đỡ."
  },
  {
    id: 14,
    word: "板",
    pinyin: "bǎn",
    type: "（名）",
    meaning: "tấm, phiến",
    example: "哥哥用锯子把木板切割开了。",
    pinyinExample: "Gēgē yòng jùzi bǎ mùbǎn qiēgē kāile.",
    exampleMeaning: "Anh trai dùng cái cưa để cắt miếng gỗ này."
  },
  {
    id: 15,
    word: "办理",
    pinyin: "bànlǐ",
    type: "（动）",
    meaning: "xử lj",
    example: "我的出国手续已经办理好了。",
    pinyinExample: "Wǒ de chūguó shǒuxù yǐjīng bànlǐ hǎole.",
    exampleMeaning: "Thủ tục xuất ngoại của tôi đã được xử lí xong rồi"
  },
  {
    id: 16,
    word: "保",
    pinyin: "bǎo",
    type: "（动）",
    meaning: "đảm bảo, duy trì",
    example: "他们还修路以保交通。",
    pinyinExample: "Tāmen hái xiū lù yǐ bǎo jiāotōng.",
    exampleMeaning: "Họ vẫn sửa đường để đảm bảo giao thông."
  },
  {
    id: 17,
    word: "保安",
    pinyin: "bǎo’ān",
    type: "（名）",
    meaning: "Bảo an, bảo vệ",
    example: "他被保安赶走了。",
    pinyinExample: "Tā bèi bǎo’ān gǎn zǒule.",
    exampleMeaning: "Anh ta bị bảo vệ đuổi đi rồi."
  },
  {
    id: 18,
    word: "保持",
    pinyin: "bǎochí",
    type: "（动）",
    meaning: "bảo trì, duy trì",
    example: "阅读室里大家应该保持安静。",
    pinyinExample: "Yuèdú shì lǐ dàjiā yīnggāi bǎochí ānjìng.",
    exampleMeaning: "Trong phòng đọc sách mọi người nên giữ trật tự."
  },
  {
    id: 19,
    word: "保存",
    pinyin: "bǎocún",
    type: "（动）",
    meaning: "bảo tồn, giữ lại",
    example: "妈妈还保存着我小时候穿过的衣服",
    pinyinExample: "Māmā hái bǎocúnzhe wǒ xiǎoshíhòu chuānguò de yīfú",
    exampleMeaning: "Mẹ vẫn còn giữ lại quần áo hồi nhỏ của tôi."
  },
  {
    id: 20,
    word: "保护",
    pinyin: "bǎohù",
    type: "（动）",
    meaning: "bảo vê",
    example: "我们要保护好自己的眼睛。",
    pinyinExample: "wǒmen yào bǎohù hǎo zìjǐ de yǎnjīng.",
    exampleMeaning: "Chúng ta phải bảo vệ mắt của mình."
  },
  {
    id: 21,
    word: "保留",
    pinyin: "bǎoliú",
    type: "（动）",
    meaning: "bảo lưu, lưu giữ",
    example: "我保留着她全部的信",
    pinyinExample: "Wǒ bǎoliúzhe tā quánbù de xìn",
    exampleMeaning: "Tôi giữ lại tất cả những bức thư của cô ấy."
  },
  {
    id: 22,
    word: "保险",
    pinyin: "bǎoxiǎn",
    type: "（形,名）",
    meaning: "bảo hiểm",
    example: "反正出了事可按保险索赔。",
    pinyinExample: "fǎnzhèng chū liǎo shì kě àn bǎoxiǎn suǒpéi.",
    exampleMeaning: "Dù sao thì có gặp chuyện cũng có bảo hiểm bồi thuờng."
  },
  {
    id: 23,
    word: "保证",
    pinyin: "Bǎozhèng",
    type: "（动,名）",
    meaning: "bảo đảm",
    example: "这件事我保证能做好。",
    pinyinExample: "Zhè jiàn shì wǒ bǎozhèng néng zuò hǎo.",
    exampleMeaning: "Chuyện này tôi bảo đảm có thể làm được tốt."
  },
  {
    id: 24,
    word: "报",
    pinyin: "bào",
    type: "（名）",
    meaning: "báo",
    example: "今天晚报有什么内 容？",
    pinyinExample: "Jīntiān wǎnbào yǒu shé me nèiróng?",
    exampleMeaning: "Nội dung của báo muộn hôm nay có gì?"
  },
  {
    id: 25,
    word: "报到",
    pinyin: "bàodào",
    type: "（动）",
    meaning: "báo danh, báo có mặt",
    example: "新学生今天开始报到。",
    pinyinExample: "Xīn xuéshēng jīntiān kāishǐ bàodào.",
    exampleMeaning: "Hôm nay học sinh mới đến báo danh."
  },
  {
    id: 26,
    word: "报告",
    pinyin: "bàogào",
    type: "（动、名）",
    meaning: "báo cáo",
    example: "你应该把事情的经过向领导报告。",
    pinyinExample: "Nǐ yīnggāi bǎ shìqíng de jīngguò xiàng lǐngdǎo bàogào.",
    exampleMeaning: "Bạn nên đem chuyện đã xảy ra báo cáo với lãnh đạo."
  },
  {
    id: 27,
    word: "背",
    pinyin: "bèi",
    type: "（动）",
    meaning: "cõng, vác; gánh vác, đeo",
    example: "我背着书包去学校。",
    pinyinExample: "Wǒ bèizhe shūbāo qù xuéxiào.",
    exampleMeaning: "Tôi đeo cặp sách đi đến trường."
  },
  {
    id: 28,
    word: "北部",
    pinyin: "běibù",
    type: "（名）",
    meaning: "miền Bắc, phía Bắc",
    example: "中国的北部很冷。",
    pinyinExample: "Zhōngguó de běibù hěn lěng.",
    exampleMeaning: "Miền Bắc Trung Quốc rất lạnh."
  },
  {
    id: 29,
    word: "北",
    pinyin: "běi",
    type: "（名）",
    meaning: "lưng, mặt sau, sau lưng",
    example: "我的后背很疼。",
    pinyinExample: "Wǒ de hòu bèi hěn téng.",
    exampleMeaning: "Đằng sau lưng tôi rất đau."
  },
  {
    id: 30,
    word: "背后",
    pinyin: "bèihòu",
    type: "（名）",
    meaning: "đàng sau",
    example: "有话就当面讲，不要在背后 说。",
    pinyinExample: "Yǒu huà jiù dāngmiàn jiǎng, bùyào zài bèihòu shuō.",
    exampleMeaning: "Có lời gì thì nói thẳng mặt, đừng nói đằng sau lưng nhau."
  },
  {
    id: 31,
    word: "被",
    pinyin: "bèi",
    type: "（介）",
    meaning: "bị, được",
    example: "蛋糕被妹妹吃了。",
    pinyinExample: "Dàngāo bèi mèimei chīle.",
    exampleMeaning: "Bánh gato bị em gái ăn mất rồi."
  },
  {
    id: 32,
    word: "被子",
    pinyin: "bèizi",
    type: "（名）",
    meaning: "cái chăn",
    example: "晚上记得盖好被子，别感冒了。",
    pinyinExample: "Wǎnshàng jìdé gài hǎo bèizi, bié gǎnmàole.",
    exampleMeaning: "Buổi tối nhớ đăp kĩ chăn, đừng để bị cảm."
  },
  {
    id: 33,
    word: "本来",
    pinyin: "běnlái",
    type: "（形，副）",
    meaning: "vốn dĩ",
    example: "这种小事本来就不应该麻烦别人。",
    pinyinExample: "Zhè zhǒng xiǎoshì běnlái jiù bù yìng gāi máfan biérén.",
    exampleMeaning: "Cái chuyện nhỏ này vốn không nên làm phiền tới người khác."
  },
  {
    id: 34,
    word: "本领",
    pinyin: "běnlǐng",
    type: "（名）",
    meaning: "bản lĩnh, năng lực",
    example: "你可以相信他，他很有本领。",
    pinyinExample: "Nǐ kěyǐ xiāngxìn tā, tā hěn yǒu běnlǐng.",
    exampleMeaning: "Bạn có thể tin tưởng anh ấy, anh ấy rât có năng lực."
  },
  {
    id: 35,
    word: "本事",
    pinyin: "běnshì",
    type: "（名）",
    meaning: "khả năng, bản lĩnh",
    example: "我认为他没这个本事。",
    pinyinExample: "Wǒ rènwéi tā méi zhège běnshì.",
    exampleMeaning: "Tôi cho rằng anh ta không có năng lực này."
  },
  {
    id: 36,
    word: "比较",
    pinyin: "bǐjiào",
    type: "（动，副）",
    meaning: "tương đối, khá",
    example: "这件事情比较复杂。",
    pinyinExample: "Zhè jiàn shìqíng bǐjiào fùzá.",
    exampleMeaning: "Chuyện này tương đối phức tạp."
  },
  {
    id: 37,
    word: "比例",
    pinyin: "bǐlì",
    type: "（名）",
    meaning: "tỉ lệ, tỉ số",
    example: "我们班的男女比例是一比一。",
    pinyinExample: "Wǒmen bān de nánnǚ bǐlì shì yī bǐ yī.",
    exampleMeaning: "Tỉ lệ trai gái trong lớp chúng tôi là 1:1."
  },
  {
    id: 38,
    word: "比赛",
    pinyin: "bǐsài",
    type: "（动、名）",
    meaning: "trận đấu, cuộc thi đấu",
    example: "今晚有一场足球比 赛。",
    pinyinExample: "Jīn wǎn yǒuyī chǎng zúqiú bǐsài.",
    exampleMeaning: "Tối nay có một trận đấu bóng đá."
  },
  {
    id: 39,
    word: "必然",
    pinyin: "bìrán",
    type: "（形）",
    meaning: "tất nhiên, thế nào cũng",
    example: "那是这个决定的必然后果。",
    pinyinExample: "Nà shì zhège juédìng de bìrán hòuguǒ.",
    exampleMeaning: "Đó là hậu quả tât yếu của quyêt định này."
  },
  {
    id: 40,
    word: "必要",
    pinyin: "bìyào",
    type: "（形，名）",
    meaning: "cần thiết, không thể thiếu",
    example: "她从来就没有出去工作的必要。",
    pinyinExample: "Tā cónglái jiù méiyǒu chūqù gōngzuò de bìyào.",
    exampleMeaning: "Cô ấy không bao giờ cân thiêt phải ra ngoài làm việc."
  },
  {
    id: 41,
    word: "变化",
    pinyin: "biànhuà",
    type: "（名， 动）",
    meaning: "thay đổi, biến đổi",
    example: "家乡变化真大，我快认不出来了。",
    pinyinExample: "Jiāxiāng biànhuà zhēn dà, wǒ kuài rèn bù chūláile.",
    exampleMeaning: "Quê hương thay đôi thật nhiêu, tôi sắp không nhận ra nữa rồi."
  },
  {
    id: 42,
    word: "变为",
    pinyin: "biàn wèi",
    type: "（动）",
    meaning: "trở thành",
    example: "你要努力学习，才能让梦想变为现圣。",
    pinyinExample: "Nǐ yào nǔlì xuéxí, cáinéng ràng mèngxiǎng biàn wèi xiàn shèng.",
    exampleMeaning: "Bạn phải cố gắng học tập mới có thể biến giấc mơ trở"
  },
  {
    id: 43,
    word: "标题",
    pinyin: "biāotí",
    type: "（名）",
    meaning: "đầu đề, tiêu đề, đề mục",
    example: "爸爸看报纸都是先看标题，再看内容。",
    pinyinExample: "Bàba kàn bàozhǐ dōu shì xiān kàn biāotí, zài kàn nèiróng.",
    exampleMeaning: "Bố xem báo lúc nào cũng phải xem tiêu đề rồi mới xem tới nội dung."
  },
  {
    id: 44,
    word: "长处",
    pinyin: "Chángchu",
    type: "（名）",
    meaning: "sở trường, điểm mạnh",
    example: "我们要学习别人的长处。",
    pinyinExample: "Wǒmen yào xuéxí biérén de cháng chù.",
    exampleMeaning: "Chúng ta cần học tập những điểm mạnh của người khác."
  },
  {
    id: 45,
    word: "长期",
    pinyin: "chángqí",
    type: "（名）",
    meaning: "trường kì, dài hạn",
    example: "他因长期患病身体很虚弱。",
    pinyinExample: "Tā yīn chángqí huàn bìng shēntǐ hěn xūruò.",
    exampleMeaning: "Anh ây bị bệnh lâu ngày nên thân thê rất yếu."
  },
  {
    id: 46,
    word: "并",
    pinyin: "bìng",
    type: "（副, 连）",
    meaning: "không hề",
    example: "他并没忘了你。",
    pinyinExample: "Tā bìng méi wàngle nǐ.",
    exampleMeaning: "Anh ấy không hề quên bạn."
  },
  {
    id: 47,
    word: "标准",
    pinyin: "biāozhǔn",
    type: "（名，形）",
    meaning: "chuẩn, tiêu chuẩn",
    example: "他普通话说得很标准。",
    pinyinExample: "Tā pǔtōnghuà shuō dé hěn biāozhǔn.",
    exampleMeaning: "Tiêng phổ thông của anh ây nói rất chuẩn."
  },
  {
    id: 48,
    word: "表达",
    pinyin: "biǎodá",
    type: "（动）",
    meaning: "biểu đạt, bày tỏ, nói lên",
    example: "这首诗表达了他对家人的想念。",
    pinyinExample: "Zhè shǒu shī biǎodále tā duì jiārén de xiǎngniàn.",
    exampleMeaning: "Bài thơ này nói lên niềm nhớ thương của anh ấy với gia đình."
  },
  {
    id: 49,
    word: "表格",
    pinyin: "biǎogé",
    type: "（名）",
    meaning: "bảng biểu, bảng lê, bảng khai",
    example: "他给我们每人一张要填写的表格。",
    pinyinExample: "Tā gěi wǒmen měi rén yī zhāng yào tiánxiě de biǎogé.",
    exampleMeaning: "Anh ấy cho chúng tôi mỗi người một tờ bảng biểu để kê khai."
  },
  {
    id: 50,
    word: "表面",
    pinyin: "biǎomiàn",
    type: "（名）",
    meaning: "bên ngoài, mặt ngoài",
    example: "你不能只看事情的表面。",
    pinyinExample: "Nǐ bùnéng zhǐ kàn shìqíng de biǎomiàn.",
    exampleMeaning: "Bạn không thể chỉ nhìn từ mặt ngoài của vấn đề."
  },
  {
    id: 51,
    word: "表明",
    pinyin: "biǎomíng",
    type: "（动）",
    meaning: "tỏ rõ, chứng tỏ",
    example: "他的行动表明他是一个可靠的人。",
    pinyinExample: "Tā de xíngdòng biǎomíng tā shì yīgè kěkào de rén.",
    exampleMeaning: "Hành động của anh ấy chứng tỏ anh ấy là một người đáng tin cậy."
  },
  {
    id: 52,
    word: "表现",
    pinyin: "biǎoxiàn",
    type: "（名， 动）",
    meaning: "biểu hiện",
    example: "他在工作中的表现很好。",
    pinyinExample: "Tā zài gōngzuò zhōng de biǎoxiàn hěn hǎo.",
    exampleMeaning: "Biểu hiện của anh ấy trong công việc rất tốt."
  },
  {
    id: 53,
    word: "表演",
    pinyin: "biǎoyǎn",
    type: "（名， 动）",
    meaning: "biểu diễn, diễn xuất",
    example: "人们为他的精彩表演大声喝菜。",
    pinyinExample: "Rénmen wèi tā de jīngcǎi biǎoyǎn dàshēng hē cài.",
    exampleMeaning: "Mọi người vì màn biểu diễn xuât sắc của anh ấy mà hô to tán thưởng."
  },
  {
    id: 54,
    word: "并且",
    pinyin: "bìngqiě",
    type: "（连）",
    meaning: "đồng thời, cùng lúc",
    example: "这本书内容好，并且写得很生动。",
    pinyinExample: "Zhè běn shū nèiróng hǎo, bìngqiě xiě dé hěn shēngdòng.",
    exampleMeaning: "Nội dung cuốn sách này rất hay đông thời viết rất sinh động."
  },
  {
    id: 55,
    word: "播出",
    pinyin: "bō chū",
    type: "（动）",
    meaning: "phát sóng, đưa lên các chương trình",
    example: "消息一播出，马上就传遍了全世界。",
    pinyinExample: "Xiāoxī yī bō chū, mǎshàng jiù chuán biànle quán shìjiè.",
    exampleMeaning: "Thông tin vừa phát sóng đã lập tức truyền ra khắp thế giới"
  },
  {
    id: 56,
    word: "播放",
    pinyin: "bòfàng",
    type: "（动）",
    meaning: "truyền, phát, đưa tin",
    example: "电视台播放比赛实况。",
    pinyinExample: "Diànshìtái bòfàng bǐsài shíkuàng.",
    exampleMeaning: "TV đang đưa tin vê tình hình của trận đấu."
  },
  {
    id: 57,
    word: "不必",
    pinyin: "bùbì",
    type: "（副）",
    meaning: "không cần, khỏi, khỏi phải",
    example: "不必去得太早。",
    pinyinExample: "Bùbì qù dé tài zǎo.",
    exampleMeaning: "Không cần phải đi quá sớm."
  },
  {
    id: 58,
    word: "不论",
    pinyin: "bùlùn",
    type: "（连）",
    meaning: "bất luận, bất kể",
    example: "不论老师提出什么问题，他总能答上。",
    pinyinExample: "Bùlùn lǎoshī tíchū shénme wèntí, tā zǒng néng dá shàng.",
    exampleMeaning: "Bất kể thầy giáo đưa ra câu hỏi gì, anh ấy cũng có thể trả lời được."
  },
  {
    id: 59,
    word: "补",
    pinyin: "bǔ",
    type: "（动）",
    meaning: "tu bổ, chữa, vá",
    example: "他答应帮助我补习数学。",
    pinyinExample: "Tā dāyìng bāngzhù wǒ bǔxí shùxué.",
    exampleMeaning: "Anh ấy đồng j giúp tôi bô túc môn toán."
  },
  {
    id: 60,
    word: "补充",
    pinyin: "bǔchōng",
    type: "（动、名）",
    meaning: "bổ sung",
    example: "我想补充说明一下。",
    pinyinExample: "Wǒ xiǎng bǔchōng shuōmíng yīxià.",
    exampleMeaning: "Tôi muốn bổ sung giải thích một chút."
  },
  {
    id: 61,
    word: "采用",
    pinyin: "cǎiyòng",
    type: "（动）",
    meaning: "chọn dùng, áp dụng",
    example: "公司采用了新的技 术。",
    pinyinExample: "Gōngsī cǎiyòngle xīn de jìshù.",
    exampleMeaning: "Công ty vừa áp dụng kĩ thuật mới."
  },
  {
    id: 62,
    word: "彩色",
    pinyin: "cǎisè",
    type: "（名）",
    meaning: "màu, màu săc",
    example: "书中有几幅彩色插 图。",
    pinyinExample: "Shū zhōng yǒu jǐ fú cǎisè chātú.",
    exampleMeaning: "Có một số hình minh họa màu cho cuốn sách."
  },
  {
    id: 63,
    word: "曾经",
    pinyin: "céngjīng",
    type: "（副）",
    meaning: "từng, đã từng",
    example: "这个地方我们曾经来玩过。",
    pinyinExample: "Zhège dìfāng wǒmen céngjīng lái wánguò.",
    exampleMeaning: "Chúng ta đã từng đến đây chơi rồi."
  },
  {
    id: 64,
    word: "产生",
    pinyin: "chǎnshēng",
    type: "（动）",
    meaning: "nảy sinh, sản sinh, xuât hiên",
    example: "同学之间容易产生矛盾。",
    pinyinExample: "Tóngxué zhī jiān róngyì chǎnshēng máodùn.",
    exampleMeaning: "Giữa các bạn học với nhau dễ xảy ra xung đột."
  },
  {
    id: 65,
    word: "长城",
    pinyin: "chángchén g",
    type: "（名）",
    meaning: "Vạn Lj Trường Thành",
    example: "我登上长城，环视周围的景色。",
    pinyinExample: "Wǒ dēng shàng chángchéng, huánshì zhōuwéi de jǐngsè.",
    exampleMeaning: "Tôi leo lên Trường Thành, ngắm nhìn phong cảnh xung quanh."
  },
  {
    id: 66,
    word: "不安",
    pinyin: "Bù’ān",
    type: "(形）",
    meaning: "bất an",
    example: "听了这消息我心里很不安。",
    pinyinExample: "Tīngle zhè xiāoxī wǒ xīnlǐ hěn bù’ān.",
    exampleMeaning: "Sau khi nghe tin này tôi cảm thấy rất bất an."
  },
  {
    id: 67,
    word: "不得不",
    pinyin: "bùdé bù",
    type: null,
    meaning: "phải, không thể không",
    example: "他们不得不半夜离开。",
    pinyinExample: "Tāmen bùdé bù bànyè líkāi.",
    exampleMeaning: "Họ phải rời đi vào nửa đêm."
  },
  {
    id: 68,
    word: "不光",
    pinyin: "bùguāng",
    type: "(副、 连）",
    meaning: "không chỉ",
    example: "他不光是我的老师，还是我的朋友。",
    pinyinExample: "Tā bùguāng shì wǒ de lǎoshī, háishì wǒ de péngyǒu.",
    exampleMeaning: "Anh ấy không chỉ là thầy giáo của tôi, mà còn là bạn của tôi."
  },
  {
    id: 69,
    word: "不仅",
    pinyin: "bùjǐn",
    type: "(连）",
    meaning: "không chỉ, không chỉ thế",
    example: "他不仅聪明，而且很漂亮。",
    pinyinExample: "Tā bùjǐn cōngmíng, érqiě hěn piàoliang.",
    exampleMeaning: "Cô ấy không chỉ thông minh mà còn rất xinh đẹp."
  },
  {
    id: 70,
    word: "布",
    pinyin: "bù",
    type: "(名）",
    meaning: "vải,vải bố",
    example: "我买了一块布。",
    pinyinExample: "Wǒ mǎile yīkuài bù.",
    exampleMeaning: "Tôi đã mua một tấm vải."
  },
  {
    id: 71,
    word: "步",
    pinyin: "bù",
    type: "(名、量）",
    meaning: "bước, bước chân",
    example: "自信是走向成功的第一步。",
    pinyinExample: "Zìxìn shì zǒuxiàng chénggōng de dì yī bù.",
    exampleMeaning: "Tự tin là bước đầu tiên để đi tới thành công."
  },
  {
    id: 72,
    word: "部",
    pinyin: "bù",
    type: "(名、量）",
    meaning: "phần, bộ",
    example: "我看过这部电视剧。",
    pinyinExample: "Wǒ kànguò zhè bù diànshìjù.",
    exampleMeaning: "Bộ phim này tôi xem qua rồi."
  },
  {
    id: 73,
    word: "部门",
    pinyin: "bùmén",
    type: "(名）",
    meaning: "ngành, bộ môn, bộ phận",
    example: "此事你必须向管理部门说清。",
    pinyinExample: "Cǐ shì nǐ bìxū xiàng guǎnlǐ bùmén shuō qīng.",
    exampleMeaning: "Bạn phải giải thích rõ chuyện này với bộ phận quản lj."
  },
  {
    id: 74,
    word: "部长",
    pinyin: "bùzhǎng",
    type: "(名）",
    meaning: "bộ trưởng",
    example: "王部长走进了会议室。",
    pinyinExample: "Wáng bùzhǎng zǒu jìnle huìyì shì.",
    exampleMeaning: "Bộ trưởng Vương đã đi vào phòng họp."
  },
  {
    id: 75,
    word: "才能",
    pinyin: "cáinéng",
    type: "(名）",
    meaning: "tài năng, tài hoa",
    example: "她是一个非常有才能的人。",
    pinyinExample: "Tā shì yīgè fēicháng yǒu cáinéng de rén.",
    exampleMeaning: "Cô ấy là một người rất có tài năng"
  },
  {
    id: 76,
    word: "采取",
    pinyin: "cǎiqǔ",
    type: "(动）",
    meaning: "áp dụng, lựa chọn đê thi hành",
    example: "我们必须要采取行 动。",
    pinyinExample: "Wǒmen bìxū yào cǎiqǔ xíngdòng.",
    exampleMeaning: "Chúng ta phải lựa chọn phương thức hành động phù hợp."
  },
  {
    id: 77,
    word: "厂",
    pinyin: "chǎng",
    type: "(名）",
    meaning: "nhà máy",
    example: "这台机器是我们厂自制的。",
    pinyinExample: "Zhè tái jīqì shì wǒmen chǎng zìzhì de.",
    exampleMeaning: "Cái máy này là do nhà máy chúng tôi chế tạo ra."
  },
  {
    id: 78,
    word: "场合",
    pinyin: "chǎnghé",
    type: "(名）",
    meaning: "trường hợp, nơi",
    example: "在公共场合，要注意文明礼貌。",
    pinyinExample: "Zài gōnggòng chǎnghé, yào zhùyì wénmíng lǐmào.",
    exampleMeaning: "ở nơi công cộng cần chú j có tác phong văn minh, lễ phép."
  },
  {
    id: 79,
    word: "场所",
    pinyin: "chǎngsuǒ",
    type: "(名）",
    meaning: "nơi, nơi chốn",
    example: "阅读室是大家读书的场所。",
    pinyinExample: "Yuèdú shì shì dàjiā dúshū de chǎngsuǒ.",
    exampleMeaning: "Phòng đọc là chỗ đọc sách lớn nhất của mọi người."
  },
  {
    id: 80,
    word: "超级",
    pinyin: "chāojí",
    type: "(形）",
    meaning: "siêu, siêu cấp",
    example: "这一房子超级的大。",
    pinyinExample: "Zhè yī fángzi chāojí de dà.",
    exampleMeaning: "Căn hộ này siêu lớn."
  },
  {
    id: 81,
    word: "潮",
    pinyin: "cháo",
    type: "(介、 动）",
    meaning: "ẩm ướt",
    example: "这个房间太阳照不到，所以有点潮。",
    pinyinExample: "Zhège fángjiān tàiyáng zhào bù dào, suǒyǐ yǒudiǎn cháo.",
    exampleMeaning: "Anh sáng không rọi đến được căn phòng này, nên có chút ẩm ướt."
  },
  {
    id: 82,
    word: "吵",
    pinyin: "chǎo",
    type: "(形、 动）",
    meaning: "ôn ào, âm ĩ; tranh cãi",
    example: "那边发生什么事了？好吵啊",
    pinyinExample: "Nà biān fāshēng shénme shìle? Hǎo chǎo a",
    exampleMeaning: "Đằng kia xảy ra chuyện gì vậy? ồn quá đi"
  },
  {
    id: 83,
    word: "吵架",
    pinyin: "chǎojià",
    type: "(动）",
    meaning: "cãi nhau, tranh cãi",
    example: "前几天我和朋友吵了架。",
    pinyinExample: "qián jǐ tiān wǒ hé péngyǒu chǎole jià.",
    exampleMeaning: "Mấy hôm trước tôi đã cãi nhau với bạn mình."
  },
  {
    id: 84,
    word: "衬衫",
    pinyin: "chènshān",
    type: "(名）",
    meaning: "áo sơ mi",
    example: "他今天穿了一件白色的衬衫。",
    pinyinExample: "Tā jīntiān chuānle yī jiàn báisè de chènshān.",
    exampleMeaning: "Hôm nay anh ấy mặc một chiêc áo sơ mi màu trắng."
  },
  {
    id: 85,
    word: "衬衣",
    pinyin: "chènyī",
    type: "(名）",
    meaning: "áo sơ mi, áo ba lỗ (mặc trong)",
    example: "他身上的衬衣有些旧了。",
    pinyinExample: "Tā shēnshang de chènyī yǒuxiē jiùle.",
    exampleMeaning: "Cái áo ba lỗ anh ấy mặc đã khá cũ rồi."
  },
  {
    id: 86,
    word: "称为",
    pinyin: "chēng wèi",
    type: "(动）",
    meaning: "gọi là, mệnh danh là",
    example: "老虎被称为森林的大王。",
    pinyinExample: "Lǎohǔ bèi chēng wèi sēnlín de dàwáng.",
    exampleMeaning: "Hổ được mệnh danh là chúa tể của chốn sơn lâm."
  },
  {
    id: 87,
    word: "成功",
    pinyin: "Chénggōng",
    type: "（动、形）",
    meaning: "thành công",
    example: "大会取得圆满成功。",
    pinyinExample: "Dàhuì qǔdé yuánmǎn chénggōng.",
    exampleMeaning: "Cuộc họp diễn ra rất thành công."
  },
  {
    id: 88,
    word: "成果",
    pinyin: "chéngguǒ",
    type: "（名）",
    meaning: "thành quả",
    example: "劳动成果是用汗水换来的。",
    pinyinExample: "Láodòng chéngguǒ shì yòng hànshuǐ huàn lái de.",
    exampleMeaning: "Thành quả của lao động đêu đôi lây từ mô hôi."
  },
  {
    id: 89,
    word: "成就",
    pinyin: "chéngjiù",
    type: "（名、 动）",
    meaning: "thành tựu",
    example: "这不是什么大不了的成就。",
    pinyinExample: "Zhè bùshì shénme dàbùliǎo de chéngjiù.",
    exampleMeaning: "Đây không phải là thành tựu to lớn gì."
  },
  {
    id: 90,
    word: "成立",
    pinyin: "chénglì",
    type: "（动）",
    meaning: "thành lập",
    example: "我们公司成立于2010 年。",
    pinyinExample: "Wǒmen gōngsī chénglì yú 2010 nián.",
    exampleMeaning: "Công ty chúng ta thành lập năm 2010."
  },
  {
    id: 91,
    word: "成熟",
    pinyin: "chéngshú",
    type: "（形）",
    meaning: "thành thục, trưởng thành",
    example: "他看起来更成熟了。",
    pinyinExample: "Tā kàn qǐlái gèng chéngshúle.",
    exampleMeaning: "Anh ấy trông có vẻ càng trưởng thành hơn."
  },
  {
    id: 92,
    word: "成员",
    pinyin: "chéngyuán",
    type: "（名）",
    meaning: "thành viên, hội viên",
    example: "组里的每个成员的想法都不同。",
    pinyinExample: "Zǔ lǐ de měi gè chéngyuán de xiǎngfǎ dōu bùtóng.",
    exampleMeaning: "Mỗi thành viên trong tổ đều có một cách nghĩ khác nhau."
  },
  {
    id: 93,
    word: "成长",
    pinyin: "chéngzhǎng",
    type: "（动）",
    meaning: "lớn, trưởng thành",
    example: "这是我学习和成长的地方。",
    pinyinExample: "Zhè shì wǒ xuéxí hé chéngzhǎng dì dìfāng.",
    exampleMeaning: "Đây là nơi tôi học tập và trưởng thành."
  },
  {
    id: 94,
    word: "城",
    pinyin: "chéng",
    type: "（名）",
    meaning: "thành lũy; thành phố",
    example: "他在城里上高中。",
    pinyinExample: "Tā zài chéng lǐ shàng gāozhōng.",
    exampleMeaning: "Tôi học cấp ba trong thành phố."
  },
  {
    id: 95,
    word: "城市",
    pinyin: "chéngshì",
    type: "（名）",
    meaning: "thành phố",
    example: "三年前 ，我家从乡下搬到城市。",
    pinyinExample: "Sān nián qián, wǒjiā cóng xiāngxià bān dào chéngshì.",
    exampleMeaning: "Ba năm trước nhà tôi chuyển từ vùng quê nên thành phố."
  },
  {
    id: 96,
    word: "程度",
    pinyin: "chéngdù",
    type: "（名）",
    meaning: "trình độ, mức độ, câp bâc",
    example: "人民的文化程度日益提高。",
    pinyinExample: "Rénmín de wénhuà chéngdù rìyì tígāo.",
    exampleMeaning: "Trình độ văn hóa của nhân dân ngày được nâng cao."
  },
  {
    id: 97,
    word: "持续",
    pinyin: "chíxù",
    type: "（动）",
    meaning: "duy trì lâu dài, khăng khăng",
    example: "这场大雨持续下了三天。",
    pinyinExample: "Zhè chǎng dàyǔ chíxù xiàle sān tiān.",
    exampleMeaning: "Trận mưa to này kéo dài suốt ba ngày."
  },
  {
    id: 98,
    word: "充满",
    pinyin: "chōngmǎn",
    type: "（动）",
    meaning: "lâp đây, lâp kín, tràn đày",
    example: "歌声里充满信心和力量。",
    pinyinExample: "Gēshēng lǐ chōngmǎn xìnxīn hé lìliàng.",
    exampleMeaning: "Tiếng hát chứa đây niềm tin và sức mạnh."
  },
  {
    id: 99,
    word: "重",
    pinyin: "zhòng",
    type: "（副）",
    meaning: "lại, một lầnnữa",
    example: "我重看了一遍这部电影。",
    pinyinExample: "Wǒ zhòng kànle yībiàn zhè bù diànyǐng.",
    exampleMeaning: "Tôi đã xem lại bộ phim này."
  },
  {
    id: 100,
    word: "初",
    pinyin: "chū",
    type: "（副）",
    meaning: "đâu （ điểm xuât phát, băt đầu)",
    example: "初夏就已经很热了。",
    pinyinExample: "Chūxià jiù yǐjīng hěn rèle.",
    exampleMeaning: "Mới đầu hè mà đã nóng lắm rồi."
  },
  {
    id: 101,
    word: "初 （初一）",
    pinyin: "chū (chū yī)",
    type: "（前 缀）",
    meaning: "mùng 1 Tết",
    example: "大年初一，朋友们互相问 好。",
    pinyinExample: "Dà nián chū yī, péngyǒumen hùxiāng wènhǎo.",
    exampleMeaning: "Mùng 1 đầu năm, bạn bè đến nhà nhau thăm hỏi chúc tết."
  },
  {
    id: 102,
    word: "初步",
    pinyin: "chūbù",
    type: "（形）",
    meaning: "bước đầu, sơ bộ, ban đầu",
    example: "在会上 ，大家谈了初步的意见。",
    pinyinExample: "Zài huì shàng, dàjiā tánle chūbù de yìjiàn.",
    exampleMeaning: "Trong cuộc họp, mọi người bàn bạc về các j kiến sơ bộ."
  },
  {
    id: 103,
    word: "初级",
    pinyin: "chūjí",
    type: "（形）",
    meaning: "sơ cấp, sơ bộ, sơ đẳng",
    example: "他半年就学完了初级班的课程。",
    pinyinExample: "Tā bànnián jiùxué wánliǎo chūjí bān de kèchéng.",
    exampleMeaning: "Anh ấy chỉ mất nửa năm đã học hết tiến trình của lớp sơ cấp."
  },
  {
    id: 104,
    word: "初中",
    pinyin: "chūzhōng",
    type: "（名）",
    meaning: "trung học cơ sở",
    example: "他小学 刚毕业 ，准备进入初中。",
    pinyinExample: "Tā xiǎoxué gāng bìyè, zhǔnbèi jìnrù chūzhōng.",
    exampleMeaning: "Cậu ấy vừa tốt nghiệp câp 1 và chuẩn bị bước lên cấp 2."
  },
  {
    id: 105,
    word: "除了",
    pinyin: "chúle",
    type: "（介）",
    meaning: "ngoài ra, trừ ra",
    example: "除了他 ，我谁也不认识。",
    pinyinExample: "Chúle tā, wǒ shéi yě bù rènshí.",
    exampleMeaning: "Trừ anh ấy ra tôi không quen một ai nữa cả."
  },
  {
    id: 106,
    word: "处理",
    pinyin: "chǔlǐ",
    type: "（动、名）",
    meaning: "sắp xếp, giải quyết",
    example: "这件事怎么处理？",
    pinyinExample: "Zhè jiàn shì zěnme chǔlǐ?",
    exampleMeaning: "Chuyện này xử lí thế nào?"
  },
  {
    id: 107,
    word: "传",
    pinyin: "chuán",
    type: "（动）",
    meaning: "truyền, truyền lại, giao",
    example: "楼上传来奇怪的声 音。",
    pinyinExample: "Lóu shàngchuán lái qíguài de shēngyīn.",
    exampleMeaning: "Trên tầng truyền đến âm thanh kì lạ."
  },
  {
    id: 108,
    word: "传播",
    pinyin: "Chuánbō",
    type: "（动）",
    meaning: "truyên bá, truyền, phô biến",
    example: "近来信息传播得很快。",
    pinyinExample: "Jìnlái xìnxī chuánbò dé hěn kuài.",
    exampleMeaning: "Dạo này thông tin truyền bá rất nhanh."
  },
  {
    id: 109,
    word: "传来",
    pinyin: "chuán lái",
    type: "（动）",
    meaning: "truyền lại, truyền đến",
    example: "森林里传来小鸟儿的叫声。",
    pinyinExample: "Sēnlín lǐ chuán lái xiǎo niǎo er de jiào shēng.",
    exampleMeaning: "Từ rừng sâu truyền đến tiếng hót của chú chim nhỏ."
  },
  {
    id: 110,
    word: "传说",
    pinyin: "chuánshuō",
    type: "（名， 动）",
    meaning: "truyền thuyết; thuật lại, kể lại",
    example: "这本书里有很多有意思的传说故事",
    pinyinExample: "Zhè běn shū li yǒu hěnduō yǒuyìsi de chuánshuō gùshì",
    exampleMeaning: "Trong cuốn sách này có rât nhiều truyền thuyết hay."
  },
  {
    id: 111,
    word: "创新",
    pinyin: "chuàngxīn",
    type: "（名， 动）",
    meaning: "cách tân, đổi mới",
    example: "在音乐创作上，他一直勇于创新。",
    pinyinExample: "zài yīnyuè chuàngzuò shàng, tā yīzhí yǒngyú chuàngxīn.",
    exampleMeaning: "Trong sáng tác âm nhạc, anh ây luôn luôn đôi mới."
  },
  {
    id: 112,
    word: "创业",
    pinyin: "chuàngyè",
    type: "（动）",
    meaning: "lập nghiệp, sáng nghiệp",
    example: "毕业以后我会去北京创业。",
    pinyinExample: "Bìyè yǐhòu wǒ huì qù běijīng chuàngyè.",
    exampleMeaning: "Sau khi tôi tốt nghiệp tôi sẽ tới Bắc Kinh lập nghiệp."
  },
  {
    id: 113,
    word: "创造",
    pinyin: "chuàngzào",
    type: "（动、名）",
    meaning: "sáng tạo, tạo ra, lập",
    example: "劳动人民是历史的创造者。",
    pinyinExample: "Láodòng rénmín shì lìshǐ de chuàngzào zhě.",
    exampleMeaning: "Nhân dân lao động là tác giả tạo ra lịch sử."
  },
  {
    id: 114,
    word: "创作",
    pinyin: "chuàngzuò",
    type: "（动、名）",
    meaning: "sáng tác, viêt, vẽ, soạn thảo",
    example: "这篇文章完全是我个人的创作。",
    pinyinExample: "Zhè piān wénzhāng wánquán shì wǒ gèrén de chuàngzuò.",
    exampleMeaning: "Bài văn này hoàn toàn là sáng tác của cá nhân tôi."
  },
  {
    id: 115,
    word: "从来",
    pinyin: "cónglái",
    type: "（副）",
    meaning: "từ trước tới giờ",
    example: "这种事我从来没有听说过。",
    pinyinExample: "Zhè zhǒng shì wǒ cónglái méiyǒu tīng shuōguò.",
    exampleMeaning: "Chuyện này tôi chưa nghe thấy bao giờ cả."
  },
  {
    id: 116,
    word: "从前",
    pinyin: "cóngqián",
    type: "（名）",
    meaning: "ngày trước, trước đây",
    example: "从前的事儿不要再提了。",
    pinyinExample: "Cóngqián de shì er bùyào zài tíle.",
    exampleMeaning: "Chuyện ngày trước thì không cần nhắc lại làm gì."
  },
  {
    id: 117,
    word: "从事",
    pinyin: "cóngshì",
    type: "（动）",
    meaning: "làm, tham gia",
    example: "我从事教育工作。",
    pinyinExample: "Wǒ cóngshì jiàoyù gōngzuò.",
    exampleMeaning: "Tôi làm trong ngành giáo dục."
  },
  {
    id: 118,
    word: "村",
    pinyin: "cūn",
    type: "（名）",
    meaning: "thôn, làng, xóm, xã",
    example: "我和爷爷住在村里。",
    pinyinExample: "Wǒ hé yéyé zhù zài cūnlǐ.",
    exampleMeaning: "Tôi sống ở trong thôn với ông nội."
  },
  {
    id: 119,
    word: "存",
    pinyin: "cún",
    type: "（动）",
    meaning: "tồn tại, sinh tồn, gửi, tích trữ",
    example: "我去银行存 钱。",
    pinyinExample: "Wǒ qù yínháng cún qián.",
    exampleMeaning: "Tôi đi ngân hàng gửi tiền."
  },
  {
    id: 120,
    word: "存在",
    pinyin: "cúnzài",
    type: "（动）",
    meaning: "tồn tại, có thật, còn",
    example: "认识到 自己的错误要马上改正。",
    pinyinExample: "Rènshí dào zìjǐ de cuòwù yào mǎshàng gǎizhèng.",
    exampleMeaning: "Sự việc đã được giải quyêt, không còn bât kì vấn đề gì nữa."
  },
  {
    id: 121,
    word: "错误",
    pinyin: "cuòwù",
    type: "（形、名）",
    meaning: "lệch lạc, sai lầm",
    example: "只有承认错误你才可以进步",
    pinyinExample: "Zhǐyǒu chéngrèn cuòwù nǐ cái kěyǐ jìnbù",
    exampleMeaning: "Chỉ khi thừa nhận sai lầm bạn mới có thể tiến bộ."
  },
  {
    id: 122,
    word: "达到",
    pinyin: "dádào",
    type: "（动）",
    meaning: "đạt được, đạt đến, đạt tới",
    example: "我希望可以达到目 标、",
    pinyinExample: "wǒ xīwàng kěyǐ dádào mùbiāo,",
    exampleMeaning: "Tôi hy vọng có thể đạt được mục tiêu."
  },
  {
    id: 123,
    word: "打破",
    pinyin: "dǎpò",
    type: "（动）",
    meaning: "phá, phá vỡ, đập tan",
    example: "我不小心打破了朋友家的花瓶。",
    pinyinExample: "wǒ bù xiǎoxīn dǎpòle péngyǒu jiā de huāpíng.",
    exampleMeaning: "Tôi không cẩn thận đập vỡ bình hoa ở nhà bạn."
  },
  {
    id: 124,
    word: "打听",
    pinyin: "dǎtīng",
    type: "（动）",
    meaning: "hỏi thăm, thăm dò",
    example: "这件事我要去打听一下。",
    pinyinExample: "Zhè jiàn shì wǒ yào qù dǎtīng yīxià.",
    exampleMeaning: "Chuyện này tôi phải đi hỏi thăm chút đã."
  },
  {
    id: 125,
    word: "大概",
    pinyin: "dàgài",
    type: "（形，副）",
    meaning: "đại khái, sơ lược",
    example: "这本书我读过很久了，只记得大概内容。",
    pinyinExample: "Zhè běn shū wǒ dúguò hěnjiǔle, zhǐ jìdé dàgài nèiróng.",
    exampleMeaning: "Quyển sách này tôi đọc lâu rồi, chỉ nhớ được nội dung sơ lược thôi."
  },
  {
    id: 126,
    word: "大使 馆",
    pinyin: "dàshǐ guǎn",
    type: "（名）",
    meaning: "đại sứ quán",
    example: "我去大使馆办签证。",
    pinyinExample: "Wǒ qù dàshǐ guǎn bàn qiānzhèng.",
    exampleMeaning: "Tôi đi Đại Sứ Quán làm visa."
  },
  {
    id: 127,
    word: "大约",
    pinyin: "dàyuē",
    type: "（副）",
    meaning: "khoảng chừng, chắc là",
    example: "小红今天没有来上课，大约是生病",
    pinyinExample: "Xiǎo hóng jīntiān méiyǒu lái shàngkè, dàyuē shì shēngbìng",
    exampleMeaning: "Hôm nay bạn Tiểu Hồng không đến lớp, chắc là mắc bệnh rồi."
  },
  {
    id: 128,
    word: "大夫",
    pinyin: "dàfū",
    type: "（名）",
    meaning: "bác sĩ, thầy thuôc",
    example: "大夫让我一天吃两次药。",
    pinyinExample: "dàfū ràng wǒ yītiān chī liǎng cì yào.",
    exampleMeaning: "Bác sĩ bảo tôi một ngày uống thuốc 2 lần."
  },
  {
    id: 129,
    word: "代",
    pinyin: "Dài",
    type: "（动、名）",
    meaning: "thay, hộ, giùm, thay thế",
    example: "代我向你爸爸、妈妈问好。",
    pinyinExample: "Dài wǒ xiàng nǐ bàba, māmā wènhǎo.",
    exampleMeaning: "Thay tôi hỏi thăm bố mẹ bạn nhé."
  },
  {
    id: 130,
    word: "代表",
    pinyin: "dàibiǎo",
    type: "（名， 动）",
    meaning: "đại biểu, đại diện",
    example: "他代表了我们大部分人的意见。",
    pinyinExample: "Tā dàibiǎole wǒmen dà bùfèn rén de yìjiàn.",
    exampleMeaning: "Anh ấy đại diện cho j kiến của đại đa số mọi người."
  },
  {
    id: 131,
    word: "代表 团",
    pinyin: "dàibiǎo tuán",
    type: "（名）",
    meaning: "đoàn đại biểu",
    example: "他们是越南代表团。",
    pinyinExample: "Tāmen shì yuènán dàibiǎo tuán.",
    exampleMeaning: "Họ là đoàn đại biểu của Việt Nam."
  },
  {
    id: 132,
    word: "带动",
    pinyin: "dàidòng",
    type: "（动）",
    meaning: "dẫn dắt, lôi kéo",
    example: "在他的带动下，我很快就完成了任。",
    pinyinExample: "Zài tā de dàidòng xià, wǒ hěn kuài jiù wánchéngle rèn.",
    exampleMeaning: "Dưới sự dẫn dắt của anh ấy, tôi rất nhanh đã hoàn thành nhiệm vụ."
  },
  {
    id: 133,
    word: "带领",
    pinyin: "dàilǐng",
    type: "（动）",
    meaning: "dẫn dắt, dìu dẳt, lãnh đao",
    example: "老同学带领新同学去见老 师。",
    pinyinExample: "Lǎo tóngxué dàilǐng xīn tóngxué qù jiàn lǎoshī.",
    exampleMeaning: "Học sinh cũ dẫn học sinh mới đi gặp thầy giáo."
  },
  {
    id: 134,
    word: "单元",
    pinyin: "dānyuán",
    type: "（名）",
    meaning: "bài, mục",
    example: "这个单元的内容，我基本上都记住亍。",
    pinyinExample: "Zhège dānyuán de nèiróng, wǒ jīběn shàng dū jì zhù chù.",
    exampleMeaning: "Nội dung của bài này, tôi cơ bản đều nhớ hết rồi."
  },
  {
    id: 135,
    word: "当初",
    pinyin: "dāngchū",
    type: "（名）",
    meaning: "lúc đầu, hồi đỏ, khi đó",
    example: "他后悔当初没有好好学习。",
    pinyinExample: "Tā hòuhuǐ dāngchū méiyǒu hǎo hào xuéxí.",
    exampleMeaning: "Anh ấy hối hận vì không học tử tế ngay từ đầu."
  },
  {
    id: 136,
    word: "当地",
    pinyin: "dāngdì",
    type: "（名）",
    meaning: "bản địa, bản xứ, nơi đó",
    example: "这家饭店在当地很有名。",
    pinyinExample: "Zhè jiā fàndiàn zài dāngdì hěn yǒumíng.",
    exampleMeaning: "Quán cơm này rất nổi tiếng ở nơi đó."
  },
  {
    id: 137,
    word: "当然",
    pinyin: "dāngrán",
    type: "（形、副）",
    meaning: "đương nhiên",
    example: "同学有困难，当然应该去帮助。",
    pinyinExample: "Tóngxué yǒu kùnnán, dāngrán yīnggāi qù bāngzhù.",
    exampleMeaning: "Bạn học có khó khăn thì đương nhiên phải đi giúp đỡ rôi."
  },
  {
    id: 138,
    word: "当中",
    pinyin: "dāngzhōn g",
    type: "（名）",
    meaning: "ở giữa, chính giữa, trong khi",
    example: "他是他们当中最高的人。",
    pinyinExample: "Tā shì tāmen dāngzhōng zuìgāo de rén.",
    exampleMeaning: "Anh ấy là người cao nhất trong số họ."
  },
  {
    id: 139,
    word: "刀",
    pinyin: "dāo",
    type: "（名）",
    meaning: "dao, đao",
    example: "我买了一把刀。",
    pinyinExample: "Wǒ mǎile yī bǎ dāo.",
    exampleMeaning: "Tôi đã mua một con dao."
  },
  {
    id: 140,
    word: "导演",
    pinyin: "dǎoyǎn",
    type: "（名， 动）",
    meaning: "đạo diễn, nhà đạo diễn",
    example: "他导演过五部电影。",
    pinyinExample: "Tā dǎoyǎnguò wǔ bù diànyǐng.",
    exampleMeaning: "Tôi đã làm đạo diễn của 5 bộ phim điện ảnh."
  },
  {
    id: 141,
    word: "到达",
    pinyin: "dàodá",
    type: "（动）",
    meaning: "đên, tới",
    example: "我们终于到达了山 顶。",
    pinyinExample: "Wǒmen zhōngyú dàodále shāndǐng.",
    exampleMeaning: "Cuôi cùng chúng tôi cũng lên được đỉnh núi."
  },
  {
    id: 142,
    word: "到底",
    pinyin: "dàodǐ",
    type: "（副）",
    meaning: "rốt cuộc",
    example: "你跟他到底有什么关系？",
    pinyinExample: "Nǐ gēn tā dàodǐ yǒu shé me guānxì?",
    exampleMeaning: "Rốt cuộc bạn với anh ấy có quan hệ gì?"
  },
  {
    id: 143,
    word: "得分",
    pinyin: "défēn",
    type: "（动、名）",
    meaning: "được điểm, đạt điểm, có tỉ số",
    example: "他终于得分这学科。",
    pinyinExample: "Tā zhōngyú défēn zhè xuékē.",
    exampleMeaning: "Cuối cùng anh ấy cũng đạt điểm của bộ môn này."
  },
  {
    id: 144,
    word: "等待",
    pinyin: "děngdài",
    type: "（动）",
    meaning: "đợi chờ, đợi",
    example: "电影马上开始了，大家再等待一会冗。",
    pinyinExample: "Diànyǐng mǎshàng kāishǐle, dàjiā zài děngdài yī huǐ rǒng.",
    exampleMeaning: "Bộ phim sắp bắt đầu rồi, mọi người đợi một chút nhé."
  },
  {
    id: 145,
    word: "底下",
    pinyin: "dǐxia",
    type: "（名）",
    meaning: "dưới, phía dưới",
    example: "天太热了，大家到树底下坐吧。",
    pinyinExample: "Tiān tài rèle, dàjiā dào shù dǐxia zuò ba.",
    exampleMeaning: "Trời nóng quá, mọi người đến gốc cây ngồi đi."
  },
  {
    id: 146,
    word: "地区",
    pinyin: "dìqū",
    type: "（名）",
    meaning: "khu vực, vùng",
    example: "我出生在东北地区。",
    pinyinExample: "Wǒ chūshēng zài dōngběi dìqū.",
    exampleMeaning: "Tôi sinh ra ở vùng Đông Bắc,-"
  },
  {
    id: 147,
    word: "电视剧",
    pinyin: "diànshìjù",
    type: "（名）",
    meaning: "phim truyền hình",
    example: "这部电视剧最近有很多人看。",
    pinyinExample: "Zhè bù diànshìjù zuìjìn yǒu hěnduō rén kàn.",
    exampleMeaning: "Bộ phim truyền hình này gần đây có rất nhiều người xem."
  },
  {
    id: 148,
    word: "电视 台",
    pinyin: "diànshìtái",
    type: "（名）",
    meaning: "đài truyền hình",
    example: "他喜欢的节目已经在电视台播出了",
    pinyinExample: "Tā xǐhuān de jiémù yǐjīng zài diànshìtái bò chūle",
    exampleMeaning: "Chương trình anh ấy thích đã được phát sóng trên đài truyền hình rồi."
  },
  {
    id: 149,
    word: "电台",
    pinyin: "Diàntái",
    type: "（名）",
    meaning: "đài vô tuyên, đài phát thanh",
    example: "奶奶每天都听电台广播。",
    pinyinExample: "Nǎinai měitiān dū tīng diàntái guǎngbò.",
    exampleMeaning: "Mỗi ngày bà nội đều nghe đài phát thanh."
  },
  {
    id: 150,
    word: "电子邮件",
    pinyin: "diànzǐ yóujiàn",
    type: "（名）",
    meaning: "thư điện tử, mail",
    example: "收到电子邮件请回复。",
    pinyinExample: "Shōu dào diànzǐ yóujiàn qǐng huífù.",
    exampleMeaning: "Nhận được thư xin hãy trả lời."
  },
  {
    id: 151,
    word: "调",
    pinyin: "diào",
    type: "（动）",
    meaning: "điều động, phân phối, chuyển",
    example: "老师给他调了座位。",
    pinyinExample: "Lǎoshī gěi tā diàole zuòwèi.",
    exampleMeaning: "Thầy giáo chuyển chỗ ngồi cho anh ấy."
  },
  {
    id: 152,
    word: "调查",
    pinyin: "diàochá",
    type: "（动、名）",
    meaning: "điều tra",
    example: "这件事我们还没有调查清 楚。",
    pinyinExample: "Zhè jiàn shì wǒmen hái méiyǒu diàochá qīngchǔ.",
    exampleMeaning: "Chuyện này chúng tôi vẫn chưa điều tra rõ."
  },
  {
    id: 153,
    word: "订",
    pinyin: "dìng",
    type: "（动）",
    meaning: "lập, kí kết, đính ước, đặt trước",
    example: "我订了明天回河内的机票。",
    pinyinExample: "Wǒ dìngle míngtiān huí hénèi de jīpiào.",
    exampleMeaning: "Tôi đã đặt trước vé máy bay về Hà Nội vào ngày mai."
  },
  {
    id: 154,
    word: "定期",
    pinyin: "dìngqí",
    type: "（动、形）",
    meaning: "định ngày, định thời gian",
    example: "学校会定期举办篮球比赛。",
    pinyinExample: "Xuéxiào huì dìngqí jǔbàn lánqiú bǐsài.",
    exampleMeaning: "Trường học sẽ chọn ngày để tổ chức cuộc thi bóng rổ."
  },
  {
    id: 155,
    word: "东部",
    pinyin: "dōngbù",
    type: "（名）",
    meaning: "phía Đông, phương Đông",
    example: "我来自纽约东部的一个小 镇。",
    pinyinExample: "Wǒ láizì niǔyuē dōngbù de yīgè xiǎo zhèn.",
    exampleMeaning: "Tôi đến từ một trấn nhỏ ở phía đông New York."
  },
  {
    id: 156,
    word: "动力",
    pinyin: "dònglì",
    type: "（名）",
    meaning: "động lực",
    example: "有目标才有学习的动力。",
    pinyinExample: "Yǒu mùbiāo cái yǒu xuéxí de dònglì.",
    exampleMeaning: "Có mục đích thì mới có động lực để học tập."
  },
  {
    id: 157,
    word: "动人",
    pinyin: "dòngrén",
    type: "（形）",
    meaning: "cảm động lòng người",
    example: "她的歌声十分动 人。",
    pinyinExample: "Tā de gēshēng shífēn dòngrén.",
    exampleMeaning: "Giọng ca của cô ấy vô cùng lay động lòng người."
  },
  {
    id: 158,
    word: "读者",
    pinyin: "dúzhě",
    type: "（名）",
    meaning: "độc giả",
    example: "这本书非常受读者的喜欢。",
    pinyinExample: "Zhè běn shū fēicháng shòu dúzhě de xǐhuān.",
    exampleMeaning: "Quyển sách này rất được độc giả yêu thích."
  },
  {
    id: 159,
    word: "短处",
    pinyin: "duǎnchu",
    type: "（名）",
    meaning: "khuyết điểm, nhược điểm",
    example: "每个人都有长处和短处。",
    pinyinExample: "Měi gèrén dōu yǒu chángchu hé duǎnchu.",
    exampleMeaning: "Mỗi người đều có điểm mạnh và điểm yếu."
  },
  {
    id: 160,
    word: "短裤",
    pinyin: "duǎnkù",
    type: "（名）",
    meaning: "quần soóc, quần đùi",
    example: "他穿着黑色的短 裤。",
    pinyinExample: "Tā chuānzhuó hēisè de duǎnkù.",
    exampleMeaning: "Anh ấy mặc một cái quần đùi màu đen."
  },
  {
    id: 161,
    word: "短期",
    pinyin: "duǎnqí",
    type: "（名）",
    meaning: "ngắn hạn, thời gian ngắn",
    example: "这个问题在短期内很难解 决。",
    pinyinExample: "Zhège wèntí zài duǎnqí nèi hěn nán jiějué.",
    exampleMeaning: "Vân đề này rât khó để giải quyết trong một thời gian ngắn."
  },
  {
    id: 162,
    word: "断",
    pinyin: "duàn",
    type: "（动）",
    meaning: "đứt, đoạn tuyệt, căt đứt",
    example: "我和他断了联系。",
    pinyinExample: "Wǒ hé tā duànle liánxì.",
    exampleMeaning: "Tôi và anh ấy đã cắt đứt liên lạc."
  },
  {
    id: 163,
    word: "队员",
    pinyin: "duìyuán",
    type: "（名）",
    meaning: "đội viên",
    example: "他是篮球队的队 员。",
    pinyinExample: "Tā shì lánqiú duì de duìyuán.",
    exampleMeaning: "Anh ấy là thành viên trong đội bóng rổ."
  },
  {
    id: 164,
    word: "对待",
    pinyin: "duìdài",
    type: "（动）",
    meaning: "đối xử, đối với",
    example: "对待朋友要真诚。",
    pinyinExample: "Duìdài péngyǒu yào zhēnchéng.",
    exampleMeaning: "Phải đối đãi chân thành với bạn bè."
  },
  {
    id: 165,
    word: "对方",
    pinyin: "duìfāng",
    type: "（名）",
    meaning: "đối phương, phía bên kia",
    example: "我们被对方打败了。",
    pinyinExample: "Wǒmen bèi duìfāng dǎbàile.",
    exampleMeaning: "Chúng tôi bị đối phương đánh bại rồi."
  },
  {
    id: 166,
    word: "对手",
    pinyin: "duìshǒu",
    type: "（名）",
    meaning: "đối thủ",
    example: "他不是你的对手。",
    pinyinExample: "Tā bùshì nǐ de duìshǒu.",
    exampleMeaning: "Anh ấy không phải đối thủ của bạn."
  },
  {
    id: 167,
    word: "对象",
    pinyin: "duìxiàng",
    type: "（名）",
    meaning: "đối tượng, người yêu",
    example: "她已经有 对象了。",
    pinyinExample: "Tā yǐjīng yǒu duìxiàngle.",
    exampleMeaning: "Cô ây đã có đối tượng rồi."
  },
  {
    id: 168,
    word: "顿",
    pinyin: "dùn",
    type: "（量）",
    meaning: "bữa",
    example: "一天吃三 顿饭。",
    pinyinExample: "Yītiān chī sān dùn fàn.",
    exampleMeaning: "Một ngày ăn 3 bữa cơm."
  },
  {
    id: 169,
    word: "发表",
    pinyin: "fābiǎo",
    type: "（动）",
    meaning: "phát biểu, đăng tải",
    example: "小明的作文在《少年报》发表了。",
    pinyinExample: "Xiǎomíng de zuòwén zài “shàonián bào” fābiǎole.",
    exampleMeaning: "Bài văn của Tiểu Minh được đăng tải lên ”Báo Thiêu Niên”"
  },
  {
    id: 170,
    word: "发出",
    pinyin: "fāchū",
    type: "（动）",
    meaning: "phát sinh, phát ra, nảy sinh",
    example: "他发出求助信号。",
    pinyinExample: "Tā fāchū qiúzhù xìnhào.",
    exampleMeaning: "Anh ấy phát ra tín hiệu xin viện trợ."
  },
  {
    id: 171,
    word: "发达",
    pinyin: "Fādá",
    type: "（形）",
    meaning: "phát triển",
    example: "我国南方经济很发达。",
    pinyinExample: "Wǒguó nánfāng jīngjì hěn fādá.",
    exampleMeaning: "Miền Nam nước tôi có nền kinh tế rất phát triển."
  },
  {
    id: 172,
    word: "发动",
    pinyin: "fādòng",
    type: "（动）",
    meaning: "phát động, bắt đầu, khởi động",
    example: "司机发动汽车了。",
    pinyinExample: "Sījī fādòng qìchēle.",
    exampleMeaning: "Tài xế khởi động xe rồi."
  },
  {
    id: 173,
    word: "发明",
    pinyin: "fāmíng",
    type: "（动，名）",
    meaning: "phát minh",
    example: "爱迪生发明的东西有一千多种。",
    pinyinExample: "Àidíshēng fāmíng de dōngxī yǒu yīqiān duō zhǒng.",
    exampleMeaning: "Edison có hơn một ngàn các loại phát minh."
  },
  {
    id: 174,
    word: "发生",
    pinyin: "fāshēng",
    type: "（动）",
    meaning: "sinh ra, xảy ra, sản sinh",
    example: "这件事是什么时候发生的？",
    pinyinExample: "Zhè jiàn shì shì shénme shíhòu fāshēng de?",
    exampleMeaning: "Chuyện này xảy ra vào lúc nào vậy?"
  },
  {
    id: 175,
    word: "发送",
    pinyin: "fāsòng",
    type: "（动）",
    meaning: "gửi, phát sóng, phát tín hiệu",
    example: "电子邮件已经发送了。",
    pinyinExample: "Diànzǐ yóujiàn yǐjīng fāsòngle.",
    exampleMeaning: "Email đã được gửi đi rồi."
  },
  {
    id: 176,
    word: "友曰",
    pinyin: "yǒu yuē",
    type: "（动、名）",
    meaning: "phát biểu, phát biểu j kiến",
    example: "大会上各位代表做了精彩的发言。",
    pinyinExample: "Dàhuì shàng gèwèi dàibiǎo zuòle jīngcǎi de fǎ yán.",
    exampleMeaning: "Trong đại hội, các vị đại biêu đã có những phát biêu đặc sắc."
  },
  {
    id: 177,
    word: "发展",
    pinyin: "fāzhǎn",
    type: "（动、名）",
    meaning: "phát triển, mở rộng",
    example: "我国旅游业发展很快。",
    pinyinExample: "Wǒguó lǚyóu yè fāzhǎn hěn kuài.",
    exampleMeaning: "Ngành du lịch của nước tôi phát triển rất nhanh."
  },
  {
    id: 178,
    word: "反对",
    pinyin: "fǎnduì",
    type: "（动）",
    meaning: "phản đối",
    example: "我反对你 这个意见",
    pinyinExample: "Wǒ fǎnduì nǐ zhège yìjiàn",
    exampleMeaning: "Tôi phản đối j kiến này của bạn."
  },
  {
    id: 179,
    word: "反复",
    pinyin: "fǎnfù",
    type: "（副、名）",
    meaning: "nhiều lần, lặp đi lặp lại",
    example: "反复思考后，我终于找到解决的方 法。",
    pinyinExample: "fǎnfù sīkǎo hòu, wǒ zhōngyú zhǎodào jiějué de fāngfǎ.",
    exampleMeaning: "Sau nhiều lần suy nghĩ, cuối cùng tôi đã tìm được phương pháp giải quyết."
  },
  {
    id: 180,
    word: "反应",
    pinyin: "fǎnyìng",
    type: "（名， 动）",
    meaning: "phán ứng",
    example: "我喊了他半天，他都没有反应。",
    pinyinExample: "Wǒ hǎnle tā bàntiān, tā dōu méiyǒu fǎnyìng.",
    exampleMeaning: "Tôi gọi anh ta nửa ngày trời, anh ta đêu không có phản ứng."
  },
  {
    id: 181,
    word: "反正",
    pinyin: "fǎnzhèng",
    type: "（副）",
    meaning: "dù sao, dẫu sao thì…",
    example: "反正他也做不到。",
    pinyinExample: "Fǎnzhèng tā yě zuò bù dào.",
    exampleMeaning: "Dù sao thì anh ta cũng không làm được."
  },
  {
    id: 182,
    word: "范围",
    pinyin: "fànwéi",
    type: "（名）",
    meaning: "phạm vi",
    example: "这不是我的研究范围。",
    pinyinExample: "Zhè bùshì wǒ de yánjiū fànwéi.",
    exampleMeaning: "Đây không phải là phạm vi nghiên cứu của tôi."
  },
  {
    id: 183,
    word: "方式",
    pinyin: "fāngshì",
    type: "（名）",
    meaning: "cách, phương thức, cách thức",
    example: "他们两人有不同的处理方 式。",
    pinyinExample: "Tāmen liǎng rén yǒu bùtóng de chǔlǐ fāngshì.",
    exampleMeaning: "Hai người họ có cách xử lí khác nhau."
  },
  {
    id: 184,
    word: "防",
    pinyin: "fáng",
    type: "（动）",
    meaning: "phòng bị, đề phòng",
    example: "女孩子一定要有自己防坏人的方式",
    pinyinExample: "Nǚ háizi yīdìng yào yǒu zìjǐ fáng huàirén de fāngshì",
    exampleMeaning: "Con gái nhất định phải có cách đê phòng người xấu cho chính mình."
  },
  {
    id: 185,
    word: "防止",
    pinyin: "fángzhǐ",
    type: "（动）",
    meaning: "phòng, phòng ngừa, đề phòng",
    example: "骑车要小心，防止发生事故。",
    pinyinExample: "qí chē yào xiǎoxīn, fángzhǐ fāshēng shìgù.",
    exampleMeaning: "Lái xe phải cẩn thận, đề phòng xảy ra sự cố."
  },
  {
    id: 186,
    word: "房东",
    pinyin: "fángdōng",
    type: "（名）",
    meaning: "chủ nhà, chủ cho thuê nhà",
    example: "房东让我半年交一次房租。",
    pinyinExample: "Fángdōng ràng wǒ bànnián jiāo yīcì fángzū.",
    exampleMeaning: "Chủ thuê bảo tôi nửa năm đóng tiền nhà một lần."
  },
  {
    id: 187,
    word: "房屋",
    pinyin: "fángwū",
    type: "（名）",
    meaning: "nhà, căn nhà, tòa nhà",
    example: "我挺喜欢这个房屋的位置",
    pinyinExample: "Wǒ tǐng xǐhuān zhège fángwū de wèizhì",
    exampleMeaning: "Tôi khá thích vị trí của căn phòng này."
  },
  {
    id: 188,
    word: "房租",
    pinyin: "fángzū",
    type: "（名）",
    meaning: "tiền nhà, tiền phòng",
    example: "这里的房租很贵。",
    pinyinExample: "zhèlǐ de fángzū hěn guì.",
    exampleMeaning: "Tiền thuê phòng ở đây rất đắt."
  },
  {
    id: 189,
    word: "访问",
    pinyin: "fǎngwèn",
    type: "（动）",
    meaning: "phỏng vấn",
    example: "欢迎你们来我们学校参观访问。",
    pinyinExample: "Huānyíng nǐmen lái wǒmen xuéxiào cānguān fǎngwèn.",
    exampleMeaning: "Hoan nghênh mọi người đên tham quan phỏng vấn trường tôi."
  },
  {
    id: 190,
    word: "放到",
    pinyin: "fàng dào",
    type: "（动）",
    meaning: "đặt vào, đặt lên",
    example: "把书放到桌子上。",
    pinyinExample: "Bǎ shū fàng dào zhuōzi shàng.",
    exampleMeaning: "Để sách ở trên bàn đi."
  },
  {
    id: 191,
    word: "飞行",
    pinyin: "fēixíng",
    type: "（动）",
    meaning: "bay, phi hành, phi",
    example: "飞机的飞行高度是一万米。",
    pinyinExample: "Fēijī de fēi háng gāodù shì yī wàn mǐ.",
    exampleMeaning: "Độ cao của chuyến bay là mười nghìn mét."
  },
  {
    id: 192,
    word: "费",
    pinyin: "Fèi",
    type: "（动、名）",
    meaning: "phí, chi phí",
    example: "记得交这个月的水电费。",
    pinyinExample: "Jìdé jiāo zhège yuè de shuǐdiàn fèi.",
    exampleMeaning: "Hãy nhớ giao phí tiền điện nước tháng này."
  },
  {
    id: 193,
    word: "费用",
    pinyin: "fèiyòng",
    type: "（名）",
    meaning: "phí tổn, chi phí, chi tiêu",
    example: "这几个月家里费用太大了。",
    pinyinExample: "Zhè jǐ gè yuè jiālǐ fèiyòng tài dàle.",
    exampleMeaning: "Chi phí trong nhà tháng này nhiều quá."
  },
  {
    id: 194,
    word: "分别",
    pinyin: "fēnbié",
    type: "（动，副）",
    meaning: "ly biệt, chia tay, biệt ly",
    example: "他们分别了很多年。",
    pinyinExample: "Tāmen fēnbiéle hěnduō nián.",
    exampleMeaning: "Hai người họ đã chia tay rất nhiều năm rồi."
  },
  {
    id: 195,
    word: "分配",
    pinyin: "fēnpèi",
    type: "（动）",
    meaning: "phân phối, bố trí",
    example: "毕业后，他被分配到一家工厂工作",
    pinyinExample: "Bìyè hòu, tā bèi fēnpèi dào yījiā gōngchǎng gōngzuò",
    exampleMeaning: "Sau khi tốt nghiệp, anh ấy được bô trí tới một nhà máy làm viêc."
  },
  {
    id: 196,
    word: "分组",
    pinyin: "fēnzǔ",
    type: "（动）",
    meaning: "chia tổ, chia nhóm",
    example: "按每组三个人来分 组。",
    pinyinExample: "àn měi zǔ sān gèrén lái fēnzǔ.",
    exampleMeaning: "Dựa theo 3 người một nhóm để chia tổ."
  },
  {
    id: 197,
    word: "丰富",
    pinyin: "fēngfù",
    type: "（形）",
    meaning: "phong phú",
    example: "我们学校的课外活动很丰富。",
    pinyinExample: "Wǒmen xuéxiào de kèwài huódòng hěn fēngfù.",
    exampleMeaning: "Hoạt động ngoại khóa ở trường chúng tôi rât phong phú."
  },
  {
    id: 198,
    word: "风险",
    pinyin: "fēngxiǎn",
    type: "（名）",
    meaning: "phiêu lưu, mạo hiểm",
    example: "做生意都有风险。",
    pinyinExample: "Zuò shēngyì dōu yǒu fēngxiǎn.",
    exampleMeaning: "Làm ăn thì đều có mạo hiểm."
  },
  {
    id: 199,
    word: "否定",
    pinyin: "fǒudìng",
    type: "（动、形）",
    meaning: "phủ định, chối bỏ, phủ nhận",
    example: "经理否定他的意见。",
    pinyinExample: "Jīnglǐ fǒudìng tā de yìjiàn.",
    exampleMeaning: "Giám đốc phủ nhận j kiến của anh ấy."
  },
  {
    id: 200,
    word: "否认",
    pinyin: "fǒurèn",
    type: "（动）",
    meaning: "phủ nhận, bác bỏ",
    example: "她否认这件事是她做的。",
    pinyinExample: "Tā fǒurèn zhè jiàn shì shì tā zuò de.",
    exampleMeaning: "Cô ấy không thừa nhận chuyện này là cô ấy làm."
  },
  {
    id: 201,
    word: "服装",
    pinyin: "fúzhuāng",
    type: "（名）",
    meaning: "quần áo, trang phục",
    example: "妈妈在一家服装公司工作。",
    pinyinExample: "Māmā zài yījiā fúzhuāng gōngsī gōngzuò.",
    exampleMeaning: "Mẹ làm ở một công ty về trang phục."
  },
  {
    id: 202,
    word: "福",
    pinyin: "fú",
    type: "（名）",
    meaning: "phúc, hạnh phúc",
    example: "老人们常说，能吃是福。",
    pinyinExample: "Lǎorénmen cháng shuō, néng chī shì fú.",
    exampleMeaning: "Người xưa thường nói, ăn được là phúc."
  },
  {
    id: 203,
    word: "父母",
    pinyin: "fùmǔ",
    type: "（名）",
    meaning: "cha mẹ, bố mẹ",
    example: "父母应该鼓励自己的孩子努力学习",
    pinyinExample: "Fùmǔ yīnggāi gǔlì zìjǐ de háizi nǔlì xuéxí",
    exampleMeaning: "Cha mẹ nên khích lệ con mình nỗ lực học tập."
  },
  {
    id: 204,
    word: "父亲",
    pinyin: "fùqīn",
    type: "（名）",
    meaning: "cha, bố",
    example: "我的父亲是小学老 师。",
    pinyinExample: "wǒ de fùqīn shì xiǎoxué lǎoshī.",
    exampleMeaning: "Bố tôi là giáo viên tiểu học."
  },
  {
    id: 205,
    word: "付",
    pinyin: "fù",
    type: "（动）",
    meaning: "chi trả",
    example: "钱我已经付了。",
    pinyinExample: "Qián wǒ yǐjīng fùle.",
    exampleMeaning: "Tôi đã trả tiên rồi"
  },
  {
    id: 206,
    word: "负责",
    pinyin: "fùzé",
    type: "（动、形）",
    meaning: "chịu trách nhiệm",
    example: "这件事由你负责。",
    pinyinExample: "Zhè jiàn shìyóu nǐ fùzé.",
    exampleMeaning: "Chuyện này do bạn chịu trách nhiệm."
  },
  {
    id: 207,
    word: "复印",
    pinyin: "fùyìn",
    type: "（动）",
    meaning: "photocopy, sao chép",
    example: "这个资料我复印了十份。",
    pinyinExample: "Zhège zīliào wǒ fùyìnle shí fèn.",
    exampleMeaning: "Tài liệu này tôi đã photo ra 10 bản."
  },
  {
    id: 208,
    word: "复杂",
    pinyin: "fùzá",
    type: "（形）",
    meaning: "phức tạp, rắc rối",
    example: "这个问题很复杂。",
    pinyinExample: "Zhège wèntí hěn fùzá.",
    exampleMeaning: "Vấn đề này rất phức tạp."
  },
  {
    id: 209,
    word: "富",
    pinyin: "fù",
    type: "（形）",
    meaning: "giàu có",
    example: "他一定成为一个非常富的人。",
    pinyinExample: "Tā yīdìng chéngwéi yīgè fēicháng fù de rén.",
    exampleMeaning: "Anh ấy nhất định trở thành một người rất giàu có."
  },
  {
    id: 210,
    word: "改进",
    pinyin: "gǎijìn",
    type: "（动）",
    meaning: "cái tiến, cải thiện, trau dồi",
    example: "他改进了学习方法。",
    pinyinExample: "Tā gǎijìnle xuéxí fāngfǎ.",
    exampleMeaning: "Anh ấy cải tiến phương pháp dạy học."
  },
  {
    id: 211,
    word: "改造",
    pinyin: "gǎizào",
    type: "（动）",
    meaning: "cải tạo, sửa đổi, sửa lại",
    example: "劳动能改造世界。",
    pinyinExample: "Láodòng néng gǎizào shìjiè.",
    exampleMeaning: "Lao động có thể cải tạo thế giới."
  },
  {
    id: 212,
    word: "概念",
    pinyin: "gàiniàn",
    type: "（名）",
    meaning: "khái niệm, quan niệm, j niệm",
    example: "今天，老师已经讲了一个新概念。",
    pinyinExample: "Jīntiān, lǎoshī yǐjīng jiǎngle yīgè xīn gàiniàn.",
    exampleMeaning: "Hôm nay, thầy giáo đã giảng một khái niệm mới."
  },
  {
    id: 213,
    word: "赶",
    pinyin: "gǎn",
    type: "（动）",
    meaning: "đuổi, vội vàng, đi, đến",
    example: "你在前头走，我在后头赶。",
    pinyinExample: "Nǐ zài qiántou zǒu, wǒ zài hòutou gǎn.",
    exampleMeaning: "Anh đi trước, tôi đuổi theo sau."
  },
  {
    id: 214,
    word: "赶到",
    pinyin: "gǎn dào",
    type: "（动）",
    meaning: "khi, đến khi",
    example: "赶到他们来机场，我就走了。",
    pinyinExample: "Gǎn dào tāmen lái jīchǎng, wǒ jiù zǒule.",
    exampleMeaning: "Đến khi họ đến sân bay, tôi đã đi rồi."
  },
  {
    id: 215,
    word: "赶紧",
    pinyin: "Gǎnjǐn",
    type: "（副）",
    meaning: "tranh thủ thời gian, vội vàng",
    example: "他生病了 ，要赶快送他去医院。",
    pinyinExample: "Tā shēngbìngle, yào gǎnkuài sòng tā qù yīyuàn.",
    exampleMeaning: "Anh ấy ốm rồi, phải nhanh chóng đưa anh ấy đi bệnh viên."
  },
  {
    id: 216,
    word: "赶快",
    pinyin: "gǎnkuài",
    type: "（副）",
    meaning: "nhanh, khẩn trương, vội vã",
    example: "时间不早了，我们赶快走吧。",
    pinyinExample: "Shíjiān bù zǎole, wǒmen gǎnkuài zǒu ba.",
    exampleMeaning: "Thời gian không còn sớm nữa, chúng ta mau đi thôi."
  },
  {
    id: 217,
    word: "敢",
    pinyin: "gǎn",
    type: "（动）",
    meaning: "dám",
    example: "我不敢告 诉他。",
    pinyinExample: "Wǒ bù gǎn gàosù tā.",
    exampleMeaning: "Tôi không dám nói với anh ấy."
  },
  {
    id: 218,
    word: "感冒",
    pinyin: "gǎnmào",
    type: "（名、 动）",
    meaning: "Cảm, cảm cúm",
    example: "弟弟的感冒还没 好。",
    pinyinExample: "Dìdì de gǎnmào hái méi hǎo.",
    exampleMeaning: "Em trai vẫn chưa khỏi cảm cúm."
  },
  {
    id: 219,
    word: "感情",
    pinyin: "gǎnqíng",
    type: "（名）",
    meaning: "tình cảm",
    example: "同学之间的感情非常好。",
    pinyinExample: "Tóngxué zhī jiān de gǎnqíng fēicháng hǎo.",
    exampleMeaning: "Tình cảm giữa các bạn học cực kj tôt."
  },
  {
    id: 220,
    word: "感受",
    pinyin: "gǎnshòu",
    type: "（动、名）",
    meaning: "cảm nhận",
    example: "我感受到他们的热情。",
    pinyinExample: "Wǒ gǎnshòu dào tāmen de rèqíng.",
    exampleMeaning: "Tôi cảm nhận được sự nhiệt tình của bọn họ."
  },
  {
    id: 221,
    word: "干吗",
    pinyin: "gànma",
    type: "（代）",
    meaning: "làm sao, làm cái gì, làm",
    example: "干吗想那么多。",
    pinyinExample: "Gànma xiǎng nàme duō.",
    exampleMeaning: "Làm sao mà phải suy nghĩ nhiều thế."
  },
  {
    id: 222,
    word: "高速",
    pinyin: "gāosù",
    type: "（形）",
    meaning: "nhanh chóng, tôc độ cao",
    example: "我们国家的经济在高速发展。",
    pinyinExample: "Wǒmen guójiā de jīngjì zài gāosù fāzhǎn.",
    exampleMeaning: "Kinh tế của quốc gia chúng tôi đang phát triển nhanh chóng."
  },
  {
    id: 223,
    word: "高速公",
    pinyin: "gāosù gōng",
    type: "（名）",
    meaning: "đường cao tốc",
    example: "我在高速公路上开车。",
    pinyinExample: "Wǒ zài gāosù gōnglù shàng kāichē.",
    exampleMeaning: "Tôi đang lái xe trên đường cao tốc."
  },
  {
    id: 224,
    word: "告别",
    pinyin: "gào bié",
    type: "（动）",
    meaning: "cáo từ, tạm biệt",
    example: "他告别家人和朋友 ，一个人去中国留学。",
    pinyinExample: "Tā gàobié jiārén hé péngyǒu, yīgèrén qù zhōngguó liúxué.",
    exampleMeaning: "Anh ấy tạm biệt người thân và bạn bè, một mình đi Trung Quốc du học."
  },
  {
    id: 225,
    word: "歌迷",
    pinyin: "gēmí",
    type: "（名）",
    meaning: "fan của ca sĩ",
    example: "因为他唱得很好听 ，所以有很多的歌迷。",
    pinyinExample: "Yīnwèi tā chàng dé hěn hǎotīng, suǒyǐ yǒu hěnduō de gēmí.",
    exampleMeaning: "Bởi vì anh ấy hát hay nên có rất nhiều fan hâm mộ"
  },
  {
    id: 226,
    word: "歌声",
    pinyin: "gēshēng",
    type: "（名）",
    meaning: "tiếng hát, giọng hát",
    example: "我没有听过这么好听的歌 声。",
    pinyinExample: "Wǒ méiyǒu tīngguò zhème hǎotīng de gēshēng.",
    exampleMeaning: "Tôi chưa từng nghe qua giọng hát nào hay như vậy."
  },
  {
    id: 227,
    word: "歌手",
    pinyin: "gēshǒu",
    type: "（名）",
    meaning: "ca sĩ",
    example: "这位歌手在世界上非常有 名。",
    pinyinExample: "Zhè wèi gēshǒu zài shìjiè shàng fēicháng yǒumíng.",
    exampleMeaning: "Ca sĩ này rất nổi tiếng trên thê giới."
  },
  {
    id: 228,
    word: "个人",
    pinyin: "gèrén",
    type: "（名）",
    meaning: "cá nhân, riêng tôi",
    example: "我个人认为，这个办法很合理。",
    pinyinExample: "Wǒ gè rén rènwéi, zhège bànfǎ hěn hélǐ.",
    exampleMeaning: "Cá nhân tôi cho rằng, cách làm này rất hợp lj."
  },
  {
    id: 229,
    word: "个性",
    pinyin: "gèxìng",
    type: "（名）",
    meaning: "cá tính, tính cách riêng",
    example: "她是一个很有个性的人。",
    pinyinExample: "Tā shì yīgè hěn yǒu gèxìng de rén.",
    exampleMeaning: "Cô ấy là một người có cá tính rất riêng."
  },
  {
    id: 230,
    word: "各",
    pinyin: "gè",
    type: "（代、副）",
    meaning: "các, những, mọi, tất cả",
    example: "这本词典的各字解释我都懂了。",
    pinyinExample: "Zhè běn cídiǎn de gèzì jiěshì wǒ dū dǒngle.",
    exampleMeaning: "Tôi đã hiểu sự giải thích của các từ trong cuốn từ điển này rồi."
  },
  {
    id: 231,
    word: "各地",
    pinyin: "gèdì",
    type: "（名）",
    meaning: "mọi nơi",
    example: "世界各地都在努力发展经 济。",
    pinyinExample: "Shìjiè gèdì dōu zài nǔlì fāzhǎn jīngjì.",
    exampleMeaning: "Các nơi trên thế giới đều đang nỗ lực phát triển kinh tế."
  },
  {
    id: 232,
    word: "各位",
    pinyin: "gèwèi",
    type: "（代）",
    meaning: "các vị, các ngài, mọi người",
    example: "感谢各位教授的帮助。",
    pinyinExample: "Gǎnxiè gèwèi jiàoshòu de bāngzhù.",
    exampleMeaning: "Cảm ơn sự giúp đỡ của các vị giáo sư."
  },
  {
    id: 233,
    word: "各种",
    pinyin: "gè zhǒng",
    type: "（代）",
    meaning: "các loại",
    example: "图书馆里有各种各样的书。",
    pinyinExample: "Túshū guǎn li yǒu gè zhǒng gè yàng de shū.",
    exampleMeaning: "Trong thư viện có tất cả các loại sách."
  },
  {
    id: 234,
    word: "各自",
    pinyin: "gèzì",
    type: "（代）",
    meaning: "từng người, riêng phần mình",
    example: "下课以后 ，大家各自回家了。",
    pinyinExample: "Xiàkè yǐhòu, dàjiā gè zì huí jiāle.",
    exampleMeaning: "Sau khi tan học, mọi người ai về nhà nấy."
  },
  {
    id: 235,
    word: "根本",
    pinyin: "Gēnběn",
    type: "（副、名、形)",
    meaning: "căn bản, hoàn toàn, chủ yếu",
    example: "我们应该从根本上解决这个问题。",
    pinyinExample: "Wǒmen yīnggāi cóng gēnběn shàng jiějué zhège wèntí.",
    exampleMeaning: "Chúng ta nên giải quyết vấn để này từ điều căn bản."
  },
  {
    id: 236,
    word: "更加",
    pinyin: "gèngjiā",
    type: "（副）",
    meaning: "càng, thêm, hơn nữa",
    example: "姐姐上中学后 ，更加努力学习。",
    pinyinExample: "Jiějiě shàng zhōngxué hòu, gèngjiā nǔlì xuéxí.",
    exampleMeaning: "Chị gái sau khi lên trung học thì càng nỗ lực học tập hơn."
  },
  {
    id: 237,
    word: "工厂",
    pinyin: "gōngchǎng",
    type: "（名）",
    meaning: "công xưởng, nhà máy",
    example: "我在服装工厂工作。",
    pinyinExample: "Wǒ zài fúzhuāng gōngchǎng gōngzuò.",
    exampleMeaning: "Tôi làm vệc trong xưởng may mặc."
  },
  {
    id: 238,
    word: "工程 师",
    pinyin: "gōngchéngsh ī",
    type: "（名）",
    meaning: "kĩ sư, người thiết kế",
    example: "他是一位十分优秀的工程 师。",
    pinyinExample: "Tā shì yī wèi shífēn yōuxiù de gōngchéngshī.",
    exampleMeaning: "Anh ấy là một kỹ sư vô cùng ưu tú."
  },
  {
    id: 239,
    word: "工夫",
    pinyin: "gōngfū",
    type: "（名）",
    meaning: "thời gian, thì giờ, công sức",
    example: "我有很多工作要做，没有工夫看电视。",
    pinyinExample: "Wǒ yǒu hěnduō gōngzuò yào zuò, méiyǒu gōngfū kàn diànshì.",
    exampleMeaning: "Tôi có rất nhiều việc cần làm, không có thời gian xem TV."
  },
  {
    id: 240,
    word: "工具",
    pinyin: "gōngjù",
    type: "（名）",
    meaning: "công cụ, phương tiện",
    example: "手机是我们传消息的工具。",
    pinyinExample: "Shǒujī shì wǒmen chuán xiāoxī de gōngjù.",
    exampleMeaning: "Điện thoại là công cụ dùng để truyền tin tức của chúng ta."
  },
  {
    id: 241,
    word: "工业",
    pinyin: "gōngyè",
    type: "（名）",
    meaning: "công nghiệp, kỹ nghệ",
    example: "我国的服装工业发展很快。",
    pinyinExample: "Wǒguó de fúzhuāng gōngyè fāzhǎn hěn kuài.",
    exampleMeaning: "Ngành công nghiệp may mặc của nước tôi phát triển rất nhanh."
  },
  {
    id: 242,
    word: "工资",
    pinyin: "gōngzī",
    type: "（名）",
    meaning: "lương, tiền lương",
    example: "我的工资不 高。",
    pinyinExample: "Wǒ de gōngzī bù gāo.",
    exampleMeaning: "Lương của tôi không cao."
  },
  {
    id: 243,
    word: "公布",
    pinyin: "gōngbù",
    type: "（动）",
    meaning: "công bố",
    example: "考试成绩还没公布。",
    pinyinExample: "Kǎoshì chéngjī hái méi gōngbù.",
    exampleMeaning: "Kết quả thi vẫn chưa được công bố."
  },
  {
    id: 244,
    word: "公共",
    pinyin: "gōnggòng",
    type: "（形）",
    meaning: "công công",
    example: "在公共场所请不要大声说 话。",
    pinyinExample: "Zài gōnggòng chǎngsuǒ qǐng bùyào dàshēng shuōhuà.",
    exampleMeaning: "Đừng nói to tại nơi công cộng ."
  },
  {
    id: 245,
    word: "公开",
    pinyin: "gōngkāi",
    type: "（动、形）",
    meaning: "công khai",
    example: "这件事还没有调查清楚，不能公开",
    pinyinExample: "Zhè jiàn shì hái méiyǒu diàochá qīngchǔ, bùnéng gōngkāi",
    exampleMeaning: "Chuyện này vẫn chưa điều tra rõ ràng, không thể công bố ra ngoài."
  },
  {
    id: 246,
    word: "公民",
    pinyin: "gōngmín",
    type: "（名）",
    meaning: "công dân",
    example: "这是每一个公民的义务。",
    pinyinExample: "zhè shì měi yīgè gōngmín de yìwù.",
    exampleMeaning: "Đây là nghĩa vụ của mỗi công dân."
  },
  {
    id: 247,
    word: "公务员",
    pinyin: "gōngwùyuán",
    type: "（名）",
    meaning: "nhân viên công vụ, công chức",
    example: "大学毕业后我想考公务员。",
    pinyinExample: "Dàxué bìyè hòu wǒ xiǎng kǎo gōngwùyuán.",
    exampleMeaning: "Tốt nghiệp đại học xong tôi muốn đi thi công chức."
  },
  {
    id: 248,
    word: "功夫",
    pinyin: "gōngfū",
    type: "（名）",
    meaning: "bản lĩnh, trình độ, công sức",
    example: "只要下功夫，你一定得到好成绩。",
    pinyinExample: "Zhǐyào xià gōngfū, nǐ yīdìng dédào hǎo chéngjī.",
    exampleMeaning: "Chỉ cấn bỏ ra công sức, bạn nhất định sẽ đạt được thành tích tốt."
  },
  {
    id: 249,
    word: "功课",
    pinyin: "gōngkè",
    type: "（名）",
    meaning: "bài tập, môn học",
    example: "他每门功课都很好。",
    pinyinExample: "Tā měi mén gōngkè dōu hěn hǎo.",
    exampleMeaning: "Môn nào anh ấy học cũng rất tốt."
  },
  {
    id: 250,
    word: "功能",
    pinyin: "gōngnéng",
    type: "（名）",
    meaning: "chức năng, tác dụng",
    example: "手机的功能越来越多了。",
    pinyinExample: "Shǒujī de gōngnéng yuè lái yuè duōle.",
    exampleMeaning: "Tính năng của điện thoại càng ngày càng nhiều."
  },
  {
    id: 251,
    word: "共同",
    pinyin: "gòngtóng",
    type: "（形）",
    meaning: "cùng, chung, cùng nhau",
    example: "我们要共同努力。",
    pinyinExample: "Wǒmen yào gòngtóng nǔlì.",
    exampleMeaning: "Chúng ta phải cùng nhau nỗ lực."
  },
  {
    id: 252,
    word: "共有",
    pinyin: "gòngyǒu",
    type: "（动）",
    meaning: "cùng có, chung, tổng cộng",
    example: "我们班共有三十二名学生。",
    pinyinExample: "Wǒmen bān gòngyǒu sānshí’èr míng xuéshēng.",
    exampleMeaning: "Lớp chúng tôi tổng cộng có 32 học sinh."
  },
  {
    id: 253,
    word: "姑娘",
    pinyin: "gūniáng",
    type: "（名）",
    meaning: "cô gái",
    example: "这个姑娘是王老师的女儿。",
    pinyinExample: "Zhège gūniáng shì wáng lǎoshī de nǚ’ér.",
    exampleMeaning: "Cô gái này là con gái của thầy Vương."
  },
  {
    id: 254,
    word: "古",
    pinyin: "gǔ",
    type: "（形）",
    meaning: "cổ, xưa, lâu đời",
    example: "这个城市故得很",
    pinyinExample: "Zhège chéngshì gù dé hěn",
    exampleMeaning: "Thành phố này đã rât lâu đời rồi."
  },
  {
    id: 255,
    word: "古代",
    pinyin: "gǔdài",
    type: "（名）",
    meaning: "cổ đại",
    example: "我喜欢研究古代文 化。",
    pinyinExample: "wǒ xǐhuān yánjiū gǔdài wénhuà.",
    exampleMeaning: "Tôi thích nghiên cứu văn hóa cổ đại."
  },
  {
    id: 256,
    word: "故乡",
    pinyin: "Gùxiāng",
    type: "（名）",
    meaning: "quê hương",
    example: "我在国外常想回到故乡。",
    pinyinExample: "Wǒ zài guówài cháng xiǎng huí dào gùxiāng.",
    exampleMeaning: "Tôi ở nước ngoài luôn muôn trở vê quê hương."
  },
  {
    id: 257,
    word: "挂",
    pinyin: "guà",
    type: "（动）",
    meaning: "treo",
    example: "把画儿挂在墙上。",
    pinyinExample: "Bǎ huà er guà zài qiáng shàng.",
    exampleMeaning: "Treo bức tranh lên trên tường."
  },
  {
    id: 258,
    word: "关系",
    pinyin: "guānxì",
    type: "（动、名）",
    meaning: "liên quan đến, quan hệ đến",
    example: "这件事和我没有关系。",
    pinyinExample: "Zhè jiàn shì hé wǒ méiyǒu guānxì.",
    exampleMeaning: "Việc này không liên quan đến tôi."
  },
  {
    id: 259,
    word: "关注",
    pinyin: "guānzhù",
    type: "（动）",
    meaning: "quan tâm",
    example: "全国人民十分关注教育事业的发展",
    pinyinExample: "Quánguó rénmín shífēn guānzhù jiàoyù shìyè de fǎ zhǎn",
    exampleMeaning: "Người dân trên cả nước rất quan tâm đến phát triển sự nghiệp giáo dục."
  },
  {
    id: 260,
    word: "观察",
    pinyin: "guānchá",
    type: "（动）",
    meaning: "quan sát",
    example: "只要多观察，就会发现新办法。",
    pinyinExample: "zhǐyào duō guānchá, jiù huì fāxiàn xīn bànfǎ.",
    exampleMeaning: "Chỉ cần quan sát nhiều sẽ phát hiện thêm phương pháp mới."
  },
  {
    id: 261,
    word: "观看",
    pinyin: "guānkàn",
    type: "（动）",
    meaning: "xem, tham quan",
    example: "我们观看篮球比赛。",
    pinyinExample: "Wǒmen guānkàn lánqiú bǐsài.",
    exampleMeaning: "Chúng tôi xem trận đấu bóng rô."
  },
  {
    id: 262,
    word: "观念",
    pinyin: "guānniàn",
    type: "（名）",
    meaning: "quan niệm, tư tưởng, j thức",
    example: "每个人都有不同的观念。",
    pinyinExample: "Měi gèrén dōu yǒu bùtóng de guānniàn.",
    exampleMeaning: "Mỗi người đều có quan niệm khác nhau."
  },
  {
    id: 263,
    word: "观众",
    pinyin: "guānzhòng",
    type: "（名）",
    meaning: "khán giả, công chúng",
    example: "电影快开始了，请观众们走进电影院。",
    pinyinExample: "Diànyǐng kuài kāishǐle, qǐng guānzhòngmen zǒu jìn diànyǐngyuàn.",
    exampleMeaning: "Phim sắp chiếu rồi, các khán giả xin hãy nhanh chóng vào rạp."
  },
  {
    id: 264,
    word: "管",
    pinyin: "guǎn",
    type: "（动）",
    meaning: "quản, cai quản, quản lj",
    example: "这件事我不想管。",
    pinyinExample: "Zhè jiàn shì wǒ bùxiǎng guǎn.",
    exampleMeaning: "Tôi không muốn quản lj chuyện này nữa."
  },
  {
    id: 265,
    word: "管理",
    pinyin: "guǎnlǐ",
    type: "（动）",
    meaning: "quản lj",
    example: "校长把学校管理得很好。",
    pinyinExample: "Xiàozhǎng bǎ xuéxiào guǎnlǐ dé hěn hǎo.",
    exampleMeaning: "Hiệu trưởng quản lj ngôi trường này rất tốt."
  },
  {
    id: 266,
    word: "光",
    pinyin: "guāng",
    type: "（副、名、形）",
    meaning: "ánh sáng",
    example: "这盏灯光不够亮。",
    pinyinExample: "Zhè zhǎn dēngguāng bùgòu liàng.",
    exampleMeaning: "Cái đèn này không đủ sáng."
  },
  {
    id: 267,
    word: "光明",
    pinyin: "guāngmín g",
    type: "（名、形）",
    meaning: "ánh sáng, sáng ngời",
    example: "太阳给我们带来光明。",
    pinyinExample: "Tàiyáng gěi wǒmen dài lái guāngmíng.",
    exampleMeaning: "Mặt trời mang lại ánh sáng cho chúng ta."
  },
  {
    id: 268,
    word: "广播",
    pinyin: "guǎngbò",
    type: "（动、名）",
    meaning: "phát thanh, truyền hình",
    example: "他爷爷每天晚上都听广播。",
    pinyinExample: "Tā yéyé měitiān wǎnshàng dū tīng guǎngbò.",
    exampleMeaning: "Ông nội của anh ấy tối nào cũng nghe đài phát thanh."
  },
  {
    id: 269,
    word: "广大",
    pinyin: "guǎngdà",
    type: "（形）",
    meaning: "rộng, rộng lớn",
    example: "你能找一个更广大的地方 吗？",
    pinyinExample: "Nǐ néng zhǎo yīgè gèng guǎngdà dì dìfāng ma?",
    exampleMeaning: "Bạn có thể tìm một nơi rộng hơn không?"
  },
  {
    id: 270,
    word: "规定",
    pinyin: "guīdìng",
    type: "（动、名）",
    meaning: "quy định",
    example: "不能超过规定的日期。",
    pinyinExample: "Bùnéng chāoguò guīdìng de rìqí.",
    exampleMeaning: "Không được quá thời gian được quy định."
  },
  {
    id: 271,
    word: "规范",
    pinyin: "guīfàn",
    type: "（形、名、动）",
    meaning: "quy tắc, nề nếp, quy phạm",
    example: "我们应该制定相对应的规范。",
    pinyinExample: "Wǒmen yīnggāi zhìdìng xiāng duìyìng de guīfàn.",
    exampleMeaning: "Chúng ta nên lập ra quy tắc tương ứng."
  },
  {
    id: 272,
    word: "国内",
    pinyin: "guónèi",
    type: "（名）",
    meaning: "trong nước",
    example: "这部电影在国内很有名。",
    pinyinExample: "Zhè bù diànyǐng zài guónèi hěn yǒumíng.",
    exampleMeaning: "Bộ phim điện ảnh này rất nổi tiếng ở trong nước."
  },
  {
    id: 273,
    word: "国庆",
    pinyin: "guóqìng",
    type: "（名）",
    meaning: "quốc khánh",
    example: "九月二号是越南的国庆节。",
    pinyinExample: "Jiǔ yuè èr hào shì yuènán de guóqìng jié.",
    exampleMeaning: "Mùng 2 tháng 9 là Quốc khánh Việt Nam."
  },
  {
    id: 274,
    word: "果然",
    pinyin: "guǒrán",
    type: "（副）",
    meaning: "quả nhiên",
    example: "天气预报说今天有雨，果然下雨了",
    pinyinExample: "Tiānqì yùbào shuō jīntiān yǒu yǔ, guǒrán xià yǔle",
    exampleMeaning: "Dự báo thời tiết nói hôm nay có mưa, quả nhiên trời đổ mưa thật."
  },
  {
    id: 275,
    word: "果汁",
    pinyin: "guǒzhī",
    type: "（名）",
    meaning: "nước ép hoa quả",
    example: "我不喝咖啡，我喝果汁。",
    pinyinExample: "wǒ bù hē kāfēi, wǒ hē guǒzhī.",
    exampleMeaning: "Tôi không uống cà phê, tôi uống nước hoa quả."
  },
  {
    id: 276,
    word: "过程",
    pinyin: "guòchéng",
    type: "（名）",
    meaning: "quá trình",
    example: "在学习过程中同学们应该要互相帮助。",
    pinyinExample: "Zài xuéxí guòchéng zhōng tóngxuémen yīnggāi yào hùxiāng bāngzhù.",
    exampleMeaning: "Trong quá trình học tập các bạn nên giúp đỡ lẫn nhau."
  },
  {
    id: 277,
    word: "合",
    pinyin: "hé",
    type: "（动）",
    meaning: "đóng, đậy, khép lại",
    example: "他把书合起来了。",
    pinyinExample: "Tā bǎ shū hé qǐláile.",
    exampleMeaning: "Anh ấy gấp sách lại rồi."
  },
  {
    id: 278,
    word: "过去",
    pinyin: "Guòqù",
    type: "（名）",
    meaning: "quá khứ, trước đây",
    example: "我过去是学生，现在是老师。",
    pinyinExample: "Wǒ guòqù shì xuéshēng, xiànzài shì lǎoshī.",
    exampleMeaning: "Trước đây tôi là học sinh, bây giờ là giáo viên."
  },
  {
    id: 279,
    word: "哈哈",
    pinyin: "hāhā",
    type: "（拟声）",
    meaning: "ha ha （ tiếng cười)",
    example: "听了他的笑话，大家都哈哈大笑。",
    pinyinExample: "Tīngle tā de xiàohuà, dàjiā dōu hāhā dà xiào.",
    exampleMeaning: "Nghe được chuyện cười của anh ây, mọi người đều bật cười."
  },
  {
    id: 280,
    word: "海关",
    pinyin: "hǎiguān",
    type: "（名）",
    meaning: "hải quan",
    example: "她的爸爸是一名海关人员。",
    pinyinExample: "Tā de bàba shì yī míng hǎiguān rényuán.",
    exampleMeaning: "Bố của cô ấy là một nhân viên hải quan."
  },
  {
    id: 281,
    word: "害怕",
    pinyin: "hàipà",
    type: "（动）",
    meaning: "sợ hãi",
    example: "晚上一个人走路，我有点儿害怕。",
    pinyinExample: "Wǎnshàng yīgè rén zǒulù, wǒ yǒudiǎn er hàipà.",
    exampleMeaning: "Buổi tối đi một mình trên đường, tôi có chút sợ hãi."
  },
  {
    id: 282,
    word: "行",
    pinyin: "xíng",
    type: "（量）",
    meaning: "hàng, hàng lối, dòng",
    example: "他站在第三行。",
    pinyinExample: "Tā zhàn zài dì sān xíng.",
    exampleMeaning: "Anh ấy đứng ở hàng thứ 3."
  },
  {
    id: 283,
    word: "好好",
    pinyin: "hǎohǎo",
    type: "（形、副）",
    meaning: "tốt, cố gắng, dốc sức",
    example: "为了考上大学，我们要好好学习。",
    pinyinExample: "Wèile kǎo shàng dàxué, wǒmen yào hǎo hào xuéxí.",
    exampleMeaning: "Để thi đỗ đại học chúng ta phải chăm chỉ học tập."
  },
  {
    id: 284,
    word: "合法",
    pinyin: "héfǎ",
    type: "（形）",
    meaning: "hợp pháp",
    example: "你这样做是不合法的。",
    pinyinExample: "Nǐ zhèyàng zuò shì bù héfǎ de.",
    exampleMeaning: "Bạn làm như vậy là không hợp pháp."
  },
  {
    id: 285,
    word: "合格",
    pinyin: "hégé",
    type: "（形）",
    meaning: "hợp lệ, hợp quy cách, đạt chuẩn",
    example: "因为他的成绩不合格，所以不能毕 业。",
    pinyinExample: "Yīnwèi tā de chéngjī bù hégé, suǒyǐ bùnéng bìyè.",
    exampleMeaning: "Bởi vì thành tích của anh ấy không đạt chuẩn nên không thể tốt nghiệp."
  },
  {
    id: 286,
    word: "合理",
    pinyin: "hélǐ",
    type: "（形）",
    meaning: "hợp lj, có lj",
    example: "她说的话很合理。",
    pinyinExample: "Tā shuō dehuà hěn hélǐ.",
    exampleMeaning: "Lời cô ấy nói rất hợp lj."
  },
  {
    id: 287,
    word: "合作",
    pinyin: "hézuò",
    type: "（动）",
    meaning: "hợp tác",
    example: "同事们分工合作。",
    pinyinExample: "Tóngshìmen fēngōng hézuò.",
    exampleMeaning: "Các đồng nghiệp phân công hợp tác với nhau."
  },
  {
    id: 288,
    word: "和平",
    pinyin: "hépíng",
    type: "（名）",
    meaning: "hòa bình",
    example: "世界处于和平发展的年代。",
    pinyinExample: "Shìjiè chǔyú hépíng fāzhǎn de niándài.",
    exampleMeaning: "Thế giới đang ở trong thời đại phát triên hòa bình."
  },
  {
    id: 289,
    word: "红茶",
    pinyin: "hóngchá",
    type: "（名）",
    meaning: "hồng trà, trà đen",
    example: "他给我倒了一杯红茶。",
    pinyinExample: "Tā gěi wǒ dàole yībēi hóngchá.",
    exampleMeaning: "Anh ấy rót cho tôi một cốc trà đen."
  },
  {
    id: 290,
    word: "红酒",
    pinyin: "hóngjiǔ",
    type: "（名）",
    meaning: "rượu vang đỏ",
    example: "这是一瓶法国红酒。",
    pinyinExample: "Zhè shì yī píng fàguó hóngjiǔ.",
    exampleMeaning: "Đây là một chai rượu vang đỏ của Pháp."
  },
  {
    id: 291,
    word: "后果",
    pinyin: "hòuguǒ",
    type: "（名）",
    meaning: "hậu quả",
    example: "这件事的后果很严重。",
    pinyinExample: "Zhè jiàn shì de hòuguǒ hěn yánzhòng.",
    exampleMeaning: "Hậu quả của việc này sẽ rât nghiêm trọng."
  },
  {
    id: 292,
    word: "后面",
    pinyin: "hòumiàn",
    type: "（名）",
    meaning: "phía sau, mặt sau",
    example: "前面坐满了，后面还有座位。",
    pinyinExample: "Qiánmiàn zuò mǎnle, hòumiàn hái yǒu zuòwèi.",
    exampleMeaning: "Phía trước ngồi kín rôi, phía sau vân còn chỗ đó."
  },
  {
    id: 293,
    word: "后年",
    pinyin: "hòu nián",
    type: "（名）",
    meaning: "năm sau nữa, 2 năm sau",
    example: "我后年就三十五岁了。",
    pinyinExample: "Wǒ hòu nián jiù sānshíwǔ suìle.",
    exampleMeaning: "Năm sau nữa là tôi 35 tuổi rồi."
  },
  {
    id: 294,
    word: "互联网",
    pinyin: "hùliánwǎng",
    type: "（名）",
    meaning: "mạng xã hội",
    example: "互联网可以帮助我们学习和工作。",
    pinyinExample: "Hùliánwǎng kěyǐ bāngzhù wǒmen xuéxí hé gōngzuò.",
    exampleMeaning: "Mạng xã hội có thể giúp chúng tôi học tập và làm việc."
  },
  {
    id: 295,
    word: "互相",
    pinyin: "hùxiāng",
    type: "（副）",
    meaning: "tương hỗ, lẫn nhau, với nhau",
    example: "大家要互相帮助。",
    pinyinExample: "Dàjiā yào hùxiāng bāngzhù.",
    exampleMeaning: "Mọi người phải giúp đỡ lẫn nhau."
  },
  {
    id: 296,
    word: "划船",
    pinyin: "huáchuán",
    type: "（动）",
    meaning: "chèo thuyên",
    example: "周末我和父母去公园划船。",
    pinyinExample: "Zhōumò wǒ hé fùmǔ qù gōngyuán huáchuán.",
    exampleMeaning: "Cuối tuần này tôi đi chèo thuyền với bố mẹ ở công viên."
  },
  {
    id: 297,
    word: "华人",
    pinyin: "huárén",
    type: "（名）",
    meaning: "người Hoa",
    example: "有很多华人来越南生活。",
    pinyinExample: "Yǒu hěnduō huárén lái yuènán shēnghuó.",
    exampleMeaning: "Có rât nhiều người Hoa đên Việt Nam sinh sống."
  },
  {
    id: 298,
    word: "化 （现",
    pinyin: "huà (xiàn",
    type: "（后 缀）",
    meaning: "hóa （ hiện đại hóa)",
    example: "现代化建设是一个非常伟大的事业",
    pinyinExample: "Xiàndàihuà jiànshè shì yīgè fēicháng wěidà de shìyè",
    exampleMeaning: "Xây dựng hiện đại hóa là một công việc cực kì vĩ đại."
  },
  {
    id: 299,
    word: "话剧",
    pinyin: "Huàjù",
    type: "（名）",
    meaning: "kịch nói",
    example: "明天我们班要去看一部话 剧。",
    pinyinExample: "Míngtiān wǒmen bān yào qù kàn yībù huàjù.",
    exampleMeaning: "Ngày mai lớp chúng tôi đi xem một bộ kịch nói."
  },
  {
    id: 300,
    word: "话题",
    pinyin: "huàtí",
    type: "（名）",
    meaning: "đề tài, chủ đề",
    example: "我们今天讨论了一个很有意思的话题。",
    pinyinExample: "Wǒmen jīntiān tǎolùnle yīgè hěn yǒuyìsi de huàtí.",
    exampleMeaning: "Hôm nay chúng tôi đã thảo luận về một chủ đề rất thú vị."
  },
  {
    id: 301,
    word: "欢乐",
    pinyin: "huānlè",
    type: "（形）",
    meaning: "vui mừng, vui vẻ, rộn rã",
    example: "小孩子们欢乐地跑来跑去。",
    pinyinExample: "Xiǎo háizimen huānlè de pǎo lái pǎo qù.",
    exampleMeaning: "Lũ trẻ vui mừng chạy tới chạy lui."
  },
  {
    id: 302,
    word: "环",
    pinyin: "huán",
    type: "（名）",
    meaning: "vòng, khuyên, tràng",
    example: "他的耳朵上戴着一副铜耳 环。",
    pinyinExample: "Tā de ěrduǒ shàng dàizhe yī fù tóng ěrhuán.",
    exampleMeaning: "Anh ấy đeo một đôi hoa tai bằng đồng."
  },
  {
    id: 303,
    word: "环保",
    pinyin: "huánbǎo",
    type: "（形、名）",
    meaning: "bảo vệ môi trường",
    example: "我们要有环保意识。",
    pinyinExample: "Wǒmen yào yǒu huánbǎo yìshí.",
    exampleMeaning: "Chúng ta phải có j thức bảo vệ môi trường."
  },
  {
    id: 304,
    word: "环境",
    pinyin: "huánjìng",
    type: "（名）",
    meaning: "môi trường",
    example: "保护环境，就是保护我们自己。",
    pinyinExample: "Bǎohù huánjìng, jiùshì bǎohù wǒmen zìjǐ.",
    exampleMeaning: "Bảo vệ môi trường, chính là bảo vệ chính bản thân chúng ta."
  },
  {
    id: 305,
    word: "会议",
    pinyin: "huìyì",
    type: "（名）",
    meaning: "hội nghị",
    example: "明天有一个重要的会议。",
    pinyinExample: "Míngtiān yǒu yīgè zhòngyào de huìyì.",
    exampleMeaning: "Ngày mai có một buổi họp rất quan trọng."
  },
  {
    id: 306,
    word: "会员",
    pinyin: "huìyuán",
    type: "（名）",
    meaning: "hội viên",
    example: "我是学生会的会员。",
    pinyinExample: "Wǒ shì xuéshēnghuì de huìyuán.",
    exampleMeaning: "Tôi là một thành viên trong hội học sinh."
  },
  {
    id: 307,
    word: "活",
    pinyin: "huó",
    type: "（形、 动）",
    meaning: "sống",
    example: "鱼在水里才能活。",
    pinyinExample: "Yú zài shuǐ lǐ cáinéng huó.",
    exampleMeaning: "Cá ở trong nước thì mới sống được."
  },
  {
    id: 308,
    word: "火",
    pinyin: "huǒ",
    type: "（名）",
    meaning: "lửa",
    example: "这个灯需要点火才能亮。",
    pinyinExample: "Zhège dēng xūyào diǎnhuǒ cáinéng liàng.",
    exampleMeaning: "Cái đèn này cân châm lửa thì mới sáng được."
  },
  {
    id: 309,
    word: "机器",
    pinyin: "jīqì",
    type: "（名）",
    meaning: "cơ khí, máy móc",
    example: "一部机器可以做五十个人的工作。",
    pinyinExample: "Yī bù jīqì kěyǐ zuò wǔshí gèrén de gōngzuò.",
    exampleMeaning: "Một chiếc máy có thể làm công việc của 50 người."
  },
  {
    id: 310,
    word: "积极",
    pinyin: "jījí",
    type: "（形）",
    meaning: "tích cực, hăng hái",
    example: "他对于工作一直很积极。",
    pinyinExample: "Tā duìyú gōngzuò yīzhí hěn jījí.",
    exampleMeaning: "Anh ây luôn tích cực trong công việc."
  },
  {
    id: 311,
    word: "基本",
    pinyin: "jīběn",
    type: "（形）",
    meaning: "căn bản, cơ bản, nền tảng",
    example: "人民是国家的基本。",
    pinyinExample: "Rénmín shì guójiā de jīběn.",
    exampleMeaning: "Người dân là nền tảng của quốc gia."
  },
  {
    id: 312,
    word: "基本上",
    pinyin: "jīběn shàng",
    type: "（副）",
    meaning: "cơ bản thỉ, chủ yếu",
    example: "我们的意见基本上是相同的。",
    pinyinExample: "Wǒmen de yìjiàn jīběn shàng shì xiāngtóng de.",
    exampleMeaning: "Ý kiến của chúng tôi về cơ bản thì là giống nhau."
  },
  {
    id: 313,
    word: "基础",
    pinyin: "jīchǔ",
    type: "（名）",
    meaning: "nên móng, cơ sở, nên tảng",
    example: "在原有的基础上提高一步。",
    pinyinExample: "Zàiyuán yǒu de jīchǔ shàng tígāo yī bù.",
    exampleMeaning: "Trên cơ sở những gì đã có nâng cao thêm một bước."
  },
  {
    id: 314,
    word: "及时",
    pinyin: "jíshí",
    type: "（形）",
    meaning: "đúng lúc, kịp thời, đúng lúc",
    example: "他来得很及 时。",
    pinyinExample: "Tā láidé hěn jíshí.",
    exampleMeaning: "Anh ấy đến rất kịp thời."
  },
  {
    id: 315,
    word: "…极了",
    pinyin: "…jíle",
    type: "（词组）",
    meaning: "vô cùng, cực kì",
    example: "他们感情好极了。",
    pinyinExample: "Tāmen gǎnqíng hǎo jíle.",
    exampleMeaning: "Tình cảm của họ cực kì tôt."
  },
  {
    id: 316,
    word: "集体",
    pinyin: "jítǐ",
    type: "（名）",
    meaning: "tập thể, đoàn thể, tập đoàn",
    example: "我们是一个集体。",
    pinyinExample: "Wǒmen shì yīgè jítǐ.",
    exampleMeaning: "Chúng tôi là một tập thể."
  },
  {
    id: 317,
    word: "集中",
    pinyin: "jízhōng",
    type: "（动、形）",
    meaning: "tập trung, tập hợp",
    example: "上课时要集中注意力。",
    pinyinExample: "Shàngkè shí yào jízhōng zhùyì lì.",
    exampleMeaning: "Trong giờ học phải tập trung chú j."
  },
  {
    id: 318,
    word: "计算",
    pinyin: "jìsuàn",
    type: "（动）",
    meaning: "tính toán, suy tính",
    example: "我们要计算一下这次活动需要多少钱？",
    pinyinExample: "Wǒmen yào jìsuàn yīxià zhè cì huódòng xūyào duōshǎo qián?",
    exampleMeaning: "Chúng ta phải tính xem hoạt động lần này cần bao nhiêu tiền."
  },
  {
    id: 319,
    word: "记录",
    pinyin: "jìlù",
    type: "（名、 动）",
    meaning: "ghi lại, ghi chép",
    example: "老师讲课的内容，我们要记录下来",
    pinyinExample: "Lǎoshī jiǎngkè de nèiróng, wǒmen yào jìlù xiàlái",
    exampleMeaning: "Chúng ta phải ghi chép lại nội dung giáo viên giảng."
  },
  {
    id: 320,
    word: "记者",
    pinyin: "Jìzhě",
    type: "（名）",
    meaning: "phóng viên, kj giả, nhà báo",
    example: "他哥哥成为了一名记者。",
    pinyinExample: "Tā gēgē chéngwéile yī míng jìzhě.",
    exampleMeaning: "Anh trai anh ấy đã trở thành một phóng viên."
  },
  {
    id: 321,
    word: "纪录",
    pinyin: "jìlù",
    type: "（名）",
    meaning: "kỉ lục",
    example: "他打破了世界纪 录。",
    pinyinExample: "Tā dǎpòle shìjiè jìlù.",
    exampleMeaning: "Anh ấy đã phá vỡ kỉ lục thế giới."
  },
  {
    id: 322,
    word: "纪念",
    pinyin: "jìniàn",
    type: "（动、名）",
    meaning: "kỉ niệm, tưởng niệm",
    example: "这张照片留给我做纪念吧。",
    pinyinExample: "Zhè zhāng zhàopiàn liú gěi wǒ zuò jìniàn ba.",
    exampleMeaning: "Bức ảnh này để lại cho tôi làm kỉ niệm đi."
  },
  {
    id: 323,
    word: "技术",
    pinyin: "jìshù",
    type: "（名）",
    meaning: "kĩ thuật",
    example: "我们要发展科学技术。",
    pinyinExample: "Wǒmen yào fāzhǎn kēxué jìshù.",
    exampleMeaning: "Chúng tôi muốn phát triển khoa học kĩ thuật."
  },
  {
    id: 324,
    word: "继续",
    pinyin: "jìxù",
    type: "（动）",
    meaning: "tiêp tục",
    example: "我们还要继续工 作。",
    pinyinExample: "Wǒmen hái yào jìxù gōngzuò.",
    exampleMeaning: "Chúng tôi còn phải tiếp tục công việc."
  },
  {
    id: 325,
    word: "加工",
    pinyin: "jiāgōng",
    type: "（动）",
    meaning: "gia công, chế biến",
    example: "这是一家加工食品的工厂。",
    pinyinExample: "Zhè shì yījiā jiāgōng shípǐn de gōngchǎng.",
    exampleMeaning: "Đây là một nhà máy chế biến thực phâm."
  },
  {
    id: 326,
    word: "加快",
    pinyin: "jiākuài",
    type: "（动）",
    meaning: "tăng nhanh, tăng tốc",
    example: "他跑步的速度加快了。",
    pinyinExample: "Tā pǎobù de sùdù jiākuàile.",
    exampleMeaning: "Tốc độ chạy của anh ấy đã nhanh hơn rồi."
  },
  {
    id: 327,
    word: "加强",
    pinyin: "jiāqiáng",
    type: "（动）",
    meaning: "tăng cường, gia tăng",
    example: "学校加强了安全保卫工作。",
    pinyinExample: "Xuéxiào jiāqiángle ānquán bǎowèi gōngzuò.",
    exampleMeaning: "Nhà trường tăng cường công tác bảo vệ an toàn."
  },
  {
    id: 328,
    word: "家具",
    pinyin: "jiājù",
    type: "（名）",
    meaning: "gia dụng, đồ dùng trong nhà",
    example: "我们家买了一套新家具。",
    pinyinExample: "Wǒmen jiā mǎile yī tào xīn jiājù.",
    exampleMeaning: "Nhà chúng tôi vừa mua một món đồ gia dụng mới."
  },
  {
    id: 329,
    word: "家属",
    pinyin: "jiāshǔ",
    type: "（名）",
    meaning: "người nhà, người trong gia đình",
    example: "他是病人的家属。",
    pinyinExample: "Tā shì bìngrén de jiāshǔ.",
    exampleMeaning: "Anh ấy là người nhà của bệnh nhân."
  },
  {
    id: 330,
    word: "家乡",
    pinyin: "jiāxiāng",
    type: "（名）",
    meaning: "quê hương, quê nhà",
    example: "你的家乡在什么地方？",
    pinyinExample: "Nǐ de jiāxiāng zài shénme dìfāng?",
    exampleMeaning: "Quê hương của bạn ở nơi nào?"
  },
  {
    id: 331,
    word: "价格",
    pinyin: "jiàgé",
    type: "（名）",
    meaning: "giá, giá cả",
    example: "这个价格已经很便宜了。",
    pinyinExample: "Zhège jiàgé yǐjīng hěn piányíle.",
    exampleMeaning: "Cái giá này là rẻ lắm rồi."
  },
  {
    id: 332,
    word: "价钱",
    pinyin: "jiàqián",
    type: "（名）",
    meaning: "giá tiền",
    example: "这套衣服的价格是多少？",
    pinyinExample: "Zhè tào yīfú de jiàgé shì duōshǎo?",
    exampleMeaning: "Gía tiền của bộ quân áo này là bao nhiêu?"
  },
  {
    id: 333,
    word: "价值",
    pinyin: "jiàzhí",
    type: "（名）",
    meaning: "giá trị",
    example: "这些资料很有价值。",
    pinyinExample: "Zhèxiē zīliào hěn yǒu jiàzhí.",
    exampleMeaning: "Những tài liệu này rât có giá trị."
  },
  {
    id: 334,
    word: "架",
    pinyin: "jià",
    type: "（量、名、动)",
    meaning: "cỗ, chiếc, cây",
    example: "一架飞机 刚飞过。",
    pinyinExample: "Yī jià fēijī gāng fēiguò.",
    exampleMeaning: "Một chiếc máy bay vừa bay qua."
  },
  {
    id: 335,
    word: "坚持",
    pinyin: "jiānchí",
    type: "（动）",
    meaning: "kiên trì",
    example: "爸爸每天早上坚持跑步。",
    pinyinExample: "Bàba měitiān zǎoshang jiānchí pǎobù.",
    exampleMeaning: "Bố mỗi ngày đều kiên trì chạy bộ."
  },
  {
    id: 336,
    word: "坚决",
    pinyin: "jiānjué",
    type: "（形）",
    meaning: "kiên quyết, cương quyết",
    example: "这件事他坚决不同意。",
    pinyinExample: "Zhè jiàn shì tā jiānjué bù tóngyì.",
    exampleMeaning: "Anh ấy kiên quyết không đồng j với chuyện này."
  },
  {
    id: 337,
    word: "坚强",
    pinyin: "jiānqiáng",
    type: "（形）",
    meaning: "mạnh mẽ",
    example: "她是一个坚强的 人。",
    pinyinExample: "Tā shì yīgè jiānqiáng de rén.",
    exampleMeaning: "Cô ấy là một con người mạnh mẽ."
  },
  {
    id: 338,
    word: "简单",
    pinyin: "jiǎndān",
    type: "（形）",
    meaning: "đơn giản",
    example: "这道题很简单。",
    pinyinExample: "Zhè dào tí hěn jiǎndān.",
    exampleMeaning: "Câu hỏi này rất đơn giản."
  },
  {
    id: 339,
    word: "简直",
    pinyin: "jiǎnzhí",
    type: "（副）",
    meaning: "quả là, thật là",
    example: "这件衣服简直太漂亮了。",
    pinyinExample: "Zhè jiàn yīfú jiǎnzhí tài piàoliangle.",
    exampleMeaning: "Bộ đồ này quả thật sự quá đẹp luôn."
  },
  {
    id: 340,
    word: "建",
    pinyin: "jiàn",
    type: "（动）",
    meaning: "xây dựng",
    example: "我们学校新建了一座教学 楼。",
    pinyinExample: "Wǒmen xuéxiào xīnjiànle yīzuò jiàoxué lóu.",
    exampleMeaning: "Trường chúng tôi vừa xây dựng một tòa nhà dạy học."
  },
  {
    id: 341,
    word: "建成",
    pinyin: "jiànchén g",
    type: "（动）",
    meaning: "xây dựng lên, xây dựng thành",
    example: "我们一定会把这儿建成一个漂亮的公园。",
    pinyinExample: "Wǒmen yīdìng huì bǎ zhè’er jiànchéng yīgè piàoliang de gōngyuán.",
    exampleMeaning: "Chúng tôi nhất định sẽ xây dựng chỗ này thành một công viên xinh đẹp"
  },
  {
    id: 342,
    word: "建立",
    pinyin: "jiànlì",
    type: "（动）",
    meaning: "xây dựng, thành lập",
    example: "他们建立了一家公司。",
    pinyinExample: "Tāmen jiànlìle yījiā gōngsī.",
    exampleMeaning: "Bọn họ thành lập một công ty."
  },
  {
    id: 343,
    word: "建设",
    pinyin: "Jiànshè",
    type: "（名、 动）",
    meaning: "xây dựng, kiến thiết",
    example: "建设现代化的强国。",
    pinyinExample: "Jiànshè xiàndàihuà de qiángguó.",
    exampleMeaning: "Xây dựng một cường quốc hiện đại hóa."
  },
  {
    id: 344,
    word: "建议",
    pinyin: "jiànyì",
    type: "（名、 动）",
    meaning: "j kiến; đề nghị, kiến nghị",
    example: "欢迎大家提出建议。",
    pinyinExample: "Huānyíng dàjiā tíchū jiànyì.",
    exampleMeaning: "Hoan nghênh mọi người đưa ra j kiến."
  },
  {
    id: 345,
    word: "将近",
    pinyin: "jiāngjìn",
    type: "（副）",
    meaning: "sắp tới, gần tới; ngót, xấp xỉ",
    example: "将近期末考试，同学们都在努力复 习。",
    pinyinExample: "Jiāngjìn qímò kǎoshì, tóngxuémen dōu zài nǔlì fùxí.",
    exampleMeaning: "Kì thi cuối kj sắp tới, các bạn học đều đang nỗ lực ôn tập."
  },
  {
    id: 346,
    word: "将来",
    pinyin: "jiānglái",
    type: "（名）",
    meaning: "tương lai, sau này",
    example: "我将来想成为一名医生。",
    pinyinExample: "Wǒ jiānglái xiǎng chéngwéi yī míng yīshēng.",
    exampleMeaning: "Tương lai tôi muốn trở thành một bác sĩ."
  },
  {
    id: 347,
    word: "交费",
    pinyin: "jiāo fèi",
    type: "（动）",
    meaning: "trả phí, tiêu phí, tiêu dùng",
    example: "每个月都要交费。",
    pinyinExample: "Měi gè yuè dōu yào jiāo fèi.",
    exampleMeaning: "Mỗi tháng đều phải trả phí."
  },
  {
    id: 348,
    word: "交警",
    pinyin: "jiāojǐng",
    type: "（名）",
    meaning: "cảnh sát giao thông",
    example: "交警让他把车停下。",
    pinyinExample: "Jiāojǐng ràng tā bǎ chē tíng xià.",
    exampleMeaning: "Cảnh sát giao thông muôn anh ấy dừng xe lại."
  },
  {
    id: 349,
    word: "交流",
    pinyin: "jiāoliú",
    type: "（动、名）",
    meaning: "giao lưu",
    example: "语言是人们交流的工具。",
    pinyinExample: "Yǔyán shì rénmen jiāoliú de gōngjù.",
    exampleMeaning: "Ngôn ngữ là công cụ giao lưu của mọi người."
  },
  {
    id: 350,
    word: "交往",
    pinyin: "jiāowǎng",
    type: "（动）",
    meaning: "Kết giao, giao du, qua lại",
    example: "我跟他没有交往。",
    pinyinExample: "Wǒ gēn tā méiyǒu jiāowǎng.",
    exampleMeaning: "Tôi không có qua lại với anh ấy."
  },
  {
    id: 351,
    word: "交易",
    pinyin: "jiāoyì",
    type: "（名）",
    meaning: "giao dịch, mua bán",
    example: "我们做了一笔交易。",
    pinyinExample: "Wǒmen zuòle yī bǐ jiāoyì.",
    exampleMeaning: "Chúng tôi làm một cuộc giao dịch."
  },
  {
    id: 352,
    word: "叫",
    pinyin: "jiào",
    type: "（介）",
    meaning: "khiến, làm cho, bị",
    example: "你叫雨淋了 吗？",
    pinyinExample: "Nǐ jiào yǔ línle ma?",
    exampleMeaning: "Bạn bị mưa ướt rồi à?"
  },
  {
    id: 353,
    word: "较",
    pinyin: "jiào",
    type: "（副）",
    meaning: "so với; khá, tương đối",
    example: "王老师的水平较高。",
    pinyinExample: "Wáng lǎoshī de shuǐpíng jiào gāo.",
    exampleMeaning: "Trình độ của thầy Vương khá cao."
  },
  {
    id: 354,
    word: "教材",
    pinyin: "jiàocái",
    type: "（名）",
    meaning: "tài liệu giảng dạy",
    example: "这些是我们这学期使用的教材。",
    pinyinExample: "Zhèxiē shì wǒmen zhè xuéqí shǐyòng de jiàocái.",
    exampleMeaning: "Đây là tài liệu giảng dạy chúng tôi sẽ sử dụng trong kj học này."
  },
  {
    id: 355,
    word: "教练",
    pinyin: "jiàoliàn",
    type: "（名）",
    meaning: "Huấn luyện viên; huấn luyện",
    example: "我们球队换了新教 练。",
    pinyinExample: "Wǒmen qiú duì huànle xīn jiàoliàn.",
    exampleMeaning: "Đội bóng của chúng tôi đổi một huấn luyện mới."
  },
  {
    id: 356,
    word: "结实",
    pinyin: "jiēshi",
    type: "（形）",
    meaning: "chắc, bền; cường tráng",
    example: "这张桌 子做得很结实。",
    pinyinExample: "Zhè zhāng zhuōzi zuò dé hěn jiēshi.",
    exampleMeaning: "Cái bàn này được làm rất chắc chắn."
  },
  {
    id: 357,
    word: "接待",
    pinyin: "jiēdài",
    type: "（动）",
    meaning: "tiếp đãi, đón tiếp",
    example: "接待客人要热情。",
    pinyinExample: "Jiēdài kèrén yào rèqíng.",
    exampleMeaning: "Phải đón tiếp khách một cách nhiệt tình."
  },
  {
    id: 358,
    word: "接近",
    pinyin: "jiējìn",
    type: "（动）",
    meaning: "Tiếp cận, gần gũi, sắp đến",
    example: "时间已经接近十二点了。",
    pinyinExample: "Shíjiān yǐjīng jiējìn shí’èr diǎnle.",
    exampleMeaning: "Sắp đến 12h rồi."
  },
  {
    id: 359,
    word: "节约",
    pinyin: "jiéyuē",
    type: "（动）",
    meaning: "Tiết kiệm （phạm vi lớn)",
    example: "我们要节约用水。",
    pinyinExample: "Wǒmen yào jiéyuē yòngshuǐ.",
    exampleMeaning: "Chúng ta phải tiết kiệm nước."
  },
  {
    id: 360,
    word: "结合",
    pinyin: "jiéhé",
    type: "（动）",
    meaning: "Kết họp, gắn liền",
    example: "这种药是中医和西医结合的。",
    pinyinExample: "Zhè zhǒng yào shì zhōngyī hé xīyī jiéhé de.",
    exampleMeaning: "Loại thuốc này là kết hợp của Đông y và Tây y."
  },
  {
    id: 361,
    word: "结婚",
    pinyin: "jiéhūn",
    type: "（动）",
    meaning: "kết hôn",
    example: "他们结婚三十多年了。",
    pinyinExample: "Tāmen jiéhūn sānshí duō niánle.",
    exampleMeaning: "Bọn họ đã kết hôn hơn 30 năm rồi."
  },
  {
    id: 362,
    word: "结束",
    pinyin: "jiéshù",
    type: "（动）",
    meaning: "kết thúc",
    example: "足球比赛很快就要结束了。",
    pinyinExample: "Zúqiú bǐsài hěn kuài jiù yào jiéshùle.",
    exampleMeaning: "Trận đấu bóng đá sắp kết thúc rồi."
  },
  {
    id: 363,
    word: "解决",
    pinyin: "jiějué",
    type: "（动）",
    meaning: "giải quyết, thu xếp, tháo gỡ",
    example: "我们想出了解决的办法。",
    pinyinExample: "Wǒmen xiǎng chū liǎo jiějué de bànfǎ.",
    exampleMeaning: "Chúng tôi đã nghĩ ra cách giải quyết rồi."
  },
  {
    id: 364,
    word: "解开",
    pinyin: "jiě kāi",
    type: "（动）",
    meaning: "cởi ra, tháo ra, nghĩ ra",
    example: "他终于解开了在这道题。",
    pinyinExample: "Tā zhōngyú jiě kāile zài zhè dào tí.",
    exampleMeaning: "Cuối cùng anh ấy cũng nghĩ ra đáp án của câu hỏi này."
  },
  {
    id: 365,
    word: "金",
    pinyin: "jīn",
    type: "（名）",
    meaning: "kim, vàng",
    example: "他刚买一辆金色的汽车",
    pinyinExample: "Tā gāng mǎi yī liàng jīnsè de qìchē",
    exampleMeaning: "Anh ấy vừa mua một chiếc xe hơi màu vàng kim"
  },
  {
    id: 366,
    word: "金牌",
    pinyin: "Jīnpái",
    type: "（名）",
    meaning: "huy chương vàng",
    example: "他在运动会中拿到了一枚金牌。",
    pinyinExample: "Tā zài yùndònghuì zhōng ná dàole yī méi jīnpái.",
    exampleMeaning: "Anh ây đạt được huy chương vàng trong thế vận hội."
  },
  {
    id: 367,
    word: "仅",
    pinyin: "jǐn",
    type: "（副）",
    meaning: "vẻn vẹn, chỉ",
    example: "我们仅有一次机会。",
    pinyinExample: "Wǒmen jǐn yǒu yīcì jīhuì.",
    exampleMeaning: "Chúng tôi chỉ có một cơ hội mà thôi."
  },
  {
    id: 368,
    word: "仅仅",
    pinyin: "jǐnjǐn",
    type: "（副）",
    meaning: "vẻn vẹn, chỉ mới, vừa văn",
    example: "这仅仅是开始。",
    pinyinExample: "Zhè jǐnjǐn shì kāishǐ.",
    exampleMeaning: "Đây mới chỉ là bắt đầu."
  },
  {
    id: 369,
    word: "尽量",
    pinyin: "jǐnliàng",
    type: "（副）",
    meaning: "Cố gắng hết sức, ra sức",
    example: "把你知道的尽量告诉大家。",
    pinyinExample: "Bǎ nǐ zhīdào de jǐnliàng gàosù dàjiā.",
    exampleMeaning: "Cô gắng hết sức đem những gì bạn biết được nói với mọi người."
  },
  {
    id: 370,
    word: "紧",
    pinyin: "jǐn",
    type: "（形）",
    meaning: "căng, kéo căng, chật, cấp bách",
    example: "这双鞋太紧了。",
    pinyinExample: "Zhè shuāng xié tài jǐnle.",
    exampleMeaning: "Đôi giày này chật quá."
  },
  {
    id: 371,
    word: "紧急",
    pinyin: "jǐnjí",
    type: "（形）",
    meaning: "Khẩn cấp, cấp bách",
    example: "这件事情很紧急。",
    pinyinExample: "Zhè jiàn shìqíng hěn jǐnjí.",
    exampleMeaning: "Chuyện này rât cấp bách."
  },
  {
    id: 372,
    word: "紧张",
    pinyin: "jǐnzhāng",
    type: "（形）",
    meaning: "căng thẳng",
    example: "要考试了 ，我好紧张。",
    pinyinExample: "Yào kǎoshìle, wǒ hǎo jǐnzhāng.",
    exampleMeaning: "Sắp phải thi rồi, tôi căng thẳng quá."
  },
  {
    id: 373,
    word: "进步",
    pinyin: "jìnbù",
    type: "（动、形）",
    meaning: "tiến bộ, tiến lên",
    example: "我的学习成绩比以前有很大进步。",
    pinyinExample: "Wǒ de xuéxí chéngjī bǐ yǐqián yǒu hěn dà jìnbù.",
    exampleMeaning: "Thành tích học tập của tôi so với trước kia có tiến bộ nhiều."
  },
  {
    id: 374,
    word: "进一步",
    pinyin: "jìnyībù",
    type: "（副）",
    meaning: "tiến một bước, thêm nữa",
    example: "这篇论文的用词很不规范，需要进一步修改。",
    pinyinExample: "Zhè piān lùnwén de yòng cí hěn bù guīfàn, xūyào jìnyībù xiūgǎi.",
    exampleMeaning: "Bản luận án này có cách dùng từ không tiêu chuẩn, cần phải sửa đổi thêm nữa."
  },
  {
    id: 375,
    word: "进展",
    pinyin: "jìnzhǎn",
    type: "（动）",
    meaning: "Tiên tiến, tiến hóa, phát triển",
    example: "工作有很大进展。",
    pinyinExample: "Gōngzuò yǒu hěn dà jìnzhǎn.",
    exampleMeaning: "Công việc có sự tiến triển rất lớn."
  },
  {
    id: 376,
    word: "近期",
    pinyin: "jìnqí",
    type: "（名）",
    meaning: "Gần đây",
    example: "近期我们公司会举办一个活动。",
    pinyinExample: "Jìnqí wǒmen gōngsī huì jǔbàn yīgè huódòng.",
    exampleMeaning: "Gân đây công ty chúng tôi sẽ tổ chức một sự kiện."
  },
  {
    id: 377,
    word: "京剧",
    pinyin: "jīngjù",
    type: "（名）",
    meaning: "kinh kịch",
    example: "爷爷、奶奶喜欢听京剧。",
    pinyinExample: "Yéyé, nǎinai xǐhuān tīng jīngjù.",
    exampleMeaning: "Ông bà thích nghe kinh kịch."
  },
  {
    id: 378,
    word: "经济",
    pinyin: "jīngjì",
    type: "（名、形）",
    meaning: "kinh tế",
    example: "我国的经济在快速发展。",
    pinyinExample: "Wǒguó de jīngjì zài kuàisù fāzhǎn.",
    exampleMeaning: "Nền kinh tế của nước tôi đang phát triên nhanh chóng."
  },
  {
    id: 379,
    word: "经历",
    pinyin: "jīnglì",
    type: "（名、 动）",
    meaning: "kinh ngiệm; từng trải, trải qua",
    example: "老师给我们讲了他在中国的经历。",
    pinyinExample: "Lǎoshī gěi wǒmen jiǎngle tā zài zhōngguó de jīnglì.",
    exampleMeaning: "Giáo viên nói với chúng tôi vê kinh nghiệm của mình ở Trung Quôc."
  },
  {
    id: 380,
    word: "经验",
    pinyin: "jīngyàn",
    type: "（名）",
    meaning: "kinh nghiệm",
    example: "他是一位经验丰富的医生。",
    pinyinExample: "Tā shì yī wèi jīngyàn fēngfù de yīshēng.",
    exampleMeaning: "Anh ấy là một bác sĩ có kinh nghiệm phong phú."
  },
  {
    id: 381,
    word: "经营",
    pinyin: "jīngyíng",
    type: "（动）",
    meaning: "kinh doanh",
    example: "他在上海经营一家商店。",
    pinyinExample: "Tā zài shànghǎi jīngyíng yījiā shāngdiàn.",
    exampleMeaning: "Anh ây kinh doanh một cửa hàng ở Thượng Hải."
  },
  {
    id: 382,
    word: "精彩",
    pinyin: "jīngcǎi",
    type: "（形）",
    meaning: "ưu việt, xuât sắc, tuyệt vời",
    example: "晚会的节目很精 彩。",
    pinyinExample: "Wǎnhuì de jiémù hěn jīngcǎi.",
    exampleMeaning: "Tiêt mục của đêm liên hoan rất tuyệt vời."
  },
  {
    id: 383,
    word: "精神",
    pinyin: "jīngshén",
    type: "（名）",
    meaning: "tinh thần, nghị lực, sinh lực",
    example: "他的精神值得我们学习。",
    pinyinExample: "Tā de jīngshén zhídé wǒmen xuéxí.",
    exampleMeaning: "Tinh thần của anh ấy đáng để chúng tôi học tập."
  },
  {
    id: 384,
    word: "精神",
    pinyin: "jīngshén",
    type: "（形、名）",
    meaning: "sức sống, có tinh thần",
    example: "同学们都很有精神。",
    pinyinExample: "Tóngxuémen dōu hěn yǒu jīngshén.",
    exampleMeaning: "Các bạn học sinh đêu rât có sức sông."
  },
  {
    id: 385,
    word: "景色",
    pinyin: "jǐngsè",
    type: "（名）",
    meaning: "cảnh sắc, phong cảnh",
    example: "窗外的景色很美。",
    pinyinExample: "Chuāngwài de jǐngsè hěn měi.",
    exampleMeaning: "Cảnh sắc bên ngoài cửa sô rât đẹp."
  },
  {
    id: 386,
    word: "警察",
    pinyin: "jǐngchá",
    type: "（名）",
    meaning: "cảnh sát",
    example: "警察的任务是保护社会。",
    pinyinExample: "Jǐngchá de rènwù shì bǎohù shèhuì.",
    exampleMeaning: "Nhiệm vụ của cảnh sát là bảo vệ xã hội."
  },
  {
    id: 387,
    word: "静",
    pinyin: "Jìng",
    type: "（形、 动）",
    meaning: "yên tĩnh, yên lặng",
    example: "请大家静一静。",
    pinyinExample: "Qǐng dàjiā jìng yī jìng.",
    exampleMeaning: "Xin mọi người hãy yên lặng một chút."
  },
  {
    id: 388,
    word: "久",
    pinyin: "jiǔ",
    type: "（形）",
    meaning: "lâu",
    example: "雨已经下了好久",
    pinyinExample: "Yǔ yǐjīng xiàle hǎojiǔ",
    exampleMeaning: "Mưa đã rơi rât lâu rôi"
  },
  {
    id: 389,
    word: "旧",
    pinyin: "jiù",
    type: "（形）",
    meaning: "cũ",
    example: "这件衣服旧了。",
    pinyinExample: "zhè jiàn yīfú jiùle.",
    exampleMeaning: "Bộ quần áo này cũ rồi."
  },
  {
    id: 390,
    word: "救",
    pinyin: "jiù",
    type: "（动）",
    meaning: "cứu",
    example: "一定要把他救出 来。",
    pinyinExample: "Yīdìng yào bǎ tā jiù chūlái.",
    exampleMeaning: "Nhất định phải cứu anh ấy ra."
  },
  {
    id: 391,
    word: "就是",
    pinyin: "jiùshì",
    type: "（连）",
    meaning: "chính là",
    example: "时间就是生命。",
    pinyinExample: "Shíjiān jiùshì shēngmìng.",
    exampleMeaning: "Thời gian chính là sinh mệnh."
  },
  {
    id: 392,
    word: "就业",
    pinyin: "jiùyè",
    type: "（动）",
    meaning: "đi làm",
    example: "他毕业以后就在中国就业。",
    pinyinExample: "Tā bìyè yǐhòu jiù zài zhōngguó jiùyè.",
    exampleMeaning: "Anh ấy sau khi tôt nghiệp thì ở Trung Quôc đi làm."
  },
  {
    id: 393,
    word: "举办",
    pinyin: "jǔbàn",
    type: "（动）",
    meaning: "Tổ chức, cử hành, tiến hành",
    example: "近期，我们会举办一场晚会。",
    pinyinExample: "Jìnqí, wǒmen huì jǔbàn yī chǎng wǎnhuì.",
    exampleMeaning: "Gần đây, chúng tôi sẽ tổ chức một bữa tiệc."
  },
  {
    id: 394,
    word: "具体",
    pinyin: "jùtǐ",
    type: "（形）",
    meaning: "cụ thể, rõ ràng, rõ rệt, tỉ mỉ",
    example: "这个计划的具体细节还需要讨论。",
    pinyinExample: "Zhège jìhuà de jùtǐ xìjié hái xūyào tǎolùn.",
    exampleMeaning: "Chi tiết cụ thề của kế hoạch này còn phải thảo luận."
  },
  {
    id: 395,
    word: "具有",
    pinyin: "jùyǒu",
    type: "（动）",
    meaning: "có, có đủ, sẵn có, vốn có",
    example: "他天生具有罕见的才华",
    pinyinExample: "Tā tiānshēng jùyǒu hǎnjiàn de cáihuá",
    exampleMeaning: "Anh ấy bẩm sinh vốn có 1 loại tài hoa hiếm có"
  },
  {
    id: 396,
    word: "剧场",
    pinyin: "jùchǎng",
    type: "（名）",
    meaning: "rạp, nhà hát",
    example: "这个剧场可以坐一千名观 众。",
    pinyinExample: "zhège jùchǎng kěyǐ zuò yīqiān míng guānzhòng.",
    exampleMeaning: "Nhà hát này có thể chứa một nghìn khán giả."
  },
  {
    id: 397,
    word: "据说",
    pinyin: "jùshuō",
    type: "（动）",
    meaning: "nghe nói, nghe đâu",
    example: "据说今年夏天温度很高。",
    pinyinExample: "Jùshuō jīnnián xiàtiān wēndù hěn gāo.",
    exampleMeaning: "Nghe nói mùa hè năm nay nhiệt độ rất cao."
  },
  {
    id: 398,
    word: "决定",
    pinyin: "juédìng",
    type: "（动、名）",
    meaning: "Quyết định, định đoạt",
    example: "我决定毕业以后去北京工 作。",
    pinyinExample: "Wǒ juédìng bìyè yǐhòu qù běijīng gōngzuò.",
    exampleMeaning: "Tôi quyêt định sau khi tôt nghiệp tới Bắc Kinh làm việc."
  },
  {
    id: 399,
    word: "决赛",
    pinyin: "juésài",
    type: "（动、名）",
    meaning: "Quyết đấu, đấu chung kết",
    example: "她在上周决赛时被击败了。",
    pinyinExample: "Tā zài shàng zhōu juésài shí bèi jíbàile.",
    exampleMeaning: "Cô ây bị đánh bại trong trận chung kết tuần trước."
  },
  {
    id: 400,
    word: "决心",
    pinyin: "juéxīn",
    type: "（动、名）",
    meaning: "Quyết tâm",
    example: "我下定决心这次要考第一 名。",
    pinyinExample: "Wǒ xiàdìng juéxīn zhè cì yào kǎo dì yī míng.",
    exampleMeaning: "Tôi hạ quyết tâm lần này phải thi đứng thứ nhất."
  },
  {
    id: 401,
    word: "绝对",
    pinyin: "juéduì",
    type: "（副）",
    meaning: "tuyệt đối, hoàn toàn, nhất định",
    example: "这些我都检查过，绝对没有问题。",
    pinyinExample: "Zhèxiē wǒ dū jiǎncháguò, juéduì méiyǒu wèntí.",
    exampleMeaning: "Tôi đã kiểm tra rồi, tuyệt đối không có vấn đề."
  },
  {
    id: 402,
    word: "咖啡",
    pinyin: "kāfēi",
    type: "（名）",
    meaning: "cà phê",
    example: "我常和朋友一起去喝咖啡。",
    pinyinExample: "Wǒ cháng hé péngyǒu yīqǐ qù hē kāfēi.",
    exampleMeaning: "Tôi thường cùng bạn bè đi uống cafe."
  },
  {
    id: 403,
    word: "开发",
    pinyin: "kāifā",
    type: "（动）",
    meaning: "khai phá, mở mang, mở rộng",
    example: "这家公司开发了一种新药。",
    pinyinExample: "Zhè jiā gōngsī kāifāle yī zhǒng xīnyào.",
    exampleMeaning: "Công ty này đã phát triên thêm một loại thuốc mới."
  },
  {
    id: 404,
    word: "开放",
    pinyin: "kāifàng",
    type: "（动）",
    meaning: "mở cửa",
    example: "图书馆开放的时间是早上八点到晚上八点。",
    pinyinExample: "Túshū guǎn kāifàng de shíjiān shì zǎoshang bā diǎn dào wǎnshàng bā diǎn.",
    exampleMeaning: "Thời gian thư viện mở cửa là từ 8 giờ sáng đến 8 giờ tối."
  },
  {
    id: 405,
    word: "开始",
    pinyin: "kāishǐ",
    type: "（动、名）",
    meaning: "bắt đầu",
    example: "球赛还没有开始。",
    pinyinExample: "Qiúsài hái méiyǒu kāishǐ.",
    exampleMeaning: "Trận đấu vẫn chưa bắt đầu."
  },
  {
    id: 406,
    word: "开业",
    pinyin: "kāiyè",
    type: "（动）",
    meaning: "mở, khai trương, thành lập",
    example: "那个服装店今天开业。",
    pinyinExample: "Nàgè fúzhuāng diàn jīntiān kāiyè.",
    exampleMeaning: "Cửa hàng quần áo này hôm nay khai trương."
  },
  {
    id: 407,
    word: "开展",
    pinyin: "kāizhǎn",
    type: "（动）",
    meaning: "Triển khai, mở rộng, nhân rộng",
    example: "学校经常开展课外活动。",
    pinyinExample: "Xuéxiào jīngcháng kāizhǎn kèwài huódòng.",
    exampleMeaning: "Trường học thường triển khai các hoạt động ngoài giờ."
  },
  {
    id: 408,
    word: "看起来",
    pinyin: "kàn qǐlái",
    type: "（动）",
    meaning: "xem ra, coi như",
    example: "你看起来很高兴。",
    pinyinExample: "Nǐ kàn qǐlái hěn gāoxìng.",
    exampleMeaning: "Xem ra bạn rất vui."
  },
  {
    id: 409,
    word: "看上去",
    pinyin: "Kàn shàngqù",
    type: "（动）",
    meaning: "có vẻ, nhìn trông",
    example: "他看上去只有二十 岁。",
    pinyinExample: "Tā kàn shàngqù zhǐyǒu èrshí suì.",
    exampleMeaning: "Anh ấy trông chỉ mới 20 tuổi."
  },
  {
    id: 410,
    word: "考验",
    pinyin: "kǎoyàn",
    type: "（动）",
    meaning: "thử thách, khảo nghiệm",
    example: "领导在考验新员工的能力",
    pinyinExample: "Lǐngdǎo zài kǎoyàn xīn yuángōng de nénglì",
    exampleMeaning: "Lãnh đạo đang khảo nghiệm năng lực của nhân viên mới"
  },
  {
    id: 411,
    word: "科技",
    pinyin: "kējì",
    type: "（名）",
    meaning: "khoa học kĩ thuật",
    example: "我愿意参加科技活动小组。",
    pinyinExample: "wǒ yuànyì cānjiā kējì huódòng xiǎozǔ.",
    exampleMeaning: "Tôi bằng lòng tham gia nhóm hoạt động khoa học kĩ thuật."
  },
  {
    id: 412,
    word: "可靠",
    pinyin: "kěkào",
    type: "（形）",
    meaning: "tin cậy, đáng tin",
    example: "这个消息很可靠。",
    pinyinExample: "Zhège xiāoxī hěn kěkào.",
    exampleMeaning: "Tin tức này rất đáng tin cậy."
  },
  {
    id: 413,
    word: "可乐",
    pinyin: "kělè",
    type: "（名）",
    meaning: "CocaCola",
    example: "可口可乐是从美国诞生的",
    pinyinExample: "Kěkǒukělè shì cóng měiguó dànshēng de",
    exampleMeaning: "CocaCola ”ra đời” từ nước Mỹ"
  },
  {
    id: 414,
    word: "克服",
    pinyin: "kèfú",
    type: "（动）",
    meaning: "khắc phục",
    example: "我们相信我们能克服这些困难。",
    pinyinExample: "wǒmen xiāngxìn wǒmen néng kèfú zhèxiē kùnnán.",
    exampleMeaning: "Chúng tôi tin chúng tôi có thê khăc phục được những khó khăn này."
  },
  {
    id: 415,
    word: "客观",
    pinyin: "kèguān",
    type: "（形）",
    meaning: "khách quan",
    example: "我们要按照客观规律办事",
    pinyinExample: "Wǒmen yào ànzhào kèguān guīlǜ bànshì",
    exampleMeaning: "Chúng ta phải làm việc dựa vào quy luật khách quan"
  },
  {
    id: 416,
    word: "课程",
    pinyin: "kèchéng",
    type: "（名）",
    meaning: "chương trình dạy học",
    example: "这门课程是什么程 度？",
    pinyinExample: "zhè mén kèchéng shì shénme chéngdù?",
    exampleMeaning: "Chương trình dạy học này là cấp độ mấy?"
  },
  {
    id: 417,
    word: "空",
    pinyin: "kōng",
    type: "（形、副）",
    meaning: "Trống rống, vắng",
    example: "两边的办公室都是空的。",
    pinyinExample: "Liǎngbiān de bàngōngshì dōu shì kōng de.",
    exampleMeaning: "Văn phòng hai bên đều vắng."
  },
  {
    id: 418,
    word: "空调",
    pinyin: "kòngtiáo",
    type: "（名）",
    meaning: "Điều hòa",
    example: "今天停电，空调不能用了。",
    pinyinExample: "Jīntiān tíngdiàn, kòngtiáo bùnéng yòngle.",
    exampleMeaning: "Hôm nay mất điện, điều hòa không thể dùng rồi."
  },
  {
    id: 419,
    word: "恐怕",
    pinyin: "kǒngpà",
    type: "（副）",
    meaning: "sợ rằng, e rằng, liệu rằng",
    example: "恐怕他不会同意。",
    pinyinExample: "Kǒngpà tā bù huì tóngyì.",
    exampleMeaning: "Sợ rằng anh ấy không đông j."
  },
  {
    id: 420,
    word: "空儿",
    pinyin: "kòng er",
    type: "（名）",
    meaning: "thời gian rảnh",
    example: "你明天有空儿吗？",
    pinyinExample: "Nǐ míngtiān yǒu kòng er ma?",
    exampleMeaning: "Ngày mai bạn có thời gian rảnh không?"
  },
  {
    id: 421,
    word: "裤子",
    pinyin: "kùzi",
    type: "（名）",
    meaning: "Quần, cái quần",
    example: "妈妈又给我买了一条裤子。",
    pinyinExample: "Māmā yòu gěi wǒ mǎile yītiáo kùzi.",
    exampleMeaning: "Mẹ mua cho tôi một chiếc quần."
  },
  {
    id: 422,
    word: "快速",
    pinyin: "kuàisù",
    type: "（形）",
    meaning: "thần tốc, cấp tốc, nhanh",
    example: "我国经济快速地发 展。",
    pinyinExample: "Wǒguó jīngjì kuàisù de fāzhǎn.",
    exampleMeaning: "Kinh tế của nước tôi phát triển nhanh chóng."
  },
  {
    id: 423,
    word: "困",
    pinyin: "kùn",
    type: "（形、 动）",
    meaning: "khó khăn; buồn ngủ",
    example: "我已经很困 了。",
    pinyinExample: "Wǒ yǐjīng hěn kùnle.",
    exampleMeaning: "Tôi rât buồn ngủ."
  },
  {
    id: 424,
    word: "困难",
    pinyin: "kùnnán",
    type: "（形、名）",
    meaning: "khó khăn, cản trở",
    example: "这件事做起来",
    pinyinExample: "Zhè jiàn shì zuò qǐlái hěn kùnnán.",
    exampleMeaning: "Việc này làm rất khó khăn."
  },
  {
    id: 425,
    word: "浪费",
    pinyin: "làngfèi",
    type: "（动）",
    meaning: "lãng phí",
    example: "浪费时间就是浪费生命。",
    pinyinExample: "Làngfèi shíjiān jiùshì làngfèi shēngmìng.",
    exampleMeaning: "Lãng phí thời gian chính là lãng phí cuộc đời."
  },
  {
    id: 426,
    word: "老百姓",
    pinyin: "lǎobǎixìng",
    type: "（名）",
    meaning: "người dân",
    example: "各国老百姓都渴望世界和 平。",
    pinyinExample: "Gèguó lǎobǎixìng dōu kěwàng shìjiè hépíng.",
    exampleMeaning: "Người dân các nước đều khao khát thế giới hòa bình."
  },
  {
    id: 427,
    word: "老板",
    pinyin: "lǎobǎn",
    type: "（名）",
    meaning: "ông chủ, bà chủ",
    example: "她就是这的老板。",
    pinyinExample: "Tā jiùshì zhè de lǎobǎn.",
    exampleMeaning: "Cô ây là bà chủ ở đây."
  },
  {
    id: 428,
    word: "老太太",
    pinyin: "lǎo tàitài",
    type: "（名）",
    meaning: "bà, quj bà",
    example: "那位老太太八十岁了 ，但看上去很 精神。",
    pinyinExample: "Nà wèi lǎo tàitài bāshí suìle, dàn kàn shàngqù hěn jīngshén.",
    exampleMeaning: "Bà ấy đã 80 tuổi rồi, nhưng trông rất giàu sức sống."
  },
  {
    id: 429,
    word: "老头儿",
    pinyin: "lǎotóu er",
    type: "（名）",
    meaning: "ông già, ông lão",
    example: "荖头儿 ，你叫什么名字？",
    pinyinExample: "Lǎo tóu er, nǐ jiào shénme míngzì?",
    exampleMeaning: "Ông lão, ông tên là gì vậy?"
  },
  {
    id: 430,
    word: "乐",
    pinyin: "lè",
    type: "（动）",
    meaning: "vui, cười",
    example: "你乐什么呀？",
    pinyinExample: "Nǐ lè shénme ya?",
    exampleMeaning: "Bạn cười cái gì đây?"
  },
  {
    id: 431,
    word: "乐观",
    pinyin: "lèguān",
    type: "（形）",
    meaning: "lạc quan",
    example: "我们要乐观地生活。",
    pinyinExample: "Wǒmen yào lèguān dì shēnghuó.",
    exampleMeaning: "Chúng ta nên sống một cách lạc quan."
  },
  {
    id: 432,
    word: "类",
    pinyin: "lèi",
    type: "（名、量）",
    meaning: "chủng, loại, thứ",
    example: "你喜欢看哪类书？",
    pinyinExample: "Nǐ xǐhuān kàn nǎ lèi shū?",
    exampleMeaning: "Bạn thích xem loại sách nào?"
  },
  {
    id: 433,
    word: "类似",
    pinyin: "Lèisì",
    type: "（动、形）",
    meaning: "tương tự, giống, na ná",
    example: "我们别让类似的事情再发生。",
    pinyinExample: "Wǒmen bié ràng lèisì de shìqíng zài fāshēng.",
    exampleMeaning: "Chúng ta đừng đê sự việc tương tự lại xảy ra nữa"
  },
  {
    id: 434,
    word: "离婚",
    pinyin: "líhūn",
    type: "（动）",
    meaning: "ly hôn",
    example: "他们已经离婚了。",
    pinyinExample: "Tāmen yǐjīng líhūnle.",
    exampleMeaning: "Họ đã ly hôn rôi."
  },
  {
    id: 435,
    word: "里面",
    pinyin: "lǐmiàn",
    type: "（名）",
    meaning: "bên trong",
    example: "衣服放在行李里 面。",
    pinyinExample: "Yīfú fàng zài háng lǐ lǐmiàn.",
    exampleMeaning: "Quần áo để bên trong hành lj."
  },
  {
    id: 436,
    word: "理发",
    pinyin: "lǐfǎ",
    type: "（动）",
    meaning: "cắt tóc",
    example: "我弟弟头发长了，妈妈就带他去理 发。",
    pinyinExample: "Wǒ dìdì tóufǎ zhǎngle, māmā jiù dài tā qù lǐfǎ.",
    exampleMeaning: "Tóc em trai tôi dài rôi, mẹ liền đưa em ấy đi căt tóc."
  },
  {
    id: 437,
    word: "理解",
    pinyin: "lǐjiě",
    type: "（动）",
    meaning: "Hiểu, thấu hiểu",
    example: "你的意思我完全理解。",
    pinyinExample: "Nǐ de yìsi wǒ wánquán lǐjiě.",
    exampleMeaning: "Tôi hoàn hoàn hiểu j của bạn."
  },
  {
    id: 438,
    word: "理论",
    pinyin: "lǐlùn",
    type: "（名）",
    meaning: "lj luận",
    example: "这个理论是他多年研究的结果。",
    pinyinExample: "Zhège lǐlùn shì tā duōnián yánjiū de jiéguǒ.",
    exampleMeaning: "Lj luận này là kêt quả bao nhiêu năm nghiên cứu của anh."
  },
  {
    id: 439,
    word: "理由",
    pinyin: "lǐyóu",
    type: "（名）",
    meaning: "lj do",
    example: "他要离婚的理由是什么？",
    pinyinExample: "Tā yào líhūn de lǐyóu shì shénme?",
    exampleMeaning: "Lj do họ muốn ly hôn là gì?"
  },
  {
    id: 440,
    word: "力",
    pinyin: "lì",
    type: "（名）",
    meaning: "lực lượng, sức lực",
    example: "我用力把 门推开。",
    pinyinExample: "Wǒ yònglì bǎmén tuī kāi.",
    exampleMeaning: "Tôi dùng lực để đẩy cửa ra."
  },
  {
    id: 441,
    word: "力量",
    pinyin: "lìliàng",
    type: "（名）",
    meaning: "sức mạnh, lực lượng, sức lực",
    example: "人多力量大。",
    pinyinExample: "Rén duō lìliàng dà.",
    exampleMeaning: "Người đông sức mạnh."
  },
  {
    id: 442,
    word: "立刻",
    pinyin: "lìkè",
    type: "（副）",
    meaning: "lập tức",
    example: "请大家立刻到会议室去。",
    pinyinExample: "Qǐng dàjiā lìkè dào huìyì shì qù.",
    exampleMeaning: "Mọi người vui lòng lập tức đến phòng hội nghị."
  },
  {
    id: 443,
    word: "利用",
    pinyin: "lìyòng",
    type: "（动）",
    meaning: "lợi dụng, tận dụng",
    example: "同学们不同意利用星期天补课。",
    pinyinExample: "Tóngxuémen bù tóngyì lìyòng xīngqítiān bǔkè.",
    exampleMeaning: "Các bạn học sinh không đồng j tận dụng chủ nhật để học bù."
  },
  {
    id: 444,
    word: "连",
    pinyin: "lián",
    type: "（副、 动）",
    meaning: "Đến, ngay cả",
    example: "这个，连小孩子也知道。",
    pinyinExample: "Zhège, lián xiǎo háizi yě zhīdào.",
    exampleMeaning: "Cái này đến trẻ con cũng biết."
  },
  {
    id: 445,
    word: "连忙",
    pinyin: "liánmáng",
    type: "（副）",
    meaning: "vội vã, vội vàng",
    example: "奶奶生病了，爸爸连忙把她送到医 院。",
    pinyinExample: "Nǎinai shēngbìngle, bàba liánmáng bǎ tā sòng dào yīyuàn.",
    exampleMeaning: "Bà tôi bị ốm, bố tôi vội vã đứa bà đi bệnh viện."
  },
  {
    id: 446,
    word: "连续",
    pinyin: "liánxù",
    type: "（动）",
    meaning: "liên tục, liên tiếp",
    example: "连续几天都在下雨。",
    pinyinExample: "Liánxù jǐ tiān dū zàixià yǔ.",
    exampleMeaning: "Mấy ngày liên tiếp trời đều mưa."
  },
  {
    id: 447,
    word: "连续剧",
    pinyin: "liánxùjù",
    type: "（名）",
    meaning: "phim bộ, phim nhiêu tập",
    example: "他整个下午都在看连续剧。",
    pinyinExample: "Tā zhěnggè xiàwǔ dōu zài kàn liánxùjù.",
    exampleMeaning: "Cả buôi chiều anh ấy xem đều xem phim truyên hình dài tập."
  },
  {
    id: 448,
    word: "联合",
    pinyin: "liánhé",
    type: "（动）",
    meaning: "liên kết, kết hợp lại",
    example: "这个任务需要大家联合起 来。",
    pinyinExample: "Zhège rènwù xūyào dàjiā liánhé qǐlái.",
    exampleMeaning: "Nhiệm vụ này yêu câu mọi người kết hợp lại với nhau."
  },
  {
    id: 449,
    word: "联合国",
    pinyin: "liánhégu ó",
    type: "（名）",
    meaning: "Liên Hợp Quốc",
    example: "联合国现在有193个会员国。",
    pinyinExample: "Liánhéguó xiànzài yǒu 193 gè huìyuán guó.",
    exampleMeaning: "Liên Hợp Quốc hiện nay có 193 nước thành viên."
  },
  {
    id: 450,
    word: "联系",
    pinyin: "liánxì",
    type: "（名、 动）",
    meaning: "liên hệ",
    example: "很久没有和他联系了。",
    pinyinExample: "Hěnjiǔ méiyǒu hé tā liánxìle.",
    exampleMeaning: "Đã rất lâu rồi không liên hệ với anh ấy."
  },
  {
    id: 451,
    word: "凉水",
    pinyin: "liáng shuǐ",
    type: "（名）",
    meaning: "nước lạnh",
    example: "夏天我经常用凉水洗澡。",
    pinyinExample: "Xiàtiān wǒ jīngcháng yòng liángshuǐ xǐzǎo.",
    exampleMeaning: "Tôi thường tắm nước lạnh vào mùa hè."
  },
  {
    id: 452,
    word: "了",
    pinyin: "le",
    type: "（动)",
    meaning: "Được",
    example: "这件事我办不了。",
    pinyinExample: "Zhè jiàn shì wǒ bàn bùliǎo.",
    exampleMeaning: "Chuyện này tôi không làm được."
  },
  {
    id: 453,
    word: "领",
    pinyin: "lǐng",
    type: "（动）",
    meaning: "nhận, lĩnh",
    example: "我通常在星期五领工资。",
    pinyinExample: "Wǒ tōngcháng zài xīngqíwǔ lǐng gōngzī.",
    exampleMeaning: "Tôi thường nhận lương vào thứ sáu."
  },
  {
    id: 454,
    word: "领导",
    pinyin: "lǐngdǎo",
    type: "（名、 动）",
    meaning: "lãnh đạo, cấp trên",
    example: "他不适合做领导。",
    pinyinExample: "Tā bù shìhé zuò lǐngdǎo.",
    exampleMeaning: "Anh ấy không thích hợp làm lãnh đạo."
  },
  {
    id: 455,
    word: "领先",
    pinyin: "lǐngxiān",
    type: "（动）",
    meaning: "vượt lên đầu, dẫn đầu",
    example: "红队领先了一点。",
    pinyinExample: "Hóng duì lǐngxiānle yīdiǎn.",
    exampleMeaning: "Đội Hồng dẫn trước một điểm."
  },
  {
    id: 456,
    word: "另外",
    pinyin: "Lìngwài",
    type: "（副、连、代）",
    meaning: "ngoài ra, ngoài, việc khác",
    example: "我还要跟你谈另外一件事。",
    pinyinExample: "Wǒ hái yào gēn nǐ tán lìngwài yī jiàn shì.",
    exampleMeaning: "Tôi còn phải nói với bạn một chuyện khác."
  },
  {
    id: 457,
    word: "另一方面",
    pinyin: "lìng yī fāngmiàn",
    type: "（词组）",
    meaning: "phương diện khác, mặt khác",
    example: "在假期里 ，我们一方面要好好放松，另一方面要复习功课。",
    pinyinExample: "Zài jiàqī lǐ, wǒmen yī fāngmiàn yào hǎohǎo fàngsōng, lìng yī fāngmiàn yào fùxí gōngkè.",
    exampleMeaning: "Vào kj nghỉ một mặt tôi muốn nghỉ ngơi thư giãn, một mặt muốn ôn lại bài tập."
  },
  {
    id: 458,
    word: "留学",
    pinyin: "liúxué",
    type: "（动）",
    meaning: "du học",
    example: "我在国外留学时，经常想家里人。",
    pinyinExample: "Wǒ zài guówài liúxué shí, jīngcháng xiǎng jiālǐ rén.",
    exampleMeaning: "Thời gian tôi đi du học thường xuyên nhớ về người nhà."
  },
  {
    id: 459,
    word: "龙",
    pinyin: "lóng",
    type: "（名）",
    meaning: "Rồng, con rồng",
    example: "我属龙。",
    pinyinExample: "Wǒ shǔ lóng.",
    exampleMeaning: "Tôi tuổi rồng."
  },
  {
    id: 460,
    word: "录",
    pinyin: "lù",
    type: "（动）",
    meaning: "ghi chép, sao chép, quay",
    example: "旅游的时候我录了一些视 频。",
    pinyinExample: "Lǚyóu de shíhòu wǒ lùle yīxiē shìpín.",
    exampleMeaning: "Lúc tôi đi du lịch có quay lại vài cái video."
  },
  {
    id: 461,
    word: "录音",
    pinyin: "lùyīn",
    type: "（动、名）",
    meaning: "ghi âm; băng ghi âm",
    example: "听力部分要听录音回答问 题。",
    pinyinExample: "Tīnglì bùfèn yào tīng lùyīn huídá wèntí.",
    exampleMeaning: "Phần nghe phải nghe theo băng ghi âm để trả lời câu hỏi."
  },
  {
    id: 462,
    word: "路线",
    pinyin: "lùxiàn",
    type: "（名）",
    meaning: "tuyến đường, đường đi",
    example: "按照小明告诉我的路线，我找到了那家店",
    pinyinExample: "Ànzhào xiǎomíng gàosù wǒ de lùxiàn, wǒ zhǎodàole nà jiā diàn",
    exampleMeaning: "Tôi đã tìm được tiệm sách đó theo tuyến đường Tiểu Minh chỉ cho mình."
  },
  {
    id: 463,
    word: "旅馆",
    pinyin: "lǚguǎn",
    type: "（名）",
    meaning: "quán trọ, khách sạn",
    example: "这家旅馆服务很 好。",
    pinyinExample: "zhè jiā lǚguǎn fúwù hěn hǎo.",
    exampleMeaning: "Phục vụ ở khách sạn này rất tốt."
  },
  {
    id: 464,
    word: "旅行社",
    pinyin: "lǚxíngshè",
    type: "（名）",
    meaning: "cơ quan; công ty du lịch",
    example: "姐姐在国际旅行社工作。",
    pinyinExample: "Jiějiě zài guójì lǚxíngshè gōngzuò.",
    exampleMeaning: "Chị gái làm việc ở công ty du lịch quôc tê."
  },
  {
    id: 465,
    word: "绿茶",
    pinyin: "lǜchá",
    type: "（名）",
    meaning: "trà xanh, chè xanh",
    example: "小明给客人倒了一杯绿茶。",
    pinyinExample: "Xiǎomíng gěi kèrén dàole yībēi lǜchá.",
    exampleMeaning: "Bạn Minh rót cho khách một côc trà xanh."
  },
  {
    id: 466,
    word: "乱",
    pinyin: "luàn",
    type: "（形）",
    meaning: "loạn, rối, lộn xộn",
    example: "我的房间很乱。",
    pinyinExample: "Wǒ de fángjiān hěn luàn.",
    exampleMeaning: "Phòng của tôi rât lộn xộn."
  },
  {
    id: 467,
    word: "落后",
    pinyin: "luòhòu",
    type: "（动、形）",
    meaning: "rớt lại phía sau; lạc hậu",
    example: "这样的思想太落后了。",
    pinyinExample: "Zhèyàng de sīxiǎng tài luòhòule.",
    exampleMeaning: "Suy nghĩ như vậy quá lạc hậu rồi."
  },
  {
    id: 468,
    word: "麻烦",
    pinyin: "máfan",
    type: "（形， 动）",
    meaning: "làm phiền",
    example: "这件事我能自己做 ，就不麻 烦你了",
    pinyinExample: "Zhè jiàn shì wǒ néng zìjǐ zuò, jiù bù máfan nǐle",
    exampleMeaning: "Chuyện này tôi tự làm được, không làm phiền bạn đâu."
  },
  {
    id: 469,
    word: "马",
    pinyin: "mǎ",
    type: "（名）",
    meaning: "ngựa, con ngựa",
    example: "我想学骑马。",
    pinyinExample: "wǒ xiǎng xué qímǎ.",
    exampleMeaning: "Tôi muốn học cưỡi ngựa."
  },
  {
    id: 470,
    word: "满足",
    pinyin: "mǎnzú",
    type: "（动）",
    meaning: "thỏa mãn, hài lòng",
    example: "这些条件他都满足了。",
    pinyinExample: "Zhèxiē tiáojiàn tā dōu mǎnzúle.",
    exampleMeaning: "Anh ây đã hài lòng với những điêu kiện này rôi."
  },
  {
    id: 471,
    word: "慢慢",
    pinyin: "mànman",
    type: "（副 词）",
    meaning: "chầm chậm",
    example: "火车慢慢开出车站。",
    pinyinExample: "Huǒchē màn man kāi chū chēzhàn.",
    exampleMeaning: "Xe lửa chầm chậm chạy ra khỏi ga."
  },
  {
    id: 472,
    word: "毛",
    pinyin: "máo",
    type: "（名）",
    meaning: "lông",
    example: "小狗会经常掉毛。",
    pinyinExample: "Xiǎo gǒu huì jīngcháng diào máo.",
    exampleMeaning: "Chú chó thỉnh thoảng sẽ rụng lông."
  },
  {
    id: 473,
    word: "毛病",
    pinyin: "máo bìng",
    type: "（名）",
    meaning: "tật, vấn đề",
    example: "这台机器有毛病。",
    pinyinExample: "Zhè tái jīqì yǒu máobìng.",
    exampleMeaning: "Cái máy này có vấn đề."
  },
  {
    id: 474,
    word: "没用",
    pinyin: "méi yòng",
    type: "（动）",
    meaning: "không có tác dụng",
    example: "我认为告诉她也没用。",
    pinyinExample: "Wǒ rènwéi gàosù tā yě méi yòng.",
    exampleMeaning: "Tôi cho rằng nói với cô ấy cũng không có tác dụng."
  },
  {
    id: 475,
    word: "媒体",
    pinyin: "méitǐ",
    type: "（名）",
    meaning: "truyền thông",
    example: "她在一个媒体公司工作。",
    pinyinExample: "Tā zài yīgè méitǐ gōngsī gōngzuò.",
    exampleMeaning: "Cô ấy làm việc ở một công ty truyền thông."
  },
  {
    id: 476,
    word: "每",
    pinyin: "měi",
    type: "（代、副）",
    meaning: "mỗi",
    example: "每天下午我都去跑步。",
    pinyinExample: "Měitiān xiàwǔ wǒ dū qù pǎobù.",
    exampleMeaning: "Mỗi ngày vào buổi chiều tôi đều đi chạy bộ."
  },
  {
    id: 477,
    word: "美",
    pinyin: "měi",
    type: "（形）",
    meaning: "đẹp",
    example: "这个姑娘长得真 美。",
    pinyinExample: "Zhège gūniáng zhǎng dé zhēnměi.",
    exampleMeaning: "Cô gái này thật đẹp."
  },
  {
    id: 478,
    word: "美好",
    pinyin: "Měihǎo",
    type: "（形）",
    meaning: "Tốt đẹp, tươi đẹp",
    example: "今天真是美好的一天。",
    pinyinExample: "Jīntiān zhēnshi měihǎo de yītiān.",
    exampleMeaning: "Hôm nay thật là một ngày tốt đẹp."
  },
  {
    id: 479,
    word: "美丽",
    pinyin: "měilì",
    type: "（形）",
    meaning: "lung linh, đẹp",
    example: "我的家乡是一个美丽的地方。",
    pinyinExample: "Wǒ de jiāxiāng shì yīgè měilì dì dìfāng.",
    exampleMeaning: "Quê hương tôi là một nơi rất đẹp."
  },
  {
    id: 480,
    word: "美食",
    pinyin: "měishí",
    type: "（名）",
    meaning: "ẩm thực, món ngon",
    example: "你能不能介绍一下中国的美食？",
    pinyinExample: "Nǐ néng bùnéng jièshào yīxià zhōngguó dì měishí?",
    exampleMeaning: "Bạn có thể giới thiệu một chút âm thực của Trung Quốc được không?"
  },
  {
    id: 481,
    word: "美术",
    pinyin: "měishù",
    type: "（名）",
    meaning: "mỹ thuật",
    example: "妹妹很喜欢美术，她以后想成为画家。",
    pinyinExample: "Mèimei hěn xǐhuān měishù, tā yǐhòu xiǎng chéngwéi huàjiā.",
    exampleMeaning: "Em gái rất thích mỹ thuật, cô ấy muốn sau này trở thành họa sĩ."
  },
  {
    id: 482,
    word: "美元",
    pinyin: "měiyuán",
    type: "（名）",
    meaning: "USD （đơn vị tiền tệ)",
    example: "我想把 200美 元换成越南盾。",
    pinyinExample: "Wǒ xiǎng bǎ 200 měiyuán huàn chéng yuènán dùn.",
    exampleMeaning: "Tôi muôn đổi 200USD thành tiền Viêt Nam."
  },
  {
    id: 483,
    word: "迷",
    pinyin: "mí",
    type: "（动）",
    meaning: "không phân biệt,thích, say mê",
    example: "最近我迷上了一部电影。",
    pinyinExample: "Zuìjìn wǒ mí shàngle yī bù diànyǐng.",
    exampleMeaning: "Gần đây tôi đang thích xem một bộ phim."
  },
  {
    id: 484,
    word: "米",
    pinyin: "mǐ",
    type: "（名）",
    meaning: "gạo",
    example: "家里的米快吃完了，一会去买一袋吧。",
    pinyinExample: "Jiālǐ de mǐ kuài chī wánliǎo, yī huǐ qù mǎi yī dài ba.",
    exampleMeaning: "Gạo trong nhà sắp hết rồi, lát nữa đi mua thêm một túi đi."
  },
  {
    id: 485,
    word: "面对",
    pinyin: "miàn duì",
    type: "（动）",
    meaning: "Đối mặt",
    example: "我们要勇敢面对困 难。",
    pinyinExample: "Wǒmen yào yǒnggǎn miàn duì kùnnán.",
    exampleMeaning: "Chúng ta phải dũng cảm đối mặt với khó khăn."
  },
  {
    id: 486,
    word: "面积",
    pinyin: "miànjī",
    type: "（名）",
    meaning: "diện tích",
    example: "这个房间的面积是多少？",
    pinyinExample: "Zhège fángjiān de miànjī shì duōshǎo?",
    exampleMeaning: "Diện tích của căn phòng này là bao nhiêu?"
  },
  {
    id: 487,
    word: "民间",
    pinyin: "mínjiān",
    type: "（名）",
    meaning: "dân gian",
    example: "民间有很多美丽的传说。",
    pinyinExample: "Mínjiān yǒu hěnduō měilì de chuánshuō.",
    exampleMeaning: "Có rất nhiêu truyền thuyết hay trong dân gian."
  },
  {
    id: 488,
    word: "民族",
    pinyin: "mínzú",
    type: "（名）",
    meaning: "dân tộc",
    example: "我们是一个多民族的国家。",
    pinyinExample: "Wǒmen shì yīgè duō mínzú de guójiā.",
    exampleMeaning: "Chúng ta là một quốc gia có nhiều dân tộc."
  },
  {
    id: 489,
    word: "明确",
    pinyin: "míngquè",
    type: "（动、形）",
    meaning: "làm sáng tỏ; rõ ràng, đúng đắn",
    example: "每个人都应该明确自己的工作任务",
    pinyinExample: "Měi gèrén dōu yīnggāi míngquè zìjǐ de gōngzuò rènwù",
    exampleMeaning: "Mỗi người đều phải rõ ràng được nhiệm vụ trong công việc của mình."
  },
  {
    id: 490,
    word: "明显",
    pinyin: "míngxiǎn",
    type: "（形）",
    meaning: "rõ ràng, hiện rõ",
    example: "这次考试，他的成绩明显提高了。",
    pinyinExample: "zhè cì kǎoshì, tā de chéngjī míngxiǎn tígāole.",
    exampleMeaning: "Lần thi này thành tích của anh ấy đã được nâng cao rõ rêt."
  },
  {
    id: 491,
    word: "命运",
    pinyin: "mìngyùn",
    type: "（名）",
    meaning: "Vận mệnh",
    example: "用自己的努力改变命运。",
    pinyinExample: "Yòng zìjǐ de nǔlì gǎibiàn mìngyùn.",
    exampleMeaning: "Dùng sự nỗ lực của bản thân đế thay đổi vận mệnh."
  },
  {
    id: 492,
    word: "某",
    pinyin: "mǒu",
    type: "（代）",
    meaning: "mỗi, một,…",
    example: "这些知识可能某天可以帮助到你。",
    pinyinExample: "Zhèxiē zhīshì kěnéng mǒu tiān kěyǐ bāngzhù dào nǐ.",
    exampleMeaning: "Những kiến thức này có thể sẽ giúp ích cho bạn vào một ngày nào đó."
  },
  {
    id: 493,
    word: "母亲",
    pinyin: "mǔqīn",
    type: "（名）",
    meaning: "mẫu thân, mẹ",
    example: "我的母亲是一位汉语老师。",
    pinyinExample: "Wǒ de mǔqīn shì yī wèi hànyǔ lǎoshī.",
    exampleMeaning: "Mẹ tôi là một cô giáo tiếng Trung."
  },
  {
    id: 494,
    word: "木头",
    pinyin: "mùtou",
    type: "（名）",
    meaning: "gỗ, mảnh gỗ",
    example: "我家的家具都是木头做的。",
    pinyinExample: "Wǒjiā de jiājù dōu shì mùtou zuò de.",
    exampleMeaning: "Đô dùng trong nhà tôi đêu làm từ gỗ."
  },
  {
    id: 495,
    word: "目标",
    pinyin: "mùbiāo",
    type: "（名）",
    meaning: "Mục tiêu",
    example: "我有明确的人生目 标。",
    pinyinExample: "Wǒ yǒu míngquè de rénshēng mùbiāo.",
    exampleMeaning: "Tôi có mục tiêu rõ ràng cho cuộc sống của mình."
  },
  {
    id: 496,
    word: "目前",
    pinyin: "mùqián",
    type: "（名）",
    meaning: "hiện nay, trước mắt",
    example: "那件事我目前还不清楚。",
    pinyinExample: "Nà jiàn shì wǒ mùqián hái bù qīngchǔ.",
    exampleMeaning: "Chuyện đó trước mắt tôi còn chưa làm rõ được."
  },
  {
    id: 497,
    word: "奶茶",
    pinyin: "nǎichá",
    type: "（名）",
    meaning: "trà sữa",
    example: "我要一杯热奶茶。",
    pinyinExample: "Wǒ yào yībēi rè nǎichá.",
    exampleMeaning: "Tôi muốn một cốc trà sữa nóng."
  },
  {
    id: 498,
    word: "男子",
    pinyin: "nánzǐ",
    type: "（名）",
    meaning: "con trai, đàn ông",
    example: "他要成为一个好男子。",
    pinyinExample: "Tā yào chéngwéi yīgè hǎo nánzǐ.",
    exampleMeaning: "Anh ấy muốn trở thành một người đàn ông tôt."
  },
  {
    id: 499,
    word: "南部",
    pinyin: "Nánbù",
    type: "（名）",
    meaning: "miền Nam, phía Nam",
    example: "我来自中国南部。",
    pinyinExample: "Wǒ láizì zhōngguó nánbù.",
    exampleMeaning: "Tôi đến từ phía nam Trung Quốc."
  },
  {
    id: 500,
    word: "难道",
    pinyin: "nándào",
    type: "（副）",
    meaning: "lẽ nào",
    example: "难道我说得不对 吗？",
    pinyinExample: "Nándào wǒ shuō dé bùduì ma?",
    exampleMeaning: "Lẽ nào tôi nói không đúng sao?"
  },
  {
    id: 501,
    word: "难度",
    pinyin: "nándù",
    type: "（名）",
    meaning: "độ khó, mức khó khăn",
    example: "这次考试的难度太高了。",
    pinyinExample: "Zhè cì kǎoshì de nándù tài gāole.",
    exampleMeaning: "Lần thi này độ khó cao quá."
  },
  {
    id: 502,
    word: "内",
    pinyin: "nèi",
    type: "（名）",
    meaning: "nội, trong",
    example: "我会在24小时内回复你。",
    pinyinExample: "Wǒ huì zài 24 xiǎoshí nèi huífù nǐ.",
    exampleMeaning: "Tôi sẽ trả lời bạn trong vòng 24h tới."
  },
  {
    id: 503,
    word: "内容",
    pinyin: "nèiróng",
    type: "（名）",
    meaning: "nội dung",
    example: "这本书的内容很丰富。",
    pinyinExample: "Zhè běn shū de nèiróng hěn fēngfù.",
    exampleMeaning: "Nội dung của quyển sách này rất phong phú."
  },
  {
    id: 504,
    word: "内心",
    pinyin: "nèixīn",
    type: "（名）",
    meaning: "nội tâm, trong lòng",
    example: "其实她的内心很幵心。-",
    pinyinExample: "Qíshí tā de nèixīn hěn jiān xīn.-",
    exampleMeaning: "Thật ra trong lòng cô ấy rất vui vẻ."
  },
  {
    id: 505,
    word: "能不能",
    pinyin: "néng bùnéng",
    type: "（词组）",
    meaning: "có thể không",
    example: "我没听清楚，你能不能再说一次？",
    pinyinExample: "Wǒ méi tīng qīngchǔ, nǐ néng bùnéng zàishuō yīcì?",
    exampleMeaning: "Tôi chưa nghe rõ, bạn có thể nói lại lần nữa không?"
  },
  {
    id: 506,
    word: "能力",
    pinyin: "nénglì",
    type: "（名）",
    meaning: "năng lực, trình độ",
    example: "他有能力做这份工作。",
    pinyinExample: "Tā yǒu nénglì zuò zhè fèn gōngzuò.",
    exampleMeaning: "Anh ấy có trình độ để làm công việc này."
  },
  {
    id: 507,
    word: "年初",
    pinyin: "niánchū",
    type: "（名）",
    meaning: "đầu năm",
    example: "去年年初他去中国了。",
    pinyinExample: "Qùnián niánchū tā qù zhōngguóle.",
    exampleMeaning: "Đầu năm ngoái anh ấy đã đi Trung Quốc."
  },
  {
    id: 508,
    word: "年代",
    pinyin: "niándài",
    type: "（名）",
    meaning: "niên đại, thời đại, thời kì",
    example: "我们生活在一个幸福的年 代。",
    pinyinExample: "Wǒmen shēnghuó zài yīgè xìngfú de niándài.",
    exampleMeaning: "Chúng ta đang sống ở một thời kj hạnh phúc."
  },
  {
    id: 509,
    word: "年底",
    pinyin: "niándǐ",
    type: "（名）",
    meaning: "cuối năm",
    example: "他们希望在年底前可以完全办好。",
    pinyinExample: "Tāmen xīwàng zài niándǐ qián kěyǐ wánquán bàn hǎo.",
    exampleMeaning: "Bọn họ hi vọng trước khi đến cuối năm có thể làm xong hoàn toàn."
  },
  {
    id: 510,
    word: "年纪",
    pinyin: "nián jì",
    type: "（名）",
    meaning: "Tuổi tác",
    example: "奶奶年纪大了，身体不太 好。",
    pinyinExample: "Nǎinai niánjì dàle, shēntǐ bù tài hǎo.",
    exampleMeaning: "Bà nội đã cao tuổi rồi, thân thể không còn khỏe nữa."
  },
  {
    id: 511,
    word: "念",
    pinyin: "niàn",
    type: "（动）",
    meaning: "đọc, niệm",
    example: "我奶奶在房间里念经",
    pinyinExample: "Wǒ nǎinai zài fángjiān lǐ niànjīng",
    exampleMeaning: "Bà tôi đang niệm kinh ở trong phòng"
  },
  {
    id: 512,
    word: "牛",
    pinyin: "niú",
    type: "（名）",
    meaning: "bò, con bò",
    example: "他一看见牛就害怕",
    pinyinExample: "tā yī kànjiàn niú jiù hàipà",
    exampleMeaning: "Anh ấy hễ cứ nhìn thấy bò là sợ."
  },
  {
    id: 513,
    word: "农村",
    pinyin: "nóngcūn",
    type: "（名）",
    meaning: "nông thôn",
    example: "我小时候在农村生活。",
    pinyinExample: "wǒ xiǎoshíhòu zài nóngcūn shēnghuó.",
    exampleMeaning: "Hôi nhỏ tôi sông ở nông thôn."
  },
  {
    id: 514,
    word: "农民",
    pinyin: "nóngmín",
    type: "（名）",
    meaning: "nông dân",
    example: "我的爷爷奶奶都是农民。",
    pinyinExample: "Wǒ de yéyé nǎinai dōu shì nóngmín.",
    exampleMeaning: "Ông bà nội của tôi đều là nông dân"
  },
  {
    id: 515,
    word: "农业",
    pinyin: "nóngyè",
    type: "（名）",
    meaning: "nông nghiệp",
    example: "这些条件对国家的农业不 好。",
    pinyinExample: "Zhèxiē tiáojiàn duì guójiā de nóngyè bù hǎo.",
    exampleMeaning: "Những điều kiện đó không tốt cho nền nông nghiệp quôc gia."
  },
  {
    id: 516,
    word: "女子",
    pinyin: "nǚzǐ",
    type: "（名）",
    meaning: "con gái, đàn bà",
    example: "我认识了一个外国女子。",
    pinyinExample: "Wǒ rènshíle yīgè wàiguó nǚzǐ.",
    exampleMeaning: "Tôi quen biêt một người con gái ngoại quôc."
  },
  {
    id: 517,
    word: "暖和",
    pinyin: "nuǎnhuo",
    type: "（形）",
    meaning: "ấm áp",
    example: "到了春天天气就暖和了。",
    pinyinExample: "Dàole chūntiān tiānqì jiù nuǎnhuole.",
    exampleMeaning: "Tới mùa xuân thì thời tiêt sẽ ấm áp hơn."
  },
  {
    id: 518,
    word: "怕",
    pinyin: "pà",
    type: "（动、副）",
    meaning: "sợ, sợ hãi",
    example: "他怕你不知道，所以让我告诉你。",
    pinyinExample: "Tā pà nǐ bù zhīdào, suǒyǐ ràng wǒ gàosù nǐ.",
    exampleMeaning: "Anh ây sợ bạn không biết nên bảo tôi nói với bạn."
  },
  {
    id: 519,
    word: "拍",
    pinyin: "pāi",
    type: "（动）",
    meaning: "đập, vỗ, phủi",
    example: "她拍了一下桌子。",
    pinyinExample: "Tā pāile yīxià zhuōzi.",
    exampleMeaning: "Cô ấy đập xuống bàn một cái."
  },
  {
    id: 520,
    word: "排",
    pinyin: "pái",
    type: "（动）",
    meaning: "xếp, sắp",
    example: "老师把他排在我后面坐。",
    pinyinExample: "Lǎoshī bǎ tā pái zài wǒ hòumiàn zuò.",
    exampleMeaning: "Giáo viên xếp cho anh ấy ngồi đằng sau tôi."
  },
  {
    id: 521,
    word: "排名",
    pinyin: "páimíng",
    type: "（动）",
    meaning: "xếp hạng",
    example: "他的成绩在比赛中排第五 名。",
    pinyinExample: "Tā de chéngjī zài bǐsài zhōng pái dì wǔ míng.",
    exampleMeaning: "Thành tích của anh ấy xếp hạng 5."
  },
  {
    id: 522,
    word: "牌子",
    pinyin: "Páizi",
    type: "（名）",
    meaning: "nhãn hiệu",
    example: "这件衣服是什么牌子的？",
    pinyinExample: "Zhè jiàn yīfú shì shénme páizi de?",
    exampleMeaning: "Bộ quần áo này là nhãn hiệu gì thế?"
  },
  {
    id: 523,
    word: "派",
    pinyin: "pài",
    type: "（动、名）",
    meaning: "cắt cử, phái đi, cử đi",
    example: "公司派他去上海。",
    pinyinExample: "Gōngsī pài tā qù shànghǎi.",
    exampleMeaning: "Công ty cắt cử anh ấy đi Thượng Hải."
  },
  {
    id: 524,
    word: "判断",
    pinyin: "pànduàn",
    type: "（动、名）",
    meaning: "phán đoán",
    example: "你判断得正确C",
    pinyinExample: "Nǐ pànduàn dé zhèngquè C",
    exampleMeaning: "Phán đoán của bạn là chính xác."
  },
  {
    id: 525,
    word: "胖",
    pinyin: "pàng",
    type: "（形）",
    meaning: "béo béo, mập mạp",
    example: "这个小女孩胖胖的 ，很可 爱。",
    pinyinExample: "zhège xiǎo nǚhái pàng pàng de, hěn kě’ài.",
    exampleMeaning: "Cô gái này béo béo rât đáng yêu."
  },
  {
    id: 526,
    word: "跑步",
    pinyin: "pǎobù",
    type: "（动）",
    meaning: "chạy bộ",
    example: "我坚持每天早上跑步。",
    pinyinExample: "Wǒ jiānchí měitiān zǎoshang pǎobù.",
    exampleMeaning: "Mỗi buổi sáng tôi đều kiên trì chạy bộ."
  },
  {
    id: 527,
    word: "配",
    pinyin: "pèi",
    type: "（动）",
    meaning: "kêt hợp, phối hợp",
    example: "这双鞋要配上那件裙子。",
    pinyinExample: "Zhè shuāng xié yào pèi shàng nà jiàn qúnzi.",
    exampleMeaning: "Đôi giày này phải phối hợp với chiếc váy kia. •"
  },
  {
    id: 528,
    word: "配合",
    pinyin: "pèihé",
    type: "（动）",
    meaning: "Phối hợp",
    example: "这个工作需要你们配合。",
    pinyinExample: "Zhège gōngzuò xūyào nǐmen pèihé.",
    exampleMeaning: "Công việc này cần sự phối hợp của các bạn."
  },
  {
    id: 529,
    word: "批评",
    pinyin: "pīpíng",
    type: "（动）",
    meaning: "phê bình",
    example: "老师批评了今天没交作业的同学。",
    pinyinExample: "Lǎoshī pīpíngle jīntiān méi jiāo zuòyè de tóngxué.",
    exampleMeaning: "Giáo viên phê bình các bạn học hôm nay không nộp bài tập."
  },
  {
    id: 530,
    word: "批准",
    pinyin: "pīzhǔn",
    type: "（动）",
    meaning: "phê chuẩn, duyệt",
    example: "公司批准他休息一个月。",
    pinyinExample: "Gōngsī pīzhǔn tā xiūxí yīgè yuè.",
    exampleMeaning: "Công ty phê chuẩn cho anh ấy nghỉ ngơi 1 tháng."
  },
  {
    id: 531,
    word: "皮",
    pinyin: "pí",
    type: "（名）",
    meaning: "da, vỏ",
    example: "牛的皮很厚",
    pinyinExample: "Niú de pí hěn hòu",
    exampleMeaning: "Da của bò rất dày"
  },
  {
    id: 532,
    word: "皮包",
    pinyin: "píbāo",
    type: "（名）",
    meaning: "cặp da",
    example: "我的皮包忘在火车上了。",
    pinyinExample: "wǒ de píbāo wàng zài huǒchē shàngle.",
    exampleMeaning: "Tôi đê quên chiêc cặp da trên xe lửa rôi."
  },
  {
    id: 533,
    word: "啤酒",
    pinyin: "píjiǔ",
    type: "（名）",
    meaning: "bia",
    example: "天气这么热，我真想喝一杯啤酒。",
    pinyinExample: "Tiānqì zhème rè, wǒ zhēn xiǎng hè yībēi píjiǔ.",
    exampleMeaning: "Thời tiết nóng như thế này, tôi thật sự muôn uống một cốc bia."
  },
  {
    id: 534,
    word: "票价",
    pinyin: "piào jià",
    type: "（名）",
    meaning: "giá vé",
    example: "公交车的票价是两元钱。",
    pinyinExample: "Gōngjiāo chē de piào jià shì liǎng yuán qián.",
    exampleMeaning: "Giá vé của xe công cộng là 2 đồng."
  },
  {
    id: 535,
    word: "评价",
    pinyin: "píngjià",
    type: "（动、名）",
    meaning: "đánh giá （giá trị)",
    example: "领导给她很高的评价。",
    pinyinExample: "Lǐngdǎo gěi tā hěn gāo de píngjià.",
    exampleMeaning: "Lãnh đạo đánh giá côây rất cao."
  },
  {
    id: 536,
    word: "苹果",
    pinyin: "píngguǒ",
    type: "（名）",
    meaning: "táo, quả táo",
    example: "妈妈洗好了苹果。",
    pinyinExample: "Māmā xǐ hǎole píngguǒ.",
    exampleMeaning: "Mẹ đã rửa sạch táo rồi."
  },
  {
    id: 537,
    word: "破",
    pinyin: "pò",
    type: "（动，形)",
    meaning: "phá vỡ, đứt, thủng",
    example: "我不小心把杯子打破了。",
    pinyinExample: "Wǒ bù xiǎoxīn bǎ bēizi dǎpòle.",
    exampleMeaning: "Tôi không cẩn thận làm vỡ cái cốc."
  },
  {
    id: 538,
    word: "破坏",
    pinyin: "pòhuài",
    type: "（动）",
    meaning: "phá hoại, làm hỏng",
    example: "人类不能破坏环境。",
    pinyinExample: "Rénlèi bùnéng pòhuài huánjìng.",
    exampleMeaning: "Con người không được phá hoại môi trường."
  },
  {
    id: 539,
    word: "普遍",
    pinyin: "pǔbiàn",
    type: "（形）",
    meaning: "Phổ biến, rộng rãi, rộng khắp",
    example: "这个建议受到了普遍欢迎。",
    pinyinExample: "Zhège jiànyì shòudàole pǔbiàn huānyíng.",
    exampleMeaning: "Đề xuất này được hoan nghênh rộng rãi."
  },
  {
    id: 540,
    word: "普及",
    pinyin: "pǔjí",
    type: "（动、形）",
    meaning: "phổ cập",
    example: "现在电话巳经普及了每一个家庭。",
    pinyinExample: "Xiànzài diànhuà sì jīng pǔjíle měi yīgè jiātíng.",
    exampleMeaning: "Điện thoại bây giờ đã được bốn biến đến khắp các gia đình."
  },
  {
    id: 541,
    word: "期",
    pinyin: "qī",
    type: "（量）",
    meaning: "khóa, kj học",
    example: "训练班总办了三期。",
    pinyinExample: "Xùnliàn bān zǒng bànle sān qī.",
    exampleMeaning: "Lớp huấn luyện tổng cộng đã tổ chức được ba kj học."
  },
  {
    id: 542,
    word: "齐",
    pinyin: "qí",
    type: "（动、形）",
    meaning: "đủ, đầy",
    example: "我们班的同学已经到齐了。",
    pinyinExample: "Wǒmen bān de tóngxué yǐjīng dào qíle.",
    exampleMeaning: "Các bạn học trong lớp đã đến đủ rôi."
  },
  {
    id: 543,
    word: "其次",
    pinyin: "qícì",
    type: "（代）",
    meaning: "thứ nhì, tiếp theo, sau đó",
    example: "首先要认真听讲，其次要完成作业",
    pinyinExample: "Shǒuxiān yào rènzhēn tīngjiǎng, qícì yào wánchéng zuòyè",
    exampleMeaning: "Trước tiên phải nghiêm túc lắng nghe, sau đó hoàn thành bài tập."
  },
  {
    id: 544,
    word: "其实",
    pinyin: "Qíshí",
    type: "（副）",
    meaning: "thật ra",
    example: "这道题其实不难。",
    pinyinExample: "Zhè dào tí qíshí bù nán.",
    exampleMeaning: "Câu hỏi này thật ra không khó."
  },
  {
    id: 545,
    word: "奇怪",
    pinyin: "qíguài",
    type: "（形）",
    meaning: "kì lạ, quái",
    example: "我感觉这件事有些奇怪。",
    pinyinExample: "Wǒ gǎnjué zhè jiàn shì yǒuxiē qíguài.",
    exampleMeaning: "Tôi cảm thấy chuyện này có chút kì lạ."
  },
  {
    id: 546,
    word: "气候",
    pinyin: "qìhòu",
    type: "（名）",
    meaning: "khí hậu",
    example: "中国北方和南方的气候有很大不同",
    pinyinExample: "Zhōngguó běifāng hé nánfāng de qìhòu yǒu hěn dà bùtóng",
    exampleMeaning: "Khí hậu của miền Băc và miền Nam Trung Quôc rất khác nhau."
  },
  {
    id: 547,
    word: "千万",
    pinyin: "qiān wàn",
    type: "（副）",
    meaning: "Nhất định, tuyệt đối",
    example: "你千万不要放弃自己的目 标。",
    pinyinExample: "nǐ qiān wàn bùyào fàngqì zìjǐ de mùbiāo.",
    exampleMeaning: "Bạn nhất định không được từ bỏ mục tiêu của bản thân."
  },
  {
    id: 548,
    word: "前后",
    pinyin: "qiánhòu",
    type: "（名）",
    meaning: "trước sau, từ đầu đến cuối",
    example: "这件事前后都是她做的。",
    pinyinExample: "Zhè jiàn shìqián hòu dōu shì tā zuò de.",
    exampleMeaning: "Chuyện này từ đầu đến cuối đều là cô ấy làm."
  },
  {
    id: 549,
    word: "前进",
    pinyin: "qiánjìn",
    type: "（动）",
    meaning: "Tiến lên, tiến tới, tiến bước",
    example: "我们都在向同一个方向前 进。",
    pinyinExample: "Wǒmen dōu zài xiàng tóng yīgè fāngxiàng qiánjìn.",
    exampleMeaning: "Chúng ta cùng tiến về một phương hướng."
  },
  {
    id: 550,
    word: "前面",
    pinyin: "qiánmiàn",
    type: "（名）",
    meaning: "phía trước, trước mắt",
    example: "这个问题前面已经讨论过了。",
    pinyinExample: "Zhège wèntí qiánmiàn yǐjīng tǎolùnguòle.",
    exampleMeaning: "Vấn đề này trước mắt đã được thảo luận rồi."
  },
  {
    id: 551,
    word: "前往",
    pinyin: "qiánwǎng",
    type: "（动）",
    meaning: "tiến về phía trước",
    example: "这是前往河内",
    pinyinExample: "Zhè shì qiánwǎng hénèi de huǒchē.",
    exampleMeaning: "Đây là xe lửa đi về phía Hà Nội."
  },
  {
    id: 552,
    word: "强",
    pinyin: "qiáng",
    type: "（形）",
    meaning: "mạnh, khỏe",
    example: "小明的工作能力很 强。",
    pinyinExample: "Xiǎomíng de gōngzuò nénglì hěn qiáng.",
    exampleMeaning: "Năng lực làm việc của bạn Minh rât mạnh."
  },
  {
    id: 553,
    word: "强大",
    pinyin: "qiángdà",
    type: "（形）",
    meaning: "lớn mạnh, mạnh mẽ",
    example: "他们的力量太强大了。",
    pinyinExample: "Tāmen de lìliàng tài qiángdàle.",
    exampleMeaning: "Lực lượng của bọn họ rât lớn mạnh."
  },
  {
    id: 554,
    word: "强调",
    pinyin: "qiángdiào",
    type: "（动）",
    meaning: "nhấn mạnh",
    example: "他强调了几次说这件事很重要。",
    pinyinExample: "Tā qiángdiàole jǐ cì shuō zhè jiàn shì hěn zhòngyào.",
    exampleMeaning: "Anh ây đã nhân mạnh mấy lần rằng chuyện này rât quan trọng."
  },
  {
    id: 555,
    word: "强烈",
    pinyin: "qiángliè",
    type: "（形）",
    meaning: "mãnh liệt",
    example: "各位代表强烈反对这些计划。",
    pinyinExample: "Gèwèi dàibiǎo qiángliè fǎnduì zhèxiē jìhuà.",
    exampleMeaning: "Các vị đại biểu kịch liệt phản đối những kế hoạch này."
  },
  {
    id: 556,
    word: "桥",
    pinyin: "qiáo",
    type: "（名）",
    meaning: "cầu",
    example: "我们站在桥上看风景。",
    pinyinExample: "Wǒmen zhàn zài qiáo shàng kàn fēngjǐng.",
    exampleMeaning: "Chúng tôi đứng ở trên cầu ngắm phong cảnh."
  },
  {
    id: 557,
    word: "巧",
    pinyin: "qiǎo",
    type: "（形）",
    meaning: "khéo léo, trùng hợp",
    example: "我一出门就看到他，太巧了。",
    pinyinExample: "Wǒ yī chūmén jiù kàn dào tā, tài qiǎole.",
    exampleMeaning: "Tôi vừa ra khỏi cửa thì nhìn thây anh ấy, thật trùng hợp."
  },
  {
    id: 558,
    word: "亲",
    pinyin: "qīn",
    type: "（形）",
    meaning: "ruột thịt",
    example: "在那里的两个人是他的亲兄弟。",
    pinyinExample: "Zài nàlǐ de liǎng gèrén shì tā de qīn xiōngdì.",
    exampleMeaning: "Hai người ở đó là anh em ruột của anh ấy."
  },
  {
    id: 559,
    word: "亲切",
    pinyin: "qīnqiè",
    type: "（形）",
    meaning: "thân thiết",
    example: "她说的话让我感觉很亲切。",
    pinyinExample: "Tā shuō dehuà ràng wǒ gǎnjué hěn qīnqiè.",
    exampleMeaning: "Lời cô ây nói khiến tôi cảm thấy rất thân thiêt."
  },
  {
    id: 560,
    word: "亲人",
    pinyin: "qīnrén",
    type: "（名）",
    meaning: "người thân",
    example: "我很想念家乡的亲人。",
    pinyinExample: "Wǒ hěn xiǎngniàn jiāxiāng de qīnrén.",
    exampleMeaning: "Tôi rât nhớ người thân ở quê nhà."
  },
  {
    id: 561,
    word: "亲自",
    pinyin: "qīnzì",
    type: "（副）",
    meaning: "tự mình, đích thân",
    example: "这封信很重要，要你亲自交给他。",
    pinyinExample: "Zhè fēng xìn hěn zhòngyào, yào nǐ qīnzì jiāo gěi tā.",
    exampleMeaning: "Bức thư này rât quan trọng, bạn phải đích thân đưa cho anh ấy."
  },
  {
    id: 562,
    word: "情感",
    pinyin: "qínggǎn",
    type: "（名）",
    meaning: "tình cảm",
    example: "他们两之间的感情非常好。",
    pinyinExample: "Tāmen liǎng zhī jiān de gǎnqíng fēicháng hǎo.",
    exampleMeaning: "Tình cảm của hai người họ cực kì tốt."
  },
  {
    id: 563,
    word: "情况",
    pinyin: "qíngkuàng",
    type: "（名）",
    meaning: "tình hình",
    example: "那件事的情况怎么 样？",
    pinyinExample: "Nà jiàn shì de qíngkuàng zěnme yàng?",
    exampleMeaning: "Tình hình chuyện đó như thế nào rồi?"
  },
  {
    id: 564,
    word: "请教",
    pinyin: "qǐngjiào",
    type: "（动）",
    meaning: "xin chỉ bảo",
    example: "我想请教您一件事。",
    pinyinExample: "Wǒ xiǎng qǐngjiào nín yī jiàn shì.",
    exampleMeaning: "Tôi muốn xin ông chỉ dạy cho tôi một chuyện."
  },
  {
    id: 565,
    word: "庆祝",
    pinyin: "qìngzhù",
    type: "（动）",
    meaning: "tô chức, chúc mừng",
    example: "我们全家在为弟弟庆祝生日。",
    pinyinExample: "Wǒmen quánjiā zài wèi dìdì qìngzhù shēngrì.",
    exampleMeaning: "Cả nhà chúng tôi đang chúc mừng sinh nhật em trai."
  },
  {
    id: 566,
    word: "球迷",
    pinyin: "Qiúmí",
    type: "（名）",
    meaning: "fan bóng đá",
    example: "我是越南队的球迷。",
    pinyinExample: "Wǒ shì yuènán duì de qiúmí.",
    exampleMeaning: "Tôi là fan bóng đá của đội tuyển Việt Nam."
  },
  {
    id: 567,
    word: "区",
    pinyin: "qū",
    type: "（名）",
    meaning: "khu",
    example: "我们住在很富裕的住宅区。",
    pinyinExample: "Wǒmen zhù zài hěn fùyù de zhùzhái qū.",
    exampleMeaning: "Chúng tôi sống trong khu dân cư giàu có."
  },
  {
    id: 568,
    word: "区别",
    pinyin: "qūbié",
    type: "（名、 动）",
    meaning: "sự khác biệt, phân biệt",
    example: "我看不出这两个杯子有什么区别。",
    pinyinExample: "Wǒ kàn bù chū zhè liǎng gè bēizi yǒu shé me qūbié.",
    exampleMeaning: "Tôi không nhìn ra được sự khác biệt của hai cái cốc này."
  },
  {
    id: 569,
    word: "取消",
    pinyin: "qǔxiāo",
    type: "（动）",
    meaning: "xóa bỏ, hủy bỏ",
    example: "通知说，今天的会议被取消了。",
    pinyinExample: "Tōngzhī shuō, jīntiān de huìyì bèi qǔxiāole.",
    exampleMeaning: "Thông báo nói hội nghị hôm nay bị hủy bỏ rôi."
  },
  {
    id: 570,
    word: "去世",
    pinyin: "qùshì",
    type: "（动）",
    meaning: "qua đời, từ trần",
    example: "我的爷爷去世很多年了。",
    pinyinExample: "Wǒ de yéyé qùshì hěnduō niánle.",
    exampleMeaning: "Ông nội tôi đã qua đời nhiều năm rôi."
  },
  {
    id: 571,
    word: "全场",
    pinyin: "quán chǎng",
    type: "（名）",
    meaning: "khán giả",
    example: "全场观众爆发出热烈的掌声。",
    pinyinExample: "Quán chǎng guānzhòng bàofā chū rèliè de zhǎngshēng.",
    exampleMeaning: "Khán giả vỗ tay nhiệt liệt."
  },
  {
    id: 572,
    word: "全面",
    pinyin: "quánmià n",
    type: "（形）",
    meaning: "toàn diện, mọi mặt",
    example: "他考虑问题很全面。",
    pinyinExample: "Tā kǎolǜ wèntí hěn quánmiàn.",
    exampleMeaning: "Anh ấy suy nghĩ về vấn đề rất toàn diện."
  },
  {
    id: 573,
    word: "全球",
    pinyin: "quánqiú",
    type: "（名）",
    meaning: "toàn cầu",
    example: "全球都在关注环境问题。",
    pinyinExample: "Quánqiú dōu zài guānzhù huánjìng wèntí.",
    exampleMeaning: "Toàn cầu đều đang quan tâm tới vấn đề môi trường."
  },
  {
    id: 574,
    word: "缺",
    pinyin: "quē",
    type: "（动）",
    meaning: "thiếu, hụt",
    example: "我们班还缺两个同学没来。",
    pinyinExample: "Wǒmen bān hái quē liǎng gè tóngxué méi lái.",
    exampleMeaning: "Lớp chúng ta còn thiếu hai bạn học chưa tới."
  },
  {
    id: 575,
    word: "缺点",
    pinyin: "quēdiǎn",
    type: "（名）",
    meaning: "khuyết điểm, thiếu sót",
    example: "我的工作能力还存在很多缺点。",
    pinyinExample: "Wǒ de gōngzuò nénglì hái cúnzài hěnduō quēdiǎn.",
    exampleMeaning: "Năng lực làm việc của tôi còn có nhiêu thiêu sót."
  },
  {
    id: 576,
    word: "缺少",
    pinyin: "quēshǎo",
    type: "（动）",
    meaning: "thiêu",
    example: "人的生活中不能缺少水。",
    pinyinExample: "Rén de shēnghuó zhōng bùnéng quēshǎo shuǐ.",
    exampleMeaning: "Cuộc sống của con người không thể thiếu nước."
  },
  {
    id: 577,
    word: "确保",
    pinyin: "quèbǎo",
    type: "（动）",
    meaning: "đảm bảo chăc chăn",
    example: "我不确保这个道理是对的。",
    pinyinExample: "Wǒ bù quèbǎo zhège dàolǐ shì duì de.",
    exampleMeaning: "Tôi không đảm bảo chắc chắn lj lê này là đúng đâu."
  },
  {
    id: 578,
    word: "确定",
    pinyin: "quèdìng",
    type: "（动、形）",
    meaning: "xác định, khẳng định",
    example: "篮球比赛的时间还没有确定。",
    pinyinExample: "Lánqiú bǐsài de shíjiān hái méiyǒu quèdìng.",
    exampleMeaning: "Thời gian thi đấu của trận bóng rổ còn chưa được xác đinh."
  },
  {
    id: 579,
    word: "确实",
    pinyin: "quèshí",
    type: "（副、形）",
    meaning: "xác thực, thực sự",
    example: "这句话确实不是我说的。",
    pinyinExample: "Zhè jù huà quèshí bùshì wǒ shuō de.",
    exampleMeaning: "Lời này thật sự không phải do tôi nói."
  },
  {
    id: 580,
    word: "裙子",
    pinyin: "qúnzi",
    type: "（名）",
    meaning: "váy",
    example: "这条裙子很适合你。",
    pinyinExample: "Zhè tiáo qúnzi hěn shìhé nǐ.",
    exampleMeaning: "Cái váy này rất hợp với bạn."
  },
  {
    id: 581,
    word: "群",
    pinyin: "qún",
    type: "（量）",
    meaning: "đám, đoàn, đội, đàn",
    example: "一群孩子们在公园里玩儿。",
    pinyinExample: "Yīqún háizimen zài gōngyuán lǐ wán er.",
    exampleMeaning: "Một đám trẻ con đang chơi trong công viên."
  },
  {
    id: 582,
    word: "热爱",
    pinyin: "rè’ài",
    type: "（动）",
    meaning: "nhiệt tình, dam mê",
    example: "小明热爱音乐，他想成为一个歌手。",
    pinyinExample: "Xiǎomíng rè’ài yīnyuè, tā xiǎng chéngwéi yīgè gēshǒu.",
    exampleMeaning: "Minh đam mê âm nhạc, anh ấy muốn trở thành ca sĩ."
  },
  {
    id: 583,
    word: "执列",
    pinyin: "zhí liè",
    type: "（形）",
    meaning: "nhiệt liệt",
    example: "热烈欢迎你们来我们学校参观。",
    pinyinExample: "Rèliè huānyíng nǐmen lái wǒmen xuéxiào cānguān.",
    exampleMeaning: "Nhiệt liệt hoan nghênh các bạn tới tham quan trường chúng tôi."
  },
  {
    id: 584,
    word: "人才",
    pinyin: "réncái",
    type: "（名）",
    meaning: "nhân tài",
    example: "我们公司需要像你这样的人才。",
    pinyinExample: "Wǒmen gōngsī xūyào xiàng nǐ zhèyàng de réncái.",
    exampleMeaning: "Công ty chúng tôi cần nhân tài như bạn."
  },
  {
    id: 585,
    word: "人工",
    pinyin: "réngōng",
    type: "（名、形）",
    meaning: "nhân lực, nhân tạo",
    example: "修这间房子不需要很多人工。",
    pinyinExample: "Xiū zhè jiān fángzi bù xūyào hěnduō réngōng.",
    exampleMeaning: "Không cần quá nhiều nhân lực để sửa căn phòng này."
  },
  {
    id: 586,
    word: "人类",
    pinyin: "rénlèi",
    type: "（名）",
    meaning: "nhân loại, loài người",
    example: "他的研究是为了人类生活的改善。",
    pinyinExample: "Tā de yánjiū shì wèile rénlèi shēnghuó de gǎishàn.",
    exampleMeaning: "Nghiên cứu của anh ấy nhằm cải thiện cuộc sống nhân loại"
  },
  {
    id: 587,
    word: "人民",
    pinyin: "Rénmín",
    type: "（名）",
    meaning: "nhân dân",
    example: "人民的生活水平提高了。",
    pinyinExample: "Rénmín de shēnghuó shuǐpíng tígāole.",
    exampleMeaning: "Mức sống của nhân dân đã được nâng cao hơn."
  },
  {
    id: 588,
    word: "人民 币",
    pinyin: "rénmínbì",
    type: "（名）",
    meaning: "nhân dân tệ",
    example: "我想把越南盾换成人民币。",
    pinyinExample: "Wǒ xiǎng bǎ yuènán dùn huàn chéng rénmínbì.",
    exampleMeaning: "Tôi muốn đổi tiền Việt Nam thành nhân dân tệ."
  },
  {
    id: 589,
    word: "人群",
    pinyin: "rénqún",
    type: "（名）",
    meaning: "đoàn người, đám người",
    example: "聚集的人群共有一千多人。",
    pinyinExample: "Jùjí de rénqún gòngyǒu yīqiān duō rén.",
    exampleMeaning: "Đám đông tụ tập có tất cả hơn 1000 người."
  },
  {
    id: 590,
    word: "人生",
    pinyin: "rénshēn g",
    type: "（名）",
    meaning: "đời người",
    example: "人生最幸福的是跟喜欢的人在一起。",
    pinyinExample: "Rénshēng zuì xìngfú de shì gēn xǐhuān de rén zài yīqǐ.",
    exampleMeaning: "Hạnh phúc nhât của đời người là được ở cùng người mình thích."
  },
  {
    id: 591,
    word: "人员",
    pinyin: "rényuán",
    type: "（名）",
    meaning: "nhân viên",
    example: "不是公司的人员不能进去。",
    pinyinExample: "Bùshì gōngsī de rényuán bùnéng jìnqù.",
    exampleMeaning: "Không phải nhân viên công ty không được vào."
  },
  {
    id: 592,
    word: "认出",
    pinyin: "rèn chū",
    type: "（动）",
    meaning: "nhận ra",
    example: "二十年没见，他还能认出 我。",
    pinyinExample: "Èrshí nián méi jiàn, tā hái néng rèn chū wǒ.",
    exampleMeaning: "20 năm không gặp mà anh ấy vẫn nhận ra tôi."
  },
  {
    id: 593,
    word: "认得",
    pinyin: "rèndé",
    type: "（动）",
    meaning: "nhận thấy được",
    example: "这个字我不认得。",
    pinyinExample: "Zhège zì wǒ bù rèndé.",
    exampleMeaning: "Tôi không biêt chữ này."
  },
  {
    id: 594,
    word: "认可",
    pinyin: "rènkě",
    type: "（动）",
    meaning: "cho phép, đồng j",
    example: "他的发明得到了大家的认 可。",
    pinyinExample: "Tā de fǎ míng dédàole dàjiā de rènkě.",
    exampleMeaning: "Phát minh của anh ấy nhận được sự công nhận từ mọi người."
  },
  {
    id: 595,
    word: "任",
    pinyin: "rèn",
    type: "（动）",
    meaning: "nhận",
    example: "小明被任为我们班的班长。",
    pinyinExample: "Xiǎomíng bèi rèn wèi wǒmen bān de bānzhǎng.",
    exampleMeaning: "Minh được bầu là lớp trưởng lớp tôi."
  },
  {
    id: 596,
    word: "任",
    pinyin: "rèn",
    type: "（连）",
    meaning: "bất kể, cho dù",
    example: "任你怎么说，我都不会同 意。",
    pinyinExample: "Rèn nǐ zěnme shuō, wǒ dū bù huì tóngyì.",
    exampleMeaning: "Bất kể bạn nói gì tôi cũng không đồng j."
  },
  {
    id: 597,
    word: "任何",
    pinyin: "rènhé",
    type: "（代）",
    meaning: "bất luận cái gì",
    example: "任何事情都要认真做。",
    pinyinExample: "Rènhé shìqíng dōu yào rènzhēn zuò.",
    exampleMeaning: "Bất kể chuyện gì thì cũng phải làm thật nghiêm túc."
  },
  {
    id: 598,
    word: "任务",
    pinyin: "rènwù",
    type: "（名）",
    meaning: "Nhiệm vu",
    example: "我已经完成了他给我的任 务。",
    pinyinExample: "Wǒ yǐjīng wánchéngle tā gěi wǒ de rènwù.",
    exampleMeaning: "Tôi đã hoàn thành nhiệm vụ mà anh ấy giao cho tôi."
  },
  {
    id: 599,
    word: "仍",
    pinyin: "réng",
    type: "（副）",
    meaning: "Vẫn, dựa vào, dựa theo",
    example: "他生病了仍来学校上课。",
    pinyinExample: "Tā shēngbìngle réng lái xuéxiào shàngkè.",
    exampleMeaning: "Anh ấy bị ốm mà vẫn đi học."
  },
  {
    id: 600,
    word: "仍然",
    pinyin: "réngrán",
    type: "（副）",
    meaning: "vẫn cứ, tiếp tục",
    example: "他仍然坚持每天早上跑步。",
    pinyinExample: "Tā réngrán jiānchí měitiān zǎoshang pǎobù.",
    exampleMeaning: "Anh ấy vẫn kiên trì chạy bộ vào mỗi buổi sáng."
  },
  {
    id: 601,
    word: "日常",
    pinyin: "rìcháng",
    type: "（形）",
    meaning: "hằng ngày",
    example: "每天喝一杯咖啡，是我的日常习惯.",
    pinyinExample: "Měitiān hè yībēi kāfēi, shì wǒ de rìcháng xíguàn.",
    exampleMeaning: "Mỗi ngày uống 1 cốc cà phê, đây là thói quen của tôi."
  },
  {
    id: 602,
    word: "容易",
    pinyin: "róngyì",
    type: "（形）",
    meaning: "dễ, dễ dàng",
    example: "小红身体不太好，容易生病。",
    pinyinExample: "Xiǎo hóng shēntǐ bù tài hǎo, róngyì shēngbìng.",
    exampleMeaning: "Sức khỏe của Tiểu Hồng không tốt lắm, rất dễ bị ốm."
  },
  {
    id: 603,
    word: "如何",
    pinyin: "rúhé",
    type: "（代）",
    meaning: "như thế nào, làm sao",
    example: "你最近工作如何？",
    pinyinExample: "Nǐ zuìjìn gōngzuò rúhé?",
    exampleMeaning: "Gần đây công việc của bạn thế nào rôi?"
  },
  {
    id: 604,
    word: "散步",
    pinyin: "sànbù",
    type: "（动）",
    meaning: "đi dạo",
    example: "晚饭后，我和妈妈去公园散步。",
    pinyinExample: "Wǎnfàn hòu, wǒ hé māmā qù gōngyuán sànbù.",
    exampleMeaning: "Sau bữa tối, tôi và mẹ ra công viên đi dạo."
  },
  {
    id: 605,
    word: "沙发",
    pinyin: "shāfā",
    type: "（名）",
    meaning: "ghê sofa",
    example: "他在沙发上睡着 了。",
    pinyinExample: "Tā zài shāfā shàng shuìzhele.",
    exampleMeaning: "Anh ấy ngủ thiêp đi trên ghế sofa."
  },
  {
    id: 606,
    word: "沙子",
    pinyin: "shāzi",
    type: "（名）",
    meaning: "hạt cát",
    example: "我的眼睛好像进了沙子。",
    pinyinExample: "Wǒ de yǎnjīng hǎoxiàng jìnle shāzi.",
    exampleMeaning: "Mắt tôi hình như có hạt cát bay vào."
  },
  {
    id: 607,
    word: "伤",
    pinyin: "shāng",
    type: "（动、名）",
    meaning: "bị thương, thiệt hại",
    example: "小明的腿摔伤了，现在还在医院。",
    pinyinExample: "Xiǎomíng de tuǐ shuāi shāngle, xiànzài hái zài yīyuàn.",
    exampleMeaning: "Chân của Tiêu Minh bị thương rồi bây giờ vẫn đang nằm viên."
  },
  {
    id: 608,
    word: "伤心",
    pinyin: "shāngxīn",
    type: "（形）",
    meaning: "tôn thương, đau lòng",
    example: "想起这件事，我就感觉很伤心。",
    pinyinExample: "Xiǎngqǐ zhè jiàn shì, wǒ jiù gǎnjué hěn shāngxīn.",
    exampleMeaning: "Cứ nghĩ lại chuyện này là tôi lại đau lòng."
  },
  {
    id: 609,
    word: "商品",
    pinyin: "Shāngpǐn",
    type: "（名）",
    meaning: "hàng hóa",
    example: "这些商品的价格都写在下面了。",
    pinyinExample: "Zhèxiē shāngpǐn de jiàgé dōu xiě zài xiàmiànle.",
    exampleMeaning: "Giá của những mặt hàng này đều ghi ở bên dưới rôi"
  },
  {
    id: 610,
    word: "商业",
    pinyin: "shāngyè",
    type: "（名）",
    meaning: "thương mại",
    example: "商业在每个国家的经济有重要的地",
    pinyinExample: "Shāngyè zài měi gè guójiā de jīngjì yǒu zhòngyào dì dì",
    exampleMeaning: "Thương mại giữ vai trò quan trọng trong nền kinh tế các nước."
  },
  {
    id: 611,
    word: "上来",
    pinyin: "shànglái",
    type: "（名）",
    meaning: "lên đây",
    example: "我们已经到山上了，你们快上来吧",
    pinyinExample: "wǒmen yǐjīng dào shānshàngle, nǐmen kuài shànglái ba",
    exampleMeaning: "Chúng tôi đều đang ở trên núi rồi, các bạn mau lên đây đi!"
  },
  {
    id: 612,
    word: "上面",
    pinyin: "shàngmiàn",
    type: "（名）",
    meaning: "phía trên",
    example: "我的手机放在桌子上面。",
    pinyinExample: "wǒ de shǒujī fàng zài zhuōzi shàngmiàn.",
    exampleMeaning: "Điện thoại của tôi đặt ở trên bàn."
  },
  {
    id: 613,
    word: "上去",
    pinyin: "shàngqù",
    type: "（动）",
    meaning: "đi lên",
    example: "你在几楼？我现在上去。",
    pinyinExample: "Nǐ zài jǐ lóu? Wǒ xiànzài shàngqù.",
    exampleMeaning: "Bạn ở tầng mấy? Bây giờ tôi đi lên."
  },
  {
    id: 614,
    word: "上升",
    pinyin: "shàngshēng",
    type: "（动）",
    meaning: "lên cao",
    example: "今年增长速度上升了。",
    pinyinExample: "Jīnnián zēngzhǎng sùdù shàngshēngle.",
    exampleMeaning: "Năm nay tốc độ tăng trưởng tăng lên rồi."
  },
  {
    id: 615,
    word: "上衣",
    pinyin: "shàngyī",
    type: "（名）",
    meaning: "áo",
    example: "他穿着一件黑色的上衣。",
    pinyinExample: "Tā chuānzhuó yī jiàn hēisè de shàngyī.",
    exampleMeaning: "Cô ây mặc một chiếc áo màu đen."
  },
  {
    id: 616,
    word: "设备",
    pinyin: "shèbèi",
    type: "（名）",
    meaning: "trang bị thiết bị dụng cụ",
    example: "我们不要破坏公共设备。",
    pinyinExample: "Wǒmen bùyào pòhuài gōnggòng shèbèi.",
    exampleMeaning: "Chúng ta không được phá hoại thiết bị công cộng."
  },
  {
    id: 617,
    word: "设计",
    pinyin: "shèjì",
    type: "（动、名）",
    meaning: "Thiết kê",
    example: "这个房间是她自己设计的。",
    pinyinExample: "Zhège fángjiān shì tā zìjǐ shèjì de.",
    exampleMeaning: "Căn phòng này là cô ấy tự tay thiết kê."
  },
  {
    id: 618,
    word: "设立",
    pinyin: "shèlì",
    type: "（动）",
    meaning: "thiết lập, thành lập",
    example: "虽然他很年轻，但是他设立了强大集团。",
    pinyinExample: "Suīrán tā hěn niánqīng, dànshì tā shèlìle qiángdà jítuán.",
    exampleMeaning: "Mặc dù còn rất trẻ nhưng anh ấy đã thành lập một tập đoàn lớn mạnh."
  },
  {
    id: 619,
    word: "社会",
    pinyin: "shèhuì",
    type: "（名）",
    meaning: "xã hội",
    example: "我想成为一个对社会有用的人。",
    pinyinExample: "Wǒ xiǎng chéngwéi yīgè duì shèhuì yǒuyòng de rén.",
    exampleMeaning: "Tôi muốn trở thành một người có ích cho xã hội."
  },
  {
    id: 620,
    word: "身份 证",
    pinyin: "shēnfèn zhèng",
    type: "（名）",
    meaning: "căn cước công dân",
    example: "考试要求带上自己的身份 证。",
    pinyinExample: "Kǎoshì yāoqiú dài shàng zìjǐ de shēnfèn zhèng.",
    exampleMeaning: "Cuộc thi yêu cầu phải mang theo căn cước công dân."
  },
  {
    id: 621,
    word: "深",
    pinyin: "shēn",
    type: "（形）",
    meaning: "sâu, đậm",
    example: "这里的河水有两米深。",
    pinyinExample: "Zhèlǐ de héshuǐ yǒu liǎng mǐ shēn.",
    exampleMeaning: "Nước sông ở đây sâu 2 mét."
  },
  {
    id: 622,
    word: "深刻",
    pinyin: "shēnkè",
    type: "（形）",
    meaning: "sâu sắc",
    example: "我对这部电影的印象很深刻。",
    pinyinExample: "Wǒ duì zhè bù diànyǐng de yìnxiàng hěn shēnkè.",
    exampleMeaning: "Đối với bộ phim này tôi có ấn tượng rất sâu sắc."
  },
  {
    id: 623,
    word: "深人",
    pinyin: "shēn rén",
    type: "（动、形）",
    meaning: "thâm nhập, đi sâu",
    example: "这件事情还需要深入调查。",
    pinyinExample: "Zhè jiàn shìqíng hái xūyào shēnrù diàochá.",
    exampleMeaning: "Chuyện này vẫn cần phải đi sâu vào điều tra."
  },
  {
    id: 624,
    word: "升",
    pinyin: "shēng",
    type: "（动）",
    meaning: "lên cao,lên",
    example: "太阳从东边升起。",
    pinyinExample: "Tàiyáng cóng dōngbian shēng qǐ.",
    exampleMeaning: "Mặt trời mọc từ phía đông."
  },
  {
    id: 625,
    word: "生",
    pinyin: "shēng",
    type: "（形）",
    meaning: "sống （ thực phẩm)",
    example: "米饭还是生的，没煮熟。",
    pinyinExample: "Mǐfàn háishì shēng de, méi zhǔ shú.",
    exampleMeaning: "Cơm vẫn sống, chưa chín."
  },
  {
    id: 626,
    word: "生产",
    pinyin: "shēngchǎn",
    type: "（动）",
    meaning: "sản xuất",
    example: "这家工厂每周生产 500把 椅子。",
    pinyinExample: "Zhè jiā gōngchǎng měi zhōu shēngchǎn 500 bǎ yǐzi.",
    exampleMeaning: "Nhà máy này mối tuần sản xuât 500 chiếc ghê."
  },
  {
    id: 627,
    word: "生存",
    pinyin: "shēngcún",
    type: "（动）",
    meaning: "sinh tồn, sinh sống",
    example: "人离开空气就不能生存。",
    pinyinExample: "Rén líkāi kōngqì jiù bùnéng shēngcún.",
    exampleMeaning: "Con người không có không khí thì không thể sinh tồn đươc."
  },
  {
    id: 628,
    word: "生动",
    pinyin: "shēngdòng",
    type: "（形）",
    meaning: "sinh động, sống động",
    example: "图片让这本书变得生动。",
    pinyinExample: "Túpiàn ràng zhè běn shū biàn dé shēngdòng.",
    exampleMeaning: "Bức ảnh làm cho quyển sách trở lên sông động."
  },
  {
    id: 629,
    word: "生命",
    pinyin: "shēngmìng",
    type: "（名）",
    meaning: "sinh mệnh, tính mạng",
    example: "时间就是生命。",
    pinyinExample: "Shíjiān jiùshì shēngmìng.",
    exampleMeaning: "Thời gian chính là sinh mệnh."
  },
  {
    id: 630,
    word: "生意",
    pinyin: "shēngyì",
    type: "（名）",
    meaning: "kinh doanh, buôn bán",
    example: "这段时间他的生意做得很好。",
    pinyinExample: "Zhè duàn shíjiān tā de shēngyì zuò dé hěn hǎo.",
    exampleMeaning: "Thời gian này việc kinh doanh của anh ấy rât tốt."
  },
  {
    id: 631,
    word: "生长",
    pinyin: "Shēngzhǎng",
    type: "（动）",
    meaning: "sinh trưởng, lớn lên",
    example: "花儿生长需要水和阳光。",
    pinyinExample: "Huār shēngzhǎng xūyào shuǐ hé yángguāng.",
    exampleMeaning: "Hoa muốn sinh trưởng cần có nước và ánh sáng."
  },
  {
    id: 632,
    word: "声明",
    pinyin: "shēngmíng",
    type: "（动、名）",
    meaning: "tuyên bố, thanh minh",
    example: "我们声明这件事和我们没有关系。",
    pinyinExample: "Wǒmen shēngmíng zhè jiàn shì hé wǒmen méiyǒu guānxì.",
    exampleMeaning: "Chúng tôi tuyên bố, chuyện này không liên quan đến chúng tôi."
  },
  {
    id: 633,
    word: "胜",
    pinyin: "shèng",
    type: "（动）",
    meaning: "đánh bại, chiến thắng",
    example: "我们的队伍取得了三连胜。",
    pinyinExample: "Wǒmen de duìwǔ qǔdéle sān lián shèng.",
    exampleMeaning: "Đội của chúng tôi giành được 3 trận thắng."
  },
  {
    id: 634,
    word: "胜利",
    pinyin: "shènglì",
    type: "（动、名）",
    meaning: "thắng lợi",
    example: "我们一定能取得这场比赛的胜利。",
    pinyinExample: "Wǒmen yīdìng néng qǔdé zhè chǎng bǐsài de shènglì.",
    exampleMeaning: "Chúng tôi chắc chắn có thể giành được thắng lợi của cuộc thi này."
  },
  {
    id: 635,
    word: "失去",
    pinyin: "shīqù",
    type: "（动）",
    meaning: "mất",
    example: "如果过期的话 ，这个功能失去效力",
    pinyinExample: "Rúguǒ guòqí dehuà, zhège gōngnéng shīqù xiàolì",
    exampleMeaning: "Nếu quá hạn, chức năng này sẽ mất hiệu lực."
  },
  {
    id: 636,
    word: "石头",
    pinyin: "shítou",
    type: "（名）",
    meaning: "đá",
    example: "河边有很多小石头。",
    pinyinExample: "hé biān yǒu hěnduō xiǎo shítou.",
    exampleMeaning: "Ven sông có rất nhiều đá nhỏ."
  },
  {
    id: 637,
    word: "石油",
    pinyin: "shíyóu",
    type: "（名）",
    meaning: "dầu mỏ, dầu thô",
    example: "我们国家的石油很丰富。",
    pinyinExample: "Wǒmen guójiā de shíyóu hěn fēngfù.",
    exampleMeaning: "Dầu mỏ của đất nước tôi rất phong phú."
  },
  {
    id: 638,
    word: "时",
    pinyin: "shí",
    type: "（名）",
    meaning: "lúc, thời",
    example: "我开会时不要打电话给我。",
    pinyinExample: "Wǒ kāihuì shí bùyào dǎ diànhuà gěi wǒ.",
    exampleMeaning: "Lúc tôi đang học đừng có gọi điện thoại cho tôi."
  },
  {
    id: 639,
    word: "时代",
    pinyin: "shídài",
    type: "（名）",
    meaning: "thời đại",
    example: "我们生活在技术快速发展的时代。",
    pinyinExample: "Wǒmen shēnghuó zài jìshù kuàisù fāzhǎn de shídài.",
    exampleMeaning: "Chúng ta sống trong một thời đại có tốc độ phát triển kĩ thuât nhanh."
  },
  {
    id: 640,
    word: "时刻",
    pinyin: "shíkè",
    type: "（名、副）",
    meaning: "thời khắc, thời điểm",
    example: "严守时刻，准时参加会议。",
    pinyinExample: "Yánshǒu shíkè, zhǔnshí cānjiā huìyì.",
    exampleMeaning: "Nghiêm túc tuân thủ thời gian, đúng giờ tham gia hội nghị"
  },
  {
    id: 641,
    word: "实际 上",
    pinyin: "shíjì shang",
    type: "（副）",
    meaning: "trên thực tế",
    example: "这件事看着容易，实际上很难。",
    pinyinExample: "Zhè jiàn shì kànzhe róngyì, shíjì shang hěn nán.",
    exampleMeaning: "Chuyện này nhìn qua thỉ dễ, nhưng thực tế thì lại rất khó."
  },
  {
    id: 642,
    word: "实力",
    pinyin: "shílì",
    type: "（名）",
    meaning: "thực lực, sức mạnh",
    example: "这支球队的实力非常强。",
    pinyinExample: "Zhè zhī qiú duì de shílì fēicháng qiáng.",
    exampleMeaning: "Thực lực của đội bóng này vô cùng mạnh."
  },
  {
    id: 643,
    word: "实行",
    pinyin: "shíxíng",
    type: "（动）",
    meaning: "thực hiện, thi hành",
    example: "他们在机场实行了安全检 查。",
    pinyinExample: "Tāmen zài jīchǎng shíxíngle ānquán jiǎnchá.",
    exampleMeaning: "Bọn họ đang ở sân bay tiến hành việc kiểm tra an toàn."
  },
  {
    id: 644,
    word: "实验",
    pinyin: "shíyàn",
    type: "（动、名）",
    meaning: "thí nghiệm",
    example: "这种理论可通过实验得到证实。",
    pinyinExample: "Zhè zhǒng lǐlùn kě tōngguò shíyàn dédào zhèngshí.",
    exampleMeaning: "Nguyên lí này cỏ thể thông qua các thí nghiệm để chứng thưc."
  },
  {
    id: 645,
    word: "实验 室",
    pinyin: "shíyàn shì",
    type: "（名）",
    meaning: "phòng thí nghiệm",
    example: "学生在实验室做实 验。",
    pinyinExample: "Xuéshēng zài shíyàn shì zuò shíyàn.",
    exampleMeaning: "Học sinh đang ở phòng thí nghiệm làm thí nghiệm."
  },
  {
    id: 646,
    word: "食品",
    pinyin: "shípǐn",
    type: "（名）",
    meaning: "thực phẩm, đồ ăn",
    example: "他在一家食品加工的工厂工作。",
    pinyinExample: "Tā zài yījiā shípǐn jiāgōng de gōngchǎng gōngzuò.",
    exampleMeaning: "Anh ấy làm việc trong 1 nhà máy chế biến thực phẩm"
  },
  {
    id: 647,
    word: "使",
    pinyin: "shǐ",
    type: "（动）",
    meaning: "khiến cho, làm cho",
    example: "什么事情使他改变了想法？",
    pinyinExample: "Shénme shìqíng shǐ tā gǎibiànle xiǎngfǎ?",
    exampleMeaning: "Việc gì đã khiến anh ấy thay đổi suy nghĩ vậy?"
  },
  {
    id: 648,
    word: "始终",
    pinyin: "shǐzhōng",
    type: "（副）",
    meaning: "từ đầu đến cuối",
    example: "我们始终坚持最高的标准。",
    pinyinExample: "Wǒmen shǐzhōng jiānchí zuìgāo de biāozhǔn.",
    exampleMeaning: "Chúng tôi từ đâu đên cuối luôn kiên trì với mục tiêu cao nhất."
  },
  {
    id: 649,
    word: "世纪",
    pinyin: "shìjì",
    type: "（名）",
    meaning: "Thế kj （ 100 năm)",
    example: "我们生活在二十一世纪。",
    pinyinExample: "Wǒmen shēnghuó zài èrshíyī shìjì.",
    exampleMeaning: "Chúng ta đang sống ở thế kj 21."
  },
  {
    id: 650,
    word: "世界",
    pinyin: "shìjiè",
    type: "（名）",
    meaning: "thế giới",
    example: "我们的商品出口到了世界各地。",
    pinyinExample: "Wǒmen de shāngpǐn chūkǒu dàole shìjiè gèdì.",
    exampleMeaning: "Sản phẩm của chúng tôi xuất khẩu đi mọi nơi trên thế giới"
  },
  {
    id: 651,
    word: "世界杯",
    pinyin: "Shìjièbēi",
    type: "（名）",
    meaning: "cúp thế giới",
    example: "我最喜欢的球队获得了世界杯。",
    pinyinExample: "Wǒ zuì xǐhuān de qiú duì huòdéle shìjièbēi.",
    exampleMeaning: "Đội bóng mà tôi yêu thích đã giành được cúp thế giới."
  },
  {
    id: 652,
    word: "市场",
    pinyin: "shìchǎng",
    type: "（名）",
    meaning: "thị trường",
    example: "妈妈让我去市场买一些菜。",
    pinyinExample: "Māmā ràng wǒ qù shìchǎng mǎi yīxiē cài.",
    exampleMeaning: "Mẹ bảo tôi đi siêu thi mua một ít rau."
  },
  {
    id: 653,
    word: "事故",
    pinyin: "shìgù",
    type: "（名）",
    meaning: "sự cô, rủi ro, tai nạn",
    example: "昨天在这里发生了一场事故。",
    pinyinExample: "Zuótiān zài zhèlǐ fāshēngle yī chǎng shìgù.",
    exampleMeaning: "Hôm qua ở đây đã xảy ra một vụ tai nạn."
  },
  {
    id: 654,
    word: "事件",
    pinyin: "shìjiàn",
    type: "（名）",
    meaning: "sự kiện",
    example: "下个星期将有一系列有趣的事件。",
    pinyinExample: "Xià gè xīngqí jiāng yǒuyī xìliè yǒuqù de shìjiàn.",
    exampleMeaning: "Tuần sau sẽ có một loạt các sự kiện thú vị."
  },
  {
    id: 655,
    word: "事实",
    pinyin: "shìshí",
    type: "（名）",
    meaning: "sự thật",
    example: "事实是我们没有那么多钱。",
    pinyinExample: "Shìshí shì wǒmen méiyǒu nàme duō qián.",
    exampleMeaning: "Sự thật là chúng ta không có nhiều tiền như vậy."
  },
  {
    id: 656,
    word: "事实上",
    pinyin: "shìshí shàng",
    type: "（词组）",
    meaning: "trên thực tế",
    example: "事实上这件事和我们想的不一样。",
    pinyinExample: "Shìshí shàng zhè jiàn shìhé wǒmen xiǎng de bù yīyàng.",
    exampleMeaning: "Trên thực tế chuyện này không giống chúng ta nghĩ."
  },
  {
    id: 657,
    word: "事业",
    pinyin: "shìyè",
    type: "（名）",
    meaning: "sự nghiệp",
    example: "这是她发展事业的好机会。",
    pinyinExample: "Zhè shì tā fāzhǎn shìyè de hǎo jīhuì.",
    exampleMeaning: "Đây là cơ hội tốt để cô ây phát triển sự nghiệp."
  },
  {
    id: 658,
    word: "试题",
    pinyin: "shìtí",
    type: "（名）",
    meaning: "đề thi",
    example: "她很快就做完了老师给的试题。",
    pinyinExample: "Tā hěn kuài jiù zuò wánliǎo lǎoshī gěi de shìtí.",
    exampleMeaning: "Cô ấy rất nhanh đã hoàn thành đề thi mà giáo viên giao cho."
  },
  {
    id: 659,
    word: "试验",
    pinyin: "shìyàn",
    type: "（动）",
    meaning: "thử nghiệm",
    example: "这种药已经开始试验了。",
    pinyinExample: "Zhè zhǒng yào yǐjīng kāishǐ shìyànle.",
    exampleMeaning: "Loại thuốc này đã bắt đầu thử nghiệm rồi."
  },
  {
    id: 660,
    word: "适合",
    pinyin: "shìhé",
    type: "（动）",
    meaning: "phù hợp, thích hợp",
    example: "你的才能非常适合这份工作。",
    pinyinExample: "Nǐ de cáinéng fēicháng shì hé zhè fèn gōngzuò.",
    exampleMeaning: "Tài năng của bạn vô cùng phù hợp với công việc này."
  },
  {
    id: 661,
    word: "适应",
    pinyin: "shìyìng",
    type: "（动）",
    meaning: "thích ứng",
    example: "他还不能适应这里的气候。",
    pinyinExample: "Tā hái bùnéng shìyìng zhèlǐ de qìhòu.",
    exampleMeaning: "Cô ấy vẫn chưa thể thích ứng được với khí hậu ở đây."
  },
  {
    id: 662,
    word: "适用",
    pinyin: "shìyòng",
    type: "（形）",
    meaning: "thích hợp",
    example: "这个方法不适用于我们。",
    pinyinExample: "Zhège fāngfǎ bù shìyòng yú wǒmen.",
    exampleMeaning: "Phương pháp này không thích hợp với chúng ta."
  },
  {
    id: 663,
    word: "室",
    pinyin: "shì",
    type: "（名）",
    meaning: "phòng",
    example: "我们把这个房间改成了办公室。",
    pinyinExample: "Wǒmen bǎ zhège fángjiān gǎi chéngle bàngōngshì.",
    exampleMeaning: "Chúng tôi đã sửa đổi căn phòng này thành văn phòng làm việc."
  },
  {
    id: 664,
    word: "收费",
    pinyin: "shōufèi",
    type: "（动）",
    meaning: "thu phí",
    example: "在这里停车要收费。",
    pinyinExample: "Zài zhèlǐ tíngchē yào shōufèi.",
    exampleMeaning: "Đỗ xe ở đây thì phải thu phí."
  },
  {
    id: 665,
    word: "收看",
    pinyin: "shōukàn",
    type: "（动）",
    meaning: "xem, thưởng thức",
    example: "我每天都收看这个节目。",
    pinyinExample: "Wǒ měitiān dū shōukàn zhège jiémù.",
    exampleMeaning: "Mỗi ngày tôi đều xem tiết mục này."
  },
  {
    id: 666,
    word: "收听",
    pinyin: "shōutīng",
    type: "（动）",
    meaning: "nghe đài, nghe phát thanh",
    example: "很多人早上收听新闻广播。",
    pinyinExample: "Hěnduō rén zǎoshang shōutīng xīnwén guǎngbò.",
    exampleMeaning: "Có rất nhiêu người nghe tin tức trên đài phát thanh vào buổi sáng."
  },
  {
    id: 667,
    word: "收音机",
    pinyin: "shōuyīnjī",
    type: "（名）",
    meaning: "radio",
    example: "我从收音机里听到了这件事。",
    pinyinExample: "Wǒ cóng shōuyīnjī lǐ tīng dàole zhè jiàn shì.",
    exampleMeaning: "Tôi nghe được chuyện này từ radio."
  },
  {
    id: 668,
    word: "手续",
    pinyin: "shǒuxù",
    type: "（名）",
    meaning: "thủ tục",
    example: "哥哥出国留学的手续都办好了。",
    pinyinExample: "Gēgē chūguó liúxué de shǒuxù dōu bàn hǎole.",
    exampleMeaning: "Thủ tục đi nước ngoài du học của anh trai đều làm xong rồi."
  },
  {
    id: 669,
    word: "手指",
    pinyin: "shǒuzhǐ",
    type: "（名）",
    meaning: "ngón tay",
    example: "那只猫咬住了他的手指。",
    pinyinExample: "Nà zhǐ māo yǎo zhùle tā de shǒuzhǐ.",
    exampleMeaning: "Con mèo đó đã cắn vào ngón tay của anh ấy."
  },
  {
    id: 670,
    word: "首都",
    pinyin: "shǒudū",
    type: "（名）",
    meaning: "thủ đô",
    example: "越南的首都是河内o",
    pinyinExample: "Yuènán de shǒudū shì hénèi o",
    exampleMeaning: "Thủ đô của Việt Nam là Hà Nội"
  },
  {
    id: 671,
    word: "首先",
    pinyin: "shǒuxiān",
    type: "（副）",
    meaning: "Đầ6u tiên, trước tiên",
    example: "首先，让我问你一件事。",
    pinyinExample: "shǒuxiān, ràng wǒ wèn nǐ yī jiàn shì.",
    exampleMeaning: "Đầu tiên, để tôi hỏi bạn một chuyện."
  },
  {
    id: 672,
    word: "受",
    pinyin: "shòu",
    type: "（动）",
    meaning: "bị, chịu",
    example: "我受到同学们热情的帮助。",
    pinyinExample: "Wǒ shòudào tóngxuémen rèqíng de bāngzhù.",
    exampleMeaning: "Tôi nhận được sự giúp đỡ nhiệt tình từ các bạn."
  },
  {
    id: 673,
    word: "受伤",
    pinyin: "Shòushāng",
    type: "（动）",
    meaning: "bị thương",
    example: "他在那场事故中受伤了。",
    pinyinExample: "Tā zài nà chǎng shìgù zhōng shòushāngle.",
    exampleMeaning: "Tôi đã bị thương nặng trong lần tai nạn đó."
  },
  {
    id: 674,
    word: "书架",
    pinyin: "shūjià",
    type: "（名）",
    meaning: "giá sách, kệ sách",
    example: "词典放在书架的最上面。",
    pinyinExample: "Cídiǎn fàng zài shūjià de zuì shàngmiàn.",
    exampleMeaning: "Từ điển để ở phía trên cùng của giá sách."
  },
  {
    id: 675,
    word: "输",
    pinyin: "shū",
    type: "（动）",
    meaning: "vận chuyển, thua, thất bại",
    example: "今天的比赛我们输了。",
    pinyinExample: "Jīntiān de bǐsài wǒmen shūle.",
    exampleMeaning: "Cuộc thi hôm nay chúng tôi đã thua rồi."
  },
  {
    id: 676,
    word: "输入",
    pinyin: "shūrù",
    type: "（动）",
    meaning: "nhập vào",
    example: "请输人您的身份证号码。",
    pinyinExample: "Qǐng shū rén nín de shēnfèn zhèng hàomǎ.",
    exampleMeaning: "Mời nhập số chứng minh nhân dân của bà vào."
  },
  {
    id: 677,
    word: "熟人",
    pinyin: "shúrén",
    type: "（名）",
    meaning: "người quen",
    example: "这家店的老板是我的熟人。",
    pinyinExample: "Zhè jiā diàn de lǎobǎn shì wǒ de shúrén.",
    exampleMeaning: "Ông chủ của cửa hàng này là người quen của tôi."
  },
  {
    id: 678,
    word: "属",
    pinyin: "shǔ",
    type: "（动）",
    meaning: "thân thuộc thuộc, cầm tinh",
    example: "A：你属什么？ B:我属龙。",
    pinyinExample: "A: Nǐ shǔ shénme? B: Wǒ shǔ lóng.",
    exampleMeaning: "A: Bạn cầm tinh con gì? B: Tôi cầm tinh con rồng"
  },
  {
    id: 679,
    word: "属于",
    pinyin: "shǔyú",
    type: "（动）",
    meaning: "Thuộc về",
    example: "胜利属于坚持的人。",
    pinyinExample: "Shènglì shǔyú jiānchí de rén.",
    exampleMeaning: "Thắng lợi thuộc về người kiên trì."
  },
  {
    id: 680,
    word: "束",
    pinyin: "shù",
    type: "（量）",
    meaning: "bó （lượng từ)",
    example: "我买了一束花送给妈妈。",
    pinyinExample: "Wǒ mǎile yī shù huā sòng gěi māmā.",
    exampleMeaning: "Tôi đã mua một bó hoa tặng mẹ."
  },
  {
    id: 681,
    word: "数量",
    pinyin: "shùliàng",
    type: "（名）",
    meaning: "số lượng",
    example: "我们公司的员工数量大概有一百人.",
    pinyinExample: "Wǒmen gōngsī de yuángōng shùliàng dàgài yǒuyī bǎirén.",
    exampleMeaning: "Số lượng nhân viên của công ty tôi đại khái khoảng 100 người."
  },
  {
    id: 682,
    word: "双",
    pinyin: "shuāng",
    type: "（量、形）",
    meaning: "đôi, hai",
    example: "去年他穿坏了两双鞋。",
    pinyinExample: "Qùnián tā chuān huàile liǎng shuāng xié.",
    exampleMeaning: "Năm ngoái anh ấy đã làm hỏng 2 đôi giày."
  },
  {
    id: 683,
    word: "双方",
    pinyin: "shuāngfān g",
    type: "（名）",
    meaning: "hai bên, đôi bên",
    example: "双方对这个结果都感到很满意。",
    pinyinExample: "Shuāngfāng duì zhège jiéguǒ dōu gǎndào hěn mǎnyì.",
    exampleMeaning: "Đôi bên đối với kết quả này đều cảm thấy rất hài lòng."
  },
  {
    id: 684,
    word: "思想",
    pinyin: "sīxiǎng",
    type: "（名）",
    meaning: "tư tưởng",
    example: "他的思想已经受到了影响。",
    pinyinExample: "Tā de sīxiǎng yǐjīng shòudàole yǐngxiǎng.",
    exampleMeaning: "Tư tưởng của anh ấy đã bị ảnh hưởng."
  },
  {
    id: 685,
    word: "死",
    pinyin: "sǐ",
    type: "（动、形）",
    meaning: "chết, mất",
    example: "我家的小狗死了。",
    pinyinExample: "Wǒjiā de xiǎo gǒu sǐle.",
    exampleMeaning: "Chú chó của nhà tôi mất rồi."
  },
  {
    id: 686,
    word: "速度",
    pinyin: "sùdù",
    type: "（名）",
    meaning: "tốc độ",
    example: "今年中国经济的增长速度很快。",
    pinyinExample: "Jīnnián zhōngguó jīngjì de zēngzhǎng sùdù hěn kuài.",
    exampleMeaning: "Năm nay, tốc độ tăng trưởng của kinh tê Trung Quốc rất nhanh."
  },
  {
    id: 687,
    word: "随",
    pinyin: "suí",
    type: "（动）",
    meaning: "đi theo, cùng với",
    example: "经理让我随他去办公室。",
    pinyinExample: "Jīnglǐ ràng wǒ suí tā qù bàngōngshì.",
    exampleMeaning: "Giám đốc bảo tôi đi theo anh ấy đến văn phòng."
  },
  {
    id: 688,
    word: "所",
    pinyin: "suǒ",
    type: "（名、量）",
    meaning: "chỗ, nơi, ngôi, nhà, gian",
    example: "你毕业于哪所大学？",
    pinyinExample: "Nǐ bìyè yú nǎ suǒ dàxué?",
    exampleMeaning: "Bạn tốt nghiệp từ trường Đại học nào?"
  },
  {
    id: 689,
    word: "所长",
    pinyin: "suǒ cháng",
    type: "（名）",
    meaning: "sở trưởng, viện trưởng",
    example: "我是研究所的所长。",
    pinyinExample: "Wǒ shì yánjiū suǒ de suǒ cháng.",
    exampleMeaning: "Tôi là viện trưởng của viện nghiên cứu."
  },
  {
    id: 690,
    word: "台",
    pinyin: "tái",
    type: "（名、量）",
    meaning: "chiếc, cỗ （ máy móc)",
    example: "爸爸给我买了一台新电脑。",
    pinyinExample: "Bàba gěi wǒ mǎile yī táixīn diànnǎo.",
    exampleMeaning: "Bố mua cho tôi một chiếc máy tính mới."
  },
  {
    id: 691,
    word: "谈",
    pinyin: "tán",
    type: "（动）",
    meaning: "nói, nói chuyện",
    example: "我可以和你谈一会儿吗？",
    pinyinExample: "Wǒ kěyǐ hé nǐ tán yīhuǐ’er ma?",
    exampleMeaning: "Tôi có thể nói chuyện với bạn một lúc không?"
  },
  {
    id: 692,
    word: "谈话",
    pinyin: "tánhuà",
    type: "（动）",
    meaning: "trò chuyện, nói chuyện",
    example: "他们正在房间里谈 话。",
    pinyinExample: "Tāmen zhèngzài fángjiān lǐ tánhuà.",
    exampleMeaning: "Bọn họ đang trò chuyện ở trong phòng."
  },
  {
    id: 693,
    word: "谈判",
    pinyin: "tánpàn",
    type: "（动、名）",
    meaning: "đàm phán, thương lượng",
    example: "通过谈判，我们终于找到办法。",
    pinyinExample: "Tōngguò tánpàn, wǒmen zhōngyú zhǎodào bànfǎ.",
    exampleMeaning: "Thông qua đàm phán, chúng tôi cuối cùng đã tìm ra phương án."
  },
  {
    id: 694,
    word: "汤",
    pinyin: "tāng",
    type: "（名）",
    meaning: "canh",
    example: "我刚才没有吃饭，只喝了一碗汤。",
    pinyinExample: "Wǒ gāngcái méiyǒu chīfàn, zhǐ hēle yī wǎn tāng.",
    exampleMeaning: "Lúc nãy tôi không ăn cơm, chỉ uống một bát canh."
  },
  {
    id: 695,
    word: "糖",
    pinyin: "Táng",
    type: "（名）",
    meaning: "Kẹo",
    example: "请给我一杯咖啡，不加糖。",
    pinyinExample: "Qǐng gěi wǒ yībēi kāfēi, bù jiātáng.",
    exampleMeaning: "Xin cho tôi một ly cà phê, không thêm đường."
  },
  {
    id: 696,
    word: "特色",
    pinyin: "tèsè",
    type: "（名）",
    meaning: "đặc sắc",
    example: "他们的表演节目很有特色。",
    pinyinExample: "Tāmen de biǎoyǎn jiémù hěn yǒu tèsè.",
    exampleMeaning: "Tiết mục biểu diễn của họ rất đặc sắc."
  },
  {
    id: 697,
    word: "提前",
    pinyin: "tíqián",
    type: "（动）",
    meaning: "sớm, trước thời hạn",
    example: "我们提前15分钟完成了任 务。",
    pinyinExample: "Wǒmen tíqián 15 fēnzhōng wánchéngle rènwù.",
    exampleMeaning: "Chúng tôi đã hoàn thành nhiệm vụ sớm 15 phút."
  },
  {
    id: 698,
    word: "提问",
    pinyin: "tíwèn",
    type: "（动）",
    meaning: "hỏi, đưa ra câu hỏi",
    example: "同学们有问题可以向老师提问。",
    pinyinExample: "Tóngxuémen yǒu wèntí kěyǐ xiàng lǎoshī tíwèn.",
    exampleMeaning: "Các em nếu còn vấn đề gì thì hãy hỏi lại cô."
  },
  {
    id: 699,
    word: "题目",
    pinyin: "tímù",
    type: "（名）",
    meaning: "Đề bài",
    example: "考试时要看清楚题目的要求。",
    pinyinExample: "Kǎoshì shí yào kàn qīngchǔ tímù dì yāoqiú.",
    exampleMeaning: "Khi đi thi cần đọc kĩ yêu cầu của đề bài."
  },
  {
    id: 700,
    word: "体会",
    pinyin: "tǐhuì",
    type: "（动、名）",
    meaning: "lĩnh hội, nhận thức",
    example: "你参加了这次活动，有什么体会？",
    pinyinExample: "Nǐ cānjiāle zhè cì huódòng, yǒu shé me tǐhuì?",
    exampleMeaning: "Bạn tham gia hoạt động lần này, đã nhận được gì?"
  },
  {
    id: 701,
    word: "体现",
    pinyin: "tǐxiàn",
    type: "（动）",
    meaning: "thể hiện, nói lên",
    example: "他的行为体现他是个善良的人。",
    pinyinExample: "Tā de xíngwéi tǐxiàn tā shìgè shànliáng de rén.",
    exampleMeaning: "Hành động của anh ấy thể hiện anh ấy là một người lương thiện."
  },
  {
    id: 702,
    word: "体验",
    pinyin: "tǐyàn",
    type: "（动）",
    meaning: "tự nghiệm thấy",
    example: "这是一’次有意义的体验。",
    pinyinExample: "Zhè shì yī’cì yǒu yìyì de tǐyàn.",
    exampleMeaning: "Đây là một trải nghiệm có j nghĩa."
  },
  {
    id: 703,
    word: "天空",
    pinyin: "tiānkōng",
    type: "（名）",
    meaning: "Bầu trời, không trung",
    example: "今天的天空很蓝。",
    pinyinExample: "Jīntiān de tiānkōng hěn lán.",
    exampleMeaning: "Bầu trời hôm nay rất xanh."
  },
  {
    id: 704,
    word: "甜",
    pinyin: "tián",
    type: "（形）",
    meaning: "ngọt",
    example: "这种苹果便宜又很甜。",
    pinyinExample: "Zhè zhǒng píngguǒ piányí yòu hěn tián.",
    exampleMeaning: "Loại táo này vừa rẻ vừa ngọt."
  },
  {
    id: 705,
    word: "调",
    pinyin: "diào",
    type: "（动）",
    meaning: "luân chuyển, giọng, điệu",
    example: "老师把我的座位调到了前面。",
    pinyinExample: "Lǎoshī bǎ wǒ de zuòwèi tiáo dàole qiánmiàn.",
    exampleMeaning: "Giáo viên đổi chỗ ngồi của tôi lên phía trước."
  },
  {
    id: 706,
    word: "调整",
    pinyin: "tiáozhěng",
    type: "（动）",
    meaning: "Điều chỉnh",
    example: "他已经调整了明天的工作安排。",
    pinyinExample: "Tā yǐjīng tiáozhěngle míngtiān de gōngzuò ānpái.",
    exampleMeaning: "Anh ấy đã điều chỉnh lại công việc của ngày mai."
  },
  {
    id: 707,
    word: "跳",
    pinyin: "tiào",
    type: "（动）",
    meaning: "nhảy",
    example: "孩子们兴奋地跳起来。",
    pinyinExample: "Háizimen xīngfèn de tiào qǐlái.",
    exampleMeaning: "Bọn trẻ phấn khích nhảy lên."
  },
  {
    id: 708,
    word: "跳高",
    pinyin: "tiàogāo",
    type: "（动）",
    meaning: "nhảy cao",
    example: "他是一位跳高运动 员。",
    pinyinExample: "Tā shì yī wèi tiàogāo yùndòngyuán.",
    exampleMeaning: "Anh ấy là một vận động viên nhảy cao."
  },
  {
    id: 709,
    word: "跳舞",
    pinyin: "tiàowǔ",
    type: "（动）",
    meaning: "khiêu vũ",
    example: "她不但会唱歌，而且还会跳舞。",
    pinyinExample: "Tā bùdàn huì chànggē, érqiě hái huì tiàowǔ.",
    exampleMeaning: "Cô ấy không những biết hát, mà còn biết nhảy."
  },
  {
    id: 710,
    word: "跳远",
    pinyin: "tiàoyuǎn",
    type: "（动）",
    meaning: "nhảy xa",
    example: "这是我第一次参加跳远比 赛。",
    pinyinExample: "Zhè shì wǒ dì yī cì cānjiā tiàoyuǎn bǐsài.",
    exampleMeaning: "Đây là lần đầu tiên tôi tham gia cuộc thi nhảy xa."
  },
  {
    id: 711,
    word: "铁",
    pinyin: "tiě",
    type: "（名）",
    meaning: "sắt",
    example: "我们宿舍的门是铁的。",
    pinyinExample: "Wǒmen sùshè de mén shì tiě de.",
    exampleMeaning: "Cửa kí túc xá của chúng tôi làm bằng sắt."
  },
  {
    id: 712,
    word: "铁路",
    pinyin: "tiělù",
    type: "（名）",
    meaning: "đường sắt",
    example: "这条铁路还正在建 设。",
    pinyinExample: "Zhè tiáo tiělù hái zhèngzài jiànshè.",
    exampleMeaning: "Đoạn đường sắt này vẫn đang xây dựng."
  },
  {
    id: 713,
    word: "听力",
    pinyin: "tīnglì",
    type: "（名）",
    meaning: "khả năng nghe",
    example: "他每天晚上都练习英语听力。",
    pinyinExample: "Tā měitiān wǎnshàng dū liànxí yīngyǔ tīnglì.",
    exampleMeaning: "Mỗi tối anh ấy đều luyện nghe tiếng Anh."
  },
  {
    id: 714,
    word: "听众",
    pinyin: "tīngzhòng",
    type: "（名）",
    meaning: "người nghe, thính giả",
    example: "台下的听众都安静地听他讲话。",
    pinyinExample: "Tái xià de tīngzhòng dū ānjìng de tīng tā jiǎnghuà.",
    exampleMeaning: "Khán giả ở dưới sân khấu đều yên lặng nghe anh ấy diễn thuyết."
  },
  {
    id: 715,
    word: "停止",
    pinyin: "tíngzhǐ",
    type: "（动）",
    meaning: "đình chỉ, ngừng, thôi",
    example: "大家停止了谈话。",
    pinyinExample: "Dàjiā tíngzhǐle tánhuà.",
    exampleMeaning: "Mọi người đã ngừng trò chuyện."
  },
  {
    id: 716,
    word: "通常",
    pinyin: "tōngchán g",
    type: "（形）",
    meaning: "thông thường, bình thường",
    example: "下面就是我的一天通常的情况。",
    pinyinExample: "Xiàmiàn jiùshì wǒ de yītiān tōngcháng de qíngkuàng.",
    exampleMeaning: "Dưới đây là tình huống thông thường trong một ngày của tôi."
  },
  {
    id: 717,
    word: "通信",
    pinyin: "Tōngxìn",
    type: "（动）",
    meaning: "thư từ qua lại, thông tin",
    example: "我们两个人经常通信。",
    pinyinExample: "Wǒmen liǎng gèrén jīngcháng tōngxìn.",
    exampleMeaning: "Hai người chúng tôi thường xuyên thư từ qua lại cho nhau."
  },
  {
    id: 718,
    word: "同意",
    pinyin: "tóngyì",
    type: "（动）",
    meaning: "Đồng j",
    example: "他同意了我们的要求。",
    pinyinExample: "Tā tóngyìle wǒmen de yāoqiú.",
    exampleMeaning: "Anh ấy đã đồng j yêu cầu của chúng tôi."
  },
  {
    id: 719,
    word: "痛",
    pinyin: "tòng",
    type: "（形）",
    meaning: "đau, đau nhức",
    example: "昨天我的手受伤，今天还很痛。",
    pinyinExample: "Zuótiān wǒ de shǒu shòushāng, jīntiān hái hěn tòng.",
    exampleMeaning: "Hôm qua tay tôi bị thương, hôm nay vẫn còn đau."
  },
  {
    id: 720,
    word: "痛苦",
    pinyin: "tòngkǔ",
    type: "（形）",
    meaning: "đau khổ",
    example: "这件事让他很痛苦。",
    pinyinExample: "Zhè jiàn shì ràng tā hěn tòngkǔ.",
    exampleMeaning: "Chuyện này khiến anh ấy rất đau khổ."
  },
  {
    id: 721,
    word: "头",
    pinyin: "tóu",
    type: "（名）",
    meaning: "cái đầu",
    example: "我的头很疼，你可以带我去医院吗？",
    pinyinExample: "Wǒ de tóu hěn téng, nǐ kěyǐ dài wǒ qù yīyuàn ma?",
    exampleMeaning: "Đâu tôi đau quá, bạn có thể đưa tôi đến bệnh viện được không?"
  },
  {
    id: 722,
    word: "头脑",
    pinyin: "tóunǎo",
    type: "（名）",
    meaning: "đầu óc, tư duy",
    example: "他是一个很有商业头脑的 人。",
    pinyinExample: "Tā shì yīgè hěn yǒu shāngyè tóunǎo de rén.",
    exampleMeaning: "Anh ấy là một con người có đầu óc kinh doanh."
  },
  {
    id: 723,
    word: "突出",
    pinyin: "túchū",
    type: "（动、形）",
    meaning: "nổi bật",
    example: "他的成绩很突出。",
    pinyinExample: "Tā de chéngjī hěn túchū.",
    exampleMeaning: "Thành tích của anh ấy rất nổi bật."
  },
  {
    id: 724,
    word: "突然",
    pinyin: "túrán",
    type: "（形）",
    meaning: "Đột nhiên",
    example: "今天小明突然给我打电话。",
    pinyinExample: "Jīntiān xiǎomíng túrán gěi wǒ dǎ diànhuà.",
    exampleMeaning: "Đột nhiên hôm nay Tiểu Minh lại gọi điện thoại cho tôi."
  },
  {
    id: 725,
    word: "图",
    pinyin: "tú",
    type: "（名）",
    meaning: "tranh, ảnh",
    example: "这张图怎样改变？",
    pinyinExample: "Zhè zhāng tú zěnyàng gǎibiàn?",
    exampleMeaning: "Bức ảnh này làm thế nào để thay đổi?"
  },
  {
    id: 726,
    word: "图画",
    pinyin: "túhuà",
    type: "（名）",
    meaning: "tranh vẽ, bức họa",
    example: "这张图画很好看，许多人想买它。",
    pinyinExample: "Zhè zhāng túhuà hěn hǎokàn, xǔduō rén xiǎng mǎi tā.",
    exampleMeaning: "Bức tranh này rất đẹp, rất nhiều người muốn mua."
  },
  {
    id: 727,
    word: "土",
    pinyin: "tǔ",
    type: "（名）",
    meaning: "đất",
    example: "他抓起一把土朝他们扔过 去。",
    pinyinExample: "Tā zhuā qǐ yī bǎ tǔ cháo tāmen rēng guòqù.",
    exampleMeaning: "Cậu ta bốc lấy nắm đất ném vào người bọn họ."
  },
  {
    id: 728,
    word: "团",
    pinyin: "tuán",
    type: "（名、量）",
    meaning: "đoàn",
    example: "最大代表团来自美国。",
    pinyinExample: "Zuìdà dàibiǎo tuán láizì měiguó.",
    exampleMeaning: "Đoàn đại biểu lớn nhất đến từ Trung Quốc."
  },
  {
    id: 729,
    word: "团结",
    pinyin: "tuánjié",
    type: "（动）",
    meaning: "đoàn kết",
    example: "团结是成功。",
    pinyinExample: "Tuánjié shì chénggōng.",
    exampleMeaning: "Đoàn kết là thành công."
  },
  {
    id: 730,
    word: "团体",
    pinyin: "tuántǐ",
    type: "（名）",
    meaning: "đoàn thể",
    example: "我想退出 这个团体 ，但他们不让。",
    pinyinExample: "Wǒ xiǎng tuìchū zhège tuántǐ, dàn tāmen bù ràng.",
    exampleMeaning: "Tôi muốn rút lui khỏi tổ chức này, nhưng bọn họ không đồng j."
  },
  {
    id: 731,
    word: "推动",
    pinyin: "tuīdòng",
    type: "（动）",
    meaning: "thúc đẩy, đẩy mạnh",
    example: "这是推动这个地区投资的主要因素.",
    pinyinExample: "Zhè shì tuīdòng zhège dìqū tóuzī de zhǔyào yīnsù.",
    exampleMeaning: "Đây là yếu tố chủ yếu để thúc đẩy đầu tư tại khu vực này."
  },
  {
    id: 732,
    word: "推广",
    pinyin: "tuīguǎng",
    type: "（动）",
    meaning: "mở rộng, phổ biến",
    example: "这个地区正被推广为旅游 点。",
    pinyinExample: "Zhège dìqū zhèng bèi tuīguǎng wèi lǚyóu diǎn.",
    exampleMeaning: "Khu vực này đang được mở rộng để trở thành điểm du lịch quan trọng."
  },
  {
    id: 733,
    word: "推进",
    pinyin: "tuījìn",
    type: "（动）",
    meaning: "đẩy mạnh, tiến lên",
    example: "河内推进改革与建设市内经济。",
    pinyinExample: "Hénèi tuījìn gǎigé yǔ jiànshè shì nèi jīngjì.",
    exampleMeaning: "Hà Nội đẩy mạnh cải cách và xây dựng kinh tế của thành phố."
  },
  {
    id: 734,
    word: "推开",
    pinyin: "tuī kāi",
    type: "（动）",
    meaning: "Đẩy ra",
    example: "我推开窗子，让风吹进来。",
    pinyinExample: "Wǒ tuī kāi chuāngzi, ràng fēng chuī jìnlái.",
    exampleMeaning: "Tôi mở cửa sổ ra để gió lùa vào trong phòng."
  },
  {
    id: 735,
    word: "退",
    pinyin: "tuì",
    type: "（动）",
    meaning: "lùi, lui",
    example: "你可以再退两步左右。",
    pinyinExample: "Nǐ kěyǐ zài tuì liǎng bù zuǒyòu.",
    exampleMeaning: "Bạn có thể lùi lại thêm khoảng hai bước chân nừa."
  },
  {
    id: 736,
    word: "退出",
    pinyin: "tuìchū",
    type: "（动）",
    meaning: "rút khỏi, ra khỏi",
    example: "你公司应该退出这个项目。",
    pinyinExample: "Nǐ gōngsī yīnggāi tuìchū zhège xiàngmù.",
    exampleMeaning: "Công ty của bạn nên rút lui khỏi dự án này."
  },
  {
    id: 737,
    word: "退休",
    pinyin: "tuìxiū",
    type: "（动）",
    meaning: "nghỉ hưu",
    example: "我爷爷今年退休了。",
    pinyinExample: "Wǒ yéyé jīnnián tuìxiūle.",
    exampleMeaning: "Ông nội tôi năm nay nghỉ hưu rồi."
  },
  {
    id: 738,
    word: "外交",
    pinyin: "wàijiāo",
    type: "（名）",
    meaning: "ngoại giao",
    example: "导游工作要求高超的外交技巧。",
    pinyinExample: "Dǎoyóu gōngzuò yāoqiú gāochāo de wàijiāo jìqiǎo.",
    exampleMeaning: "Công việc hướng dẫn viên du lịch yêu cầu có kĩ năng ngoại giao xuất sắc."
  },
  {
    id: 739,
    word: "外面",
    pinyin: "Wàimiàn",
    type: "（名）",
    meaning: "bên ngoài, bề ngoài",
    example: "她在外面修理汽车。",
    pinyinExample: "Tā zài wàimiàn xiūlǐ qìchē.",
    exampleMeaning: "Cô ấy đang ở bên ngoài sửa xe hơi."
  },
  {
    id: 740,
    word: "外文",
    pinyin: "wàiwén",
    type: "（名）",
    meaning: "ngoại ngữ",
    example: "图书馆有大量的外文参考 书。",
    pinyinExample: "Túshū guǎn yǒu dàliàng de wàiwén cānkǎo shū.",
    exampleMeaning: "Trong thư viện có rất nhiều sách tham khảo nước ngoài."
  },
  {
    id: 741,
    word: "完美",
    pinyin: "wánměi",
    type: "（形）",
    meaning: "hoàn mỹ, hoàn hảo",
    example: "那是个完美的暑假。",
    pinyinExample: "Nà shìgè wánměi de shǔjià.",
    exampleMeaning: "Đó là một kj nghỉ hè hoàn mỹ."
  },
  {
    id: 742,
    word: "完善",
    pinyin: "wánshàn",
    type: "（动、形）",
    meaning: "hoàn thiện, đầy đủ",
    example: "他一直在努力完善自己的技能。",
    pinyinExample: "Tā yīzhí zài nǔlì wánshàn zìjǐ de jìnéng.",
    exampleMeaning: "Anh ấy luôn cố gắng để hoàn thiện các kĩ năng của bản thân."
  },
  {
    id: 743,
    word: "完整",
    pinyin: "wánzhěng",
    type: "（形）",
    meaning: "hoàn chỉnh, toàn vẹn",
    example: "那座古塔还在 ，但是不完整了。",
    pinyinExample: "Nà zuò gǔ tǎ hái zài, dànshì bù wánzhěngle.",
    exampleMeaning: "Cái tháp cổ đó vẫn còn chỉ là không được toàn vẹn."
  },
  {
    id: 744,
    word: "玩具",
    pinyin: "wánjù",
    type: "（名）",
    meaning: "Đồ chơi",
    example: "那是我妹妹的玩具。",
    pinyinExample: "Nà shì wǒ mèimei de wánjù.",
    exampleMeaning: "Đó là đồ chơi của em gái tôi."
  },
  {
    id: 745,
    word: "往往",
    pinyin: "wǎngwǎng",
    type: "（副）",
    meaning: "thường thường",
    example: "女人往往比男人爱 美。",
    pinyinExample: "Nǚrén wǎngwǎng bǐ nánrén ài měi.",
    exampleMeaning: "Phụ nữ thường yêu cái đẹp hơn đàn ông."
  },
  {
    id: 746,
    word: "危害",
    pinyin: "wéihài",
    type: "（动、名）",
    meaning: "làm hại, tổn hại",
    example: "晚睡的习惯可以危害着他的健康。",
    pinyinExample: "Wǎn shuì de xíguàn kěyǐ wéihàizhe tā de jiànkāng.",
    exampleMeaning: "Thói quen ngủ muộn có thể làm tổn hại đến sức khỏe của anh ấy."
  },
  {
    id: 747,
    word: "危险",
    pinyin: "wéixiǎn",
    type: "（形、名）",
    meaning: "nguy hiểm",
    example: "喝酒后还开车是很危险的。",
    pinyinExample: "Hējiǔ hòu hái kāichē shì hěn wéixiǎn de.",
    exampleMeaning: "Sau khi uống rượu mà còn lái xe rất nguy hiểm."
  },
  {
    id: 748,
    word: "为",
    pinyin: "wèi",
    type: "（动）",
    meaning: "làm （ chức vụ gì)",
    example: "我们选他为班长。",
    pinyinExample: "Wǒmen xuǎn tā wèi bānzhǎng.",
    exampleMeaning: "Chúng tôi chọn anh ấy lên làm lớp trưởng."
  },
  {
    id: 749,
    word: "为",
    pinyin: "wèi",
    type: "（介）",
    meaning: "bị, được",
    example: "他为爱情所困。",
    pinyinExample: "Tā wèi àiqíng suǒ kùn.",
    exampleMeaning: "Anh ấy bị tình yêu trói buộc."
  },
  {
    id: 750,
    word: "围",
    pinyin: "wéi",
    type: "（动）",
    meaning: "vây, bao vây",
    example: "他们都围到电视机旁边。",
    pinyinExample: "Tāmen dōu wéi dào diànshì jī pángbiān.",
    exampleMeaning: "Bọn họ đều vây quanh cái ti vi."
  },
  {
    id: 751,
    word: "伟大",
    pinyin: "wěidà",
    type: "（形）",
    meaning: "vĩ đại, lớn lao",
    example: "这是一个伟大的学术成就。",
    pinyinExample: "Zhè shì yīgè wěidà de xuéshù chéngjiù.",
    exampleMeaning: "Đây là một thành tựu học thuật vĩ đại."
  },
  {
    id: 752,
    word: "卫生",
    pinyin: "wèishēng",
    type: "（形、名）",
    meaning: "vệ sinh, hợp vệ sinh",
    example: "她非常注重个人卫 生。",
    pinyinExample: "Tā fēicháng zhùzhòng gèrén wèishēng.",
    exampleMeaning: "Cô ây vô cùng chú trọng vấn đề vệ sinh cá nhân."
  },
  {
    id: 753,
    word: "卫生间",
    pinyin: "wèishēngjiān",
    type: "（名）",
    meaning: "nhà vệ sinh, phòng vệ sinh",
    example: "我在打扫卫生间呢。",
    pinyinExample: "Wǒ zài dǎsǎo wèishēngjiān ne.",
    exampleMeaning: "Tôi đang dọn dẹp phòng vệ sinh."
  },
  {
    id: 754,
    word: "为了",
    pinyin: "wèile",
    type: "（介）",
    meaning: "để, để mà",
    example: "他们为了奖品而互相竞争。",
    pinyinExample: "Tāmen wèile jiǎngpǐn ér hùxiāng jìngzhēng.",
    exampleMeaning: "Họ cạnh tranh nhau để giành giải thưởng."
  },
  {
    id: 755,
    word: "温暖",
    pinyin: "wēnnuǎn",
    type: "（形、 动）",
    meaning: "ấm áp",
    example: "春天来了，天气非常温暖。",
    pinyinExample: "Chūntiān láile, tiānqì fēicháng wēnnuǎn.",
    exampleMeaning: "Mùa xuân đến rối, thời tiết vô cùng ấm áp."
  },
  {
    id: 756,
    word: "文化",
    pinyin: "wénhuà",
    type: "（名）",
    meaning: "văn hóa",
    example: "每个国家有不同的文化。",
    pinyinExample: "Měi gè guójiā yǒu bùtóng de wénhuà.",
    exampleMeaning: "Mỗi nước có một nên văn hóa khác nhau."
  },
  {
    id: 757,
    word: "文件",
    pinyin: "wénjiàn",
    type: "（名）",
    meaning: "văn kiện, tài liệu",
    example: "有很多文件放在桌子上。",
    pinyinExample: "Yǒu hěnduō wénjiàn fàng zài zhuōzi shàng.",
    exampleMeaning: "Có rất nhiều văn kiện để ở trên bàn."
  },
  {
    id: 758,
    word: "文明",
    pinyin: "wénmíng",
    type: "（名、形）",
    meaning: "nên văn minh",
    example: "中国有五千年的文 明。",
    pinyinExample: "Zhōngguó yǒu wǔqiān nián de wénmíng.",
    exampleMeaning: "Trung Quôc có nên văn minh dài 5000 năm."
  },
  {
    id: 759,
    word: "文学",
    pinyin: "wénxué",
    type: "（名）",
    meaning: "văn chương",
    example: "他喜欢文学，所以写了很多小说。",
    pinyinExample: "Tā xǐhuān wénxué, suǒyǐ xiěle hěnduō xiǎoshuō.",
    exampleMeaning: "Anh ấy thích văn học, thế nên đã viêt rất nhiêu tiểu thuyết."
  },
  {
    id: 760,
    word: "文章",
    pinyin: "wénzhāng",
    type: "（名）",
    meaning: "bài báo, bài văn, tác phẩm",
    example: "这篇文章有点儿长，我还没看完。",
    pinyinExample: "Zhè piān wénzhāng yǒudiǎn er zhǎng, wǒ hái méi kàn wán.",
    exampleMeaning: "Bài báo này hơi dài, tôi vẫn chưa đọc xong."
  },
  {
    id: 761,
    word: "文字",
    pinyin: "Wénzì",
    type: "（名）",
    meaning: "văn tự, chữ, văn",
    example: "她对中国文字有感兴趣。",
    pinyinExample: "Tā duì zhōngguó wénzì yǒu gǎn xìngqù.",
    exampleMeaning: "Cồ ấy rất hứng thú với văn tự Trung Quốc."
  },
  {
    id: 762,
    word: "握手",
    pinyin: "wòshǒu",
    type: "（动）",
    meaning: "bắt tay",
    example: "两个人见面习惯握手，表示打招呼。",
    pinyinExample: "Liǎng gèrén jiànmiàn xíguàn wòshǒu, biǎoshì dǎzhāohū.",
    exampleMeaning: "2 người gặp mặt có thói quen bắt tay, thể hiện sự chào hỏi."
  },
  {
    id: 763,
    word: "屋子",
    pinyin: "wūzi",
    type: "（名）",
    meaning: "phòng",
    example: "屋子里太暗了，帮我开一下窗户。",
    pinyinExample: "Wūzi lǐ tài ànle, bāng wǒ kāi yīxià chuānghù.",
    exampleMeaning: "Trong phòng tối quá, giúp tôi mở cửa sổ ra."
  },
  {
    id: 764,
    word: "武器",
    pinyin: "wǔqì",
    type: "（名）",
    meaning: "vũ khí",
    example: "他用武器打敌人。",
    pinyinExample: "Tā yòng wǔqì dǎ dírén.",
    exampleMeaning: "Anh ấy dùng vũ khí đánh kẻ địch."
  },
  {
    id: 765,
    word: "武术",
    pinyin: "wǔshù",
    type: "（名）",
    meaning: "võ thuật",
    example: "爸爸很喜欢武术，所以他身体很好。",
    pinyinExample: "Bàba hěn xǐhuān wǔshù, suǒyǐ tā shēntǐ hěn hǎo.",
    exampleMeaning: "Bố tôi rất thích võ thuật, vì vậy sức khỏe của ông ấy rất tốt."
  },
  {
    id: 766,
    word: "舞台",
    pinyin: "wǔtái",
    type: "（名）",
    meaning: "sân khấu",
    example: "她在舞台上跳舞。",
    pinyinExample: "Tā zài wǔtái shàng tiàowǔ.",
    exampleMeaning: "Cô ấy đang khiêu vũ trên sân khấu."
  },
  {
    id: 767,
    word: "西部",
    pinyin: "xībù",
    type: "（名）",
    meaning: "hướng tây, phía tây,miên tây",
    example: "他生活在中国的西部。",
    pinyinExample: "Tā shēnghuó zài zhōngguó de xībù.",
    exampleMeaning: "Cô ấy sống ở miền Tây Trung Quốc"
  },
  {
    id: 768,
    word: "希望",
    pinyin: "xīwàng",
    type: "（动、名）",
    meaning: "mong, mong chờ",
    example: "我希望你每天都开心。",
    pinyinExample: "Wǒ xīwàng nǐ měitiān dū kāixīn.",
    exampleMeaning: "Tôi mong rằng mỗi ngày bạn đều vui vẻ."
  },
  {
    id: 769,
    word: "系",
    pinyin: "xì",
    type: "（名）",
    meaning: "hệ thống, khoa, hệ",
    example: "我是河内大学中文系的学生。",
    pinyinExample: "Wǒ shì hénèi dàxué zhōngwén xì de xuéshēng.",
    exampleMeaning: "Tôi là sinh viên khoa Tiếng Trung của Đại học Hà Nội."
  },
  {
    id: 770,
    word: "下来",
    pinyin: "xiàlái",
    type: "（动）",
    meaning: "Xuống （về hướng chủ thể nói)",
    example: "她从山上下来了。",
    pinyinExample: "Tā cóng shānshàng xiàláile.",
    exampleMeaning: "Cô ấy đi từ trên núi xuống."
  },
  {
    id: 771,
    word: "下面",
    pinyin: "xiàmiàn",
    type: "（名）",
    meaning: "sau",
    example: "公司的下面有一个停车场。",
    pinyinExample: "Gōngsī de xiàmiàn yǒu yīgè tíngchē chǎng.",
    exampleMeaning: "Bên dưới công ty có một bãi đỗ xe."
  },
  {
    id: 772,
    word: "下去",
    pinyin: "xiàqù",
    type: "（动）",
    meaning: "Xuống phía dưới, đi xuống",
    example: "石头从山上滚下去。",
    pinyinExample: "Shítou cóng shānshàng gǔn xiàqù.",
    exampleMeaning: "Đá rơi từ trên núi xuống dưới."
  },
  {
    id: 773,
    word: "先进",
    pinyin: "xiānjìn",
    type: "（名、形）",
    meaning: "tiên tiến",
    example: "我们班是一个先进的集体",
    pinyinExample: "Wǒmen bān shì yīgè xiānjìn de jítǐ",
    exampleMeaning: "Lớp chúng tôi là một tập thể tiên tiến."
  },
  {
    id: 774,
    word: "显得",
    pinyin: "xiǎndé",
    type: "（动）",
    meaning: "lộ ra, tỏ ra, hiện ra",
    example: "春天，这里的风景显得更加美丽。",
    pinyinExample: "chūntiān, zhèlǐ de fēngjǐng xiǎndé gèngjiā měilì.",
    exampleMeaning: "Mùa xuân, phong cảnh ở đây lại càng hiện lên tươi đẹp."
  },
  {
    id: 775,
    word: "显然",
    pinyin: "xiǎnrán",
    type: "（形）",
    meaning: "thiên nhiên, lộ rõ, dễ nhận thấy",
    example: "今天她工作到晚才回家，显得很累。",
    pinyinExample: "Jīntiān tā gōngzuò dào wǎn cái huí jiā, xiǎndé hěn lèi.",
    exampleMeaning: "Hôm nay anh ấy làm việc rất muộn mới về nhà, hiển nhiên là rất mệt."
  },
  {
    id: 776,
    word: "显示",
    pinyin: "xiǎnshì",
    type: "（动）",
    meaning: "biểu thị, tỏ tõ, chứng tỏ",
    example: "手机响了，上面显示出妈妈的号码。",
    pinyinExample: "Shǒujī xiǎngle, shàngmiàn xiǎnshì chū māmā de hàomǎ.",
    exampleMeaning: "Điện thoại đang rung, màn hình hiện hiện lên số điện thoại của mẹ."
  },
  {
    id: 777,
    word: "现场",
    pinyin: "xiànchǎng",
    type: "（名）",
    meaning: "hiện trường",
    example: "今天经理去考察现 场。",
    pinyinExample: "Jīntiān jīnglǐ qù kǎochá xiànchǎng.",
    exampleMeaning: "Hôm nay giám đốc đi khảo sát hiện trường."
  },
  {
    id: 778,
    word: "现代",
    pinyin: "xiàndài",
    type: "（名）",
    meaning: "hiện đại, thời đại ngày nay",
    example: "我们在现代社会中生活。",
    pinyinExample: "Wǒmen zài xiàndài shèhuì zhōng shēnghuó.",
    exampleMeaning: "Chúng ta đang sống trong một xã hội hiện đại."
  },
  {
    id: 779,
    word: "现金",
    pinyin: "xiànjīn",
    type: "（名）",
    meaning: "tiền mặt",
    example: "没有现金没关系，你可以用信用卡。",
    pinyinExample: "Méiyǒu xiànjīn méiguānxì, nǐ kěyǐ yòng xìnyòngkǎ.",
    exampleMeaning: "Không có tiền mặt cũng không sao, bạn có thể dùng thẻ tín dụng."
  },
  {
    id: 780,
    word: "现实",
    pinyin: "xiànshí",
    type: "（名、形）",
    meaning: "Thực tế",
    example: "这是一个比较现实的办法。",
    pinyinExample: "Zhè shì yīgè bǐjiào xiànshí de bànfǎ.",
    exampleMeaning: "Đây là một phương pháp khá thực tế."
  },
  {
    id: 781,
    word: "现象",
    pinyin: "xiànxiàng",
    type: "（名）",
    meaning: "hiện tượng",
    example: "现在这个现象很普遍。",
    pinyinExample: "Xiànzài zhège xiànxiàng hěn pǔbiàn.",
    exampleMeaning: "Hiện tượng này rất phổ biến hiện nay."
  },
  {
    id: 782,
    word: "线",
    pinyin: "Xiàn",
    type: "（名）",
    meaning: "tuyến, chặng, sợi",
    example: "这次路线很长，游客注意保护身体。",
    pinyinExample: "Zhè cì lùxiàn hěn zhǎng, yóukè zhùyì bǎohù shēntǐ.",
    exampleMeaning: "Tuyến đường lần này rất dài, khách du lịch cần chú j bảo vệ sức khỏe."
  },
  {
    id: 783,
    word: "相比",
    pinyin: "xiāng bǐ",
    type: "（动）",
    meaning: "so với",
    example: "和去年相比，今年我公司发展得很 快。",
    pinyinExample: "Hé qùnián xiāng bǐ, jīnnián wǒ gōngsī fāzhǎn dé hěn kuài.",
    exampleMeaning: "So với năm ngoái thì năm nay công ty chúng ta phát triển rất nhanh."
  },
  {
    id: 784,
    word: "相当",
    pinyin: "xiāngdān g",
    type: "（动、副）",
    meaning: "khá, tương đương, thích hợp",
    example: "你的成绩相当好，继续努力吧！",
    pinyinExample: "Nǐ de chéngjī xiāngdāng hǎo, jìxù nǔlì ba!",
    exampleMeaning: "Thành tích của bạn khá tốt, tiếp tục cố gắng nhé!"
  },
  {
    id: 785,
    word: "相关",
    pinyin: "xiāngguā n",
    type: "（动）",
    meaning: "liên quan, tương quan",
    example: "这件事和他相关。",
    pinyinExample: "Zhè jiàn shì hé tā xiāngguān.",
    exampleMeaning: "Chuyện này có liên quan đến anh ấy."
  },
  {
    id: 786,
    word: "相互",
    pinyin: "xiānghù",
    type: "（副）",
    meaning: "Lẫn nhau, tương hổ, qua lại",
    example: "我们相互帮助，一起学习中文吧！",
    pinyinExample: "Wǒmen xiānghù bāngzhù, yīqǐ xuéxí zhōngwén ba!",
    exampleMeaning: "Chúng ta giúp đỡ lẫn nhau, cùng nhau học tập tiếng Trung."
  },
  {
    id: 787,
    word: "相似",
    pinyin: "xiāngsì",
    type: "（形）",
    meaning: "Giống nhau, tương tự",
    example: "他们两个人很相似 ，我认不出来。",
    pinyinExample: "Tāmen liǎng gèrén hěn xiāngsì, wǒ rèn bù chūlái.",
    exampleMeaning: "Hai người bọn họ rất giống nhau, tôi không nhận ra được."
  },
  {
    id: 788,
    word: "香",
    pinyin: "xiāng",
    type: "（形）",
    meaning: "（mùi) thơm",
    example: "你做什么好吃的菜呢，好香啊！",
    pinyinExample: "Nǐ zuò shénme hào chī de cài ne, hǎo xiāng a!",
    exampleMeaning: "Bạn làm món gì vậy, thơm quá đi!"
  },
  {
    id: 789,
    word: "香蕉",
    pinyin: "xiāngjiāo",
    type: "（名）",
    meaning: "quả chuối",
    example: "根据调查 ，吃香蕉对身体很好。",
    pinyinExample: "Gēnjù diàochá, chī xiāngjiāo duì shēntǐ hěn hǎo.",
    exampleMeaning: "Theo như điều tra, ăn chuối rất tốt cho sức khỏe."
  },
  {
    id: 790,
    word: "消费",
    pinyin: "xiāofèi",
    type: "（动）",
    meaning: "tiêu, tiêu thụ",
    example: "一个月我一共消费两千万越南盾。",
    pinyinExample: "Yīgè yuè wǒ yīgòng xiāofèi liǎng qiān wàn yuènán dùn.",
    exampleMeaning: "Một tháng tôi tổng cộng tiêu hết 20 triệu đồng."
  },
  {
    id: 791,
    word: "消失",
    pinyin: "xiāoshī",
    type: "（动）",
    meaning: "Biến mất, tan biến",
    example: "天上的彩虹消失 了。",
    pinyinExample: "Tiānshàng de cǎihóng xiāoshīle.",
    exampleMeaning: "Cầu vồng trên trời biên mất rồi."
  },
  {
    id: 792,
    word: "消息",
    pinyin: "xiāoxī",
    type: "（名）",
    meaning: "Tin tức",
    example: "听到这个消息，他高兴地跳起来。",
    pinyinExample: "Tīng dào zhège xiāoxī, tā gāoxìng de tiào qǐlái.",
    exampleMeaning: "Nghe được tin tức này, anh ấy vui vừng đến nỗi nhảy cẫng lên."
  },
  {
    id: 793,
    word: "效果",
    pinyin: "xiàoguǒ",
    type: "（名）",
    meaning: "hiệu quả",
    example: "这个方法的效果很好。",
    pinyinExample: "Zhège fāngfǎ de xiàoguǒ hěn hǎo.",
    exampleMeaning: "Hiệu quả của phương pháp này rất tốt."
  },
  {
    id: 794,
    word: "写作",
    pinyin: "xiězuò",
    type: "（动）",
    meaning: "Viết, sáng tác",
    example: "我写作的风格和你很不同。",
    pinyinExample: "Wǒ xiězuò de fēnggé hé nǐ hěn bùtóng.",
    exampleMeaning: "Phong cách sáng tác của tôi khác với bạn."
  },
  {
    id: 795,
    word: "血",
    pinyin: "xuè",
    type: "（名）",
    meaning: "máu",
    example: "他一见到血就往后退。",
    pinyinExample: "Tā yī jiàn dào xuè jiù wǎng hòutuì.",
    exampleMeaning: "Anh ấy hễ nhìn thấy máu là sẽ lùi về phía sau."
  },
  {
    id: 796,
    word: "心",
    pinyin: "xīn",
    type: "（名）",
    meaning: "tim",
    example: "他有一颗真诚的 心。",
    pinyinExample: "Tā yǒuyī kē zhēnchéng de xīn.",
    exampleMeaning: "Anh ấy có một trái tim chân thành."
  },
  {
    id: 797,
    word: "信",
    pinyin: "xìn",
    type: "（名）",
    meaning: "lá thư",
    example: "很高兴收到你的信。",
    pinyinExample: "Hěn gāoxìng shōu dào nǐ de xìn.",
    exampleMeaning: "Rất vui khi nhận được thư của bạn."
  },
  {
    id: 798,
    word: "信封",
    pinyin: "xìnfēng",
    type: "（名）",
    meaning: "phong bì",
    example: "她把钱放到信封里。",
    pinyinExample: "Tā bǎ qián fàng dào xìnfēng lǐ.",
    exampleMeaning: "Cô ấy bỏ tiền vào trong phong bì."
  },
  {
    id: 799,
    word: "信任",
    pinyin: "xìnrèn",
    type: "（动）",
    meaning: "tín nhiệm, tin tưởng",
    example: "我觉得这个人不值得信任。",
    pinyinExample: "Wǒ juédé zhège rén bù zhídé xìnrèn.",
    exampleMeaning: "Tôi cảm thấy người này không đáng để tin tưởng."
  },
  {
    id: 800,
    word: "李",
    pinyin: "lǐ",
    type: "（名）",
    meaning: "hành lj",
    example: "这些是我要带回家的行李。",
    pinyinExample: "Zhèxiē shì wǒ yào dài huí jiā de xínglǐ.",
    exampleMeaning: "Những thứ này là hành lj tôi cần mang về."
  },
  {
    id: 801,
    word: "形成",
    pinyin: "xíngchéng",
    type: "（动）",
    meaning: "hình thành",
    example: "我已形成习惯，每天六点起床。",
    pinyinExample: "Wǒ yǐ xíngchéng xíguàn, měitiān liù diǎn qǐchuáng.",
    exampleMeaning: "Tôi đã hình thành thói quen dậy lúc 6 giờ mỗi ngày."
  },
  {
    id: 802,
    word: "形式",
    pinyin: "xíngshì",
    type: "（名）",
    meaning: "hình thức",
    example: "适当的地方可以用了缩写形式。",
    pinyinExample: "Shìdàng dì dìfāng kěyǐ yòngle suōxiě xíngshì.",
    exampleMeaning: "Có thể dùng hình thức rút gọn tại những nơi phù hợp."
  },
  {
    id: 803,
    word: "形象",
    pinyin: "Xíngxiàng",
    type: "（名、形）",
    meaning: "hình ảnh, hình tượng",
    example: "不要降低你的个人形象。",
    pinyinExample: "Bùyào jiàngdī nǐ de gèrén xíngxiàng.",
    exampleMeaning: "Đừng hạ thấp hình tượng cá nhân của bạn."
  },
  {
    id: 804,
    word: "形状",
    pinyin: "xíngzhuàng",
    type: "（名）",
    meaning: "hình dáng, hình dạng",
    example: "这张桌子的形状很怪。",
    pinyinExample: "Zhè zhāng zhuōzi de xíngzhuàng hěn guài.",
    exampleMeaning: "Hình dáng của cái bàn này rất lạ."
  },
  {
    id: 805,
    word: "幸福",
    pinyin: "xìngfú",
    type: "（名、形）",
    meaning: "hạnh phúc",
    example: "两个人相爱的时候是幸福的。",
    pinyinExample: "Liǎng gèrén xiāng’ài de shíhòu shì xìngfú de.",
    exampleMeaning: "Khi hai nguời cùng yêu thương nhau thì rất hạnh phúc."
  },
  {
    id: 806,
    word: "幸运",
    pinyin: "xìngyùn",
    type: "（形）",
    meaning: "may mắn",
    example: "这是我特別幸运的一年。",
    pinyinExample: "Zhè shì wǒ tèbié xìngyùn de yī nián.",
    exampleMeaning: "Đây là một năm vô cùng may mắn của tôi."
  },
  {
    id: 807,
    word: "性 （积极性）",
    pinyin: "xìng (jījíxìng)",
    type: "（后 缀）",
    meaning: "tính （ tính tích cực)",
    example: "这种积极性是很可贵的。",
    pinyinExample: "Zhè zhǒng jījíxìng shì hěn kěguì de.",
    exampleMeaning: "Tính tích cực này rất đáng quj."
  },
  {
    id: 808,
    word: "性别",
    pinyin: "xìngbié",
    type: "（名）",
    meaning: "tính",
    example: "请填写你的性别。",
    pinyinExample: "Qǐng tiánxiě nǐ dì xìngbié.",
    exampleMeaning: "Vui lòng điền giới tính của bạn."
  },
  {
    id: 809,
    word: "性格",
    pinyin: "xìnggé",
    type: "（名）",
    meaning: "tính cách",
    example: "他的性格和我的完全相反。",
    pinyinExample: "Tā dì xìnggé hé wǒ de wánquán xiāngfǎn.",
    exampleMeaning: "Tính cách của anh ấy và tôi hoàn toàn trái ngược nhau."
  },
  {
    id: 810,
    word: "修",
    pinyin: "xiū",
    type: "（动）",
    meaning: "sửa",
    example: "我修我这辆汽车可费劲了。",
    pinyinExample: "Wǒ xiū wǒ zhè liàng qìchē kě fèijìngle.",
    exampleMeaning: "Tôi sửa chiếc xe này của mình tốn rất nhiều công sức."
  },
  {
    id: 811,
    word: "修改",
    pinyin: "xiūgǎi",
    type: "（动）",
    meaning: "sửa chữa",
    example: "你的作文经过修改，语句很通顺。",
    pinyinExample: "Nǐ de zuòwén jīngguò xiūgǎi, yǔjù hěn tōngshùn.",
    exampleMeaning: "Bài văn của bạn sau khi được sửa chữa thì các câu văn rất trôi chảy."
  },
  {
    id: 812,
    word: "需求",
    pinyin: "xūqiú",
    type: "（名）",
    meaning: "nhu cầu",
    example: "人们对食品的需求越来越高。",
    pinyinExample: "Rénmen duì shípǐn de xūqiú yuè lái yuè gāo.",
    exampleMeaning: "Nhu cầu về thực phẩm của mọi người ngày càng cao."
  },
  {
    id: 813,
    word: "需要",
    pinyin: "xūyào",
    type: "（名、 动）",
    meaning: "yêu cầu, cần",
    example: "我们需要的是适用的工具。",
    pinyinExample: "Wǒmen xūyào de shì shìyòng de gōngjù.",
    exampleMeaning: "Chúng tôi cần một công cụ thích hợp."
  },
  {
    id: 814,
    word: "宣布",
    pinyin: "xuānbù",
    type: "（动）",
    meaning: "tuyên bố",
    example: "今天老师宣布胜利者的名字。",
    pinyinExample: "Jīntiān lǎoshī xuānbù shènglì zhě de míngzì.",
    exampleMeaning: "Hôm nay thầy giáo tuyên bố tên của người chiến thắng."
  },
  {
    id: 815,
    word: "宣传",
    pinyin: "xuānchuán",
    type: "（动、名）",
    meaning: "tuyên truyền",
    example: "他总是宣传有意义的活动。",
    pinyinExample: "Tā zǒng shì xuānchuán yǒu yìyì de huódòng.",
    exampleMeaning: "Anh ấy luôn luôn tuyên truyền những hoạt động có j nghĩa."
  },
  {
    id: 816,
    word: "选手",
    pinyin: "xuǎnshǒu",
    type: "（名）",
    meaning: "tuyển thủ",
    example: "2005年，她成为世界排名第一的手。",
    pinyinExample: "2005 Nián, tā chéngwéi shìjiè páimíng dì yī de shǒu.",
    exampleMeaning: "Năm 2005, cô ấy trở thành tuyển thủ đứng đầu thế giới."
  },
  {
    id: 817,
    word: "学费",
    pinyin: "xuéfèi",
    type: "（名）",
    meaning: "học phí",
    example: "你们的学费是否很贵？",
    pinyinExample: "Nǐmen de xuéfèi shìfǒu hěn guì?",
    exampleMeaning: "Có phải học phí của các bạn rất đắt không?"
  },
  {
    id: 818,
    word: "训练",
    pinyin: "xùnliàn",
    type: "（动、名）",
    meaning: "đào tạo, huấn luyện",
    example: "他们只受过简单的训练。",
    pinyinExample: "Tāmen zhǐ shòuguò jiǎndān de xùnliàn.",
    exampleMeaning: "Họ chỉ nhận được sự huấn luyện đơn giản."
  },
  {
    id: 819,
    word: "压",
    pinyin: "yā",
    type: "（动）",
    meaning: "đè, ép",
    example: "卡车过重把这座桥压坏了。",
    pinyinExample: "Kǎchēguò zhòng bǎ zhè zuò qiáo yā huàile.",
    exampleMeaning: "Xe tải quá nặng đã đè hỏng cây cầu này."
  },
  {
    id: 820,
    word: "压力",
    pinyin: "yālì",
    type: "（名）",
    meaning: "áp lực, sức ép",
    example: "他工作压力很大，所以每天都很累。",
    pinyinExample: "Tā gōngzuò yālì hěn dà, suǒyǐ měitiān dū hěn lèi.",
    exampleMeaning: "Áp lực công việc của anh ấy rất lớn, bởi vậy mỗi ngày đều rất mệt."
  },
  {
    id: 821,
    word: "烟",
    pinyin: "yān",
    type: "（名）",
    meaning: "khói",
    example: "有烟必有火，有果必有因。",
    pinyinExample: "Yǒu yān bì yǒu huǒ, yǒu guǒ bì yǒu yīn.",
    exampleMeaning: "Có lửa ắt có khói, có quả ắt có nhân."
  },
  {
    id: 822,
    word: "眼前",
    pinyin: "yǎnqián",
    type: "（名）",
    meaning: "trước mặt",
    example: "他判断他的机会就在眼前。",
    pinyinExample: "Tā pànduàn tā de jīhuì jiù zài yǎnqián.",
    exampleMeaning: "Anh ấy phán đoán cơ hội của anh ấy ở ngay trước mặt."
  },
  {
    id: 823,
    word: "演",
    pinyin: "yǎn",
    type: "（动）",
    meaning: "diễn",
    example: "她演过西游记。",
    pinyinExample: "Tā yǎnguò xīyóu jì.",
    exampleMeaning: "Cô ấy từng diễn ở bộ phim Tây Du Kí."
  },
  {
    id: 824,
    word: "演唱",
    pinyin: "Yǎnchàng",
    type: "（动）",
    meaning: "biểu diễn",
    example: "李平为大家演唱了一首优美的歌曲。",
    pinyinExample: "Lǐ píng wéi dàjiā yǎnchàngle yī shǒu yōuměi de gēqǔ.",
    exampleMeaning: "Lj Bằng đã biểu diễn một ca khúc tuyệt hay cho mọi người."
  },
  {
    id: 825,
    word: "演唱会",
    pinyin: "yǎnchàng huì",
    type: "（名）",
    meaning: "buổi hòa nhạc",
    example: "今天，这场演唱会坐满着人。",
    pinyinExample: "Jīntiān, zhè chǎng yǎnchàng huì zuò mǎnzhe rén.",
    exampleMeaning: "Hôm nay, buổi hòa nhạc này đông nghịt người."
  },
  {
    id: 826,
    word: "演出",
    pinyin: "yǎnchū",
    type: "（动、名）",
    meaning: "diễn xuất",
    example: "他每晚在地区剧院登台演出。",
    pinyinExample: "Tā měi wǎn zài dìqū jùyuàn dēngtái yǎnchū.",
    exampleMeaning: "Mỗi tối anh ấy đều đến biểu diễn ở rạp hát địa phương."
  },
  {
    id: 827,
    word: "演员",
    pinyin: "yǎnyuán",
    type: "（名）",
    meaning: "diễn viên",
    example: "他是大众喜爱的电视演员。",
    pinyinExample: "Tā shì dàzhòng xǐ’ài de diànshì yǎnyuán.",
    exampleMeaning: "Anh ấy là diễn viên truyền hình được quân chúng yêu thích."
  },
  {
    id: 828,
    word: "羊",
    pinyin: "yáng",
    type: "（名）",
    meaning: "con cừu",
    example: "农业养羊不再流行了。",
    pinyinExample: "Nóngyè yǎng yáng bù zài liúxíngle.",
    exampleMeaning: "Nền nông nghiệp nuôi cừu không thịnh hành nữa."
  },
  {
    id: 829,
    word: "阳光",
    pinyin: "yángguān g",
    type: "（名）",
    meaning: "ánh sáng mặt trời",
    example: "那是个阳光灿烂的早晨。",
    pinyinExample: "Nà shìgè yángguāng cànlàn de zǎochén.",
    exampleMeaning: "Đó là buổi sáng sớm có ánh sáng rực rỡ."
  },
  {
    id: 830,
    word: "要是",
    pinyin: "yàoshi",
    type: "（连）",
    meaning: "nếu",
    example: "要是今天天气好，我就出去玩儿。",
    pinyinExample: "Yàoshi jīntiān tiānqì hǎo, wǒ jiù chūqù wán er.",
    exampleMeaning: "Nếu hôm nay thời tiết đẹp, tôi sẽ đi chơi."
  },
  {
    id: 831,
    word: "衣架",
    pinyin: "yījià",
    type: "（名）",
    meaning: "móc quần áo",
    example: "把衣架放在墙角就行。",
    pinyinExample: "Bǎ yījià fàng zài qiángjiǎo jiùxíng.",
    exampleMeaning: "Để móc quần áo vào góc tường là được."
  },
  {
    id: 832,
    word: "一切",
    pinyin: "yīqiè",
    type: "（代）",
    meaning: "tất cả",
    example: "他们一切都按照规定办理。",
    pinyinExample: "Tāmen yīqiè dōu ànzhào guīdìng bànlǐ.",
    exampleMeaning: "Tất cả họ đều giải quyết theo quy định."
  },
  {
    id: 833,
    word: "已",
    pinyin: "yǐ",
    type: "（副）",
    meaning: "đã, đã ưmg",
    example: "他父母对他已不抱希望了。",
    pinyinExample: "Tā fùmǔ duì tā yǐ bù bào xīwàngle.",
    exampleMeaning: "Bố mẹ anh ấy đã không ôm hi vọng vào anh ấy nữa."
  },
  {
    id: 834,
    word: "以来",
    pinyin: "yǐlái",
    type: "（名）",
    meaning: "cho đến nay",
    example: "2018年 以来我一直住在这里。",
    pinyinExample: "2018 Nián yǐlái wǒ yīzhí zhù zài zhèlǐ.",
    exampleMeaning: "Từ năm 2018 đến nay tôi luôn sống ở đây."
  },
  {
    id: 835,
    word: "一方面",
    pinyin: "yī fāngmiàn",
    type: "（名）",
    meaning: "một mặt",
    example: "这只是事情的一方面。",
    pinyinExample: "Zhè zhǐshì shìqíng de yī fāngmiàn.",
    exampleMeaning: "Đây chỉ là một mặt của vấn đề."
  },
  {
    id: 836,
    word: "艺术",
    pinyin: "yìshù",
    type: "（名）",
    meaning: "nghệ thuật",
    example: "艺术的形式是多种多样的。",
    pinyinExample: "Yìshù de xíngshì shì duō zhǒng duōyàng de.",
    exampleMeaning: "Các hình thức nghệ thuật rất đa dạng phong phú."
  },
  {
    id: 837,
    word: "意外",
    pinyin: "yìwài",
    type: "（形、名）",
    meaning: "không ngờ, điều bất trắc",
    example: "谁能说不会发生这种意外 呢？",
    pinyinExample: "Shéi néng shuō bu huì fāshēng zhè zhǒng yìwài ne?",
    exampleMeaning: "Ai có thể nói chắc rằng chuyện bất trắc này sẽ không xảy ra ?"
  },
  {
    id: 838,
    word: "意义",
    pinyin: "yìyì",
    type: "（名）",
    meaning: "j nghĩa",
    example: "让我们解释这个名词的意 义。",
    pinyinExample: "Ràng wǒmen jiěshì zhège míngcí de yìyì.",
    exampleMeaning: "Để chúng tôi giải thích nghĩa của danh từ này."
  },
  {
    id: 839,
    word: "因此",
    pinyin: "yīncǐ",
    type: "（连）",
    meaning: "vì thế",
    example: "我病了，因此我心情不好。",
    pinyinExample: "Wǒ bìngle, yīncǐ wǒ xīnqíng bù hǎo.",
    exampleMeaning: "Tôi bị bệnh vì thế tâm trạng tôi không tốt."
  },
  {
    id: 840,
    word: "银",
    pinyin: "yín",
    type: "（名、形）",
    meaning: "bạc",
    example: "她头上戴着一个银色的帽子。",
    pinyinExample: "Tā tóu shàng dàizhe yīgè yínsè de màozi.",
    exampleMeaning: "Cô ấy đội một chiếc mũ màu bạc."
  },
  {
    id: 841,
    word: "银牌",
    pinyin: "yínpái",
    type: "（名）",
    meaning: "huy chương bạc",
    example: "在400米栏比赛中，他获得银牌。",
    pinyinExample: "Zài 400 mǐ lán bǐsài zhōng, tā huòdé yínpái.",
    exampleMeaning: "ở nội dung 400m vượt rào, anh ấy đạt được huy chương bạc."
  },
  {
    id: 842,
    word: "印象",
    pinyin: "yìnxiàng",
    type: "（名）",
    meaning: "ấn tượng",
    example: "我对他的第一个印象是她很漂亮",
    pinyinExample: "Wǒ duì tā de dì yī gè yìnxiàng shì tā hěn piàoliang",
    exampleMeaning: "Ấn tượng đầu tiên của tôi với cô ấy là cô ấy rất xinh đẹp."
  },
  {
    id: 843,
    word: "应当",
    pinyin: "yīngdāng",
    type: "（动）",
    meaning: "Nên",
    example: "兄弟姐妹应当和好相处。",
    pinyinExample: "xiōngdì jiěmèi yīngdāng hé hǎo xiāngchǔ.",
    exampleMeaning: "Anh chị em nên chung sống hòa thuận."
  },
  {
    id: 844,
    word: "迎接",
    pinyin: "yíngjiē",
    type: "（动）",
    meaning: "nghênh đón, chào đón",
    example: "孩子们跑过去迎接妈妈。",
    pinyinExample: "Háizimen pǎo guòqù yíngjiē māmā.",
    exampleMeaning: "Bọn trẻ chạy qua đón mẹ của chúng."
  },
  {
    id: 845,
    word: "营养",
    pinyin: "Yíngyǎng",
    type: "（名）",
    meaning: "dinh dưỡng",
    example: "他的病是因营养不良造成的。",
    pinyinExample: "Tā de bìng shì yīn yíngyǎng bùliáng zàochéng de.",
    exampleMeaning: "Bệnh của anh ấy là do dinh dưỡng không tốt mà thành."
  },
  {
    id: 846,
    word: "赢",
    pinyin: "yíng",
    type: "（动）",
    meaning: "Thắng lợi",
    example: "今天的比赛我们赢了。",
    pinyinExample: "Jīntiān de bǐsài wǒmen yíngle.",
    exampleMeaning: "Cuộc thi ngày hôm nay chúng ta thắng rồi."
  },
  {
    id: 847,
    word: "影视",
    pinyin: "yǐngshì",
    type: "（名）",
    meaning: "điện ảnh và truyền hình",
    example: "我从事艺术创作。",
    pinyinExample: "Wǒ cóngshì yìshù chuàngzuò.",
    exampleMeaning: "Tôi làm công việc sáng tạo nghệ thuật."
  },
  {
    id: 848,
    word: "应用",
    pinyin: "yìngyòng",
    type: "（动）",
    meaning: "ứng dụng",
    example: "她打算参加应用语言学课程。",
    pinyinExample: "Tā dǎsuàn cānjiā yìngyòng yǔyán xué kèchéng.",
    exampleMeaning: "Cô ấy định tham gia một khóa học ngôn ngữ ứng dụng."
  },
  {
    id: 849,
    word: "优点",
    pinyin: "yōudiǎn",
    type: "（名）",
    meaning: "lợi thế",
    example: "每个人都有优点，也有缺点。",
    pinyinExample: "Měi gèrén dōu yǒu yōudiǎn, yěyǒu quēdiǎn.",
    exampleMeaning: "Ai cũng có ưu điểm và nhược điểm."
  },
  {
    id: 850,
    word: "优势",
    pinyin: "yōushì",
    type: "（名）",
    meaning: "Lợi thế",
    example: "中国队占有身高优 势。",
    pinyinExample: "Zhōngguó duì zhànyǒu shēngāo yōushì.",
    exampleMeaning: "Lợi thế của đội Trung Ọuốc là chiêu cao."
  },
  {
    id: 851,
    word: "由",
    pinyin: "yóu",
    type: "（介）",
    meaning: "qua",
    example: "电视节目是由广告资助的。",
    pinyinExample: "Diànshì jiémù shì yóu guǎnggào zīzhù de.",
    exampleMeaning: "Chương trình truyền hình được các bên quảng cáo tài trợ."
  },
  {
    id: 852,
    word: "由于",
    pinyin: "yóuyú",
    type: "（介、 连）",
    meaning: "do, vì",
    example: "他的失败主要是他不自信的。",
    pinyinExample: "Tā de shībài zhǔyào shi tā bù zìxìn de.",
    exampleMeaning: "Sự thất bại của anh ấy chủ yếu là do anh ấy không tự tin."
  },
  {
    id: 853,
    word: "邮件",
    pinyin: "yóujiàn",
    type: "（名）",
    meaning: "thư",
    example: "我昨天收到很多邮件。",
    pinyinExample: "Wǒ zuótiān shōu dào hěnduō yóujiàn.",
    exampleMeaning: "Hôm qua tôi nhận được rất nhiều thư."
  },
  {
    id: 854,
    word: "邮票",
    pinyin: "yóupiào",
    type: "（名）",
    meaning: "con tem",
    example: "不要忘记在信封上贴邮票。",
    pinyinExample: "Bùyào wàngjì zài xìnfēng shàng tiē yóupiào.",
    exampleMeaning: "Đừng quên dán tem lên thư."
  },
  {
    id: 855,
    word: "邮箱",
    pinyin: "yóuxiāng",
    type: "（名）",
    meaning: "hộp thư",
    example: "这些文件已经发到你的邮箱了。",
    pinyinExample: "Zhèxiē wénjiàn yǐjīng fā dào nǐ de yóuxiāngle.",
    exampleMeaning: "Những tài liệu này đã gửi tới hộp thư của bạn rồi."
  },
  {
    id: 856,
    word: "游",
    pinyin: "yóu",
    type: "（动）",
    meaning: "dạo chơi, đi lại",
    example: "他们游览全世界。",
    pinyinExample: "Tāmen yóulǎn quán shìjiè.",
    exampleMeaning: "Họ đi du lịch khắp nơi trên thê giới."
  },
  {
    id: 857,
    word: "游戏",
    pinyin: "yóuxì",
    type: "（名）",
    meaning: "trò chơi",
    example: "今年的电子游戏大受欢迎。",
    pinyinExample: "Jīnnián de diànzǐ yóuxì dà shòu huānyíng.",
    exampleMeaning: "Trò chơi điện tử năm nay rất được hoan nghênh."
  },
  {
    id: 858,
    word: "游泳",
    pinyin: "yóuyǒng",
    type: "（名、 动）",
    meaning: "bơi lội",
    example: "他们游泳游了一个下午。",
    pinyinExample: "Tāmen yóuyǒng yóule yīgè xiàwǔ.",
    exampleMeaning: "Bọn họ bơi cả chiều nay."
  },
  {
    id: 859,
    word: "有的是",
    pinyin: "yǒudeshì",
    type: "（词组）",
    meaning: "có rất nhiều",
    example: "去留学的机会有的是。",
    pinyinExample: "Qù liúxué de jīhuì yǒudeshì.",
    exampleMeaning: "Cơ hội để đi du học có rất nhiều."
  },
  {
    id: 860,
    word: "有利",
    pinyin: "yǒulì",
    type: "（形）",
    meaning: "có lợi, có ích",
    example: "看来事情确实对我们有利。",
    pinyinExample: "Kàn lái shìqíng quèshí duì wǒmen yǒulì.",
    exampleMeaning: "Xem ra tình hình rất có lợi cho chúng ta."
  },
  {
    id: 861,
    word: "有效",
    pinyin: "yǒuxiào",
    type: "（形、 动）",
    meaning: "hữu hiệu, hiệu quả",
    example: "我不敢说这方法绝对有效。",
    pinyinExample: "Wǒ bù gǎn shuō zhè fāngfǎ juéduì yǒuxiào.",
    exampleMeaning: "Tôi không dám nỏi phương pháp này hoàn toàn hiệu quả."
  },
  {
    id: 862,
    word: "预报",
    pinyin: "yùbào",
    type: "（动、名）",
    meaning: "dự báo, báo trước",
    example: "昨天预报说有小雨，今天果然下起来了。",
    pinyinExample: "Zuótiān yùbào shuō yǒu xiǎoyǔ, jīntiān guǒrán xià qǐláile.",
    exampleMeaning: "Hôm qua dự báo có mưa, hôm nay quả nhiên mưa thật."
  },
  {
    id: 863,
    word: "预防",
    pinyin: "yùfáng",
    type: "（动）",
    meaning: "dự phòng, phòng bị",
    example: "预防疾病才是上策。",
    pinyinExample: "Yùfáng jíbìng cái shì shàngcè.",
    exampleMeaning: "Phòng bệnh mới là thượng sách."
  },
  {
    id: 864,
    word: "预计",
    pinyin: "yùjì",
    type: "（动）",
    meaning: "dự tính, tính trước",
    example: "无法预计那天何时到来。",
    pinyinExample: "Wúfǎ yùjì nèitiān hé shí dàolái.",
    exampleMeaning: "Không thê dự tính trước được ngày đó lúc nào sẽ đến."
  },
  {
    id: 865,
    word: "预习",
    pinyin: "yùxí",
    type: "（动）",
    meaning: "chuẩn bị bài",
    example: "下次来上课之前请预习课文。",
    pinyinExample: "Xià cì lái shàngkè zhīqián qǐng yùxí kèwén.",
    exampleMeaning: "Lần sau trước khi lên lớp phải chuẩn bị bài."
  },
  {
    id: 866,
    word: "员 （服务 员）",
    pinyin: "yuán (fúwùyuán)",
    type: "（d )",
    meaning: "nhân viên",
    example: "他是这家酒店的服务员。",
    pinyinExample: "Tā shì zhè jiā jiǔdiàn de fúwùyuán.",
    exampleMeaning: "Anh ấy là nhân viên của khách sạn này."
  },
  {
    id: 867,
    word: "员工",
    pinyin: "yuángōng",
    type: "（名）",
    meaning: "công nhân",
    example: "那家公司有多少员 工？",
    pinyinExample: "Nà jiā gōngsī yǒu duōshǎo yuángōng?",
    exampleMeaning: "Công ty đó có tất cả bao nhiêu công nhân?"
  },
  {
    id: 868,
    word: "愿望",
    pinyin: "Yuànwàng",
    type: "（名）",
    meaning: "nguyện vọng, mong muốn",
    example: "这是我丈夫最大的愿望。",
    pinyinExample: "Zhè shì wǒ zhàngfū zuìdà de yuànwàng.",
    exampleMeaning: "Đây là nguyện vọng lớn nhất của chồng tôi."
  },
  {
    id: 869,
    word: "约",
    pinyin: "yuē",
    type: "（动）",
    meaning: "hẹn, mời",
    example: "我约朋友明天去逛街。",
    pinyinExample: "Wǒ yuē péngyǒu míngtiān qù guàngjiē.",
    exampleMeaning: "Tôi hẹn với bạn ngày mai đi dạo phố."
  },
  {
    id: 870,
    word: "乐队",
    pinyin: "yuèduì",
    type: "（名）",
    meaning: "ban nhạc",
    example: "乐队在演奏着感伤的曲子。",
    pinyinExample: "Yuèduì zài yǎnzòuzhe gǎnshāng de qǔzi.",
    exampleMeaning: "Ban nhạc đang diễn tấu một bản nhạc đầy đau thương."
  },
  {
    id: 871,
    word: "运输",
    pinyin: "yùnshū",
    type: "（动）",
    meaning: "vận chuyển, vận tải",
    example: "这个卡车运输水果。",
    pinyinExample: "Zhège kǎchē yùnshū shuǐguǒ.",
    exampleMeaning: "Chiếc xe tải này vận chuyển hoa quả."
  },
  {
    id: 872,
    word: "杂志",
    pinyin: "zázhì",
    type: "（名）",
    meaning: "tạp chí",
    example: "我买了一本时尚杂志。",
    pinyinExample: "Wǒ mǎile yī běn shíshàng zázhì.",
    exampleMeaning: "Tôi mua một cuốn tạp trí thời trang."
  },
  {
    id: 873,
    word: "早已",
    pinyin: "zǎoyǐ",
    type: "（副）",
    meaning: "từ lâu, sớm đã",
    example: "他早已学会如何去赞美他人。",
    pinyinExample: "Tā zǎoyǐ xuéhuì rúhé qù zànměi tārén.",
    exampleMeaning: "Từ lâu anh ấy đã học được cách làm sao để khen ngợi người khác."
  },
  {
    id: 874,
    word: "造",
    pinyin: "zào",
    type: "（动）",
    meaning: "tạo ra, đặt ra, xây dựng",
    example: "他们造了一个梯形的花园。",
    pinyinExample: "Tāmen zàole yīgè tīxíng de huāyuán.",
    exampleMeaning: "Bọn họ xây một cái vườn hình bậc thang."
  },
  {
    id: 875,
    word: "造成",
    pinyin: "zàochéng",
    type: "（动）",
    meaning: "tạo thành",
    example: "这些错误造成严重的影响。",
    pinyinExample: "Zhèxiē cuòwù zàochéng yánzhòng de yǐngxiǎng.",
    exampleMeaning: "Những sai lầm này tạo nên ảnh hưởng nghiêm trọng."
  },
  {
    id: 876,
    word: "责任",
    pinyin: "zérèn",
    type: "（名）",
    meaning: "trách nhiệm",
    example: "我觉得我有责任给你写信表示感 谢。",
    pinyinExample: "Wǒ juédé wǒ yǒu zérèn gěi nǐ xiě xìn biǎoshì gǎnxiè.",
    exampleMeaning: "Tôi cho rằng bản thân có trách nhiệm viết thư cảm ơn bạn."
  },
  {
    id: 877,
    word: "增加",
    pinyin: "zēngjiā",
    type: "（动）",
    meaning: "tăng, tăng lên",
    example: "你应该要求老板增加工资。",
    pinyinExample: "Nǐ yīnggāi yāoqiú lǎobǎn zēngjiā gōngzī.",
    exampleMeaning: "Bạn nên yêu cầu ông chủ tăng lương."
  },
  {
    id: 878,
    word: "增长",
    pinyin: "zēngzhǎng",
    type: "（动）",
    meaning: "tăng trưởng",
    example: "这个地区人口快速增长。",
    pinyinExample: "Zhège dìqū rénkǒu kuàisù zēngzhǎng.",
    exampleMeaning: "Số dân của khu vực này tăng trưởng rất nhanh."
  },
  {
    id: 879,
    word: "展开",
    pinyin: "zhǎnkāi",
    type: "（动）",
    meaning: "triển khai, mở rộng",
    example: "这时我觉得我面前展开一个广阔的世界。",
    pinyinExample: "Zhè shí wǒ juédé wǒ miànqián zhǎnkāi yīgè guǎngkuò de shìjiè.",
    exampleMeaning: "Lúc này trước mắt tôi như mở ra một thế giới rộng mở."
  },
  {
    id: 880,
    word: "张",
    pinyin: "zhāng",
    type: "（量、 动）",
    meaning: "tờ, trang, tâm, bức",
    example: "这张照片是我在中国时照下来的。",
    pinyinExample: "Zhè zhāng zhàopiàn shì wǒ zài zhōngguó shí zhào xiàlái de.",
    exampleMeaning: "Bức ảnh tôi chụp từ hồi ở Trung Quốc."
  },
  {
    id: 881,
    word: "照",
    pinyin: "zhào",
    type: "（介） （动）",
    meaning: "theo, căn cứ theo chụp, quay",
    example: "照你看，这些结果说明什么 呢？这张照片,照得得很好。",
    pinyinExample: "Zhào nǐ kàn, zhèxiē jiéguǒ shuōmíng shénme ne? Zhè zhāng zhàopiàn, zhào dé dé hěn hǎo.",
    exampleMeaning: "Theo bạn, những kết quả này nói lên điêu gì? Bức ảnh này chụp rất đẹp."
  },
  {
    id: 882,
    word: "者",
    pinyin: "zhě",
    type: "（后 缀）",
    meaning: "người",
    example: "他是我们公司的领导者。",
    pinyinExample: "Tā shì wǒmen gōngsī de lǐngdǎo zhě.",
    exampleMeaning: "Anh ấy là lãnh đạo của công ty tôi."
  },
  {
    id: 883,
    word: "真实",
    pinyin: "zhēnshí",
    type: "（形）",
    meaning: "chân thực",
    example: "这个故事没有一点真实性。",
    pinyinExample: "Zhège gùshì méiyǒu yīdiǎn zhēnshí xìng.",
    exampleMeaning: "Câu chuyện này không có chút chân thực nào cả."
  },
  {
    id: 884,
    word: "争",
    pinyin: "zhēng",
    type: "（动）",
    meaning: "tranh giành",
    example: "他在争球时受了伤。",
    pinyinExample: "Tā zài zhēng qiú shí shòule shāng.",
    exampleMeaning: "Anh ấy bị thương trong lúc tranh bóng."
  },
  {
    id: 885,
    word: "争取",
    pinyin: "zhēngqǔ",
    type: "（动）",
    meaning: "tranh thủ",
    example: "他们没有认识到我们正在争取时间吗？",
    pinyinExample: "Tāmen méiyǒu rènshí dào wǒmen zhèngzài zhēngqǔ shíjiān ma?",
    exampleMeaning: "Bọn họ không thấy chúng ta đang tranh thủ thời gian sao?"
  },
  {
    id: 886,
    word: "整",
    pinyin: "zhěng",
    type: "（动、形）",
    meaning: "sửa chữa, trọn, cả, tròn",
    example: "谁知道他整天在忙什么。",
    pinyinExample: "Shéi zhīdào tā zhěng tiān zài máng shénme.",
    exampleMeaning: "Ai biết được anh ấy bận rộn cả ngày làm cái gì."
  },
  {
    id: 887,
    word: "整个",
    pinyin: "zhěng gè",
    type: "（形）",
    meaning: "toàn bộ, tất cả",
    example: "整个公司都努力工作，同事们互相帮助。",
    pinyinExample: "Zhěnggè gōngsī dōu nǔlì gōngzuò, tóngshìmen hùxiāng bāngzhù.",
    exampleMeaning: "Cả công ty đều nổ lực làm việc, đồng nghiệp đều giúp đỡ lẫn nhau."
  },
  {
    id: 888,
    word: "整理",
    pinyin: "zhěnglǐ",
    type: "（动）",
    meaning: "thu dọn, thu xếp",
    example: "我把文件整理好了，明天开会。",
    pinyinExample: "Wǒ bǎ wénjiàn zhěnglǐ hǎole, míngtiān kāihuì.",
    exampleMeaning: "Tôi đã thu xếp xong giấy tờ rồi, ngày mai sẽ mở cuộc"
  },
  {
    id: 889,
    word: "整齐",
    pinyin: "Zhěngqí",
    type: "（形）",
    meaning: "ngăn nắp, trật tự",
    example: "所有的东西都安排得整齐。",
    pinyinExample: "Suǒyǒu de dōngxī dū ānpái dé zhěngqí.",
    exampleMeaning: "Tất cả đồ vật đều đã sắp xếp ngăn nắp rồi."
  },
  {
    id: 890,
    word: "整体",
    pinyin: "zhěngtǐ",
    type: "（名）",
    meaning: "tổng thể, toàn thể",
    example: "我们班是一个整体。",
    pinyinExample: "Wǒmen bān shì yīgè zhěngtǐ.",
    exampleMeaning: "Lớp chúng tôi là một tập thể."
  },
  {
    id: 891,
    word: "整天",
    pinyin: "zhěng tiān",
    type: "（名）",
    meaning: "cả ngày",
    example: "我整天都在家里，没有出去。",
    pinyinExample: "Wǒ zhěng tiān dū zài jiālǐ, méiyǒu chūqù.",
    exampleMeaning: "Cả ngày tôi đêu ở nhà, không đi đâu cả."
  },
  {
    id: 892,
    word: "整整",
    pinyin: "zhěngzhěn g",
    type: "（副）",
    meaning: "tròn, trọn, suốt",
    example: "我来中国整整一年了。",
    pinyinExample: "Wǒ lái zhōngguó zhěngzhěng yī niánle.",
    exampleMeaning: "Tôi đến Trung Quốc đã tròn một năm rồi."
  },
  {
    id: 893,
    word: "正",
    pinyin: "zhèng",
    type: "（形）",
    meaning: "đang",
    example: "她正在在房间里做作业。",
    pinyinExample: "Tā zhèngzài zài fángjiān lǐ zuò zuo yè.",
    exampleMeaning: "Cô ấy đang ở trong phòng làm bài tập."
  },
  {
    id: 894,
    word: "正式",
    pinyin: "zhèngshì",
    type: "（形）",
    meaning: "chính thức",
    example: "这是他第一次参加正式比 赛。",
    pinyinExample: "Zhè shì tā dì yī cì cānjiā zhèngshì bǐsài.",
    exampleMeaning: "Đây là lần đầu tiên anh ấy tham gia một cuộc thi chính thức."
  },
  {
    id: 895,
    word: "证",
    pinyin: "zhèng",
    type: "（名）",
    meaning: "chứng nhận",
    example: "我拿到了汉语六级证书。",
    pinyinExample: "Wǒ ná dàole hànyǔ liù jí zhèngshū.",
    exampleMeaning: "Tôi đã lấy được giấy chứng nhận tiếng Trung cấp 6."
  },
  {
    id: 896,
    word: "证件",
    pinyin: "zhèngjiàn",
    type: "（名）",
    meaning: "Giấy chứng nhận",
    example: "你有没有带任何身份证件？",
    pinyinExample: "Nǐ yǒu méiyǒu dài rènhé shēnfèn zhèngjiàn?",
    exampleMeaning: "Bạn có mang theo giấy tờ tùy thân nào không?"
  },
  {
    id: 897,
    word: "证据",
    pinyin: "zhèngjù",
    type: "（名）",
    meaning: "chứng cứ, bằng chứng",
    example: "我们没有证据证明这件事是他做的。",
    pinyinExample: "Wǒmen méiyǒu zhèngjù zhèngmíng zhè jiàn shì shì tā zuò de.",
    exampleMeaning: "Chúng ta không có chứng cứ chứng minh anh ta làm chuyện này."
  },
  {
    id: 898,
    word: "证明",
    pinyin: "zhèngmíng",
    type: "（名、 动）",
    meaning: "chứng minh",
    example: "你做这件事是想证明什么？",
    pinyinExample: "Nǐ zuò zhè jiàn shì shì xiǎng zhèngmíng shénme?",
    exampleMeaning: "Bạn làm chuyện này là muốn chứng minh cái gỉ?"
  },
  {
    id: 899,
    word: "支",
    pinyin: "zhī",
    type: "（量）",
    meaning: "chiếc",
    example: "你有没有笔，借给我一支？",
    pinyinExample: "Nǐ yǒu méiyǒu bǐ, jiè gěi wǒ yī zhī?",
    exampleMeaning: "Bạn có bút không cho tôi mượn một chiếc?"
  },
  {
    id: 900,
    word: "支持",
    pinyin: "zhīchí",
    type: "（动）",
    meaning: "giúp đỡ, ủng hộ, ra sức",
    example: "他停止了对我们运动的支持。",
    pinyinExample: "Tā tíngzhǐle duì wǒmen yùndòng de zhīchí.",
    exampleMeaning: "Anh ấy ngừng ủng hộ phong trào của chúng ta."
  },
  {
    id: 901,
    word: "支付",
    pinyin: "zhīfù",
    type: "（动）",
    meaning: "chi trả, thanh toán",
    example: "你选择用什么支付方式？",
    pinyinExample: "Nǐ xuǎnzé yòng shénme zhīfù fāngshì?",
    exampleMeaning: "Bạn muốn thanh toán bằng phương thức nào?"
  },
  {
    id: 902,
    word: "只",
    pinyin: "zhǐ",
    type: "（量）",
    meaning: "con, cái, chiếc",
    example: "我们生来就有两只耳朵，一左 ，一右。",
    pinyinExample: "Wǒmen shēnglái jiù yǒu liǎng zhī ěrduǒ, yī zuǒ, yī yòu.",
    exampleMeaning: "Chúng ta sinh ra có hai cái tai, một trái một phải."
  },
  {
    id: 903,
    word: "直",
    pinyin: "zhí",
    type: "（形、动、副）",
    meaning: "thẳng, một mạch",
    example: "我不知道为什么他看着我直笑。",
    pinyinExample: "Wǒ bù zhīdào wèishéme tā kànzhe wǒ zhí xiào.",
    exampleMeaning: "Tôi không biết tại sao anh ấy lại nhìn thẳng tôi rồi cười."
  },
  {
    id: 904,
    word: "直播",
    pinyin: "zhíbò",
    type: "（动）",
    meaning: "phát sóng trực tiếp",
    example: "我们上午11:30 进行现场 直播。",
    pinyinExample: "Wǒmen shàngwǔ 11:30 Jìnxíng xiànchǎng zhíbò.",
    exampleMeaning: "1l:30 sáng chúng tôi băt đầu phát sóng trực tiếp."
  },
  {
    id: 905,
    word: "直到",
    pinyin: "zhídào",
    type: "（动）",
    meaning: "mãi đến, đến tận",
    example: "这事直到今天我才知道。",
    pinyinExample: "Zhè shì zhídào jīntiān wǒ cái zhīdào.",
    exampleMeaning: "Việc này đên tận hôm nay tôi mới biêt."
  },
  {
    id: 906,
    word: "ã",
    pinyin: "ã",
    type: "（动）",
    meaning: "trị giá",
    example: "这本书值五十块钱。",
    pinyinExample: "Zhè běn shū zhí wǔshí kuài qián.",
    exampleMeaning: "Cuôn sách này có giá 50 tệ."
  },
  {
    id: 907,
    word: "值得",
    pinyin: "zhídé",
    type: "（动）",
    meaning: "đáng, nên, có giá trị",
    example: "这是一个值得认真考虑的问题。",
    pinyinExample: "Zhè shì yīgè zhídé rènzhēn kǎolǜ de wèntí.",
    exampleMeaning: "Đây là một vấn đề xứng đáng được thảo luận."
  },
  {
    id: 908,
    word: "职工",
    pinyin: "zhígōng",
    type: "（名）",
    meaning: "công nhân viên chức",
    example: "这家公司共有两百名职工。",
    pinyinExample: "Zhè jiā gōngsī gòngyǒu liǎng bǎimíng zhígōng.",
    exampleMeaning: "Công ty này có tổng cộng hai trăm công nhân viên."
  },
  {
    id: 909,
    word: "职业",
    pinyin: "zhíyè",
    type: "（名）",
    meaning: "nghề nghiệp",
    example: "他们两人的职业都是医生。",
    pinyinExample: "Tāmen liǎng rén de zhíyè dōu shì yīshēng.",
    exampleMeaning: "Nghề nghiệp của cả hai người họ đều là bác sĩ."
  },
  {
    id: 910,
    word: "只好",
    pinyin: "Zhǐhǎo",
    type: "（副）",
    meaning: "đành phải, buộc phải",
    example: "我等了半天他还没回来，只好先走了。",
    pinyinExample: "Wǒ děngle bàntiān tā hái méi huílái, zhǐhǎo xiān zǒule.",
    exampleMeaning: "Tôi đợi cả nửa ngày mà anh ta vẫn chưa về, tôi chỉ đành đi trước."
  },
  {
    id: 911,
    word: "只是",
    pinyin: "zhǐshì",
    type: "（连、副）",
    meaning: "chỉ là, chẳng qua là",
    example: "那件衣服很漂亮，只是价格太贵了。只是笑了一下，什么话也不说。",
    pinyinExample: "Nà jiàn yīfú hěn piàoliang, zhǐshì jiàgé tài guìle. Zhǐshì xiàole yīxià, shénme huà yě bù shuō.",
    exampleMeaning: "Bộ quần áo này đẹp quá, chẳng qua giá có hơi cao. Tôi chẳng qua mới cười một lát chứ chưa nói một lời nào hết."
  },
  {
    id: 912,
    word: "只有",
    pinyin: "zhǐyǒu",
    type: "（连、副）",
    meaning: "chỉ có",
    example: "只有我们互相帮助，才能把事情办好。他们两人都只有20 岁。",
    pinyinExample: "Zhǐyǒu wǒmen hùxiāng bāngzhù, cáinéng bǎ shìqíng bàn hǎo. Tāmen liǎng rén dōu zhǐyǒu 20 suì.",
    exampleMeaning: "Chỉ khi chúng ta giúp đỡ lẫn nhau thì công việc mới hoàn thành tốt. Cả hai người đều mới có 20 tuổi."
  },
  {
    id: 913,
    word: "指",
    pinyin: "zhǐ",
    type: "（动）",
    meaning: "chỉ, trỏ",
    example: "他指出每个人的错误。",
    pinyinExample: "Tā zhǐchū měi gèrén de cuòwù.",
    exampleMeaning: "Anh ấy chỉ ra lỗi sai của từng người."
  },
  {
    id: 914,
    word: "指出",
    pinyin: "zhǐchū",
    type: "（动）",
    meaning: "chỉ ra",
    example: "我的老师指出了我的错误。",
    pinyinExample: "Wǒ de lǎoshī zhǐchūle wǒ de cuòwù.",
    exampleMeaning: "Thây giáo chỉ ra lỗi sai của tôi."
  },
  {
    id: 915,
    word: "指导",
    pinyin: "zhǐdǎo",
    type: "（动）",
    meaning: "hướng dẫn, chỉ đạo",
    example: "他是我大学时的指导教师。",
    pinyinExample: "Tā shì wǒ dàxué shí de zhǐdǎo jiàoshī.",
    exampleMeaning: "Ông ây là thầy giáo hướng dấn thời đại học của tôi."
  },
  {
    id: 916,
    word: "至今",
    pinyin: "zhìjīn",
    type: "（副）",
    meaning: "đến nay, đến bây giờ",
    example: "他回家以后，至今还没回来。",
    pinyinExample: "Tā huí jiā yǐhòu, zhìjīn hái méi huílái.",
    exampleMeaning: "Từ khi anh ấy về quê đến nay vẫn chưa thấy quay trở lại."
  },
  {
    id: 917,
    word: "至少",
    pinyin: "zhìshǎo",
    type: "（副）",
    meaning: "chí ít, ít nhất",
    example: "从这儿走到学校，至少要半个小时。",
    pinyinExample: "Cóng zhè’er zǒu dào xuéxiào, zhìshǎo yào bàn gè xiǎoshí.",
    exampleMeaning: "Đi từ đây đến trường học tối thiểu cũng phải mất nửa tiếng đồng hồ."
  },
  {
    id: 918,
    word: "志愿",
    pinyin: "zhìyuàn",
    type: "（名）",
    meaning: "nguyện vọng",
    example: "他的志愿是当个教师。",
    pinyinExample: "Tā de zhìyuàn shì dāng gè jiàoshī.",
    exampleMeaning: "Nguyện vọng của anh ấy là trở thành một nhà giáo."
  },
  {
    id: 919,
    word: "志愿者",
    pinyin: "zhìyuàn zhě",
    type: "（名）",
    meaning: "tình nguyện viên",
    example: "他们都是这次活动的志愿者。",
    pinyinExample: "Tāmen dōu shì zhè cì huódòng de zhìyuàn zhě.",
    exampleMeaning: "Họ đều là tình nguyện viên của hoạt động lần này."
  },
  {
    id: 920,
    word: "制定",
    pinyin: "zhìdìng",
    type: "（动）",
    meaning: "lập ra, đặt ra",
    example: "你应该制定学习计划。",
    pinyinExample: "Nǐ yīnggāi zhìdìng xuéxí jìhuà.",
    exampleMeaning: "Bạn lên lập kế hoạch học tập."
  },
  {
    id: 921,
    word: "制度",
    pinyin: "zhìdù",
    type: "（名）",
    meaning: "chê độ, quy chế",
    example: "实际上，这个制度不太合理。",
    pinyinExample: "Shíjì shang, zhège zhìdù bù tài hélǐ.",
    exampleMeaning: "Trên thực tế thì chế độ này không phù hợp nữa."
  },
  {
    id: 922,
    word: "制造",
    pinyin: "zhìzào",
    type: "（动）",
    meaning: "chế tạo, sản xuất, làm ra",
    example: "这些是在哪里制造的？",
    pinyinExample: "Zhèxiē shì zài nǎlǐ zhìzào de?",
    exampleMeaning: "Những thứ này sản xuất ở đâu vậy?"
  },
  {
    id: 923,
    word: "制作",
    pinyin: "zhìzuò",
    type: "（动）",
    meaning: "chế ra, làm ra",
    example: "这家工厂主要制作家具。",
    pinyinExample: "Zhè jiā gōngchǎng zhǔyào zhìzuò jiājù.",
    exampleMeaning: "Nhà máy này chủ yếu chế tạo đồ gia dụng."
  },
  {
    id: 924,
    word: "中部",
    pinyin: "zhōngbù",
    type: "（名）",
    meaning: "Trung Bộ, miền Trung",
    example: "我在越南中部生活。",
    pinyinExample: "Wǒ zài yuènán zhōngbù shēnghuó.",
    exampleMeaning: "Tôi sống ở miền Trung Việt Nam."
  },
  {
    id: 925,
    word: "中华民",
    pinyin: "zhōnghu á mín",
    type: "（名）",
    meaning: "dân tộc Trung Hoa",
    example: "中华民族是由五十六个民族组成的",
    pinyinExample: "Zhōnghuá mínzú shì yóu wǔshíliù gè mínzú zǔchéng de",
    exampleMeaning: "Dân tộc Trung Hoa gồm 56 dân tộc hợp thành."
  },
  {
    id: 926,
    word: "终于",
    pinyin: "zhōngyú",
    type: "（副）",
    meaning: "Cuối cùng",
    example: "他多次想说，但终于没说出口。",
    pinyinExample: "tā duō cì xiǎng shuō, dàn zhōngyú méi shuō chūkǒu.",
    exampleMeaning: "Anh ấy nhiều lần muốn nói, nhưng cuối cùng vẫn không nói ra được."
  },
  {
    id: 927,
    word: "钟",
    pinyin: "zhōng",
    type: "（名）",
    meaning: "Đồng hồ",
    example: "那个钟快了一个小时。",
    pinyinExample: "Nàgè zhōng kuàile yīgè xiǎoshí.",
    exampleMeaning: "Đồng hồ kia chạy nhanh hơn 1 tiếng."
  },
  {
    id: 928,
    word: "种",
    pinyin: "Zhǒng",
    type: "（量）",
    meaning: "loại, kiểu",
    example: "苹果是一种很好吃的水果。",
    pinyinExample: "Píngguǒ shì yī zhǒng hěn hào chī de shuǐguǒ.",
    exampleMeaning: "Táo là một loại trái cây rất ngon."
  },
  {
    id: 929,
    word: "种子",
    pinyin: "zhǒngzǐ",
    type: "（名）",
    meaning: "Giống, hạt giống",
    example: "这些是什么花儿的种子？",
    pinyinExample: "Zhèxiē shì shénme huā er de zhǒngzǐ?",
    exampleMeaning: "Những hạt này là hạt giống của hoa gì?"
  },
  {
    id: 930,
    word: "重大",
    pinyin: "zhòngdà",
    type: "（形）",
    meaning: "trọng đại, quan trọng",
    example: "重大问题必须找我商量。",
    pinyinExample: "Zhòngdà wèntí bìxū zhǎo wǒ shāngliáng.",
    exampleMeaning: "Những việc quan trọng nhất định phải tìm đến tôi để bàn bac."
  },
  {
    id: 931,
    word: "周围",
    pinyin: "zhōuwéi",
    type: "（名）",
    meaning: "xung quanh",
    example: "我们学校周围的环境很安 静。",
    pinyinExample: "Wǒmen xuéxiào zhōuwéi de huánjìng hěn ānjìng.",
    exampleMeaning: "Xung quanh trường học của chúng tôi rất yên tĩnh."
  },
  {
    id: 932,
    word: "猪",
    pinyin: "zhū",
    type: "（名）",
    meaning: "heo,lợn",
    example: "你知道猪吃什么吗？",
    pinyinExample: "Nǐ zhīdào zhū chī shénme ma?",
    exampleMeaning: "Bạn biết heo ăn cái gì không?"
  },
  {
    id: 933,
    word: "主持",
    pinyin: "zhǔchí",
    type: "（动）",
    meaning: "chủ trì",
    example: "她主持我们所有的会议。",
    pinyinExample: "Tā zhǔchí wǒmen suǒyǒu de huìyì.",
    exampleMeaning: "Cô ấy chủ trì tất cả các cuộc họp của chúng tôi."
  },
  {
    id: 934,
    word: "主动",
    pinyin: "zhǔdòng",
    type: "（形）",
    meaning: "chủ động",
    example: "没人让他走，是他主动走 的。",
    pinyinExample: "Méi rén ràng tā zǒu, shì tā zhǔdòng zǒu de.",
    exampleMeaning: "Đâu có ai bảo cô ấy đi, chính cô ây chủ động đi đây."
  },
  {
    id: 935,
    word: "主任",
    pinyin: "zhǔrèn",
    type: "（名）",
    meaning: "chủ nhiệm",
    example: "办公室主任负责处理日常工作。",
    pinyinExample: "Bàngōngshì zhǔrèn fùzé chǔlǐ rìcháng gōngzuò.",
    exampleMeaning: "Chủ nhiệm văn phòng có trách nhiệm xử lí các công việc ngay"
  },
  {
    id: 936,
    word: "主意",
    pinyin: "zhǔyì",
    type: "（名）",
    meaning: "chủ kiến, j kiến",
    example: "什么都不能让我改变主意。",
    pinyinExample: "Shénme dōu bùnéng ràng wǒ gǎibiàn zhǔyì.",
    exampleMeaning: "Bất cứ điều gì cũng không thê làm tôi thay đổi j kiến của mình."
  },
  {
    id: 937,
    word: "主张",
    pinyin: "zhǔzhāng",
    type: "（动、名）",
    meaning: "chủ trương,",
    example: "每个主张都有理由。",
    pinyinExample: "Měi gè zhǔzhāng dōu yǒu lǐyóu.",
    exampleMeaning: "Mỗi một chủ trương đều có lí do riêng của nó."
  },
  {
    id: 938,
    word: "注意",
    pinyin: "zhùyì",
    type: "（动）",
    meaning: "chú j",
    example: "老师经常教我们开车要注意安全。",
    pinyinExample: "Lǎoshī jīngcháng jiào wǒmen kāichē yào zhùyì ānquán.",
    exampleMeaning: "Thầy cô luôn luôn dạy chúng tôi lái xe phải chú j an toàn."
  },
  {
    id: 939,
    word: "祝",
    pinyin: "zhù",
    type: "（动）",
    meaning: "chúc",
    example: "祝你新年身体健康！",
    pinyinExample: "Zhù nǐ xīnnián shēntǐ jiànkāng!",
    exampleMeaning: "Chúc ông sang năm mới sức khỏe dôi dào!"
  },
  {
    id: 940,
    word: "抓",
    pinyin: "zhuā",
    type: "（动）",
    meaning: "cầm,nắm, bắt",
    example: "我也经常在那里抓 鱼。",
    pinyinExample: "Wǒ yě jīngcháng zài nàlǐ zhuā yú.",
    exampleMeaning: "Tôi thường bắt cá ở chỗ này."
  },
  {
    id: 941,
    word: "抓住",
    pinyin: "zhuā zhù",
    type: "（动）",
    meaning: "nắm bắt",
    example: "你要抓住这次去中国留学的机会。",
    pinyinExample: "Nǐ yào zhuā zhù zhè cì qù zhōngguó liúxué de jīhuì.",
    exampleMeaning: "Tôi muốn nắm lấy cơ hội sang Trung Quốc du học lần này."
  },
  {
    id: 942,
    word: "专家",
    pinyin: "zhuānjiā",
    type: "（名）",
    meaning: "chuyên gia",
    example: "我们需要听专家的意见。",
    pinyinExample: "Wǒmen xūyào tīng zhuānjiā de yìjiàn.",
    exampleMeaning: "Chúng ta nên nghe theo j kiên của các chuyên gia."
  },
  {
    id: 943,
    word: "专门",
    pinyin: "zhuānmén",
    type: "（副）",
    meaning: "chuyên môn",
    example: "这是一家专门经营白酒的商店。",
    pinyinExample: "Zhè shì yījiā zhuānmén jīngyíng báijiǔ de shāngdiàn.",
    exampleMeaning: "Đây là một cửa tiệm chuyên kinh doanh rượu trắng."
  },
  {
    id: 944,
    word: "专题",
    pinyin: "zhuāntí",
    type: "（名）",
    meaning: "chuyên đề",
    example: "这个专题刚开始讨 论。",
    pinyinExample: "Zhège zhuāntí gāng kāishǐ tǎolùn.",
    exampleMeaning: "Chuyên đề này vừa mới bắt đầu thảo luận thôi."
  },
  {
    id: 945,
    word: "专业",
    pinyin: "zhuānyè",
    type: "（名）",
    meaning: "chuyên ngành",
    example: "我现在学习英语专 业。",
    pinyinExample: "Wǒ xiànzài xuéxí yīngyǔ zhuānyè.",
    exampleMeaning: "Hiện tại tôi đang theo học chuyên ngành tiếng Anh."
  },
  {
    id: 946,
    word: "转",
    pinyin: "zhuǎn",
    type: "（动）",
    meaning: "quay, xoay",
    example: "他们看见我们过来，转身就跑。",
    pinyinExample: "Tāmen kànjiàn wǒmen guòlái, zhuǎnshēn jiù pǎo.",
    exampleMeaning: "Bọn họ nhìn thấy chúng tôi lại gần liên quay đầu chạy mất."
  },
  {
    id: 947,
    word: "转变",
    pinyin: "zhuǎnbiàn",
    type: "（动）",
    meaning: "Chuyển biến, thay đôi",
    example: "转变态度能改变你的人生。",
    pinyinExample: "Zhuǎnbiàn tàidù néng gǎibiàn nǐ de rénshēng.",
    exampleMeaning: "Thay đổi thái độ có thể thay đổi cả cuộc đời của bạn."
  },
  {
    id: 948,
    word: "状况",
    pinyin: "zhuàngkuàn g",
    type: "（名）",
    meaning: "tình hình, tình trạng",
    example: "我现在的状况好多了 ，你们放心吧",
    pinyinExample: "Wǒ xiànzài de zhuàngkuàng hǎoduōle, nǐmen fàngxīn ba",
    exampleMeaning: "Tình trạng hiện giờ của tôi tốt hơn nhiều rồi, mọi người cứ yên tâm."
  },
  {
    id: 949,
    word: "状态",
    pinyin: "Zhuàngtà i",
    type: "（名）",
    meaning: "trạng thái, tình trạng",
    example: "我最近的状态不太好。",
    pinyinExample: "Wǒ zuìjìn de zhuàngtài bù tài hǎo.",
    exampleMeaning: "Trạng thái gần đây của tôi không được tốt lắm."
  },
  {
    id: 950,
    word: "追",
    pinyin: "zhuī",
    type: "（动）",
    meaning: "Đuổi, truy tìm",
    example: "他在追那只猫。",
    pinyinExample: "Tā zài zhuī nà zhǐ māo.",
    exampleMeaning: "Anh ấy đang đuổi theo con mèo kia."
  },
  {
    id: 951,
    word: "资格",
    pinyin: "zīgé",
    type: "（名）",
    meaning: "tư cách",
    example: "他们没有资格继续留在美国了。",
    pinyinExample: "Tāmen méiyǒu zīgé jìxù liú zài měiguóle.",
    exampleMeaning: "Họ không còn tư cách tiếp tục ở lại Mỹ nữa."
  },
  {
    id: 952,
    word: "资金",
    pinyin: "zījīn",
    type: "（名）",
    meaning: "vốn, tiền vốn",
    example: "我们需要面对的是资金问 题。",
    pinyinExample: "Wǒmen xūyào miàn duì de shì zījīn wèntí.",
    exampleMeaning: "Vấn đề chúng ta phải đối mặt bây giờ là tiền vốn."
  },
  {
    id: 953,
    word: "子女",
    pinyin: "zǐnǚ",
    type: "（名）",
    meaning: "con cái, con",
    example: "她总是把子女放在第一位。",
    pinyinExample: "Tā zǒng shì bǎ zǐnǚ fàng zài dì yī wèi.",
    exampleMeaning: "Cô ấy luôn đặt con cái lên vị trí hàng đầu."
  },
  {
    id: 954,
    word: "自从",
    pinyin: "zìcóng",
    type: "（介）",
    meaning: "từ, từ khi, từ lúc",
    example: "自从今天我要努力学习。",
    pinyinExample: "Zìcóng jīntiān wǒ yào nǔlì xuéxí.",
    exampleMeaning: "Từ ngày hôm nay trở đi tôi phải chăm chỉ học tập."
  },
  {
    id: 955,
    word: "自动",
    pinyin: "zìdòng",
    type: "（形、副）",
    meaning: "tự động",
    example: "这些门都是自动开关的。",
    pinyinExample: "Zhèxiē mén dū shì zìdòng kāiguān de.",
    exampleMeaning: "Mây cánh cửa này đêu có thê đóng mở tự động."
  },
  {
    id: 956,
    word: "自觉",
    pinyin: "zìjué",
    type: "（形）",
    meaning: "tự giác",
    example: "我每天都自觉学习英语。",
    pinyinExample: "Wǒ měitiān dū zìjué xuéxí yīngyǔ.",
    exampleMeaning: "Mỗi ngày tôi đều tự giác học tiếng Anh."
  },
  {
    id: 957,
    word: "自然",
    pinyin: "zìrán",
    type: "（名、形、副）",
    meaning: "tự nhiên",
    example: "他演得很自然，给我留下了深刻的印象。",
    pinyinExample: "Tā yǎn dé hěn zìrán, gěi wǒ liú xiàle shēnkè de yìnxiàng.",
    exampleMeaning: "Anh ấy diễn rất tự nhiên, đã để lại cho tôi ấn tượng rất sâu sắc."
  },
  {
    id: 958,
    word: "自身",
    pinyin: "zìshēn",
    type: "（名）",
    meaning: "tự mình",
    example: "为了您自身的安全 ，请骑慢一点。",
    pinyinExample: "Wèile nín zìshēn de ānquán, qǐng qí màn yīdiǎn.",
    exampleMeaning: "Vì sự an toàn của chính bản thân, xin bạn hãy lái xe chậm thôi."
  },
  {
    id: 959,
    word: "自主",
    pinyin: "zìzhǔ",
    type: "（动）",
    meaning: "tự chủ",
    example: "独立工作意味着她能够自 主。",
    pinyinExample: "Dúlì gōngzuò yìwèizhe tā nénggòu zìzhǔ.",
    exampleMeaning: "Có thể làm việc độc lập nghĩa là cô ây đã có thê tự chủ bản thân."
  },
  {
    id: 960,
    word: "总",
    pinyin: "zǒng",
    type: "（副）",
    meaning: "mãi, cứ",
    example: "你晚上总看电视 吗？",
    pinyinExample: "Nǐ wǎnshàng zǒng kàn diànshì ma?",
    exampleMeaning: "Buổi tôi bạn luôn xem phim à?"
  },
  {
    id: 961,
    word: "总结",
    pinyin: "zǒngjié",
    type: "（名、 动）",
    meaning: "tổng kết",
    example: "我们要总结一下今年的成 绩。",
    pinyinExample: "Wǒmen yào zǒngjié yīxià jīnnián de chéngjī.",
    exampleMeaning: "Chúng ta nên tổng kêt lại thành tích của cả năm nay."
  },
  {
    id: 962,
    word: "总是",
    pinyin: "zǒng shì",
    type: "（副）",
    meaning: "luôn luôn",
    example: "放学后，他总是去图书馆看书。",
    pinyinExample: "Fàngxué hòu, tā zǒng shì qù túshū guǎn kànshū.",
    exampleMeaning: "Sau khi tan học cô ấy luôn luôn ra thư việc đọc sách."
  },
  {
    id: 963,
    word: "足够",
    pinyin: "zúgòu",
    type: "（动）",
    meaning: "đủ, đầy đủ",
    example: "所有人都有足够的食物。",
    pinyinExample: "Suǒyǒu rén dōu yǒu zúgòu de shíwù.",
    exampleMeaning: "Tât cả mọi người đêu có đây đủ đồ ăn."
  },
  {
    id: 964,
    word: "足球",
    pinyin: "zúqiú",
    type: "（名）",
    meaning: "bóng đá",
    example: "踢足球是我的喜 好。",
    pinyinExample: "Tī zúqiú shì wǒ de xǐhào.",
    exampleMeaning: "Đá bóng là sở thích của tôi."
  },
  {
    id: 965,
    word: "组合",
    pinyin: "zǔhé",
    type: "（名 动）",
    meaning: "tổ hợp",
    example: "我们的组合最强。",
    pinyinExample: "Wǒmen de zǔhé zuì qiáng.",
    exampleMeaning: "Tổ hợp của chúng tôi rât mạnh."
  },
  {
    id: 966,
    word: "左右",
    pinyin: "zuǒyòu",
    type: "（名、 动）",
    meaning: "trái phải, xung quanh, khoảng",
    example: "我们希望能在两点钟左右到达。",
    pinyinExample: "Wǒmen xīwàng néng zài liǎng diǎn zhōng zuǒyòu dàodá.",
    exampleMeaning: "Chúng tôi hy vọng có thể đến đó vào khoảng 2 giờ."
  },
  {
    id: 967,
    word: "作品",
    pinyin: "zuòpǐn",
    type: "（名）",
    meaning: "tác phẩm",
    example: "他的作品谁谁都知道。",
    pinyinExample: "Tā de zuòpǐn shéishéi dōu zhīdào.",
    exampleMeaning: "Mọi người ai cũng biết đến tác phẩm của anh ấy."
  },
  {
    id: 968,
    word: "作者",
    pinyin: "zuòzhě",
    type: "（名）",
    meaning: "tác giả",
    example: "这位作者非常有名。",
    pinyinExample: "Zhè wèi zuòzhě fēicháng yǒumíng.",
    exampleMeaning: "Tác giả này vô cùng nổi tiếng."
  },
  {
    id: 969,
    word: "做客",
    pinyin: "zuòkè",
    type: "（动）",
    meaning: "làm khách",
    example: "我请他到我家做客。",
    pinyinExample: "Wǒ qǐng tā dào wǒjiā zuòkè.",
    exampleMeaning: "Tôi mời anh ấy đến nhà tôi làm khách."
  }
];
