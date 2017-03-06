const searchSpec = function (browser, sites, option) {
    describe(`Test: Search`, () => {
        it('THG_Elysium_Search_1 : As a customer, when I type in at least three characters in the search box, the autocomplete menu is displayed.', () => {
            browser.init()
                .setValue('#search-text', 'protein');
            expect(browser.waitForExist('.js-autocomplete-container')).toBe(true);
        }, 3);

    });
};

module.exports = searchSpec;