const URL1 = "https://www.uuu.com.tw"
const URL2 ="https://www.chtti.cht.com.tw/portal/index.jsp"
describe("[1]connect to server using webdriver.io",()=>{
    it("load uuu.com",async ()=>{
        browser.url(URL1)
        await browser.pause(2000)
    })
    it("load chtti.com",async ()=>{
        browser.url(URL2)
        await browser.pause(2000)
    })
})
