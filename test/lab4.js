const URL1 = "https://www.uuu.com.tw/"
const URL2 = "https://www.chtti.cht.com.tw/portal/index.jsp"

describe("[1]connect to server using webdriver.io", () => {
    it("load uuu.com", async () => {
        await browser.url(URL1)
        await expect(browser).toHaveUrl(URL1);
        await expect(browser).toHaveTitle("恆逸教育訓練中心-轉職IT產業、電腦網路資訊技術學習中心");
    })
    it("click button", async () => {
        await browser.maximizeWindow();
        const button1 = await $(".BTN-Alert-Close");
        await button1.click();
        await browser.pause(1000);
    })
    it("scroll right*2", async () => {
        await browser.maximizeWindow();
        const rightButton = await $(".fa.fa-chevron-right")
        await rightButton.click()
        await browser.pause(2000)
        await rightButton.click()
        await browser.pause(2000)
    })
    it("get h1", async () => {
        const h1s = await $$("div.owl-wrapper div.owl-item div.owl-Content >h1")
        h1s.forEach((v,i,a) => {
            console.log(`v.getHTML() is ${v.getHTML()}, type=${v.getHTML()}`)
            v.getHTML().then(result=>{
                console.log(`get h1 index =${i}, content =${result}`)
            })      
        });
    })
    it("check h3 visiable",async ()=>{
        const h3 = await $('h3')
        console.log("**h3=",typeof h3,h3)
        const isDisplayed = await h3.isDisplayed()
        console.log(`h3 isDisplayed?${isDisplayed}`)
        expect(isDisplayed).toBe(true)
    })
    it("check and verify h3",async ()=>{
        const h3 = await $('h3')
        const h3Text = await h3.getText()
        h3.waitForExist();
        console.log("h3=",h3Text)
        expect(h3Text).toEqual("業界實戰的前端互動網頁培訓")
        
        
    })
})


