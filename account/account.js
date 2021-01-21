
(function(){
"use strict";
//1 object factory module patren
var createNewAccount = (function(){
    let name;
    let deposit;
    //method will retrieve the account name and deposit entries from the web page
return {
    newAccount: function(){
        name= document.getElementById('accountName').value;
        deposit = document.getElementById('deposit').value;
        return{accname: name, balance: deposit}


}
}
})();
const accountInfoList =[];

    function createAccount(){
        const openAccount = createNewAccount.newAccount();
        accountInfoList.push(openAccount);
        document.getElementById('textArea').value = '';
        for(let acc of accountInfoList) {
            document.getElementById('textArea').value += `Account name: ${acc.accname}, Balance: ${acc.balance}\n`
        }
    }

    window.onload =function() { document.getElementById('btn').onclick = createAccount};
})();
