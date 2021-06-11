const URL1 = "https://www.uuu.com.tw"
const URL2 ="https://www.chtti.cht.com.tw/portal/index.jsp"
describe("[1]connect to server using webdriver.io",()=>{
    it("load uuu.com",()=>{
        browser.url(URL1)
    })
})
describe("[2]connect to server using webdriver.io",()=>{
    it("load chtti.com",()=>{
        browser.url(URL2)
    })
})