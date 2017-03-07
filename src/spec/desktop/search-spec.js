describe(`Test: Search`, () => {
    beforeEach(() => {
        browser.url('https://www.myprotein.com/')
            .waitForVisible('#search-text')
    }, 3);

    it('THG_Elysium_Search_1 : As a customer, when I type in at least three characters in the search box, the autocomplete menu is displayed.', () => {
        browser.setValue('#search-text', 'protein');
        expect(browser.waitForExist('.js-autocomplete-container')).toBe(true);
    }, 3);
});

