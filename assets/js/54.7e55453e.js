(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{548:function(e,t,i){"use strict";i.r(t);var a=i(26),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"btcpay-stores-frequently-asked-questions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-stores-frequently-asked-questions"}},[e._v("#")]),e._v(" BTCPay Stores Frequently Asked Questions.")]),e._v(" "),i("p",[e._v("This page shows common issues and frequently asked questions about Stores in BTCPay.")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#how-to-create-a-store-in-btcpay"}},[e._v("How to create a store in BTCPay?")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#how-many-stores-can-i-create"}},[e._v("How many stores can I create?")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#store-general-settings"}},[e._v("Store General Settings")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#add-network-fee-to-invoice-vary-with-mining-fees"}},[e._v("Add network fee to invoice (vary with mining fees)?")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#allow-anyone-to-create-invoice"}},[e._v("Allow anyone to create invoice?")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#invoice-expires-if-the-full-amount-has-not-been-paid-after--minutes"}},[e._v("Invoice expires if the full amount has not been paid after ... minutes?")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#payment-invalid-if-transactions-fails-to-confirm--minutes-after-invoice-expiration"}},[e._v("Payment invalid if transactions fails to confirm ... minutes after invoice expiration?")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#consider-the-invoice-confirmed-when-the-payment-transaction"}},[e._v("Consider the invoice confirmed when the payment transaction?")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#consider-the-invoice-paid-even-if-the-paid-amount-is---less-than-expected"}},[e._v("Consider the invoice paid even if the paid amount is ... % less than expected?")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#how-to-disable-email-on-invoices"}},[e._v("How to disable email on invoices?")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#can-i-delete-invoices-from-btcpay"}},[e._v("Can I delete invoices from BTCPay?")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#how-to-change-the-exchange-rate-provider-for-invoices"}},[e._v("How to change the exchange rate provider for invoices?")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#getting-getratesasync-was-called-on-coinaverage-error"}},[e._v("Getting GetRatesAsync was called on coinaverage error")])],1)]),e._v(" "),i("h2",{attrs:{id:"how-to-create-a-store-in-btcpay"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-store-in-btcpay"}},[e._v("#")]),e._v(" How to create a store in BTCPay?")]),e._v(" "),i("p",[e._v('To create your first store, go to > Stores from the header menu and click "create a new store."')]),e._v(" "),i("h2",{attrs:{id:"how-many-stores-can-i-create"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-many-stores-can-i-create"}},[e._v("#")]),e._v(" How many stores can I create?")]),e._v(" "),i("p",[e._v("There's no limit on a number of stores you can create in BTCPay.")]),e._v(" "),i("h2",{attrs:{id:"store-general-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#store-general-settings"}},[e._v("#")]),e._v(" Store General Settings")]),e._v(" "),i("p",[e._v("Explanation of features inside Store > General Settings configured on a store-level.")]),e._v(" "),i("h2",{attrs:{id:"add-network-fee-to-invoice-vary-with-mining-fees"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#add-network-fee-to-invoice-vary-with-mining-fees"}},[e._v("#")]),e._v(" Add network fee to invoice (vary with mining fees)?")]),e._v(" "),i("p",[e._v("Network fee (cost) is a feature in BTCPay which protects merchants from customers who pay the invoice partially. When an invoice is paid from many outputs, the fee for a merchant who needs to move those funds later will be higher.")]),e._v(" "),i("p",[e._v("For example, the customer created an invoice for 20$ and paid it partially, paying 1$ 20 times until the invoice is paid fully. Merchant now has a larger transaction which increases the mining cost in case the merchant decides to move those funds later. By default, BTCPay applies an "),i("strong",[e._v("additional network cost")]),e._v(" to the total invoice amount to cover that expense for the merchant.")]),e._v(" "),i("p",[e._v("BTCPay offers several options to customize this protection feature. You can apply a network fee :")]),e._v(" "),i("ul",[i("li",[e._v("Only if the customer makes more than one payment for the invoice (In the above example, if the customer created an invoice for 20$ and paid 1$, total invoice due is now 19$ + the network fee. The network fee is applied "),i("strong",[e._v("after the first payment")]),e._v(")")]),e._v(" "),i("li",[e._v("On every payment (including the first payment, in our example, the total  will be 20$ + network fee right away, even on the first payment)")]),e._v(" "),i("li",[e._v("Never add network fee (disables the network fee entirely)")])]),e._v(" "),i("p",[e._v("The network fee in BTCPay is "),i("strong",[e._v("not the mining fee")]),e._v(". The customers still need to pay for the miner's fee.")]),e._v(" "),i("p",[e._v("The network cost is an optional feature. It's enabled by default, but it's entirely up to a merchant to enable or disable it. The customer sees the \"network cost\" at the checkout when they expand the invoice information.")]),e._v(" "),i("p",[e._v("While it protects from dust transactions, it can also reflect negatively on businesses if not communicated properly. Your customers may have additional questions and may think you're overcharging them.")]),e._v(" "),i("p",[e._v("Please think twice about how this may affect your business and make sure to communicate it to your customers properly inside your store Terms of Service or through other means.")]),e._v(" "),i("h2",{attrs:{id:"allow-anyone-to-create-invoice"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#allow-anyone-to-create-invoice"}},[e._v("#")]),e._v(" Allow anyone to create invoice")]),e._v(" "),i("p",[e._v("You should enable this option if you want to allow the outside world to create invoices in your store. This option is only useful if you're using the payment button or if you are issuing invoices via API or 3rd party HTML website. POS app is pre-authorised and does not need this enabled for a random visitor to open your POS store and create an invoice. If in doubt, don't enable it as you can always enable it if needed.")]),e._v(" "),i("h2",{attrs:{id:"invoice-expires-if-the-full-amount-has-not-been-paid-after-minutes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#invoice-expires-if-the-full-amount-has-not-been-paid-after-minutes"}},[e._v("#")]),e._v(" Invoice expires if the full amount has not been paid after ... minutes")]),e._v(" "),i("p",[e._v('The invoice timer is set to 15 minutes by default. The timer is a protection mechanism against the volatility since it locks the cryptocurrency amount according to the crypto to fiat rates. If the customer does not pay the invoice within the defined period, the invoice is considered expired. The invoice is considered "paid" as soon as the transaction is visible on the blockchain (o-confirmations) but considered "complete" when it reaches the number of confirmations the merchant defined (usually, 1-6). The timer is customizable.')]),e._v(" "),i("h2",{attrs:{id:"payment-invalid-if-transactions-fails-to-confirm-minutes-after-invoice-expiration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#payment-invalid-if-transactions-fails-to-confirm-minutes-after-invoice-expiration"}},[e._v("#")]),e._v(" Payment invalid if transactions fails to confirm ... minutes after invoice expiration")]),e._v(" "),i("p",[e._v('If the customer pays the invoice, but it fails to get the defined number of confirmations within the set period, it is marked as "invalid." The merchant can then decide whether to accept the invoice afterward manually or decline it and require additional payment from the customer. This is an additional protection mechanism against the volatility.')]),e._v(" "),i("h2",{attrs:{id:"consider-the-invoice-confirmed-when-the-payment-transaction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#consider-the-invoice-confirmed-when-the-payment-transaction"}},[e._v("#")]),e._v(" Consider the invoice confirmed when the payment transaction")]),e._v(" "),i("p",[e._v('The invoice is considered "paid," as soon as it\'s visible on the blockchain. When the invoice reaches the defined number of confirmations, it is considered "confirmed." Here you set the minimum amount of confirmations after which the invoice gets the "confirmed" status. The "completed" status is given when the invoice has at least 6 confirmations. Note this only applies to on-chain payments. Invoices paid via the Lightning Network immediately go to a completed state, as their confirmation is instant. In practice, as a merchant, you ship your product as soon as you see the invoice marked as completed or confirmed.')]),e._v(" "),i("h2",{attrs:{id:"consider-the-invoice-paid-even-if-the-paid-amount-is-less-than-expected"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#consider-the-invoice-paid-even-if-the-paid-amount-is-less-than-expected"}},[e._v("#")]),e._v(" Consider the invoice paid even if the paid amount is ... % less than expected")]),e._v(" "),i("p",[e._v('In a situation where a customer uses an exchange wallet to pay directly for an invoice, the exchange takes a small amount of fee. This means that such invoice is not considered fully completed. The invoice gets status "paid partially." If a merchant wants to accept underpaid invoices, you can set the percentage rate here.')]),e._v(" "),i("h2",{attrs:{id:"how-to-disable-email-on-invoices"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-disable-email-on-invoices"}},[e._v("#")]),e._v(" How to disable email on invoices")]),e._v(" "),i("p",[e._v("To disable the email requirement for your store's invoices, go to Stores > Settings > Checkout Experience > uncheck 'Requires a refund email' box.")]),e._v(" "),i("h2",{attrs:{id:"can-i-delete-invoices-from-btcpay"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#can-i-delete-invoices-from-btcpay"}},[e._v("#")]),e._v(" Can I delete invoices from BTCPay?")]),e._v(" "),i("p",[e._v("No, you can't delete invoices in BTCPay. Even if the invoice is expired, invalid, paid (or any other status) you can't delete invoices because they may contain important information. For example, information from the invoice may be needed if the invoice gets paid at a later time. Try "),i("RouterLink",{attrs:{to:"/Invoices.html#invoice-filtering"}},[e._v("filtering invoices")]),e._v(" instead.")],1),e._v(" "),i("h2",{attrs:{id:"how-to-change-the-exchange-rate-provider-for-invoices"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-change-the-exchange-rate-provider-for-invoices"}},[e._v("#")]),e._v(" How to change the exchange rate provider for invoices?")]),e._v(" "),i("p",[e._v("The default fiat to cryptocurreny exchange rate provider used in your BTCPay invoices can be modified by navigating to your Store Settings > Rates > Preferred price source. There are several exchange rate provider options available. Each store may use different settings.")]),e._v(" "),i("h2",{attrs:{id:"getting-getratesasync-was-called-on-coinaverage-error"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#getting-getratesasync-was-called-on-coinaverage-error"}},[e._v("#")]),e._v(" Getting GetRatesAsync was called on coinaverage error")]),e._v(" "),i("p",[e._v("Coinaverage discontinued their free tier API. As a result the following error may appear:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("GetRatesAsync was called on coinaverage when the rate is outdated. It should never happen, let BTCPayServer developers know about this.\n")])])]),i("p",[e._v("The issue can be fixed by "),i("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores.html#how-to-change-the-exchange-rate-provider-for-invoices"}},[e._v("selecting a different rate source provider")]),e._v(" in Stores > Settings > Rates, or by "),i("RouterLink",{attrs:{to:"/FAQ/FAQ-ServerSettings.html#how-to-update-btcpay-server"}},[e._v("updating your BTCPay Server")]),e._v(" if you're running verison 1.0.3.146 or older. The update will automatically replace Coinaverage with CoinGecko.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);