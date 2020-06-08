Array.from(temp1.querySelectorAll('tr')).forEach(el => {
    if (el.querySelector('.word')) {

    buff.push({
        word: el.querySelector('.word').innerText,
        phn: el.querySelector('.phn').innerText,
        trans: el.querySelector('.trans').innerText,
    });
    }
})

s.replace(/\n/g,' ').replace(/\d[^,]/g,`$&+`).split(' +')





words1000 = [
	{
		"word": "the",
		"phn": "[ðə:]",
		"trans": "определенный артикль"
	},
	{
		"word": "and",
		"phn": "[ænd]",
		"trans": "и; а, но"
	},
	{
		"word": "a",
		"phn": "[ə]",
		"trans": "неопределенный артикль"
	},
	{
		"word": "to",
		"phn": "[tu:]",
		"trans": "к, в, на, до, для"
	},
	{
		"word": "was",
		"phn": "[wɔz]",
		"trans": "был, была, было;"
	},
	{
		"word": "I",
		"phn": "[ʌi]",
		"trans": "я"
	},
	{
		"word": "is",
		"phn": "[iz]",
		"trans": "3- е л. ед. ч. наст. врем. гл. to be"
	},
	{
		"word": "of",
		"phn": "[ɔv]",
		"trans": "из, от, о, об"
	},
	{
		"word": "that",
		"phn": "[ðæt]",
		"trans": "тот, та, то"
	},
	{
		"word": "you",
		"phn": "[ju:]",
		"trans": "ты, вы"
	},
	{
		"word": "he",
		"phn": "[hi:]",
		"trans": "он"
	},
	{
		"word": "it",
		"phn": "[it]",
		"trans": "он, она, оно; это"
	},
	{
		"word": "in",
		"phn": "[in]",
		"trans": "в"
	},
	{
		"word": "his",
		"phn": "[hiz]",
		"trans": "его"
	},
	{
		"word": "had",
		"phn": "[hæd]",
		"trans": "имел, получал"
	},
	{
		"word": "do",
		"phn": "[du:]",
		"trans": "делать"
	},
	{
		"word": "with",
		"phn": "[wið]",
		"trans": "с, вместе с"
	},
	{
		"word": "not",
		"phn": "[nɔt]",
		"trans": "не, нет; ни"
	},
	{
		"word": "her",
		"phn": "[hз:]",
		"trans": "её"
	},
	{
		"word": "for",
		"phn": "[fɔ:]",
		"trans": "в течение, на, для"
	},
	{
		"word": "on",
		"phn": "[ɔn]",
		"trans": "на"
	},
	{
		"word": "at",
		"phn": "[æt]",
		"trans": "около, у; в, на"
	},
	{
		"word": "but",
		"phn": "[bʌt]",
		"trans": "только, лишь, кроме, но, а"
	},
	{
		"word": "she",
		"phn": "[ʃi:]",
		"trans": "она"
	},
	{
		"word": "him",
		"phn": "[him]",
		"trans": "его"
	},
	{
		"word": "as",
		"phn": "[æz]",
		"trans": "как, когда"
	},
	{
		"word": "are",
		"phn": "[a:(r)]",
		"trans": "мн. ч. наст. врем. гл. to be"
	},
	{
		"word": "said",
		"phn": "[sed]",
		"trans": "говорил, сказал"
	},
	{
		"word": "they",
		"phn": "[ðei]",
		"trans": "они"
	},
	{
		"word": "we",
		"phn": "[wi:]",
		"trans": "мы"
	},
	{
		"word": "all",
		"phn": "[ɔ:l]",
		"trans": "все, вся, всё"
	},
	{
		"word": "this",
		"phn": "[ðis]",
		"trans": "этот, эта, это"
	},
	{
		"word": "have",
		"phn": "[hæv]",
		"trans": "иметь; получать; быть должным"
	},
	{
		"word": "there",
		"phn": "[ðɛə]",
		"trans": "там, туда, здесь"
	},
	{
		"word": "what",
		"phn": "[(h)wɔt]",
		"trans": "что"
	},
	{
		"word": "out",
		"phn": "[aut]",
		"trans": "вне, снаружи; за"
	},
	{
		"word": "up",
		"phn": "[ʌp]",
		"trans": "наверх(у), выше; вверх по, вдоль по"
	},
	{
		"word": "one",
		"phn": "[wʌn]",
		"trans": "один"
	},
	{
		"word": "from",
		"phn": "[frɔm]",
		"trans": "от, из, с"
	},
	{
		"word": "me",
		"phn": "[mi:]",
		"trans": "мне, меня"
	},
	{
		"word": "go",
		"phn": "[gəu]",
		"trans": "идти, ехать ; уходить"
	},
	{
		"word": "were",
		"phn": "[wз:]",
		"trans": "были"
	},
	{
		"word": "would",
		"phn": "[wud]",
		"trans": "1) вспом. глагол.; 2) модальный глагол"
	},
	{
		"word": "like",
		"phn": "[laik]",
		"trans": "похожий; как, подобно; любить, нравиться"
	},
	{
		"word": "when",
		"phn": "[(h)wen]",
		"trans": "когда"
	},
	{
		"word": "could",
		"phn": "[kud]",
		"trans": "мог, умел"
	},
	{
		"word": "then",
		"phn": "[ðen]",
		"trans": "тогда; затем"
	},
	{
		"word": "be",
		"phn": "[bi:]",
		"trans": "быть, существовать; находиться"
	},
	{
		"word": "them",
		"phn": "[ðem]",
		"trans": "их , им"
	},
	{
		"word": "did",
		"phn": "[did]",
		"trans": "делал, выполнял"
	},
	{
		"word": "been",
		"phn": "[bi:n]",
		"trans": "был, была, было"
	},
	{
		"word": "now",
		"phn": "[nau]",
		"trans": "теперь, сейчас"
	},
	{
		"word": "look",
		"phn": "[luk]",
		"trans": "взгляд, смотреть"
	},
	{
		"word": "back",
		"phn": "[bæk]",
		"trans": "спина, задний"
	},
	{
		"word": "my",
		"phn": "[mai]",
		"trans": "мой"
	},
	{
		"word": "no",
		"phn": "[nəu]",
		"trans": "нет, не"
	},
	{
		"word": "your",
		"phn": "[jɔ:]",
		"trans": "твой, ваш"
	},
	{
		"word": "which",
		"phn": "[(h)witʃ]",
		"trans": "который; что"
	},
	{
		"word": "about",
		"phn": "[ə’baut]",
		"trans": "кругом, вокруг; около; о, об, относительно"
	},
	{
		"word": "time",
		"phn": "[taim]",
		"trans": "время; раз"
	},
	{
		"word": "down",
		"phn": "[daun]",
		"trans": "вниз, внизу; вниз по, вдоль по"
	},
	{
		"word": "into",
		"phn": "[‘intu:]",
		"trans": "в"
	},
	{
		"word": "who",
		"phn": "[hu:]",
		"trans": "кто; который"
	},
	{
		"word": "can",
		"phn": "[kæn]",
		"trans": "мочь; уметь"
	},
	{
		"word": "know",
		"phn": "[nəu]",
		"trans": "знать"
	},
	{
		"word": "if",
		"phn": "[if]",
		"trans": "если"
	},
	{
		"word": "just",
		"phn": "[dʒʌst]",
		"trans": "только что"
	},
	{
		"word": "their",
		"phn": "[ðɛə]",
		"trans": "их"
	},
	{
		"word": "get",
		"phn": "[get]",
		"trans": "получать; брать; приобретать"
	},
	{
		"word": "over",
		"phn": "[‘əuvə]",
		"trans": "над; свыше"
	},
	{
		"word": "more",
		"phn": "[mɔ:]",
		"trans": "больше, более"
	},
	{
		"word": "some",
		"phn": "[sʌm]",
		"trans": "несколько"
	},
	{
		"word": "man",
		"phn": "[mæn]",
		"trans": "человек, мужчина"
	},
	{
		"word": "come",
		"phn": "[kʌm]",
		"trans": "приходить, приезжать; случаться"
	},
	{
		"word": "an",
		"phn": "[æn]",
		"trans": "неопределённый артикль"
	},
	{
		"word": "so",
		"phn": "[səu]",
		"trans": "так; тоже, также"
	},
	{
		"word": "other",
		"phn": "[‘ʌðə]",
		"trans": "другой, иной, еще"
	},
	{
		"word": "little",
		"phn": "[‘litl]",
		"trans": "маленький"
	},
	{
		"word": "see",
		"phn": "[si:]",
		"trans": "видеть"
	},
	{
		"word": "here",
		"phn": "[hiə]",
		"trans": "здесь, тут"
	},
	{
		"word": "thing",
		"phn": "[θiŋ]",
		"trans": "вещь, предмет"
	},
	{
		"word": "hand",
		"phn": "[hænd]",
		"trans": "рука"
	},
	{
		"word": "by",
		"phn": "[bai]",
		"trans": "у , около"
	},
	{
		"word": "will",
		"phn": "[wil]",
		"trans": "1) вспом. гл. будущ. врем.; 2) модальный глагол"
	},
	{
		"word": "way",
		"phn": "[wei]",
		"trans": "путь, дорога"
	},
	{
		"word": "again",
		"phn": "[ə’gein]",
		"trans": "опять, снова"
	},
	{
		"word": "right",
		"phn": "[rait]",
		"trans": "правый; верно"
	},
	{
		"word": "only",
		"phn": "[‘əunli]",
		"trans": "только"
	},
	{
		"word": "am",
		"phn": "[æm]",
		"trans": "1-е л. ед.ч. наст. врем. гл. to be"
	},
	{
		"word": "how",
		"phn": "[hau]",
		"trans": "как"
	},
	{
		"word": "think",
		"phn": "[θiŋk]",
		"trans": "думать; считать, полагать"
	},
	{
		"word": "or",
		"phn": "[ɔ:]",
		"trans": "или"
	},
	{
		"word": "got",
		"phn": "[gɔt]",
		"trans": "получил"
	},
	{
		"word": "good",
		"phn": "[gud]",
		"trans": "хороший; добро"
	},
	{
		"word": "eye",
		"phn": "[ai]",
		"trans": "глаз; взгляд"
	},
	{
		"word": "well",
		"phn": "[wel]",
		"trans": "хорошо"
	},
	{
		"word": "thought",
		"phn": "[θɔ:t]",
		"trans": "думал, мысль"
	},
	{
		"word": "day",
		"phn": "[dei]",
		"trans": "день; сутки"
	},
	{
		"word": "two",
		"phn": "[tu:]",
		"trans": "два"
	},
	{
		"word": "than",
		"phn": "[ðæn]",
		"trans": "чем, нежели"
	},
	{
		"word": "before",
		"phn": "[bi’fɔ:]",
		"trans": "перед; раньше"
	},
	{
		"word": "where",
		"phn": "[(h)wɛə]",
		"trans": "где; куда"
	},
	{
		"word": "very",
		"phn": "[‘veri]",
		"trans": "очень"
	},
	{
		"word": "say",
		"phn": "[sei]",
		"trans": "говорить, сказать"
	},
	{
		"word": "came",
		"phn": "[keim]",
		"trans": "приходил, приезжал"
	},
	{
		"word": "any",
		"phn": "[‘eni]",
		"trans": "какой-нибудь"
	},
	{
		"word": "old",
		"phn": "[əuld]",
		"trans": "старый"
	},
	{
		"word": "still",
		"phn": "[stil]",
		"trans": "тихий; все еще"
	},
	{
		"word": "after",
		"phn": "[‘a:ftə]",
		"trans": "после, через; потом"
	},
	{
		"word": "off",
		"phn": "[ɔv]",
		"trans": "с , от"
	},
	{
		"word": "has",
		"phn": "[hæz]",
		"trans": "имел, имела"
	},
	{
		"word": "never",
		"phn": "[‘nevə]",
		"trans": "никогда"
	},
	{
		"word": "going",
		"phn": "[‘gəiŋ]",
		"trans": "живущий, существующий, ходьба"
	},
	{
		"word": "even",
		"phn": "[‘i:v(ə)n]",
		"trans": "даже; ровно"
	},
	{
		"word": "much",
		"phn": "[mʌtʃ]",
		"trans": "много"
	},
	{
		"word": "went",
		"phn": "[went]",
		"trans": "шёл, ехал"
	},
	{
		"word": "too",
		"phn": "[tu:]",
		"trans": "также; слишком"
	},
	{
		"word": "away",
		"phn": "[ə’wei]",
		"trans": "далеко; прочь"
	},
	{
		"word": "something",
		"phn": "[‘sʌmθiŋ]",
		"trans": "что-то, что-нибудь; примерно"
	},
	{
		"word": "first",
		"phn": "[fз:st]",
		"trans": "первый; сначала"
	},
	{
		"word": "make",
		"phn": "[meik]",
		"trans": "делать, производить; совершать"
	},
	{
		"word": "head",
		"phn": "[hed]",
		"trans": "голова"
	},
	{
		"word": "want",
		"phn": "[wɔnt]",
		"trans": "хотеть"
	},
	{
		"word": "turn",
		"phn": "[tз:n]",
		"trans": "поворачивать(ся)"
	},
	{
		"word": "face",
		"phn": "[feis]",
		"trans": "лицо"
	},
	{
		"word": "made",
		"phn": "[meid]",
		"trans": "сделан, сделанный"
	},
	{
		"word": "seem",
		"phn": "[si:m]",
		"trans": "казаться"
	},
	{
		"word": "call",
		"phn": "[kɔ:l]",
		"trans": "призыв; звать"
	},
	{
		"word": "ask",
		"phn": "[a:sk]",
		"trans": "спрашивать"
	},
	{
		"word": "should",
		"phn": "[ʃud]",
		"trans": "1) вспом. глагол; 2) должен, следует"
	},
	{
		"word": "through",
		"phn": "[θru:]",
		"trans": "через , сквозь"
	},
	{
		"word": "long",
		"phn": "[lɔŋ]",
		"trans": "длинный; долго"
	},
	{
		"word": "let",
		"phn": "[let]",
		"trans": "позволять"
	},
	{
		"word": "take",
		"phn": "[teik]",
		"trans": "брать; доставлять; принимать"
	},
	{
		"word": "saw",
		"phn": "[sɔ:]",
		"trans": "видел, пила"
	},
	{
		"word": "around",
		"phn": "[ə’raund]",
		"trans": "кругом, вокруг; поблизости"
	},
	{
		"word": "our",
		"phn": "[‘auə]",
		"trans": "наш"
	},
	{
		"word": "door",
		"phn": "[dɔ:]",
		"trans": "дверь"
	},
	{
		"word": "last",
		"phn": "[la:st]",
		"trans": "последний"
	},
	{
		"word": "tell",
		"phn": "[tel]",
		"trans": "говорить"
	},
	{
		"word": "might",
		"phn": "[mait]",
		"trans": "мог, мог бы, энергия"
	},
	{
		"word": "own",
		"phn": "[əun]",
		"trans": "свой; владеть"
	},
	{
		"word": "night",
		"phn": "[nait]",
		"trans": "ночь; вечер"
	},
	{
		"word": "year",
		"phn": "[jiə]",
		"trans": "год"
	},
	{
		"word": "must",
		"phn": "[mʌst]",
		"trans": "должен, обязан"
	},
	{
		"word": "because",
		"phn": "[bi:kɔz]",
		"trans": "потому что"
	},
	{
		"word": "voice",
		"phn": "[vɔis]",
		"trans": "голос"
	},
	{
		"word": "such",
		"phn": "[sʌtʃ]",
		"trans": "такой, тот, подобный"
	},
	{
		"word": "room",
		"phn": "[ru:m]",
		"trans": "комната"
	},
	{
		"word": "place",
		"phn": "[pleis]",
		"trans": "место; помещать"
	},
	{
		"word": "those",
		"phn": "[ðəuz]",
		"trans": "те"
	},
	{
		"word": "work",
		"phn": "[wз:k]",
		"trans": "работа; работать"
	},
	{
		"word": "put",
		"phn": "[put]",
		"trans": "положить"
	},
	{
		"word": "bill",
		"phn": "[bil]",
		"trans": "счёт, законопроект, клюв"
	},
	{
		"word": "nothing",
		"phn": "[‘nʌθiŋ]",
		"trans": "ничего"
	},
	{
		"word": "most",
		"phn": "[məust]",
		"trans": "самый большой, наибольший"
	},
	{
		"word": "house",
		"phn": "[haus]",
		"trans": "дом"
	},
	{
		"word": "why",
		"phn": "[(h)wai]",
		"trans": "почему"
	},
	{
		"word": "may",
		"phn": "[mei]",
		"trans": "мочь; май"
	},
	{
		"word": "side",
		"phn": "[said]",
		"trans": "сторона"
	},
	{
		"word": "great",
		"phn": "[greit]",
		"trans": "большой, великий"
	},
	{
		"word": "these",
		"phn": "[ði:z]",
		"trans": "эти"
	},
	{
		"word": "white",
		"phn": "[(h)wait]",
		"trans": "белый"
	},
	{
		"word": "people",
		"phn": "[‘pi:pl]",
		"trans": "люди, нация, народ"
	},
	{
		"word": "upon",
		"phn": "[ə’pɔn]",
		"trans": "на"
	},
	{
		"word": "left",
		"phn": "[left]",
		"trans": "левый, налево, покинул, уехал"
	},
	{
		"word": "open",
		"phn": "[‘əup(ə)n]",
		"trans": "открывать(ся)"
	},
	{
		"word": "himself",
		"phn": "[him’self]",
		"trans": "себя; сам"
	},
	{
		"word": "friend",
		"phn": "[frend]",
		"trans": "друг"
	},
	{
		"word": "felt",
		"phn": "[felt]",
		"trans": "чувствовал, войлок"
	},
	{
		"word": "three",
		"phn": "[θri:]",
		"trans": "три"
	},
	{
		"word": "knew",
		"phn": "[nju:]",
		"trans": "знал"
	},
	{
		"word": "another",
		"phn": "[ə’nʌðə]",
		"trans": "другой"
	},
	{
		"word": "once",
		"phn": "[wʌn(t)s]",
		"trans": "один раз, однажды, когда-то"
	},
	{
		"word": "give",
		"phn": "[giv]",
		"trans": "давать"
	},
	{
		"word": "almost",
		"phn": "[‘ɔ:lməust]",
		"trans": "почти"
	},
	{
		"word": "mind",
		"phn": "[maind]",
		"trans": "разум; мнение"
	},
	{
		"word": "took",
		"phn": "[tuk]",
		"trans": "брал, хватал"
	},
	{
		"word": "light",
		"phn": "[lait]",
		"trans": "свет; освещать(ся)"
	},
	{
		"word": "yes",
		"phn": "[jes]",
		"trans": "да"
	},
	{
		"word": "love",
		"phn": "[lʌv]",
		"trans": "любовь, любить"
	},
	{
		"word": "end",
		"phn": "[end]",
		"trans": "конец; кончать(ся)"
	},
	{
		"word": "boy",
		"phn": "[bɔi]",
		"trans": "мальчик, парень"
	},
	{
		"word": "looking",
		"phn": "[‘lukiŋ]",
		"trans": "смотреть"
	},
	{
		"word": "while",
		"phn": "[(h)wail]",
		"trans": "в то время как"
	},
	{
		"word": "sound",
		"phn": "[saund]",
		"trans": "звук; звучать"
	},
	{
		"word": "moment",
		"phn": "[‘məumənt]",
		"trans": "миг, момент"
	},
	{
		"word": "men",
		"phn": "[men]",
		"trans": "люди, мужчины"
	},
	{
		"word": "ever",
		"phn": "[‘evə]",
		"trans": "когда-либо"
	},
	{
		"word": "under",
		"phn": "[‘ʌndə]",
		"trans": "под; ниже"
	},
	{
		"word": "told",
		"phn": "[təuld]",
		"trans": "говорил, рассказывал"
	},
	{
		"word": "really",
		"phn": "[‘riəli]",
		"trans": "действительно"
	},
	{
		"word": "life",
		"phn": "[laif]",
		"trans": "жизнь"
	},
	{
		"word": "world",
		"phn": "[wз:ld]",
		"trans": "мир, свет; вселенная"
	},
	{
		"word": "same",
		"phn": "[seim]",
		"trans": "тот же самый"
	},
	{
		"word": "sure",
		"phn": "[ʃuə]",
		"trans": "уверенный; конечно"
	},
	{
		"word": "new",
		"phn": "[nju:]",
		"trans": "новый"
	},
	{
		"word": "found",
		"phn": "[faund]",
		"trans": "находил, встречал"
	},
	{
		"word": "being",
		"phn": "[‘bi:iŋ]",
		"trans": "жизнь, существование"
	},
	{
		"word": "enough",
		"phn": "[i’nʌf]",
		"trans": "достаточно"
	},
	{
		"word": "gone",
		"phn": "[gɔn]",
		"trans": "ушли, ушёл, ушедший"
	},
	{
		"word": "many",
		"phn": "[‘meni]",
		"trans": "много, многие"
	},
	{
		"word": "big",
		"phn": "[big]",
		"trans": "большой"
	},
	{
		"word": "does",
		"phn": "[dʌz]",
		"trans": "3-е л. ед. наст. времени от do"
	},
	{
		"word": "every",
		"phn": "[‘evri]",
		"trans": "каждый, всякий"
	},
	{
		"word": "began",
		"phn": "[bi’gæn]",
		"trans": "начинал, начиналось"
	},
	{
		"word": "always",
		"phn": "[‘ɔ:lweiz]",
		"trans": "всегда"
	},
	{
		"word": "girl",
		"phn": "[gз:l]",
		"trans": "девочка, девушка"
	},
	{
		"word": "home",
		"phn": "[həum]",
		"trans": "дом"
	},
	{
		"word": "without",
		"phn": "[wi’ðaut]",
		"trans": "без, в отсутствие"
	},
	{
		"word": "heard",
		"phn": "[h:зd]",
		"trans": "слышал, услышал"
	},
	{
		"word": "toward(s)",
		"phn": "[tə’wɔ:dz]",
		"trans": "к"
	},
	{
		"word": "need",
		"phn": "[ni:d]",
		"trans": "нуждаться"
	},
	{
		"word": "stop",
		"phn": "[stɔp]",
		"trans": "остановка; останавливать(ся)"
	},
	{
		"word": "maybe",
		"phn": "[‘meibi]",
		"trans": "может быть"
	},
	{
		"word": "part",
		"phn": "[pa:t]",
		"trans": "доля, часть, отчасти"
	},
	{
		"word": "use",
		"phn": "[ju:z]",
		"trans": "применение, польза; употреблять"
	},
	{
		"word": "okay или OK",
		"phn": "[əu’kei]",
		"trans": "хорошо!, ладно!, есть!"
	},
	{
		"word": "use",
		"phn": "[ju:z]",
		"trans": "использовать, применять"
	},
	{
		"word": "though",
		"phn": "[ðəu]",
		"trans": "хотя, даже, тем не менее"
	},
	{
		"word": "far",
		"phn": "[fa:]",
		"trans": "дальний; далеко"
	},
	{
		"word": "name",
		"phn": "[neim]",
		"trans": "имя; название"
	},
	{
		"word": "word",
		"phn": "[wз:d]",
		"trans": "слово"
	},
	{
		"word": "behind",
		"phn": "[bi’haind]",
		"trans": "за; сзади , позади"
	},
	{
		"word": "try",
		"phn": "[trai]",
		"trans": "пытаться, пробовать"
	},
	{
		"word": "help",
		"phn": "[help]",
		"trans": "помощь; помогать"
	},
	{
		"word": "also",
		"phn": "[‘ɔ:lsəu]",
		"trans": "тоже, также"
	},
	{
		"word": "better",
		"phn": "[‘betə]",
		"trans": "лучший, наилучший"
	},
	{
		"word": "mean",
		"phn": "[mi:n]",
		"trans": "середина; значить; подразумевать"
	},
	{
		"word": "father",
		"phn": "[‘fa:ðə]",
		"trans": "отец"
	},
	{
		"word": "against",
		"phn": "[ə’gen(t)st]",
		"trans": "против"
	},
	{
		"word": "anything",
		"phn": "[‘eniθiŋ]",
		"trans": "что-нибудь; что угодно"
	},
	{
		"word": "start",
		"phn": "[sta:t]",
		"trans": "начало; начинать(ся)"
	},
	{
		"word": "yet",
		"phn": "[jet]",
		"trans": "ещё, всё ещё"
	},
	{
		"word": "walk",
		"phn": "[wɔ:k]",
		"trans": "ходьба; ходить"
	},
	{
		"word": "woman",
		"phn": "[‘wumən]",
		"trans": "женщина"
	},
	{
		"word": "seen",
		"phn": "[si:n]",
		"trans": "видел"
	},
	{
		"word": "close",
		"phn": "[kləuz]",
		"trans": "близкий, тесный; близко; закрывать(ся)"
	},
	{
		"word": "remember",
		"phn": "[ri’membə]",
		"trans": "помнить, вспоминать"
	},
	{
		"word": "car",
		"phn": "[ka:]",
		"trans": "автомобиль, машина"
	},
	{
		"word": "between",
		"phn": "[bi’twi:n]",
		"trans": "между"
	},
	{
		"word": "until",
		"phn": "[(ə)n’til]",
		"trans": "до, (до тех пор) пока (не)"
	},
	{
		"word": "both",
		"phn": "[bəuθ]",
		"trans": "оба"
	},
	{
		"word": "done",
		"phn": "[dʌn]",
		"trans": "сделанный; выполненный"
	},
	{
		"word": "god",
		"phn": "[gɔd]",
		"trans": "бог"
	},
	{
		"word": "find",
		"phn": "[faind]",
		"trans": "находить, обнаруживать"
	},
	{
		"word": "water",
		"phn": "[‘wɔ:tə]",
		"trans": "вода"
	},
	{
		"word": "arm",
		"phn": "[a:m]",
		"trans": "рука;"
	},
	{
		"word": "few",
		"phn": "[fju:]",
		"trans": "немного; a ~ несколько"
	},
	{
		"word": "hear",
		"phn": "[hiə]",
		"trans": "слышать; слушать"
	},
	{
		"word": "dog",
		"phn": "[dɔg]",
		"trans": "собака"
	},
	{
		"word": "happen",
		"phn": "[‘hæp(ə)n]",
		"trans": "случаться"
	},
	{
		"word": "its",
		"phn": "[its]",
		"trans": "его, её (о предмете)"
	},
	{
		"word": "book",
		"phn": "[buk]",
		"trans": "книга"
	},
	{
		"word": "morning",
		"phn": "[mɔ:niŋ]",
		"trans": "утро, утренний"
	},
	{
		"word": "kid",
		"phn": "[kid]",
		"trans": "ребёнок, малыш"
	},
	{
		"word": "street",
		"phn": "[stri:t]",
		"trans": "улица"
	},
	{
		"word": "believe",
		"phn": "[bi’li:v]",
		"trans": "верить"
	},
	{
		"word": "talk",
		"phn": "[tɔ:k]",
		"trans": "разговор; говорить"
	},
	{
		"word": "mother",
		"phn": "[‘mʌðə]",
		"trans": "мать"
	},
	{
		"word": "kind",
		"phn": "[kaind]",
		"trans": "сорт, разряд; вид, класс"
	},
	{
		"word": "coming",
		"phn": "[‘kʌmiŋ]",
		"trans": "прибытие, приезд,"
	},
	{
		"word": "each",
		"phn": "[i:tʃ]",
		"trans": "каждый, всякий"
	},
	{
		"word": "black",
		"phn": "[blæk]",
		"trans": "черный"
	},
	{
		"word": "half",
		"phn": "[ha:f]",
		"trans": "половина"
	},
	{
		"word": "red",
		"phn": "[red]",
		"trans": "красный, алый, рыжий"
	},
	{
		"word": "stood",
		"phn": "[stu:d]",
		"trans": "стоял, водружал"
	},
	{
		"word": "young",
		"phn": "[jʌŋ]",
		"trans": "молодой, юный"
	},
	{
		"word": "shall",
		"phn": "[ʃæl]",
		"trans": "вспомогательный и модальный глагол"
	},
	{
		"word": "show",
		"phn": "[ʃəu]",
		"trans": "показ; показывать"
	},
	{
		"word": "feet",
		"phn": "[fi:t]",
		"trans": "ноги"
	},
	{
		"word": "feel",
		"phn": "[fi:l]",
		"trans": "чувствовать"
	},
	{
		"word": "keep",
		"phn": "[ki:p]",
		"trans": "держать"
	},
	{
		"word": "next",
		"phn": "[nekst]",
		"trans": "следующий; будущий; потом"
	},
	{
		"word": "dark",
		"phn": "[da:k]",
		"trans": "тёмный"
	},
	{
		"word": "along",
		"phn": "[ə’lɔŋ]",
		"trans": "вдоль, по, рядом"
	},
	{
		"word": "pass",
		"phn": "[pa:s]",
		"trans": "проход, путь, передавать"
	},
	{
		"word": "course",
		"phn": "[kɔ:s]",
		"trans": "курс, ход, течение"
	},
	{
		"word": "window",
		"phn": "[‘wində]",
		"trans": "окно"
	},
	{
		"word": "dead",
		"phn": "[ded]",
		"trans": "мертвый"
	},
	{
		"word": "hour",
		"phn": "[auə]",
		"trans": "час, время"
	},
	{
		"word": "wanted",
		"phn": "[‘wɔntid]",
		"trans": "разыскиваемый полицией"
	},
	{
		"word": "matter",
		"phn": "[mætə]",
		"trans": "вещество, материал, иметь значение"
	},
	{
		"word": "since",
		"phn": "[sin(t)s]",
		"trans": "с тех пор, с, после"
	},
	{
		"word": "cry",
		"phn": "[krai]",
		"trans": "плакать"
	},
	{
		"word": "heart",
		"phn": "[ha:t]",
		"trans": "сердце"
	},
	{
		"word": "answer",
		"phn": "[‘a:n(t)sə]",
		"trans": "ответ, отвечать; откликаться"
	},
	{
		"word": "small",
		"phn": "[smɔ:l]",
		"trans": "маленький"
	},
	{
		"word": "yeah",
		"phn": "[jɛə]",
		"trans": "да"
	},
	{
		"word": "doing",
		"phn": "[‘du:iŋ]",
		"trans": "дела, акт, действие"
	},
	{
		"word": "four",
		"phn": "[fɔ:]",
		"trans": "четыре"
	},
	{
		"word": "move",
		"phn": "[mu:v]",
		"trans": "двигать(ся)"
	},
	{
		"word": "live",
		"phn": "[liv]",
		"trans": "жить, существовать,"
	},
	{
		"word": "suddenly",
		"phn": "[‘sʌd(ə)nli]",
		"trans": "вдруг"
	},
	{
		"word": "five",
		"phn": "[faiv]",
		"trans": "пять"
	},
	{
		"word": "body",
		"phn": "[‘bɔdy]",
		"trans": "тело"
	},
	{
		"word": "fire",
		"phn": "[‘faiə]",
		"trans": "огонь; пожар; стрелять; поджигать"
	},
	{
		"word": "mouth",
		"phn": "[mauθ]",
		"trans": "рот"
	},
	{
		"word": "leave",
		"phn": "[li:v]",
		"trans": "покидать"
	},
	{
		"word": "smile",
		"phn": "[smail]",
		"trans": "улыбка; улыбаться"
	},
	{
		"word": "state",
		"phn": "[steit]",
		"trans": "государство, страна, штат"
	},
	{
		"word": "family",
		"phn": "[‘fæm(ə)li]",
		"trans": "семья"
	},
	{
		"word": "road",
		"phn": "[rəud]",
		"trans": "дорога, путь"
	},
	{
		"word": "front",
		"phn": "[trʌnt]",
		"trans": "передний"
	},
	{
		"word": "laugh",
		"phn": "[la:f]",
		"trans": "смех, смеяться"
	},
	{
		"word": "gave",
		"phn": "[geiv]",
		"trans": "давал, передавал"
	},
	{
		"word": "across",
		"phn": "[ə’krɔs]",
		"trans": "через, сквозь; поперек"
	},
	{
		"word": "step",
		"phn": "[step]",
		"trans": "шаг; шагать"
	},
	{
		"word": "quite",
		"phn": "[kwait]",
		"trans": "вполне, совершенно; полностью"
	},
	{
		"word": "change",
		"phn": "[tʃeindʒ]",
		"trans": "менять, изменять"
	},
	{
		"word": "later",
		"phn": "[‘leitə’]",
		"trans": "позже, более поздний"
	},
	{
		"word": "together",
		"phn": "[təgeðə]",
		"trans": "вместе; совместно"
	},
	{
		"word": "soon",
		"phn": "[su:n]",
		"trans": "скоро, вскоре"
	},
	{
		"word": "least",
		"phn": "[li:st]",
		"trans": "минимальный, наименьший"
	},
	{
		"word": "second",
		"phn": "[‘sek(ə)nd]",
		"trans": "секунда; второй"
	},
	{
		"word": "kill",
		"phn": "[kil]",
		"trans": "убивать"
	},
	{
		"word": "watch",
		"phn": "[wɔtʃ]",
		"trans": "1) смотреть, следить; наблюдение; 2) часы"
	},
	{
		"word": "wife",
		"phn": "[waif]",
		"trans": "жена, супруга"
	},
	{
		"word": "hard",
		"phn": "[ha:d]",
		"trans": "жёсткий, твёрдый"
	},
	{
		"word": "wait",
		"phn": "[weit]",
		"trans": "ждать"
	},
	{
		"word": "sat",
		"phn": "[sæt]",
		"trans": "сидел, находился"
	},
	{
		"word": "feeling",
		"phn": "[‘fi:liŋ]",
		"trans": "ощущение, чувство"
	},
	{
		"word": "high",
		"phn": "[hai]",
		"trans": "высокий"
	},
	{
		"word": "guy",
		"phn": "[gai]",
		"trans": "парень"
	},
	{
		"word": "idea",
		"phn": "[ai:diə]",
		"trans": "идея; мысль"
	},
	{
		"word": "line",
		"phn": "[lain]",
		"trans": "линия; черта, строка"
	},
	{
		"word": "fear",
		"phn": "[fiə]",
		"trans": "боязнь, страх"
	},
	{
		"word": "miss",
		"phn": "[mis]",
		"trans": "потеря, утрата"
	},
	{
		"word": "bad",
		"phn": "[bæd]",
		"trans": "плохой"
	},
	{
		"word": "hair",
		"phn": "[hɛə]",
		"trans": "волосы"
	},
	{
		"word": "minute",
		"phn": "[‘minit]",
		"trans": "минута"
	},
	{
		"word": "everything",
		"phn": "[‘evriθiŋ]",
		"trans": "всё"
	},
	{
		"word": "please",
		"phn": "[pli:z]",
		"trans": "пожалуйста, желать, хотеть"
	},
	{
		"word": "please",
		"phn": "[pli:z]",
		"trans": "пожалуйста, желать, хотеть"
	},
	{
		"word": "gray",
		"phn": "[grei]",
		"trans": "серый, седой"
	},
	{
		"word": "follow",
		"phn": "[‘fɔləu]",
		"trans": "следовать (за)"
	},
	{
		"word": "hope",
		"phn": "[həup]",
		"trans": "надежда, надеяться"
	},
	{
		"word": "blood",
		"phn": "[blʌd]",
		"trans": "кровь"
	},
	{
		"word": "won",
		"phn": "[wʌn]",
		"trans": "выиграл, победил"
	},
	{
		"word": "air",
		"phn": "[ɛə]",
		"trans": "воздух; атмосфера"
	},
	{
		"word": "perhaps",
		"phn": "[pə’hæps]",
		"trans": "может быть, возможно"
	},
	{
		"word": "set",
		"phn": "[set]",
		"trans": "ставить, класть"
	},
	{
		"word": "tree",
		"phn": "[tri:]",
		"trans": "дерево, древо"
	},
	{
		"word": "run",
		"phn": "[rʌn]",
		"trans": "бежать"
	},
	{
		"word": "death",
		"phn": "[deθ]",
		"trans": "смерть"
	},
	{
		"word": "else",
		"phn": "[els]",
		"trans": "ещё, кроме"
	},
	{
		"word": "already",
		"phn": "[ɔ:l’redi]",
		"trans": "уже"
	},
	{
		"word": "myself",
		"phn": "[mai’self]",
		"trans": "себя, себе, собой"
	},
	{
		"word": "bed",
		"phn": "[bed]",
		"trans": "кровать"
	},
	{
		"word": "lot",
		"phn": "[lot]",
		"trans": "жребий, доля. лот"
	},
	{
		"word": "point",
		"phn": "[pɔint]",
		"trans": "острие; точка; пункт; смысл"
	},
	{
		"word": "money",
		"phn": "[‘mʌni]",
		"trans": "деньги"
	},
	{
		"word": "getting",
		"phn": "[‘getiŋ]",
		"trans": "получить, приобрести"
	},
	{
		"word": "rest",
		"phn": "[rest]",
		"trans": "отдых, отдыхать"
	},
	{
		"word": "whole",
		"phn": "[həul]",
		"trans": "весь, целый; полный"
	},
	{
		"word": "pull",
		"phn": "[pul]",
		"trans": "тянуть, тащить"
	},
	{
		"word": "business",
		"phn": "[‘biznis]",
		"trans": "дело, занятие; бизнес"
	},
	{
		"word": "either",
		"phn": "[‘aiðə]",
		"trans": "один из двух; тот или другой, или"
	},
	{
		"word": "lady",
		"phn": "[‘leidi]",
		"trans": "леди, дама"
	},
	{
		"word": "play",
		"phn": "[plei]",
		"trans": "играть, игра"
	},
	{
		"word": "suppose",
		"phn": "[səpəuz]",
		"trans": "полагать, думать"
	},
	{
		"word": "top",
		"phn": "[tɔp]",
		"trans": "верхушка, верхний, топ"
	},
	{
		"word": "reach",
		"phn": "[ri:tʃ]",
		"trans": "достигать"
	},
	{
		"word": "week",
		"phn": "[wi:k]",
		"trans": "неделя"
	},
	{
		"word": "thank",
		"phn": "[θæŋk]",
		"trans": "благодарить"
	},
	{
		"word": "wall",
		"phn": "[wɔ:l]",
		"trans": "стена"
	},
	{
		"word": "real",
		"phn": "[riəl]",
		"trans": "реальный"
	},
	{
		"word": "held",
		"phn": "[held]",
		"trans": "держал, обнимал"
	},
	{
		"word": "best",
		"phn": "[best]",
		"trans": "самый лучший, наилучший"
	},
	{
		"word": "read",
		"phn": "[ri:d]",
		"trans": "читать, прочитать"
	},
	{
		"word": "thinking",
		"phn": "[‘θiŋkiŋ]",
		"trans": "размышление; мышление"
	},
	{
		"word": "inside",
		"phn": "[in’said]",
		"trans": "внутренний; внутри"
	},
	{
		"word": "stay",
		"phn": "[stei]",
		"trans": "останавливаться"
	},
	{
		"word": "question",
		"phn": "[‘kwestʃə]",
		"trans": "вопрос"
	},
	{
		"word": "full",
		"phn": "[ful]",
		"trans": "полный"
	},
	{
		"word": "cold",
		"phn": "[kəuld]",
		"trans": "холодный"
	},
	{
		"word": "die",
		"phn": "[dai]",
		"trans": "умирать"
	},
	{
		"word": "sir",
		"phn": "[sз:]",
		"trans": "сэр, господин"
	},
	{
		"word": "case",
		"phn": "[keis]",
		"trans": "случай; обстоятельство"
	},
	{
		"word": "ran",
		"phn": "[ræn]",
		"trans": "бегал"
	},
	{
		"word": "sometimes",
		"phn": "[sʌmtaimz]",
		"trans": "иногда, временами"
	},
	{
		"word": "power",
		"phn": "[pauə]",
		"trans": "сила, мощь"
	},
	{
		"word": "wish",
		"phn": "[wiʃ]",
		"trans": "желать, хотеть, желание"
	},
	{
		"word": "dream",
		"phn": "[dri:m]",
		"trans": "мечта, сон"
	},
	{
		"word": "stand",
		"phn": "[stænd]",
		"trans": "стоять; ставить; стойка"
	},
	{
		"word": "son",
		"phn": "[sʌn]",
		"trans": "сын"
	},
	{
		"word": "herself",
		"phn": "[hз:’self]",
		"trans": "себя, себе, собой"
	},
	{
		"word": "pretty",
		"phn": "[‘priti]",
		"trans": "милый, прелестный"
	},
	{
		"word": "paper",
		"phn": "[‘peipə]",
		"trans": "бумага"
	},
	{
		"word": "shoulder",
		"phn": "[‘ʃəuldə]",
		"trans": "плечо"
	},
	{
		"word": "care",
		"phn": "[kɛə]",
		"trans": "забота, беспокоиться"
	},
	{
		"word": "alone",
		"phn": "[ə’ləun]",
		"trans": "единственный, один"
	},
	{
		"word": "making",
		"phn": "[‘meikiŋ]",
		"trans": "создание, становление"
	},
	{
		"word": "near",
		"phn": "[niə]",
		"trans": "возле, ближний"
	},
	{
		"word": "finger",
		"phn": "[‘fiŋgə]",
		"trans": "палец (на руке)"
	},
	{
		"word": "hold",
		"phn": "[həuld]",
		"trans": "держать; владеть; вмещать"
	},
	{
		"word": "return",
		"phn": "[ri’tз:n]",
		"trans": "возвращаться"
	},
	{
		"word": "fact",
		"phn": "[fækt]",
		"trans": "факт; событие; случай"
	},
	{
		"word": "understand",
		"phn": "[,ʌə’stænd]",
		"trans": "понимать"
	},
	{
		"word": "guess",
		"phn": "[ges]",
		"trans": "гадать, догадываться"
	},
	{
		"word": "table",
		"phn": "[‘teibl]",
		"trans": "стол"
	},
	{
		"word": "dear",
		"phn": "[diə]",
		"trans": "дорогой, милый, любимый"
	},
	{
		"word": "trying",
		"phn": "[‘traiiŋ]",
		"trans": "трудный, тяжёлый"
	},
	{
		"word": "fell",
		"phn": "[fel]",
		"trans": "падал, упал"
	},
	{
		"word": "floor",
		"phn": "[flɔ:]",
		"trans": "пол; этаж"
	},
	{
		"word": "mile",
		"phn": "[mail]",
		"trans": "миля"
	},
	{
		"word": "probably",
		"phn": "[‘prɔbəbli]",
		"trans": "вероятно, наверное"
	},
	{
		"word": "type",
		"phn": "[taip]",
		"trans": "тип"
	},
	{
		"word": "deep",
		"phn": "[di:p]",
		"trans": "глубокий"
	},
	{
		"word": "glass",
		"phn": "[gla:s]",
		"trans": "стекло, стакан, бокал"
	},
	{
		"word": "standing",
		"phn": "[‘stændiŋ]",
		"trans": "репутация; ранг, стоящий"
	},
	{
		"word": "trouble",
		"phn": "[‘trʌbl]",
		"trans": "беспокойство, волнение"
	},
	{
		"word": "however",
		"phn": "[hau’evə]",
		"trans": "однако, тем не менее"
	},
	{
		"word": "taken",
		"phn": "[‘teik(ə)n",
		"trans": "прич. прош. вр. от take"
	},
	{
		"word": "hey",
		"phn": "[hei]",
		"trans": "здорово!, привет!, эй!"
	},
	{
		"word": "sort",
		"phn": "[sɔ:t]",
		"trans": "род, сорт, тип"
	},
	{
		"word": "lay",
		"phn": "[lei]",
		"trans": "класть, положить"
	},
	{
		"word": "town",
		"phn": "[taun]",
		"trans": "город; городок"
	},
	{
		"word": "sleep",
		"phn": "[sli:p]",
		"trans": "сон; дремота"
	},
	{
		"word": "school",
		"phn": "[sku:l]",
		"trans": "школа"
	},
	{
		"word": "lost",
		"phn": "[lɔst]",
		"trans": "потерянный, потерявшийся"
	},
	{
		"word": "green",
		"phn": "[gri:n]",
		"trans": "зелёный"
	},
	{
		"word": "gonna",
		"phn": "[‘g(ə)nə]",
		"trans": "собираться (что-л. сделать)"
	},
	{
		"word": "lip",
		"phn": "[lip]",
		"trans": "губа"
	},
	{
		"word": "round",
		"phn": "[raund]",
		"trans": "круглый"
	},
	{
		"word": "clear",
		"phn": "[kliə]",
		"trans": "ясно, чётко, чистый"
	},
	{
		"word": "having",
		"phn": "[‘hæviŋ]",
		"trans": "владение, обладание"
	},
	{
		"word": "scream",
		"phn": "[skri:m]",
		"trans": "крик, вопить"
	},
	{
		"word": "touch",
		"phn": "[tʌtʃ]",
		"trans": "касаться, трогать"
	},
	{
		"word": "blue",
		"phn": "[blu:]",
		"trans": "голубой; лазурный; синий"
	},
	{
		"word": "hundred",
		"phn": "[‘hʌndrid]",
		"trans": "сто"
	},
	{
		"word": "known",
		"phn": "[nəun]",
		"trans": "прич. прош. вр. от know"
	},
	{
		"word": "running",
		"phn": "[‘rʌniŋ]",
		"trans": "бегающий, беготня"
	},
	{
		"word": "large",
		"phn": "[la:dʒ]",
		"trans": "большой, крупный"
	},
	{
		"word": "surprise",
		"phn": "[sə’praiz]",
		"trans": "удивление"
	},
	{
		"word": "beside",
		"phn": "[bi’said]",
		"trans": "рядом с; близ, около"
	},
	{
		"word": "talking",
		"phn": "[‘tɔ:kiŋ]",
		"trans": "разговор, говорящий"
	},
	{
		"word": "ten",
		"phn": "[ten]",
		"trans": "десять"
	},
	{
		"word": "less",
		"phn": "[les]",
		"trans": "меньший, меньше"
	},
	{
		"word": "letter",
		"phn": "[‘letə]",
		"trans": "буква"
	},
	{
		"word": "twenty",
		"phn": "[‘twenti]",
		"trans": "двадцать"
	},
	{
		"word": "snow",
		"phn": "[snəu]",
		"trans": "снег"
	},
	{
		"word": "kept",
		"phn": "[kept]",
		"trans": "прош. вр., прич. прош. вр. от keep"
	},
	{
		"word": "brought",
		"phn": "[brɔ:t]",
		"trans": "прош. вр., прич. прош. вр. от bring"
	},
	{
		"word": "someone",
		"phn": "[‘sʌmwʌn]",
		"trans": "кто-нибудь, кто-то"
	},
	{
		"word": "past",
		"phn": "[pa:st]",
		"trans": "прошлое; прошедшее"
	},
	{
		"word": "country",
		"phn": "[‘kʌntri]",
		"trans": "страна"
	},
	{
		"word": "leg",
		"phn": "[leg]",
		"trans": "нога (от бедра до ступни)"
	},
	{
		"word": "pick",
		"phn": "[pik]",
		"trans": "собирать, снимать; рвать"
	},
	{
		"word": "brother",
		"phn": "[‘brʌðə]",
		"trans": "брат"
	},
	{
		"word": "wood",
		"phn": "[wud]",
		"trans": "лес, древесина"
	},
	{
		"word": "women",
		"phn": "[‘wimin]",
		"trans": "женщины"
	},
	{
		"word": "wrong",
		"phn": "[rɔŋ]",
		"trans": "неправильный, неверный"
	},
	{
		"word": "sense",
		"phn": "[sen(t)s]",
		"trans": "чувство; ощущение"
	},
	{
		"word": "hurt",
		"phn": "[hз:t]",
		"trans": "ушиб; рана; травма"
	},
	{
		"word": "cut",
		"phn": "[kʌt]",
		"trans": "резать"
	},
	{
		"word": "drop",
		"phn": "[drɔp]",
		"trans": "капать, опускать"
	},
	{
		"word": "ring",
		"phn": "[riŋ]",
		"trans": "кольцо, ринг, звенеть"
	},
	{
		"word": "sitting",
		"phn": "[‘sitiŋ]",
		"trans": "заседание, собрание"
	},
	{
		"word": "true",
		"phn": "[tru:]",
		"trans": "верный, правильный"
	},
	{
		"word": "poor",
		"phn": "[puə]",
		"trans": "бедный, малоимущий"
	},
	{
		"word": "order",
		"phn": "[‘ɔ:də]",
		"trans": "исправность, порядок"
	},
	{
		"word": "fang",
		"phn": "[fæŋ]",
		"trans": "клык, зуб, крюк"
	},
	{
		"word": "child",
		"phn": "[tʃaild]",
		"trans": "ребёнок; дитя"
	},
	{
		"word": "ready",
		"phn": "[‘redi]",
		"trans": "готовый"
	},
	{
		"word": "land",
		"phn": "[lænd]",
		"trans": "земля, суша"
	},
	{
		"word": "hot",
		"phn": "[hɔt]",
		"trans": "горячий; жаркий"
	},
	{
		"word": "speak",
		"phn": "[spi:k]",
		"trans": "говорить, разговаривать"
	},
	{
		"word": "children",
		"phn": "[‘tʃildr(ə)n]",
		"trans": "дети"
	},
	{
		"word": "fine",
		"phn": "[fain]",
		"trans": "хороший, прекрасный, отлично"
	},
	{
		"word": "given",
		"phn": "[giv(ə)n]",
		"trans": "нечто данное, исходное, данный"
	},
	{
		"word": "able",
		"phn": "[‘eibl]",
		"trans": "способный"
	},
	{
		"word": "become",
		"phn": "[bi’kʌm]",
		"trans": "становиться, делаться"
	},
	{
		"word": "low",
		"phn": "[ləu]",
		"trans": "низкий, невысокий"
	},
	{
		"word": "person",
		"phn": "[‘pз:s(ə)n]",
		"trans": "человек; личность,"
	},
	{
		"word": "evening",
		"phn": "[‘i:vniŋ]",
		"trans": "вечер"
	},
	{
		"word": "outside",
		"phn": "[,aut’said]",
		"trans": "внешняя, наружная часть"
	},
	{
		"word": "listen",
		"phn": "[‘lis(ə)n]",
		"trans": "слушать; выслушивать"
	},
	{
		"word": "wind",
		"phn": "[wind]",
		"trans": "ветер"
	},
	{
		"word": "smell",
		"phn": "[smel]",
		"trans": "запах; аромат"
	},
	{
		"word": "chair",
		"phn": "[tʃɛə]",
		"trans": "стул; кресло"
	},
	{
		"word": "six",
		"phn": "[siks]",
		"trans": "шесть"
	},
	{
		"word": "forward",
		"phn": "[‘fɔ:wəd]",
		"trans": "вперёд! передний"
	},
	{
		"word": "hill",
		"phn": "[hil]",
		"trans": "возвышенность, холм"
	},
	{
		"word": "reason",
		"phn": "[‘ri:z(ə)n]",
		"trans": "причина, повод, основание"
	},
	{
		"word": "ground",
		"phn": "[graund]",
		"trans": "земля"
	},
	{
		"word": "above",
		"phn": "[ə’bʌv]",
		"trans": "наверху, вверху; выше"
	},
	{
		"word": "chance",
		"phn": "[tʃa:n(t)s]",
		"trans": "шанс, возможность"
	},
	{
		"word": "story",
		"phn": "[‘stɔ:ri]",
		"trans": "повесть, рассказ"
	},
	{
		"word": "late",
		"phn": "[leit]",
		"trans": "поздний; поздно"
	},
	{
		"word": "saying",
		"phn": "[‘seiiŋ]",
		"trans": "высказывание, поговорка"
	},
	{
		"word": "star",
		"phn": "[sta:]",
		"trans": "звезда"
	},
	{
		"word": "husband",
		"phn": "[‘hʌzbənd]",
		"trans": "муж, супруг"
	},
	{
		"word": "ago",
		"phn": "[ə’gəu]",
		"trans": "тому назад"
	},
	{
		"word": "except",
		"phn": "[ik’sept]",
		"trans": "исключать, за исключением"
	},
	{
		"word": "lord",
		"phn": "[lɔ:d]",
		"trans": "господин, владыка"
	},
	{
		"word": "sorry",
		"phn": "[‘sɔri]",
		"trans": "огорчённый, сожалеющий"
	},
	{
		"word": "number",
		"phn": "[‘nʌmbə]",
		"trans": "число; сумма, цифра"
	},
	{
		"word": "roll",
		"phn": "[rəul]",
		"trans": "катиться, вращение"
	},
	{
		"word": "longer",
		"phn": "[lɔŋgə]",
		"trans": "дольше"
	},
	{
		"word": "rock",
		"phn": "[rɔk]",
		"trans": "скала, камень"
	},
	{
		"word": "learn",
		"phn": "[lз:n]",
		"trans": "учиться; учить"
	},
	{
		"word": "often",
		"phn": "[‘of(t)(ə)n]",
		"trans": "часто, много раз"
	},
	{
		"word": "although",
		"phn": "[ɔ:l’ðəu]",
		"trans": "хотя, если бы даже"
	},
	{
		"word": "shit",
		"phn": "[ʃit]",
		"trans": "дерьмо, вздор, чёрт!, блин!"
	},
	{
		"word": "sister",
		"phn": "[‘sistə]",
		"trans": "сестра"
	},
	{
		"word": "strange",
		"phn": "[streindʒ]",
		"trans": "чужой, странный"
	},
	{
		"word": "bring",
		"phn": "[briŋ]",
		"trans": "приносить, привозить"
	},
	{
		"word": "pain",
		"phn": "[pein]",
		"trans": "боль, горе"
	},
	{
		"word": "nod",
		"phn": "[nɔd]",
		"trans": "кивок, кивать"
	},
	{
		"word": "fall",
		"phn": "[fɔ:l]",
		"trans": "падать, осень (амер.)"
	},
	{
		"word": "finally",
		"phn": "[‘fain(ə)li]",
		"trans": "окончательно"
	},
	{
		"word": "among",
		"phn": "[ə’mʌŋ]",
		"trans": "между, посреди"
	},
	{
		"word": "cause",
		"phn": "[kɔ:z]",
		"trans": "причина, основание, потому что"
	},
	{
		"word": "afraid",
		"phn": "[ə:freid]",
		"trans": "испуганный, напуганный"
	},
	{
		"word": "notice",
		"phn": "[‘nəutis]",
		"trans": "сообщение, уведомление, замечать"
	},
	{
		"word": "sun",
		"phn": "[sʌn]",
		"trans": "солнце"
	},
	{
		"word": "month",
		"phn": "[mʌnθ]",
		"trans": "месяц"
	},
	{
		"word": "shut",
		"phn": "[ʃʌt]",
		"trans": "закрывать, запирать, засов"
	},
	{
		"word": "box",
		"phn": "[bɔks]",
		"trans": "ящик, коробка"
	},
	{
		"word": "hell",
		"phn": "[hel]",
		"trans": "ад"
	},
	{
		"word": "office",
		"phn": "[‘ɔfis]",
		"trans": "офис"
	},
	{
		"word": "during",
		"phn": "[‘djuəriŋ]",
		"trans": "в течение, в продолжение"
	},
	{
		"word": "wonder",
		"phn": "[‘wʌndə]",
		"trans": "удивление, удивляться"
	},
	{
		"word": "beyond",
		"phn": "[bi’jɔnd]",
		"trans": "за, по ту сторону, далеко"
	},
	{
		"word": "became",
		"phn": "[bi’keim]",
		"trans": "становился, делался"
	},
	{
		"word": "shadow",
		"phn": "[‘ʃædəu]",
		"trans": "тень"
	},
	{
		"word": "slowly",
		"phn": "[‘sləuli]",
		"trans": "медленно"
	},
	{
		"word": "instead",
		"phn": "[in’stead]",
		"trans": "вместо; взамен"
	},
	{
		"word": "ear",
		"phn": "[iə]",
		"trans": "ухо"
	},
	{
		"word": "picture",
		"phn": "[‘piktʃə]",
		"trans": "картина; рисунок, фотография"
	},
	{
		"word": "interest",
		"phn": "[‘int(ə)rəst]",
		"trans": "интерес"
	},
	{
		"word": "cannot",
		"phn": "[‘kænɔt]",
		"trans": "не могу, не мочь"
	},
	{
		"word": "present",
		"phn": "[prez(ə)nt]",
		"trans": "текущий момент; настоящее время"
	},
	{
		"word": "bit",
		"phn": "[bit]",
		"trans": "кусочек; частица"
	},
	{
		"word": "living",
		"phn": "[‘liviŋ]",
		"trans": "образ жизни, жизнь, живущий,"
	},
	{
		"word": "remain",
		"phn": "[ri’mein]",
		"trans": "оставаться"
	},
	{
		"word": "appear",
		"phn": "[ə’piə]",
		"trans": "показываться; появляться"
	},
	{
		"word": "store",
		"phn": "[stɔ:]",
		"trans": "магазин, запас, резерв"
	},
	{
		"word": "marry",
		"phn": "[‘mæri]",
		"trans": "жениться"
	},
	{
		"word": "rather",
		"phn": "[‘ra:ðə]",
		"trans": "лучше, охотнее"
	},
	{
		"word": "doubt",
		"phn": "[daut]",
		"trans": "сомнение, сомневаться"
	},
	{
		"word": "teeth",
		"phn": "[ti:θ]",
		"trans": "зубы"
	},
	{
		"word": "force",
		"phn": "[fɔ:s]",
		"trans": "сила"
	},
	{
		"word": "spoke",
		"phn": "[spəuk]",
		"trans": "говорил, сказал"
	},
	{
		"word": "finish",
		"phn": "[‘finiʃ]",
		"trans": "конец, окончание, заканчивать"
	},
	{
		"word": "indeed",
		"phn": "[in’di:d]",
		"trans": "в самом деле, действительно"
	},
	{
		"word": "seat",
		"phn": "[si:t]",
		"trans": "сиденье, место"
	},
	{
		"word": "nor",
		"phn": "[nɔ:]",
		"trans": "также не, тоже не"
	},
	{
		"word": "save",
		"phn": "[seiv]",
		"trans": "спасать"
	},
	{
		"word": "job",
		"phn": "[dʒɔb]",
		"trans": "работа, труд"
	},
	{
		"word": "war",
		"phn": "[wɔ:]",
		"trans": "война"
	},
	{
		"word": "dress",
		"phn": "[dres]",
		"trans": "одежда, платье"
	},
	{
		"word": "cover",
		"phn": "[‘kʌvə]",
		"trans": "накрывать, покрывать, крышка, обложка"
	},
	{
		"word": "realize",
		"phn": "[‘riəlaiz]",
		"trans": "выполнять, реализовывать"
	},
	{
		"word": "gun",
		"phn": "[gʌn]",
		"trans": "орудие, пушка, пистолет, револьвер"
	},
	{
		"word": "heavy",
		"phn": "[‘hevi]",
		"trans": "тяжёлый, крупный"
	},
	{
		"word": "waiting",
		"phn": "[‘weitiŋ]",
		"trans": "ожидание, выжидание"
	},
	{
		"word": "fellow",
		"phn": "[‘feləu]",
		"trans": "человек, парень"
	},
	{
		"word": "sign",
		"phn": "[sain]",
		"trans": "знак; символ, подписывать"
	},
	{
		"word": "stuff",
		"phn": "[stʌf]",
		"trans": "материал, состав, вещество"
	},
	{
		"word": "decide",
		"phn": "[di’said]",
		"trans": "решать, принимать решение"
	},
	{
		"word": "expect",
		"phn": "[ik’spekt]",
		"trans": "ждать, ожидать"
	},
	{
		"word": "hit",
		"phn": "[hit]",
		"trans": "ударять; поражать"
	},
	{
		"word": "corner",
		"phn": "[‘kɔ:nə]",
		"trans": "угол"
	},
	{
		"word": "beaver",
		"phn": "[bi:və]",
		"trans": "бобр, бобёр; женские половые органы (киска)"
	},
	{
		"word": "king",
		"phn": "[kiŋ]",
		"trans": "король"
	},
	{
		"word": "happy",
		"phn": "[‘hæpi]",
		"trans": "счастливый, довольный"
	},
	{
		"word": "phone",
		"phn": "[fəun]",
		"trans": "телефон"
	},
	{
		"word": "several",
		"phn": "[‘sev(ə)r(ə)l]",
		"trans": "некоторые, несколько"
	},
	{
		"word": "city",
		"phn": "[‘siti]",
		"trans": "город"
	},
	{
		"word": "news",
		"phn": "[nju:z]",
		"trans": "новости"
	},
	{
		"word": "summer",
		"phn": "[‘sʌmə]",
		"trans": "лето"
	},
	{
		"word": "different",
		"phn": "[‘dif(ə)r(ə)nt]",
		"trans": "другой, отличный"
	},
	{
		"word": "sit",
		"phn": "[sit]",
		"trans": "сидеть; садиться"
	},
	{
		"word": "actually",
		"phn": "[æktʃuəli]",
		"trans": "фактически, на самом деле"
	},
	{
		"word": "caught",
		"phn": "[kɔ:t]",
		"trans": "прош. вр., прич. прош. вр. от catch"
	},
	{
		"word": "taking",
		"phn": "[‘teikiŋ]",
		"trans": "захват, взятие"
	},
	{
		"word": "broken",
		"phn": "[‘brəuk(ə)n]",
		"trans": "разбитый, сломанный"
	},
	{
		"word": "early",
		"phn": "[‘з:li]",
		"trans": "начальный, ранний"
	},
	{
		"word": "bright",
		"phn": "[brait]",
		"trans": "яркий; блестящий"
	},
	{
		"word": "daughter",
		"phn": "[‘dɔ:tə]",
		"trans": "дочь"
	},
	{
		"word": "enter",
		"phn": "[‘entə]",
		"trans": "вход, входить"
	},
	{
		"word": "shot",
		"phn": "[ʃɔt]",
		"trans": "выстрел"
	},
	{
		"word": "carry",
		"phn": "[‘kæri]",
		"trans": "нести, носить"
	},
	{
		"word": "foot",
		"phn": "[fut]",
		"trans": "ступня"
	},
	{
		"word": "scare",
		"phn": "[skɛə]",
		"trans": "пугать; испугать"
	},
	{
		"word": "tad",
		"phn": "[tæd]",
		"trans": "ребёнок, капелька, чуточка"
	},
	{
		"word": "holding",
		"phn": "[‘həuldiŋ]",
		"trans": "вклад, закрепление, удерживание"
	},
	{
		"word": "human",
		"phn": "[‘hju:mən]",
		"trans": "людской, человеческий"
	},
	{
		"word": "whatever",
		"phn": "[(h)wɔt’evə]",
		"trans": "какой бы ни; любой"
	},
	{
		"word": "yourself",
		"phn": "[jɔ:’self]",
		"trans": "себя, себе, собой"
	},
	{
		"word": "form",
		"phn": "[fɔ:m]",
		"trans": "форма, вид"
	},
	{
		"word": "worry",
		"phn": "[‘wʌri]",
		"trans": "надоедать; докучать"
	},
	{
		"word": "shook",
		"phn": "[ʃuk]",
		"trans": "тряс, встряхивал"
	},
	{
		"word": "exactly",
		"phn": "[ig’zæktli]",
		"trans": "в точности; точно"
	},
	{
		"word": "neck",
		"phn": "[nek]",
		"trans": "шея"
	},
	{
		"word": "fill",
		"phn": "[fil]",
		"trans": "наполнять"
	},
	{
		"word": "certain",
		"phn": "[‘sз:t(ə)n]",
		"trans": "точный, определённый"
	},
	{
		"word": "nose",
		"phn": "[nəuz]",
		"trans": "нос"
	},
	{
		"word": "brutal",
		"phn": "[‘bru:tl]",
		"trans": "жестокий, горький, брутальный"
	},
	{
		"word": "continue",
		"phn": "[kən’tinju:]",
		"trans": "продолжать"
	},
	{
		"word": "drink",
		"phn": "[driŋk]",
		"trans": "пить"
	},
	{
		"word": "free",
		"phn": "[fri]",
		"trans": "свободный, вольный"
	},
	{
		"word": "sky",
		"phn": "[skai]",
		"trans": "небо"
	},
	{
		"word": "mark",
		"phn": "[ma:k]",
		"trans": "марка, маркировать"
	},
	{
		"word": "company",
		"phn": "[‘kʌmpəni]",
		"trans": "общество, компания"
	},
	{
		"word": "breath",
		"phn": "[breθ]",
		"trans": "дыхание; вздох"
	},
	{
		"word": "reply",
		"phn": "[ri’plai]",
		"trans": "ответ, отклик"
	},
	{
		"word": "fat",
		"phn": "[fæt]",
		"trans": "толстый, жирный"
	},
	{
		"word": "park",
		"phn": "[pa:k]",
		"trans": "парк, парковка"
	},
	{
		"word": "rose",
		"phn": "[rəuz]",
		"trans": "роза, розовый"
	},
	{
		"word": "whose",
		"phn": "[hu:z]",
		"trans": "чей, чьё, чьи, чья"
	},
	{
		"word": "figure",
		"phn": "[‘figə]",
		"trans": "фигура"
	},
	{
		"word": "lie",
		"phn": "[lai]",
		"trans": "ложь, лгать"
	},
	{
		"word": "act",
		"phn": "[ækt]",
		"trans": "действовать, дело, поступок"
	},
	{
		"word": "anyway",
		"phn": "[‘enivei]",
		"trans": "как бы то ни было, в любом случае"
	},
	{
		"word": "cross",
		"phn": "[krɔs]",
		"trans": "крест, пересекать"
	},
	{
		"word": "master",
		"phn": "[‘ma:stə]",
		"trans": "главный, старший; мастер"
	},
	{
		"word": "game",
		"phn": "[geim]",
		"trans": "игра"
	},
	{
		"word": "pocket",
		"phn": "[‘pɔkit]",
		"trans": "карман, мешочек"
	},
	{
		"word": "stone",
		"phn": "[stəun]",
		"trans": "камень"
	},
	{
		"word": "strong",
		"phn": "[strɔŋ]",
		"trans": "сильный, сильно"
	},
	{
		"word": "russian",
		"phn": "[‘rʌʃ(ə)n]",
		"trans": "русский"
	},
	{
		"word": "horse",
		"phn": "[hɔ:s]",
		"trans": "лошадь"
	},
	{
		"word": "baby",
		"phn": "[‘beibi]",
		"trans": "ребёнок, младенец"
	},
	{
		"word": "knee",
		"phn": "[ni:]",
		"trans": "колено"
	},
	{
		"word": "police",
		"phn": "[pə’li:s]",
		"trans": "полиция"
	},
	{
		"word": "silence",
		"phn": "[‘sailən(t)s]",
		"trans": "тишина, безмолвие"
	},
	{
		"word": "watching",
		"phn": "[wɔtʃiŋ]",
		"trans": "наблюдение"
	},
	{
		"word": "afternoon",
		"phn": "[a:ftə’nu:n]",
		"trans": "время после полудня, дневное время"
	},
	{
		"word": "dollar",
		"phn": "[‘dɔlə]",
		"trans": "доллар"
	},
	{
		"word": "eat",
		"phn": "[i:t]",
		"trans": "есть"
	},
	{
		"word": "deal",
		"phn": "[di:l]",
		"trans": "сделка, соглашение, раздача"
	},
	{
		"word": "fast",
		"phn": "[fast]",
		"trans": "быстро, быстрый, скорый"
	},
	{
		"word": "add",
		"phn": "[æd]",
		"trans": "прибавлять, добавлять"
	},
	{
		"word": "itself",
		"phn": "[it’self]",
		"trans": "себя, себе, сам"
	},
	{
		"word": "none",
		"phn": "[nʌn]",
		"trans": "ничуть, никто"
	},
	{
		"word": "check",
		"phn": "[tʃek]",
		"trans": "проверять, контроль, чек"
	},
	{
		"word": "sonny",
		"phn": "[‘sʌni]",
		"trans": "сынок"
	},
	{
		"word": "cheek",
		"phn": "[tʃi:k]",
		"trans": "щека"
	},
	{
		"word": "meant",
		"phn": "[ment]",
		"trans": "прош. вр., прич. прош. вр. от mean"
	},
	{
		"word": "push",
		"phn": "[ruʃ]",
		"trans": "толкать; пихать"
	},
	{
		"word": "nature",
		"phn": "[‘neitʃə]",
		"trans": "природа"
	},
	{
		"word": "fucking",
		"phn": "[‘fʌkiŋ]",
		"trans": "проклятый, чёртов, офигенно"
	},
	{
		"word": "struck",
		"phn": "[strʌk]",
		"trans": "прош. вр., прич. прош. вр. от strike"
	},
	{
		"word": "tear",
		"phn": "[tɛə]",
		"trans": "рвать, разрывать, слеза"
	},
	{
		"word": "chapter",
		"phn": "[tʃæptə]",
		"trans": "глава (книги)"
	},
	{
		"word": "middle",
		"phn": "[‘midi]",
		"trans": "середина, центр, средний"
	},
	{
		"word": "note",
		"phn": "[nəut]",
		"trans": "заметка, запись"
	},
	{
		"word": "crazy",
		"phn": "[‘kreizi]",
		"trans": "сумасшедший, безумный"
	},
	{
		"word": "sent",
		"phn": "[sent]",
		"trans": "послал, отправил"
	},
	{
		"word": "smoke",
		"phn": "[sməuk]",
		"trans": "курить, курение, дым"
	},
	{
		"word": "bird",
		"phn": "[bз:d]",
		"trans": "птица"
	},
	{
		"word": "raise",
		"phn": "[reiz]",
		"trans": "поднимать"
	},
	{
		"word": "promise",
		"phn": "[‘prɔmis]",
		"trans": "обещание, обещать"
	},
	{
		"word": "thousand",
		"phn": "[‘θauz(ə)nd]",
		"trans": "тысяча"
	},
	{
		"word": "hall",
		"phn": "[hɔ:l]",
		"trans": "холл, вестибюль; фойе"
	},
	{
		"word": "nice",
		"phn": "[nais]",
		"trans": "хороший, приятный, милый"
	},
	{
		"word": "moving",
		"phn": "[‘mu:viŋ]",
		"trans": "движение, перемещение"
	},
	{
		"word": "seeing",
		"phn": "[‘si:iŋ]",
		"trans": "видение, принимая во внимание"
	},
	{
		"word": "whom",
		"phn": "[hu:m]",
		"trans": "кого"
	},
	{
		"word": "law",
		"phn": "[lɔ:]",
		"trans": "закон, право"
	},
	{
		"word": "meet",
		"phn": "[mi:t]",
		"trans": "встречаться, видеться"
	},
	{
		"word": "quiet",
		"phn": "[‘kwaiət]",
		"trans": "тихий, бесшумный, спокойный,"
	},
	{
		"word": "sight",
		"phn": "[sait]",
		"trans": "зрение, вид; зрелище"
	},
	{
		"word": "throat",
		"phn": "[θrəut]",
		"trans": "горло, гортань; глотка"
	},
	{
		"word": "wide",
		"phn": "[waid]",
		"trans": "широкий"
	},
	{
		"word": "desire",
		"phn": "[di’zaiə]",
		"trans": "жаждать, очень хотеть"
	},
	{
		"word": "hole",
		"phn": "[həul]",
		"trans": "дыра; отверстие; прорезь"
	},
	{
		"word": "certainly",
		"phn": "[‘sз:t(ə)nli]",
		"trans": "конечно, естественно"
	},
	{
		"word": "terrible",
		"phn": "[‘terəbl]",
		"trans": "страшный, ужасный"
	},
	{
		"word": "earth",
		"phn": "[з:θ]",
		"trans": "земля, суша"
	},
	{
		"word": "kiss",
		"phn": "[kis]",
		"trans": "целовать, поцелуй"
	},
	{
		"word": "lock",
		"phn": "[lɔk]",
		"trans": "локон, замок, затвор"
	},
	{
		"word": "manner",
		"phn": "[‘mænə]",
		"trans": "манера, поведение; метод"
	},
	{
		"word": "party",
		"phn": "[‘pa:ti]",
		"trans": "партия, вечеринка"
	},
	{
		"word": "movie",
		"phn": "[‘mu:vi]",
		"trans": "кинофильм, фильм"
	},
	{
		"word": "possible",
		"phn": "[‘pɔsəbl]",
		"trans": "вероятный, возможный"
	},
	{
		"word": "kitchen",
		"phn": "[‘kitʃin]",
		"trans": "кухня"
	},
	{
		"word": "piece",
		"phn": "[pi:s]",
		"trans": "кусок, штука"
	},
	{
		"word": "attention",
		"phn": "[ə’ten(t)ʃ(ə)n]",
		"trans": "внимание, внимательность"
	},
	{
		"word": "silver",
		"phn": "[‘silvə]",
		"trans": "серебро, серебряный"
	},
	{
		"word": "damn",
		"phn": "[dæm]",
		"trans": "проклятие; ругательство"
	},
	{
		"word": "folk",
		"phn": "[fəuk]",
		"trans": "народный, люди"
	},
	{
		"word": "glance",
		"phn": "[gla:n(t)s]",
		"trans": "блеснуть, сверкнуть"
	},
	{
		"word": "themselves",
		"phn": "[ðəm’selvz]",
		"trans": "себя, себе, собой"
	},
	{
		"word": "laughing",
		"phn": "[‘la:fiŋ]",
		"trans": "смех, хохот"
	},
	{
		"word": "pay",
		"phn": "[pei]",
		"trans": "платить"
	},
	{
		"word": "fuck",
		"phn": "[fʌk]",
		"trans": "трахать, трахаться"
	},
	{
		"word": "easy",
		"phn": "[‘i:zi]",
		"trans": "лёгкий, легко"
	},
	{
		"word": "west",
		"phn": "[west]",
		"trans": "запад"
	},
	{
		"word": "whisper",
		"phn": "[‘(h)wispə]",
		"trans": "говорить шёпотом, шептать"
	},
	{
		"word": "today",
		"phn": "[tə’dei]",
		"trans": "сегодня"
	},
	{
		"word": "telling",
		"phn": "[‘teliŋ]",
		"trans": "сильный, эффектный"
	},
	{
		"word": "shirt",
		"phn": "[ʃз:t]",
		"trans": "рубашка; блуза; сорочка"
	},
	{
		"word": "ahead",
		"phn": "[ə’hed]",
		"trans": "вперёд; впереди, будущий"
	},
	{
		"word": "till",
		"phn": "[til]",
		"trans": "до, не раньше"
	},
	{
		"word": "walking",
		"phn": "[‘wɔ:kiŋ]",
		"trans": "ходьба, походка"
	},
	{
		"word": "edge",
		"phn": "[edʒ]",
		"trans": "край; грань, граница"
	},
	{
		"word": "empty",
		"phn": "[’empti]",
		"trans": "пустой, полый"
	},
	{
		"word": "quickly",
		"phn": "[‘kwikli]",
		"trans": "быстро, скоро, поспешно"
	},
	{
		"word": "north",
		"phn": "[nɔ:θ]",
		"trans": "север, северный"
	},
	{
		"word": "simply",
		"phn": "[‘simpli]",
		"trans": "легко, просто; несложно"
	},
	{
		"word": "tire",
		"phn": "[‘taiə]",
		"trans": "утомляться, уставать, шина"
	},
	{
		"word": "food",
		"phn": "[fu:d]",
		"trans": "пища, питание; еда"
	},
	{
		"word": "somehow",
		"phn": "[‘sʌmhau]",
		"trans": "как-нибудь, как-то"
	},
	{
		"word": "clock",
		"phn": "[klɔk]",
		"trans": "часы, время"
	},
	{
		"word": "nearly",
		"phn": "[‘niəli]",
		"trans": "близко"
	},
	{
		"word": "bag",
		"phn": "[bæg]",
		"trans": "мешок; сумка"
	},
	{
		"word": "clothes",
		"phn": "[kləuðz]",
		"trans": "одежда, платье"
	},
	{
		"word": "south",
		"phn": "[sauθ]",
		"trans": "юг, южный"
	},
	{
		"word": "american",
		"phn": "[əmerikən]",
		"trans": "американский"
	},
	{
		"word": "unite",
		"phn": "[ju:nait]",
		"trans": "объединять, соединять"
	},
	{
		"word": "pleasure",
		"phn": "[‘plezə]",
		"trans": "удовольствие"
	},
	{
		"word": "river",
		"phn": "[‘rivə]",
		"trans": "река"
	},
	{
		"word": "problem",
		"phn": "[‘prɔbləm]",
		"trans": "проблема; задача"
	},
	{
		"word": "below",
		"phn": "[bi’ləu]",
		"trans": "внизу, ниже"
	},
	{
		"word": "break",
		"phn": "[breik]",
		"trans": "ломать, перерыв, пауза"
	},
	{
		"word": "couple",
		"phn": "[‘kʌpl]",
		"trans": "пара, два, двое"
	},
	{
		"word": "report",
		"phn": "[ri’pɔ:t]",
		"trans": "доклад, рапорт, докладывать"
	},
	{
		"word": "key",
		"phn": "[ki:]",
		"trans": "ключ, клавиша, кнопка"
	},
	{
		"word": "shape",
		"phn": "[ʃeip]",
		"trans": "форма, очертание, вид"
	},
	{
		"word": "within",
		"phn": "[wi’ðin]",
		"trans": "в, внутри"
	},
	{
		"word": "third",
		"phn": "[θз:d]",
		"trans": "третий, треть"
	},
	{
		"word": "anyone",
		"phn": "[‘eniwʌn]",
		"trans": "кто-нибудь, никто"
	},
	{
		"word": "count",
		"phn": "[kaunt]",
		"trans": "вычисление, счёт, считать"
	},
	{
		"word": "quick",
		"phn": "[kwik]",
		"trans": "быстрый, скорый"
	},
	{
		"word": "seven",
		"phn": "[‘sev(ə)n]",
		"trans": "семь"
	},
	{
		"word": "plan",
		"phn": "[plæn]",
		"trans": "план; проект, планировать"
	},
	{
		"word": "tonight",
		"phn": "[tə:nait]",
		"trans": "сегодня вечером, сегодня ночью"
	},
	{
		"word": "path",
		"phn": "[pa:θ]",
		"trans": "тропинка; дорожка, путь"
	},
	{
		"word": "yellow",
		"phn": "[‘jeləu]",
		"trans": "жёлтый"
	},
	{
		"word": "drive",
		"phn": "[draiv]",
		"trans": "ездить; ехать, водить"
	},
	{
		"word": "huge",
		"phn": "[hju:dʒ]",
		"trans": "большой, гигантский"
	},
	{
		"word": "bank",
		"phn": "[bæŋk]",
		"trans": "банк"
	},
	{
		"word": "control",
		"phn": "[kən’trəul]",
		"trans": "управление, контроль"
	},
	{
		"word": "memory",
		"phn": "[‘mem(ə)ri]",
		"trans": "память"
	},
	{
		"word": "working",
		"phn": "[‘wз:kiŋ]",
		"trans": "обработка, работающий"
	},
	{
		"word": "brain",
		"phn": "[brein]",
		"trans": "мозг"
	},
	{
		"word": "goes",
		"phn": "[gəuz]",
		"trans": "идёт"
	},
	{
		"word": "met",
		"phn": "[met]",
		"trans": "встречал, встречался"
	},
	{
		"word": "professor",
		"phn": "[prə’fesə]",
		"trans": "профессор, преподаватель"
	},
	{
		"word": "mine",
		"phn": "[main]",
		"trans": "мой; моя; моё, рудник, мина"
	},
	{
		"word": "wearing",
		"phn": "[‘wɛəriŋ]",
		"trans": "предназначенный для носки"
	},
	{
		"word": "grew",
		"phn": "[gru:]",
		"trans": "рос, вырастил"
	},
	{
		"word": "animal",
		"phn": "[‘ænim(ə)l]",
		"trans": "животное; зверь"
	},
	{
		"word": "glad",
		"phn": "[glæd]",
		"trans": "рад, доволен, счастлив"
	},
	{
		"word": "hurry",
		"phn": "[‘hʌri]",
		"trans": "торопиться, спешить, спешка"
	},
	{
		"word": "silent",
		"phn": "[‘sailənt]",
		"trans": "безмолвный, бесшумный"
	},
	{
		"word": "thirty",
		"phn": "[‘θз:ti]",
		"trans": "тридцать"
	},
	{
		"word": "hardly",
		"phn": "[‘ha:dli]",
		"trans": "едва, еле, насилу"
	},
	{
		"word": "mountain",
		"phn": "[‘mauntin]",
		"trans": "гора"
	},
	{
		"word": "ball",
		"phn": "[bɔ:l]",
		"trans": "мяч, шар, бал, танцы"
	},
	{
		"word": "thin",
		"phn": "[θin]",
		"trans": "тонкий, худой"
	},
	{
		"word": "direction",
		"phn": "[di’rekʃ(ə)n]",
		"trans": "направление, указание"
	},
	{
		"word": "drew",
		"phn": "[dru:]",
		"trans": "рисовал, чертил"
	},
	{
		"word": "ham",
		"phn": "[hæm]",
		"trans": "ветчина, окорок, бедро"
	},
	{
		"word": "important",
		"phn": "[in’pɔ:t(ə)nt]",
		"trans": "важный, значительный"
	},
	{
		"word": "led",
		"phn": "[led]",
		"trans": "прош. вр., прич. прош. вр. от lead"
	},
	{
		"word": "grab",
		"phn": "[græb]",
		"trans": "схватывать, хватать"
	},
	{
		"word": "receive",
		"phn": "[ri’si:v]",
		"trans": "получить"
	},
	{
		"word": "wolf",
		"phn": "[wulf]",
		"trans": "волк"
	},
	{
		"word": "knock",
		"phn": "[nɔk]",
		"trans": "стучать, барабанить"
	},
	{
		"word": "slip",
		"phn": "[slip]",
		"trans": "скользить"
	},
	{
		"word": "loud",
		"phn": "[laud]",
		"trans": "громкий; звучный"
	},
	{
		"word": "brown",
		"phn": "[braun]",
		"trans": "коричневый; бурый"
	},
	{
		"word": "eight",
		"phn": "[eit]",
		"trans": "восемь"
	},
	{
		"word": "wheel",
		"phn": "[(h)wi:l]",
		"trans": "колесо"
	},
	{
		"word": "beautiful",
		"phn": "[‘bju:təful]",
		"trans": "красивый, привлекательный"
	},
	{
		"word": "begin",
		"phn": "[bi’gin]",
		"trans": "начинать, начинаться"
	},
	{
		"word": "hate",
		"phn": "[heit]",
		"trans": "ненависть, ненавидеть"
	},
	{
		"word": "lying",
		"phn": "[‘laiiŋ]",
		"trans": "лживый, ложный"
	},
	{
		"word": "retrieve",
		"phn": "[ri’tri:v]",
		"trans": "отыскать, поиск"
	},
	{
		"word": "secret",
		"phn": "[‘si:krət]",
		"trans": "секрет, тайна"
	},
	{
		"word": "wild",
		"phn": "[waild]",
		"trans": "дикий (о животных); дикорастущий"
	},
	{
		"word": "color",
		"phn": "[‘kʌlə]",
		"trans": "цвет; оттенок"
	},
	{
		"word": "fair",
		"phn": "[fɛə]",
		"trans": "честный, справедливый"
	},
	{
		"word": "east",
		"phn": "[i:st]",
		"trans": "восток"
	},
	{
		"word": "wing",
		"phn": "[wiŋ]",
		"trans": "крыло"
	},
	{
		"word": "main",
		"phn": "[mein]",
		"trans": "главная часть; основное"
	},
	{
		"word": "visit",
		"phn": "[‘vizit]",
		"trans": "посещение, визит"
	},
	{
		"word": "following",
		"phn": "[‘fɔləuiŋ]",
		"trans": "следующий (во времени и в пространстве); последующий"
	},
	{
		"word": "sharp",
		"phn": "[ʃa:p]",
		"trans": "острый, ровно, точно"
	},
	{
		"word": "subject",
		"phn": "[‘sʌbdʒekt]",
		"trans": "тема, предмет разговора"
	},
	{
		"word": "understood",
		"phn": "[ʌndə’stud]",
		"trans": "прош. вр., прич. прош. вр. от understand"
	},
	{
		"word": "lake",
		"phn": "[leik]",
		"trans": "озеро"
	},
	{
		"word": "page",
		"phn": "[peidʒ]",
		"trans": "лист, страница"
	},
	{
		"word": "skin",
		"phn": "[skin]",
		"trans": "кожа, мех, шкура"
	},
	{
		"word": "station",
		"phn": "[‘steiʃ(ə)n]",
		"trans": "пункт, станция"
	},
	{
		"word": "study",
		"phn": "[‘stʌdi]",
		"trans": "учёба, изучение"
	},
	{
		"word": "spring",
		"phn": "[spriŋ]",
		"trans": "весна, прыгать, скакать"
	},
	{
		"word": "account",
		"phn": "[ə’kaunt]",
		"trans": "счёт (в банке)"
	},
	{
		"word": "building",
		"phn": "[‘bildiŋ]",
		"trans": "здание, постройка, сооружение"
	},
	{
		"word": "desk",
		"phn": "[desk]",
		"trans": "письменный, рабочий стол, парта"
	},
	{
		"word": "hung",
		"phn": "[hʌŋ]",
		"trans": "прош. вр., прич. прош. вр. от hang"
	},
	{
		"word": "fifty",
		"phn": "[‘fifti]",
		"trans": "пятьдесят"
	},
	{
		"word": "gold",
		"phn": "[gəuld]",
		"trans": "золото"
	},
	{
		"word": "neither",
		"phn": "[naiðə]",
		"trans": "никакой, ни тот, ни другой"
	},
	{
		"word": "send",
		"phn": "[send]",
		"trans": "посылать, отправлять"
	},
	{
		"word": "stick",
		"phn": "[stik]",
		"trans": "палка; прут, трость"
	},
	{
		"word": "straight",
		"phn": "[streit]",
		"trans": "прямой, честный, прямо"
	},
	{
		"word": "darkness",
		"phn": "[‘da:knəs]",
		"trans": "темнота, мрак; ночь"
	},
	{
		"word": "experience",
		"phn": "[ik’spiəriən(t)s]",
		"trans": "опыт, случай, событие"
	},
	{
		"word": "bar",
		"phn": "[ba:]",
		"trans": "брусок, кусок, планка, бар, прилавок"
	},
	{
		"word": "imagine",
		"phn": "[i’mædʒin]",
		"trans": "воображать, представлять себе"
	},
	{
		"word": "ship",
		"phn": "[ʃip]",
		"trans": "корабль; судно"
	},
	{
		"word": "thus",
		"phn": "[ðʌs]",
		"trans": "так, таким образом"
	},
	{
		"word": "forget",
		"phn": "[fə’get]",
		"trans": "забывать о (чём-л.)"
	},
	{
		"word": "nine",
		"phn": "[nain]",
		"trans": "девять"
	},
	{
		"word": "agree",
		"phn": "[ə’gri:]",
		"trans": "соглашаться"
	},
	{
		"word": "gotten",
		"phn": "[‘gɔtn]",
		"trans": "прич. прош. вр. от get"
	},
	{
		"word": "interior",
		"phn": "[in’tiəriə]",
		"trans": "внутренняя часть, внутренний"
	},
	{
		"word": "rain",
		"phn": "[rein]",
		"trans": "дождь"
	},
	{
		"word": "block",
		"phn": "[blɔk]",
		"trans": "квартал (города), заграждать, преграждать"
	},
	{
		"word": "fix",
		"phn": "[fiks]",
		"trans": "устанавливать; прикреплять"
	},
	{
		"word": "turning",
		"phn": "[‘tз:niŋ]",
		"trans": "отклонение, изменение, поворот"
	},
	{
		"word": "warm",
		"phn": "[wɔ:m]",
		"trans": "тёплый"
	},
	{
		"word": "whether",
		"phn": "[‘(h)weðə]",
		"trans": "ли, любой из двух"
	},
	{
		"word": "dinner",
		"phn": "[‘dinə]",
		"trans": "обед, обедать"
	},
	{
		"word": "somewhere",
		"phn": "[‘sʌmwɛə]",
		"trans": "где-то, где-нибудь; куда-нибудь"
	},
	{
		"word": "space",
		"phn": "[speis]",
		"trans": "пространство"
	},
	{
		"word": "chest",
		"phn": "[tʃest]",
		"trans": "ящик; коробка, сундук"
	},
	{
		"word": "write",
		"phn": "[rait]",
		"trans": "писать, выписывать"
	},
	{
		"word": "rich",
		"phn": "[ritʃ]",
		"trans": "богатый, состоятельный"
	},
	{
		"word": "pause",
		"phn": "[pɔ:z]",
		"trans": "пауза, перерыв; остановка"
	},
	{
		"word": "single",
		"phn": "[‘siŋgl]",
		"trans": "один; единственный"
	},
	{
		"word": "yard",
		"phn": "[ja:d]",
		"trans": "ярд"
	},
	{
		"word": "further",
		"phn": "[‘fз:ðə]",
		"trans": "дальнейший, добавочный, дальше"
	},
	{
		"word": "leaving",
		"phn": "[liviŋ]",
		"trans": "предоставление"
	},
	{
		"word": "soft",
		"phn": "[sɔft]",
		"trans": "мягкий"
	},
	{
		"word": "allow",
		"phn": "[ə’lau]",
		"trans": "позволять, разрешать"
	},
	{
		"word": "onto",
		"phn": "[‘ɔntu:]",
		"trans": "на; в"
	},
	{
		"word": "pale",
		"phn": "[peil]",
		"trans": "бледный, бледнеть"
	},
	{
		"word": "tie",
		"phn": "[tai]",
		"trans": "галстук, узел; бант"
	},
	{
		"word": "beginning",
		"phn": "[bi’giniŋ]",
		"trans": "начало"
	},
	{
		"word": "ought",
		"phn": "[ɔ:t]",
		"trans": "выражает долженствование"
	},
	{
		"word": "stare",
		"phn": "[stɛə]",
		"trans": "вглядываться; уставиться"
	},
	{
		"word": "doctor",
		"phn": "[‘dɔktə]",
		"trans": "врач, доктор"
	},
	{
		"word": "sweet",
		"phn": "[swi:t]",
		"trans": "сладкий, приятный, милый"
	},
	{
		"word": "grin",
		"phn": "[grin]",
		"trans": "скалить зубы, ухмыляться"
	},
	{
		"word": "escape",
		"phn": "[es’keip]",
		"trans": "бегство; побег, убежать"
	},
	{
		"word": "press",
		"phn": "[pres]",
		"trans": "жать, нажимать, печать, пресса"
	},
	{
		"word": "general",
		"phn": "[‘dʒen(ə)r(ə)l]",
		"trans": "главный, основной, генеральный, генерал"
	},
	{
		"word": "shout",
		"phn": "[ʃaut]",
		"trans": "кричать, возглас, крик"
	},
	{
		"word": "aware",
		"phn": "[ə’wɛə]",
		"trans": "знающий, осведомлённый"
	},
	{
		"word": "consider",
		"phn": "[kən’sidə]",
		"trans": "рассматривать, думать, полагать"
	},
	{
		"word": "grey",
		"phn": "[grei]",
		"trans": "серый, седой, пасмурный"
	},
	{
		"word": "card",
		"phn": "[ka:d]",
		"trans": "карта, карточка"
	},
	{
		"word": "cloud",
		"phn": "[klaud]",
		"trans": "облако; туча"
	},
	{
		"word": "spot",
		"phn": "[spɔt]",
		"trans": "пятно, пятнышко; крапинка"
	},
	{
		"word": "situation",
		"phn": "[sitʃu’eiʃ(ə)n]",
		"trans": "обстановка, положение, ситуация, место"
	},
	{
		"word": "board",
		"phn": "[bɔ:d]",
		"trans": "доска; планка"
	},
	{
		"word": "clean",
		"phn": "[kli:n]",
		"trans": "чистый, опрятный"
	},
	{
		"word": "truth",
		"phn": "[tru:θ]",
		"trans": "правда; истина"
	},
	{
		"word": "explain",
		"phn": "[ik’splein]",
		"trans": "объяснять; раскрывать"
	},
	{
		"word": "lower",
		"phn": "[‘ləuə]",
		"trans": "нижний, низший"
	},
	{
		"word": "machine",
		"phn": "[mə’ʃi:n]",
		"trans": "машина, механизм; станок"
	},
	{
		"word": "post",
		"phn": "[pəust]",
		"trans": "почта, корреспонденция, пост"
	},
	{
		"word": "view",
		"phn": "[vju:]",
		"trans": "вид; пейзаж, точка зрения, мнение"
	},
	{
		"word": "project",
		"phn": "[‘prɔdʒekt]",
		"trans": "проект, замысел, план"
	},
	{
		"word": "bottle",
		"phn": "[‘bɔtl]",
		"trans": "бутылка, бутыль"
	},
	{
		"word": "broke",
		"phn": "[brəuk]",
		"trans": "ломал, разбивал, крушил"
	},
	{
		"word": "position",
		"phn": "[pə’ziʃ(ə)n]",
		"trans": "положение, местоположение"
	},
	{
		"word": "sea",
		"phn": "[si:]",
		"trans": "море"
	},
	{
		"word": "field",
		"phn": "[fi:ld]",
		"trans": "поле; луг"
	},
	{
		"word": "fresh",
		"phn": "[freʃ]",
		"trans": "свежий, натуральный"
	},
	{
		"word": "join",
		"phn": "[dʒɔin]",
		"trans": "соединять, объединять, присоединяться"
	},
	{
		"word": "worse",
		"phn": "[wз:s]",
		"trans": "хуже, худшее"
	},
	{
		"word": "fly",
		"phn": "[flai]",
		"trans": "муха, полёт"
	},
	{
		"word": "offer",
		"phn": "[‘ɔfə]",
		"trans": "предлагать"
	},
	{
		"word": "rush",
		"phn": "[rʌʃ]",
		"trans": "бросаться, мчаться, нестись, бросок, напор"
	},
	{
		"word": "safe",
		"phn": "[seif]",
		"trans": "безопасный, сейф"
	},
	{
		"word": "jump",
		"phn": "[dʒʌmp]",
		"trans": "прыгать, скакать"
	},
	{
		"word": "smiling",
		"phn": "[smailiŋ]",
		"trans": "улыбается"
	},
	{
		"word": "track",
		"phn": "[træk]",
		"trans": "след, отпечаток, курс, путь"
	},
	{
		"word": "bone",
		"phn": "[bəun]",
		"trans": "кость"
	},
	{
		"word": "murder",
		"phn": "[‘mз:də]",
		"trans": "убийство"
	},
	{
		"word": "creature",
		"phn": "[‘kri:tʃə]",
		"trans": "создание, творение"
	},
	{
		"word": "growing",
		"phn": "[‘grəuiŋ]",
		"trans": "рост, выращивание"
	},
	{
		"word": "monster",
		"phn": "[‘mɔn(t)stə]",
		"trans": "чудовище; изверг, монстр"
	},
	{
		"word": "system",
		"phn": "[‘sistəm]",
		"trans": "система, устройство"
	},
	{
		"word": "beat",
		"phn": "[bi:t]",
		"trans": "бить, колотить, удар"
	},
	{
		"word": "funny",
		"phn": "[‘fʌni]",
		"trans": "забавный, смешной"
	},
	{
		"word": "hospital",
		"phn": "[‘hɔspit(ə)l]",
		"trans": "больница, госпиталь"
	},
	{
		"word": "playing",
		"phn": "[pleiŋ]",
		"trans": "играющий, игральный"
	},
	{
		"word": "service",
		"phn": "[‘sз:vis]",
		"trans": "служба, обслуживание, сервис"
	},
	{
		"word": "common",
		"phn": "[‘kɔmən]",
		"trans": "общий, всеобщий"
	},
	{
		"word": "giving",
		"phn": "[giviŋ]",
		"trans": "дающий, давая"
	},
	{
		"word": "sudden",
		"phn": "[‘sʌd(ə)n]",
		"trans": "внезапный, внезапно"
	},
	{
		"word": "usually",
		"phn": "[‘ju:ʒ(ə)li]",
		"trans": "обычно, обыкновенно"
	},
	{
		"word": "settle",
		"phn": "[‘setl]",
		"trans": "поселиться, обосноваться"
	},
	{
		"word": "slow",
		"phn": "[sləu]",
		"trans": "медленный, тихий"
	},
	{
		"word": "threw",
		"phn": "[θru:]",
		"trans": "бросал, кидал"
	},
	{
		"word": "train",
		"phn": "[trein]",
		"trans": "тренироваться, поезд, состав"
	},
	{
		"word": "unless",
		"phn": "[ʌn’les]",
		"trans": "если не; пока не"
	},
	{
		"word": "ass",
		"phn": "[æs]",
		"trans": "зад, задница, жопа"
	},
	{
		"word": "beneath",
		"phn": "[bi’ni:θ]",
		"trans": "внизу; ниже"
	},
	{
		"word": "discover",
		"phn": "[di’skʌvə]",
		"trans": "обнаруживать, находить"
	},
	{
		"word": "tomorrow",
		"phn": "[tə’mɔrəu]",
		"trans": "завтра"
	},
	{
		"word": "bear",
		"phn": "[bɛə]",
		"trans": "носить, нести, медведь"
	},
	{
		"word": "cool",
		"phn": "[ku:l]",
		"trans": "прохладный, свежий, крутой, клёвый"
	},
	{
		"word": "alive",
		"phn": "[ə’laiv]",
		"trans": "живой, в живых"
	},
	{
		"word": "crowd",
		"phn": "[kraud]",
		"trans": "толпа, давить, толкать"
	},
	{
		"word": "quarter",
		"phn": "[‘kwɔ:tə]",
		"trans": "четверть, четвёртая часть"
	},
	{
		"word": "written",
		"phn": "[‘rit(ə)n]",
		"trans": "прич. прош. вр. от write"
	},
	{
		"word": "distance",
		"phn": "[‘dist(ə)n(t)s]",
		"trans": "расстояние; дистанция"
	},
	{
		"word": "laid",
		"phn": "[leid]",
		"trans": "прош. вр., прич. прош. вр. от lay"
	},
	{
		"word": "hat",
		"phn": "[hæt]",
		"trans": "шляпа, шляпка; шапка"
	},
	{
		"word": "trust",
		"phn": "[trʌst]",
		"trans": "вера, доверие, надежда"
	},
	{
		"word": "beauty",
		"phn": "[‘bju:ti]",
		"trans": "красота"
	},
	{
		"word": "tongue",
		"phn": "[tʌŋ]",
		"trans": "язык"
	},
	{
		"word": "arrive",
		"phn": "[ə’raiv]",
		"trans": "прибывать, приезжать"
	},
	{
		"word": "center",
		"phn": "[‘sentə]",
		"trans": "центр"
	},
	{
		"word": "drove",
		"phn": "[grəuv]",
		"trans": "ездил, вёз, гнал"
	},
	{
		"word": "dare",
		"phn": "[dɛə]",
		"trans": "осмеливаться, сметь"
	},
	{
		"word": "merry",
		"phn": "[‘meri]",
		"trans": "весёлый; радостный"
	},
	{
		"word": "moon",
		"phn": "[mu:n]",
		"trans": "луна, спутник (планеты)"
	},
	{
		"word": "circle",
		"phn": "[‘sз:kl]",
		"trans": "круг, круговорот; цикл"
	},
	{
		"word": "leader",
		"phn": "[‘li:də]",
		"trans": "руководитель, глава, лидер"
	},
	{
		"word": "conversation",
		"phn": "[kɔnvə’seiʃ(ə)n]",
		"trans": "разговор, беседа"
	},
	{
		"word": "expression",
		"phn": "[ik’spreʃ(ə)n]",
		"trans": "выражение"
	},
	{
		"word": "guard",
		"phn": "[ga:d]",
		"trans": "охрана, защита"
	},
	{
		"word": "truck",
		"phn": "[trʌk]",
		"trans": "грузовик, обмен, обменивать"
	},
	{
		"word": "effort",
		"phn": "[‘efət]",
		"trans": "усилие, попытка; напряжение"
	},
	{
		"word": "fight",
		"phn": "[fait]",
		"trans": "драться, сражаться, бой, борьба"
	},
	{
		"word": "reading",
		"phn": "[‘ri:diŋ]",
		"trans": "чтение"
	},
	{
		"word": "group",
		"phn": "[gru:p]",
		"trans": "группа; группировка, фракция"
	},
	{
		"word": "mention",
		"phn": "[‘menʃ(ə)n]",
		"trans": "упоминание; ссылка"
	},
	{
		"word": "forth",
		"phn": "[fɔ:θ]",
		"trans": "вперёд, дальше, впредь"
	},
	{
		"word": "haven",
		"phn": "[‘heiv(ə)n]",
		"trans": "гавань, порт, убежище, укрытие"
	},
	{
		"word": "strength",
		"phn": "[streŋθ]",
		"trans": "сила"
	},
	{
		"word": "gate",
		"phn": "[geit]",
		"trans": "ворота; дверь, калитка"
	},
	{
		"word": "radio",
		"phn": "[‘reidiəu]",
		"trans": "радио, радиовещание"
	},
	{
		"word": "sick",
		"phn": "[sik]",
		"trans": "больной, болезненный; нездоровый"
	},
	{
		"word": "mad",
		"phn": "[mæd]",
		"trans": "сумасшедший, ненормальный"
	},
	{
		"word": "writing",
		"phn": "[‘raitiŋ]",
		"trans": "письмо, писание"
	},
	{
		"word": "library",
		"phn": "[‘laibr(ə)ri]",
		"trans": "библиотека"
	},
	{
		"word": "music",
		"phn": "[‘mju:zik]",
		"trans": "музыка"
	},
	{
		"word": "paid",
		"phn": "[peid]",
		"trans": "платил, заплатил"
	},
	{
		"word": "immediately",
		"phn": "[i’mi:diətli]",
		"trans": "прямо, непосредственно"
	},
	{
		"word": "tall",
		"phn": "[tɔ:l]",
		"trans": "высокий"
	},
	{
		"word": "action",
		"phn": "[‘ækʃ(ə)n]",
		"trans": "действие, поступок; акция"
	},
	{
		"word": "evil",
		"phn": "[‘i:vil]",
		"trans": "зло; вред; убыток, ущерб"
	},
	{
		"word": "wet",
		"phn": "[wet]",
		"trans": "мокрый, влажный"
	},
	{
		"word": "concern",
		"phn": "[kən’sз:n]",
		"trans": "проблема; вопрос, интерес"
	},
	{
		"word": "dad",
		"phn": "[dæd]",
		"trans": "папа, папочка"
	},
	{
		"word": "especially",
		"phn": "[is’peʃ(ə)li]",
		"trans": "особенно, в особенности"
	},
	{
		"word": "purpose",
		"phn": "[‘pз:pəs]",
		"trans": "цель, намерение"
	},
	{
		"word": "enemy",
		"phn": "[‘enəmi]",
		"trans": "враг, вражеский"
	},
	{
		"word": "special",
		"phn": "[‘spe?(?)l]",
		"trans": "особый, особенный, специальный"
	},
	{
		"word": "boss",
		"phn": "[bɔs]",
		"trans": "хозяин, шеф, босс"
	},
	{
		"word": "likely",
		"phn": "[‘laikli]",
		"trans": "вероятный, возможный, вероятно"
	},
	{
		"word": "soul",
		"phn": "[səul]",
		"trans": "душа; сердце"
	},
	{
		"word": "speaking",
		"phn": "[‘spi:kiŋ]",
		"trans": "беседа, разговор, говорящий"
	},
	{
		"word": "spirit",
		"phn": "[‘spirit]",
		"trans": "дух, привидение"
	},
	{
		"word": "boat",
		"phn": "[bəut]",
		"trans": "лодка; шлюпка"
	},
	{
		"word": "cigarette",
		"phn": "[sig(ə)’ret]",
		"trans": "сигарета; папироса"
	},
	{
		"word": "faint",
		"phn": "[feint]",
		"trans": "слабый, ослабевший; вялый"
	},
	{
		"word": "perfect",
		"phn": "[‘pз:fikt]",
		"trans": "совершенный, безупречный"
	},
	{
		"word": "enjoy",
		"phn": "[in’dʒɔi]",
		"trans": "наслаждаться"
	},
	{
		"word": "flat",
		"phn": "[flæt]",
		"trans": "плоский, плоскость, квартира"
	},
	{
		"word": "blow",
		"phn": "[bləu]",
		"trans": "веять, дуть, дуновение"
	},
	{
		"word": "forty",
		"phn": "[‘fɔ:ti]",
		"trans": "сорок"
	},
	{
		"word": "simple",
		"phn": "[‘simpl]",
		"trans": "несложный, простой, лёгкий"
	},
	{
		"word": "dozen",
		"phn": "[‘dʌz(ə)n]",
		"trans": "дюжина"
	},
	{
		"word": "hello",
		"phn": "[‘he’ləu]",
		"trans": "привет! алло!"
	},
	{
		"word": "self",
		"phn": "[self]",
		"trans": "собственная личность, своё «я»"
	},
	{
		"word": "everybody",
		"phn": "[‘evribɔdi]",
		"trans": "каждый, всякий человек; все"
	},
	{
		"word": "flash",
		"phn": "[flæʃ]",
		"trans": "вспышка, сверкание"
	},
	{
		"word": "gain",
		"phn": "[gein]",
		"trans": "добывать, зарабатывать"
	},
	{
		"word": "shock",
		"phn": "[ʃɔk]",
		"trans": "потрясение, удар; шок"
	},
	{
		"word": "charge",
		"phn": "[tʃa:dʒ]",
		"trans": "заряжать"
	},
	{
		"word": "danger",
		"phn": "[‘deindʒə]",
		"trans": "опасность"
	},
	{
		"word": "impossible",
		"phn": "[im’pɔsədl]",
		"trans": "невозможный, невыполнимый"
	},
	{
		"word": "hi",
		"phn": "[hai]",
		"trans": "здорово!, привет!"
	},
	{
		"word": "million",
		"phn": "[‘miljən]",
		"trans": "миллион"
	},
	{
		"word": "pack",
		"phn": "[pæk]",
		"trans": "пачка, упаковывать, запаковывать"
	},
	{
		"word": "thoracic",
		"phn": "[θɔ’rasik]",
		"trans": "грудной"
	},
	{
		"word": "knowing",
		"phn": "[‘nəuiŋ]",
		"trans": "знание, осведомлённость"
	},
	{
		"word": "public",
		"phn": "[‘rʌblik]",
		"trans": "общественный; государственный, публика"
	},
	{
		"word": "stream",
		"phn": "[stri:m]",
		"trans": "поток, река, ручей"
	},
	{
		"word": "han",
		"phn": "[hæn]",
		"trans": "китаец; китаянка"
	},
	{
		"word": "mostly",
		"phn": "[‘məustli]",
		"trans": "главным образом, по большей части"
	},
	{
		"word": "shoe",
		"phn": "[ʃu:]",
		"trans": "туфля; полуботинок"
	},
	{
		"word": "eating",
		"phn": "[‘i:tiŋ]",
		"trans": "принятие пищи; еда, едящий"
	},
	{
		"word": "flower",
		"phn": "[‘flauə]",
		"trans": "цветок"
	},
	{
		"word": "grass",
		"phn": "[gra:s]",
		"trans": "трава, травинка; дёрн"
	},
	{
		"word": "history",
		"phn": "[‘hist(ə)ri]",
		"trans": "история"
	},
	{
		"word": "prove",
		"phn": "[pru:v]",
		"trans": "доказывать"
	},
	{
		"word": "song",
		"phn": "[sɔŋ]",
		"trans": "песня; романс"
	},
	{
		"word": "affair",
		"phn": "[ə’fзə]",
		"trans": "дело, событие, мероприятие"
	},
	{
		"word": "carefully",
		"phn": "[‘kзəfuli]",
		"trans": "тщательно, внимательно"
	},
	{
		"word": "natural",
		"phn": "[nætʃ(ə)r(ə)l]",
		"trans": "естественный, природный, натуральный"
	},
	{
		"word": "thick",
		"phn": "[θik]",
		"trans": "толстый; полный"
	},
	{
		"word": "manage",
		"phn": "[‘mænidʒ]",
		"trans": "руководить, управлять"
	},
	{
		"word": "marriage",
		"phn": "[‘mæridʒ]",
		"trans": "брак, супружество; замужество"
	},
	{
		"word": "spent",
		"phn": "[spent]",
		"trans": "прош. вр., прич. прош. вр. от spend"
	},
	{
		"word": "art",
		"phn": "[a:t]",
		"trans": "искусство"
	},
	{
		"word": "easily",
		"phn": "[‘i:zili]",
		"trans": "легко; свободно"
	}
]