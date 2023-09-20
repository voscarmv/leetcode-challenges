/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let c = 0;
    let mails = new Set();
    for(let i = 0; i < emails.length; i++){
        //console.log(emails[i].match(/^[a-zA-Z0-9.][a-zA-Z0-9.+]+@[a-zA-Z0-9]+.com$/));
        if(emails[i].match(/^[a-zA-Z0-9.][a-zA-Z0-9.+]*@[a-zA-Z0-9.+]+\.com$/)){
            let parts = emails[i].split('@');
            mails.add(`${parts[0].split('+')[0].replace(/\./g,'')}@${parts[1]}`);
            // console.log(`email ${emails[i]}`)
            // console.log(`${parts[0].split('+')[0].replace(/\./g,'')}@${parts[1]}`);
        }
    }
    return mails.size;
};