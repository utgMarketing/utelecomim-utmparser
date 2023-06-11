# Description
UTM parser
# NPM
```text
npm i utelecomim-utmparser
```

# CDN

```js
<script src="https://cdn.jsdelivr.net/gh/utgMarketing/utelecomim-utmparser@1.0.1/library.min.js"></script>
```

# Usage
```js

import UtmParser from "utelecomim-utmparser";

window.UtmParser // with CDN

UtmParser.init(); // начинает сохранять utm метки в localStorage

// https://site.com/?utm_source=source&utm_term=test
// даже если позже юзер переходит на любой другой url сайта уже без меток в ссылке,
// то utm метки из ссылки по которой он перешел в первый раз, сохраняется, и их можно получить

// получение меток
console.log(UtmParser.getUtmCampaign());
console.log(UtmParser.getUtmContent());
console.log(UtmParser.getUtmTerm());
console.log(UtmParser.getUtmMedium());
console.log(UtmParser.getUtmSource());

// метки хранятся неограниченное время в localStorage, при переходе по url с новыми utm метками, они будут перезаписаны

// если необходимо сформировать url для удаления метки, или всех меток, можно оставить параметры меток пустыми
// https://site.com/?utm_source=&utm_term=&utm_campaign=&utm_medium=&utm_content=
// https://site.com/?utm_content=






```




