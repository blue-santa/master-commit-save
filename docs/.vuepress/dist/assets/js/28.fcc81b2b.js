(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{166:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"util"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#util","aria-hidden":"true"}},[e._v("#")]),e._v(" Util")]),e._v(" "),a("p",[e._v("The following RPC calls interact with the "),a("code",[e._v("komodod")]),e._v(" software, and are made available through the "),a("code",[e._v("komodo-cli")]),e._v(" software.")]),e._v(" "),a("h2",{attrs:{id:"createmultisig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createmultisig","aria-hidden":"true"}},[e._v("#")]),e._v(" createmultisig")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('command:\n\nkomodo-cli createmultisig 2 "[\\"RJnVEQgucK1iwiRjfTZmreXkF49KgTErDn\\",\\"RCVyjn9MQ8Tw6YRJnDcsx67kfsmfUgLdfw\\"]"\n\nresponse:\n\n{\n  "address": "bZjsy6bt2ZdyHV5hfCNL2HsuA4eV63s5u6",\n  "redeemScript": "52210384c0db4f1eaa142a2745742b942f989375dbec32c55310a793225bb5c43cdc9821021f527b7269ab18da85a50b7f45f572e8b017fce476de06cb80a2550ee7d4b11652ae"\n}\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  command:\n\n\tcurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "createmultisig", "params": [2, ["RJnVEQgucK1iwiRjfTZmreXkF49KgTErDn","RCVyjn9MQ8Tw6YRJnDcsx67kfsmfUgLdfw"]] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\n  response:\n\n  {\n    "result": {\n      "address": "bNnKtDC6UuSt5kGJewCQ5b2BhzFK3HTQUV",\n      "redeemScript": "522103ae084021ff011b527c34914d2c40148080c09254dd3c7d1f31f32549b53ccd232103bee23783f726ba81b5977473b172497260d9c261b9ef9f5a9dd51c545c8db0ac52ae"\n    },\n    "error": null,\n    "id": "curltest"\n  }\n')])])]),a("p",[a("strong",[e._v('createmultisig nrequired [ "key", ... ]')])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("createmultisig")]),e._v(" method creates a multi-signature address with "),a("code",[e._v("n")]),e._v(" signature(s) of "),a("code",[e._v("m")]),e._v(" key(s) required. The method returns a json object with the address and redeemScript.")]),e._v(" "),a("h3",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("number_required")]),e._v(" "),a("td",[e._v("(numeric, required)")]),e._v(" "),a("td",[e._v("the number of required signatures out of the "),a("code",[e._v("n")]),e._v(" key(s) or address(es)")])]),e._v(" "),a("tr",[a("td",[e._v('"keys"')]),e._v(" "),a("td",[e._v("(string, required)")]),e._v(" "),a("td",[e._v("a json array of keys which are addresses or hex-encoded public keys")])])])]),e._v(" "),a("pre",[a("code",[e._v("                                         |                             |\n")])]),e._v(" "),a("p",[e._v('[                                            |                             |\n"key"                                        |(string)                     |an address or hex-encoded public key\n,                                            |                             |\n]                                            |                             |')]),e._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[e._v("#")]),e._v(" Response:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("{")]),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v('"address"')]),e._v(" "),a("td",[e._v("(string)")]),e._v(" "),a("td",[e._v("the value of the new multisig address")])]),e._v(" "),a("tr",[a("td",[e._v('"redeemScript"')]),e._v(" "),a("td",[e._v("(string)")]),e._v(" "),a("td",[e._v("the string value of the hex-encoded redemption script")])]),e._v(" "),a("tr",[a("td",[e._v("}")]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h2",{attrs:{id:"estimatefee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimatefee","aria-hidden":"true"}},[e._v("#")]),e._v(" estimatefee")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  command:\n\n\tkomodo-cli estimatefee 6\n\n  response:\n\n  0.00019376\n")])])]),a("p",[a("strong",[e._v("estimatefee nblocks")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("estimatefee")]),e._v(" method estimates the approximate fee per kilobyte. The method is needed for a transaction to begin confirmation within "),a("code",[e._v("nblocks")]),e._v(" blocks.")]),e._v(" "),a("p",[e._v("The value "),a("code",[e._v("-1.0")]),e._v(" is returned if not enough transactions and blocks have been observed to make an estimate.")]),e._v(" "),a("h3",{attrs:{id:"arguments-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("nblocks")]),e._v(" "),a("td",[e._v("(numeric)")]),e._v(" "),a("td",[e._v("the number of blocks within which the fee should be tested")])])])]),e._v(" "),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Response:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("n")]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h2",{attrs:{id:"estimatepriority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimatepriority","aria-hidden":"true"}},[e._v("#")]),e._v(" estimatepriority")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  command:\n\n\tkomodo-cli estimatepriority 6\n\n  response:\n\n")])])]),a("p",[a("strong",[e._v("estimatepriority nblocks")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("estimatepriority")]),e._v(" method estimates the approximate priority of a zero-fee transaction, when it needs to begin confirmation within "),a("code",[e._v("nblocks")]),e._v(" blocks.")]),e._v(" "),a("p",[e._v("The value "),a("code",[e._v("-1.0")]),e._v(" is returned if not enough transactions and blocks have been observed to make an estimate.")]),e._v(" "),a("h3",{attrs:{id:"arguments-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("nblocks")]),e._v(" "),a("td",[e._v("(numeric)")]),e._v(" "),a("td",[e._v("a statement indicating within how many blocks the transaction should be confirmed")])])])]),e._v(" "),a("h3",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Response:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("n")]),e._v(" "),a("td",[e._v("(numeric)")]),e._v(" "),a("td",[e._v("estimated priority")])])])]),e._v(" "),a("h2",{attrs:{id:"invalidateblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invalidateblock","aria-hidden":"true"}},[e._v("#")]),e._v(" invalidateblock")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('command:\n\nkomodo-cli invalidateblock "02f51fb2793b0728050c5e983ffed669594e0a2dda01dcb7a68d129fd87436e0"\n\nresponse:\n\n(none)\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "invalidateblock", "params": ["02f51fb2793b0728050c5e983ffed669594e0a2dda01dcb7a68d129fd87436e0"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresponse:\n\n{\n  "result": null,\n  "error": null,\n  "id": "curltest"\n}\n')])])]),a("p",[a("strong",[e._v('invalidateblock "hash"')])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("invalidateblock")]),e._v(" method permanently marks a block as invalid, as if it violated a consensus rule.")]),e._v(" "),a("h3",{attrs:{id:"arguments-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("hash")]),e._v(" "),a("td",[e._v("(string, required)")]),e._v(" "),a("td",[e._v("the hash of the block to mark as invalid")])])])]),e._v(" "),a("h3",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Response:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("(none)")]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h2",{attrs:{id:"reconsiderblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reconsiderblock","aria-hidden":"true"}},[e._v("#")]),e._v(" reconsiderblock")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  command:\n\n\tkomodo-cli reconsiderblock "02f51fb2793b0728050c5e983ffed669594e0a2dda01dcb7a68d129fd87436e0"\n\n  response:\n\n  (none)\n')])])]),a("p",[a("strong",[e._v('reconsiderblock "hash"')])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("reconsiderblock")]),e._v(" method removes invalidity status of a block and its descendants, reconsidering them for activation. This can be used to undo the effects of invalidateblock.")]),e._v(" "),a("h3",{attrs:{id:"arguments-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("hash")]),e._v(" "),a("td",[e._v("(string, required)")]),e._v(" "),a("td",[e._v("the hash of the block to reconsider")])])])]),e._v(" "),a("h3",{attrs:{id:"response-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Response:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("(none)")]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h2",{attrs:{id:"validateaddress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validateaddress","aria-hidden":"true"}},[e._v("#")]),e._v(" validateaddress")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('command:\n\nkomodo-cli validateaddress "RDNC9mLrN48pVGDQ5jSoPb2nRsUPJ5t2R7"\n\nresponse:\n\n{\n  "isvalid": true,\n  "address": "RDNC9mLrN48pVGDQ5jSoPb2nRsUPJ5t2R7",\n  "scriptPubKey": "76a9142cd2a4e3d1c2738ee4fce61e73ea822dcaacb9b488ac",\n  "segid": 9,\n  "ismine": true,\n  "iswatchonly": false,\n  "isscript": false,\n  "pubkey": "03c376b00b3a2ae43b8bf103a6c6962b241de684383301fe628a460b68a79ac1d8",\n  "iscompressed": true,\n  "account": ""\n}\n')])])]),a("p",[a("strong",[e._v('validateaddress "komodoaddress"')])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("validateaddress")]),e._v(" method returns information about the given address.")]),e._v(" "),a("h3",{attrs:{id:"arguments-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v('"address"')]),e._v(" "),a("td",[e._v("(string, required)")]),e._v(" "),a("td",[e._v("the address to validate")])])])]),e._v(" "),a("h3",{attrs:{id:"response-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Response:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("{")]),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v('"isvalid"')]),e._v(" "),a("td",[e._v("(boolean)")]),e._v(" "),a("td",[e._v("indicates whether the address is valid. If it is not, this is the only property returned.")])]),e._v(" "),a("tr",[a("td",[e._v('"address"')]),e._v(" "),a("td",[e._v("(string)")]),e._v(" "),a("td",[e._v("the address validated")])]),e._v(" "),a("tr",[a("td",[e._v('"scriptPubKey"')]),e._v(" "),a("td",[e._v("(string)")]),e._v(" "),a("td",[e._v("the hex encoded scriptPubKey generated by the address")])]),e._v(" "),a("tr",[a("td",[e._v('"ismine"')]),e._v(" "),a("td",[e._v("(boolean)")]),e._v(" "),a("td",[e._v("indicates whether the address is yours")])]),e._v(" "),a("tr",[a("td",[e._v('"isscript"')]),e._v(" "),a("td",[e._v("(boolean)")]),e._v(" "),a("td",[e._v("whether the key is a script")])]),e._v(" "),a("tr",[a("td",[e._v('"pubkey"')]),e._v(" "),a("td",[e._v("(string)")]),e._v(" "),a("td",[e._v("the hex value of the raw public key")])]),e._v(" "),a("tr",[a("td",[e._v('"iscompressed"')]),e._v(" "),a("td",[e._v("(boolean)")]),e._v(" "),a("td",[e._v("whether the address is compressed")])]),e._v(" "),a("tr",[a("td",[e._v('"account"')]),e._v(" "),a("td",[e._v("(string)")]),e._v(" "),a("td",[e._v('DEPRECATED the account associated with the address; "" is the default account')])]),e._v(" "),a("tr",[a("td",[e._v("}")]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h2",{attrs:{id:"verifymessage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verifymessage","aria-hidden":"true"}},[e._v("#")]),e._v(" verifymessage")]),e._v(" "),a("blockquote",[a("p",[e._v("Create the signature:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('command:\n\nkomodo-cli signmessage "RBtNBJjWKVKPFG4To5Yce9TWWmc2AenzfZ" "my message"\n\nresponse:\n\nH1y0mn/wRv56r1bcfkbQtzjG6XeWSelAsyayBuCwEL9XGXs7ieU55dryt/cFWM9gnRFI7gS01AByuSqRs+o/AZs=\n')])])]),a("blockquote",[a("p",[e._v("Verify the signature:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  command:\n\n\tkomodo-cli verifymessage "RBtNBJjWKVKPFG4To5Yce9TWWmc2AenzfZ" "H1y0mn/wRv56r1bcfkbQtzjG6XeWSelAsyayBuCwEL9XGXs7ieU55dryt/cFWM9gnRFI7gS01AByuSqRs+o/AZs=" "my message"\n\n  response:\n\n  true\n')])])]),a("p",[a("strong",[e._v('verifymessage "address" "signature" "message"')])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("verifymessage")]),e._v(" method verifies a signed message.")]),e._v(" "),a("aside",{staticClass:"notice"},[e._v("\n  See also "),a("b",[e._v("signmessage")]),e._v(".\n")]),e._v(" "),a("h3",{attrs:{id:"arguments-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v('"address"')]),e._v(" "),a("td",[e._v("(string, required)")]),e._v(" "),a("td",[e._v("the address to use for the signature")])]),e._v(" "),a("tr",[a("td",[e._v('"signature"')]),e._v(" "),a("td",[e._v("(string, required)")]),e._v(" "),a("td",[e._v("the signature provided by the signer in base 64 encoding")])]),e._v(" "),a("tr",[a("td",[e._v('"message"')]),e._v(" "),a("td",[e._v("(string, required)")]),e._v(" "),a("td",[e._v("the message that was signed")])])])]),e._v(" "),a("h3",{attrs:{id:"response-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Response:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("true/false")]),e._v(" "),a("td",[e._v("(boolean)")]),e._v(" "),a("td",[e._v("indicates whether the signature is verified")])])])]),e._v(" "),a("h2",{attrs:{id:"z-validateaddress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-validateaddress","aria-hidden":"true"}},[e._v("#")]),e._v(" z_validateaddress")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('command:\n\nkomodo-cli z_validateaddress "zcWsmqT4X2V4jgxbgiCzyrAfRT1vi1F4sn7M5Pkh66izzw8Uk7LBGAH3DtcSMJeUb2pi3W4SQF8LMKkU2cUuVP68yAGcomL"\n\n{\n  "isvalid": true,\n  "address": "ztdChvxs2Z97X7qeBwsnRLbxva1ZVgWhFWZxZTA5bC8XLt9RHF8uXn16MWCU8DhKEt4gTtKqQwzsrk85f5tThWMNoYds2oX",\n  "payingkey": "d9c09cb974fbe0bf7e36a2318b46396c5112511f90749531428936867d83bd92",\n  "transmissionkey": "5ce3250912758cbb591e3d585ef110992f25ed7694b88f55315b060698b75404",\n  "ismine": true\n}\n')])])]),a("p",[a("strong",[e._v('z_validateaddress "zaddr"')])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("z_validateaddress")]),e._v(" method returns information about the given z address.")]),e._v(" "),a("h3",{attrs:{id:"arguments-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-8","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v('"zaddr"')]),e._v(" "),a("td",[e._v("(string, required)")]),e._v(" "),a("td",[e._v("the z address to validate")])])])]),e._v(" "),a("h3",{attrs:{id:"response-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-8","aria-hidden":"true"}},[e._v("#")]),e._v(" Response:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Structure")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("{")]),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v('"isvalid"')]),e._v(" "),a("td",[e._v("(boolean)")]),e._v(" "),a("td",[e._v("indicates whether the address is valid; if not, this is the only property returned")])]),e._v(" "),a("tr",[a("td",[e._v('"address"')]),e._v(" "),a("td",[e._v("(string)")]),e._v(" "),a("td",[e._v("the z address validated")])]),e._v(" "),a("tr",[a("td",[e._v('"ismine"')]),e._v(" "),a("td",[e._v("(boolean)")]),e._v(" "),a("td",[e._v("indicates if the address is yours or not")])]),e._v(" "),a("tr",[a("td",[e._v('"payingkey"')]),e._v(" "),a("td",[e._v("(string)")]),e._v(" "),a("td",[e._v("the hex value of the paying key, a_pk")])]),e._v(" "),a("tr",[a("td",[e._v('"transmissionkey"')]),e._v(" "),a("td",[e._v("(string)")]),e._v(" "),a("td",[e._v("the hex value of the transmission key, pk_enc")])]),e._v(" "),a("tr",[a("td",[e._v("}")]),e._v(" "),a("td"),e._v(" "),a("td")])])])])}],!1,null,null,null);r.options.__file="_335-util.md";t.default=r.exports}}]);