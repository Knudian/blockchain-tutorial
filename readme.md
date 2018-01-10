# Installation
For linux system :
```bash
# Visual Studo Code
wget https://az764295.vo.msecnd.net/stable/0759f77bb8d86658bc935a10a64f6182c5a1eeba/code_1.19.1-1513676564_amd64.deb
cd ~/Downloads
sudo dpkg -i code_1.19.1-1513676564_amd64.deb


#Ethereum and Solidity
sudo add-apt-repository ppa:ethereum/ethereum
sudo add-apt-repository ppa:ethereum/ethereum-dev
sudo apt update
sudo apt-get install software-properties-common ethereum solc ethminer

sudo apt upgrade
sudo apt autoremove
```

In VSCode :
`CTRL + P`, then `ext install `, find "Solidity", by Juan Blanco

## Build the contract
```bash
solc -o target --bin --abi --overwrite <file.sol>
```

## Creating a simple blockchain
```bash
geth --datadir /path/to/private/ethereum/folder init /path/to/genesis.json
```
### Start a private blockchain instance
```bash
geth --datadir /path/to/private/ethereum/folder --networkid [integer] --rpc --verbosity 1 console
```

### Create an account in the `geth console`
```javascript
personal.newAccount("a password")
```
returns a _hex_ string (a memory address ?)

---

Add `1e18` to the balance of an account :
```json
{...
    "alloc":{
        "0x2036b34d43f13882e84da9e4b136ec313d32dcfa":{
            "balance":"1000000000000000000"
        }
    }
```

---

Transfer all balance from account 1 to account 2
```javascript
primary = eth.accounts[0];
secondary = eth.accounts[1];
balance1 = web3.fromWei(eth.getBalance(primary), "ether");
balance2 = web3.fromWei(eth.getBalance(secondary), "ether");
```

The `fromWei` converts Wei (ethereum transfer units) into Ethereums units.
The `getBalance` returns the balance of the account address given as parameters.