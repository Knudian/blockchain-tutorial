# Installation
For linux system :
```
# Visual Studo Code
wget https://az764295.vo.msecnd.net/stable/0759f77bb8d86658bc935a10a64f6182c5a1eeba/code_1.19.1-1513676564_amd64.deb
cd ~/Downloads
sudo dpkg -i code_1.19.1-1513676564_amd64.deb


#Ethereum and Solidity
sudo add-apt-repository ppa:ethereum/ethereum
sudo add-apt-repository ppa:ethereum/ethereum-dev
sudo apt update
sudo apt-get install software-properties-common ethereum solc

sudo apt upgrade
sudo apt autoremove
```

In VSCode :
`CTRL + P`, then `ext install `, find "Solidity", by Juan Blanco

## Build the contract
```
solc -o target --bin --abi --overwrite <file.sol>
```