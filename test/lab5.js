const URL1 = "https://www.uuu.com.tw/"

describe("[1]connect to server using webdriver.io",()=>{
    it("load uuu.com",async ()=>{
        browser.url(URL1)
        await browser.maximizeWindow();
        await expect(browser).toHaveUrl(URL1);
        await expect(browser).toHaveTitle("恆逸教育訓練中心-轉職IT產業、電腦網路資訊技術學習中心");
    })
    it("click button", async () => {
        //await browser.maximizeWindow();
        const button1 = await $(".BTN-Alert-Close");
        await button1.click();
        //await browser.pause(1000);
    })
    it("click a link", async()=>{
        const link = await $("=原廠介紹")
        await link.click()
        await browser.pause(1000)
        console.log("browser title=", await browser.getTitle())
        await expect(browser).toHaveTitle("恆逸教育訓練中心-原廠授權合作夥伴")
    })
    it("click partial link",async ()=>{
        const link = await $("=轉職培訓")
        await link.click();
        await browser.pause(1000);
        const link2 = await $("*=微軟全方位網站程式");
        await link2.click();
        await browser.pause(1000);
        console.log("browser title=", await browser.getTitle());
        await expect(browser).toHaveTitle("恆逸教育訓練中心-微軟雲端與行動裝置網站程式設計師養成班")

        )
    })
})

