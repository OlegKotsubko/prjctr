const mockData = {
  title: 'Title',
  description: '<div class="styles_block__3XTb8"><button onclick=alert("Click")>click me</button><div><p><span style="color: #010e28;"><strong>WePlay Esports</strong> is happy to announce the talent crew of the official Russian-language broadcast of the <strong>PGL Major Stockholm 2021</strong>. The team will be working from the WePlay Esports studio during all the tournament stages, from October 26 till November 7. </span></p>\n' +
    '<div class="u-text-block">\n' +
    '<p data-block-key="mdw11"><span>Host:</span></p>\n' +
    '<ul>\n' +
    '<li data-block-key="8uf0q">Stepan “<strong>DonStepan</strong>” Shulga (<a rel="nofollow noopener" href="https://twitter.com/DonStepan">Twitter</a>)</li>\n' +
    '</ul>\n' +
    '<p data-block-key="6imjm"><span>Commentators:</span></p>\n' +
    '<ul>\n' +
    '<li data-block-key="5nm7v">Oleksii “<strong>yXo</strong>” Maletskyi (<a rel="nofollow noopener" href="https://twitter.com/yxo7">Twitter</a>)</li>\n' +
    '<li data-block-key="1s6c4">Aleksandr “<strong>Enkanis</strong>” Polishchuk (<a rel="nofollow noopener" href="https://twitter.com/OfficialEnkanis">Twitter</a>)</li>\n' +
    '<li data-block-key="tdvc">Yuriy “<strong>Strike</strong>” Tereshchenko (<a rel="nofollow noopener" href="https://twitter.com/unclestrike">Twitter</a>)</li>\n' +
    '<li data-block-key="ktsq">Igor “<strong>SL4M</strong>” Sopov (<a rel="nofollow noopener" href="https://twitter.com/sL4Mtv">Twitter</a>)</li>\n' +
    '<li data-block-key="du3o">Taufik “<strong>Tafa</strong>” Khidri (<a rel="nofollow noopener" href="https://twitter.com/tafatv">Twitter</a>)</li>\n' +
    '<li data-block-key="76i00">Fedir “<strong>KvaN</strong>” Zakharov (<a rel="nofollow noopener" href="https://twitter.com/__KvaN">Twitter</a>)</li>\n' +
    '</ul>\n' +
    '<p data-block-key="a54t5"><span>Analysts:</span></p>\n' +
    '<ul>\n' +
    '<li data-block-key="5p6sv">Dauren “<strong>AdreN</strong>” Kystaubayev (<a rel="nofollow noopener" href="https://twitter.com/AdreNcs">Twitter</a>)</li>\n' +
    '<li data-block-key="an2na">Oleksandr “<strong>petr1k</strong>” Petryk (<a rel="nofollow noopener" href="https://twitter.com/petr1k_tv">Twitter</a>)</li>\n' +
    '<li data-block-key="eifha">Mykhailo “<strong>kane</strong>” Blagin (<a rel="nofollow noopener" href="https://twitter.com/navi_kane">Twitter</a>)</li>\n' +
    '<li data-block-key="6fsui">Mikhail “<strong>Dosia</strong>” Stolyarov (<a rel="nofollow noopener" href="https://twitter.com/XGodDosia">Twitter</a>)</li>\n' +
    '</ul>\n' +
    '<p><span style="color: #010e28;">The first CS:GO major tournament in two years will be held in Stockholm. The total prize pool of the competition is $2 million.</span></p>\n' +
    '</div></div></div>',
  rawTextFromHTML: 'click me     WePlay Esports  is happy to announce the talent crew of the official Russian-language broadcast of the  PGL Major Stockholm 2021 . The team will be working from the WePlay Esports studio during all the tournament stages, from October 26 till November 7.   \n' +
    ' \n' +
    '  Host:  \n' +
    '  q\n' +
    ' Stepan “ DonStepan ” Shulga ( Twitter ) \n' +
    ' \n' +
    '  Commentators:  \n' +
    ' \n' +
    ' Oleksii “ yXo ” Maletskyi ( Twitter ) \n' +
    ' Aleksandr “ Enkanis ” Polishchuk ( Twitter ) \n' +
    ' Yuriy “ Strike ” Tereshchenko ( Twitter ) \n' +
    ' Igor “ SL4M ” Sopov ( Twitter ) \n' +
    ' Taufik “ Tafa ” Khidri ( Twitter ) \n' +
    ' Fedir “ KvaN ” Zakharov ( Twitter ) \n' +
    ' \n' +
    '  Analysts:  \n' +
    ' \n' +
    ' Dauren “ AdreN ” Kystaubayev ( Twitter ) \n' +
    ' Oleksandr “ petr1k ” Petryk ( Twitter ) \n' +
    ' Mykhailo “ kane ” Blagin ( Twitter ) \n' +
    ' Mikhail “ Dosia ” Stolyarov ( Twitter ) \n' +
    ' \n' +
    '  The first CS:GO major tournament in two years will be held in Stockholm. The total prize pool of the competition is $2 million.',
  sanitizedHTML: '<div class="styles_block__3XTb8"><button>click me</button><div><p><span style="color: #010e28;"><strong>WePlay Esports</strong> is happy to announce the talent crew of the official Russian-language broadcast of the <strong>PGL Major Stockholm 2021</strong>. The team will be working from the WePlay Esports studio during all the tournament stages, from October 26 till November 7. </span></p>\n' +
    '<div class="u-text-block">\n' +
    '<p data-block-key="mdw11"><span>Host:</span></p>\n' +
    '<ul>\n' +
    '<li data-block-key="8uf0q">Stepan “<strong>DonStepan</strong>” Shulga (<a rel="nofollow noopener" href="https://twitter.com/DonStepan">Twitter</a>)</li>\n' +
    '</ul>\n' +
    '<p data-block-key="6imjm"><span>Commentators:</span></p>\n' +
    '<ul>\n' +
    '<li data-block-key="5nm7v">Oleksii “<strong>yXo</strong>” Maletskyi (<a rel="nofollow noopener" href="https://twitter.com/yxo7">Twitter</a>)</li>\n' +
    '<li data-block-key="1s6c4">Aleksandr “<strong>Enkanis</strong>” Polishchuk (<a rel="nofollow noopener" href="https://twitter.com/OfficialEnkanis">Twitter</a>)</li>\n' +
    '<li data-block-key="tdvc">Yuriy “<strong>Strike</strong>” Tereshchenko (<a rel="nofollow noopener" href="https://twitter.com/unclestrike">Twitter</a>)</li>\n' +
    '<li data-block-key="ktsq">Igor “<strong>SL4M</strong>” Sopov (<a rel="nofollow noopener" href="https://twitter.com/sL4Mtv">Twitter</a>)</li>\n' +
    '<li data-block-key="du3o">Taufik “<strong>Tafa</strong>” Khidri (<a rel="nofollow noopener" href="https://twitter.com/tafatv">Twitter</a>)</li>\n' +
    '<li data-block-key="76i00">Fedir “<strong>KvaN</strong>” Zakharov (<a rel="nofollow noopener" href="https://twitter.com/__KvaN">Twitter</a>)</li>\n' +
    '</ul>\n' +
    '<p data-block-key="a54t5"><span>Analysts:</span></p>\n' +
    '<ul>\n' +
    '<li data-block-key="5p6sv">Dauren “<strong>AdreN</strong>” Kystaubayev (<a rel="nofollow noopener" href="https://twitter.com/AdreNcs">Twitter</a>)</li>\n' +
    '<li data-block-key="an2na">Oleksandr “<strong>petr1k</strong>” Petryk (<a rel="nofollow noopener" href="https://twitter.com/petr1k_tv">Twitter</a>)</li>\n' +
    '<li data-block-key="eifha">Mykhailo “<strong>kane</strong>” Blagin (<a rel="nofollow noopener" href="https://twitter.com/navi_kane">Twitter</a>)</li>\n' +
    '<li data-block-key="6fsui">Mikhail “<strong>Dosia</strong>” Stolyarov (<a rel="nofollow noopener" href="https://twitter.com/XGodDosia">Twitter</a>)</li>\n' +
    '</ul>\n' +
    '<p><span style="color: #010e28;">The first CS:GO major tournament in two years will be held in Stockholm. The total prize pool of the competition is $2 million.</span></p>\n' +
    '</div></div></div>',
  id: 0
}
export default mockData;
