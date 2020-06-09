(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{532:function(e,t,a){"use strict";a.r(t);var i=a(26),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-the-btcpay-api-for-custom-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-btcpay-api-for-custom-integration"}},[e._v("#")]),e._v(" Using the BTCPay API for Custom Integration")]),e._v(" "),a("p",[e._v("BTCPay implements the same API as Bitpay for creating and managing invoices.")]),e._v(" "),a("p",[e._v("Migrating from BitPay to BTCPay normally is as easy as changing a URL.")]),e._v(" "),a("p",[e._v("While Bitpay only allows one account for one merchant, BTCPay allows a user to manage multiple stores.")]),e._v(" "),a("h1",{attrs:{id:"official-client-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#official-client-libraries"}},[e._v("#")]),e._v(" Official Client Libraries")]),e._v(" "),a("p",[e._v("BTCPay maintains official client libraries for "),a("a",{attrs:{href:"https://github.com/MetacoSA/NBitpayClient",target:"_blank",rel:"noopener noreferrer"}},[e._v("C#"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpay-python",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/btcpayserver/node-btcpay",target:"_blank",rel:"noopener noreferrer"}},[e._v("NodeJS"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("In addition, there are forked repositories of Bitpay's "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-php-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/bitpay/ruby-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby"),a("OutboundLink")],1),e._v(" clients.")]),e._v(" "),a("h1",{attrs:{id:"accessing-the-api-manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-api-manually"}},[e._v("#")]),e._v(" Accessing the API Manually")]),e._v(" "),a("p",[e._v("If not using one of the libraries above, the REST API can be accessed manually.")]),e._v(" "),a("p",[e._v("The authentication mechanism is using "),a("code",[e._v("BitId")]),e._v(".")]),e._v(" "),a("p",[e._v("With "),a("code",[e._v("BitId")]),e._v(", the "),a("code",[e._v("client")]),e._v(" of the API (like an e-commerce plugin) generates a private key, then inform the "),a("code",[e._v("server")]),e._v(" (BTCPay) about the "),a("code",[e._v("public key")]),e._v(".")]),e._v(" "),a("p",[e._v("Every requests to the API sent by the client is signed with the client's "),a("code",[e._v("private key")]),e._v(".")]),e._v(" "),a("p",[e._v("We call "),a("code",[e._v("pairing")]),e._v(" the process to inform BTCPay about your "),a("code",[e._v("public key")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"pairing-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pairing-process"}},[e._v("#")]),e._v(" Pairing process")]),e._v(" "),a("p",[e._v("Your first need to create a new store:")]),e._v(" "),a("ol",[a("li",[e._v("Log in")]),e._v(" "),a("li",[e._v("Go to Stores menu")]),e._v(" "),a("li",[e._v("Click on "),a("code",[e._v("Create a new store")])]),e._v(" "),a("li",[e._v("Enter a friendly name for the store, validate.")])]),e._v(" "),a("p",[e._v("There is two method of "),a("code",[e._v("pairing")]),e._v(", client side pairing and server side pairing.")]),e._v(" "),a("h3",{attrs:{id:"client-side-pairing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-side-pairing"}},[e._v("#")]),e._v(" Client side pairing")]),e._v(" "),a("p",[e._v("With client side pairing, the "),a("code",[e._v("client")]),e._v(" generates a URL from his "),a("code",[e._v("public key")]),e._v(" which a human user can browse to validate the pairing.")]),e._v(" "),a("p",[e._v("Typically the URL looks like "),a("code",[e._v("https://btcpay.example.com/api-access-request?pairingCode=<pairingcode_goes_here>")]),e._v(".")]),e._v(" "),a("p",[e._v("You can find documentation about how to achieve this with "),a("a",{attrs:{href:"https://support.bitpay.com/hc/en-us/articles/115003001183-How-do-I-pair-my-client-and-create-a-token-",target:"_blank",rel:"noopener noreferrer"}},[e._v("this link"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"server-side-pairing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-side-pairing"}},[e._v("#")]),e._v(" Server side pairing")]),e._v(" "),a("p",[e._v("The second way, is to generate your private key via some bitcoin library then:")]),e._v(" "),a("ol",[a("li",[e._v("Go to the store's settings")]),e._v(" "),a("li",[e._v("Click on "),a("code",[e._v("Access tokens")])]),e._v(" "),a("li",[e._v("Click on "),a("code",[e._v("Create new Token")])]),e._v(" "),a("li",[e._v("Select merchant's facade and enter your public key,")]),e._v(" "),a("li",[e._v("Click request pairing")]),e._v(" "),a("li",[e._v("Click on Approve")])]),e._v(" "),a("h2",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),a("p",[e._v("BTCPay Server has an API compatible with Bitpay; changing your e-commerce application from Bitpay to BTCPay should take minimal effort.")]),e._v(" "),a("p",[e._v("You can read the full API documentation "),a("a",{attrs:{href:"https://bitpay.com/api#resource-Invoices",target:"_blank",rel:"noopener noreferrer"}},[e._v("on Bitpay's website"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("There is only one difference: Bitpay only allows one account for one merchant, BTCPay allows a user to manage multiple stores.")]),e._v(" "),a("h2",{attrs:{id:"modal-checkout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modal-checkout"}},[e._v("#")]),e._v(" Modal Checkout")]),e._v(" "),a("p",[e._v("To geneate a pop-up modal experience:")]),e._v(" "),a("ol",[a("li",[e._v("Include the btcpay.js script in your html page")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    <script src ="https://your.btcpay.url/modal/btcpay.js"><\/script>\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Call the invoice API to generate an invoice (example code). This is sample backend code as it contains an auth token that should not be exposed in your front-end.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    const axiosClient = axios.create({\n      baseURL: BTCPAY_URL,\n      timeout: 5000,\n      responseType: \'json\',\n      headers: {\n        \'Content-Type\': \'application/json\',\n        \'Authorization\': BTCPAY_AUTH\n      }\n    });\n\n    const invoiceCreation = {\n      "price": 12345,\n      "currency": "USD",\n      "orderId": "something",\n      "itemDesc": "item description",\n      "notificationUrl": "https://webhook.after.checkout.com/goeshere",\n      "redirectURL": "https://go.here.after.checkout.com"\n    };\n\n    const response = await axiosClient.post("/invoices", invoiceCreation);\n    const invoiceId = response.data.data.id;\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Use the invoiceId to pop up the modal")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("      window.btcpay.showInvoice(invoiceId);\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("You'll often want to do something like refresh the state of your page when the invoice is paid, or note some kind of state before the modal pops up. You can attach event listeners like this:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("      window.btcpay.onModalWillEnter(yourCallbackFunction);\n      window.btcpay.onModalWillLeave(yourCallbackFunction);\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);