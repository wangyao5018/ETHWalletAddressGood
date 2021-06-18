    /**
     * @author Wyjson
     * @version 1
     * @date 2021-06-17 15:27
     */

    //引入ethers.js
    var  ethers = require('ethers');
    
    //靓号正则

    // var a0x0 = new RegExp("^0x0","g");// 开头不能是0x0

    var AAAAAA = new RegExp("([\\d])\\1{5,}","g");// 111111或aaaaaa
    var dead = new RegExp("^dead","gi");// 以dead开头

    var AAAA1 = new RegExp("^([\\w])\\1{3,}","gi");// 前4位相同
    var AAAAA2 = new RegExp("([\\w])\\1{4,}$","gi");// 后5位相同

    for(;;){
        //拿到生成的钱包信息
        var wallet = ethers.Wallet.createRandom();

        //获取钱包地址
        var address = wallet.address;

        var isOpen = false;

        if (AAAAAA.exec(address) != null) {
        	isOpen = true;
		    console.log("正则(aaaaaa)")
        }
        if (dead.exec(address.substring(2)) != null) {
        	isOpen = true;
		    console.log("正则(^dead)")
        }
        if (AAAA1.exec(address.substring(2)) != null && AAAAA2.exec(address.substring(2)) != null) {
        	isOpen = true;
		    console.log("正则(AAAA+AAAAA$)")
        }
        if (AAAA1.exec(address.substring(2)) != null) {
        	isOpen = true;
		    console.log("正则(^AAAA)")
        }
        if (AAAAA2.exec(address.substring(2)) != null) {
        	isOpen = true;
		    console.log("正则(AAAAA$)")
        }

        // if (a0x0.exec(address) != null) {
        // 	isOpen = false;
        // }

    	if (isOpen) {
		    console.log(`钱包地址：${address} |【${address.substring(address.length-5)}】`) // 提取后5位高亮

		    //获取钱包的私钥
		    var privateKey = wallet.privateKey;
		    console.log("钱包私钥：",privateKey.substring(2)) // 去掉开头的0x

		    //获取助记词
		    var mnemonic = wallet.mnemonic;
		    console.log("钱包助记词：",mnemonic.phrase)
		    console.log("-------------------------------------------------------------------")
    	}
    }


