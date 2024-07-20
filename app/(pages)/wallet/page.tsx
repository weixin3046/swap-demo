"use client";
import * as bip39 from "bip39";
import { useState } from "react";
import ethwallet, { hdkey } from "ethereumjs-wallet";

export default function WalletPage() {
  const [words, setWords] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [address, setAddress] = useState("");
  const [key, setKey] = useState("");
  const [ceateLoad, setCreateLoad] = useState(false);
  const [exportKeyLoad, setExportKeyLoad] = useState(false);

  const onCreate = () => {
    const mnemonic = bip39.generateMnemonic();
    setWords(mnemonic);
  };
  const onLogin = async () => {
    const pass = prompt("请输入您的钱包密码");
    if (!pass) return false;
    const mnemonic = bip39.generateMnemonic();
    setWords(mnemonic);
    alert("您的助记词为:" + mnemonic);
    const checkMnemonic = prompt("请输入您的助记词");
    if (mnemonic === checkMnemonic) {
      const seed = await bip39.mnemonicToSeed(inputValue);
      //3.通过hdkey将seed生成HD Wallet
      const hdWallet = hdkey.fromMasterSeed(seed);
      //4.生成钱包中在m/44'/60'/0'/0/i路径的keypair
      // m / purpose' / coin_type' / account' / change / address_index
      // purpose'：用途字段，44表示遵循BIP-44
      // coin_type'：币种字段，例如60表示以太坊，0表示比特币
      // account'：账户索引，用于支持多个账户
      // change：0表示外部链，用于接收地址，1表示内部链，用于找零地址
      // address_index：地址索引，用于生成特定的地址
      const keyPair = hdWallet.derivePath("m/44'/60'/0'/0/0");
      // 获取钱包对象
      const wallet = keyPair.getWallet();
      // 获取钱包地址
      const lowerCaseAddress = wallet.getAddressString();
      setAddress(lowerCaseAddress);
      // 获取私钥
      const prikey = wallet.getPrivateKey().toString("hex");
      setKey(prikey);
      // 获取钱包密码
      setCreateLoad(true);
      const keystore = await wallet.toV3(pass);
      setCreateLoad(false);
      console.log(keystore);
      // 保存钱包信息
      const walletInfo = {
        address: lowerCaseAddress,
        prikey,
        keystore,
        balance: 0,
        mnemonic, // 助记词不应该记录下来仅仅是为了便于演示
      };
      localStorage.setItem("wallet", JSON.stringify(walletInfo));
    }
  };
  const exportKey = async () => {
    const wallet = localStorage.getItem("wallet");
    if (wallet) {
      const pass = prompt("请输入密码") || "";
      let walletObj;
      try {
        setExportKeyLoad(true);
        walletObj = await ethwallet.fromV3(JSON.parse(wallet)?.keystore, pass);
      } catch (error) {
        alert("密码错误");
        return false;
      } finally {
        setExportKeyLoad(false);
      }
      let key = walletObj.getPrivateKey().toString("hex");
      alert(key);
    } else {
      alert("你还没有登录");
    }
  };
  return (
    <div>
      <div className="space-y-4">
        <div>
          <button onClick={onCreate}>创建助记词</button>
          <div>mnemonic: {words}</div>
        </div>
        <div>
          <div>显示你的助记词：{words}</div>
          <div>显示你的钱包地址：{address}</div>
          <div>显示你的钱包私钥：{key}</div>
          <div>{ceateLoad && "loading..."}</div>
          <button onClick={onLogin}>Mnemonic创建钱包</button>
        </div>
        <div>
          <div>{exportKeyLoad && "loading..."}</div>
          <button onClick={exportKey}>导出私钥</button>
        </div>
      </div>
    </div>
  );
}
