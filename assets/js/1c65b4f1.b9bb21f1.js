(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[358],{4983:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:3},s="Run a Findora Full Node",d={unversionedId:"general/run-a-validator-node",id:"general/run-a-validator-node",isDocsHomePage:!1,title:"Run a Findora Full Node",description:"For the convenience of the test network, some parameters are different from the main network",source:"@site/docs/general/run-a-validator-node.md",sourceDirName:"general",slug:"/general/run-a-validator-node",permalink:"/findora-wiki/docs/general/run-a-validator-node",editUrl:"https://github.com/FindoraNetwork/findora-wiki/edit/main/docs/general/run-a-validator-node.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run a Findora TestNet Node",permalink:"/findora-wiki/docs/general/run-a-test-node"}},p=[{value:"System requirements",id:"system-requirements",children:[]},{value:"Public Ip ports requirements",id:"public-ip-ports-requirements",children:[]},{value:"network parameters in different environments",id:"network-parameters-in-different-environments",children:[]},{value:"application install",id:"application-install",children:[]},{value:"config bin to env",id:"config-bin-to-env",children:[]},{value:"create config and set config",id:"create-config-and-set-config",children:[]},{value:"start validator",id:"start-validator",children:[]},{value:"set fns tool",id:"set-fns-tool",children:[]},{value:"stake operator",id:"stake-operator",children:[]},{value:"append staking amount",id:"append-staking-amount",children:[]},{value:"unstake",id:"unstake",children:[]},{value:"claim reward",id:"claim-reward",children:[]},{value:"send transfer",id:"send-transfer",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Update",id:"update",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"run-a-findora-full-node"},"Run a Findora Full Node"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For the convenience of the test network, some parameters are different from the main network")),(0,l.kt)("p",null,"Whether you're interested in contributing to Findora, building apps, or joining the validator pool, you'll want the ability to run your own full node."),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Build a full node in your server and connect to the Findora Alpha/Mainnet network.\nAlpha network is for the integration and test only."),(0,l.kt)("h3",{id:"system-requirements"},"System requirements"),(0,l.kt)("h4",{id:"os"},"OS"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Linux(Ubuntu)"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Macos"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","window os")),(0,l.kt)("h3",{id:"public-ip-ports-requirements"},"Public Ip ports requirements"),(0,l.kt)("p",null,"+","[Optional]"," 8667, query server(data cache from ledger)",(0,l.kt)("br",{parentName:"p"}),"\n","+","[Optional]"," 8668, ledger server(data direct from ledger)",(0,l.kt)("br",{parentName:"p"}),"\n","+","[Optional]"," 8669, transaction submission service",(0,l.kt)("br",{parentName:"p"}),"\n","+","[Optional]"," 26657, tendermint rpc service\n+26656, qtendermint p2p network service "),(0,l.kt)("h3",{id:"network-parameters-in-different-environments"},"network parameters in different environments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Project"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Testnet"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Mainnet"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"import block interval"),(0,l.kt)("td",{parentName:"tr",align:"center"},"6s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"16s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Unlock period"),(0,l.kt)("td",{parentName:"tr",align:"center"},"5 * 5s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3600 ",(0,l.kt)("em",{parentName:"td"}," 24 ")," 21s")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Follow the instructions that follow and the script will automatically create a full node and connect to the Findora Network."),(0,l.kt)("h2",{parentName:"blockquote",id:"mainnet-network"},"mainnet network")),(0,l.kt)("h3",{id:"application-install"},"application install"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/tendermint.linux\n\nwget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/abci_validator_node.linux\n\nwget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/fns.linux\n\n### remove suffix\n\nmv tendermint.linux tendermint\nmv abci_validator_node.linux abci_validator_node\nmv fns.linux fns\n\nchmod a+rwx  tendermint\nchmod a+rwx  abci_validator_node\nchmod a+rwx  fns\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macos")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -o tendermint https://github.com/FindoraNetwork/iii/releases/download/fnstest/tendermint.macos\n\ncurl -o abci_validator_node https://github.com/FindoraNetwork/iii/releases/download/fnstest/abci_validator_node.macos\n\ncurl -o fns https://github.com/FindoraNetwork/iii/releases/download/fnstest/fns.macos\n\nchmod a+rwx  tendermint\nchmod a+rwx  abci_validator_node\nchmod a+rwx  fns\n")),(0,l.kt)("p",null,"The three applications above are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tendermint application  "),(0,l.kt)("li",{parentName:"ul"},"findora application "),(0,l.kt)("li",{parentName:"ul"},"fns staking terminal tool ")),(0,l.kt)("h3",{id:"config-bin-to-env"},"config bin to env"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "export PATH=$PATH:$(pwd)" >> ~/.bashrc\nsource ~/.bashrc\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macos")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "export PATH=$PATH:$(pwd)" >> ~/.zshrc\nsource ~/.zshrc\n')),(0,l.kt)("h3",{id:"create-config-and-set-config"},"create config and set config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# clear old data\n rm -rf /tmp/findora ~/.tendermint\n# init tendermint\ntendermint init\n")),(0,l.kt)("p",null,"after init successfully, run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ls  ~/.tendermint/config \n")),(0,l.kt)("p",null,"These files are displayed\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"config.toml   genesis.json   node_key.json  priv_validator_key.json\n")),(0,l.kt)("h3",null," request network params and write  node config"),(0,l.kt)("h4",{id:"install-jq"},"install jq"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install jq\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macos")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo brew install jq\n")),(0,l.kt)("h4",{id:"write-genesis-config"},"write genesis config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\ncurl https://prod-mainnet.prod.findora.org:26657/genesis | jq -c  | perl -pi -e \'s/^{"jsonrpc":"2.0","id":-1,"result":{"genesis"://\' | perl -pi -e \'s/}}$//\'  | jq > ~/.tendermint/config/genesis.json\n')),(0,l.kt)("h4",{id:"write-tendermint-config-and-set--proposal-block-interval-15s"},"write tendermint config and set  proposal block interval 15s"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"perl -pi -e 's#(create_empty_blocks_interval = ).*#$1\"15s\"#' ~/.tendermint/config/config.toml\n\n")),(0,l.kt)("h4",{id:"write-peer-address-and-network"},"write peer address and network"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'perl -pi -e \'s#(persistent_peers = )".*"#$1"b87304454c0a0a0c5ed6c483ac5adc487f3b21f6\\@prod-mainnet-us-west-2-sentry-000-public.prod.findora.org:26656,d0c6e3e1589695ae6d650b288caf2efe9a998a50\\@prod-mainnet-us-west-2-sentry-001-public.prod.findora.org:26656"#\' ~/.tendermint/config/config.toml\n')),(0,l.kt)("h2",null," run node"),(0,l.kt)("h3",{id:"start-validator"},"start validator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"TD_NODE_SELF_ADDR=$(cat ~/.tendermint/config/priv_validator_key.json | grep 'address' | grep -o '[^\"]\\{20,\\}') \\\nLEDGER_DIR=/tmp/findora \\\nENABLE_LEDGER_SERVICE=true \\\nENABLE_QUERY_SERVICE=true \\\nabci_validator_node >/tmp/log 2>&1 &\n")),(0,l.kt)("h4",{id:"check-server-port"},"check server port"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"netstat -ltpn\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macos")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"netstat -AaLlnW\n")),(0,l.kt)("p",null,"show list:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8667",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8668",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8669",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.26658"),(0,l.kt)("p",null,"If any port is missing, the application did not start successfully, please start from the first step"),(0,l.kt)("h4",{id:"start-tendermint-application"},"start tendermint application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nohup tendermint node>/tmp/td.log 2>&1 &\n")),(0,l.kt)("h1",{id:"use-fns-tool"},"use fns tool"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"fns is official offer staking terminal tools")),(0,l.kt)("h3",{id:"set-fns-tool"},"set fns tool"),(0,l.kt)("h4",{id:"set-server-url"},"set server url"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"fns setup -S http://127.0.0.1:8669\n\n")),(0,l.kt)("h4",{id:"set-pay-and-staking-account-mnemonic"},"set pay and staking account mnemonic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"echo '[your private mnemonic]'> $(pwd)/mnemonic\nfns setup -O $(pwd)/mnemonic\n\n")),(0,l.kt)("h4",{id:"acquire-and-set-tendermint--public-key"},"acquire and set tendermint  public key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"echo $(grep -A 2 'pub_key' ~/.tendermint/config/priv_validator_key.json | grep '\"value\":' | grep -o '[^\"]\\+\"$' | sed 's/\"//') > $(pwd)/tendermint_keys\nfns setup -K $(pwd)/tendermint_keys\n")),(0,l.kt)("h3",{id:"stake-operator"},"stake operator"),(0,l.kt)("p",null,"For example, pledge 1000000, because the basic unit is 6 digits, it must be 1000000 n is the pledge amount\nR is the commission rate is the commission that someone entrusts to you, and the commission you get, -M is only for this transaction."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'fns stake -n $((1000000 * 1000000)) -R 0.2 -M "my remark"\n')),(0,l.kt)("p",null,"wait for one minutes\nquery stake result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"fns show\n")),(0,l.kt)("h3",{id:"append-staking-amount"},"append staking amount"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"fns stake -a -n $((1000000 * 1000000))\n\n")),(0,l.kt)("h3",{id:"unstake"},"unstake"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"fns unstake -n $((1000000 * 1000000))\n")),(0,l.kt)("h3",{id:"claim-reward"},"claim reward"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"fns claim -n $((1000000 * 1000000))\n")),(0,l.kt)("h3",{id:"send-transfer"},"send transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'fns transfer -n $((1000000 * 1000000)) -t "fra***********************"\n')),(0,l.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"The image now located in AWS North America so the downloading speed in China will be a little bit slow and sometimes it will have intermittent handshake issues. If the script fails during image download, please run the script again."),(0,l.kt)("h3",{id:"update"},"Update"),(0,l.kt)("p",null,"We will be updating this repo frequently, so please run git pull before you run the code."),(0,l.kt)("p",null,"We will send a notification when the new version release."))}u.isMDXComponent=!0}}]);