(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{498:function(e,t,a){e.exports=a.p+"assets/img/BTCPayWallets1.30006326.png"},499:function(e,t,a){e.exports=a.p+"assets/img/BTCPayWallets2.ca829717.png"},500:function(e,t,a){e.exports=a.p+"assets/img/BTCPayWallets3.4164f69c.png"},501:function(e,t,a){e.exports=a.p+"assets/img/BTCPayWallets4.3ef22e6c.png"},502:function(e,t,a){e.exports=a.p+"assets/img/BTCPayWallets5.a83c9fbc.png"},584:function(e,t,a){"use strict";a.r(t);var n=a(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"btcpay-server-wallet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-wallet"}},[e._v("#")]),e._v(" BTCPay Server Wallet")]),e._v(" "),n("p",[e._v("This document explains the features of the internal BTCPay wallet. For frequently asked questions - check the "),n("RouterLink",{attrs:{to:"/FAQ/FAQ-Wallet.html"}},[e._v("Wallets FAQ")])],1),e._v(" "),n("p",[n("em",[e._v("Note: A "),n("a",{attrs:{href:"https://en.bitcoin.it/wiki/Private_key",target:"_blank",rel:"noopener noreferrer"}},[e._v("private key"),n("OutboundLink")],1),e._v(" (xprv) is "),n("strong",[e._v("never")]),e._v(" required for receiving money on-chain to a BTCPay wallet. The software needs a public key (xpubkey) which is a watch-only wallet token. The xpubkey allows BTCPay to generate a new address each time a new invoice is generated. It enables users to observe the wallet balance and transactions without having to share their private key. Exception is "),n("RouterLink",{attrs:{to:"/LightningNetwork.html"}},[e._v("Lightning Network")]),e._v(" which is a hot wallet with keys online.")],1)]),e._v(" "),n("p",[e._v("The on-chain wallet does not generate a private key. Users have to create their own private key externally and import an xpubkey derived from the private key into Store Settings > Derivation scheme.  The public key (xpubkey) can be imported from a compatible hardware wallet or added manually by pasting the key into the field and adding an appropriate suffix. For more information on how to add a derivation scheme to BTCPay, see the "),n("RouterLink",{attrs:{to:"/WalletSetup.html"}},[e._v("Recommended Wallets")]),e._v(". If you're using a "),n("RouterLink",{attrs:{to:"/ThirdPartyHosting.html"}},[e._v("third-party host")]),e._v(" and are asked to provide a private key, it's certainly a scam. Never share your private key with anyone. It's called private for a reason.")],1),e._v(" "),n("p",[e._v("BTCPay's "),n("strong",[e._v("internal")]),e._v(", full-node reliant wallet that can be accessed by clicking "),n("strong",[e._v("Wallets")]),e._v(" from the top menu. The reliance on the user's own full node makes the wallet more private and secure compared to any "),n("a",{attrs:{href:"https://en.bitcoin.it/wiki/Thin_Client_Security#Simplified_Payment_Verification_.28SPV.29",target:"_blank",rel:"noopener noreferrer"}},[e._v("SPV"),n("OutboundLink")],1),e._v(" wallet.")]),e._v(" "),n("p",[e._v("Each store and a cryptocurrency have a separate wallet displayed on the Wallets page. To access a particular wallet, click "),n("strong",[e._v("Manage")]),e._v(".")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(498),alt:"Wallets Page BTCPay"}})]),e._v(" "),n("h2",{attrs:{id:"wallet-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wallet-overview"}},[e._v("#")]),e._v(" Wallet overview")]),e._v(" "),n("p",[e._v("The wallet contains following features:")]),e._v(" "),n("ol",[n("li",[e._v("Transactions")]),e._v(" "),n("li",[e._v("Send")]),e._v(" "),n("li",[e._v("Receive")]),e._v(" "),n("li",[e._v("Re-scan")]),e._v(" "),n("li",[e._v("PSBT")]),e._v(" "),n("li",[e._v("Settings")])]),e._v(" "),n("h3",{attrs:{id:"transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),n("p",[e._v("An overview of the incoming (green), outgoing (red) and unconfirmed (greyed out) transactions displayed together with timestamps and balances, sorted by date. Users can click on the tx ID to preview the transaction on the block explorer.")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(499),alt:"Individual Wallet"}})]),e._v(" "),n("h3",{attrs:{id:"send"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#send"}},[e._v("#")]),e._v(" Send")]),e._v(" "),n("p",[e._v("The Send function allows spending of the funds from the BTCPay wallet.")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(500),alt:"Send from the Wallet"}})]),e._v(" "),n("p",[e._v("To spend the funds, the user is required to "),n("strong",[e._v("sign")]),e._v(" the transaction. Transactions can be signed with:")]),e._v(" "),n("ul",[n("li",[e._v("HD Private key or mnemonic seed")]),e._v(" "),n("li",[e._v("Wallet supporting PSBT")]),e._v(" "),n("li",[e._v("Hardware Wallet (BTCPay Vault)")]),e._v(" "),n("li",[e._v("Hot Wallet")])]),e._v(" "),n("h4",{attrs:{id:"signing-with-hd-private-key-or-mnemonic-seed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-hd-private-key-or-mnemonic-seed"}},[e._v("#")]),e._v(" Signing with HD Private Key or mnemonic seed")]),e._v(" "),n("p",[e._v("Transactions in BTCPay's wallet can be signed with a private key or mnemonic seed. Prior to inputing the private key, make sure to set a proper "),n("code",[e._v("AccountKeyPath")]),e._v(" in Wallet > Settings.")]),e._v(" "),n("h4",{attrs:{id:"signing-with-a-wallet-supporting-psbt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-a-wallet-supporting-psbt"}},[e._v("#")]),e._v(" Signing with a wallet supporting PSBT")]),e._v(" "),n("p",[e._v("PSBT (Partially Signed Bitcoin transaction) is supported and can be signed with PSBT compatible wallet.")]),e._v(" "),n("p",[e._v("Check this tutorial on how to "),n("RouterLink",{attrs:{to:"/ColdCardWallet.html#spending-from-btcpay-server-wallet-with-coldcard-psbt"}},[e._v("sign a transaction with ColdCard Hardware Wallet")]),e._v(" completely air-gaped.")],1),e._v(" "),n("h4",{attrs:{id:"signing-with-hardware-wallets-btcpay-vault"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-hardware-wallets-btcpay-vault"}},[e._v("#")]),e._v(" Signing with Hardware Wallets (BTCPay Vault)")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://blog.btcpayserver.org/btcpay-vault/",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Vault"),n("OutboundLink")],1),e._v(" is a cross-platform desktop application that makes it possible to use a wide range of hardware wallets with the BTCPay Wallet.")]),e._v(" "),n("p",[e._v("Check "),n("RouterLink",{attrs:{to:"/Vault.html"}},[e._v("BTCPay Vault")]),e._v(" documentation for instructions on how to set up and sign with a "),n("a",{attrs:{href:"https://github.com/bitcoin-core/HWI#device-support",target:"_blank",rel:"noopener noreferrer"}},[e._v("compatible hardware wallet"),n("OutboundLink")],1),e._v(".")],1),e._v(" "),n("h4",{attrs:{id:"signing-with-a-hot-wallet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-a-hot-wallet"}},[e._v("#")]),e._v(" Signing with a Hot Wallet")]),e._v(" "),n("p",[e._v('BTCPay Server also allows stores to generate or import a wallet while also storing its private keys. If your store was configured this way, you\'ll have the option available in the "Sign with.." dropdown.')]),e._v(" "),n("p",[n("RouterLink",{attrs:{to:"/HotWallet.html"}},[e._v("Using the hot wallet feature comes with its own security implications, please be sure to read and understand them over at the Hot Wallet documentation.")])],1),e._v(" "),n("h3",{attrs:{id:"receive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#receive"}},[e._v("#")]),e._v(" Receive")]),e._v(" "),n("p",[e._v("Receive tab generates an unused address which can be used to receive payments. The same can be achieved by generating an invoice (Invoices > Create new invoice).")]),e._v(" "),n("h3",{attrs:{id:"advanced-settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advanced-settings"}},[e._v("#")]),e._v(" Advanced Settings")]),e._v(" "),n("h4",{attrs:{id:"make-sure-no-change-utxo-is-created-advanced-mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#make-sure-no-change-utxo-is-created-advanced-mode"}},[e._v("#")]),e._v(" Make sure no change UTXO is created (Advanced mode)")]),e._v(" "),n("p",[e._v("This option is available in the "),n("code",[e._v("Advanced mode")]),e._v(" of the Send page.")]),e._v(" "),n("p",[e._v("It is a privacy enhancing feature which is useful when you send to another of your own wallets or to an exchange. It makes sure that no change UTXO is created by "),n("strong",[e._v("rounding up")]),e._v(" the amount sent.")]),e._v(" "),n("p",[e._v("By default this feature is disabled, so if your wallet has a UTXO of "),n("code",[e._v("1.1 BTC")]),e._v(" and you input an amount equals to "),n("code",[e._v("1.0 BTC")]),e._v(", the resulting transaction will have two outputs "),n("code",[e._v("0.1 BTC")]),e._v(" of change, and "),n("code",[e._v("1.0 BTC")]),e._v(" to your destination.")]),e._v(" "),n("p",[e._v("Blockchain analysis will understand that those "),n("code",[e._v("0.1 BTC")]),e._v(" of change belong to the same entity which controlled "),n("code",[e._v("1.1 BTC")]),e._v(" before, and can track the future purchase you make under the same pattern.")]),e._v(" "),n("p",[e._v("By enabling this feature, BTCPay Server wallet will round up the amount sent to "),n("code",[e._v("1.1 BTC")]),e._v(" such that no change output is sent back to you.")]),e._v(" "),n("p",[e._v("Warning: Despite the fact, in this example, that you entered "),n("code",[e._v("1.0")]),e._v(" in the amount field, the amount that will really be sent to your destination will be "),n("code",[e._v("1.1 BTC")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"re-scan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#re-scan"}},[e._v("#")]),e._v(" Re-scan")]),e._v(" "),n("p",[e._v("The Rescan relies on Bitcoin Core 0.17.0's scantxoutset to scan the current state of the blockchain (called UTXO Set) for coins belonging to the derivation scheme being used.")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(501),alt:"Wallet rescan"}})]),e._v(" "),n("p",[e._v("Wallet re-scan solves two critical problems for BTCPay users:")]),e._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/FAQ/FAQ-Wallet.html#missing-payments-in-my-software-or-hardware-wallet"}},[e._v("Gap limit")])],1),e._v(" "),n("li",[e._v("Importing a previously used wallet")])]),e._v(" "),n("p",[n("strong",[e._v("Gap limit")]),e._v(": Most of the wallets have the gap limit set to 20. This means that if a merchant receives 21 or more consecutive unpaid invoices, those wallets show the incorrect balance and some transactions may not be visible.")]),e._v(" "),n("p",[n("strong",[e._v("Wallet import")]),e._v(": When users add a derivation scheme of a wallet that had transactions in the past (previously used wallet), BTCPay won't be able to show the balance and transactions from the past.")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(502),alt:"Wallet rescan progress"}})]),e._v(" "),n("p",[e._v("Re-scan is a feature that solves both of these problems. Once the scan is complete, BTCPay Server will show the correct balance, along with the past transactions of the wallet.")]),e._v(" "),n("p",[e._v("Wallet re-scan requires access to the full node which means that this function is only available for server owners.")]),e._v(" "),n("p",[e._v("Users who use a third party host should use a newly generated xpub key and also use an external wallet like Electrum which allows them to increase the gap limit.")])])}),[],!1,null,null,null);t.default=s.exports}}]);