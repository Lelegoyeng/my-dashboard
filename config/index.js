const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtldmluIiwiaWF0IjoxNjk1MDkxNjg1fQ.kgkA0xCN1wtyr9IXj5QWNEgv2gFT1Htg23TxfocOnXU';

const configHeader = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};

module.exports = {
    configHeader
}