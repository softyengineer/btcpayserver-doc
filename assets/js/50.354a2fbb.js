(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{541:function(t,e,o){"use strict";o.r(e);var a=o(26),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"altcoins-frequently-asked-questions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#altcoins-frequently-asked-questions"}},[t._v("#")]),t._v(" Altcoins Frequently Asked Questions")]),t._v(" "),o("p",[t._v("This page answers some of the common questions about alternative cryptocurrencies - altcoins.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Altcoin.html#which-coins-btcpay-server-supports"}},[t._v("Which coins BTCPay Server supports?")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Altcoin.html#can-an-xyz-coin-be-added-in-btcpay"}},[t._v("Can an XYZ coin be added in BTCPay?")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Altcoin.html#how-to-add-an-altcoin-in-btcpay"}},[t._v("How to add an altcoin in BTCPay?")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Altcoin.html#how-to-add-an-altcoin-to-an-existing-btcpay-deployment"}},[t._v("How to add an altcoin to an existing BTCPay deployment?")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Altcoin.html#how-to-remove-a-coin-from-btcpay"}},[t._v("How to remove a coin from BTCPay?")])],1)]),t._v(" "),o("h2",{attrs:{id:"which-coins-btcpay-server-supports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#which-coins-btcpay-server-supports"}},[t._v("#")]),t._v(" Which coins BTCPay Server supports?")]),t._v(" "),o("p",[t._v("Bitcoin is the only focus of the project and its core developers. However, opt in integrations are present for several altcoins:")]),t._v(" "),o("ul",[o("li",[t._v("BGold (BTG) (also known as Bitcoin Gold)")]),t._v(" "),o("li",[t._v("BPlus (XBC) (also known as Bitcoin Plus)")]),t._v(" "),o("li",[t._v("Bitcore (BTX)")]),t._v(" "),o("li",[t._v("Dash (DASH)")]),t._v(" "),o("li",[t._v("Dogecoin (DOGE)")]),t._v(" "),o("li",[t._v("Feathercoin (FTC)")]),t._v(" "),o("li",[t._v("Groestlcoin (GRS)")]),t._v(" "),o("li",[t._v("Liquid Bitcoin (LBTC) (comes with Liquid Tether support USDt) "),o("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues/1282",target:"_blank",rel:"noopener noreferrer"}},[t._v("(notes on deployment & usage)"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Litecoin (LTC)")]),t._v(" "),o("li",[t._v("Monacoin (MONA)")]),t._v(" "),o("li",[t._v("Monero (XMR) "),o("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/issues/204#issuecomment-552755422",target:"_blank",rel:"noopener noreferrer"}},[t._v("(notes on deployment)"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Polis (POLIS)")]),t._v(" "),o("li",[t._v("Viacoin (VIA)")])]),t._v(" "),o("p",[t._v("Altcoins are maintained by their respective communities.")]),t._v(" "),o("h2",{attrs:{id:"can-an-xyz-coin-be-added-in-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#can-an-xyz-coin-be-added-in-btcpay"}},[t._v("#")]),t._v(" Can an XYZ coin be added in BTCPay?")]),t._v(" "),o("p",[t._v("No. BTCPay developers don't add alternative coins on request. Adding a new coin explicitly depends on the community and developers of those coins. Furthermore, BTCPay developers do not spend excessive time testing nor maintaining the altcoins. If you're submitting a PR for a new coin, make sure that it works. If the altcoin integration is not actively maintained it will be removed from BTCPay.")]),t._v(" "),o("h2",{attrs:{id:"how-to-add-an-altcoin-in-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-an-altcoin-in-btcpay"}},[t._v("#")]),t._v(" How to add an altcoin in BTCPay?")]),t._v(" "),o("p",[t._v("To add a new coin to BTCPay, please "),o("RouterLink",{attrs:{to:"/Altcoins.html#how-can-i-add-an-altcoin-to-btcpayserver"}},[t._v("follow the instructions here")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"how-to-add-an-altcoin-to-an-existing-btcpay-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-an-altcoin-to-an-existing-btcpay-deployment"}},[t._v("#")]),t._v(" How to add an altcoin to an existing BTCPay deployment?")]),t._v(" "),o("p",[t._v("If you want to expand the number of coins in your existing BTCPay Server installation, make sure that you have enough storage space on your machine.")]),t._v(" "),o("p",[t._v("In this example, we only have Bitcoin, and we're adding Litecoin to our docker deployment.")]),t._v(" "),o("p",[t._v("The coin structure:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("BTCPAYGEN_CRYPTO1: First supported cryptocurrency (e.g., BTC, LTC. Default: btc)\nBTCPAYGEN_CRYPTO2: Second supported crypto currency (e.g. btc, ltc. Default: (empty))\nBTCPAYGEN_CRYPTON: N'th supported crypto currency where N is 9 at maximum. (eg. btc, ltc. Default: (empty))\n")])])]),o("p",[t._v("To add Litecoin, as your second coin (CRYPTO2) do this :")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('sudo su -\nexport BTCPAYGEN_CRYPTO2="ltc"\n. ./btcpay-setup.sh -i\n')])])]),o("h2",{attrs:{id:"how-to-remove-a-coin-from-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-remove-a-coin-from-btcpay"}},[t._v("#")]),t._v(" How to remove a coin from BTCPay?")]),t._v(" "),o("p",[t._v("In the "),o("a",{attrs:{href:"#how-to-add-an-altcoin-to-an-existing-btcpay-deployment"}},[t._v("example above")]),t._v(" we've added Litecoin as the second coin. To remove a particular coin, use the following command:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('sudo su -\nexport BTCPAYGEN_CRYPTO2=""\n. ./btcpay-setup.sh -i\n')])])]),o("p",[t._v("Where CRYPTO"),o("strong",[t._v("2")]),t._v(" should be replaced with a coin number you wish to remove. If you have an XYZ coin as "),o("code",[t._v("BTCPAYGEN_CRYPTO3")]),t._v(", and you want to remove it, you should use CRYPTO"),o("strong",[t._v("3")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);