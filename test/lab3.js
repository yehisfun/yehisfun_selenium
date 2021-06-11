const URL1 = "https://www.uuu.com.tw"
const URL2 ="https://www.chtti.cht.com.tw/portal/index.jsp"
describe("[1]connect to server using webdriver.io",()=>{
    it("load uuu.com",()=>{
        browser.url(URL1)
        expect(browser).toHaveUrl(URL1);
        expect(browser).toHaveTitle("恆逸教育訓練中心-轉職IT產業、電腦網路資訊技術學習中心");
    })
})

describe("[2]connect to server using webdriver.io",()=>{
    it("load chtti.com",async ()=>{
        browser.url(URL2)
        await expect(browser).toHaveUrl(URL1);
        await expect(browser).toHaveTitle("恆逸教育訓練中心-轉職IT產業、電腦網路資訊技術學習中心");
    })
})
